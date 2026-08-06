const POSTS = [{"ilot":"1","poste":"1 V1 AB Long","surface":1080.0,"type":"P","debit":5.04},{"ilot":"1","poste":"1 V2 AB Court","surface":1350.0,"type":"P","debit":6.3},{"ilot":"1","poste":"1 V3 PFI Court / Eco","surface":1313.0,"type":"P","debit":7.35},{"ilot":"1","poste":"1 V4 PFI Long","surface":1260.0,"type":"P","debit":4.2},{"ilot":"2-4","poste":"2 V1 V.Public Vieux","surface":2880.0,"type":"P","debit":8.4},{"ilot":"2-4","poste":"2 V2 Kaki-Pomme","surface":300.0,"type":"P","debit":1.4},{"ilot":"2-4","poste":"2 V3 Agrumes","surface":900.0,"type":"P","debit":4.2},{"ilot":"2-4","poste":"2 V4 Abricot","surface":1200.0,"type":"P","debit":5.6},{"ilot":"2-4","poste":"2 V5 Cerise","surface":600.0,"type":"P","debit":2.8},{"ilot":"3","poste":"3 V1 Taille 1","surface":3240.0,"type":"P","debit":5.76},{"ilot":"3","poste":"3 V2 Taille 2","surface":2700.0,"type":"P","debit":4.8},{"ilot":"3","poste":"3 V3 Irri-Ferti A","surface":2160.0,"type":"V","debit":3.84},{"ilot":"3","poste":"3 V3 Irri-Ferti B","surface":2160.0,"type":"V","debit":3.84},{"ilot":"3","poste":"3 V3 Irri-Ferti C","surface":2160.0,"type":"V","debit":3.84},{"ilot":"3","poste":"3 V3 Irri-Ferti D","surface":2160.0,"type":"V","debit":3.84},{"ilot":"3","poste":"3 V4 Bio","surface":3240.0,"type":"V","debit":5.76},{"ilot":"5","poste":"5 V1 Vigne Rés.Séch.2021+23","surface":5468.0,"type":"P","debit":3.89},{"ilot":"5","poste":"5 V2 Vigne 2021+23","surface":4253.0,"type":"P","debit":3.02},{"ilot":"5","poste":"5 V3 Vigne 2017 VCR","surface":2633.0,"type":"P","debit":1.6},{"ilot":"6","poste":"6 V1 Nectarnovala","surface":2184.0,"type":"P","debit":12.74},{"ilot":"7","poste":"7 V1 Cerise","surface":3360.0,"type":"V","debit":5.94},{"ilot":"7","poste":"7 OREVE Gobelet - V1 à V6","surface":4032.0,"type":"P","debit":3.584},{"ilot":"7","poste":"7  OREVE Haie - V7 à V10","surface":1296.0,"type":"P","debit":1.728},{"ilot":"7","poste":"7 V3 Peche BIO 2023","surface":4050.0,"type":"P","debit":18.9},{"ilot":"7","poste":"7 V4 Pavie Gobelet","surface":2835.0,"type":"P","debit":13.23},{"ilot":"7","poste":"7 V5 Pavie Simple Y","surface":734.0,"type":"P","debit":3.36},{"ilot":"7","poste":"7 V6 Pavies Tatura","surface":972.0,"type":"P","debit":5.04},{"ilot":"8","poste":"8 V1 Coraline Haie","surface":912.0,"type":"V","debit":4.18},{"ilot":"8","poste":"8 V2 Coraline Témoin","surface":504.0,"type":"V","debit":1.54},{"ilot":"8","poste":"8 V3 Abricot","surface":3408.0,"type":"V","debit":9.94},{"ilot":"9","poste":"9 V1 Pêches plates 2026","surface":964.0,"type":"P","debit":3.36},{"ilot":"9","poste":"9 V2 Pêche Boréal","surface":1920.0,"type":"P","debit":5.6},{"ilot":"9","poste":"9 V3 Pêche Orine","surface":1944.0,"type":"V","debit":7.56},{"ilot":"9","poste":"9 V5 Abricot Nelson","surface":2016.0,"type":"V","debit":5.88},{"ilot":"9","poste":"9 V6 Pavies Gobelets","surface":3080.0,"type":"V","debit":12.32},{"ilot":"9","poste":"9 V7 Pavies Haies","surface":1918.0,"type":"V","debit":9.87},{"ilot":"10","poste":"10 V1 COPERNIC Bi-axe","surface":1638.0,"type":"P","debit":3.74},{"ilot":"10","poste":"10 V2 COPERNIC Gob. Apl","surface":1944.0,"type":"P","debit":3.89},{"ilot":"10","poste":"10 V3 COPERERNIC Réf","surface":1800.0,"type":"P","debit":1.34},{"ilot":"11","poste":"11 V1-A PG Pêche Réf","surface":432.0,"type":"P","debit":1.68},{"ilot":"11","poste":"11 V1-B PG Pêche -30%","surface":1728.0,"type":"P","debit":6.72},{"ilot":"11","poste":"11 V1-C Pêche -50%","surface":624.0,"type":"P","debit":3.64},{"ilot":"11","poste":"11 V2-A PG Abricot -30%","surface":2400.0,"type":"P","debit":7.0},{"ilot":"11","poste":"11 V2-B PG Abricot Réf","surface":480.0,"type":"P","debit":1.4},{"ilot":"11","poste":"11 V3 Abricot 2014","surface":1392.0,"type":"V","debit":4.97},{"ilot":"11","poste":"11 V4 CAPReD PFI","surface":1932.0,"type":"V","debit":6.44},{"ilot":"11","poste":"11 V5 CAPReD ECO","surface":2025.0,"type":"V","debit":9.45},{"ilot":"11","poste":"11 V6 Pêche BI 2025","surface":4950.0,"type":"P","debit":23.1},{"ilot":"12","poste":"12 V1-A Clém Confort","surface":720.0,"type":"P","debit":1.92},{"ilot":"12","poste":"12 V1-B Clém Bâche","surface":720.0,"type":"P","debit":1.92},{"ilot":"12","poste":"12 V1-C Clém Piloté","surface":720.0,"type":"P","debit":1.92},{"ilot":"12","poste":"12 V2 Agrumes 2026","surface":1605.0,"type":"P","debit":4.28},{"ilot":"12","poste":"12 V3 Citrons 2026","surface":300.0,"type":"P","debit":0.8},{"ilot":"13","poste":"13 V1 Cerise 19","surface":4032.0,"type":"P","debit":11.76},{"ilot":"13","poste":"13 V2 Pêche Najentina","surface":2016.0,"type":"P","debit":7.84},{"ilot":"13","poste":"13 V3 Pêche Najiris","surface":1296.0,"type":"P","debit":7.56},{"ilot":"13","poste":"13 V4 Pêche Moncante","surface":2016.0,"type":"P","debit":7.84},{"ilot":"13","poste":"13 V5 Pêche Pabina","surface":1296.0,"type":"P","debit":7.56},{"ilot":"13","poste":"13 V6 Pêche Bellamine","surface":2016.0,"type":"V","debit":7.84},{"ilot":"13","poste":"13 V7 Pêche 12-13","surface":2136.0,"type":"V","debit":6.23},{"ilot":"15","poste":"15 V1 Abricot Perlecot","surface":2088.0,"type":"V","debit":6.09},{"ilot":"15","poste":"15 V1 Abricot Vanilla","surface":1560.0,"type":"V","debit":4.55},{"ilot":"15","poste":"15 V2 Pêche Wred","surface":1636.0,"type":"P","debit":6.37},{"ilot":"15","poste":"15 V3 Pêche Nabyr/Pajurite","surface":1872.0,"type":"P","debit":1.33},{"ilot":"15","poste":"15 V4 Pêche SweetReine","surface":1636.0,"type":"P","debit":6.37},{"ilot":"16","poste":"16 V1 Pêche Nectatop","surface":1944.0,"type":"V","debit":6.78},{"ilot":"16","poste":"16 V1 Pêche Sweetlove","surface":1944.0,"type":"V","debit":7.37},{"ilot":"16","poste":"16 V2 Abricot 2015","surface":1440.0,"type":"V","debit":4.2},{"ilot":"16","poste":"16 V3 Abricots BI 2021","surface":2541.0,"type":"P","debit":8.47},{"ilot":"17","poste":"17 V1 Abricot PG","surface":2856.0,"type":"V","debit":9.52},{"ilot":"17","poste":"17 V2 Pêche Mica","surface":486.0,"type":"V","debit":1.49},{"ilot":"17","poste":"17 V3 Cristal PG","surface":1458.0,"type":"V","debit":4.46},{"ilot":"17","poste":"17 V4 Abricot BioAg 20+24","surface":2250.0,"type":"P","debit":12.6},{"ilot":"17","poste":"17 V5 Pêche BioAg 20+23","surface":972.0,"type":"P","debit":5.67},{"ilot":"18","poste":"18 V1 Abricot BI 23+24","surface":2400.0,"type":"P","debit":7.0},{"ilot":"18","poste":"18 V2 Abricot BI 2025","surface":1560.0,"type":"P","debit":4.55},{"ilot":"18","poste":"18 V3 Peche BI 23+24","surface":2563.0,"type":"P","debit":14.35},{"ilot":"18","poste":"18 V4 Peche BI 2021","surface":2250.0,"type":"P","debit":12.6},{"ilot":"19","poste":"19 V1 Olive PFI","surface":1512.0,"type":"V","debit":2.94},{"ilot":"19","poste":"19 V4 Olive Bio","surface":1512.0,"type":"V","debit":2.94},{"ilot":"19","poste":"19 V2 Ecophyto","surface":2044.0,"type":"P","debit":1.74},{"ilot":"19","poste":"19 V3 PFI","surface":1944.0,"type":"P","debit":7.56},{"ilot":"19","poste":"19 V5 Abricot 2026","surface":2256.0,"type":"P","debit":6.58},{"ilot":"20","poste":"20 V1 BI Pêche","surface":1250.0,"type":"P","debit":7.0},{"ilot":"20","poste":"20 V2 BioAg Pêche","surface":864.0,"type":"P","debit":5.04},{"ilot":"20","poste":"20 V3 BioAg Abricot","surface":1575.0,"type":"P","debit":8.82},{"ilot":"20","poste":"20 V4 BI Abricot","surface":2520.0,"type":"V","debit":8.4},{"ilot":"20","poste":"20 V5 PG Abricot","surface":1533.0,"type":"V","debit":5.11},{"ilot":"21","poste":"21 V1 Abricot","surface":648.0,"type":"V","debit":1.89},{"ilot":"21","poste":"21 V1 Cerise","surface":1416.0,"type":"V","debit":4.13}];
const FILTERS = [{"filtre":"I1-3","debitMax":20.0},{"filtre":"I2","debitMax":15.0},{"filtre":"I5","debitMax":20.0},{"filtre":"I7-1","debitMax":15.0},{"filtre":"I7-2","debitMax":15.0},{"filtre":"I6-8","debitMax":15.0},{"filtre":"I9-1","debitMax":15.0},{"filtre":"I9-2 pavies","debitMax":20.0},{"filtre":"I10","debitMax":20.0},{"filtre":"I11-1","debitMax":15.0},{"filtre":"I11-2","debitMax":15.0},{"filtre":"I11-3","debitMax":15.0},{"filtre":"I12","debitMax":20.0},{"filtre":"I13","debitMax":15.0},{"filtre":"I15","debitMax":15.0},{"filtre":"I16","debitMax":15.0},{"filtre":"I17-1","debitMax":15.0},{"filtre":"I18","debitMax":15.0},{"filtre":"I19","debitMax":15.0},{"filtre":"I20","debitMax":15.0},{"filtre":"I21","debitMax":15.0}];

