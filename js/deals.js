const Database = {
  data: [
    {
      id: 1,
      title: "Website Redesign",
      company: "PT Maju",
      name: "Budi Santoso",
      value: 15000000,
      stage: "lead",
      tag: "Hot",
      tagColor: "red",
      dueDate: "Today",
    },
    {
      id: 2,
      title: "CRM Software",
      company: "CV Sukses",
      name: "Sari Lestari",
      value: 25000000,
      stage: "lead",
      tag: "Urgent",
      tagColor: "orange",
      dueDate: "Apr 28",
    },
    {
      id: 3,
      title: "Mobile App Project",
      company: "PT Digital",
      name: "Andi Wijaya",
      value: 18000000,
      stage: "lead",
      tag: null,
      tagColor: null,
      dueDate: "Apr 30",
    },
    {
      id: 4,
      title: "ERP System",
      company: "PT Jaya Tech",
      name: "Rudi Hartono",
      value: 45000000,
      stage: "qualified",
      tag: "Hot",
      tagColor: "red",
      dueDate: "Apr 25",
    },
    {
      id: 5,
      title: "Maintenance Contract",
      company: "PT Karya",
      name: "Dewi Anggraini",
      value: 10000000,
      stage: "qualified",
      tag: null,
      tagColor: null,
      dueDate: "May 2",
    },
    {
      id: 6,
      title: "Cloud Hosting",
      company: "UD Computama",
      name: "Agus Pratayma",
      value: 15000000,
      stage: "qualified",
      tag: "SMB",
      tagColor: "blue",
      dueDate: "May 5",
    },
    {
      id: 7,
      title: "Marketing Campaign",
      company: "PT Global",
      name: "Lina Marlina",
      value: 20000000,
      stage: "proposal",
      tag: "Hot",
      tagColor: "red",
      dueDate: "Apr 26",
    },
    {
      id: 8,
      title: "Website Redesign",
      company: "PT Anoprah",
      name: "Budi Santoso",
      value: 15000000,
      stage: "proposal",
      tag: null,
      tagColor: null,
      dueDate: "May 1",
    },
    {
      id: 9,
      title: "SEO Services",
      company: "CV Maju",
      name: "Sari Lestari",
      value: 8000000,
      stage: "proposal",
      tag: null,
      tagColor: null,
      dueDate: "May 6",
    },
    {
      id: 10,
      title: "Software License",
      company: "PT Maya Tech",
      name: "Astori Wijayo",
      value: 15000000,
      stage: "negotiation",
      tag: null,
      tagColor: null,
      dueDate: "Apr 29",
    },
    {
      id: 11,
      title: "Hardware Purchase",
      company: "PT Aay Oline",
      name: "Sari Lestari",
      value: 5000000,
      stage: "negotiation",
      tag: null,
      tagColor: null,
      dueDate: "May 5",
    },
    {
      id: 12,
      title: "Website Redesign",
      company: "PT Visimedia",
      name: "Rudi Hartono",
      value: 10000000,
      stage: "won",
      tag: null,
      tagColor: null,
      closedDate: "Apr 20",
    },
    {
      id: 13,
      title: "Dervize & SSL",
      company: "PT Boptens",
      name: "Bustari Prima",
      value: 5000000,
      stage: "won",
      tag: null,
      tagColor: null,
      closedDate: "Apr 22",
    },
    {
      id: 14,
      title: "App Cloud",
      company: "PT Mayai Ranta",
      name: "Gosina Sentayo",
      value: 25000000,
      stage: "lost",
      tag: "Hnd",
      tagColor: "gray",
      dueDate: "Apr 7",
    },
    {
      id: 15,
      title: "CRM Custom",
      company: "DT Coot",
      name: "Do Jok Hageni",
      value: 20000000,
      stage: "lost",
      tag: null,
      tagColor: null,
      dueDate: "Apr 10",
    },
  ],
  
  async loadData() {
    try {
      const response = await fetch('asset/deals.json');
      
      if (!response.ok) {
        throw new Error(`Gagal mengambil deals: ${response.status}`);
      }
      
      this.data = await response.json();
    } catch (e) {
      alert(`Error loading data: ${e}`);
    }
  }
};

