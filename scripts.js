/**
 * Island Guide - Main Application Scripts
 * Handles navigation, dynamic content loading, and interactivity
 */

// ════════════════════════════════════════════════════════════════════════════════
// 1. SCREEN NAVIGATION
// ════════════════════════════════════════════════════════════════════════════════

function showScreen(screenId) {
  // Hide all screens
  const screens = document.querySelectorAll('.screen');
  screens.forEach(screen => {
    screen.classList.remove('active');
  });

  // Show target screen
  const targetScreen = document.getElementById(`screen-${screenId}`);
  if (targetScreen) {
    targetScreen.classList.add('active');
    scrollToTop();
  }

  // Update nav buttons
  updateNavButtons(screenId);
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateNavButtons(screenId) {
  const navBtns = document.querySelectorAll('.nav-btn');
  navBtns.forEach(btn => btn.classList.remove('active'));

  const screenMap = {
    'home': 0,
    'planning': 1,
    'ground': 2,
    'places': 3,
    'food': 4,
    'culture': 5,
    'sos': 6
  };

  if (screenMap[screenId] !== undefined) {
    navBtns[screenMap[screenId]].classList.add('active');
  }
}

// ════════════════════════════════════════════════════════════════════════════════
// 2. ACCORDION FUNCTIONALITY
// ════════════════════════════════════════════════════════════════════════════════

function toggleAcc(button) {
  button.classList.toggle('open');
  const body = button.nextElementSibling;
  if (body && body.classList.contains('acc-body')) {
    body.classList.toggle('open');
  }
}

function expandAll(screenId) {
  const screen = document.getElementById(screenId);
  if (!screen) return;

  const buttons = screen.querySelectorAll('.acc-header');
  buttons.forEach(button => {
    if (!button.classList.contains('open')) {
      button.classList.add('open');
      const body = button.nextElementSibling;
      if (body && body.classList.contains('acc-body')) {
        body.classList.add('open');
      }
    }
  });
}

function collapseAll(screenId) {
  const screen = document.getElementById(screenId);
  if (!screen) return;

  const buttons = screen.querySelectorAll('.acc-header');
  buttons.forEach(button => {
    button.classList.remove('open');
    const body = button.nextElementSibling;
    if (body && body.classList.contains('acc-body')) {
      body.classList.remove('open');
    }
  });
}

// ════════════════════════════════════════════════════════════════════════════════
// 3. FONT SIZE CONTROLS
// ════════════════════════════════════════════════════════════════════════════════

let currentFontSize = 100;
const MIN_FONT_SIZE = 80;
const MAX_FONT_SIZE = 120;

function changeFontSize(direction) {
  currentFontSize += direction * 5;

  if (currentFontSize < MIN_FONT_SIZE) currentFontSize = MIN_FONT_SIZE;
  if (currentFontSize > MAX_FONT_SIZE) currentFontSize = MAX_FONT_SIZE;

  document.body.style.fontSize = currentFontSize + '%';
  localStorage.setItem('fontSize', currentFontSize);
}

function restoreFontSize() {
  const saved = localStorage.getItem('fontSize');
  if (saved) {
    currentFontSize = parseInt(saved);
    document.body.style.fontSize = currentFontSize + '%';
  }
}

// ════════════════════════════════════════════════════════════════════════════════
// 4. GLOBAL SEARCH FUNCTIONALITY
// ════════════════════════════════════════════════════════════════════════════════

let searchData = [];

async function initializeSearch() {
  searchData = [
    { title: 'SIM Cards & eSIM', section: 'planning', snippet: 'Get connected from SGD$12...' },
    { title: 'MRT Guide', section: 'ground', snippet: 'Mass Rapid Transit - fastest, cheapest...' },
    { title: 'Changi Airport', section: 'planning', snippet: 'Worlds Best Airport - 4 terminals...' },
    { title: 'Hawker Food', section: 'food', snippet: 'Where to eat local cuisine...' },
    { title: 'Emergency Numbers', section: 'sos', snippet: 'Police, ambulance, fire...' }
  ];
}

function handleSearch(query) {
  const resultsPanel = document.getElementById('searchResultsPanel');
  const resultsList = document.getElementById('searchResultsList');
  const clearBtn = document.getElementById('searchClearBtn');

  if (!query.trim()) {
    resultsPanel.classList.remove('visible');
    clearBtn.style.display = 'none';
    return;
  }

  clearBtn.style.display = 'block';
  const results = searchData.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.snippet.toLowerCase().includes(query.toLowerCase())
  );

  if (results.length === 0) {
    resultsList.innerHTML = '<div class="search-no-results">No results found</div>';
    resultsPanel.classList.add('visible');
    return;
  }

  resultsList.innerHTML = results.map(result => `
    <div class="search-result-item" onclick="showScreen('${result.section}')">
      <div class="sri-text">
        <div class="sri-title">${result.title}</div>
        <div class="sri-snippet">${result.snippet}</div>
      </div>
      <span class="sri-section ${result.section}">${result.section}</span>
    </div>
  `).join('');

  resultsPanel.classList.add('visible');
}