const SUPABASE_URL = "https://mpzxistdpepshkqjdndg.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_X3vT2d60KfC_pJ2uObp6Wg_UsLG6Cze";

const db = window.supabase?.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  }
);

const state = {
  session: null,
  irrigations: [],
  filters: [],
  posts: POSTS.slice(),
  referenceFilters: FILTERS.slice(),
  loading: false
};

let editingIrrigationId = null;
let editingFilterId = null;

const $ = (id) => document.getElementById(id);

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>'"]/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  }[char]));
}

function normalizeNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

function naturalSort(a, b) {
  return String(a).localeCompare(String(b), "fr", { numeric: true, sensitivity: "base" });
}

function formatNumber(value, digits = 2) {
  return normalizeNumber(value).toLocaleString("fr-FR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: digits
  });
}

function displayStatus(value) {
  return value === "Réalisée" ? "Lancée" : value;
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function dateToLocalParts(value) {
  const parsed = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(parsed.getTime())) return { date: "", time: "" };
  return {
    date: `${parsed.getFullYear()}-${pad(parsed.getMonth() + 1)}-${pad(parsed.getDate())}`,
    time: `${pad(parsed.getHours())}:${pad(parsed.getMinutes())}`
  };
}

function toIsoDateTime(date, time) {
  if (!date || !time) return null;
  const parsed = new Date(`${date}T${time}:00`);
  return Number.isNaN(parsed.getTime()) ? null : parsed.toISOString();
}

