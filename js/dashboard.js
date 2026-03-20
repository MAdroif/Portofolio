// ============== DATA ==============
/* Nanti bagian ini diganti dengan fetch dari API
contoh: const data = await fetch('/api/dashboard/sales') */
const SalesData = {
  labels: ['Lead', 'Qualified', 'Proposal', 'Won', 'Lost'],
  values: [190, 140, 105, 75, 45],
  colors: [
    '#4361ee',
    '#2196F3',
    '#FF9800',
    '#4CAf50',
    '#9C27B0',
    '#F44336'
  ]
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
function initDashboard() {
  renderSalesChart(SalesData);
}

document.addEventListener('DOMContentLoaded', initDashboard);