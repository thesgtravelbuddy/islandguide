function toggleAcc(header) {
  const body = header.nextElementSibling;
  const isOpen = header.classList.contains('open');

  const activeScreen = document.querySelector('.screen.active');
  if (activeScreen) {
    activeScreen.querySelectorAll('.acc-header.open').forEach(h => {
      h.classList.remove('open');
      h.nextElementSibling.classList.remove('open');
    });
  }
  if (!isOpen) {
    header.classList.add('open');
    body.classList.add('open');
    setTimeout(() => header.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 100);
  }
}

function expandAll(screenId) {
  const screen = document.getElementById(screenId);
  if (!screen) return;
  screen.querySelectorAll('.acc-header').forEach(h => {
    h.classList.add('open');
    h.nextElementSibling.classList.add('open');
  });
}

function collapseAll(screenId) {
  const screen = document.getElementById(screenId);
  if (!screen) return;
  screen.querySelectorAll('.acc-header').forEach(h => {
    h.classList.remove('open');
    h.nextElementSibling.classList.remove('open');
  });
}

const SEARCH_INDEX = [

  { screen: 'planning', section: 'planning', title: 'SG Arrival Card', keywords: 'arrival card digital sg immigration free official eservices.ica.gov.sg scam', snippet: 'Submit online up to 3 days before arrival — free and mandatory.' },
  { screen: 'planning', section: 'planning', title: 'Changi Airport Guide', keywords: 'changi airport terminal jewel rain vortex waterfall skytrain butterfly garden t1 t2 t3 t4 sleep snooze lounge luggage storage tourist help desk stb visitsingapore radical luggage hero', snippet: 'Terminals 1–4, Jewel, Rain Vortex, free sleeping areas, luggage storage & tourist help desks.' },
  { screen: 'planning', section: 'planning', title: 'Immigration & Customs', keywords: 'immigration customs passport visa chewing gum drugs declaration bribery red channel green channel tobacco duty free', snippet: 'Visa-free entry for most nationalities 30–90 days. Strict customs rules.' },
  { screen: 'planning', section: 'planning', title: 'SIM Cards & eSIM', keywords: 'sim card esim singtel starhub m1 simba data mobile 5g 4g tourist prepaid connectivity internet', snippet: 'Singtel, StarHub, M1 tourist SIMs from SGD$12. Bring passport to register.' },
  { screen: 'planning', section: 'planning', title: 'Currency & ATMs', keywords: 'currency exchange atm sgd dollar money changer orchard chinatown lucky plaza contactless apple pay google pay', snippet: 'Singapore Dollar (S$). Best rates at licensed money changers in city malls.' },
  { screen: 'planning', section: 'planning', title: 'Transport from Airport', keywords: 'airport transport mrt taxi grab hotel shuttle changi tanah merah last train 11pm', snippet: 'MRT ~S$2.50, Taxi ~S$25–40, Grab app recommended. Last MRT ~11:18pm.' },

  { screen: 'ground', section: 'ground', title: 'MRT Guide', keywords: 'mrt mass rapid transit train bayfront orchard chinatown bugis harbourfront priority seat ezlink tourist pass simplygo last train first train operating hours peak 2026 circle line delay', snippet: 'First train ~5:30am, last ~11:30pm. Stand left on escalators. No food.' },
  { screen: 'ground', section: 'ground', title: 'Bus Guide', keywords: 'bus tap in out fare citymapper google maps route number stop air conditioned', snippet: 'Tap in AND out with card. Use Citymapper for real-time directions.' },
  { screen: 'ground', section: 'ground', title: 'Grab Gojek Taxis', keywords: 'grab gojek taxi ride hailing surge rain uber transport app night late booking', snippet: 'Grab is the main app. Prices surge in rain — wait 15min for it to pass.' },
  { screen: 'ground', section: 'ground', title: 'Walking Areas', keywords: 'walk walking marina bay tiong bahru joo chiat kampong glam fort canning covered walkway heat humidity', snippet: 'Best to walk before 10am or after 5pm. Covered walkways protect from rain.' },
  { screen: 'planning', section: 'planning', title: 'Must-Have Apps — Download Before You Fly', keywords: 'apps wise grab google maps cdg zig download app store play store payment forex transfer rides taxi navigation must have before fly', snippet: 'Wise (our preferred payment), Grab, Google Maps, CDG Zig — download before boarding.' },

  { screen: 'places', section: 'places', title: 'Marina Bay Sands', keywords: 'marina bay sands mbs infinity pool skypark observation deck casino spectra light show shoppes', snippet: 'Observation deck S$32. Free Spectra light show 8pm & 9pm nightly.' },
  { screen: 'places', section: 'places', title: 'Gardens by the Bay', keywords: 'gardens by the bay supertrees cloud forest flower dome garden rhapsody skyway ocbc free light show 7:45pm', snippet: 'Outdoor Supertree Grove is free. Garden Rhapsody light show at 7:45pm & 8:45pm.' },
  { screen: 'places', section: 'places', title: 'Merlion Park', keywords: 'merlion park statue raffles place free photo national symbol lion fish', snippet: 'Free entry. Best photos at night with MBS behind. Raffles Place MRT.' },
  { screen: 'places', section: 'places', title: 'Singapore Flyer', keywords: 'singapore flyer observation wheel promenade views 165 metres 30 minutes malaysia indonesia', snippet: '165m tall. 30-min rotation. Views across Singapore, Malaysia, Indonesia.' },
  { screen: 'places', section: 'places', title: 'Chinatown', keywords: 'chinatown buddha tooth relic temple sri mariamman maxwell food centre pagoda street heritage hawker', snippet: 'Buddha Tooth Relic Temple, Maxwell Food Centre, heritage shophouses.' },
  { screen: 'places', section: 'places', title: 'Little India', keywords: 'little india mustafa centre tekka centre sri veeramakaliamman temple 24 hour shop deepavali', snippet: 'Mustafa Centre 24-hour shop. Sri Veeramakaliamman Temple. Deepavali festival.' },
  { screen: 'places', section: 'places', title: 'Kampong Glam & Haji Lane', keywords: 'kampong glam haji lane sultan mosque bugis street art mural boutique arab street bussorah', snippet: 'Sultan Mosque golden dome, Haji Lane murals & boutiques. Bugis MRT.' },
  { screen: 'places', section: 'places', title: 'Sentosa Island', keywords: 'sentosa universal studios sea aquarium adventure cove skyline luge beach siloso palawan cable car monorail', snippet: 'Universal Studios, beaches, USS. Take Sentosa Express from HarbourFront MRT.' },
  { screen: 'places', section: 'places', title: 'Mandai Wildlife Reserve', keywords: 'zoo night safari bird paradise river wonders mandai animals singapore zoo breakfast orangutan', snippet: 'Singapore Zoo, Night Safari, Bird Paradise, River Wonders. Book online.' },
  { screen: 'places', section: 'places', title: 'Marina Bay Neighbourhood', keywords: 'marina bay walk promenade esplanade artscience lau pa sat satay night lights waterfront jog', snippet: '3km waterfront walk. Lau Pa Sat satay stalls at night. World-class light shows.' },
  { screen: 'places', section: 'places', title: 'Tiong Bahru Neighbourhood', keywords: 'tiong bahru art deco bookshop cafe forty hands plain vanilla bakery mural spiral staircase cats', snippet: 'Art deco buildings, indie cafes, bookshops, cats. Tiong Bahru MRT.' },
  { screen: 'places', section: 'places', title: 'Joo Chiat Katong', keywords: 'joo chiat katong peranakan shophouse colourful pastel heritage nonya laksa koon seng road', snippet: 'Pastel Peranakan shophouses, Nonya food, Koon Seng Road. Paya Lebar MRT.' },
  { screen: 'places', section: 'places', title: 'Orchard Road Shopping', keywords: 'orchard road shopping mall ion ngee ann city paragon 313 somerset christmas luxury', snippet: 'ION Orchard, Ngee Ann City, Paragon. Connected by underground walkways.' },
  { screen: 'places', section: 'places', title: 'Clarke Quay Nightlife', keywords: 'clarke quay nightlife bar club riverside drinks happy hour dress code', snippet: 'Riverside bars and clubs. Happy hour early evening. Smart casual dress.' },

  { screen: 'food', section: 'food', title: 'Hawker Centres — How They Work', keywords: 'hawker centre chope tissue reserve seat tray return cash order self service peak hour queue', snippet: '"Chope" a seat with tissues. Return your tray. Cash for most stalls.' },
  { screen: 'food', section: 'food', title: 'Best Hawker Centres', keywords: 'maxwell food centre chinatown complex lau pa sat old airport road newton tekka centre hawker', snippet: 'Maxwell, Chinatown Complex, Lau Pa Sat, Old Airport Road, Tekka Centre.' },
  { screen: 'food', section: 'food', title: 'Hainanese Chicken Rice', keywords: 'chicken rice hainanese national dish tian tian poached roasted boon tong kee wee nam kee', snippet: 'Singapore\'s national dish. Silky chicken, fragrant rice, chilli on side.' },
  { screen: 'food', section: 'food', title: 'Chilli Crab', keywords: 'chilli crab seafood black pepper crab jumbo no signboard long beach mantou sauce sweet tomato', snippet: 'Sweet tomato-egg sauce, not very spicy. Eat with mantou buns.' },
  { screen: 'food', section: 'food', title: 'Laksa', keywords: 'laksa coconut curry noodle soup katong 328 janggut sungei road prawns cockles spicy', snippet: 'Coconut curry soup with prawns and rice noodles. 328 Katong Laksa.' },
  { screen: 'food', section: 'food', title: 'Char Kway Teow', keywords: 'char kway teow wok hei noodles stir fried outram park smoky soy dark sausage cockles', snippet: 'Smoky stir-fried noodles. Outram Park Fried Kway Teow is legendary.' },
  { screen: 'food', section: 'food', title: 'Satay', keywords: 'satay lau pa sat satay street charcoal grilled peanut sauce ketupat chicken beef lamb', snippet: 'Charcoal-grilled skewers with peanut sauce. Lau Pa Sat evenings.' },
  { screen: 'food', section: 'food', title: 'Roti Prata', keywords: 'roti prata flatbread indian kosong egg cheese curry prata house upper thomson late night', snippet: 'Flaky Indian flatbread with curry. Great breakfast or late-night snack.' },
  { screen: 'food', section: 'food', title: 'Kaya Toast & Kopi', keywords: 'kaya toast kopi teh coffee soft boiled eggs ya kun killiney kopitiam condensed milk bingbing', snippet: 'Classic Singapore breakfast. Kopi = coffee with condensed milk.' },
  { screen: 'food', section: 'food', title: 'Hokkien Mee', keywords: 'hokkien mee prawn mee noodle seafood nam sing geylang sambal lime', snippet: 'Prawn broth noodles with seafood. Nam Sing at Old Airport Road is Michelin.' },
  { screen: 'food', section: 'food', title: 'Bak Kut Teh', keywords: 'bak kut teh pork rib soup peppery song fa founders sin heng claypot', snippet: 'Peppery pork rib broth. Song Fa is the classic chain.' },
  { screen: 'food', section: 'food', title: 'Nasi Lemak', keywords: 'nasi lemak coconut rice sambal anchovies peanut egg halal malay changi village kitchenman', snippet: 'Fragrant coconut rice with sambal and crunchy toppings. Halal.' },
  { screen: 'food', section: 'food', title: 'Chwee Kueh & Popiah', keywords: 'chwee kueh water rice cake jian bo tiong bahru shui kueh popiah spring roll fresh crepe kway guan huat', snippet: 'Steamed rice cakes with radish (chwee kueh). Fresh spring rolls (popiah).' },
  { screen: 'food', section: 'food', title: 'Durian', keywords: 'durian king fruit musang king mao shan wang geylang banned hotel mrt smell taste creamy', snippet: 'Banned on MRT. Creamy, intense flavour. Try Mao Shan Wang variety.' },
  { screen: 'food', section: 'food', title: 'Michelin Guide Singapore 2025', keywords: 'michelin star hawker tai hwa bak chor mee crawford lane bib gourmand 2025 tian tian outram park sungei road laksa song fa nam sing hokkien lao fu zi sin heng claypot eminent frog jian bo chwee kueh boon tong kee kitchenman nasi lemak song kee fish porridge address opening hours', snippet: '1 Michelin Star hawker: Hill Street Tai Hwa (Crawford Lane). 13 Bib Gourmand picks with addresses.' },
  { screen: 'food', section: 'food', title: 'Late-Night Food', keywords: 'late night food geylang midnight supper frog porridge changi village holland village 24 hour', snippet: 'Geylang open until sunrise. Changi Village nasi lemak at midnight.' },
  { screen: 'food', section: 'food', title: 'Halal Food', keywords: 'halal muis malay indian hawker halal sg app certified muslim mosque tekka', snippet: 'MUIS certified. All Malay and most Indian stalls are Halal.' },

  { screen: 'culture', section: 'culture', title: 'Understanding Singaporeans', keywords: 'kiasu culture efficiency composure reserved private friendly singlish social norms behaviour', snippet: 'Efficient and reserved in public. Kiasu = afraid to lose out.' },
  { screen: 'culture', section: 'culture', title: 'Singlish Dictionary', keywords: 'singlish lah can shiok makan atas alamak walao blur chope kiasu language local', snippet: 'Lah, shiok, makan, chope, kiasu, blur, walao — hear these constantly!' },
  { screen: 'culture', section: 'culture', title: 'MRT & Transport Etiquette', keywords: 'escalator left stand right walk mrt backpack priority seat doorway queue phone volume headphones', snippet: 'Left stand, right walk on escalators. Backpacks off in crowded trains.' },
  { screen: 'culture', section: 'culture', title: 'Visiting Religious Sites', keywords: 'temple mosque dress modest shoes remove photography halal head covering dress code religious', snippet: 'Remove shoes, dress modestly, ask before photographing.' },
  { screen: 'culture', section: 'culture', title: 'Laws — Littering & Gum', keywords: 'littering fine chewing gum ban spitting toilet flush s$300 public cleanliness enforcement', snippet: 'Littering fines from S$300. Chewing gum banned. Flush public toilets.' },
  { screen: 'culture', section: 'culture', title: 'Laws — Vaping & Smoking', keywords: 'vaping e-cigarette ban illegal smoking designated area DSA fine S$1000 no vape', snippet: 'Vaping is completely banned. Smoking only in designated areas (DSAs).' },
  { screen: 'culture', section: 'culture', title: 'Laws — Drugs & Alcohol', keywords: 'drugs marijuana zero tolerance death penalty possession trafficking alcohol public 10:30pm little india zone', snippet: 'Zero drug tolerance — death penalty for trafficking. No public alcohol after 10:30pm.' },
  { screen: 'culture', section: 'culture', title: 'Laws — Eating on MRT & Drones', keywords: 'eating drinking mrt station fine S$500 drone permit CAAS restricted area fly', snippet: 'No food on MRT (S$500 fine). Drones require permit — most areas restricted.' },

  { screen: 'sos', section: 'sos', title: 'Emergency Numbers 995 & 999', keywords: 'emergency ambulance fire 995 police 999 SCDF SPF call help', snippet: '995 = Ambulance/Fire. 999 = Police. Save these before you land!' },
  { screen: 'sos', section: 'sos', title: 'Hospitals & Medical Help', keywords: 'hospital emergency AE Singapore General SGH Tan Tock Seng Raffles clinic doctor GP', snippet: 'SGH, Tan Tock Seng, Raffles Hospital all have 24-hr A&E.' },
  { screen: 'sos', section: 'sos', title: 'Lost Passport', keywords: 'lost passport embassy immigration checkpoints authority immigration stolen emergency travel document consulate', snippet: 'Contact your embassy first. Immigration & Checkpoints Authority hotline: 6391 6100.' },
  { screen: 'sos', section: 'sos', title: 'Safety Tips', keywords: 'safe safety tips travel insurance tap water pickpocket crime low risk vaccinations', snippet: 'Singapore is very safe. Tap water safe. Get travel insurance.' },
];