function formatDateTime(date, time) {
  if (!date || !time) return "—";
  const parsed = new Date(`${date}T${time}:00`);
  if (Number.isNaN(parsed.getTime())) return "—";
  return new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "short",
    timeStyle: "short"
  }).format(parsed);
}

function formatDuration(totalMinutes) {
  const minutes = Math.max(0, Math.round(normalizeNumber(totalMinutes)));
  const hoursPart = Math.floor(minutes / 60);
  const minutesPart = minutes % 60;
  if (hoursPart === 0) return `${minutesPart} min`;
  if (minutesPart === 0) return `${hoursPart} h`;
  return `${hoursPart} h ${pad(minutesPart)}`;
}

function getEndDateTime(date, time, durationMinutes) {
  const iso = toIsoDateTime(date, time);
  if (!iso || normalizeNumber(durationMinutes) <= 0) return null;
  return new Date(new Date(iso).getTime() + Math.round(durationMinutes) * 60000);
}

function formatEndTime(dateObject) {
  if (!(dateObject instanceof Date) || Number.isNaN(dateObject.getTime())) return "—";
  return new Intl.DateTimeFormat("fr-FR", {
    weekday: "short",
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  }).format(dateObject);
}

function currentLocalDateTime() {
  return dateToLocalParts(new Date());
}

function setDateTimeDefaults(target = "all") {
  const current = currentLocalDateTime();
  if (target === "all" || target === "irrigation") {
    $("irrigationDate").value = current.date;
    $("irrigationTime").value = current.time;
  }
  if (target === "all" || target === "filter") {
    $("filterDate").value = current.date;
    $("filterTime").value = current.time;
  }
}

function showToast(message, duration = 3500) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("visible"), duration);
}

function setBusy(button, busy, busyLabel) {
  if (!button) return;
  if (busy) {
    button.dataset.originalLabel = button.textContent;
    button.textContent = busyLabel;
    button.disabled = true;
  } else {
    button.textContent = button.dataset.originalLabel || button.textContent;
    button.disabled = false;
  }
}

function showNotice(message = "") {
  const box = $("dataNotice");
  box.textContent = message;
  box.classList.toggle("hidden", !message);
}

function updateConnectionStatus() {
  const online = navigator.onLine;
  const status = $("connectionStatus");
  status.textContent = online ? "Connecté au réseau" : "Hors ligne";
  status.classList.toggle("online", online);
  status.classList.toggle("offline", !online);
}

function showTab(tabId) {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.tab === tabId);
  });
  document.querySelectorAll(".panel").forEach((panel) => {
    panel.classList.toggle("active", panel.id === tabId);
  });
  if (tabId === "historique" || tabId === "alerte") loadHistory({ silent: true });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderAuthentication(session) {
  state.session = session || null;
  const connected = Boolean(session?.user);
  $("authScreen").classList.toggle("hidden", connected);
  $("appShell").classList.toggle("hidden", !connected);
  $("userEmail").textContent = session?.user?.email || "";
  if (!connected) {
    state.irrigations = [];
    state.filters = [];
    renderHistory();
    renderAlerts();
  }
}

function clearSelect(select, firstLabel) {
  select.innerHTML = "";
  select.add(new Option(firstLabel, ""));
}

function populateLists() {
  const selectedIlot = $("ilotSelect").value;
  const selectedFilter = $("filterSelect").value;

  clearSelect($("ilotSelect"), "Choisir un îlot");
  [...new Set(state.posts.map((item) => String(item.ilot)))]
    .sort(naturalSort)
    .forEach((ilot) => $("ilotSelect").add(new Option(`Îlot ${ilot}`, ilot)));
  if (selectedIlot && state.posts.some((item) => String(item.ilot) === selectedIlot)) {
    $("ilotSelect").value = selectedIlot;
  }

  clearSelect($("filterSelect"), "Choisir un filtre");
  state.referenceFilters
    .slice()
    .sort((a, b) => naturalSort(a.filtre, b.filtre))
    .forEach((filter) => $("filterSelect").add(new Option(filter.filtre, filter.filtre)));
  if (selectedFilter && state.referenceFilters.some((item) => item.filtre === selectedFilter)) {
    $("filterSelect").value = selectedFilter;
  }

  updatePostes();
  updateFilterForm();
}

function getSelectedPost() {
  return state.posts.find((item) =>
    String(item.ilot) === $("ilotSelect").value && item.poste === $("posteSelect").value
  ) || null;
}

function getSelectedFilter() {
  return state.referenceFilters.find((item) => item.filtre === $("filterSelect").value) || null;
}

function updatePostes(preselectedPost = "") {
  const ilot = $("ilotSelect").value;
  const select = $("posteSelect");
  clearSelect(select, ilot ? "Choisir un poste" : "Choisir d’abord un îlot");

  if (!ilot) {
    select.disabled = true;
    updatePostReference();
    updateIrrigationRecap();
    return;
  }

  state.posts
    .filter((item) => String(item.ilot) === ilot)
    .sort((a, b) => naturalSort(a.poste, b.poste))
    .forEach((item) => select.add(new Option(item.poste, item.poste)));

  select.disabled = false;
  if (preselectedPost) select.value = preselectedPost;
  updatePostReference();
  updateIrrigationRecap();
}

function updatePostReference() {
  const post = getSelectedPost();
  const reference = $("posteReference");
  const statusSelect = $("statusSelect");
  const statusHelp = $("statusHelp");
  $("programmerInputs").classList.add("hidden");
  $("valveInputs").classList.add("hidden");

  if (!post) {
    statusSelect.disabled = false;
    statusHelp.classList.add("hidden");
    reference.classList.add("muted");
    reference.innerHTML = "Sélectionnez un poste pour afficher son type, sa surface et son débit de référence.";
    return;
  }

  reference.classList.remove("muted");
  reference.innerHTML = `
    <div class="reference-grid">
      <div class="reference-item"><small>Type</small><strong>${post.type === "P" ? "Programmateur (P)" : "Vanne volumétrique (V)"}</strong></div>
      <div class="reference-item"><small>Surface</small><strong>${formatNumber(post.surface, 0)} m²</strong></div>
      <div class="reference-item"><small>Débit de référence</small><strong>${formatNumber(post.debit, 3)} m³/h</strong></div>
    </div>`;

  if (post.type === "P") {
    statusSelect.disabled = false;
    statusHelp.classList.add("hidden");
    $("programmerInputs").classList.remove("hidden");
  } else {
    statusSelect.value = "Réalisée";
    statusSelect.disabled = true;
    statusHelp.classList.remove("hidden");
    $("valveInputs").classList.remove("hidden");
  }
}

