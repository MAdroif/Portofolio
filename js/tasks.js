/* ==================== DATABASE ==================== */
const TaskDatabase = {
  // data: [
  //   {
  //     id: 1,
  //     title: "Call Mr. Andi",
  //     relatedType: "contact",
  //     relatedName: "Andi Wijaya",
  //     relatedCompany: null,
  //     dueDate: "2024-04-22",
  //     isToday: true,
  //     status: "pending"
  //   },
  //   {
  //     id: 2,
  //     title: "Follow Up Meeting with Sari",
  //     relatedType: "contact",
  //     relatedName: "Sari Lestari",
  //     relatedCompany: null,
  //     dueDate: "2024-04-26",
  //     isToday: false,
  //     status: "pending"
  //   },
  //   {
  //     id: 3,
  //     title: "Email Proposal to PT Sukses",
  //     relatedType: "deal",
  //     relatedName: "Software License",
  //     relatedCompany: "PT Sukses Sejahtera",
  //     dueDate: "2024-04-25",
  //     isToday: false,
  //     status: "pending"
  //   },
  //   {
  //     id: 4,
  //     title: "Follow Up on CRM Implementation",
  //     relatedType: "deal",
  //     relatedName: "CRM Implementation",
  //     relatedCompany: "PT Globalindo",
  //     dueDate: "2024-04-30",
  //     isToday: false,
  //     status: "pending"
  //   },
  //   {
  //     id: 5,
  //     title: "Send Invoice to Toko Jaya",
  //     relatedType: "deal",
  //     relatedName: "POS System",
  //     relatedCompany: "Toko Makmur",
  //     dueDate: "2024-04-19",
  //     isToday: false,
  //     status: "overdue"
  //   },
  //   {
  //     id: 6,
  //     title: "Schedule Demo for PT Anugrah",
  //     relatedType: "contact",
  //     relatedName: "Joko Prabowo",
  //     relatedCompany: "Joko Prabowo",
  //     dueDate: "2024-04-18",
  //     isToday: false,
  //     status: "overdue"
  //   },
  //   {
  //     id: 7,
  //     title: "Meeting with PT Daya Pro",
  //     relatedType: "deal",
  //     relatedName: "Cloud Solution",
  //     relatedCompany: "PT Daya Pro",
  //     dueDate: "2024-04-15",
  //     isToday: false,
  //     status: "completed"
  //   },
  //   {
  //     id: 8,
  //     title: "Send Contract to CV Mitra",
  //     relatedType: "deal",
  //     relatedName: "HR System",
  //     relatedCompany: "CV Mitra Mandiri",
  //     dueDate: "2024-04-28",
  //     isToday: false,
  //     status: "pending"
  //   },
  //   {
  //     id: 9,
  //     title: "Call Dewi Anggraini",
  //     relatedType: "contact",
  //     relatedName: "Dewi Anggraini",
  //     relatedCompany: null,
  //     dueDate: "2024-04-27",
  //     isToday: false,
  //     status: "pending"
  //   },
  //   {
  //     id: 10,
  //     title: "Present Proposal to PT Omega",
  //     relatedType: "deal",
  //     relatedName: "ERP Integration",
  //     relatedCompany: "PT Omega Teknologi",
  //     dueDate: "2024-05-02",
  //     isToday: false,
  //     status: "pending"
  //   },
  //   {
  //     id: 11,
  //     title: "Follow Up Quotation to UD Berkarya",
  //     relatedType: "deal",
  //     relatedName: "Inventory System",
  //     relatedCompany: "UD Berkarya",
  //     dueDate: "2024-04-17",
  //     isToday: false,
  //     status: "overdue"
      
  //   },
  //   {
  //     id: 12,
  //     title: "WhatsApp Fajar Nugroho",
  //     relatedType: "contact",
  //     relatedName: "Fajar Nugroho",
  //     relatedCompany: null,
  //     dueDate: "2024-04-16",
  //     isToday: false,
  //     status: "overdue"
  //   },
  //   {
  //     id: 13,
  //     title: "Send Product Catalog to PT Karya Prima",
  //     relatedType: "deal",
  //     relatedName: "E-Commerce Platform",
  //     relatedCompany: "PT Karya Prima",
  //     dueDate: "2024-04-14",
  //     isToday: false,
  //     status: "completed"
  //   },
  //   {
  //     id: 14,
  //     title: "Demo Sistem ke Hendra Kurniawan",
  //     relatedType: "contact",
  //     relatedName: "Hendra Kurniawan",
  //     relatedCompany: null,
  //     dueDate: "2024-04-13",
  //     isToday: false,
  //     status: "completed"
  //   },
  //   {
  //     id: 15,
  //     title: "Renewal Discussion with PT Sejahtera",
  //     relatedType: "deal",
  //     relatedName: "Software License",
  //     relatedCompany: "PT Sejahtera Abadi",
  //     dueDate: "2024-05-05",
  //     isToday: false,
  //     status: "pending"
  //   },
  //   {
  //     id: 16,
  //     title: "Send MOU Draft to UD Cahaya Baru",
  //     relatedType: "deal",
  //     relatedName: "Accounting System",
  //     relatedCompany: "UD Cahaya Baru",
  //     dueDate: "2024-04-20",
  //     isToday: false,
  //     status: "overdue"
  //   },
  //   {
  //     id: 17,
  //     title: "Follow Up Trial to Agus Setiawan",
  //     relatedType: "contact",
  //     relatedName: "Agus Setiawan",
  //     relatedCompany: null,
  //     dueDate: "2024-05-01",
  //     isToday: false,
  //     status: "pending"
  //   },
  //   {
  //     id: 18,
  //     title: "Onboarding Meeting with CV Delta",
  //     relatedType: "deal",
  //     relatedName: "CRM Starter",
  //     relatedCompany: "CV Delta Persada",
  //     dueDate: "2024-04-12",
  //     isToday: false,
  //     status: "completed"
  //   },
  //   {
  //     id: 19,
  //     title: "Send NDA to PT Graha Sentosa",
  //     relatedType: "deal",
  //     relatedName: "Cloud Migration",
  //     relatedCompany: "PT Graha Sentosa",
  //     dueDate: "2024-04-29",
  //     isToday: false,
  //     status: "pending"
  //   },
  //   {
  //     id: 20,
  //     title: "Call Taufik Hidayat",
  //     relatedType: "contact",
  //     relatedName: "Taufik Hidayat",
  //     relatedCompany: null,
  //     dueDate: "2024-04-21",
  //     isToday: false,
  //     status: "overdue"
  //   },
  //   {
  //     id: 21,
  //     title: "Price Negotiation with PT Nusantara",
  //     relatedType: "deal",
  //     relatedName: "Digital Infra",
  //     relatedCompany: "PT Nusantara Digital",
  //     dueDate: "2024-04-11",
  //     isToday: false,
  //     status: "completed"
  //   },
  //   {
  //     id: 22,
  //     title: "Send Proposal to Nanda Permata",
  //     relatedType: "contact",
  //     relatedName: "Nanda Permata",
  //     relatedCompany: null,
  //     dueDate: "2024-05-03",
  //     isToday: false,
  //     status: "pending"
  //   },
  //   {
  //     id: 23,
  //     title: "Demo ERP ke CV Bintang Terang",
  //     relatedType: "deal",
  //     relatedName: "ERP Lite",
  //     relatedCompany: "CV Bintang Terang",
  //     dueDate: "2024-04-10",
  //     isToday: false,
  //     status: "completed"
  //   },
  //   {
  //     id: 24,
  //     title: "Discuss Support Package with Surya Wijaksono",
  //     relatedType: "contact",
  //     relatedName: "Surya Wijaksono",
  //     relatedCompany: null,
  //     dueDate: "2024-05-06",
  //     isToday: false,
  //     status: "pending"
  //   },
  //   {
  //     id: 25,
  //     title: "Follow Up Payment to PT Lumina",
  //     relatedType: "deal",
  //     relatedName: "Design System",
  //     relatedCompany: "PT Lumina Creativa",
  //     dueDate: "2024-04-23",
  //     isToday: false,
  //     status: "overdue"
  //   },
  //   {
  //     id: 26,
  //     title: "Kirim Revisi Kontrak ke UD Permata",
  //     relatedType: "deal",
  //     relatedName: "POS Premium",
  //     relatedCompany: "UD Permata Indah",
  //     dueDate: "2024-05-07",
  //     isToday: false,
  //     status: "pending"
  //   },
  //   {
  //     id: 27,
  //     title: "Check In with Lia Handayani",
  //     relatedType: "contact",
  //     relatedName: "Lia Handayani",
  //     relatedCompany: null,
  //     dueDate: "2024-04-09",
  //     isToday: false,
  //     status: "completed"
  //   },
  //   {
  //     id: 28,
  //     title: "Send Training Schedule to PT Makmur",
  //     relatedType: "deal",
  //     relatedName: "ERP Enterprise",
  //     relatedCompany: "PT Makmur Jaya",
  //     dueDate: "2024-04-24",
  //     isToday: false,
  //     status: "overdue"
  //   },
  //   {
  //     id: 29,
  //     title: "Review SLA with CV Handayani Group",
  //     relatedType: "deal",
  //     relatedName: "Managed IT",
  //     relatedCompany: "CV Handayani Group",
  //     dueDate: "2024-05-08",
  //     isToday: false,
  //     status: "pending"
  //   },
  //   {
  //     id: 30,
  //     title: "Closing Meeting with PT Surya Cemerlang",
  //     relatedType: "deal",
  //     relatedName: "Cloud ERP",
  //     relatedCompany: "PT Surya Cemerlang",
  //     dueDate: "2024-04-08",
  //     isToday: false,
  //     status: "completed"
  //   },
  // ],
  
  state: {
    search: '',
    relatedTo: '',
    status: '',
    tab: 'all',
    page: 1,
    perPage: 7
  },
  
  async loadData() {
    TaskDOM.tbody.innerHTML = `<tr><td colspan="6">Loading tasks...</td></tr>`;
    try {
      const response = await fetch('/asset/tasks.json');
      
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      
      this.data = await response.json();
    } catch (e) {
      TaskDOM.tbody.innerHTML = `<tr><td colspan="6" class="empty-state">Gagal load data</td></tr>`;
    }
  }
};