function handleSearch(query) {
  const panel = document.getElementById('searchResultsPanel');
  const list = document.getElementById('searchResultsList');
  const clearBtn = document.getElementById('searchClearBtn');
  const header = document.getElementById('searchResultsHeader');

  if (!query || query.trim().length < 2) {
    panel.classList.remove('visible');
    clearBtn.style.display = 'none';
    return;
  }
  clearBtn.style.display = '';
  const q = query.toLowerCase().trim();
  const words = q.split(/\s+/);

  const results = SEARCH_INDEX.filter(item => {
    const haystack = (item.title + ' ' + item.keywords + ' ' + item.snippet).toLowerCase();
    return words.every(w => haystack.includes(w));
  });

  panel.classList.add('visible');
  if (results.length === 0) {
    list.innerHTML = '<div class="search-no-results">😔 No results for "' + escapeHtml(query) + '".<br>Try different keywords!</div>';
    header.textContent = 'No results';
    return;
  }

  header.textContent = results.length + ' result' + (results.length !== 1 ? 's' : '') + ' found';

  const sectionLabels = {
    planning: '✈️ Planning', ground: '🧰 My Toolbox', places: '🏙️ Places',
    food: '🍜 Food', culture: '🤝 Culture', sos: '🆘 Emergency'
  };

  list.innerHTML = results.map(r => {
    const snip = highlightText(r.snippet, words);
    return `<div class="search-result-item" onclick="goToResult('${r.screen}')">
      <span class="sri-section ${r.section}">${sectionLabels[r.section] || r.section}</span>
      <div class="sri-text">
        <div class="sri-title">${highlightText(r.title, words)}</div>
        <div class="sri-snippet">${snip}</div>
      </div>
    </div>`;
  }).join('');
}