function readProgrammerDurationMinutes() {
  const hours = Math.max(0, Math.floor(normalizeNumber($("programmerHours").value)));
  const minutes = Math.max(0, Math.floor(normalizeNumber($("programmerMinutes").value)));
  return hours * 60 + Math.min(minutes, 59);
}

function readFilterDurationMinutes() {
  return Math.max(0, Math.floor(normalizeNumber($("filterMinutes").value)));
}

function calculateIrrigation() {
  const post = getSelectedPost();
  const date = $("irrigationDate").value;
  const time = $("irrigationTime").value;
  const status = $("statusSelect").value;
  if (!post) return null;

  let durationMinutes = 0;
  let volume = 0;
  if (post.type === "P") {
    durationMinutes = readProgrammerDurationMinutes();
    volume = post.debit * (durationMinutes / 60);
  } else {
    volume = normalizeNumber($("valveVolume").value);
    durationMinutes = post.debit > 0 ? Math.round((volume / post.debit) * 60) : 0;
  }

  const durationHours = durationMinutes / 60;
  const doseMm = post.surface > 0 ? (volume * 1000) / post.surface : 0;
  const end = getEndDateTime(date, time, durationMinutes);

  return { post, date, time, status, durationMinutes, durationHours, volume, doseMm, end };
}

function updateIrrigationRecap() {
  updatePostReference();
  const calculation = calculateIrrigation();
  const recap = $("irrigationRecap");

  if (!calculation || !calculation.date || !calculation.time || calculation.durationMinutes <= 0 || calculation.volume <= 0) {
    recap.classList.remove("ready");
    recap.innerHTML = '<p class="recap-title">Récapitulatif de l’irrigation</p><p class="recap-placeholder">Complétez l’îlot, le poste et les données d’irrigation.</p>';
    updateIrrigationDuplicateWarning();
    return;
  }

  const explanation = calculation.post.type === "P"
    ? `Pour ${formatDuration(calculation.durationMinutes)}, le volume calculé est de ${formatNumber(calculation.volume)} m³.`
    : `Pour ${formatNumber(calculation.volume)} m³, le temps estimé est de ${formatDuration(calculation.durationMinutes)}.`;
  const endLabel = calculation.post.type === "P" ? "Fin" : "Fin estimée";

  recap.classList.add("ready");
  recap.innerHTML = `
    <p class="recap-title">Récapitulatif de l’irrigation</p>
    <p class="recap-main">${escapeHtml(calculation.post.poste)} · ${explanation}</p>
    <div class="recap-grid">
      <div class="recap-value"><small>Statut</small><strong>${escapeHtml(displayStatus(calculation.status))}</strong></div>
      <div class="recap-value"><small>Volume</small><strong>${formatNumber(calculation.volume)} m³</strong></div>
      <div class="recap-value"><small>Dose</small><strong>${formatNumber(calculation.doseMm)} mm</strong></div>
      <div class="recap-value"><small>${endLabel}</small><strong>${formatEndTime(calculation.end)}</strong></div>
    </div>`;
  updateIrrigationDuplicateWarning();
}

function calculateFilter() {
  const filter = getSelectedFilter();
  const date = $("filterDate").value;
  const time = $("filterTime").value;
  const durationMinutes = readFilterDurationMinutes();
  return { filter, date, time, durationMinutes, end: getEndDateTime(date, time, durationMinutes) };
}

function updateFilterForm() {
  updateFilterDuplicateWarning();
}

function findIrrigationDuplicate() {
  const post = getSelectedPost();
  const date = $("irrigationDate").value;
  const time = $("irrigationTime").value;
  if (!post || !date || !time) return null;
  return state.irrigations.find((entry) => entry.id !== editingIrrigationId && entry.poste === post.poste && entry.date === date && entry.time === time) || null;
}

function findFilterDuplicate() {
  const filter = getSelectedFilter();
  const date = $("filterDate").value;
  const time = $("filterTime").value;
  if (!filter || !date || !time) return null;
  return state.filters.find((entry) => entry.id !== editingFilterId && entry.filter === filter.filtre && entry.date === date && entry.time === time) || null;
}

function updateIrrigationDuplicateWarning() {
  const duplicate = findIrrigationDuplicate();
  const warning = $("irrigationDuplicateWarning");
  warning.classList.toggle("hidden", !duplicate);
  warning.textContent = duplicate ? "Doublon détecté : ce poste possède déjà une irrigation à cette date et cette heure." : "";
}

function updateFilterDuplicateWarning() {
  const duplicate = findFilterDuplicate();
  const warning = $("filterDuplicateWarning");
  warning.classList.toggle("hidden", !duplicate);
  warning.textContent = duplicate ? "Doublon détecté : ce filtre possède déjà un contre-lavage à cette date et cette heure." : "";
}

function resetIrrigationForm() {
  editingIrrigationId = null;
  $("irrigationForm").reset();
  $("posteSelect").disabled = true;
  $("posteSelect").innerHTML = '<option value="">Choisir d’abord un îlot</option>';
  $("irrigationFormTitle").textContent = "Enregistrer une irrigation";
  $("saveIrrigationBtn").textContent = "Enregistrer l’irrigation";
  $("saveIrrigationBtn").disabled = false;
  delete $("saveIrrigationBtn").dataset.originalLabel;
  $("cancelIrrigationEditBtn").classList.add("hidden");
  setDateTimeDefaults("irrigation");
  updateIrrigationRecap();
}

function resetFilterForm() {
  editingFilterId = null;
  $("filterForm").reset();
  $("filterFormTitle").textContent = "Enregistrer un contre-lavage";
  $("saveFilterBtn").textContent = "Enregistrer le contre-lavage";
  $("saveFilterBtn").disabled = false;
  delete $("saveFilterBtn").dataset.originalLabel;
  $("cancelFilterEditBtn").classList.add("hidden");
  setDateTimeDefaults("filter");
  updateFilterForm();
}