function clearSearch() {
  document.getElementById('globalSearchInput').value = '';
  document.getElementById('searchResultsPanel').classList.remove('visible');
  document.getElementById('searchClearBtn').style.display = 'none';
}

// ════════════════════════════════════════════════════════════════════════════════
// 5. LIVE FEATURES
// ════════════════════════════════════════════════════════════════════════════════

function updateLiveClock() {
  const clockElem = document.getElementById('sgLiveClock');
  const dateElem = document.getElementById('sgLiveDate');

  if (!clockElem || !dateElem) return;

  const sgTime = new Date().toLocaleString('en-SG', {
    timeZone: 'Asia/Singapore',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  const sgDate = new Date().toLocaleString('en-SG', {
    timeZone: 'Asia/Singapore',
    month: 'short',
    day: 'numeric'
  });

  clockElem.textContent = sgTime;
  dateElem.textContent = sgDate;
}

// ════════════════════════════════════════════════════════════════════════════════
// 6. IMAGE FALLBACK HANDLER
// ════════════════════════════════════════════════════════════════════════════════

function initImageFallback() {
  const logoImg = document.querySelector('.lion-icon img');
  
  if (logoImg) {
    logoImg.removeAttribute('onerror');
    
    logoImg.addEventListener('error', function() {
      const parent = this.parentElement;
      if (parent) {
        this.style.display = 'none';
        Object.assign(parent.style, {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '54px'
        });
        parent.textContent = '🦁';
        parent.setAttribute('data-fallback', 'true');
        console.error(`Logo image failed to load: ${this.src}`);
      }
    });
  }
}

// ════════════════════════════════════════════════════════════════════════════════
// 7. APPS ACCORDION
// ════════════════════════════════════════════════════════════════════════════════

function openAppsAcc() {
  const body = document.getElementById('apps-acc-body');
  if (body) {
    body.style.display = body.style.display === 'none' ? 'block' : 'none';
  }
}

// ════════════════════════════════════════════════════════════════════════════════
// 8. FLASH SALE BANNER
// ════════════════════════════════════════════════════════════════════════════════

const flashSales = [
  { attraction: 'Marina Bay Sands Observation Deck', price: 'S$28 (save S$5)' },
  { attraction: 'Singapore Zoo', price: 'S$32 (save S$8)' },
  { attraction: 'Gardens by the Bay', price: 'S$32 (save S$4)' }
];

let currentFlashSaleIndex = 0;

function initFlashSaleBanner() {
  if (flashSales.length === 0) {
    const overlay = document.getElementById('flashSaleOverlay');
    if (overlay) overlay.style.display = 'none';
    return;
  }
  updateFlashSaleDots();
}

function updateFlashSaleDots() {
  const dotRow = document.getElementById('fsDotRow');
  if (!dotRow) return;

  dotRow.innerHTML = flashSales.map((_, idx) => `
    <div class="fs-dot ${idx === currentFlashSaleIndex ? 'active' : ''}"></div>
  `).join('');
}

function fsNav(direction) {
  currentFlashSaleIndex += direction;

  if (currentFlashSaleIndex < 0) currentFlashSaleIndex = flashSales.length - 1;
  if (currentFlashSaleIndex >= flashSales.length) currentFlashSaleIndex = 0;

  const slidesContainer = document.getElementById('fsSlides');
  if (slidesContainer) {
    const offset = -currentFlashSaleIndex * 100;
    slidesContainer.style.transform = `translateX(${offset}%)`;
  }

  updateFlashSaleDots();
}

function closeFlashBanner() {
  const overlay = document.getElementById('flashSaleOverlay');
  if (overlay) {
    overlay.classList.add('hiding');
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 200);
  }
}

function handleOverlayClick(event) {
  if (event.target.id === 'flashSaleOverlay') {
    closeFlashBanner();
  }
}

// ════════════════════════════════════════════════════════════════════════════════
// 9. TAB SWITCHING
// ════════════════════════════════════════════════════════════════════════════════

function switchTab(tabName) {
  // Handle tab switching
}

// ════════════════════════════════════════════════════════════════════════════════
// 10. INITIALIZATION
// ════════════════════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
  // Restore user preferences
  restoreFontSize();

  // Initialize features
  initializeSearch();
  initImageFallback();
  initFlashSaleBanner();
  updateLiveClock();

  // Update clock every second
  setInterval(updateLiveClock, 1000);

  // Show home screen by default
  showScreen('home');

  console.log('✅ Island Guide initialized');
});
