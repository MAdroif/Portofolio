/* ================== PENGECEKAN SESSION ================== */
if (sessionStorage.getItem('isLoggedIn') !== 'true' && !window.location.pathname.includes('login')) {
  window.location.href = 'index.html';
}

/* ================== SIDEBAR MODULE ================== */
const Sidebar = {
  init() {
    const toggleBtn = document.getElementById('toggleSidebarBtn');
    if (!toggleBtn) return; // exit jika tidak ada sidebar contoh login page
    
    const sidebar = document.querySelector('.sidebar');
    const chevron = toggleBtn.querySelector('i');
    
    // Restore state
    const isCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
    if (isCollapsed) {
      sidebar.classList.add('collapsed');
    }
    
    // Event Listener
    sidebar.addEventListener('click', function() {
      const isInteractiveElement = event.target.closest('a, input');
    
      if (!isInteractiveElement) {
        const isCollapsed =
        !sidebar.classList.contains('collapsed');
        sidebar.classList.toggle('collapsed');
      
        if (sidebar.classList.contains('collapsed')) {
          localStorage.setItem('sidebarCollapsed', 'true');
        } else {
          localStorage.setItem('sidebarCollapsed', 'false');
        }
      }
      
    });
  }
};

/* ========== ACTIVE NAV HIGHLIGHT ========== */
const Navigation = {
  init() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname;
    
    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.closest('.nav-item').classList.add('active');
      }
    });
  }
};

/* ========== UTILITY FUNCTIONS ========== */
const Utils = {
  // Format number dengan koma
  formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },
  
  // Debounce function
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }
};

const Notification = {
  data: [
    {
      "id": 1,
      "message": "New deal closed with ABC Corporation",
      "read": false,
      "timestamp": "2 jam yang lalu"
    },
    {
      "id": 2,
      "message": "Task deadline approaching in 2 hours",
      "read": true,
      "timestamp": "03.00"
    },
    {
      "id": 3,
      "message": "Meeting scheduled for tomorrow at 10 AM",
      "read": false,
      "timestamp": "10.12"
    },
    {
      "id": 4,
      "message": "Your report has been approved",
      "read": true,
      "timestamp": "9.30"
    },
    {
      "id": 5,
      "message": "New comment on your project",
      "read": false,
      "timestamp": "5.20"
    },
    {
      "id": 6,
      "message": "Budget request submitted successfully",
      "read": true,
      "timestamp": "8.20"
    },
    {
      "id": 7,
      "message": "System maintenance scheduled for tonight",
      "read": false,
      "timestamp": "12.00"
    },
    {
      "id": 8,
      "message": "Team member mentioned you in a discussion",
      "read": false,
      "timestamp": "14.00"
    }
  ],
  elements: {},
  
  async init() {
    this.cacheElements();
    await this.loadData();
    this.setupToggle();
    this.setupMarking();
    this.render();
  },
  
  cacheElements() {
    // Simpan reference ke DOM elements yang sering di pakai
    this.elements.btn = document.querySelector('.notification-btn');
    this.elements.card = document.querySelector('.notification-card');
    this.elements.list = document.querySelector('.notification-list');
  },
  
  // async loadData() {
  //   const saved = localStorage.getItem('notifications');
  //   if (saved) {
  //     try {
  //       this.data = JSON.parse(saved);
  //       return;
  //     } catch (error) {
  //       console.error('Error parsing saved data:', error);
  //     }
  //   }
    
  //   try {
  //     const response = await fetch('https://api.jsonbin.io/v3/qs/69946d8bae596e708f31b8ed');
      
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }
      
  //     const jsonData = await response.json();
      
  //     this.data = jsonData;
      
  //   } catch (error) {
  //     console.error('Error loading data:', error);
  //     this.error = error.message;
  //   }
  // },
  async loadData() {
    const saved = localStorage.getItem('notifications');
    if (saved) {
      try {
        this.data = JSON.parse(saved);
      } catch (error) {
        this.data = this.data;
      }
    }
  },
  
  setupToggle() {
    if (!this.elements.btn || !this.elements.card) return;
    
    this.elements.btn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.elements.card.classList.toggle('show');
    });
    
    document.addEventListener('click', (e) => {
      if (!this.elements.btn.contains(e.target) && !this.elements.card.contains(e.target)) {
        this.elements.card.classList.remove('show');
      }
    });
  },
  
  setupMarking() {
    if (!this.elements.list) return;
    
    this.elements.list.addEventListener('click', (e) => {
      const clickedItem = e.target.closest('.notif-item');
      if (clickedItem) {
        const notificationId  = clickedItem.dataset.id;
        if (notificationId) {
          this.marking(notificationId);
        }
      }
    });
  },
  
  marking(id) {
    const notification = this.data.find(n => n.id === parseInt(id));
    if (notification && !notification.read) {
      notification.read = true;
      this.render();
      this.saveNotifData();
    }
  },
  
  saveNotifData() {
    localStorage.setItem('notifications', JSON.stringify(this.data));
  },
  
  loadNotifData() {
    const saved = localStorage.getItem('notifications');
    if (saved) {
      this.data = JSON.parse(saved);
      return;
    }
  },
  
  render() {
    if (!this.elements.list) return;
    
    if (this.error) {
      this.elements.list.innerHTML = `<div class="notification-error">Error:
      ${this.error}</div>`;
      return;
    }
    
    if (this.data.length === 0) {
      this.elements.list.innerHTML = `<div class="notification-empty">Tidak ada
      notifikasi</div>`;
      return;
    }
    
    const html = this.data.map(notification => {
      return this.createNotificationHTML(notification);
    }).join('');
    
    this.elements.list.innerHTML = html;
    
    this.updateCounter();
  },
  
  createNotificationHTML(notification) {
    const unreadClass = notification.read ? '' : 'unread';
    const dotHTML = notification.read ? '' : '<span class="notif-indicator"></span>';
    
    return `
      <li class="notif-item ${unreadClass}" data-id="${notification.id}">
        ${dotHTML}
        <span class="notif-message">${notification.message}</span>
        <time class="notif-timestamp">${notification.timestamp}</time>
      </li>
    `;
  },
  
  updateCounter() {
    const unreadCount = this.data.filter(n => !n.read).length;
    
    const badge = document.querySelector('.notif-badge')
    
    if (badge) {
      badge.textContent = unreadCount;
      
      if (unreadCount === 0) {
        badge.style.display = 'none';
      } else {
        badge.style.display = 'inline-block';
      }
    }
  }
};

const Logout = {
  init() {
    const menuBtn = document.getElementById('userMenuBtn');
    const dropdown = document.getElementById('userDropdown');

    if (menuBtn && dropdown) {
      menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('show');
      });

      document.addEventListener('click', () => {
        dropdown.classList.remove('show');
      });
    }

    const btns = document.querySelectorAll('.btn-logout');
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        sessionStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('userEmail');
        window.location.href = 'index.html';
      });
    });
  }
};

/* ================== INITIALIZATION ================== */
document.addEventListener('DOMContentLoaded', async function() {
  Sidebar.init();
  Navigation.init();
  await Notification.init();
  Logout.init();
});
