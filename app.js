const POSTS = [{"ilot":"1","poste":"1 V1 AB Long","surface":1080.0,"type":"P","debit":5.04},{"ilot":"1","poste":"1 V2 AB Court","surface":1350.0,"type":"P","debit":6.3},{"ilot":"1","poste":"1 V3 PFI Court / Eco","surface":1313.0,"type":"P","debit":7.35},{"ilot":"1","poste":"1 V4 PFI Long","surface":1260.0,"type":"P","debit":4.2},{"ilot":"2-4","poste":"2 V1 V.Public Vieux","surface":2880.0,"type":"P","debit":8.4},{"ilot":"2-4","poste":"2 V2 Kaki-Pomme","surface":300.0,"type":"P","debit":1.4},{"ilot":"2-4","poste":"2 V3 Agrumes","surface":900.0,"type":"P","debit":4.2},{"ilot":"2-4","poste":"2 V4 Abricot","surface":1200.0,"type":"P","debit":5.6},{"ilot":"2-4","poste":"2 V5 Cerise","surface":600.0,"type":"P","debit":2.8},{"ilot":"3","poste":"3 V1 Taille 1","surface":3240.0,"type":"P","debit":5.76},{"ilot":"3","poste":"3 V2 Taille 2","surface":2700.0,"type":"P","debit":4.8},{"ilot":"3","poste":"3 V3 Irri-Ferti A","surface":2160.0,"type":"V","debit":3.84},{"ilot":"3","poste":"3 V3 Irri-Ferti B","surface":2160.0,"type":"V","debit":3.84},{"ilot":"3","poste":"3 V3 Irri-Ferti C","surface":2160.0,"type":"V","debit":3.84},{"ilot":"3","poste":"3 V3 Irri-Ferti D","surface":2160.0,"type":"V","debit":3.84},{"ilot":"3","poste":"3 V4 Bio","surface":3240.0,"type":"V","debit":5.76},{"ilot":"5","poste":"5 V1 Vigne Rés.Séch.2021+23","surface":5468.0,"type":"P","debit":3.89},{"ilot":"5","poste":"5 V2 Vigne 2021+23","surface":4253.0,"type":"P","debit":3.02},{"ilot":"5","poste":"5 V3 Vigne 2017 VCR","surface":2633.0,"type":"P","debit":1.6},{"ilot":"6","poste":"6 V1 Nectarnovala","surface":2184.0,"type":"P","debit":12.74},{"ilot":"7","poste":"7 V1 Cerise","surface":3360.0,"type":"V","debit":5.94},{"ilot":"7","poste":"7 OREVE Gobelet - V1 à V6","surface":4032.0,"type":"P","debit":3.584},{"ilot":"7","poste":"7  OREVE Haie - V7 à V10","surface":1296.0,"type":"P","debit":1.728},{"ilot":"7","poste":"7 V3 Peche BIO 2023","surface":4050.0,"type":"P","debit":18.9},{"ilot":"7","poste":"7 V4 Pavie Gobelet","surface":2835.0,"type":"P","debit":13.23},{"ilot":"7","poste":"7 V5 Pavie Simple Y","surface":734.0,"type":"P","debit":3.36},{"ilot":"7","poste":"7 V6 Pavies Tatura","surface":972.0,"type":"P","debit":5.04},{"ilot":"8","poste":"8 V1 Coraline Haie","surface":912.0,"type":"V","debit":4.18},{"ilot":"8","poste":"8 V2 Coraline Témoin","surface":504.0,"type":"V","debit":1.54},{"ilot":"8","poste":"8 V3 Abricot","surface":3408.0,"type":"V","debit":9.94},{"ilot":"9","poste":"9 V1 Pêches plates 2026","surface":964.0,"type":"P","debit":3.36},{"ilot":"9","poste":"9 V2 Pêche Boréal","surface":1920.0,"type":"P","debit":5.6},{"ilot":"9","poste":"9 V3 Pêche Orine","surface":1944.0,"type":"V","debit":7.56},{"ilot":"9","poste":"9 V5 Abricot Nelson","surface":2016.0,"type":"V","debit":5.88},{"ilot":"9","poste":"9 V6 Pavies Gobelets","surface":3080.0,"type":"V","debit":12.32},{"ilot":"9","poste":"9 V7 Pavies Haies","surface":1918.0,"type":"V","debit":9.87},{"ilot":"10","poste":"10 V1 COPERNIC Bi-axe","surface":1638.0,"type":"P","debit":3.74},{"ilot":"10","poste":"10 V2 COPERNIC Gob. Apl","surface":1944.0,"type":"P","debit":3.89},{"ilot":"10","poste":"10 V3 COPERERNIC Réf","surface":1800.0,"type":"P","debit":1.34},{"ilot":"11","poste":"11 V1-A PG Pêche Réf","surface":432.0,"type":"P","debit":1.68},{"ilot":"11","poste":"11 V1-B PG Pêche -30%","surface":1728.0,"type":"P","debit":6.72},{"ilot":"11","poste":"11 V1-C Pêche -50%","surface":624.0,"type":"P","debit":3.64},{"ilot":"11","poste":"11 V2-A PG Abricot -30%","surface":2400.0,"type":"P","debit":7.0},{"ilot":"11","poste":"11 V2-B PG Abricot Réf","surface":480.0,"type":"P","debit":1.4},{"ilot":"11","poste":"11 V3 Abricot 2014","surface":1392.0,"type":"V","debit":4.97},{"ilot":"11","poste":"11 V4 CAPReD PFI","surface":1932.0,"type":"V","debit":6.44},{"ilot":"11","poste":"11 V5 CAPReD ECO","surface":2025.0,"type":"V","debit":9.45},{"ilot":"11","poste":"11 V6 Pêche BI 2025","surface":4950.0,"type":"P","debit":23.1},{"ilot":"12","poste":"12 V1-A Clém Confort","surface":720.0,"type":"P","debit":1.92},{"ilot":"12","poste":"12 V1-B Clém Bâche","surface":720.0,"type":"P","debit":1.92},{"ilot":"12","poste":"12 V1-C Clém Piloté","surface":720.0,"type":"P","debit":1.92},{"ilot":"12","poste":"12 V2 Agrumes 2026","surface":1605.0,"type":"P","debit":4.28},{"ilot":"12","poste":"12 V3 Citrons 2026","surface":300.0,"type":"P","debit":0.8},{"ilot":"13","poste":"13 V1 Cerise 19","surface":4032.0,"type":"P","debit":11.76},{"ilot":"13","poste":"13 V2 Pêche Najentina","surface":2016.0,"type":"P","debit":7.84},{"ilot":"13","poste":"13 V3 Pêche Najiris","surface":1296.0,"type":"P","debit":7.56},{"ilot":"13","poste":"13 V4 Pêche Moncante","surface":2016.0,"type":"P","debit":7.84},{"ilot":"13","poste":"13 V5 Pêche Pabina","surface":1296.0,"type":"P","debit":7.56},{"ilot":"13","poste":"13 V6 Pêche Bellamine","surface":2016.0,"type":"V","debit":7.84},{"ilot":"13","poste":"13 V7 Pêche 12-13","surface":2136.0,"type":"V","debit":6.23},{"ilot":"15","poste":"15 V1 Abricot Perlecot","surface":2088.0,"type":"V","debit":6.09},{"ilot":"15","poste":"15 V1 Abricot Vanilla","surface":1560.0,"type":"V","debit":4.55},{"ilot":"15","poste":"15 V2 Pêche Wred","surface":1636.0,"type":"P","debit":6.37},{"ilot":"15","poste":"15 V3 Pêche Nabyr/Pajurite","surface":1872.0,"type":"P","debit":1.33},{"ilot":"15","poste":"15 V4 Pêche SweetReine","surface":1636.0,"type":"P","debit":6.37},{"ilot":"16","poste":"16 V1 Pêche Nectatop","surface":1944.0,"type":"V","debit":6.78},{"ilot":"16","poste":"16 V1 Pêche Sweetlove","surface":1944.0,"type":"V","debit":7.37},{"ilot":"16","poste":"16 V2 Abricot 2015","surface":1440.0,"type":"V","debit":4.2},{"ilot":"16","poste":"16 V3 Abricots BI 2021","surface":2541.0,"type":"P","debit":8.47},{"ilot":"17","poste":"17 V1 Abricot PG","surface":2856.0,"type":"V","debit":9.52},{"ilot":"17","poste":"17 V2 Pêche Mica","surface":486.0,"type":"V","debit":1.49},{"ilot":"17","poste":"17 V3 Cristal PG","surface":1458.0,"type":"V","debit":4.46},{"ilot":"17","poste":"17 V4 Abricot BioAg 20+24","surface":2250.0,"type":"P","debit":12.6},{"ilot":"17","poste":"17 V5 Pêche BioAg 20+23","surface":972.0,"type":"P","debit":5.67},{"ilot":"18","poste":"18 V1 Abricot BI 23+24","surface":2400.0,"type":"P","debit":7.0},{"ilot":"18","poste":"18 V2 Abricot BI 2025","surface":1560.0,"type":"P","debit":4.55},{"ilot":"18","poste":"18 V3 Peche BI 23+24","surface":2563.0,"type":"P","debit":14.35},{"ilot":"18","poste":"18 V4 Peche BI 2021","surface":2250.0,"type":"P","debit":12.6},{"ilot":"19","poste":"19 V1 Olive PFI","surface":1512.0,"type":"V","debit":2.94},{"ilot":"19","poste":"19 V4 Olive Bio","surface":1512.0,"type":"V","debit":2.94},{"ilot":"19","poste":"19 V2 Ecophyto","surface":2044.0,"type":"P","debit":1.74},{"ilot":"19","poste":"19 V3 PFI","surface":1944.0,"type":"P","debit":7.56},{"ilot":"19","poste":"19 V5 Abricot 2026","surface":2256.0,"type":"P","debit":6.58},{"ilot":"20","poste":"20 V1 BI Pêche","surface":1250.0,"type":"P","debit":7.0},{"ilot":"20","poste":"20 V2 BioAg Pêche","surface":864.0,"type":"P","debit":5.04},{"ilot":"20","poste":"20 V3 BioAg Abricot","surface":1575.0,"type":"P","debit":8.82},{"ilot":"20","poste":"20 V4 BI Abricot","surface":2520.0,"type":"V","debit":8.4},{"ilot":"20","poste":"20 V5 PG Abricot","surface":1533.0,"type":"V","debit":5.11},{"ilot":"21","poste":"21 V1 Abricot","surface":648.0,"type":"V","debit":1.89},{"ilot":"21","poste":"21 V1 Cerise","surface":1416.0,"type":"V","debit":4.13}];
const FILTERS = [{"filtre":"I1-3","debitMax":20.0},{"filtre":"I2","debitMax":15.0},{"filtre":"I5","debitMax":20.0},{"filtre":"I7-1","debitMax":15.0},{"filtre":"I7-2","debitMax":15.0},{"filtre":"I6-8","debitMax":15.0},{"filtre":"I9-1","debitMax":15.0},{"filtre":"I9-2 pavies","debitMax":20.0},{"filtre":"I10","debitMax":20.0},{"filtre":"I11-1","debitMax":15.0},{"filtre":"I11-2","debitMax":15.0},{"filtre":"I11-3","debitMax":15.0},{"filtre":"I12","debitMax":20.0},{"filtre":"I13","debitMax":15.0},{"filtre":"I15","debitMax":15.0},{"filtre":"I16","debitMax":15.0},{"filtre":"I17-1","debitMax":15.0},{"filtre":"I18","debitMax":15.0},{"filtre":"I19","debitMax":15.0},{"filtre":"I20","debitMax":15.0},{"filtre":"I21","debitMax":15.0}];