function validateIrrigation(calculation) {
  if (!navigator.onLine) return "Connexion Internet nécessaire pour enregistrer.";
  if (!calculation?.post) return "Sélectionnez un îlot et un poste.";
  if (!calculation.date || !calculation.time) return "Renseignez la date et l’heure de début.";
  if (calculation.durationMinutes <= 0) return "La durée calculée doit être supérieure à zéro.";
  if (calculation.volume <= 0) return "Le volume calculé doit être supérieur à zéro.";
  if (findIrrigationDuplicate()) return "Enregistrement impossible : un doublon a été détecté.";
  return "";
}

function validateFilter(calculation) {
  if (!navigator.onLine) return "Connexion Internet nécessaire pour enregistrer.";
  if (!calculation?.filter) return "Sélectionnez un filtre.";
  if (!calculation.date || !calculation.time) return "Renseignez la date et l’heure de début.";
  if (calculation.durationMinutes <= 0) return "Renseignez une durée de contre-lavage supérieure à zéro.";
  if (findFilterDuplicate()) return "Enregistrement impossible : un doublon a été détecté.";
  return "";
}

function databaseErrorMessage(error, duplicateLabel) {
  console.error(error);
  if (error?.code === "23505") return duplicateLabel;
  if (!navigator.onLine || error?.message?.toLowerCase().includes("fetch")) return "Connexion impossible à Supabase. Vérifiez le réseau.";
  if (error?.code === "42501") return "Accès refusé par Supabase. Vérifiez les règles RLS et le compte utilisateur.";
  return `Erreur Supabase : ${error?.message || "opération impossible"}`;
}

async function saveIrrigation(event) {
  event.preventDefault();
  const calculation = calculateIrrigation();
  const validationError = validateIrrigation(calculation);
  if (validationError) return showToast(validationError);

  const button = $("saveIrrigationBtn");
  setBusy(button, true, "Enregistrement…");
  const payload = {
    debut_at: toIsoDateTime(calculation.date, calculation.time),
    fin_at: calculation.end.toISOString(),
    ilot: String(calculation.post.ilot),
    poste: calculation.post.poste,
    type_poste: calculation.post.type,
    surface_m2: calculation.post.surface,
    debit_m3_h: calculation.post.debit,
    duree_minutes: calculation.durationMinutes,
    volume_m3: Number(calculation.volume.toFixed(4)),
    dose_mm: Number(calculation.doseMm.toFixed(4)),
    statut: calculation.status,
    observation: $("irrigationNote").value.trim() || null
  };

  try {
    const query = editingIrrigationId
      ? db.from("irrigations").update(payload).eq("id", editingIrrigationId)
      : db.from("irrigations").insert(payload);
    const { error } = await query;
    if (error) throw error;
    const wasEditing = Boolean(editingIrrigationId);
    resetIrrigationForm();
    await loadHistory({ silent: true });
    showToast(wasEditing ? "Irrigation modifiée." : "Irrigation enregistrée.");
  } catch (error) {
    showToast(databaseErrorMessage(error, "Doublon refusé : ce poste possède déjà une irrigation à cette date et cette heure."), 5500);
  } finally {
    setBusy(button, false);
  }
}

async function saveFilter(event) {
  event.preventDefault();
  const calculation = calculateFilter();
  const validationError = validateFilter(calculation);
  if (validationError) return showToast(validationError);

  const button = $("saveFilterBtn");
  setBusy(button, true, "Enregistrement…");
  const payload = {
    debut_at: toIsoDateTime(calculation.date, calculation.time),
    fin_at: calculation.end.toISOString(),
    filtre: calculation.filter.filtre,
    debit_max_m3_h: calculation.filter.debitMax,
    duree_minutes: calculation.durationMinutes,
    observation: $("filterNote").value.trim() || null
  };

  try {
    const query = editingFilterId
      ? db.from("contre_lavages").update(payload).eq("id", editingFilterId)
      : db.from("contre_lavages").insert(payload);
    const { error } = await query;
    if (error) throw error;
    const wasEditing = Boolean(editingFilterId);
    resetFilterForm();
    await loadHistory({ silent: true });
    showToast(wasEditing ? "Contre-lavage modifié." : "Contre-lavage enregistré.");
  } catch (error) {
    showToast(databaseErrorMessage(error, "Doublon refusé : ce filtre possède déjà un contre-lavage à cette date et cette heure."), 5500);
  } finally {
    setBusy(button, false);
  }
}

function mapIrrigation(row) {
  const start = dateToLocalParts(row.debut_at);
  const end = dateToLocalParts(row.fin_at);
  return {
    id: row.id,
    createdAt: row.created_at,
    ilot: String(row.ilot),
    poste: row.poste,
    equipmentType: row.type_poste,
    surface: normalizeNumber(row.surface_m2),
    referenceFlow: normalizeNumber(row.debit_m3_h),
    status: row.statut,
    date: start.date,
    time: start.time,
    endDate: end.date,
    endTime: end.time,
    durationMinutes: normalizeNumber(row.duree_minutes),
    durationHours: normalizeNumber(row.duree_minutes) / 60,
    volume: normalizeNumber(row.volume_m3),
    doseMm: normalizeNumber(row.dose_mm),
    note: row.observation || ""
  };
}

function mapFilter(row) {
  const start = dateToLocalParts(row.debut_at);
  const end = dateToLocalParts(row.fin_at);
  return {
    id: row.id,
    createdAt: row.created_at,
    startAt: row.debut_at,
    filter: row.filtre,
    filterMaxFlow: normalizeNumber(row.debit_max_m3_h),
    date: start.date,
    time: start.time,
    endDate: end.date,
    endTime: end.time,
    durationMinutes: normalizeNumber(row.duree_minutes),
    durationHours: normalizeNumber(row.duree_minutes) / 60,
    note: row.observation || ""
  };
}

