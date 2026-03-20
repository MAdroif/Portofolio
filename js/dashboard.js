let chartInstance = null;


// ============== DATA ==============
/* Nanti bagian ini diganti dengan fetch dari API
contoh: const data = await fetch('/api/dashboard/sales') */
const DataFetching = {
  async fetchSalesData() {

    const pathToTry = [
      'asset/chart.json',
      'chart.json',
      './chart.json',
      '/asset/chart.json'
    ];

    for (const path of parthToTry) {
      try {
        const response = await fetch(path);
        
        if (response.ok) {
          const data = await response.json();
          alert(`Data ditemukan di: ${path}`);
          return data;
        }
        // const data = await response.json();
  
        // let pesan = '✅ Data berhasil di-load:\n\n';
        // data.labels.forEach((label, index) => {
        //   pesan += `${index+1}. ${label}: ${data.values[index]} deals\n`;
        // });
        // alert(`Pengambilan data berhasil: ${pesan}`);
        // return data;
      } catch (e) {
        alert(`Gagal di: ${path}`);
        console.error('Fetch error:', error);
      }
    }

    alert('Menggunakan data fallback');
    return this.getFallbackData();
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

  if (chartInstance) {
    chartInstance.destroy();
  }
  
  chartInstance = new Chart(ctx, {
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
     
    } catch (error) {
      console.error('Dashboard error:', error);
      this.showErrorMessage('Gagal memuat data dashboard');
    } finally {
      this.hideLoading();
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
