// ============== DATA ==============
/* Nanti bagian ini diganti dengan fetch dari API
contoh: const data = await fetch('/api/dashboard/sales') */
const DataFetching = {
  async fetchSalesData() {
    try {
      const response = await fetch('../asset/chart.json');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      alert(`Gagal mengambil data: ${error.message || error}`);
      return this.getFallbackData();
    }
  },
  
  getFallbackData() {
    return {
      "labels": ["Lead", "Qualified", "Proposal", "Won", "Lost"],
      "values": [190, 140, 105, 75, 45],
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
      showingLoading();
    
     const data = await DataFetching.fetchSalesData();
     renderSalesChart(data);
     
     hideLoading();
    } catch (error) {
      alert(`Error initializing dashboard: ${error.message || error}`);
      showErrorMessage('Gagal memuat data dashboard');
    }
  },
  
  showingLoading() {
    const container = document.getElementById('salesChartContainer');
    if (container) {
      container.innerHTML += `<div class="loading">Memuat data...</div>`;
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
