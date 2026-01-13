let tasks = [];

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskCount = document.getElementById('taskCount');
const taskList = document.getElementById('taskList');
const totalTasks = document.getElementById('totalTasks');
const activeTasks = document.getElementById('activeTasks');
const completedTasks = document.getElementById('completedTasks');
const filterButtons = document.querySelectorAll('.filter-btn');

let currentFilter = 'all';

function addTask() {
  const taskText = taskInput.value.trim();
  // Validasi input
  if (taskText === "") {
    alert('Silahkan masukkan tugas!');
    return;
  }
  
  // Buat object literal yang berisi string input dan statusnya
  const newTask = {
    id: Date.now(),
    taskText,
    completed: false
  }
  
  // Tambahkan tugas ke array
  tasks.push(newTask);

  taskInput.value = "";
  renderTasks();
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deleteTask(id) {
  const taskIndex = tasks.findIndex(task => task.id === id);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    renderTasks();
    saveToLocalStorage();
  };
}

function getFilteredTasks() {
  if (currentFilter === 'all') {
    return tasks;
  } else if (currentFilter === 'active') {
    return tasks.filter(task => !task.completed);
  } else if (currentFilter === 'completed') {
    return tasks.filter(task => task.completed);
  }
}

function toggleTaskStatus(id) {
  const task = tasks.find(task => task.id === id);
  if (!task) return;
  task.completed = !task.completed;
  renderTasks();
  saveToLocalStorage();
}

function updateStats() {
  const total = tasks.length;
  const active = tasks.filter(task => !task.completed).length;
  const completed = total - active;
  
  totalTasks.textContent = total;
  activeTasks.textContent = active;
  completedTasks.textContent = completed;
}

function saveToLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadFromLocalStorage() {
  const data = localStorage.getItem('tasks');
  if (data) {
    try{
      tasks = JSON.parse(data);
    } catch (error) {
      console.error("Error parsing data tasks:", error);
      tasks = [];
    }
  }
  renderTasks();
}

function renderTasks() {
    // Tulis kode Anda di sini
    console.log("Merender daftar tugas - lengkapi fungsi ini");
    
    // Dapatkan tugas yang difilter
    const filteredTasks = getFilteredTasks();
    
    // Kosongkan daftar tugas
    taskList.innerHTML = '';
    
    // Jika tidak ada tugas, tampilkan pesan
    if (filteredTasks.length === 0) {
        const emptyMessage = document.createElement('li');
        emptyMessage.className = 'empty-message';
        emptyMessage.textContent = currentFilter === 'all' 
            ? 'Tidak ada tugas. Tambahkan tugas baru!' 
            : `Tidak ada tugas ${currentFilter === 'active' ? 'aktif' : 'selesai'}.`;
        taskList.appendChild(emptyMessage);
    } else {
        // Buat elemen untuk setiap tugas
        filteredTasks.forEach(task => {
            const taskItem = document.createElement('li');
            
            // Buat elemen untuk teks tugas
            const taskText = document.createElement('span');
            taskText.className = 'task-text';
            if (task.completed) {
                taskText.classList.add('completed');
            }
            taskText.textContent = task.taskText;
            
            // Tambahkan event listener untuk toggle status
            taskText.addEventListener('click', () => {
                toggleTaskStatus(task.id);
            });
            
            // Buat tombol hapus
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
            
            // Tambahkan event listener untuk tombol hapus
            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Mencegah event bubbling
                deleteTask(task.id);
            });
            
            // Tambahkan elemen ke taskItem
            taskItem.appendChild(taskText);
            taskItem.appendChild(deleteBtn);
            
            // Tambahkan taskItem ke taskList
            taskList.appendChild(taskItem);
        });
    }
    
    // Perbarui statistik
    updateStats();
    
    // Perbarui teks jumlah tugas
    taskCount.textContent = `(${filteredTasks.length} tugas${currentFilter !== 'all' ? ' ' + currentFilter : ''})`;
}

// Opstional function
function setActiveFilter(filter) {
  // Hapus class 'active' dari semua tombol filter
  filterButtons.forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.filter === filter) {
      btn.classList.add('active');
    }
  });
  
  // Set filter saat ini
  currentFilter = filter;
  renderTasks();
}

// Fungsi untuk inisialisasi event listener
function initEventListener() {
  // Event listener untuk tombol tambah tugas
  addTaskBtn.addEventListener('click', addTask);
  // Event listener untuk input (Enter key)
  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  });
  // Event listener untuk tombol filter
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      setActiveFilter(filter);
    })
  })
}

function initApp () {
  console.log('Aplikasi To-do list diinisialisasi');
  loadFromLocalStorage();
  initEventListener();
}


document.addEventListener('DOMContentLoaded', initApp);