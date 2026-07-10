(function () {
  'use strict';

  /* =========================================================
     State
     A single array of task objects is the single source of
     truth. Every render is derived from this array.
  ========================================================= */
  const ACCENTS = ['cyan', 'pink', 'orange', 'violet'];

  /** @type {{id:string, text:string, completed:boolean, createdAt:number, color:string}[]} */
  let tasks = []; // in-memory only — resets on page reload
  let currentFilter = 'all'; // 'all' | 'active' | 'completed'

  /* =========================================================
     DOM references
  ========================================================= */
  const form = document.getElementById('composerForm');
  const input = document.getElementById('taskInput');
  const list = document.getElementById('taskList');
  const template = document.getElementById('taskItemTemplate');
  const emptyState = document.getElementById('emptyState');
  const emptyStateText = document.getElementById('emptyStateText');
  const itemsLeft = document.getElementById('itemsLeft');
  const filters = document.getElementById('filters');
  const clearCompletedBtn = document.getElementById('clearCompleted');
  const headerDate = document.getElementById('headerDate');

  const progressBar = document.getElementById('progressBar');
  const progressPercent = document.getElementById('progressPercent');
  const statTotal = document.getElementById('statTotal');
  const statActive = document.getElementById('statActive');
  const statDone = document.getElementById('statDone');
  const statsSub = document.getElementById('statsSub');

  const RING_CIRCUMFERENCE = 2 * Math.PI * 70; // matches r=70 in SVG

  /* =========================================================
     Utilities
  ========================================================= */
  function makeId() {
    return 'id-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 8);
  }

  function formatTime(ts) {
    const d = new Date(ts);
    return d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  }

  function pickAccent(index) {
    return ACCENTS[index % ACCENTS.length];
  }

  /* =========================================================
     Core array operations
  ========================================================= */
  function addTask(text) {
    const trimmed = text.trim();
    if (!trimmed) return;

    const task = {
      id: makeId(),
      text: trimmed,
      completed: false,
      createdAt: Date.now(),
      color: pickAccent(tasks.length)
    };

    // unshift so the newest task appears first
    tasks.unshift(task);
    render();
  }

  function toggleTask(id) {
    tasks = tasks.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    render();
  }

  function deleteTask(id) {
    const node = list.querySelector(`[data-id="${id}"]`);
    if (node) {
      // small exit animation before actually removing from the array
      node.classList.add('is-removing');
      setTimeout(() => {
        tasks = tasks.filter(t => t.id !== id);
        render();
      }, 160);
    } else {
      tasks = tasks.filter(t => t.id !== id);
      render();
    }
  }

  function clearCompleted() {
    tasks = tasks.filter(t => !t.completed);
    render();
  }

  /* =========================================================
     Derived data
  ========================================================= */
  function getFilteredTasks() {
    if (currentFilter === 'active') return tasks.filter(t => !t.completed);
    if (currentFilter === 'completed') return tasks.filter(t => t.completed);
    return tasks;
  }

  function getCounts() {
    const total = tasks.length;
    const done = tasks.filter(t => t.completed).length;
    const active = total - done;
    const percent = total === 0 ? 0 : Math.round((done / total) * 100);
    return { total, done, active, percent };
  }

  /* =========================================================
     Rendering
  ========================================================= */
  function render() {
    renderList();
    renderStats();
    renderFooter();
  }

  function renderList() {
    const filtered = getFilteredTasks();
    list.innerHTML = '';

    filtered.forEach(task => {
      const node = template.content.firstElementChild.cloneNode(true);
      node.dataset.id = task.id;
      node.dataset.color = task.color;
      node.classList.toggle('is-done', task.completed);

      node.querySelector('.task__toggle').setAttribute(
        'aria-pressed',
        String(task.completed)
      );
      node.querySelector('.task__text').textContent = task.text;
      node.querySelector('.task__time').textContent = formatTime(task.createdAt);

      list.appendChild(node);
    });

    const showEmpty = filtered.length === 0;
    emptyState.classList.toggle('is-visible', showEmpty);

    if (showEmpty) {
      if (tasks.length === 0) {
        emptyStateText.textContent = 'Nothing here yet — add your first task above.';
      } else if (currentFilter === 'active') {
        emptyStateText.textContent = 'No active tasks. Nicely done.';
      } else {
        emptyStateText.textContent = 'No completed tasks yet.';
      }
    }
  }

  function renderStats() {
    const { total, done, active, percent } = getCounts();

    statTotal.textContent = total;
    statActive.textContent = active;
    statDone.textContent = done;
    progressPercent.textContent = percent + '%';

    const offset = RING_CIRCUMFERENCE - (percent / 100) * RING_CIRCUMFERENCE;
    progressBar.style.strokeDashoffset = String(offset);

    if (total === 0) {
      statsSub.textContent = 'No tasks yet';
    } else if (percent === 100) {
      statsSub.textContent = 'All caught up 🎉';
    } else {
      statsSub.textContent = `${active} task${active === 1 ? '' : 's'} remaining`;
    }
  }

  function renderFooter() {
    const { total, active } = getCounts();
    itemsLeft.textContent = total === 0
      ? '0 tasks'
      : `${active} of ${total} task${total === 1 ? '' : 's'} left`;
  }

  function renderDate() {
    const now = new Date();
    headerDate.textContent = now.toLocaleDateString(undefined, {
      weekday: 'long',
      month: 'short',
      day: 'numeric'
    });
  }

  /* =========================================================
     Event wiring
  ========================================================= */

  // Add a task
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    addTask(input.value);
    input.value = '';
    input.focus();
  });

  // Event delegation: one listener handles toggle + delete for
  // every current AND future task item.
  list.addEventListener('click', function (e) {
    const toggleBtn = e.target.closest('.task__toggle');
    const deleteBtn = e.target.closest('.task__delete');
    if (!toggleBtn && !deleteBtn) return;

    const taskEl = e.target.closest('.task');
    const id = taskEl && taskEl.dataset.id;
    if (!id) return;

    if (toggleBtn) toggleTask(id);
    if (deleteBtn) deleteTask(id);
  });

  // Filter tabs (also delegated)
  filters.addEventListener('click', function (e) {
    const btn = e.target.closest('.filter');
    if (!btn) return;

    currentFilter = btn.dataset.filter;

    filters.querySelectorAll('.filter').forEach(f =>
      f.classList.toggle('is-active', f === btn)
    );

    renderList();
    renderFooter();
  });

  clearCompletedBtn.addEventListener('click', clearCompleted);

  /* =========================================================
     Init
  ========================================================= */
  renderDate();
  render();
})();