const POSTS = [
  { ilot: 1, poste: "1 V1 AB Long" }, { ilot: 1, poste: "1 V2 AB Court" },
  { ilot: 1, poste: "1 V3 PFI Court / Eco" }, { ilot: 1, poste: "1 V4 PFI Long" },
  { ilot: 2, poste: "2 V1 V.Public Vieux" }, { ilot: 2, poste: "2 V2 Kaki-Pomme" },
  { ilot: 2, poste: "2 V3 Agrumes" }, { ilot: 2, poste: "2 V4 Abricot" }, { ilot: 2, poste: "2 V5 Cerise" },
  { ilot: 3, poste: "3 V1 Taille 1" }, { ilot: 3, poste: "3 V2 Taille 2" },
  { ilot: 3, poste: "3 V3 Irri-Ferti A" }, { ilot: 3, poste: "3 V3 Irri-Ferti B" },
  { ilot: 3, poste: "3 V3 Irri-Ferti C" }, { ilot: 3, poste: "3 V3 Irri-Ferti D" }, { ilot: 3, poste: "3 V4 Bio" },
  { ilot: 5, poste: "5 V1 Vigne Rés.Séch.2021+23" }, { ilot: 5, poste: "5 V2 Vigne 2021+23" }, { ilot: 5, poste: "5 V3 Vigne 2017 VCR" },
  { ilot: 6, poste: "6 V1 Nectarnovala" },
  { ilot: 7, poste: "7 OREVE Haie - V7 à V10" }, { ilot: 7, poste: "7 OREVE Gobelet - V1 à V6" },
  { ilot: 7, poste: "7 V1 Cerise" }, { ilot: 7, poste: "7 V3 Peche BIO 2023" },
  { ilot: 7, poste: "7 V4 Pavie Gobelet" }, { ilot: 7, poste: "7 V5 Pavie Simple Y" }, { ilot: 7, poste: "7 V6 Pavies Tatura" },
  { ilot: 8, poste: "8 V1 Coraline Haie" }, { ilot: 8, poste: "8 V2 Coraline Témoin" }, { ilot: 8, poste: "8 V3 Abricot" },
  { ilot: 9, poste: "9 V1 Pêches plates 2026" }, { ilot: 9, poste: "9 V2 Pêche Boréal" },
  { ilot: 9, poste: "9 V3 Pêche Orine" }, { ilot: 9, poste: "9 V5 Abricot Nelson" },
  { ilot: 9, poste: "9 V6 Pavies Gobelets" }, { ilot: 9, poste: "9 V7 Pavies Haies" },
  { ilot: 10, poste: "10 V1 COPERNIC Bi-axe" }, { ilot: 10, poste: "10 V2 COPERNIC Gob. Apl" }, { ilot: 10, poste: "10 V3 COPERERNIC Réf" },
  { ilot: 11, poste: "11 V1-A PG Pêche Réf" }, { ilot: 11, poste: "11 V1-B PG Pêche -30%" },
  { ilot: 11, poste: "11 V1-C Pêche -50%" }, { ilot: 11, poste: "11 V2-A PG Abricot -30%" },
  { ilot: 11, poste: "11 V2-B PG Abricot Réf" }, { ilot: 11, poste: "11 V3 Abricot 2014" },
  { ilot: 11, poste: "11 V4 CAPReD PFI" }, { ilot: 11, poste: "11 V5 CAPReD ECO" }, { ilot: 11, poste: "11 V6 Pêche BI 2025" },
  { ilot: 12, poste: "12 V1-A Clém Confort" }, { ilot: 12, poste: "12 V1-B Clém Bâche" },
  { ilot: 12, poste: "12 V1-C Clém Piloté" }, { ilot: 12, poste: "12 V2 Agrumes 2026" }, { ilot: 12, poste: "12 V3 Citrons 2026" },
  { ilot: 13, poste: "13 V1 Cerise 19" }, { ilot: 13, poste: "13 V2 Pêche Najentina" },
  { ilot: 13, poste: "13 V3 Pêche Najiris" }, { ilot: 13, poste: "13 V4 Pêche Moncante" },
  { ilot: 13, poste: "13 V5 Pêche Pabina" }, { ilot: 13, poste: "13 V6 Pêche Bellamine" }, { ilot: 13, poste: "13 V7 Pêche 12-13" },
  { ilot: 15, poste: "15 V1 Abricot Perlecot" }, { ilot: 15, poste: "15 V1 Abricot Vanilla" },
  { ilot: 15, poste: "15 V2 Pêche Wred" }, { ilot: 15, poste: "15 V3 Pêche Nabyr/Pajurite" }, { ilot: 15, poste: "15 V4 Pêche SweetReine" },
  { ilot: 16, poste: "16 V1 Pêche Nectatop" }, { ilot: 16, poste: "16 V1 Pêche Sweetlove" },
  { ilot: 16, poste: "16 V2 Abricot 2015" }, { ilot: 16, poste: "16 V3 Abricots BI 2021" },
  { ilot: 17, poste: "17 V1 Abricot PG" }, { ilot: 17, poste: "17 V2 Pêche Mica" }, { ilot: 17, poste: "17 V3 Cristal PG" },
  { ilot: 17, poste: "17 V4 Abricot BioAg 20+24" }, { ilot: 17, poste: "17 V5 Pêche BioAg 20+23" },
  { ilot: 18, poste: "18 V1 Abricot BI 23+24" }, { ilot: 18, poste: "18 V2 Abricot BI 2025" },
  { ilot: 18, poste: "18 V3 Peche BI 23+24" }, { ilot: 18, poste: "18 V4 Peche BI 2021" },
  { ilot: 19, poste: "19 V1 Olive PFI" }, { ilot: 19, poste: "19 V2 Ecophyto" }, { ilot: 19, poste: "19 V3 PFI" },
  { ilot: 19, poste: "19 V4 Olive Bio" }, { ilot: 19, poste: "19 V5 Abricot 2026" },
  { ilot: 20, poste: "20 V1 BI Pêche" }, { ilot: 20, poste: "20 V2 BioAg Pêche" },
  { ilot: 20, poste: "20 V3 BioAg Abricot" }, { ilot: 20, poste: "20 V4 BI Abricot" }, { ilot: 20, poste: "20 V5 PG Abricot" },
  { ilot: 21, poste: "21 V1 Abricot" }, { ilot: 21, poste: "21 V1 Cerise" }
];