const STORAGE_KEY = "sudexpe-tracabilite-saint-gilles-v2";

const state = loadState();
let editingIrrigationId = null;
let editingFilterId = null;

const $ = (id) => document.getElementById(id);

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return {
      irrigations: Array.isArray(saved?.irrigations) ? saved.irrigations : [],
      filters: Array.isArray(saved?.filters) ? saved.filters : []
    };
  } catch (error) {
    console.error("Impossible de lire les données locales.", error);
    return { irrigations: [], filters: [] };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  renderHistory();
}

function makeId() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

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
  return Number(value).toLocaleString("fr-FR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: digits
  });
}

function formatDateTime(date, time) {
  if (!date || !time) return "—";
  const parsed = new Date(`${date}T${time}`);
  if (Number.isNaN(parsed.getTime())) return "—";
  return new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "short",
    timeStyle: "short"
  }).format(parsed);
}

function formatDateOnly(date) {
  if (!date) return "—";
  const parsed = new Date(`${date}T12:00:00`);
  if (Number.isNaN(parsed.getTime())) return "—";
  return new Intl.DateTimeFormat("fr-FR", { dateStyle: "medium" }).format(parsed);
}

function formatDuration(totalMinutes) {
  const minutes = Math.max(0, Math.round(normalizeNumber(totalMinutes)));
  const hoursPart = Math.floor(minutes / 60);
  const minutesPart = minutes % 60;
  if (hoursPart === 0) return `${minutesPart} min`;
  if (minutesPart === 0) return `${hoursPart} h`;
  return `${hoursPart} h ${String(minutesPart).padStart(2, "0")}`;
}