/* ==================== DOM ELEMENT ==================== */
const TaskDOM = {
  tbody: document.getElementById('taskTableBody'),
  searchInput: document.getElementById('searchInput'),
  filterRelated: document.getElementById('filterRelated'),
  filterStatus: document.getElementById('filterStatus'),
  btnClearFilter: document.getElementById('btnClearFilter'),
  btnAddTask: document.getElementById('btnAddTask'),
  paginationNav: document.getElementById('paginationNav'),
  paginationInfo: document.getElementById('paginationInfo'),
  tabs: document.querySelectorAll('.task-tab')
};

/* ==================== FILTER ==================== */
const TaskFilter = {
  /* search, related, status, clear */
  filter() {
    return TaskDatabase.data.filter(task => {
      if (TaskDatabase.state.search !== '') {
        if (!task.title.toLowerCase().includes(TaskDatabase.state.search.toLowerCase()) && !task.relatedName.toLowerCase().includes(TaskDatabase.state.search.toLowerCase())) {
          return false;
        }
      }
      
      if (TaskDatabase.state.relatedTo !== '') {
        if (task.relatedName !== TaskDatabase.state.relatedTo) {
          return false;
        }
      }
      
      if (TaskDatabase.state.status !== '') {
        if (task.status !== TaskDatabase.state.status) {
          return false;
        }
      }
      
      return true;
    });
  }
};

