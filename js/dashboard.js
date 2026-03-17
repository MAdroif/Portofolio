// ============== DATA ==============
/* Nanti bagian ini diganti dengan fetch dari API
contoh: const data = await fetch('/api/dashboard/sales') */
const DataFetching = {
  async fetchSalesData() {
    try {
      const response = await fetch('/asset/chart.json');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json();

      let pesan = '✅ Data berhasil di-load:\n\n';
      data.labels.forEach((label, index) => {
        pesan += `${index+1}. ${label}: ${data.values[index]} deals\n`;
      });
      alert(`Pengambilan data berhasil: ${pesan}`);
      return data;
    } catch (error) {
      alert(`Gagal mengambil data: ${error.message}`);
      console.error('Fetch error:', error);
      return this.getFallbackData();
    }
  },
  
  getFallbackData() {
    return {
      "labels": ["Lead", "Qualified", "Proposal", "Won", "Lost"],
      "values": [170, 140, 105, 75, 45],
      "colors": ["#4361ee", "#2196F3", "#FF9800", "#4CAf50", "#F44336"]
    };
  }
};

// ============== RENDER FUNCTION ==============
function renderSalesChart(data) {
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
}

// ============== INIT ==============
const init = {
  async initDashboard() {
    try {
      this.showLoading();
    
      const data = await DataFetching.fetchSalesData();
      renderSalesChart(data);
     
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
