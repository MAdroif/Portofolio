// ======================= DATABASE =======================
const Database = {
  data: [
    {
      id: 1,
      name: "Budi Santoso",
      email: "budi@emaill.com",
      phone: "0812 1233-879",
      company: "PT Maju",
      tags: ["Hot", "retail"],
    },
    {
      id: 2,
      name: "Sari Lestari",
      email: "sari@email.com",
      phone: "0878 832-0007",
      company: "CV Sukses Sejahtera",
      tags: ["potential"],
    },
    {
      id: 3,
      name: "Andi Wijaya",
      email: "andi@email.com",
      phone: "0878 7321-6724",
      company: "PT Aman Sentosa",
      tags: ["IT"],
    },
    {
      id: 4,
      name: "Lina Hartono",
      email: "lina@oranalasta.com",
      phone: "0812 314 1234",
      company: "PT Lumina Creativa",
      tags: [],
    },
    {
      id: 5,
      name: "Joko Prabowo",
      email: "joko@email.to",
      phone: "0878 873-0087",
      company: "PT Anugrah",
      tags: ["supplier"],
    },
    {
      id: 6,
      name: "Putri Rahmawati",
      email: "putr15h@email.com",
      phone: "0878 7327-1234",
      company: "UD Berkarya",
      tags: ["lead", "e-commerce"],
    },
    {
      id: 7,
      name: "Rizky Firmansyah",
      email: "rizky@mailbox.id",
      phone: "0813 5541-2290",
      company: "PT Nusantara Digital",
      tags: ["hot", "IT"],
    },
    {
      id: 8,
      name: "Dewi Anggraini",
      email: "dewi@anggraini.co",
      phone: "0877 6612-3345",
      company: "CV Mitra Mandiri",
      tags: ["potential", "retail"],
    },
    {
      id: 9,
      name: "Hendra Kurniawan",
      email: "hendra@kurniamail.com",
      phone: "0821 9900-4477",
      company: "PT Sejahtera Abadi",
      tags: ["supplier"],
    },
    {
      id: 10,
      name: "Mega Pratiwi",
      email: "mega@pratiwi.net",
      phone: "0857 3321-8800",
      company: "UD Cahaya Baru",
      tags: ["lead"],
    },
    {
      id: 11,
      name: "Fajar Nugroho",
      email: "fajar@nugroho.io",
      phone: "0819 7743-5566",
      company: "PT Karya Prima",
      tags: ["e-commerce", "hot"],
    },
    {
      id: 12,
      name: "Ratna Sari",
      email: "ratna@sarimail.com",
      phone: "0878 1122-6633",
      company: "CV Bintang Terang",
      tags: ["retail"],
    },
    {
      id: 13,
      name: "Agus Setiawan",
      email: "agus@setiawan.biz",
      phone: "0812 6655-9900",
      company: "PT Makmur Jaya",
      tags: ["supplier", "potential"],
    },
    {
      id: 14,
      name: "Citra Dewi",
      email: "citra@dewi.co.id",
      phone: "0896 4433-2211",
      company: "UD Sinar Harapan",
      tags: ["lead", "IT"],
    },
    {
      id: 15,
      name: "Bambang Susilo",
      email: "bambang@susilo.com",
      phone: "0813 2200-7788",
      company: "PT Graha Sentosa",
      tags: [],
    },
    {
      id: 16,
      name: "Yuni Astuti",
      email: "yuni@astuti.net",
      phone: "0877 5544-3322",
      company: "CV Delta Persada",
      tags: ["e-commerce"],
    },
    {
      id: 17,
      name: "Taufik Hidayat",
      email: "taufik@hidayat.id",
      phone: "0856 8899-1100",
      company: "PT Omega Teknologi",
      tags: ["hot", "IT"],
    },
    {
      id: 18,
      name: "Nanda Permata",
      email: "nanda@permata.co",
      phone: "0821 3344-6677",
      company: "UD Permata Indah",
      tags: ["retail", "lead"],
    },
    {
      id: 19,
      name: "Surya Wijaksono",
      email: "surya@wijaksono.com",
      phone: "0812 7788-4455",
      company: "PT Surya Cemerlang",
      tags: ["supplier"],
    },
    {
      id: 20,
      name: "Lia Handayani",
      email: "lia@handayani.web.id",
      phone: "0878 9900-1122",
      company: "CV Handayani Group",
      tags: ["potential", "e-commerce"],
    },
  ],
  state: {
    search: '',
    company: '',
    tag: '',
    page: 1,
    perPage: 6,
  },
  
  async loadData() {
    try {
      const response = await fetch('asset/contacts.json');
      
      if (!response.ok) {
        throw new Error(`Gagal mengambil data kontak: ${response.status}`);
      }
      
      this.data = await response.json();
    } catch (error) {
      alert(`Error loading data ${error}`);
    }
  }
};