const Deals = {
  stages: [
    { id: "lead", label: "Lead" },
    { id: 'qualified', label: "Qualified" },
    { id: "proposal", label: "Proposal" },
    { id: "negotiation", label: "Negotiation" },
    { id: "won", label: "Won" },
    { id: "lost", label: "Lost" }
  ],
  
  state: {
    search: ''
  },
  
  async init() {
    await Database.loadData();
    this.render(Database.data);
    this.setupEventListener()
  },
  
  // Render
  render(data) {
    this.stages.forEach(stage => {
      const col = document.querySelector(`.kanban-col[data-stage="${stage.id}"]`);
      if (!col) return;
      
      const deals = data.filter(deal => deal.stage === stage.id);
      const cardsContainer = col.querySelector('.kanban-cards');
      cardsContainer.innerHTML = '';
      
      deals.forEach(deal => {
        cardsContainer.innerHTML += `
          <article class="deal-card">
            <p class="deal-card-title">${deal.title}</p>
            <p class="deal-card-company">${deal.company}</p>
            <p class="deal-card-name">${deal.name}</p>
            <p class="deal-card-value">Rp ${deal.value.toLocaleString('id-ID')}</p>
            <div class="deal-card-tags">
              ${deal.tag ? `<span class="badge" data-tag="${deal.tag}">${deal.tag}</span>` : ''}
            </div>
            <div class="deal-card-footer">
              <span class="deal-card-date"><i class="far fa-calendar-alt"
              aria-hidden="true"></i>${deal.dueDate ? `Due: ${deal.dueDate}` : `Closed: ${deal.closedDate}`}</span>
            </div>
          </article>
        `
      });
      
      if (deals.length === 0) {
          cardsContainer.innerHTML = `<p class="empty-state"><i class="far fa-frown" style="font-size: 24px; margin-bottom: 10px;
            display: block;"></i>Tidak ada  deals</p>`
        };
    });
    
    
  },
  
  // Crud
  add() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-card">
        <div class="modal-header">
          <h3>Add Deals</h3>
        </div>
        <form id="formAddDeals">
          <label for="title">Title</label>
          <input type="text" name="title" id="title" class="form-input">
          
          <label for="company">Company</label>
          <input type="text" name="company" id="company" class="form-input">
          
          <label for="name">Name</label>
          <input type="text" name="name" id="name" class="form-input">
          
          <label for="value">Value</label>
          <input type="text" name="value" id="value" class="form-input">
          
          <label for="stage">Stage</label>
          <select id="stage" name="stage" class="form-input">
            <option value="lead">Lead</option>
            <option value="qualified">Qualified</option>
            <option value="proposal">Proposal</option>
            <option value="negotiation">Negotiation</option>
            <option value="won">Won</option>
            <option value="lost">Lost</option>
          </select>
          
          <label for="tag">Tag</label>
          <input list="tag" name="tag" class="form-input" placeholder="opsional">
          <datalist id="tag">
            <option value="Hot"></option>
            <option value="Urgent"></option>
            <option value="Hnd"></option>
            <option value="SMB"></option>
          </datalist>
          
          <label for="due-date">Due Date</label>
          <input type="text" name="due-date" id="dueDate" class="form-input">
          
          <div class="modal-actions">
            <button type="button" id="btnCancel" class="btn btn-outline">Cancel</button>
            <button type="submit" id="btnAdd" class="btn btn-primary">Add Deals</button>
          </div>
        </form>
      </div>

    `;
    document.body.appendChild(modal);
    
    document.getElementById('btnCancel').addEventListener('click', () => {
      modal.remove();
    });
    
    document.getElementById('formAddDeals').addEventListener('submit', (e) => {
      e.preventDefault();
      
      const title = document.getElementById('title').value;
      const company = document.getElementById('company').value;
      const name = document.getElementById('name').value;
      const value = document.getElementById('value').value;
      const stage = document.getElementById('stage').value;
      const tag = document.getElementById('tag').value;
      const dueDate = document.getElementById('dueDate').value;
      
      if (!company || !name || !value) {
        alert('Company, name, dan Value wajib diisi')
        return;
      };
      
      const deals = {
        id: Math.max(...Database.data.map(d => d.id)) + 1,
        title,
        company,
        name,
        value,
        stage,
        tag,
        dueDate
      };
      
      Database.data.push(deals);
      modal.remove();
      this.render();
    });
  },

  // SetUp Eventlistener
  setupEventListener() {
    const search = document.getElementById('searchInput');
    const add = document.getElementById('addInput');
    
    search.addEventListener('input', () => {
      Deals.state.search = search.value;
      const filtered = Database.data.filter(deal => deal.title.toLowerCase().includes(Deals.state.search.toLowerCase()));
      this.render(filtered);
    });
    
    add.addEventListener('click', () => {
      this.add();
    })
  }
}

document.addEventListener('DOMContentLoaded', () => Deals.init());