function goToResult(screenId) {
  clearSearch();
  switchTab(screenId);

  setTimeout(() => expandAll('screen-' + screenId), 150);
}

function clearSearch() {
  document.getElementById('globalSearchInput').value = '';
  document.getElementById('searchResultsPanel').classList.remove('visible');
  document.getElementById('searchClearBtn').style.display = 'none';
}

function highlightText(text, words) {
  let result = escapeHtml(text);
  words.forEach(w => {
    if (w.length < 2) return;
    const re = new RegExp('(' + escapeRegex(w) + ')', 'gi');
    result = result.replace(re, '<span class="sri-keyword">$1</span>');
  });
  return result;
}

function imgLoaded(img, phId) {
  img.classList.remove('loading');
  img.classList.add('loaded');
  const ph = document.getElementById(phId);
  if (ph) ph.classList.add('hidden');
}

function imgError(img, phId, fallbackSrc) {
  if (img.src !== fallbackSrc) {
    img.src = fallbackSrc;
  } else {

    img.style.display = 'none';
    const ph = document.getElementById(phId);
    if (ph) {
      ph.style.fontSize = '64px';
      ph.style.color = 'rgba(255,255,255,0.3)';
    }
  }
}

async function loadTickers() {

  try {
    const rf = await fetch('https://open.er-api.com/v6/latest/SGD');
    const df = await rf.json();
    const rates = df.rates || {};
    const syms = ['USD','AUD','GBP','EUR','MYR','CNY','JPY','HKD','INR','THB'];
    const fxTrack = document.getElementById('fxTickerTrack');
    if (fxTrack) {
      fxTrack.innerHTML = syms
        .filter(s => rates[s])
        .map(s => `<span class="ticker-item"><span class="t-icon">💱</span>SGD/${s}: ${rates[s].toFixed(3)}</span>`)
        .join('') + syms.filter(s => rates[s]).map(s => `<span class="ticker-item"><span class="t-icon">💱</span>SGD/${s}: ${rates[s].toFixed(3)}</span>`).join('');

      if (!fxLastLoaded) { fxRates = rates; fxLastLoaded = Date.now(); fxConvert(); }
    }
  } catch(e) {
    const t = document.getElementById('fxTickerTrack');
    if (t) t.innerHTML = '<span class="ticker-item">💱 Forex rates temporarily unavailable</span>';
  }


  try {
    const rn = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.channelnewsasia.com%2Fapi%2Fv1%2Frss-outbound-feed%3F_format%3Dxml%26category%3D10416');
    const dn = await rn.json();
    const newsTrack = document.getElementById('newsTickerTrack');
    if (newsTrack && dn.status === 'ok' && dn.items?.length) {
      const items = dn.items.slice(0, 12);
      const html = [...items, ...items].map(i => `<span class="ticker-item"><span class="t-icon">📰</span>${i.title}</span>`).join('');
      newsTrack.innerHTML = html;
    }
  } catch(e) {
    const t = document.getElementById('newsTickerTrack');
    if (t) t.innerHTML = '<span class="ticker-item">📰 CNA: Live feed temporarily unavailable</span>';
  }
}

