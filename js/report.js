// Sales Performance Chart
    const salesCtx = document.getElementById('salesPerfChart').getContext('2d');
    new Chart(salesCtx, {
      type: 'bar',
      data: {
        labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [
          {
            label: 'Revenue',
            data: [10, 35, 40, 60, 70, 80, 110],
            backgroundColor: '#3b82f6',
            borderRadius: 4,
            order: 2
          },
          {
            label: 'Trend',
            data: [10, 25, 38, 52, 65, 80, 110],
            type: 'line',
            borderColor: '#10b981',
            backgroundColor: 'transparent',
            borderWidth: 2,
            pointRadius: 0,
            tension: 0.4,
            order: 1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'bottom', labels: { boxWidth: 12, font: { size: 11 } } } },
        scales: {
          y: {
            beginAtZero: true,
            grid: { color: '#f1f5f9' },
            ticks: { font: { size: 10 }, callback: v => 'Rp ' + (v * 1000000).toLocaleString('id') }
          },
          x: { grid: { display: false }, ticks: { font: { size: 11 } } }
        }
      }
    });

    // Deals by Source Pie Chart
    const pieCtx = document.getElementById('dealSourceChart').getContext('2d');
    new Chart(pieCtx, {
      type: 'doughnut',
      data: {
        labels: ['Website', 'Referral', 'Email', 'Cold Call'],
        datasets: [{
          data: [35, 25, 20, 20],
          backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'],
          borderWidth: 0,
          hoverOffset: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        cutout: '60%'
      }
    });