const TaskTabs = { 
  /* tab All, Today, Overdue, Completed */
  filter(data) {
    switch (TaskDatabase.state.tab) {
      case 'all':
        return data;
      case 'today':
        return data.filter(task => task.isToday === true);
      case 'overdue':
        return data.filter(task => task.status === 'overdue');
      case 'completed':
        return data.filter(task => task.status === 'completed');
      default:
        return data;
    }
  },
  
  updateTabCount(filtered) {
    const todayCount = filtered.filter(t => t.isToday === true).length;
    const overdueCount = filtered.filter(t => t.status === 'overdue').length;
    const completedCount = filtered.filter(t => t.status === 'completed').length;
    
    document.querySelector('[data-tab="today"] .task-tab-count').textContent = todayCount;
    document.querySelector('[data-tab="overdue"] .task-tab-count').textContent = overdueCount;
    document.querySelector('[data-tab="completed"] .task-tab-count').textContent = completedCount;
  }
};

/* ==================== RENDER ==================== */
const TaskTable = {
  /* render */
  render() {
    const filtered = TaskFilter.filter();
    const tabbed = TaskTabs.filter(filtered);
    const paginated = tabbed.slice(
      (TaskDatabase.state.page - 1) * TaskDatabase.state.perPage,
      TaskDatabase.state.page * TaskDatabase.state.perPage
    );
    
    if (paginated.length === 0) {
      TaskDOM.tbody.innerHTML = `<tr><td colspan="6" class="empty-state"><i class="far fa-frown" style="font-size: 24px; margin-bottom: 10px;display:
      block;"></i>Tidak ada tasks yang tersedia</td></tr>`;
      return;
    }
    TaskDOM.tbody.innerHTML = '';
    
    paginated.forEach(task => {
      TaskDOM.tbody.innerHTML += `
        <tr>
          <td class="col-check"><input type="checkbox" aria-label="Pilih task"></td>
          <td><span class="task-name">${task.title}</span></td>
          <td>
            <span class="related-name">
              <i class="fas ${task.relatedType === 'contact' ? 'fa-user-circle' : 'fa-handshake'}" aria-hidden="true"></i>
              ${task.relatedName}
            </span>
            ${task.relatedCompany ? `<span class="related-company">${task.relatedCompany}</span>` : ''}
          </td>
          <td>
            <span class="due-date ${task.isToday ? 'today' : ''}">
              <i class="fas fa-calendar-check" aria-hidden="true"></i>
              ${task.isToday ? 'Today' : task.dueDate}
            </span>
          </td>
          <td><span class="badge status-${task.status}">${task.status}</span></td>
          <td>
            <div class="td-actions">
              <button class="btn-icon" aria-label="Lihat ${task.title}" onclick="TaskCRUD.view(${task.id})"><i class="far fa-eye" aria-hidden="true"></i></button>
              <button class="btn-icon btn-edit" aria-label="Edit ${task.title}" onclick="TaskCRUD.edit(${task.id})"><i class="far fa-edit"
              aria-hidden="true"></i></button>
              <button class="btn-icon btn-delete" aria-label="Hapus ${task.title}" onclick="TaskCRUD.delete(${task.id})"><i class="far fa-trash-alt"
              aria-hidden="true"></i></button>
            </div>
          </td>
        </tr>
      `
    });
    
    this.renderPagination(tabbed);
    TaskTabs.updateTabCount(filtered);
  },
  
  renderPagination(data) {
    const total = data.length;
    const totalPage = Math.ceil(total / TaskDatabase.state.perPage);
    const start = (TaskDatabase.state.page - 1) * TaskDatabase.state.perPage + 1;
    const end = Math.min(TaskDatabase.state.page * TaskDatabase.state.perPage, total);
    
    TaskDOM.paginationInfo.textContent = `Showing ${start} to ${end} of ${total} entries`;
    
    let btnHTML = `<button class="page-btn" data-page="prev" ${TaskDatabase.state.page === 1 ? 'disabled' : ''}>Prev</button>`
    let startPage = Math.max(1, TaskDatabase.state.page - 1);
    let endPage = Math.min(totalPage, startPage + 2);
    if (endPage - startPage < 2) {
      startPage = Math.max(1, endPage - 2)
    }
    for (let i = startPage; i <= endPage; i++) {
      btnHTML += `<button class="${i === TaskDatabase.state.page ? 'page-btn active' : 'page-btn'}" data-page="${i}">${i}</button>`
    }
    btnHTML += `<button class="page-btn" data-page="next" ${TaskDatabase.state.page === totalPage ? 'disabled' : ''}>Next</button>`;
    
    TaskDOM.paginationNav.innerHTML = btnHTML;
    
    TaskDOM.paginationNav.querySelectorAll('.page-btn').forEach(btn => {
      btn.addEventListener("click", () => {
        const page = btn.dataset.page;
        if (page === 'prev') {
          TaskDatabase.state.page--;
        } else if (page === 'next') {
          TaskDatabase.state.page++;
        } else {
          TaskDatabase.state.page = parseInt(page);
        }
        this.render();
      })
    })
  }
};