function getEndDateTime(date, time, durationMinutes) {
  if (!date || !time || normalizeNumber(durationMinutes) <= 0) return null;
  const start = new Date(`${date}T${time}`);
  if (Number.isNaN(start.getTime())) return null;
  return new Date(start.getTime() + Math.round(durationMinutes) * 60000);
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

function endDateString(dateObject) {
  if (!(dateObject instanceof Date) || Number.isNaN(dateObject.getTime())) return "";
  const local = new Date(dateObject.getTime() - dateObject.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}

function endTimeString(dateObject) {
  if (!(dateObject instanceof Date) || Number.isNaN(dateObject.getTime())) return "";
  const local = new Date(dateObject.getTime() - dateObject.getTimezoneOffset() * 60000);
  return local.toISOString().slice(11, 16);
}

function currentLocalDateTime() {
  const now = new Date();
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
  return {
    date: local.toISOString().slice(0, 10),
    time: local.toISOString().slice(11, 16)
  };
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

function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("visible"), 3000);
}

function showTab(tabId) {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.tab === tabId);
  });
  document.querySelectorAll(".panel").forEach((panel) => {
    panel.classList.toggle("active", panel.id === tabId);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function populateLists() {
  const ilots = [...new Set(POSTS.map((item) => item.ilot))].sort(naturalSort);
  ilots.forEach((ilot) => $("ilotSelect").add(new Option(`Îlot ${ilot}`, ilot)));

  FILTERS.slice().sort((a, b) => naturalSort(a.filtre, b.filtre)).forEach((filter) => {
    $("filterSelect").add(new Option(filter.filtre, filter.filtre));
  });
}

function getSelectedPost() {
  return POSTS.find((item) =>
    item.ilot === $("ilotSelect").value &&
    item.poste === $("posteSelect").value
  ) || null;
}

function getSelectedFilter() {
  return FILTERS.find((item) => item.filtre === $("filterSelect").value) || null;
}

function updatePostes(preselectedPost = "") {
  const ilot = $("ilotSelect").value;
  const select = $("posteSelect");
  select.innerHTML = "";

  if (!ilot) {
    select.add(new Option("Choisir d’abord un îlot", ""));
    select.disabled = true;
    updatePostReference();
    updateIrrigationRecap();
    return;
  }

  select.add(new Option("Choisir un poste", ""));
  POSTS
    .filter((item) => item.ilot === ilot)
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
  const programmerInputs = $("programmerInputs");
  const valveInputs = $("valveInputs");

  programmerInputs.classList.add("hidden");
  valveInputs.classList.add("hidden");

  if (!post) {
    reference.classList.add("muted");
    reference.innerHTML = "Sélectionnez un poste pour afficher son type, sa surface et son débit de référence.";
    return;
  }

  reference.classList.remove("muted");
  reference.innerHTML = `
    <div class="reference-grid">
      <div class="reference-item">
        <small>Type</small>
        <strong>${post.type === "P" ? "Programmateur (P)" : "Vanne volumétrique (V)"}</strong>
      </div>
      <div class="reference-item">
        <small>Surface</small>
        <strong>${formatNumber(post.surface, 0)} m²</strong>
      </div>
      <div class="reference-item">
        <small>Débit de référence</small>
        <strong>${formatNumber(post.debit, 3)} m³/h</strong>
      </div>
    </div>`;

  if (post.type === "P") programmerInputs.classList.remove("hidden");
  if (post.type === "V") valveInputs.classList.remove("hidden");
}

function readProgrammerDurationMinutes() {
  const hours = Math.max(0, Math.floor(normalizeNumber($("programmerHours").value)));
  const minutes = Math.max(0, Math.floor(normalizeNumber($("programmerMinutes").value)));
  return hours * 60 + Math.min(minutes, 59);
}

function readFilterDurationMinutes() {
  const hours = Math.max(0, Math.floor(normalizeNumber($("filterHours").value)));
  const minutes = Math.max(0, Math.floor(normalizeNumber($("filterMinutes").value)));
  return hours * 60 + Math.min(minutes, 59);
}

function calculateIrrigation() {
  const post = getSelectedPost();
  const date = $("irrigationDate").value;
  const time = $("irrigationTime").value;
  const status = $("statusSelect").value;

  if (!post) return null;

  let durationMinutes = 0;
  let durationHours = 0;
  let volume = 0;

  if (post.type === "P") {
    durationMinutes = readProgrammerDurationMinutes();
    durationHours = durationMinutes / 60;
    volume = post.debit * durationHours;
  } else {
    volume = normalizeNumber($("valveVolume").value);
    durationHours = post.debit > 0 ? volume / post.debit : 0;
    durationMinutes = Math.round(durationHours * 60);
  }

  const doseMm = post.surface > 0 ? (volume * 1000) / post.surface : 0;
  const end = getEndDateTime(date, time, durationMinutes);

  return {
    post,
    date,
    time,
    status,
    durationMinutes,
    durationHours,
    volume,
    doseMm,
    end
  };
}

function updateIrrigationRecap() {
  updatePostReference();

  const calculation = calculateIrrigation();
  const recap = $("irrigationRecap");

  if (
    !calculation ||
    !calculation.date ||
    !calculation.time ||
    calculation.durationMinutes <= 0 ||
    calculation.volume <= 0
  ) {
    recap.classList.remove("ready");
    recap.innerHTML = `
      <p class="recap-title">Récapitulatif de l’irrigation</p>
      <p class="recap-placeholder">Complétez l’îlot, le poste et les données d’irrigation.</p>`;
    updateIrrigationDuplicateWarning();
    return;
  }

  const typeInstruction = calculation.post.type === "P"
    ? `Pour ${formatDuration(calculation.durationMinutes)}, le volume calculé est de ${formatNumber(calculation.volume)} m³.`
    : `Pour ${formatNumber(calculation.volume)} m³, le temps estimé est de ${formatDuration(calculation.durationMinutes)}.`;

  recap.classList.add("ready");
  recap.innerHTML = `
    <p class="recap-title">Récapitulatif de l’irrigation</p>
    <p class="recap-main">${escapeHtml(calculation.post.poste)} · ${typeInstruction}</p>
    <div class="recap-grid">
      <div class="recap-value">
        <small>Statut</small>
        <strong>${calculation.status === "réalisée" ? "Réalisée" : "Programmée"}</strong>
      </div>
      <div class="recap-value">
        <small>Volume</small>
        <strong>${formatNumber(calculation.volume)} m³</strong>
      </div>
      <div class="recap-value">
        <small>Dose</small>
        <strong>${formatNumber(calculation.doseMm)} mm</strong>
      </div>
      <div class="recap-value">
        <small>Fin estimée</small>
        <strong>${formatEndTime(calculation.end)}</strong>
      </div>
    </div>`;

  updateIrrigationDuplicateWarning();
}

function updateFilterReference() {
  const filter = getSelectedFilter();
  const reference = $("filterReference");

  if (!filter) {
    reference.classList.add("muted");
    reference.textContent = "Sélectionnez un filtre.";
    return;
  }

  reference.classList.remove("muted");
  reference.innerHTML = `
    <div class="reference-item">
      <small>Débit maximal indiqué dans le référentiel</small>
      <strong>${formatNumber(filter.debitMax)} m³/h</strong>
    </div>`;
}

function calculateFilter() {
  const filter = getSelectedFilter();
  const date = $("filterDate").value;
  const time = $("filterTime").value;
  const durationMinutes = readFilterDurationMinutes();
  const end = getEndDateTime(date, time, durationMinutes);

  if (!filter) return null;
  return { filter, date, time, durationMinutes, end };
}

function updateFilterRecap() {
  updateFilterReference();
  const calculation = calculateFilter();
  const recap = $("filterRecap");

  if (
    !calculation ||
    !calculation.date ||
    !calculation.time ||
    calculation.durationMinutes <= 0
  ) {
    recap.classList.remove("ready");
    recap.innerHTML = `
      <p class="recap-title">Récapitulatif du contre-lavage</p>
      <p class="recap-placeholder">Complétez le filtre, la date, l’heure et la durée.</p>`;
    updateFilterDuplicateWarning();
    return;
  }

  recap.classList.add("ready");
  recap.innerHTML = `
    <p class="recap-title">Récapitulatif du contre-lavage</p>
    <p class="recap-main">Filtre ${escapeHtml(calculation.filter.filtre)} · ${formatDuration(calculation.durationMinutes)}</p>
    <div class="recap-grid">
      <div class="recap-value">
        <small>Date</small>
        <strong>${formatDateOnly(calculation.date)}</strong>
      </div>
      <div class="recap-value">
        <small>Début</small>
        <strong>${calculation.time}</strong>
      </div>
      <div class="recap-value">
        <small>Fin estimée</small>
        <strong>${formatEndTime(calculation.end)}</strong>
      </div>
      <div class="recap-value">
        <small>Durée</small>
        <strong>${formatDuration(calculation.durationMinutes)}</strong>
      </div>
    </div>`;

  updateFilterDuplicateWarning();
}

function findIrrigationDuplicate() {
  const post = getSelectedPost();
  const date = $("irrigationDate").value;
  const time = $("irrigationTime").value;
  if (!post || !date || !time) return null;

  return state.irrigations.find((entry) =>
    entry.id !== editingIrrigationId &&
    entry.poste === post.poste &&
    entry.date === date &&
    entry.time === time
  ) || null;
}

function findFilterDuplicate() {
  const filter = getSelectedFilter();
  const date = $("filterDate").value;
  const time = $("filterTime").value;
  if (!filter || !date || !time) return null;

  return state.filters.find((entry) =>
    entry.id !== editingFilterId &&
    entry.filter === filter.filtre &&
    entry.date === date &&
    entry.time === time
  ) || null;
}

function updateIrrigationDuplicateWarning() {
  const warning = $("irrigationDuplicateWarning");
  const duplicate = findIrrigationDuplicate();

  if (!duplicate) {
    warning.classList.add("hidden");
    warning.textContent = "";
    return;
  }

  warning.textContent = "Doublon détecté : une irrigation existe déjà pour ce poste, à cette date et à cette heure. Modifiez l’enregistrement existant ou changez l’heure.";
  warning.classList.remove("hidden");
}

function updateFilterDuplicateWarning() {
  const warning = $("filterDuplicateWarning");
  const duplicate = findFilterDuplicate();

  if (!duplicate) {
    warning.classList.add("hidden");
    warning.textContent = "";
    return;
  }

  warning.textContent = "Doublon détecté : un contre-lavage existe déjà pour ce filtre, à cette date et à cette heure.";
  warning.classList.remove("hidden");
}

function resetIrrigationForm() {
  editingIrrigationId = null;
  $("irrigationForm").reset();
  $("posteSelect").innerHTML = '<option value="">Choisir d’abord un îlot</option>';
  $("posteSelect").disabled = true;
  $("programmerInputs").classList.add("hidden");
  $("valveInputs").classList.add("hidden");
  $("irrigationFormTitle").textContent = "Enregistrer une irrigation";
  $("saveIrrigationBtn").textContent = "Enregistrer l’irrigation";
  $("cancelIrrigationEditBtn").classList.add("hidden");
  setDateTimeDefaults("irrigation");
  updatePostReference();
  updateIrrigationRecap();
}

function resetFilterForm() {
  editingFilterId = null;
  $("filterForm").reset();
  $("filterFormTitle").textContent = "Enregistrer un contre-lavage";
  $("saveFilterBtn").textContent = "Enregistrer le contre-lavage";
  $("cancelFilterEditBtn").classList.add("hidden");
  setDateTimeDefaults("filter");
  updateFilterReference();
  updateFilterRecap();
}

function validateIrrigation(calculation) {
  if (!calculation?.post) return "Sélectionnez un îlot et un poste.";
  if (!calculation.date || !calculation.time) return "Renseignez la date et l’heure de début.";
  if (calculation.durationMinutes <= 0) {
    return calculation.post.type === "P"
      ? "Renseignez une durée d’irrigation supérieure à zéro."
      : "Renseignez un volume supérieur à zéro.";
  }
  if (calculation.volume <= 0) return "Le volume calculé doit être supérieur à zéro.";
  if (findIrrigationDuplicate()) return "Enregistrement impossible : un doublon a été détecté.";
  return "";
}

function validateFilter(calculation) {
  if (!calculation?.filter) return "Sélectionnez un filtre.";
  if (!calculation.date || !calculation.time) return "Renseignez la date et l’heure de début.";
  if (calculation.durationMinutes <= 0) return "Renseignez une durée de contre-lavage supérieure à zéro.";
  if (findFilterDuplicate()) return "Enregistrement impossible : un doublon a été détecté.";
  return "";
}

function saveIrrigation(event) {
  event.preventDefault();
  const calculation = calculateIrrigation();
  const error = validateIrrigation(calculation);

  if (error) {
    showToast(error);
    return;
  }

  const record = {
    id: editingIrrigationId || makeId(),
    ilot: calculation.post.ilot,
    poste: calculation.post.poste,
    equipmentType: calculation.post.type,
    surface: calculation.post.surface,
    referenceFlow: calculation.post.debit,
    status: calculation.status,
    date: calculation.date,
    time: calculation.time,
    endDate: endDateString(calculation.end),
    endTime: endTimeString(calculation.end),
    durationMinutes: calculation.durationMinutes,
    durationHours: calculation.durationHours,
    volume: calculation.volume,
    doseMm: calculation.doseMm,
    note: $("irrigationNote").value.trim(),
    updatedAt: new Date().toISOString()
  };

  const index = state.irrigations.findIndex((entry) => entry.id === editingIrrigationId);
  if (index >= 0) {
    state.irrigations[index] = record;
  } else {
    state.irrigations.push(record);
  }

  saveState();
  const wasEditing = Boolean(editingIrrigationId);
  resetIrrigationForm();
  showToast(wasEditing ? "Irrigation modifiée." : "Irrigation enregistrée.");
}

function saveFilter(event) {
  event.preventDefault();
  const calculation = calculateFilter();
  const error = validateFilter(calculation);

  if (error) {
    showToast(error);
    return;
  }

  const record = {
    id: editingFilterId || makeId(),
    filter: calculation.filter.filtre,
    filterMaxFlow: calculation.filter.debitMax,
    date: calculation.date,
    time: calculation.time,
    endDate: endDateString(calculation.end),
    endTime: endTimeString(calculation.end),
    durationMinutes: calculation.durationMinutes,
    durationHours: calculation.durationMinutes / 60,
    note: $("filterNote").value.trim(),
    updatedAt: new Date().toISOString()
  };

  const index = state.filters.findIndex((entry) => entry.id === editingFilterId);
  if (index >= 0) {
    state.filters[index] = record;
  } else {
    state.filters.push(record);
  }

  saveState();
  const wasEditing = Boolean(editingFilterId);
  resetFilterForm();
  showToast(wasEditing ? "Contre-lavage modifié." : "Contre-lavage enregistré.");
}

function editIrrigation(id) {
  const entry = state.irrigations.find((item) => item.id === id);
  if (!entry) return;

  editingIrrigationId = id;
  $("ilotSelect").value = entry.ilot;
  updatePostes(entry.poste);
  $("statusSelect").value = entry.status || "programmée";
  $("irrigationDate").value = entry.date;
  $("irrigationTime").value = entry.time;
  $("irrigationNote").value = entry.note || "";

  if (entry.equipmentType === "P") {
    const totalMinutes = Math.round(normalizeNumber(entry.durationMinutes));
    $("programmerHours").value = Math.floor(totalMinutes / 60);
    $("programmerMinutes").value = totalMinutes % 60;
    $("valveVolume").value = "";
  } else {
    $("valveVolume").value = Number(entry.volume).toFixed(2);
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

  const totalMinutes = Math.round(normalizeNumber(entry.durationMinutes));
  $("filterHours").value = Math.floor(totalMinutes / 60);
  $("filterMinutes").value = totalMinutes % 60;

  $("filterFormTitle").textContent = "Modifier le contre-lavage";
  $("saveFilterBtn").textContent = "Enregistrer les modifications";
  $("cancelFilterEditBtn").classList.remove("hidden");
  updateFilterRecap();
  showTab("filtre");
}

function deleteRecord(type, id) {
  const collection = type === "irrigation" ? state.irrigations : state.filters;
  const entry = collection.find((item) => item.id === id);
  if (!entry) return;

  const label = type === "irrigation" ? entry.poste : `le filtre ${entry.filter}`;
  if (!window.confirm(`Supprimer définitivement l’enregistrement concernant ${label} ?`)) return;

  const index = collection.findIndex((item) => item.id === id);
  collection.splice(index, 1);
  saveState();
  showToast("Enregistrement supprimé.");
}

function renderHistory() {
  const combined = [
    ...state.irrigations.map((entry) => ({ ...entry, recordType: "irrigation" })),
    ...state.filters.map((entry) => ({ ...entry, recordType: "filter" }))
  ].sort((a, b) => {
    const aTime = new Date(`${a.date}T${a.time || "00:00"}`).getTime();
    const bTime = new Date(`${b.date}T${b.time || "00:00"}`).getTime();
    return bTime - aTime;
  });

  $("irrigationCount").textContent = state.irrigations.length;
  $("filterCount").textContent = state.filters.length;
  $("totalVolume").textContent = formatNumber(
    state.irrigations.reduce((sum, item) => sum + normalizeNumber(item.volume), 0)
  );

  const list = $("historyList");

  if (!combined.length) {
    list.innerHTML = '<div class="history-empty">Aucun enregistrement pour le moment.</div>';
    return;
  }

  list.innerHTML = combined.map((entry) => {
    if (entry.recordType === "irrigation") {
      const statusClass = entry.status === "réalisée" ? "badge-realisee" : "badge-programmee";
      const statusLabel = entry.status === "réalisée" ? "Réalisée" : "Programmée";
      return `
        <article class="history-item">
          <div class="history-content">
            <div class="history-title">
              <span class="badge badge-irrigation">Irrigation</span>
              <span class="badge ${statusClass}">${statusLabel}</span>
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

function exportExcel() {
  if (!state.irrigations.length && !state.filters.length) {
    showToast("Aucune donnée à exporter.");
    return;
  }

  if (typeof XLSX === "undefined") {
    showToast("Le module d’export Excel n’a pas pu être chargé.");
    return;
  }

  const irrigationRows = state.irrigations
    .slice()
    .sort((a, b) => new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`))
    .map((item) => ({
      Date: item.date,
      "Heure de début": item.time,
      "Date de fin": item.endDate,
      "Heure de fin": item.endTime,
      Statut: item.status === "réalisée" ? "Réalisée" : "Programmée",
      "Îlot": item.ilot,
      Poste: item.poste,
      "Type": item.equipmentType === "P" ? "Programmateur (P)" : "Vanne volumétrique (V)",
      "Surface (m²)": normalizeNumber(item.surface),
      "Débit de référence (m³/h)": normalizeNumber(item.referenceFlow),
      "Durée (h décimales)": normalizeNumber(item.durationHours),
      "Durée affichée": formatDuration(item.durationMinutes),
      "Volume (m³)": normalizeNumber(item.volume),
      "Dose (mm)": normalizeNumber(item.doseMm),
      Observation: item.note || ""
    }));

  const filterRows = state.filters
    .slice()
    .sort((a, b) => new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`))
    .map((item) => ({
      Date: item.date,
      "Heure de début": item.time,
      "Date de fin": item.endDate,
      "Heure de fin": item.endTime,
      Filtre: item.filter,
      "Débit maximal du filtre (m³/h)": normalizeNumber(item.filterMaxFlow),
      "Durée (h décimales)": normalizeNumber(item.durationHours),
      "Durée affichée": formatDuration(item.durationMinutes),
      Observation: item.note || ""
    }));

  const referenceRows = [
    ["RÉFÉRENTIEL DES POSTES"],
    ["Îlot", "Poste", "Type", "Surface (m²)", "Débit de référence (m³/h)"],
    ...POSTS
      .slice()
      .sort((a, b) => naturalSort(a.ilot, b.ilot) || naturalSort(a.poste, b.poste))
      .map((item) => [
        item.ilot,
        item.poste,
        item.type === "P" ? "Programmateur (P)" : "Vanne volumétrique (V)",
        item.surface,
        item.debit
      ]),
    [],
    ["RÉFÉRENTIEL DES FILTRES"],
    ["Filtre", "Débit maximal (m³/h)"],
    ...FILTERS
      .slice()
      .sort((a, b) => naturalSort(a.filtre, b.filtre))
      .map((item) => [item.filtre, item.debitMax])
  ];

  const workbook = XLSX.utils.book_new();
  const irrigationSheet = XLSX.utils.json_to_sheet(
    irrigationRows.length ? irrigationRows : [{ Information: "Aucune irrigation enregistrée" }]
  );
  const filterSheet = XLSX.utils.json_to_sheet(
    filterRows.length ? filterRows : [{ Information: "Aucun contre-lavage enregistré" }]
  );
  const referenceSheet = XLSX.utils.aoa_to_sheet(referenceRows);

  if (irrigationRows.length) irrigationSheet["!autofilter"] = { ref: irrigationSheet["!ref"] };
  if (filterRows.length) filterSheet["!autofilter"] = { ref: filterSheet["!ref"] };

  setSheetColumnWidths(irrigationSheet, [12, 13, 12, 13, 12, 8, 35, 24, 14, 24, 19, 18, 14, 12, 40]);
  setSheetColumnWidths(filterSheet, [12, 13, 12, 13, 18, 31, 19, 18, 40]);
  setSheetColumnWidths(referenceSheet, [12, 38, 24, 16, 28]);

  XLSX.utils.book_append_sheet(workbook, irrigationSheet, "Irrigations");
  XLSX.utils.book_append_sheet(workbook, filterSheet, "Contre-lavages");
  XLSX.utils.book_append_sheet(workbook, referenceSheet, "Référentiel");

  const exportDate = currentLocalDateTime().date;
  XLSX.writeFile(workbook, `tracabilite_irrigation_saint-gilles_${exportDate}.xlsx`);
  showToast("Export Excel créé.");
}

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

$("filterSelect").addEventListener("change", updateFilterRecap);
$("filterDate").addEventListener("change", updateFilterRecap);
$("filterTime").addEventListener("input", updateFilterRecap);
$("filterHours").addEventListener("input", updateFilterRecap);
$("filterMinutes").addEventListener("input", updateFilterRecap);

$("cancelIrrigationEditBtn").addEventListener("click", resetIrrigationForm);
$("cancelFilterEditBtn").addEventListener("click", resetFilterForm);
$("exportBtn").addEventListener("click", exportExcel);

$("historyList").addEventListener("click", (event) => {
  const editButton = event.target.closest("[data-edit-id]");
  if (editButton) {
    if (editButton.dataset.editType === "irrigation") editIrrigation(editButton.dataset.editId);
    else editFilter(editButton.dataset.editId);
    return;
  }

  const deleteButton = event.target.closest("[data-delete-id]");
  if (deleteButton) {
    deleteRecord(deleteButton.dataset.deleteType, deleteButton.dataset.deleteId);
  }
});

$("clearAllBtn").addEventListener("click", () => {
  if (!state.irrigations.length && !state.filters.length) {
    showToast("L’historique est déjà vide.");
    return;
  }
  if (!window.confirm("Effacer définitivement toutes les irrigations et tous les contre-lavages enregistrés sur cet appareil ?")) return;

  state.irrigations.length = 0;
  state.filters.length = 0;
  saveState();
  resetIrrigationForm();
  resetFilterForm();
  showToast("Historique effacé.");
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => showTab(tab.dataset.tab));
});

populateLists();
setDateTimeDefaults();
updatePostReference();
updateFilterReference();
updateIrrigationRecap();
updateFilterRecap();
renderHistory();