// ======================= DOM =======================
const DOMelement = {
  tbody: document.getElementById('contactTableBody'),
  pagnav: document.getElementById('paginationNav'),
  pagbody: document.getElementById('paginationBody')
};

// ======================= FILTER =======================
const ContactsTable = {
  filteredData() {
    return Database.data.filter(contact => {
      if (Database.state.search !== '') {
        if (!contact.name.toLowerCase().includes(Database.state.search.toLowerCase())) {
          return false;
        }
      }
      
      if (Database.state.company !== '') {
        if (contact.company !== Database.state.company) {
          return false;
        }
      }
      
      if (Database.state.tag !== '') {
        if (!contact.tags.includes(Database.state.tag)) {
          return false;
        }
      }
      return true;
    });
  },
  
  renderTable(filteredData) {
    DOMelement.tbody.innerHTML = '';
    
    // HASIL PERBAIKAN
    const start = (Database.state.page - 1) * Database.state.perPage;
    const end = start + Database.state.perPage;
    const pageData = filteredData.slice(start, end);
    
    if (pageData.length === 0) {
      DOMelement.tbody.innerHTML = `
        <tr>
          <td colspan="6" class="empty-state">
            <i class="far fa-frown" style="font-size: 24px; margin-bottom: 10px;
            display: block;"></i>
            Contact tidak ada
          </td>
        </tr>
      `;
      return;
    }
    
    pageData.forEach(contact => {
      const tagsHTML = contact.tags.map(tag => `<span class="badge" data-tag="${tag}">${tag}</span>`).join('');
      DOMelement.tbody.innerHTML += `
        <tr>
          <td class="td-name">${contact.name}</td>
          <td>
            ${contact.name}
            <span class="td-sub">${contact.email}</span>
          </td>
          <td>${contact.phone}</td>
          <td>${contact.company}</td>
          <td><div class="tags-cell">${tagsHTML}</div></td>
          <td>
            <div class="td-actions">
              <button class="btn-icon" aria-label="Lihat ${contact.name}" onclick="ContactCRUD.view(${contact.id})"><i class="far
              fa-eye"></i></button>
              <button class="btn-icon btn-edit" aria-label="Edit ${contact.name}" onclick="ContactCRUD.edit(${contact.id})"><i class="far fa-edit"></i></button>
              <button class="btn-icon btn-delete" aria-label="Hapus ${contact.name}" onclick="ContactCRUD.delete(${contact.id})"><i class="far fa-trash-alt"></i></button>
            </div>
          </td>
        </tr>
      `;
    })
  },
  
  renderPagination(filteredData) {
    const total = filteredData.length;
    const totalPage = Math.ceil(total / Database.state.perPage);
    const start = (Database.state.page - 1) * Database.state.perPage + 1;
    const end = Math.min(Database.state.page * Database.state.perPage, total);
    
    DOMelement.pagbody.textContent = `Showing ${start} to ${end} of ${total} entries`;
    
    let buttonHTML = `<button class="page-btn" data-page="prev" ${Database.state.page === 1 ? 'disabled' : ''}>Prev</button>`
    
    let startPage = Math.max(1, Database.state.page -1);
    let endPage = Math.min(totalPage, startPage + 2);
    
    if (endPage - startPage < 2) {
      startPage = Math.max(1, endPage - 2);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      buttonHTML += `<button class="page-btn ${i === Database.state.page ? 'active' : ''}" data-page="${i}">${i}</button>`
    }
    buttonHTML += `<button class="page-btn" data-page="next" ${Database.state.page === totalPage ? 'disabled' : ''}>Next</button>`;
    
    DOMelement.pagnav.innerHTML = buttonHTML;
    
    DOMelement.pagnav.querySelectorAll('.page-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const page = btn.dataset.page;
        if (page === 'prev') {
          Database.state.page--;
        } else if (page === 'next') {
          Database.state.page++;
        } else {
          Database.state.page = parseInt(page);
        }
        this.render();
      });
    });
  },
  
  render() {
    const filtered = this.filteredData();
    this.renderTable(filtered);
    this.renderPagination(filtered);
  }
};