async function loadReferences() {
  const [postResult, filterResult] = await Promise.all([
    db.from("referentiel_postes").select("ilot, poste, type_poste, surface_m2, debit_m3_h").order("ilot").order("poste"),
    db.from("referentiel_filtres").select("filtre, debit_max_m3_h").order("filtre")
  ]);

  const notices = [];
  if (!postResult.error && postResult.data?.length) {
    state.posts = postResult.data.map((row) => ({
      ilot: String(row.ilot),
      poste: row.poste,
      type: row.type_poste,
      surface: normalizeNumber(row.surface_m2),
      debit: normalizeNumber(row.debit_m3_h)
    }));
  } else {
    state.posts = POSTS.slice();
    notices.push("Le référentiel des postes n’a pas été chargé depuis Supabase : la liste intégrée à l’application est utilisée.");
    if (postResult.error) console.error(postResult.error);
  }

  if (!filterResult.error && filterResult.data?.length) {
    state.referenceFilters = filterResult.data.map((row) => ({
      filtre: row.filtre,
      debitMax: normalizeNumber(row.debit_max_m3_h)
    }));
  } else {
    state.referenceFilters = FILTERS.slice();
    notices.push("Le référentiel des filtres n’a pas été chargé depuis Supabase : la liste intégrée à l’application est utilisée.");
    if (filterResult.error) console.error(filterResult.error);
  }

  populateLists();
  renderAlerts();
  showNotice(notices.join(" "));
}

async function loadHistory({ silent = false } = {}) {
  if (!state.session?.user || state.loading) return;
  state.loading = true;
  const list = $("historyList");
  if (!silent) list.innerHTML = '<div class="history-loading">Chargement des données…</div>';

  try {
    const [irrigationResult, filterResult] = await Promise.all([
      db.from("irrigations").select("*").order("debut_at", { ascending: false }),
      db.from("contre_lavages").select("*").order("debut_at", { ascending: false })
    ]);
    if (irrigationResult.error) throw irrigationResult.error;
    if (filterResult.error) throw filterResult.error;
    state.irrigations = (irrigationResult.data || []).map(mapIrrigation);
    state.filters = (filterResult.data || []).map(mapFilter);
    renderHistory();
    renderAlerts();
  } catch (error) {
    console.error(error);
    list.innerHTML = `<div class="history-empty">${escapeHtml(databaseErrorMessage(error, ""))}</div>`;
    if (!silent) showToast(databaseErrorMessage(error, ""), 5500);
  } finally {
    state.loading = false;
  }
}

function editIrrigation(id) {
  const entry = state.irrigations.find((item) => item.id === id);
  if (!entry) return;
  editingIrrigationId = id;
  $("ilotSelect").value = entry.ilot;
  updatePostes(entry.poste);
  $("statusSelect").value = entry.status || "Programmée";
  $("irrigationDate").value = entry.date;
  $("irrigationTime").value = entry.time;
  $("irrigationNote").value = entry.note || "";

  if (entry.equipmentType === "P") {
    $("programmerHours").value = Math.floor(entry.durationMinutes / 60);
    $("programmerMinutes").value = Math.round(entry.durationMinutes) % 60;
    $("valveVolume").value = "";
  } else {
    $("valveVolume").value = normalizeNumber(entry.volume).toFixed(2);
    $("programmerHours").value = "";
    $("programmerMinutes").value = "";
  }

  $("irrigationFormTitle").textContent = "Modifier l’irrigation";
  $("saveIrrigationBtn").textContent = "Enregistrer les modifications";
  $("cancelIrrigationEditBtn").classList.remove("hidden");
  updateIrrigationRecap();
  showTab("irrigation");
}

function editFilter(id) {
  const entry = state.filters.find((item) => item.id === id);
  if (!entry) return;
  editingFilterId = id;
  $("filterSelect").value = entry.filter;
  $("filterDate").value = entry.date;
  $("filterTime").value = entry.time;
  $("filterNote").value = entry.note || "";
  $("filterMinutes").value = Math.round(entry.durationMinutes);
  $("filterFormTitle").textContent = "Modifier le contre-lavage";
  $("saveFilterBtn").textContent = "Enregistrer les modifications";
  $("cancelFilterEditBtn").classList.remove("hidden");
  updateFilterForm();
  showTab("filtre");
}

async function deleteRecord(type, id) {
  const collection = type === "irrigation" ? state.irrigations : state.filters;
  const entry = collection.find((item) => item.id === id);
  if (!entry) return;
  const label = type === "irrigation" ? entry.poste : `le filtre ${entry.filter}`;
  if (!window.confirm(`Supprimer définitivement l’enregistrement concernant ${label} de la base commune ?`)) return;

  try {
    const table = type === "irrigation" ? "irrigations" : "contre_lavages";
    const { error } = await db.from(table).delete().eq("id", id);
    if (error) throw error;
    await loadHistory({ silent: true });
    showToast("Enregistrement supprimé.");
  } catch (error) {
    showToast(databaseErrorMessage(error, ""), 5500);
  }
}

const FILTER_ALERT_DELAY_MS = 7 * 24 * 60 * 60 * 1000;

function getFilterAlerts() {
  const now = Date.now();
  return state.referenceFilters.map((reference) => {
    const latest = state.filters
      .filter((entry) => entry.filter === reference.filtre)
      .sort((a, b) => new Date(b.startAt || `${b.date}T${b.time}:00`) - new Date(a.startAt || `${a.date}T${a.time}:00`))[0] || null;

    if (!latest) {
      return { filter: reference.filtre, latest: null, ageDays: null, never: true };
    }

    const latestTime = new Date(latest.startAt || `${latest.date}T${latest.time}:00`).getTime();
    const ageMs = now - latestTime;
    if (!Number.isFinite(latestTime) || ageMs <= FILTER_ALERT_DELAY_MS) return null;

    return {
      filter: reference.filtre,
      latest,
      never: false,
      ageDays: Math.floor(ageMs / (24 * 60 * 60 * 1000))
    };
  }).filter(Boolean).sort((a, b) => {
    if (a.never !== b.never) return a.never ? -1 : 1;
    return (b.ageDays || 0) - (a.ageDays || 0) || naturalSort(a.filter, b.filter);
  });
}