/* ==================== CRUD ==================== */
const TaskCRUD = {
  /* add, edit, delete, view */
  add() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-card">
        <div class="modal-header">
          <h3>Add Tasks</h3>
        </div>
        <form id="formAddTask">
          <label for="task">Task</label>
          <input type="text" name="task" id="taskName" class="form-input"
          required>
          
          <label for="type">Type</label>
          <select name="relatedtype" id="relatedType" class="form-input">
            <option value="">Type</option>
            <option value="contact">Contact</option>
            <option value="deal">Deal</option>
          </select>
          
          <label for="name">Name</label>
          <input type="text" name="relatedname" id="relatedName" class="form-input" required>
          
          <label for="company">Company</label>
          <input type="text" name="company" id="relatedCompany" class="form-input" placeholder="optional">
          
          <label for="duedate">Due Date</label>
          <input type="date" name="duedate" id="dueDate" class="form-input" required>
          
          <label for="status">Status</label>
          <select name="status" id="status" class="form-input">
            <option value="pending">Pending</option>
            <option value="overdue">Overdue</option>
            <option value="completed">Completed</option>
          </select>
          
          <div class="modal-actions">
            <button type="button" id="btnCancel" class="btn btn-outline">Cancel</button>
            <button type="submit" id="btnAdd" class="btn btn-primary">Add Task</button>
          </div>
        </form>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    document.getElementById('btnCancel').addEventListener('click', () => {
      modal.remove();
    });
    document.getElementById('formAddTask').addEventListener('submit', (e) => {
      e.preventDefault();
      
      const task = document.getElementById('taskName').value;
      const type = document.getElementById('relatedType').value;
      const name = document.getElementById('relatedName').value;
      const company = document.getElementById('relatedCompany').value;
      const dueDate = document.getElementById('dueDate').value;
      const status = document.getElementById('status').value;
      
      const today = new Date();
      const todayStr = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;
      
      const tasks = {
        id: Math.max(...TaskDatabase.data.map(t => t.id)) + 1,
        title: task,
        relatedType: type,
        relatedName: name,
        relatedCompany: company,
        dueDate, isToday: dueDate === todayStr,
        status
      };
      
      TaskDatabase.data.push(tasks);
      modal.remove();
      TaskTable.render();
    });
  },
  
  edit(id) {
    const task = TaskDatabase.data.find(t => t.id === id);
    
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-card">
        <div class="modal-header">
          <h3>Edit Tasks</h3>
        </div>
        <form id="formAddTask">
          <label for="task">Task</label>
          <input type="text" name="task" id="taskName" class="form-input"
          value="${task.title}" required>
          
          <label for="type">Type</label>
          <select name="relatedtype" id="relatedType" class="form-input">
            <option value="">Type</option>
            <option value="contact" ${task.relatedType === 'contact' ? 'selected' : ''}>Contact</option>
            <option value="deal" ${task.relatedType === 'deal' ? 'selected' : ''}>Deal</option>
          </select>
          
          <label for="name">Name</label>
          <input type="text" name="relatedname" id="relatedName"
          class="form-input" value="${task.relatedName}" required>
          
          <label for="company">Company</label>
          <input type="text" name="company" id="relatedCompany"
          class="form-input" placeholder="optional" value="${task.relatedCompany}">
          
          <label for="duedate">Due Date</label>
          <input type="date" name="duedate" id="dueDate" class="form-input" value="${task.dueDate}" required>
          
          <label for="status">Status</label>
          <select name="status" id="status" class="form-input">
            <option value="pending" ${task.status === 'pending' ? 'selected' : ''}>Pending</option>
            <option value="overdue" ${task.status === 'overdue' ? 'selected' : ''}>Overdue</option>
            <option value="completed" ${task.status === 'completed' ? 'selected' : ''}>Completed</option>
          </select>
          
          <div class="modal-actions">
            <button type="button" id="btnCancel" class="btn btn-outline">Cancel</button>
            <button type="submit" id="btnAdd" class="btn btn-primary">Save Change</button>
          </div>
        </form>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    document.getElementById('btnCancel').addEventListener('click', () => {
      modal.remove();
    });
    document.getElementById('formAddTask').addEventListener('submit', (e) => {
      e.preventDefault();
      
      const title = document.getElementById('taskName').value;
      const relatedType = document.getElementById('relatedType').value;
      const relatedName = document.getElementById('relatedName').value;
      const relatedCompany = document.getElementById('relatedCompany').value || null;
      const dueDate = document.getElementById('dueDate').value;
      const status = document.getElementById('status').value;
      
      const index = TaskDatabase.data.findIndex(t => t.id === id);
      TaskDatabase.data[index] = {id, title, relatedType, relatedName, relatedCompany, dueDate, status, isToday: false};
      
      modal.remove();
      TaskTable.render();
    });
  },
  
  delete(id) {
    const task = TaskDatabase.data.find(t => t.id === id);
    
    if (task) {
      const userConfirm = confirm(`Apakah Anda ingin menghapus task "${task.title}"?`);
      if (userConfirm) {
        const index = TaskDatabase.data.indexOf(task);
        TaskDatabase.data.splice(index, 1);
        TaskTable.render();
      }
    }
  },
  
  view(id) {
    const task = TaskDatabase.data.find(t => t.id === id);
    
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-card">
        <div class="modal-header">
          <h3>Task</h3>
          <button type="button" id="closeBtn" class="btn-icon" aria-label="Close">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="modal-body">
          <p class="view-label">Task</p>
          <p class="view-value">${task.title}</p>
          
          <p class="view-label">Type</p>
          <p class="view-value">${task.relatedType}</p>
          
          <p class="view-label">Name</p>
          <p class="view-value">${task.relatedName}</p>
          
          <p class="view-label">Company</p>
          <p class="view-value">${task.relatedCompany || '-'}</p>
          
          <p class="view-label">Due Date</p>
          <p class="view-value">${task.dueDate}</p>
          
          <p class="view-label">Status</p>
          <p class="view-value">${task.status}</p>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    document.getElementById('closeBtn').addEventListener('click', () => {
      modal.remove();
    });
  }
};

