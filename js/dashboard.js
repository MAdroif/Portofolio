// ============== DATA ==============
/* Nanti bagian ini diganti dengan fetch dari API
contoh: const data = await fetch('/api/dashboard/sales') */
const DataFetching = {
  async fetchSalesData() {
    const response = await fetch('asset/chart.json');
    if (!response.ok) {
        throw new Error(`HTTP Sales error! status: ${response.status}`)
      }
    return response.json();
  },
  
  async fetchDealsData() {
    const response = await fetch('asset/deals.json');
    if (!response.ok) {
        throw new Error(`HTTP Deals error! status: ${response.status}`)
      }
    return response.json();
  },
  
  async fetchTasksData() {
    const response = await fetch('asset/tasks.json');
    if (!response.ok) {
        throw new Error(`HTTP Tasks error! status: ${response.status}`)
      }
    return response.json();
  },
  
  async loadAllData() {
    try {
      const [sales, deals, tasks] = await Promise.all([
        this.fetchSalesData(),
        this.fetchDealsData(),
        this.fetchTasksData()
      ]);
      
      if (!sales || !deals || !tasks) {
        throw new Error('Ada data yang gagal dimua');
      }
      
      return { sales, deals, tasks };
    } catch (error) {
      return this.getFallbackData();
      throw new Error(`Gagal mengambil data: ${error.message}`);
    }
  },
  
  // Fallback Data
  getFallbackData() {
    return {
      "labels": ["Lead", "Qualified", "Proposal", "Won", "Lost"],
      "values": [190, 140, 105, 75, 45],
      "colors": ["#4361ee", "#2196F3", "#FF9800", "#4CAf50", "#F44336"]
    };
  }
};

// ============== RENDER FUNCTION ==============
const Rendering = {
  renderSalesChart(data) {
    const canvas =  document.getElementById('salesChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.labels,
        datasets: [{
          data: data.values,
          backgroundColor: data.colors,
          borderRadius: 6,
          borderSkipped: false,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false},
          tooltip: {
            callbacks: {
              label: (item) => ` ${item.raw} deals`
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: { color: '#f1f5f9' },
            ticks: { font: { size: 11 } }
          },
          x: {
            grid: { display: false },
            ticks: { font: { size: 11 } }
          }
        }
      }
    });
  },
  
  renderRecentDeals() {
    const tbody = document.getElementById('recentDealsBody');
    if (!tbody) return;
    const recent = deals.slice(0, 3);
    tbody.innerHTML = '';
    recent.forEach(deal => {
      tbody.innerHTML += `
        <tr>
          <td>${deal.title}</td>
          <td>${deal.name}</td>
          <td><span class="badge stage-${deal.stage}">${deal.stage}</span></td>
        </tr>
      `;
    });
  },
  
  renderUpcomingTasks(tasks) {
    const list = document.getElementById('upcomingTasksList');
    if (!list) return;
    const upcoming = tasks.filter(t => t.status === 'pending').slice(0, 3);
    list.innerHTML = '';
    upcoming.forEach(task => {
      list.innerHTML += `
        <li>
          <input type="checkbox">
          <div>
            <p>${task.title}</p>
            <p>Due: ${task.dueDate}</p>
          </div>
        </li>
      `;
    });
  }
};

// ============== INIT ==============
const init = {
  async initDashboard() {
    try {
      this.showLoading();
    
      const data = await DataFetching.loadAllData();
      Rendering.renderSalesChart(data.sales);
      Rendering.renderRecentDeals(data.deals);
      Rendering.renderUpcomingTasks(data.tasks);
     
      this.hideLoading();
    } catch (error) {
      console.error('Dashboard error:', error);
      this.showErrorMessage('Gagal memuat data dashboard');
    }
  },
  
  showLoading() {
    const container = document.getElementById('salesChartContainer');
    if (container && !document.querySelector('.loading')) {
      const loadingDiv = document.createElement('div');
      loadingDiv.className = 'loading';
      loadingDiv.textContent = 'Memuat data...';
      container.appendChild(loadingDiv);
    }
  },
  
  hideLoading() {
    const loadingEl = document.querySelector('.loading');
    if (loadingEl) loadingEl.remove();
  },
  
  showErrorMessage(message) {
    const container = document.getElementById('salesChartContainer');
    if (container) {
      container.innerHTML = `<div class="error-message">${message}</div>`;
    }
  }
};


document.addEventListener('DOMContentLoaded', () => init.initDashboard());