function renderAlerts() {
  const list = $("alertList");
  const summary = $("alertSummary");
  const badge = $("alertCountBadge");
  if (!list || !summary || !badge) return;

  const alerts = getFilterAlerts();
  badge.textContent = alerts.length;
  badge.classList.toggle("hidden", alerts.length === 0);
  summary.textContent = alerts.length
    ? `${alerts.length} filtre${alerts.length > 1 ? "s" : ""} sans contre-lavage depuis plus de 7 jours.`
    : "Tous les filtres ont été contre-lavés au cours des 7 derniers jours.";

  if (!alerts.length) {
    list.innerHTML = '<div class="alert-empty">Aucune alerte de contre-lavage.</div>';
    return;
  }

  list.innerHTML = alerts.map((alert) => {
    const detail = alert.never
      ? "Aucun contre-lavage enregistré."
      : `Dernier contre-lavage : ${formatDateTime(alert.latest.date, alert.latest.time)} · il y a ${alert.ageDays} jour${alert.ageDays > 1 ? "s" : ""}.`;
    return `
      <article class="alert-item">
        <div class="alert-item-content">
          <div class="alert-item-title">
            <span class="badge badge-alert">Alerte</span>
            <strong>${escapeHtml(alert.filter)}</strong>
          </div>
          <div class="alert-item-meta">${detail}</div>
        </div>
        <button class="button button-primary" data-alert-filter="${escapeHtml(alert.filter)}" type="button">Saisir le contre-lavage</button>
      </article>`;
  }).join("");
}

function openFilterAlert(filterName) {
  resetFilterForm();
  $("filterSelect").value = filterName;
  updateFilterForm();
  showTab("filtre");
}

function renderHistory() {
  const combined = [
    ...state.irrigations.map((entry) => ({ ...entry, recordType: "irrigation" })),
    ...state.filters.map((entry) => ({ ...entry, recordType: "filter" }))
  ].sort((a, b) => new Date(`${b.date}T${b.time}:00`) - new Date(`${a.date}T${a.time}:00`));

  $("irrigationCount").textContent = state.irrigations.length;
  $("filterCount").textContent = state.filters.length;
  $("totalVolume").textContent = formatNumber(state.irrigations.reduce((sum, item) => sum + item.volume, 0));

  const list = $("historyList");
  if (!combined.length) {
    list.innerHTML = '<div class="history-empty">Aucun enregistrement dans la base pour le moment.</div>';
    return;
  }

  list.innerHTML = combined.map((entry) => {
    if (entry.recordType === "irrigation") {
      const launched = entry.status === "Réalisée";
      return `
        <article class="history-item">
          <div class="history-content">
            <div class="history-title">
              <span class="badge badge-irrigation">Irrigation</span>
              <span class="badge ${launched ? "badge-realisee" : "badge-programmee"}">${escapeHtml(displayStatus(entry.status))}</span>
              <strong>${escapeHtml(entry.poste)}</strong>
            </div>
            <div class="history-meta">
              Îlot ${escapeHtml(entry.ilot)} · ${entry.equipmentType === "P" ? "Programmateur" : "Vanne volumétrique"}<br>
              ${formatDateTime(entry.date, entry.time)} → ${formatDateTime(entry.endDate, entry.endTime)}<br>
              ${formatDuration(entry.durationMinutes)} · ${formatNumber(entry.volume)} m³ · ${formatNumber(entry.doseMm)} mm
              ${entry.note ? `<br>${escapeHtml(entry.note)}` : ""}
            </div>
          </div>
          <div class="history-actions">
            <button class="button button-secondary button-small" data-edit-type="irrigation" data-edit-id="${entry.id}" type="button">Modifier</button>
            <button class="button button-danger-outline button-small" data-delete-type="irrigation" data-delete-id="${entry.id}" type="button">Supprimer</button>
          </div>
        </article>`;
    }

    return `
      <article class="history-item">
        <div class="history-content">
          <div class="history-title">
            <span class="badge badge-filter">Filtre</span>
            <strong>Contre-lavage ${escapeHtml(entry.filter)}</strong>
          </div>
          <div class="history-meta">
            ${formatDateTime(entry.date, entry.time)} → ${formatDateTime(entry.endDate, entry.endTime)}<br>
            Durée : ${formatDuration(entry.durationMinutes)}
            ${entry.note ? `<br>${escapeHtml(entry.note)}` : ""}
          </div>
        </div>
        <div class="history-actions">
          <button class="button button-secondary button-small" data-edit-type="filter" data-edit-id="${entry.id}" type="button">Modifier</button>
          <button class="button button-danger-outline button-small" data-delete-type="filter" data-delete-id="${entry.id}" type="button">Supprimer</button>
        </div>
      </article>`;
  }).join("");
}

function setSheetColumnWidths(sheet, widths) {
  sheet["!cols"] = widths.map((width) => ({ wch: width }));
}

async function exportExcel() {
  if (typeof XLSX === "undefined") return showToast("Le module d’export Excel n’a pas pu être chargé.");
  const button = $("exportBtn");
  setBusy(button, true, "Préparation…");
  try {
    await loadHistory({ silent: true });
    if (!state.irrigations.length && !state.filters.length) return showToast("Aucune donnée à exporter.");

    const irrigationRows = state.irrigations.slice().reverse().map((item) => ({
      Date: item.date,
      "Heure de début": item.time,
      "Date de fin": item.endDate,
      "Heure de fin": item.endTime,
      Statut: displayStatus(item.status),
      Îlot: item.ilot,
      Poste: item.poste,
      Type: item.equipmentType === "P" ? "Programmateur (P)" : "Vanne volumétrique (V)",
      "Surface (m²)": item.surface,
      "Débit de référence (m³/h)": item.referenceFlow,
      "Durée (h décimales)": item.durationHours,
      "Durée affichée": formatDuration(item.durationMinutes),
      "Volume (m³)": item.volume,
      "Dose (mm)": item.doseMm,
      Observation: item.note || ""
    }));

    const filterRows = state.filters.slice().reverse().map((item) => ({
      Date: item.date,
      "Heure de début": item.time,
      "Date de fin": item.endDate,
      "Heure de fin": item.endTime,
      Filtre: item.filter,
      "Durée (h décimales)": item.durationHours,
      "Durée affichée": formatDuration(item.durationMinutes),
      Observation: item.note || ""
    }));

    const referenceRows = [
      ["RÉFÉRENTIEL DES POSTES"],
      ["Îlot", "Poste", "Type", "Surface (m²)", "Débit de référence (m³/h)"],
      ...state.posts.slice().sort((a, b) => naturalSort(a.ilot, b.ilot) || naturalSort(a.poste, b.poste)).map((item) => [
        item.ilot,
        item.poste,
        item.type === "P" ? "Programmateur (P)" : "Vanne volumétrique (V)",
        item.surface,
        item.debit
      ]),
      [],
      ["RÉFÉRENTIEL DES FILTRES"],
      ["Filtre", "Débit maximal (m³/h)"],
      ...state.referenceFilters.slice().sort((a, b) => naturalSort(a.filtre, b.filtre)).map((item) => [item.filtre, item.debitMax])
    ];

    const workbook = XLSX.utils.book_new();
    const irrigationSheet = XLSX.utils.json_to_sheet(irrigationRows.length ? irrigationRows : [{ Information: "Aucune irrigation enregistrée" }]);
    const filterSheet = XLSX.utils.json_to_sheet(filterRows.length ? filterRows : [{ Information: "Aucun contre-lavage enregistré" }]);
    const referenceSheet = XLSX.utils.aoa_to_sheet(referenceRows);
    if (irrigationRows.length) irrigationSheet["!autofilter"] = { ref: irrigationSheet["!ref"] };
    if (filterRows.length) filterSheet["!autofilter"] = { ref: filterSheet["!ref"] };
    setSheetColumnWidths(irrigationSheet, [12, 13, 12, 13, 12, 8, 35, 24, 14, 24, 19, 18, 14, 12, 40]);
    setSheetColumnWidths(filterSheet, [12, 13, 12, 13, 18, 19, 18, 40]);
    setSheetColumnWidths(referenceSheet, [12, 38, 24, 16, 28]);
    XLSX.utils.book_append_sheet(workbook, irrigationSheet, "Irrigations");
    XLSX.utils.book_append_sheet(workbook, filterSheet, "Contre-lavages");
    XLSX.utils.book_append_sheet(workbook, referenceSheet, "Référentiel");
    XLSX.writeFile(workbook, `tracabilite_irrigations_filtres_${currentLocalDateTime().date}.xlsx`);
    showToast("Export Excel créé à partir de la base commune.");
  } catch (error) {
    showToast(databaseErrorMessage(error, ""), 5500);
  } finally {
    setBusy(button, false);
  }
}