/* ==================== EVENT HANDLER ==================== */
const TaskEvent = {
  /* semua event listener */
  filterEvent() {
    TaskDOM.searchInput.addEventListener('input', () => {
      TaskDatabase.state.search = TaskDOM.searchInput.value;
      TaskDatabase.state.page = 1;
      TaskTable.render();
    });
    
    TaskDOM.filterRelated.addEventListener('change', () => {
      TaskDatabase.state.relatedTo = TaskDOM.filterRelated.value;
      TaskDatabase.state.page = 1;
      TaskTable.render();
    });
    
    TaskDOM.filterStatus.addEventListener('change', () => {
      TaskDatabase.state.status = TaskDOM.filterStatus.value;
      TaskDatabase.state.page = 1;
      TaskTable.render();
    });
    
    TaskDOM.btnClearFilter.addEventListener('click', () => {
      TaskDatabase.state.search = '';
      TaskDatabase.state.relatedTo = '';
      TaskDatabase.state.status = '';
      TaskDatabase.state.page = 1;
      TaskDOM.searchInput.value = '';
      TaskDOM.filterRelated.value = '';
      TaskDOM.filterStatus.value = '';
      TaskTable.render();
    })
  },
  
  tabEvent() {
    TaskDOM.tabs.forEach(tab => { 
      tab.addEventListener('click', () => {
        TaskDatabase.state.tab = tab.dataset.tab;
        TaskDatabase.state.page = 1;
        TaskDOM.tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        TaskTable.render();
      });
    });
  },
  
  crudEvent() {
    TaskDOM.btnAddTask.addEventListener('click', () => {
      TaskCRUD.add();
    });
  },
  
  async init() {
    await TaskDatabase.loadData()
    this.filterEvent();
    this.tabEvent();
    this.crudEvent();
    TaskTable.render();
  }
};

document.addEventListener('DOMContentLoaded',  () => TaskEvent.init());