const FILTERS = ["I1-3", "I2", "I5", "I7-1", "I7-2", "I6-8", "I9-1", "I9-2", "I10", "I11-1", "I11-2", "I11-3", "I12", "I13", "I15", "I16", "I17-1", "I18", "I19", "I20", "I21"];
const STORAGE_KEY = "sudexpe-tracabilite-saint-gilles-v1";

const state = loadState();
const $ = (id) => document.getElementById(id);

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return { irrigations: saved?.irrigations || [], filters: saved?.filters || [] };
  } catch {
    return { irrigations: [], filters: [] };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  renderHistory();
}

function localDateTimeDefaults() {
  const now = new Date();
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
  const date = local.toISOString().slice(0, 10);
  const time = local.toISOString().slice(11, 16);
  [$("irrigationDate"), $("filterDate")].forEach((el) => el.value = date);
  [$("irrigationTime"), $("filterTime")].forEach((el) => el.value = time);
}

function populateLists() {
  const ilots = [...new Set(POSTS.map((item) => item.ilot))].sort((a, b) => a - b);
  ilots.forEach((ilot) => $("ilotSelect").add(new Option(`Îlot ${ilot}`, ilot)));
  FILTERS.forEach((filter) => $("filterSelect").add(new Option(filter, filter)));
}

function updatePostes() {
  const ilot = Number($("ilotSelect").value);
  const select = $("posteSelect");
  select.innerHTML = "";
  if (!ilot) {
    select.add(new Option("Choisir d’abord un îlot", ""));
    select.disabled = true;
    return;
  }
  select.add(new Option("Choisir un poste", ""));
  POSTS.filter((item) => item.ilot === ilot).forEach((item) => select.add(new Option(item.poste, item.poste)));
  select.disabled = false;
}

function updateDebit() {
  const volume = Number($("volumeInput").value);
  const duree = Number($("dureeInput").value);
  $("debitPreview").textContent = volume > 0 && duree > 0
    ? `Débit moyen calculé : ${(volume / duree).toFixed(2)} m³/h`
    : "Débit moyen calculé : —";
}

function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("visible");
  setTimeout(() => toast.classList.remove("visible"), 2600);
}

function makeId() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function formatDate(date, time) {
  const parsed = new Date(`${date}T${time || "00:00"}`);
  return new Intl.DateTimeFormat("fr-FR", { dateStyle: "short", timeStyle: "short" }).format(parsed);
}