async function login(event) {
  event.preventDefault();
  const email = $("loginEmail").value.trim();
  const password = $("loginPassword").value;
  const errorBox = $("loginError");
  errorBox.classList.add("hidden");

  if (!db) {
    errorBox.textContent = "La bibliothèque Supabase n’a pas pu être chargée.";
    errorBox.classList.remove("hidden");
    return;
  }
  if (!email || !password) {
    errorBox.textContent = "Renseignez l’adresse électronique et le mot de passe.";
    errorBox.classList.remove("hidden");
    return;
  }

  const button = $("loginBtn");
  setBusy(button, true, "Connexion…");
  try {
    const { data, error } = await db.auth.signInWithPassword({ email, password });
    if (error) throw error;
    renderAuthentication(data.session);
    await initializeConnectedApp();
  } catch (error) {
    console.error(error);
    errorBox.textContent = error?.message === "Invalid login credentials"
      ? "Adresse électronique ou mot de passe incorrect."
      : `Connexion impossible : ${error?.message || "erreur inconnue"}`;
    errorBox.classList.remove("hidden");
  } finally {
    setBusy(button, false);
  }
}

async function logout() {
  const button = $("logoutBtn");
  setBusy(button, true, "Déconnexion…");
  try {
    await db.auth.signOut();
    renderAuthentication(null);
    $("loginPassword").value = "";
  } finally {
    setBusy(button, false);
  }
}

async function initializeConnectedApp() {
  updateConnectionStatus();
  setDateTimeDefaults();
  renderHistory();
  await loadReferences();
  await loadHistory();
  updateIrrigationRecap();
  updateFilterForm();
  renderAlerts();
}

function bindEvents() {
  $("loginForm").addEventListener("submit", login);
  $("logoutBtn").addEventListener("click", logout);
  $("irrigationForm").addEventListener("submit", saveIrrigation);
  $("filterForm").addEventListener("submit", saveFilter);
  $("ilotSelect").addEventListener("change", () => updatePostes());
  $("posteSelect").addEventListener("change", updateIrrigationRecap);
  $("statusSelect").addEventListener("change", updateIrrigationRecap);
  $("irrigationDate").addEventListener("change", updateIrrigationRecap);
  $("irrigationTime").addEventListener("input", updateIrrigationRecap);
  $("programmerHours").addEventListener("input", updateIrrigationRecap);
  $("programmerMinutes").addEventListener("input", updateIrrigationRecap);
  $("valveVolume").addEventListener("input", updateIrrigationRecap);
  $("filterSelect").addEventListener("change", updateFilterForm);
  $("filterDate").addEventListener("change", updateFilterForm);
  $("filterTime").addEventListener("input", updateFilterForm);
  $("filterMinutes").addEventListener("input", updateFilterForm);
  $("cancelIrrigationEditBtn").addEventListener("click", resetIrrigationForm);
  $("cancelFilterEditBtn").addEventListener("click", resetFilterForm);
  $("exportBtn").addEventListener("click", exportExcel);
  $("refreshBtn").addEventListener("click", () => loadHistory());
  $("refreshAlertsBtn").addEventListener("click", () => loadHistory());
  $("alertList").addEventListener("click", (event) => {
    const button = event.target.closest("[data-alert-filter]");
    if (button) openFilterAlert(button.dataset.alertFilter);
  });

  $("historyList").addEventListener("click", (event) => {
    const editButton = event.target.closest("[data-edit-id]");
    if (editButton) {
      if (editButton.dataset.editType === "irrigation") editIrrigation(editButton.dataset.editId);
      else editFilter(editButton.dataset.editId);
      return;
    }
    const deleteButton = event.target.closest("[data-delete-id]");
    if (deleteButton) deleteRecord(deleteButton.dataset.deleteType, deleteButton.dataset.deleteId);
  });

  document.querySelectorAll(".tab").forEach((tab) => tab.addEventListener("click", () => showTab(tab.dataset.tab)));
  window.addEventListener("online", () => { updateConnectionStatus(); loadHistory({ silent: true }); });
  window.addEventListener("offline", updateConnectionStatus);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && state.session?.user) loadHistory({ silent: true });
  });
}

async function start() {
  bindEvents();
  populateLists();
  setDateTimeDefaults();
  updateConnectionStatus();
  updateIrrigationRecap();
  updateFilterForm();
  renderAlerts();
  renderHistory();

  if (!db) {
    $("loginError").textContent = "La bibliothèque Supabase n’a pas pu être chargée. Vérifiez la connexion Internet.";
    $("loginError").classList.remove("hidden");
    return;
  }

  const { data, error } = await db.auth.getSession();
  if (error) console.error(error);
  renderAuthentication(data?.session || null);
  if (data?.session) await initializeConnectedApp();

  db.auth.onAuthStateChange((_event, session) => {
    renderAuthentication(session);
  });
}

start();