document.addEventListener('DOMContentLoaded', () => {

  document.body.classList.toggle('is-home', !!document.getElementById('screen-home')?.classList.contains('active'));
  loadTickers();

  setInterval(loadTickers, 30 * 60 * 1000);
  initFontScaling();
});

function escapeHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
}

function togglePlugFlip(card) {
  const isFlipped = card.classList.contains('flipped');
  const inner = card.querySelector('.flip-card-inner');
  card.classList.toggle('flipped');

  if (!isFlipped) {
    const img = card.querySelector('.flip-back img');
    if (img && img.getAttribute('loading') === 'eager') {
      img.removeAttribute('loading');
    }
  }
}

function updateSGClock() {
  const now = new Date();
  const sgOptions = { timeZone: 'Asia/Singapore' };
  const timeStr = now.toLocaleTimeString('en-GB', { ...sgOptions, hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const dateStr = now.toLocaleDateString('en-SG', { ...sgOptions, weekday: 'short', day: 'numeric', month: 'short' });
  const clockEl = document.getElementById('sgLiveClock');
  const dateEl = document.getElementById('sgLiveDate');
  if (clockEl) clockEl.textContent = timeStr;
  if (dateEl) dateEl.textContent = dateStr + ' · SGT';
}
updateSGClock();
setInterval(updateSGClock, 1000);

function openAppsAcc() {
  const planningScreen = document.getElementById('screen-planning');
  if (planningScreen && !planningScreen.classList.contains('active')) {
    switchTab('planning');
  }
  setTimeout(() => {
    const body = document.getElementById('apps-acc-body');
    const arrow = document.querySelector('.apps-teaser-arrow');
    if (!body) return;
    const isOpen = body.style.display !== 'none';
    body.style.display = isOpen ? 'none' : 'block';
    if (arrow) arrow.textContent = isOpen ? '▼' : '▲';
    if (!isOpen) {
      setTimeout(() => {
        const acc = document.getElementById('apps-accordion');
        if (acc) acc.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, 100);
}

function openMessenger() {
  const appLink = "fb-messenger://user-thread/115403788266848";
  const webLink = "https://m.me/115403788266848";


  window.location.href = appLink;


  setTimeout(() => {
    window.location.href = webLink;
  }, 800);
}

let weatherLastLoaded = 0;
async function loadLiveWeather() {
  const now = Date.now();
  if (now - weatherLastLoaded < 30 * 60 * 1000) return;
  try {
    const r = await fetch('https://api-open.data.gov.sg/v2/real-time/api/two-hr-forecast');
    const d = await r.json();
    const forecast = d.data?.items?.[0]?.forecasts?.[0]?.forecast;
    if (forecast) document.getElementById('lwp-desc').textContent = forecast;
    document.getElementById('lwp-temp').textContent = '31°';
  } catch(e) {
    document.getElementById('lwp-desc').textContent = 'Hot & humid';
    document.getElementById('lwp-temp').textContent = '31°';
  }
  try {
    const r4 = await fetch('https://api-open.data.gov.sg/v2/real-time/api/four-day-outlook');
    const d4 = await r4.json();
    const forecasts = d4.data?.records?.[0]?.forecasts || [];
    document.getElementById('lwp-forecast').innerHTML = forecasts.map(f => {
      const day = new Date(f.timestamp).toLocaleDateString('en-SG', { weekday: 'short' });
      const outlook = (typeof f.forecast === 'object') ? (f.forecast.summary || f.forecast.text || '') : f.forecast;
      const hi = f.temperature?.high || '';
      return `<div class="lwp-day"><div class="lwp-day-name">${day}</div><div class="lwp-day-out">${outlook}</div><div class="lwp-day-temp">${hi}°</div></div>`;
    }).join('');
  } catch(e) { console.error('4-day forecast error', e); }
  weatherLastLoaded = Date.now();
}

function showScreen(screenId) {

  document.body.classList.toggle('is-home', screenId === 'home');
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const screen = document.getElementById('screen-' + screenId);
  if (screen) {
    screen.classList.add('active');
    window.scrollTo(0, 0);
  }
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById('tab-' + screenId);
  if (btn) btn.classList.add('active');
  clearSearch();
  if (screenId === 'ground') {
    setTimeout(loadLiveWeather, 250);
    setTimeout(loadFxRates, 250);
  }
}
function switchTab(tab) {
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById('tab-' + tab);
  if (btn) btn.classList.add('active');
  showScreen(tab);

}

document.addEventListener('click', function(e) {
  const btn = e.target.closest('#ground-weather-acc .acc-header');
  if (btn) setTimeout(loadLiveWeather, 100);
});

let fxRates = {};
let fxLastLoaded = 0;
async function loadFxRates() {
  const now = Date.now();
  if (now - fxLastLoaded < 30 * 60 * 1000) return;
  try {
    const r = await fetch('https://open.er-api.com/v6/latest/SGD');
    const d = await r.json();
    fxRates = d.rates || {};
    fxLastLoaded = Date.now();
    fxConvert();
  } catch(e) { console.error('FX error', e); }
}
function fxConvert() {
  const amt = parseFloat(document.getElementById('fxAmt')?.value) || 0;
  const curr = document.getElementById('fxCurr')?.value;
  const res = document.getElementById('fxRes');
  if (res && fxRates[curr]) {
    res.textContent = (amt * fxRates[curr]).toFixed(3) + ' ' + curr;
  }
}

const gAttractions = [
  { name: "328 Katong Laksa", q: "328+Katong+Laksa+Singapore" },
  { name: "Adventure Cove Waterpark", q: "Adventure+Cove+Waterpark+Sentosa" },
  { name: "Albert Centre Market & Food Centre", q: "Albert+Centre+Market+Food+Centre+Singapore" },
  { name: "Amoy Street Food Centre", q: "Amoy+Street+Food+Centre+Singapore" },
  { name: "Ann Siang Hill", q: "Ann+Siang+Hill+Singapore" },
  { name: "Arab Street", q: "Arab+Street+Singapore" },
  { name: "ArtScience Museum", q: "ArtScience+Museum+Singapore" },
  { name: "Asian Civilisations Museum", q: "Asian+Civilisations+Museum+Singapore" },
  { name: "ATLAS Bar", q: "ATLAS+Bar+Singapore" },
  { name: "Bayfront MRT Station", q: "Bayfront+MRT+Station+Singapore" },
  { name: "Bird Paradise", q: "Bird+Paradise+Singapore" },
  { name: "Boat Quay", q: "Boat+Quay+Singapore" },
  { name: "Buddha Tooth Relic Temple", q: "Buddha+Tooth+Relic+Temple+Singapore" },
  { name: "Bugis Junction", q: "Bugis+Junction+Singapore" },
  { name: "Bugis Street Market", q: "Bugis+Street+Market+Singapore" },
  { name: "Changi Airport", q: "Changi+Airport+Singapore" },
  { name: "Chinatown", q: "Chinatown+Singapore" },
  { name: "Chinatown Complex Food Centre", q: "Chinatown+Complex+Food+Centre+Singapore" },
  { name: "Clarke Quay", q: "Clarke+Quay+Singapore" },
  { name: "Cloud Forest (Gardens by the Bay)", q: "Cloud+Forest+Gardens+by+the+Bay+Singapore" },
  { name: "Esplanade — Theatres on the Bay", q: "Esplanade+Theatres+on+the+Bay+Singapore" },
  { name: "Flower Dome (Gardens by the Bay)", q: "Flower+Dome+Gardens+by+the+Bay+Singapore" },
  { name: "Fort Canning Park", q: "Fort+Canning+Park+Singapore" },
  { name: "Gardens by the Bay", q: "Gardens+by+the+Bay+Singapore" },
  { name: "Haji Lane", q: "Haji+Lane+Singapore" },
  { name: "IMM Mall", q: "IMM+Mall+Singapore" },
  { name: "Jewel Changi Airport", q: "Jewel+Changi+Airport+Singapore" },
  { name: "Joo Chiat / Koon Seng Peranakan Houses", q: "Koon+Seng+Road+Peranakan+Houses+Singapore" },
  { name: "Little India", q: "Little+India+Singapore" },
  { name: "Madame Tussauds Singapore", q: "Madame+Tussauds+Singapore" },
  { name: "Marina Bay Sands", q: "Marina+Bay+Sands+Singapore" },
  { name: "Maxwell Food Centre", q: "Maxwell+Food+Centre+Singapore" },
  { name: "Merlion Park", q: "Merlion+Park+Singapore" },
  { name: "Museum of Ice Cream Singapore", q: "Museum+of+Ice+Cream+Singapore" },
  { name: "Night Safari", q: "Night+Safari+Singapore" },
  { name: "Old Airport Road Food Centre", q: "Old+Airport+Road+Food+Centre+Singapore" },
  { name: "Orchard Road", q: "Orchard+Road+Singapore" },
  { name: "Raffles Hotel — Long Bar", q: "Long+Bar+Raffles+Hotel+Singapore" },
  { name: "River Wonders", q: "River+Wonders+Singapore" },
  { name: "Science Centre Singapore", q: "Science+Centre+Singapore" },
  { name: "Sentosa Island", q: "Sentosa+Island+Singapore" },
  { name: "Singapore Botanic Gardens", q: "Singapore+Botanic+Gardens" },
  { name: "Singapore Cable Car (Mount Faber)", q: "Singapore+Cable+Car+Mount+Faber" },
  { name: "Singapore Flyer", q: "Singapore+Flyer" },
  { name: "Singapore River Cruise", q: "Singapore+River+Cruise" },
  { name: "Singapore Zoo", q: "Singapore+Zoo" },
  { name: "Skyline Luge Singapore", q: "Skyline+Luge+Singapore" },
  { name: "Sultan Mosque", q: "Sultan+Mosque+Singapore" },
  { name: "Tiong Bahru Market", q: "Tiong+Bahru+Market+Singapore" },
  { name: "Universal Studios Singapore", q: "Universal+Studios+Singapore" },
  { name: "VivoCity", q: "VivoCity+Singapore" }
];
let gFiltered = [...gAttractions];
let gCarouselInit = false;

function initCarousel() {
  if (gCarouselInit) return;
  populateGCarousel();
  gCarouselInit = true;
}

let gGridPage = 0;
const G_GRID_PER_PAGE = 4;

function populateGGrid() {
  const grid = document.getElementById('gGridTrack');
  if (!grid) return;
  const start = gGridPage * G_GRID_PER_PAGE;
  const page = gFiltered.slice(start, start + G_GRID_PER_PAGE);
  grid.innerHTML = page.map(a => {
    const dest = encodeURIComponent(a.name + ' Singapore');
    const url = `https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=${dest}&travelmode=transit`;
    return `<a href="${url}" target="_blank" style="background:linear-gradient(135deg,var(--hot),var(--hot2));color:white;text-decoration:none;padding:8px 6px;border-radius:10px;font-size:9.5px;font-weight:700;display:flex;flex-direction:column;align-items:center;gap:4px;text-align:center;line-height:1.3;min-height:58px;justify-content:center;">
      <span style="font-size:14px;">🚇</span>
      <span>${escapeHtml(a.name)}</span>
    </a>`;
  }).join('');
}

function scrollGGrid(dir) {
  const maxPage = Math.ceil(gFiltered.length / G_GRID_PER_PAGE) - 1;
  gGridPage = Math.max(0, Math.min(maxPage, gGridPage + dir));
  populateGGrid();
}

function filterGAttractions() {
  const term = (document.getElementById('gAttrSearch')?.value || '').toLowerCase();
  gFiltered = gAttractions.filter(a => a.name.toLowerCase().includes(term));
  populateGCarousel();
}

function populateGCarousel() {
  const track = document.getElementById('gCarouselTrack');
  if (!track) return;
  track.innerHTML = gFiltered.map(a => {
    const dest = encodeURIComponent(a.name + ' Singapore');
    const url = `https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=${dest}&travelmode=transit`;
    return `
    <div class="g-nav-card">
      <b>${escapeHtml(a.name)}</b>
      <a href="${url}" target="_blank" style="background:linear-gradient(90deg,var(--hot),var(--hot2));color:white;text-decoration:none;padding:10px;border-radius:10px;font-size:10px;font-weight:700;display:block;text-transform:uppercase;letter-spacing:0.5px;">🚇 GET ROUTE</a>
    </div>`;
  }).join('');
}

function scrollGCarousel(dir) {
  const track = document.getElementById('gCarouselTrack');
  if (track) track.scrollBy({ left: dir * 180, behavior: 'smooth' });
}

let currentFontScale = 1.0;
const fontScales = [0.85, 0.9, 0.95, 1.0, 1.08, 1.16, 1.25, 1.4, 1.6, 1.8, 2.0];
let fontScaleIdx = 3;

function initFontScaling() {
const elements = document.querySelectorAll(
  'p, span, li, a, button, label, strong, em, b, i, h1, h2, h3, h4, h5, h6, div'
);

  elements.forEach(el => {
    const size = window.getComputedStyle(el).fontSize;
    if (size) {
      el.dataset.baseSize = parseFloat(size);
    }
  });
}

function changeFontSize(dir) {
  fontScaleIdx = Math.max(0, Math.min(fontScales.length - 1, fontScaleIdx + dir));
  currentFontScale = fontScales[fontScaleIdx];

 const elements = document.querySelectorAll(
  'p, span, li, a, button, label, strong, em, b, i, h1, h2, h3, h4, h5, h6, div'
);

  elements.forEach(el => {
    if (!el.dataset.baseSize) return;
    const newSize = el.dataset.baseSize * currentFontScale;
    el.style.fontSize = newSize + 'px';
  });
}

const FS_KEY = 'sgFlashSales_v1';
let fsSales = [];
let fsCurrentIdx = 0;
let fsTouchStartX = 0;
let fsShown = false;

function fsTodaySGT() {
  const now = new Date();
  const sgt = new Date(now.getTime() + (8 * 60 * 60 * 1000));
  return sgt.toISOString().slice(0, 10);
}

function fsFormatDate(isoDate) {
  const [y, m, d] = isoDate.split('-');
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return parseInt(d) + ' ' + months[parseInt(m)-1];
}

function fsLoadSales() {
  try {
    const raw = localStorage.getItem(FS_KEY);
    const all = raw ? JSON.parse(raw) : [];
    const today = fsTodaySGT();

    fsSales = all.filter(s => s.active && s.usedBy >= today);
  } catch(e) { fsSales = []; }
}

function fsRenderSlides() {
  const slidesEl = document.getElementById('fsSlides');
  const dotRow = document.getElementById('fsDotRow');
  const counter = document.getElementById('fsBannerCounter');
  const hint = document.getElementById('fsSwipeHint');
  const nav = document.getElementById('fsNav');

  slidesEl.innerHTML = fsSales.map((sale, i) => {
    const displayPrice   = (sale.displayPrice   || (sale.price + 5)).toFixed(2);
    const standardPrice  = sale.standardPrice   ? sale.standardPrice.toFixed(2) : null;
    const savingPct      = sale.savingPct        || null;
    return `
    <div class="fs-slide">
      <div class="fs-slide-attraction">${sale.attraction}</div>
      <div class="fs-slide-meta">
        <span class="fs-slide-badge">${sale.type === 'Adult' ? '🧑 Adult' : '👶 Child'}</span>
        <span class="fs-slide-badge">📅 Use by ${fsFormatDate(sale.usedBy)}</span>
        ${savingPct ? `<span class="fs-slide-badge" style="background:rgba(5,150,105,0.18);color:#064e3b;font-weight:800;">💚 Save ${savingPct}% off our price</span>` : ''}
      </div>
      <div class="fs-slide-price-row">
        <div>
          ${standardPrice ? `<div style="font-size:12px;color:#92400E;opacity:0.75;text-decoration:line-through;font-weight:700;margin-bottom:2px;">Normally S$${standardPrice}</div>` : ''}
          <div class="fs-sale-price">S$${displayPrice}</div>
        </div>
        <div class="fs-sale-note">Flash sale<br>price 🔥</div>
      </div>
    </div>`;
  }).join('');


  dotRow.innerHTML = fsSales.map((_, i) =>
    `<div class="fs-dot ${i === 0 ? 'active' : ''}"></div>`
  ).join('');


  counter.textContent = fsSales.length > 1 ? `1 of ${fsSales.length}` : '1 deal';


  if (fsSales.length <= 1) {
    hint.classList.add('hidden');
    nav.style.display = 'none';
  } else {
    hint.classList.remove('hidden');
    nav.style.display = 'flex';
  }

  fsCurrentIdx = 0;
  fsUpdateNav();
}

function fsGoTo(idx) {
  if (idx < 0 || idx >= fsSales.length) return;
  fsCurrentIdx = idx;
  const slides = document.getElementById('fsSlides');
  slides.style.transform = `translateX(-${idx * 100}%)`;


  document.querySelectorAll('.fs-dot').forEach((d, i) => {
    d.classList.toggle('active', i === idx);
  });


  document.getElementById('fsBannerCounter').textContent =
    fsSales.length > 1 ? `${idx+1} of ${fsSales.length}` : '1 deal';

  fsUpdateNav();
}

function fsNav(dir) {
  fsGoTo(fsCurrentIdx + dir);
}

function fsUpdateNav() {
  const prev = document.getElementById('fsPrevBtn');
  const next = document.getElementById('fsNextBtn');
  if (prev) prev.disabled = fsCurrentIdx === 0;
  if (next) next.disabled = fsCurrentIdx >= fsSales.length - 1;
}

function openFlashBanner() {
  fsLoadSales();
  if (fsSales.length === 0) return;
  fsRenderSlides();
  const overlay = document.getElementById('flashSaleOverlay');
  overlay.style.display = 'flex';
  fsShown = true;


  const wrap = document.getElementById('fsSlideWrap');
  wrap.addEventListener('touchstart', e => { fsTouchStartX = e.touches[0].clientX; }, { passive: true });
  wrap.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - fsTouchStartX;
    if (Math.abs(dx) > 40) fsNav(dx < 0 ? 1 : -1);
  }, { passive: true });
}

function closeFlashBanner() {
  const overlay = document.getElementById('flashSaleOverlay');
  overlay.classList.add('hiding');
  setTimeout(() => {
    overlay.style.display = 'none';
    overlay.classList.remove('hiding');
  }, 200);
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('flashSaleOverlay')) {
    closeFlashBanner();
  }
}

function checkAndShowFlashBanner() {
  fsLoadSales();
  if (fsSales.length > 0 && !fsShown) {
    setTimeout(openFlashBanner, 800);
  }
}

window.addEventListener('storage', function(e) {
  if (e.key === FS_KEY) {
    fsLoadSales();
    if (fsSales.length > 0 && document.getElementById('screen-home').classList.contains('active')) {
      fsRenderSlides();
      if (document.getElementById('flashSaleOverlay').style.display === 'none') {
        openFlashBanner();
      }
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('screen-home').classList.contains('active')) {
    checkAndShowFlashBanner();
  }

  if (document.getElementById('screen-ground') && document.getElementById('screen-ground').classList.contains('active')) {
    initCarousel();
  }

  setTimeout(function(){ if(!gCarouselInit){ initCarousel(); } }, 300);
});