function renderHistory() {
  const list = $("historyList");
  const combined = [
    ...state.irrigations.map((entry) => ({ ...entry, type: "irrigation" })),
    ...state.filters.map((entry) => ({ ...entry, type: "filter" }))
  ].sort((a, b) => new Date(`${b.date}T${b.time}`) - new Date(`${a.date}T${a.time}`));

  $("irrigationCount").textContent = state.irrigations.length;
  $("filterCount").textContent = state.filters.length;
  $("totalVolume").textContent = state.irrigations.reduce((sum, item) => sum + Number(item.volume || 0), 0).toLocaleString("fr-FR", { maximumFractionDigits: 2 });

  if (!combined.length) {
    list.innerHTML = '<div class="history-empty">Aucun enregistrement pour le moment.</div>';
    return;
  }

  list.innerHTML = combined.map((entry) => {
    const irrigationDetails = `${entry.volume} m³ · ${entry.duree} h · ${entry.debit} m³/h`;
    const title = entry.type === "irrigation" ? entry.poste : `Filtre ${entry.filter}`;
    const details = entry.type === "irrigation" ? irrigationDetails : "Contre-lavage enregistré";
    const note = entry.note ? `<br>${escapeHtml(entry.note)}` : "";
    return `<article class="history-item">
      <div>
        <strong><span class="badge">${entry.type === "irrigation" ? "Irrigation" : "Filtre"}</span>${escapeHtml(title)}</strong>
        <div class="history-meta">${formatDate(entry.date, entry.time)} · ${details}${note}</div>
      </div>
      <button class="button button-danger-outline button-small" data-delete-type="${entry.type}" data-delete-id="${entry.id}" type="button">Supprimer</button>
    </article>`;
  }).join("");
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
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

  const irrigationRows = state.irrigations.map((item) => ({
    Date: item.date,
    Heure: item.time,
    "Îlot": item.ilot,
    Poste: item.poste,
    "Volume (m³)": Number(item.volume),
    "Durée (h)": Number(item.duree),
    "Débit moyen (m³/h)": Number(item.debit),
    Observation: item.note || ""
  }));
  const filterRows = state.filters.map((item) => ({
    Date: item.date,
    Heure: item.time,
    Filtre: item.filter,
    Opération: "Contre-lavage",
    Observation: item.note || ""
  }));

  const workbook = XLSX.utils.book_new();
  const irrigationSheet = XLSX.utils.json_to_sheet(irrigationRows.length ? irrigationRows : [{ Information: "Aucune irrigation enregistrée" }]);
  const filterSheet = XLSX.utils.json_to_sheet(filterRows.length ? filterRows : [{ Information: "Aucun contre-lavage enregistré" }]);
  irrigationSheet["!cols"] = [{ wch: 12 }, { wch: 9 }, { wch: 8 }, { wch: 34 }, { wch: 14 }, { wch: 12 }, { wch: 20 }, { wch: 40 }];
  filterSheet["!cols"] = [{ wch: 12 }, { wch: 9 }, { wch: 12 }, { wch: 18 }, { wch: 40 }];
  XLSX.utils.book_append_sheet(workbook, irrigationSheet, "Irrigations");
  XLSX.utils.book_append_sheet(workbook, filterSheet, "Contre-lavages");
  XLSX.writeFile(workbook, `tracabilite_irrigation_saint-gilles_${new Date().toISOString().slice(0, 10)}.xlsx`);
}

$("irrigationForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const volume = Number($("volumeInput").value);
  const duree = Number($("dureeInput").value);
  if (volume <= 0 || duree <= 0) {
    showToast("Le volume et la durée doivent être supérieurs à zéro.");
    return;
  }
  state.irrigations.push({
    id: makeId(), ilot: Number($("ilotSelect").value), poste: $("posteSelect").value,
    volume: volume.toFixed(2), duree: duree.toFixed(2), debit: (volume / duree).toFixed(2),
    date: $("irrigationDate").value, time: $("irrigationTime").value, note: $("irrigationNote").value.trim()
  });
  saveState();
  event.target.reset();
  updatePostes();
  localDateTimeDefaults();
  updateDebit();
  showToast("Irrigation enregistrée.");
});

$("filterForm").addEventListener("submit", (event) => {
  event.preventDefault();
  state.filters.push({
    id: makeId(), filter: $("filterSelect").value, date: $("filterDate").value,
    time: $("filterTime").value, note: $("filterNote").value.trim()
  });
  saveState();
  event.target.reset();
  localDateTimeDefaults();
  showToast("Contre-lavage enregistré.");
});

$("historyList").addEventListener("click", (event) => {
  const button = event.target.closest("[data-delete-id]");
  if (!button) return;
  const collection = button.dataset.deleteType === "irrigation" ? state.irrigations : state.filters;
  const index = collection.findIndex((entry) => entry.id === button.dataset.deleteId);
  if (index >= 0) collection.splice(index, 1);
  saveState();
  showToast("Enregistrement supprimé.");
});

$("clearAllBtn").addEventListener("click", () => {
  if (!state.irrigations.length && !state.filters.length) return;
  if (!confirm("Effacer définitivement tout l’historique enregistré sur cet appareil ?")) return;
  state.irrigations.length = 0;
  state.filters.length = 0;
  saveState();
  showToast("Historique effacé.");
});

$("ilotSelect").addEventListener("change", updatePostes);
[$("volumeInput"), $("dureeInput")].forEach((element) => element.addEventListener("input", updateDebit));
$("exportBtn").addEventListener("click", exportExcel);

document.querySelectorAll(".tab").forEach((tab) => tab.addEventListener("click", () => {
  document.querySelectorAll(".tab").forEach((item) => item.classList.toggle("active", item === tab));
  document.querySelectorAll(".panel").forEach((panel) => panel.classList.toggle("active", panel.id === tab.dataset.tab));
}));

populateLists();
localDateTimeDefaults();
renderHistory();