// ======================= CRUD =======================
const ContactCRUD = {
  add() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-card">
        <div class="modal-header">
          <h3>Add Contact</h3>
          <button type="button" id="btnClose" class="btn-icon"
          aria-label="Close">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <form id="addContactForm">
          <label for="name">Nama</label>
          <input id="name" type="text" name="name" class="form-input">
          
          <label for="email">Email</label>
          <input id="email" type="text" name="email" class="form-input">
          
          <label for="phone">No HP</label>
          <input id="phone" type="text" name="phone" class="form-input">
          
          <label for="company">Perusahaan</label>
          <input id="company" type="text" name="company" class="form-input">
          
          <label for="tag">Tag</label>
          <input id="tag" type="text" name="tag" class="form-input" placeholder="Pisahkan dengan koma">
          
          <div class="modal-actions">
            <button type="button" id="btnCancel" class="btn btn-outline">Cancel</button>
            <button type="submit" class="btn btn-primary">Add Contact</button>
          </div>
        </form>
      </div>
    `;
    document.body.appendChild(modal);
    
    // Event tombol cancel
    document.getElementById('btnCancel').addEventListener('click', () => {
      modal.remove();
    });
    
    // Event tombol close X
    document.getElementById('btnClose').addEventListener('click', () => {
      modal.remove();
    })
    
    // Form Submit
    document.getElementById('addContactForm').addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const company = document.getElementById('company').value;
      const tag = document.getElementById('tag').value;
      
      // Validasi
      if (!email || !phone) {
        alert('Email, dan No HP wajib diisi');
        return;
      }
      
      if (!email.includes('@')) {
        alert('Email tidak valid');
        return;
      }
      
      const contact = {
        id: Math.max(...Database.data.map(c => c.id)) + 1,
        name: name,
        email: email,
        phone: phone,
        company: company,
        tags: tag.split(',').map(t => t.trim()).filter(t => t !== '')
      }
      
      Database.data.push(contact);
      modal.remove();
      ContactsTable.render();
    });
  },
  
  edit(id) {
    const contact = Database.data.find(c => c.id === id);
    
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-card">
        <div class="modal-header">
          <h3>Edit Contact</h3>
          <button type="button" id="btnClose" class="btn-icon"
          aria-label="Close">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <form id="addContactForm">
          <label for="name">Nama</label>
          <input id="name" type="text" name="name" class="form-input"
          value="${contact.name}">
          
          <label for="email">Email</label>
          <input id="email" type="text" name="email" class="form-input"
          value="${contact.email}">
          
          <label for="phone">No HP</label>
          <input id="phone" type="text" name="phone" class="form-input"
          value="${contact.phone}">
          
          <label for="company">Perusahaan</label>
          <input id="company" type="text" name="company" class="form-input"
          value="${contact.company}">
          
          <label for="tag">Tag</label>
          <input id="tag" type="text" name="tag" class="form-input"
          value="${contact.tags.join(', ')}">
          
          <div class="modal-actions">
            <button type="button" id="btnCancel" class="btn btn-outline">Cancel</button>
            <button type="submit" class="btn btn-primary">Save Change</button>
          </div>
        </form>
      </div>
    `;
    document.body.appendChild(modal);
    
    // Event tombol cancel
    document.getElementById('btnCancel').addEventListener('click', () => {
      modal.remove();
    });
    
    // Event tombol close X
    document.getElementById('btnClose').addEventListener('click', () => {
      modal.remove();
    })
    
    // Form Submit
    document.getElementById('addContactForm').addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const company = document.getElementById('company').value;
      const tag = document.getElementById('tag').value;
      
      // Validasi
      if (!name || !email || !phone) {
        alert('Name, Email, dan No HP wajib diisi');
        return;
      }
      
      if (!email.includes('@')) {
        alert('Email tidak valid');
        return;
      }
      
      const index = Database.data.findIndex(c => c.id === id);
      Database.data[index] = { id, name, email, phone, company, tags:
      tag.split(',').map(t => t.trim()).filter(t => t !== '') };
      
      modal.remove();
      ContactsTable.render();
    });
  },
  
  delete(id) {
    const contact = Database.data.find(c => c.id === id);
    
    if (contact) {
      const userConfirm = confirm(`Apakah Anda yakin ingin menghapus kontak "${contact.name}"?`);
      if (userConfirm) {
        const index = Database.data.indexOf(contact);
        Database.data.splice(index, 1);
        ContactsTable.render();
      }
    }
  },
  
  view(id) {
    const contact = Database.data.find(c => c.id === id);
    
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-card">
        <div class="modal-header">
          <h3>Contact</h3>
          <button type="button" id="btnClose" class="btn-icon"
          aria-label="Close">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <form id="addContactForm">
          <label for="name">Nama</label>
          <input id="name" type="text" name="name" class="form-input" value="${contact.name}" readonly>
          
          <label for="email">Email</label>
          <input id="email" type="text" name="email" class="form-input" value="${contact.email}" readonly>
          
          <label for="phone">No HP</label>
          <input id="phone" type="text" name="phone" class="form-input" value="${contact.phone}" readonly>
          
          <label for="company">Perusahaan</label>
          <input id="company" type="text" name="company" class="form-input" value="${contact.company}" readonly>
          
          <label for="tag">Tag</label>
          <input id="tag" type="text" name="tag" class="form-input" value="${contact.tags.join(', ')}" readonly>
        </form>
      </div>
    `;
    document.body.appendChild(modal);
    
    // Event tombol close X
    document.getElementById('btnClose').addEventListener('click', () => {
      modal.remove();
    });
  }
};


// ======================= EVENT HANDLER =======================
const EventListener = {
  filterEventListener() {
    const search = document.getElementById('searchInput');
    const company = document.getElementById('filterCompany');
    const tag = document.getElementById('filterTag');
    const btnClearFilter = document.getElementById('btnClearFilter')
    
    search.addEventListener('input', () => {
      Database.state.search = search.value;
      Database.state.page = 1;
      ContactsTable.render();
    });
    
    company.addEventListener('change', () => {
      Database.state.company = company.value;
      Database.state.page = 1;
      ContactsTable.render();
    });
    
    tag.addEventListener('change', () => {
      Database.state.tag = tag.value;
      Database.state.page = 1;
      ContactsTable.render();
    });
    
    btnClearFilter.addEventListener('click', () => {
      Database.state.search = '';
      Database.state.company = '';
      Database.state.tag = '';
      Database.state.page = 1;
      search.value = '';
      company.value = '';
      tag.value = '';
      ContactsTable.render();
    });
  },
  
  crudEventListener() {
    const btnAdd = document.getElementById('addBtn');
    btnAdd.addEventListener('click', () => {
      ContactCRUD.add();
    });
  },
  
  async init() {
    await Database.loadData();
    this.filterEventListener();
    this.crudEventListener();
    ContactsTable.render();
  }
};

document.addEventListener('DOMContentLoaded',  () => EventListener.init());
