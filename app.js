const POSTS = [{"ilot":"1","poste":"1 V1 AB Long","surface":1080.0,"type":"P","debit":5.04},{"ilot":"1","poste":"1 V2 AB Court","surface":1350.0,"type":"P","debit":6.3},{"ilot":"1","poste":"1 V3 PFI Court / Eco","surface":1313.0,"type":"P","debit":7.35},{"ilot":"1","poste":"1 V4 PFI Long","surface":1260.0,"type":"P","debit":4.2},{"ilot":"2-4","poste":"2 V1 V.Public Vieux","surface":2880.0,"type":"P","debit":8.4},{"ilot":"2-4","poste":"2 V2 Kaki-Pomme","surface":300.0,"type":"P","debit":1.4},{"ilot":"2-4","poste":"2 V3 Agrumes","surface":900.0,"type":"P","debit":4.2},{"ilot":"2-4","poste":"2 V4 Abricot","surface":1200.0,"type":"P","debit":5.6},{"ilot":"2-4","poste":"2 V5 Cerise","surface":600.0,"type":"P","debit":2.8},{"ilot":"3","poste":"3 V1 Taille 1","surface":3240.0,"type":"P","debit":5.76},{"ilot":"3","poste":"3 V2 Taille 2","surface":2700.0,"type":"P","debit":4.8},{"ilot":"3","poste":"3 V3 Irri-Ferti A","surface":2160.0,"type":"V","debit":3.84},{"ilot":"3","poste":"3 V3 Irri-Ferti B","surface":2160.0,"type":"V","debit":3.84},{"ilot":"3","poste":"3 V3 Irri-Ferti C","surface":2160.0,"type":"V","debit":3.84},{"ilot":"3","poste":"3 V3 Irri-Ferti D","surface":2160.0,"type":"V","debit":3.84},{"ilot":"3","poste":"3 V4 Bio","surface":3240.0,"type":"V","debit":5.76},{"ilot":"5","poste":"5 V1 Vigne Rés.Séch.2021+23","surface":5468.0,"type":"P","debit":3.89},{"ilot":"5","poste":"5 V2 Vigne 2021+23","surface":4253.0,"type":"P","debit":3.02},{"ilot":"5","poste":"5 V3 Vigne 2017 VCR","surface":2633.0,"type":"P","debit":1.6},{"ilot":"6","poste":"6 V1 Nectarnovala","surface":2184.0,"type":"P","debit":12.74},{"ilot":"7","poste":"7 V1 Cerise","surface":3360.0,"type":"V","debit":5.94},{"ilot":"7","poste":"7 OREVE Gobelet - V1 à V6","surface":4032.0,"type":"P","debit":3.584},{"ilot":"7","poste":"7  OREVE Haie - V7 à V10","surface":1296.0,"type":"P","debit":1.728},{"ilot":"7","poste":"7 V3 Peche BIO 2023","surface":4050.0,"type":"P","debit":18.9},{"ilot":"7","poste":"7 V4 Pavie Gobelet","surface":2835.0,"type":"P","debit":13.23},{"ilot":"7","poste":"7 V5 Pavie Simple Y","surface":734.0,"type":"P","debit":3.36},{"ilot":"7","poste":"7 V6 Pavies Tatura","surface":972.0,"type":"P","debit":5.04},{"ilot":"8","poste":"8 V1 Coraline Haie","surface":912.0,"type":"V","debit":4.18},{"ilot":"8","poste":"8 V2 Coraline Témoin","surface":504.0,"type":"V","debit":1.54},{"ilot":"8","poste":"8 V3 Abricot","surface":3408.0,"type":"V","debit":9.94},{"ilot":"9","poste":"9 V1 Pêches plates 2026","surface":964.0,"type":"P","debit":3.36},{"ilot":"9","poste":"9 V2 Pêche Boréal","surface":1920.0,"type":"P","debit":5.6},{"ilot":"9","poste":"9 V3 Pêche Orine","surface":1944.0,"type":"V","debit":7.56},{"ilot":"9","poste":"9 V5 Abricot Nelson","surface":2016.0,"type":"V","debit":5.88},{"ilot":"9","poste":"9 V6 Pavies Gobelets","surface":3080.0,"type":"V","debit":12.32},{"ilot":"9","poste":"9 V7 Pavies Haies","surface":1918.0,"type":"V","debit":9.87},{"ilot":"10","poste":"10 V1 COPERNIC Bi-axe","surface":1638.0,"type":"P","debit":3.74},{"ilot":"10","poste":"10 V2 COPERNIC Gob. Apl","surface":1944.0,"type":"P","debit":3.89},{"ilot":"10","poste":"10 V3 COPERERNIC Réf","surface":1800.0,"type":"P","debit":1.34},{"ilot":"11","poste":"11 V1-A PG Pêche Réf","surface":432.0,"type":"P","debit":1.68},{"ilot":"11","poste":"11 V1-B PG Pêche -30%","surface":1728.0,"type":"P","debit":6.72},{"ilot":"11","poste":"11 V1-C Pêche -50%","surface":624.0,"type":"P","debit":3.64},{"ilot":"11","poste":"11 V2-A PG Abricot -30%","surface":2400.0,"type":"P","debit":7.0},{"ilot":"11","poste":"11 V2-B PG Abricot Réf","surface":480.0,"type":"P","debit":1.4},{"ilot":"11","poste":"11 V3 Abricot 2014","surface":1392.0,"type":"V","debit":4.97},{"ilot":"11","poste":"11 V4 CAPReD PFI","surface":1932.0,"type":"V","debit":6.44},{"ilot":"11","poste":"11 V5 CAPReD ECO","surface":2025.0,"type":"V","debit":9.45},{"ilot":"11","poste":"11 V6 Pêche BI 2025","surface":4950.0,"type":"P","debit":23.1},{"ilot":"12","poste":"12 V1-A Clém Confort","surface":720.0,"type":"P","debit":1.92},{"ilot":"12","poste":"12 V1-B Clém Bâche","surface":720.0,"type":"P","debit":1.92},{"ilot":"12","poste":"12 V1-C Clém Piloté","surface":720.0,"type":"P","debit":1.92},{"ilot":"12","poste":"12 V2 Agrumes 2026","surface":1605.0,"type":"P","debit":4.28},{"ilot":"12","poste":"12 V3 Citrons 2026","surface":300.0,"type":"P","debit":0.8},{"ilot":"13","poste":"13 V1 Cerise 19","surface":4032.0,"type":"P","debit":11.76},{"ilot":"13","poste":"13 V2 Pêche Najentina","surface":2016.0,"type":"P","debit":7.84},{"ilot":"13","poste":"13 V3 Pêche Najiris","surface":1296.0,"type":"P","debit":7.56},{"ilot":"13","poste":"13 V4 Pêche Moncante","surface":2016.0,"type":"P","debit":7.84},{"ilot":"13","poste":"13 V5 Pêche Pabina","surface":1296.0,"type":"P","debit":7.56},{"ilot":"13","poste":"13 V6 Pêche Bellamine","surface":2016.0,"type":"V","debit":7.84},{"ilot":"13","poste":"13 V7 Pêche 12-13","surface":2136.0,"type":"V","debit":6.23},{"ilot":"15","poste":"15 V1 Abricot Perlecot","surface":2088.0,"type":"V","debit":6.09},{"ilot":"15","poste":"15 V1 Abricot Vanilla","surface":1560.0,"type":"V","debit":4.55},{"ilot":"15","poste":"15 V2 Pêche Wred","surface":1636.0,"type":"P","debit":6.37},{"ilot":"15","poste":"15 V3 Pêche Nabyr/Pajurite","surface":1872.0,"type":"P","debit":1.33},{"ilot":"15","poste":"15 V4 Pêche SweetReine","surface":1636.0,"type":"P","debit":6.37},{"ilot":"16","poste":"16 V1 Pêche Nectatop","surface":1944.0,"type":"V","debit":6.78},{"ilot":"16","poste":"16 V1 Pêche Sweetlove","surface":1944.0,"type":"V","debit":7.37},{"ilot":"16","poste":"16 V2 Abricot 2015","surface":1440.0,"type":"V","debit":4.2},{"ilot":"16","poste":"16 V3 Abricots BI 2021","surface":2541.0,"type":"P","debit":8.47},{"ilot":"17","poste":"17 V1 Abricot PG","surface":2856.0,"type":"V","debit":9.52},{"ilot":"17","poste":"17 V2 Pêche Mica","surface":486.0,"type":"V","debit":1.49},{"ilot":"17","poste":"17 V3 Cristal PG","surface":1458.0,"type":"V","debit":4.46},{"ilot":"17","poste":"17 V4 Abricot BioAg 20+24","surface":2250.0,"type":"P","debit":12.6},{"ilot":"17","poste":"17 V5 Pêche BioAg 20+23","surface":972.0,"type":"P","debit":5.67},{"ilot":"18","poste":"18 V1 Abricot BI 23+24","surface":2400.0,"type":"P","debit":7.0},{"ilot":"18","poste":"18 V2 Abricot BI 2025","surface":1560.0,"type":"P","debit":4.55},{"ilot":"18","poste":"18 V3 Peche BI 23+24","surface":2563.0,"type":"P","debit":14.35},{"ilot":"18","poste":"18 V4 Peche BI 2021","surface":2250.0,"type":"P","debit":12.6},{"ilot":"19","poste":"19 V1 Olive PFI","surface":1512.0,"type":"V","debit":2.94},{"ilot":"19","poste":"19 V4 Olive Bio","surface":1512.0,"type":"V","debit":2.94},{"ilot":"19","poste":"19 V2 Ecophyto","surface":2044.0,"type":"P","debit":1.74},{"ilot":"19","poste":"19 V3 PFI","surface":1944.0,"type":"P","debit":7.56},{"ilot":"19","poste":"19 V5 Abricot 2026","surface":2256.0,"type":"P","debit":6.58},{"ilot":"20","poste":"20 V1 BI Pêche","surface":1250.0,"type":"P","debit":7.0},{"ilot":"20","poste":"20 V2 BioAg Pêche","surface":864.0,"type":"P","debit":5.04},{"ilot":"20","poste":"20 V3 BioAg Abricot","surface":1575.0,"type":"P","debit":8.82},{"ilot":"20","poste":"20 V4 BI Abricot","surface":2520.0,"type":"V","debit":8.4},{"ilot":"20","poste":"20 V5 PG Abricot","surface":1533.0,"type":"V","debit":5.11},{"ilot":"21","poste":"21 V1 Abricot","surface":648.0,"type":"V","debit":1.89},{"ilot":"21","poste":"21 V1 Cerise","surface":1416.0,"type":"V","debit":4.13}];
const FILTERS = [{"filtre":"I1-3","debitMax":20.0},{"filtre":"I2","debitMax":15.0},{"filtre":"I5","debitMax":20.0},{"filtre":"I7-1","debitMax":15.0},{"filtre":"I7-2","debitMax":15.0},{"filtre":"I6-8","debitMax":15.0},{"filtre":"I9-1","debitMax":15.0},{"filtre":"I9-2 pavies","debitMax":20.0},{"filtre":"I10","debitMax":20.0},{"filtre":"I11-1","debitMax":15.0},{"filtre":"I11-2","debitMax":15.0},{"filtre":"I11-3","debitMax":15.0},{"filtre":"I12","debitMax":20.0},{"filtre":"I13","debitMax":15.0},{"filtre":"I15","debitMax":15.0},{"filtre":"I16","debitMax":15.0},{"filtre":"I17-1","debitMax":15.0},{"filtre":"I18","debitMax":15.0},{"filtre":"I19","debitMax":15.0},{"filtre":"I20","debitMax":15.0},{"filtre":"I21","debitMax":15.0}];

const CROP_NEEDS_FALLBACK = [{"culture":"1ère et 2ème feuilles (majoré) toute espèce","semaine":14,"debutSemaine":"2026-03-31","etpReferenceMm":20.320682,"besoinMm":16.256545},{"culture":"1ère et 2ème feuilles (majoré) toute espèce","semaine":15,"debutSemaine":"2026-04-07","etpReferenceMm":21.9885,"besoinMm":17.5908},{"culture":"1ère et 2ème feuilles (majoré) toute espèce","semaine":16,"debutSemaine":"2026-04-14","etpReferenceMm":24.101,"besoinMm":19.2808},{"culture":"1ère et 2ème feuilles (majoré) toute espèce","semaine":17,"debutSemaine":"2026-04-21","etpReferenceMm":25.313,"besoinMm":20.2504},{"culture":"1ère et 2ème feuilles (majoré) toute espèce","semaine":18,"debutSemaine":"2026-04-28","etpReferenceMm":26.76,"besoinMm":21.408},{"culture":"1ère et 2ème feuilles (majoré) toute espèce","semaine":19,"debutSemaine":"2026-05-05","etpReferenceMm":28.42,"besoinMm":22.736},{"culture":"1ère et 2ème feuilles (majoré) toute espèce","semaine":20,"debutSemaine":"2026-05-12","etpReferenceMm":32.0425,"besoinMm":25.634},{"culture":"1ère et 2ème feuilles (majoré) toute espèce","semaine":21,"debutSemaine":"2026-05-19","etpReferenceMm":34.2525,"besoinMm":27.402},{"culture":"1ère et 2ème feuilles (majoré) toute espèce","semaine":22,"debutSemaine":"2026-05-26","etpReferenceMm":35.91,"besoinMm":28.728},{"culture":"1ère et 2ème feuilles (majoré) toute espèce","semaine":23,"debutSemaine":"2026-06-02","etpReferenceMm":36.274,"besoinMm":29.0192},{"culture":"1ère et 2ème feuilles (majoré) toute espèce","semaine":24,"debutSemaine":"2026-06-09","etpReferenceMm":38.298,"besoinMm":30.6384},{"culture":"1ère et 2ème feuilles (majoré) toute espèce","semaine":25,"debutSemaine":"2026-06-16","etpReferenceMm":40.514,"besoinMm":32.4112},{"culture":"1ère et 2ème feuilles (majoré) toute espèce","semaine":26,"debutSemaine":"2026-06-23","etpReferenceMm":44.702,"besoinMm":35.7616},{"culture":"1ère et 2ème feuilles (majoré) toute espèce","semaine":27,"debutSemaine":"2026-06-30","etpReferenceMm":44.297,"besoinMm":35.4376},{"culture":"1ère et 2ème feuilles (majoré) toute espèce","semaine":28,"debutSemaine":"2026-07-07","etpReferenceMm":44.103,"besoinMm":35.2824},{"culture":"1ère et 2ème feuilles (majoré) toute espèce","semaine":29,"debutSemaine":"2026-07-14","etpReferenceMm":44.023,"besoinMm":35.2184},{"culture":"1ère et 2ème feuilles (majoré) toute espèce","semaine":30,"debutSemaine":"2026-07-21","etpReferenceMm":43.178091,"besoinMm":34.542473},{"culture":"1ère et 2ème feuilles (majoré) toute espèce","semaine":31,"debutSemaine":"2026-07-28","etpReferenceMm":42.781909,"besoinMm":34.225527},{"culture":"1ère et 2ème feuilles (majoré) toute espèce","semaine":32,"debutSemaine":"2026-08-04","etpReferenceMm":42.1435,"besoinMm":33.7148},{"culture":"1ère et 2ème feuilles (majoré) toute espèce","semaine":33,"debutSemaine":"2026-08-11","etpReferenceMm":36.3625,"besoinMm":29.09},{"culture":"1ère et 2ème feuilles (majoré) toute espèce","semaine":34,"debutSemaine":"2026-08-18","etpReferenceMm":34.763,"besoinMm":27.8104},{"culture":"1ère et 2ème feuilles (majoré) toute espèce","semaine":35,"debutSemaine":"2026-08-25","etpReferenceMm":33.915,"besoinMm":27.132},{"culture":"1ère et 2ème feuilles (majoré) toute espèce","semaine":36,"debutSemaine":"2026-09-01","etpReferenceMm":29.445,"besoinMm":23.556},{"culture":"1ère et 2ème feuilles (majoré) toute espèce","semaine":37,"debutSemaine":"2026-09-08","etpReferenceMm":26.987,"besoinMm":21.5896},{"culture":"1ère et 2ème feuilles (majoré) toute espèce","semaine":38,"debutSemaine":"2026-09-15","etpReferenceMm":24.703,"besoinMm":19.7624},{"culture":"1ère et 2ème feuilles (majoré) toute espèce","semaine":39,"debutSemaine":"2026-09-22","etpReferenceMm":19.684,"besoinMm":15.7472},{"culture":"1ère et 2ème feuilles toute espèces","semaine":14,"debutSemaine":"2026-03-31","etpReferenceMm":20.320682,"besoinMm":8.128273},{"culture":"1ère et 2ème feuilles toute espèces","semaine":15,"debutSemaine":"2026-04-07","etpReferenceMm":21.9885,"besoinMm":8.7954},{"culture":"1ère et 2ème feuilles toute espèces","semaine":16,"debutSemaine":"2026-04-14","etpReferenceMm":24.101,"besoinMm":9.6404},{"culture":"1ère et 2ème feuilles toute espèces","semaine":17,"debutSemaine":"2026-04-21","etpReferenceMm":25.313,"besoinMm":10.1252},{"culture":"1ère et 2ème feuilles toute espèces","semaine":18,"debutSemaine":"2026-04-28","etpReferenceMm":26.76,"besoinMm":10.704},{"culture":"1ère et 2ème feuilles toute espèces","semaine":19,"debutSemaine":"2026-05-05","etpReferenceMm":28.42,"besoinMm":11.368},{"culture":"1ère et 2ème feuilles toute espèces","semaine":20,"debutSemaine":"2026-05-12","etpReferenceMm":32.0425,"besoinMm":19.2255},{"culture":"1ère et 2ème feuilles toute espèces","semaine":21,"debutSemaine":"2026-05-19","etpReferenceMm":34.2525,"besoinMm":20.5515},{"culture":"1ère et 2ème feuilles toute espèces","semaine":22,"debutSemaine":"2026-05-26","etpReferenceMm":35.91,"besoinMm":21.546},{"culture":"1ère et 2ème feuilles toute espèces","semaine":23,"debutSemaine":"2026-06-02","etpReferenceMm":36.274,"besoinMm":21.7644},{"culture":"1ère et 2ème feuilles toute espèces","semaine":24,"debutSemaine":"2026-06-09","etpReferenceMm":38.298,"besoinMm":22.9788},{"culture":"1ère et 2ème feuilles toute espèces","semaine":25,"debutSemaine":"2026-06-16","etpReferenceMm":40.514,"besoinMm":24.3084},{"culture":"1ère et 2ème feuilles toute espèces","semaine":26,"debutSemaine":"2026-06-23","etpReferenceMm":44.702,"besoinMm":26.8212},{"culture":"1ère et 2ème feuilles toute espèces","semaine":27,"debutSemaine":"2026-06-30","etpReferenceMm":44.297,"besoinMm":26.5782},{"culture":"1ère et 2ème feuilles toute espèces","semaine":28,"debutSemaine":"2026-07-07","etpReferenceMm":44.103,"besoinMm":26.4618},{"culture":"1ère et 2ème feuilles toute espèces","semaine":29,"debutSemaine":"2026-07-14","etpReferenceMm":44.023,"besoinMm":26.4138},{"culture":"1ère et 2ème feuilles toute espèces","semaine":30,"debutSemaine":"2026-07-21","etpReferenceMm":43.178091,"besoinMm":25.906855},{"culture":"1ère et 2ème feuilles toute espèces","semaine":31,"debutSemaine":"2026-07-28","etpReferenceMm":42.781909,"besoinMm":25.669145},{"culture":"1ère et 2ème feuilles toute espèces","semaine":32,"debutSemaine":"2026-08-04","etpReferenceMm":42.1435,"besoinMm":25.2861},{"culture":"1ère et 2ème feuilles toute espèces","semaine":33,"debutSemaine":"2026-08-11","etpReferenceMm":36.3625,"besoinMm":21.8175},{"culture":"1ère et 2ème feuilles toute espèces","semaine":34,"debutSemaine":"2026-08-18","etpReferenceMm":34.763,"besoinMm":20.8578},{"culture":"1ère et 2ème feuilles toute espèces","semaine":35,"debutSemaine":"2026-08-25","etpReferenceMm":33.915,"besoinMm":20.349},{"culture":"1ère et 2ème feuilles toute espèces","semaine":36,"debutSemaine":"2026-09-01","etpReferenceMm":29.445,"besoinMm":17.667},{"culture":"1ère et 2ème feuilles toute espèces","semaine":37,"debutSemaine":"2026-09-08","etpReferenceMm":26.987,"besoinMm":10.7948},{"culture":"1ère et 2ème feuilles toute espèces","semaine":38,"debutSemaine":"2026-09-15","etpReferenceMm":24.703,"besoinMm":9.8812},{"culture":"1ère et 2ème feuilles toute espèces","semaine":39,"debutSemaine":"2026-09-22","etpReferenceMm":19.684,"besoinMm":7.8736},{"culture":"Abricotier adulte précoce","semaine":14,"debutSemaine":"2026-03-31","etpReferenceMm":20.320682,"besoinMm":10.160341},{"culture":"Abricotier adulte précoce","semaine":15,"debutSemaine":"2026-04-07","etpReferenceMm":21.9885,"besoinMm":10.99425},{"culture":"Abricotier adulte précoce","semaine":16,"debutSemaine":"2026-04-14","etpReferenceMm":24.101,"besoinMm":12.0505},{"culture":"Abricotier adulte précoce","semaine":17,"debutSemaine":"2026-04-21","etpReferenceMm":25.313,"besoinMm":12.6565},{"culture":"Abricotier adulte précoce","semaine":18,"debutSemaine":"2026-04-28","etpReferenceMm":26.76,"besoinMm":13.38},{"culture":"Abricotier adulte précoce","semaine":19,"debutSemaine":"2026-05-05","etpReferenceMm":28.42,"besoinMm":14.21},{"culture":"Abricotier adulte précoce","semaine":20,"debutSemaine":"2026-05-12","etpReferenceMm":32.0425,"besoinMm":16.02125},{"culture":"Abricotier adulte précoce","semaine":21,"debutSemaine":"2026-05-19","etpReferenceMm":34.2525,"besoinMm":23.97675},{"culture":"Abricotier adulte précoce","semaine":22,"debutSemaine":"2026-05-26","etpReferenceMm":35.91,"besoinMm":25.137},{"culture":"Abricotier adulte précoce","semaine":23,"debutSemaine":"2026-06-02","etpReferenceMm":36.274,"besoinMm":29.0192},{"culture":"Abricotier adulte précoce","semaine":24,"debutSemaine":"2026-06-09","etpReferenceMm":38.298,"besoinMm":30.6384},{"culture":"Abricotier adulte précoce","semaine":25,"debutSemaine":"2026-06-16","etpReferenceMm":40.514,"besoinMm":32.4112},{"culture":"Abricotier adulte précoce","semaine":26,"debutSemaine":"2026-06-23","etpReferenceMm":44.702,"besoinMm":35.7616},{"culture":"Abricotier adulte précoce","semaine":27,"debutSemaine":"2026-06-30","etpReferenceMm":44.297,"besoinMm":35.4376},{"culture":"Abricotier adulte précoce","semaine":28,"debutSemaine":"2026-07-07","etpReferenceMm":44.103,"besoinMm":30.8721},{"culture":"Abricotier adulte précoce","semaine":29,"debutSemaine":"2026-07-14","etpReferenceMm":44.023,"besoinMm":22.0115},{"culture":"Abricotier adulte précoce","semaine":30,"debutSemaine":"2026-07-21","etpReferenceMm":43.178091,"besoinMm":21.589045},{"culture":"Abricotier adulte précoce","semaine":31,"debutSemaine":"2026-07-28","etpReferenceMm":42.781909,"besoinMm":21.390955},{"culture":"Abricotier adulte précoce","semaine":32,"debutSemaine":"2026-08-04","etpReferenceMm":42.1435,"besoinMm":21.07175},{"culture":"Abricotier adulte précoce","semaine":33,"debutSemaine":"2026-08-11","etpReferenceMm":36.3625,"besoinMm":18.18125},{"culture":"Abricotier adulte précoce","semaine":34,"debutSemaine":"2026-08-18","etpReferenceMm":34.763,"besoinMm":17.3815},{"culture":"Abricotier adulte précoce","semaine":35,"debutSemaine":"2026-08-25","etpReferenceMm":33.915,"besoinMm":16.9575},{"culture":"Abricotier adulte précoce","semaine":36,"debutSemaine":"2026-09-01","etpReferenceMm":29.445,"besoinMm":14.7225},{"culture":"Abricotier adulte précoce","semaine":37,"debutSemaine":"2026-09-08","etpReferenceMm":26.987,"besoinMm":13.4935},{"culture":"Abricotier adulte précoce","semaine":38,"debutSemaine":"2026-09-15","etpReferenceMm":24.703,"besoinMm":12.3515},{"culture":"Abricotier adulte précoce","semaine":39,"debutSemaine":"2026-09-22","etpReferenceMm":19.684,"besoinMm":9.842},{"culture":"Abricotier adulte saison","semaine":14,"debutSemaine":"2026-03-31","etpReferenceMm":20.320682,"besoinMm":10.160341},{"culture":"Abricotier adulte saison","semaine":15,"debutSemaine":"2026-04-07","etpReferenceMm":21.9885,"besoinMm":10.99425},{"culture":"Abricotier adulte saison","semaine":16,"debutSemaine":"2026-04-14","etpReferenceMm":24.101,"besoinMm":12.0505},{"culture":"Abricotier adulte saison","semaine":17,"debutSemaine":"2026-04-21","etpReferenceMm":25.313,"besoinMm":12.6565},{"culture":"Abricotier adulte saison","semaine":18,"debutSemaine":"2026-04-28","etpReferenceMm":26.76,"besoinMm":13.38},{"culture":"Abricotier adulte saison","semaine":19,"debutSemaine":"2026-05-05","etpReferenceMm":28.42,"besoinMm":14.21},{"culture":"Abricotier adulte saison","semaine":20,"debutSemaine":"2026-05-12","etpReferenceMm":32.0425,"besoinMm":16.02125},{"culture":"Abricotier adulte saison","semaine":21,"debutSemaine":"2026-05-19","etpReferenceMm":34.2525,"besoinMm":23.97675},{"culture":"Abricotier adulte saison","semaine":22,"debutSemaine":"2026-05-26","etpReferenceMm":35.91,"besoinMm":25.137},{"culture":"Abricotier adulte saison","semaine":23,"debutSemaine":"2026-06-02","etpReferenceMm":36.274,"besoinMm":29.0192},{"culture":"Abricotier adulte saison","semaine":24,"debutSemaine":"2026-06-09","etpReferenceMm":38.298,"besoinMm":30.6384},{"culture":"Abricotier adulte saison","semaine":25,"debutSemaine":"2026-06-16","etpReferenceMm":40.514,"besoinMm":32.4112},{"culture":"Abricotier adulte saison","semaine":26,"debutSemaine":"2026-06-23","etpReferenceMm":44.702,"besoinMm":35.7616},{"culture":"Abricotier adulte saison","semaine":27,"debutSemaine":"2026-06-30","etpReferenceMm":44.297,"besoinMm":35.4376},{"culture":"Abricotier adulte saison","semaine":28,"debutSemaine":"2026-07-07","etpReferenceMm":44.103,"besoinMm":35.2824},{"culture":"Abricotier adulte saison","semaine":29,"debutSemaine":"2026-07-14","etpReferenceMm":44.023,"besoinMm":35.2184},{"culture":"Abricotier adulte saison","semaine":30,"debutSemaine":"2026-07-21","etpReferenceMm":43.178091,"besoinMm":34.542473},{"culture":"Abricotier adulte saison","semaine":31,"debutSemaine":"2026-07-28","etpReferenceMm":42.781909,"besoinMm":34.225527},{"culture":"Abricotier adulte saison","semaine":32,"debutSemaine":"2026-08-04","etpReferenceMm":42.1435,"besoinMm":29.50045},{"culture":"Abricotier adulte saison","semaine":33,"debutSemaine":"2026-08-11","etpReferenceMm":36.3625,"besoinMm":18.18125},{"culture":"Abricotier adulte saison","semaine":34,"debutSemaine":"2026-08-18","etpReferenceMm":34.763,"besoinMm":17.3815},{"culture":"Abricotier adulte saison","semaine":35,"debutSemaine":"2026-08-25","etpReferenceMm":33.915,"besoinMm":16.9575},{"culture":"Abricotier adulte saison","semaine":36,"debutSemaine":"2026-09-01","etpReferenceMm":29.445,"besoinMm":14.7225},{"culture":"Abricotier adulte saison","semaine":37,"debutSemaine":"2026-09-08","etpReferenceMm":26.987,"besoinMm":13.4935},{"culture":"Abricotier adulte saison","semaine":38,"debutSemaine":"2026-09-15","etpReferenceMm":24.703,"besoinMm":12.3515},{"culture":"Abricotier adulte saison","semaine":39,"debutSemaine":"2026-09-22","etpReferenceMm":19.684,"besoinMm":9.842},{"culture":"Abricotier adulte tardif","semaine":14,"debutSemaine":"2026-03-31","etpReferenceMm":20.320682,"besoinMm":10.160341},{"culture":"Abricotier adulte tardif","semaine":15,"debutSemaine":"2026-04-07","etpReferenceMm":21.9885,"besoinMm":10.99425},{"culture":"Abricotier adulte tardif","semaine":16,"debutSemaine":"2026-04-14","etpReferenceMm":24.101,"besoinMm":12.0505},{"culture":"Abricotier adulte tardif","semaine":17,"debutSemaine":"2026-04-21","etpReferenceMm":25.313,"besoinMm":12.6565},{"culture":"Abricotier adulte tardif","semaine":18,"debutSemaine":"2026-04-28","etpReferenceMm":26.76,"besoinMm":13.38},{"culture":"Abricotier adulte tardif","semaine":19,"debutSemaine":"2026-05-05","etpReferenceMm":28.42,"besoinMm":14.21},{"culture":"Abricotier adulte tardif","semaine":20,"debutSemaine":"2026-05-12","etpReferenceMm":32.0425,"besoinMm":16.02125},{"culture":"Abricotier adulte tardif","semaine":21,"debutSemaine":"2026-05-19","etpReferenceMm":34.2525,"besoinMm":23.97675},{"culture":"Abricotier adulte tardif","semaine":22,"debutSemaine":"2026-05-26","etpReferenceMm":35.91,"besoinMm":25.137},{"culture":"Abricotier adulte tardif","semaine":23,"debutSemaine":"2026-06-02","etpReferenceMm":36.274,"besoinMm":29.0192},{"culture":"Abricotier adulte tardif","semaine":24,"debutSemaine":"2026-06-09","etpReferenceMm":38.298,"besoinMm":30.6384},{"culture":"Abricotier adulte tardif","semaine":25,"debutSemaine":"2026-06-16","etpReferenceMm":40.514,"besoinMm":32.4112},{"culture":"Abricotier adulte tardif","semaine":26,"debutSemaine":"2026-06-23","etpReferenceMm":44.702,"besoinMm":35.7616},{"culture":"Abricotier adulte tardif","semaine":27,"debutSemaine":"2026-06-30","etpReferenceMm":44.297,"besoinMm":35.4376},{"culture":"Abricotier adulte tardif","semaine":28,"debutSemaine":"2026-07-07","etpReferenceMm":44.103,"besoinMm":35.2824},{"culture":"Abricotier adulte tardif","semaine":29,"debutSemaine":"2026-07-14","etpReferenceMm":44.023,"besoinMm":35.2184},{"culture":"Abricotier adulte tardif","semaine":30,"debutSemaine":"2026-07-21","etpReferenceMm":43.178091,"besoinMm":34.542473},{"culture":"Abricotier adulte tardif","semaine":31,"debutSemaine":"2026-07-28","etpReferenceMm":42.781909,"besoinMm":34.225527},{"culture":"Abricotier adulte tardif","semaine":32,"debutSemaine":"2026-08-04","etpReferenceMm":42.1435,"besoinMm":33.7148},{"culture":"Abricotier adulte tardif","semaine":33,"debutSemaine":"2026-08-11","etpReferenceMm":36.3625,"besoinMm":29.09},{"culture":"Abricotier adulte tardif","semaine":34,"debutSemaine":"2026-08-18","etpReferenceMm":34.763,"besoinMm":27.8104},{"culture":"Abricotier adulte tardif","semaine":35,"debutSemaine":"2026-08-25","etpReferenceMm":33.915,"besoinMm":27.132},{"culture":"Abricotier adulte tardif","semaine":36,"debutSemaine":"2026-09-01","etpReferenceMm":29.445,"besoinMm":20.6115},{"culture":"Abricotier adulte tardif","semaine":37,"debutSemaine":"2026-09-08","etpReferenceMm":26.987,"besoinMm":13.4935},{"culture":"Abricotier adulte tardif","semaine":38,"debutSemaine":"2026-09-15","etpReferenceMm":24.703,"besoinMm":12.3515},{"culture":"Abricotier adulte tardif","semaine":39,"debutSemaine":"2026-09-22","etpReferenceMm":19.684,"besoinMm":9.842},{"culture":"Cerisier 3ème feuille","semaine":14,"debutSemaine":"2026-03-31","etpReferenceMm":20.320682,"besoinMm":8.128273},{"culture":"Cerisier 3ème feuille","semaine":15,"debutSemaine":"2026-04-07","etpReferenceMm":21.9885,"besoinMm":10.99425},{"culture":"Cerisier 3ème feuille","semaine":16,"debutSemaine":"2026-04-14","etpReferenceMm":24.101,"besoinMm":12.0505},{"culture":"Cerisier 3ème feuille","semaine":17,"debutSemaine":"2026-04-21","etpReferenceMm":25.313,"besoinMm":12.6565},{"culture":"Cerisier 3ème feuille","semaine":18,"debutSemaine":"2026-04-28","etpReferenceMm":26.76,"besoinMm":13.38},{"culture":"Cerisier 3ème feuille","semaine":19,"debutSemaine":"2026-05-05","etpReferenceMm":28.42,"besoinMm":14.21},{"culture":"Cerisier 3ème feuille","semaine":20,"debutSemaine":"2026-05-12","etpReferenceMm":32.0425,"besoinMm":16.02125},{"culture":"Cerisier 3ème feuille","semaine":21,"debutSemaine":"2026-05-19","etpReferenceMm":34.2525,"besoinMm":17.12625},{"culture":"Cerisier 3ème feuille","semaine":22,"debutSemaine":"2026-05-26","etpReferenceMm":35.91,"besoinMm":17.955},{"culture":"Cerisier 3ème feuille","semaine":23,"debutSemaine":"2026-06-02","etpReferenceMm":36.274,"besoinMm":18.137},{"culture":"Cerisier 3ème feuille","semaine":24,"debutSemaine":"2026-06-09","etpReferenceMm":38.298,"besoinMm":19.149},{"culture":"Cerisier 3ème feuille","semaine":25,"debutSemaine":"2026-06-16","etpReferenceMm":40.514,"besoinMm":20.257},{"culture":"Cerisier 3ème feuille","semaine":26,"debutSemaine":"2026-06-23","etpReferenceMm":44.702,"besoinMm":22.351},{"culture":"Cerisier 3ème feuille","semaine":27,"debutSemaine":"2026-06-30","etpReferenceMm":44.297,"besoinMm":22.1485},{"culture":"Cerisier 3ème feuille","semaine":28,"debutSemaine":"2026-07-07","etpReferenceMm":44.103,"besoinMm":22.0515},{"culture":"Cerisier 3ème feuille","semaine":29,"debutSemaine":"2026-07-14","etpReferenceMm":44.023,"besoinMm":22.0115},{"culture":"Cerisier 3ème feuille","semaine":30,"debutSemaine":"2026-07-21","etpReferenceMm":43.178091,"besoinMm":17.271236},{"culture":"Cerisier 3ème feuille","semaine":31,"debutSemaine":"2026-07-28","etpReferenceMm":42.781909,"besoinMm":17.112764},{"culture":"Cerisier 3ème feuille","semaine":32,"debutSemaine":"2026-08-04","etpReferenceMm":42.1435,"besoinMm":16.8574},{"culture":"Cerisier 3ème feuille","semaine":33,"debutSemaine":"2026-08-11","etpReferenceMm":36.3625,"besoinMm":14.545},{"culture":"Cerisier 3ème feuille","semaine":34,"debutSemaine":"2026-08-18","etpReferenceMm":34.763,"besoinMm":13.9052},{"culture":"Cerisier 3ème feuille","semaine":35,"debutSemaine":"2026-08-25","etpReferenceMm":33.915,"besoinMm":13.566},{"culture":"Cerisier 3ème feuille","semaine":36,"debutSemaine":"2026-09-01","etpReferenceMm":29.445,"besoinMm":11.778},{"culture":"Cerisier 3ème feuille","semaine":37,"debutSemaine":"2026-09-08","etpReferenceMm":26.987,"besoinMm":10.7948},{"culture":"Cerisier 3ème feuille","semaine":38,"debutSemaine":"2026-09-15","etpReferenceMm":24.703,"besoinMm":9.8812},{"culture":"Cerisier 3ème feuille","semaine":39,"debutSemaine":"2026-09-22","etpReferenceMm":19.684,"besoinMm":7.8736},{"culture":"Cerisier adulte Maxma et SL","semaine":14,"debutSemaine":"2026-03-31","etpReferenceMm":20.320682,"besoinMm":10.160341},{"culture":"Cerisier adulte Maxma et SL","semaine":15,"debutSemaine":"2026-04-07","etpReferenceMm":21.9885,"besoinMm":10.99425},{"culture":"Cerisier adulte Maxma et SL","semaine":16,"debutSemaine":"2026-04-14","etpReferenceMm":24.101,"besoinMm":12.0505},{"culture":"Cerisier adulte Maxma et SL","semaine":17,"debutSemaine":"2026-04-21","etpReferenceMm":25.313,"besoinMm":12.6565},{"culture":"Cerisier adulte Maxma et SL","semaine":18,"debutSemaine":"2026-04-28","etpReferenceMm":26.76,"besoinMm":18.732},{"culture":"Cerisier adulte Maxma et SL","semaine":19,"debutSemaine":"2026-05-05","etpReferenceMm":28.42,"besoinMm":19.894},{"culture":"Cerisier adulte Maxma et SL","semaine":20,"debutSemaine":"2026-05-12","etpReferenceMm":32.0425,"besoinMm":22.42975},{"culture":"Cerisier adulte Maxma et SL","semaine":21,"debutSemaine":"2026-05-19","etpReferenceMm":34.2525,"besoinMm":23.97675},{"culture":"Cerisier adulte Maxma et SL","semaine":22,"debutSemaine":"2026-05-26","etpReferenceMm":35.91,"besoinMm":25.137},{"culture":"Cerisier adulte Maxma et SL","semaine":23,"debutSemaine":"2026-06-02","etpReferenceMm":36.274,"besoinMm":25.3918},{"culture":"Cerisier adulte Maxma et SL","semaine":24,"debutSemaine":"2026-06-09","etpReferenceMm":38.298,"besoinMm":26.8086},{"culture":"Cerisier adulte Maxma et SL","semaine":25,"debutSemaine":"2026-06-16","etpReferenceMm":40.514,"besoinMm":28.3598},{"culture":"Cerisier adulte Maxma et SL","semaine":26,"debutSemaine":"2026-06-23","etpReferenceMm":44.702,"besoinMm":22.351},{"culture":"Cerisier adulte Maxma et SL","semaine":27,"debutSemaine":"2026-06-30","etpReferenceMm":44.297,"besoinMm":22.1485},{"culture":"Cerisier adulte Maxma et SL","semaine":28,"debutSemaine":"2026-07-07","etpReferenceMm":44.103,"besoinMm":22.0515},{"culture":"Cerisier adulte Maxma et SL","semaine":29,"debutSemaine":"2026-07-14","etpReferenceMm":44.023,"besoinMm":22.0115},{"culture":"Cerisier adulte Maxma et SL","semaine":30,"debutSemaine":"2026-07-21","etpReferenceMm":43.178091,"besoinMm":21.589045},{"culture":"Cerisier adulte Maxma et SL","semaine":31,"debutSemaine":"2026-07-28","etpReferenceMm":42.781909,"besoinMm":21.390955},{"culture":"Cerisier adulte Maxma et SL","semaine":32,"debutSemaine":"2026-08-04","etpReferenceMm":42.1435,"besoinMm":21.07175},{"culture":"Cerisier adulte Maxma et SL","semaine":33,"debutSemaine":"2026-08-11","etpReferenceMm":36.3625,"besoinMm":18.18125},{"culture":"Cerisier adulte Maxma et SL","semaine":34,"debutSemaine":"2026-08-18","etpReferenceMm":34.763,"besoinMm":17.3815},{"culture":"Cerisier adulte Maxma et SL","semaine":35,"debutSemaine":"2026-08-25","etpReferenceMm":33.915,"besoinMm":16.9575},{"culture":"Cerisier adulte Maxma et SL","semaine":36,"debutSemaine":"2026-09-01","etpReferenceMm":29.445,"besoinMm":14.7225},{"culture":"Cerisier adulte Maxma et SL","semaine":37,"debutSemaine":"2026-09-08","etpReferenceMm":26.987,"besoinMm":13.4935},{"culture":"Cerisier adulte Maxma et SL","semaine":38,"debutSemaine":"2026-09-15","etpReferenceMm":24.703,"besoinMm":12.3515},{"culture":"Cerisier adulte Maxma et SL","semaine":39,"debutSemaine":"2026-09-22","etpReferenceMm":19.684,"besoinMm":9.842},{"culture":"Cerisier adulte Tabel","semaine":14,"debutSemaine":"2026-03-31","etpReferenceMm":20.320682,"besoinMm":12.192409},{"culture":"Cerisier adulte Tabel","semaine":15,"debutSemaine":"2026-04-07","etpReferenceMm":21.9885,"besoinMm":13.1931},{"culture":"Cerisier adulte Tabel","semaine":16,"debutSemaine":"2026-04-14","etpReferenceMm":24.101,"besoinMm":14.4606},{"culture":"Cerisier adulte Tabel","semaine":17,"debutSemaine":"2026-04-21","etpReferenceMm":25.313,"besoinMm":15.1878},{"culture":"Cerisier adulte Tabel","semaine":18,"debutSemaine":"2026-04-28","etpReferenceMm":26.76,"besoinMm":18.732},{"culture":"Cerisier adulte Tabel","semaine":19,"debutSemaine":"2026-05-05","etpReferenceMm":28.42,"besoinMm":19.894},{"culture":"Cerisier adulte Tabel","semaine":20,"debutSemaine":"2026-05-12","etpReferenceMm":32.0425,"besoinMm":22.42975},{"culture":"Cerisier adulte Tabel","semaine":21,"debutSemaine":"2026-05-19","etpReferenceMm":34.2525,"besoinMm":23.97675},{"culture":"Cerisier adulte Tabel","semaine":22,"debutSemaine":"2026-05-26","etpReferenceMm":35.91,"besoinMm":25.137},{"culture":"Cerisier adulte Tabel","semaine":23,"debutSemaine":"2026-06-02","etpReferenceMm":36.274,"besoinMm":25.3918},{"culture":"Cerisier adulte Tabel","semaine":24,"debutSemaine":"2026-06-09","etpReferenceMm":38.298,"besoinMm":26.8086},{"culture":"Cerisier adulte Tabel","semaine":25,"debutSemaine":"2026-06-16","etpReferenceMm":40.514,"besoinMm":28.3598},{"culture":"Cerisier adulte Tabel","semaine":26,"debutSemaine":"2026-06-23","etpReferenceMm":44.702,"besoinMm":22.351},{"culture":"Cerisier adulte Tabel","semaine":27,"debutSemaine":"2026-06-30","etpReferenceMm":44.297,"besoinMm":22.1485},{"culture":"Cerisier adulte Tabel","semaine":28,"debutSemaine":"2026-07-07","etpReferenceMm":44.103,"besoinMm":22.0515},{"culture":"Cerisier adulte Tabel","semaine":29,"debutSemaine":"2026-07-14","etpReferenceMm":44.023,"besoinMm":22.0115},{"culture":"Cerisier adulte Tabel","semaine":30,"debutSemaine":"2026-07-21","etpReferenceMm":43.178091,"besoinMm":21.589045},{"culture":"Cerisier adulte Tabel","semaine":31,"debutSemaine":"2026-07-28","etpReferenceMm":42.781909,"besoinMm":21.390955},{"culture":"Cerisier adulte Tabel","semaine":32,"debutSemaine":"2026-08-04","etpReferenceMm":42.1435,"besoinMm":21.07175},{"culture":"Cerisier adulte Tabel","semaine":33,"debutSemaine":"2026-08-11","etpReferenceMm":36.3625,"besoinMm":18.18125},{"culture":"Cerisier adulte Tabel","semaine":34,"debutSemaine":"2026-08-18","etpReferenceMm":34.763,"besoinMm":17.3815},{"culture":"Cerisier adulte Tabel","semaine":35,"debutSemaine":"2026-08-25","etpReferenceMm":33.915,"besoinMm":16.9575},{"culture":"Cerisier adulte Tabel","semaine":36,"debutSemaine":"2026-09-01","etpReferenceMm":29.445,"besoinMm":14.7225},{"culture":"Cerisier adulte Tabel","semaine":37,"debutSemaine":"2026-09-08","etpReferenceMm":26.987,"besoinMm":13.4935},{"culture":"Cerisier adulte Tabel","semaine":38,"debutSemaine":"2026-09-15","etpReferenceMm":24.703,"besoinMm":12.3515},{"culture":"Cerisier adulte Tabel","semaine":39,"debutSemaine":"2026-09-22","etpReferenceMm":19.684,"besoinMm":9.842},{"culture":"Pêcher adulte précoce","semaine":14,"debutSemaine":"2026-03-31","etpReferenceMm":20.320682,"besoinMm":14.224477},{"culture":"Pêcher adulte précoce","semaine":15,"debutSemaine":"2026-04-07","etpReferenceMm":21.9885,"besoinMm":15.39195},{"culture":"Pêcher adulte précoce","semaine":16,"debutSemaine":"2026-04-14","etpReferenceMm":24.101,"besoinMm":16.8707},{"culture":"Pêcher adulte précoce","semaine":17,"debutSemaine":"2026-04-21","etpReferenceMm":25.313,"besoinMm":17.7191},{"culture":"Pêcher adulte précoce","semaine":18,"debutSemaine":"2026-04-28","etpReferenceMm":26.76,"besoinMm":18.732},{"culture":"Pêcher adulte précoce","semaine":19,"debutSemaine":"2026-05-05","etpReferenceMm":28.42,"besoinMm":22.736},{"culture":"Pêcher adulte précoce","semaine":20,"debutSemaine":"2026-05-12","etpReferenceMm":32.0425,"besoinMm":28.83825},{"culture":"Pêcher adulte précoce","semaine":21,"debutSemaine":"2026-05-19","etpReferenceMm":34.2525,"besoinMm":34.2525},{"culture":"Pêcher adulte précoce","semaine":22,"debutSemaine":"2026-05-26","etpReferenceMm":35.91,"besoinMm":35.91},{"culture":"Pêcher adulte précoce","semaine":23,"debutSemaine":"2026-06-02","etpReferenceMm":36.274,"besoinMm":36.274},{"culture":"Pêcher adulte précoce","semaine":24,"debutSemaine":"2026-06-09","etpReferenceMm":38.298,"besoinMm":38.298},{"culture":"Pêcher adulte précoce","semaine":25,"debutSemaine":"2026-06-16","etpReferenceMm":40.514,"besoinMm":40.514},{"culture":"Pêcher adulte précoce","semaine":26,"debutSemaine":"2026-06-23","etpReferenceMm":44.702,"besoinMm":44.702},{"culture":"Pêcher adulte précoce","semaine":27,"debutSemaine":"2026-06-30","etpReferenceMm":44.297,"besoinMm":35.4376},{"culture":"Pêcher adulte précoce","semaine":28,"debutSemaine":"2026-07-07","etpReferenceMm":44.103,"besoinMm":35.2824},{"culture":"Pêcher adulte précoce","semaine":29,"debutSemaine":"2026-07-14","etpReferenceMm":44.023,"besoinMm":35.2184},{"culture":"Pêcher adulte précoce","semaine":30,"debutSemaine":"2026-07-21","etpReferenceMm":43.178091,"besoinMm":34.542473},{"culture":"Pêcher adulte précoce","semaine":31,"debutSemaine":"2026-07-28","etpReferenceMm":42.781909,"besoinMm":34.225527},{"culture":"Pêcher adulte précoce","semaine":32,"debutSemaine":"2026-08-04","etpReferenceMm":42.1435,"besoinMm":33.7148},{"culture":"Pêcher adulte précoce","semaine":33,"debutSemaine":"2026-08-11","etpReferenceMm":36.3625,"besoinMm":29.09},{"culture":"Pêcher adulte précoce","semaine":34,"debutSemaine":"2026-08-18","etpReferenceMm":34.763,"besoinMm":27.8104},{"culture":"Pêcher adulte précoce","semaine":35,"debutSemaine":"2026-08-25","etpReferenceMm":33.915,"besoinMm":27.132},{"culture":"Pêcher adulte précoce","semaine":36,"debutSemaine":"2026-09-01","etpReferenceMm":29.445,"besoinMm":23.556},{"culture":"Pêcher adulte précoce","semaine":37,"debutSemaine":"2026-09-08","etpReferenceMm":26.987,"besoinMm":18.8909},{"culture":"Pêcher adulte précoce","semaine":38,"debutSemaine":"2026-09-15","etpReferenceMm":24.703,"besoinMm":17.2921},{"culture":"Pêcher adulte précoce","semaine":39,"debutSemaine":"2026-09-22","etpReferenceMm":19.684,"besoinMm":13.7788},{"culture":"Pêcher adulte saison","semaine":14,"debutSemaine":"2026-03-31","etpReferenceMm":20.320682,"besoinMm":14.224477},{"culture":"Pêcher adulte saison","semaine":15,"debutSemaine":"2026-04-07","etpReferenceMm":21.9885,"besoinMm":15.39195},{"culture":"Pêcher adulte saison","semaine":16,"debutSemaine":"2026-04-14","etpReferenceMm":24.101,"besoinMm":16.8707},{"culture":"Pêcher adulte saison","semaine":17,"debutSemaine":"2026-04-21","etpReferenceMm":25.313,"besoinMm":17.7191},{"culture":"Pêcher adulte saison","semaine":18,"debutSemaine":"2026-04-28","etpReferenceMm":26.76,"besoinMm":18.732},{"culture":"Pêcher adulte saison","semaine":19,"debutSemaine":"2026-05-05","etpReferenceMm":28.42,"besoinMm":22.736},{"culture":"Pêcher adulte saison","semaine":20,"debutSemaine":"2026-05-12","etpReferenceMm":32.0425,"besoinMm":28.83825},{"culture":"Pêcher adulte saison","semaine":21,"debutSemaine":"2026-05-19","etpReferenceMm":34.2525,"besoinMm":34.2525},{"culture":"Pêcher adulte saison","semaine":22,"debutSemaine":"2026-05-26","etpReferenceMm":35.91,"besoinMm":35.91},{"culture":"Pêcher adulte saison","semaine":23,"debutSemaine":"2026-06-02","etpReferenceMm":36.274,"besoinMm":36.274},{"culture":"Pêcher adulte saison","semaine":24,"debutSemaine":"2026-06-09","etpReferenceMm":38.298,"besoinMm":38.298},{"culture":"Pêcher adulte saison","semaine":25,"debutSemaine":"2026-06-16","etpReferenceMm":40.514,"besoinMm":40.514},{"culture":"Pêcher adulte saison","semaine":26,"debutSemaine":"2026-06-23","etpReferenceMm":44.702,"besoinMm":44.702},{"culture":"Pêcher adulte saison","semaine":27,"debutSemaine":"2026-06-30","etpReferenceMm":44.297,"besoinMm":44.297},{"culture":"Pêcher adulte saison","semaine":28,"debutSemaine":"2026-07-07","etpReferenceMm":44.103,"besoinMm":44.103},{"culture":"Pêcher adulte saison","semaine":29,"debutSemaine":"2026-07-14","etpReferenceMm":44.023,"besoinMm":44.023},{"culture":"Pêcher adulte saison","semaine":30,"debutSemaine":"2026-07-21","etpReferenceMm":43.178091,"besoinMm":43.178091},{"culture":"Pêcher adulte saison","semaine":31,"debutSemaine":"2026-07-28","etpReferenceMm":42.781909,"besoinMm":42.781909},{"culture":"Pêcher adulte saison","semaine":32,"debutSemaine":"2026-08-04","etpReferenceMm":42.1435,"besoinMm":33.7148},{"culture":"Pêcher adulte saison","semaine":33,"debutSemaine":"2026-08-11","etpReferenceMm":36.3625,"besoinMm":29.09},{"culture":"Pêcher adulte saison","semaine":34,"debutSemaine":"2026-08-18","etpReferenceMm":34.763,"besoinMm":27.8104},{"culture":"Pêcher adulte saison","semaine":35,"debutSemaine":"2026-08-25","etpReferenceMm":33.915,"besoinMm":27.132},{"culture":"Pêcher adulte saison","semaine":36,"debutSemaine":"2026-09-01","etpReferenceMm":29.445,"besoinMm":23.556},{"culture":"Pêcher adulte saison","semaine":37,"debutSemaine":"2026-09-08","etpReferenceMm":26.987,"besoinMm":18.8909},{"culture":"Pêcher adulte saison","semaine":38,"debutSemaine":"2026-09-15","etpReferenceMm":24.703,"besoinMm":17.2921},{"culture":"Pêcher adulte saison","semaine":39,"debutSemaine":"2026-09-22","etpReferenceMm":19.684,"besoinMm":13.7788},{"culture":"Pêcher adulte tardif","semaine":14,"debutSemaine":"2026-03-31","etpReferenceMm":20.320682,"besoinMm":14.224477},{"culture":"Pêcher adulte tardif","semaine":15,"debutSemaine":"2026-04-07","etpReferenceMm":21.9885,"besoinMm":15.39195},{"culture":"Pêcher adulte tardif","semaine":16,"debutSemaine":"2026-04-14","etpReferenceMm":24.101,"besoinMm":16.8707},{"culture":"Pêcher adulte tardif","semaine":17,"debutSemaine":"2026-04-21","etpReferenceMm":25.313,"besoinMm":17.7191},{"culture":"Pêcher adulte tardif","semaine":18,"debutSemaine":"2026-04-28","etpReferenceMm":26.76,"besoinMm":18.732},{"culture":"Pêcher adulte tardif","semaine":19,"debutSemaine":"2026-05-05","etpReferenceMm":28.42,"besoinMm":22.736},{"culture":"Pêcher adulte tardif","semaine":20,"debutSemaine":"2026-05-12","etpReferenceMm":32.0425,"besoinMm":28.83825},{"culture":"Pêcher adulte tardif","semaine":21,"debutSemaine":"2026-05-19","etpReferenceMm":34.2525,"besoinMm":34.2525},{"culture":"Pêcher adulte tardif","semaine":22,"debutSemaine":"2026-05-26","etpReferenceMm":35.91,"besoinMm":35.91},{"culture":"Pêcher adulte tardif","semaine":23,"debutSemaine":"2026-06-02","etpReferenceMm":36.274,"besoinMm":36.274},{"culture":"Pêcher adulte tardif","semaine":24,"debutSemaine":"2026-06-09","etpReferenceMm":38.298,"besoinMm":38.298},{"culture":"Pêcher adulte tardif","semaine":25,"debutSemaine":"2026-06-16","etpReferenceMm":40.514,"besoinMm":40.514},{"culture":"Pêcher adulte tardif","semaine":26,"debutSemaine":"2026-06-23","etpReferenceMm":44.702,"besoinMm":44.702},{"culture":"Pêcher adulte tardif","semaine":27,"debutSemaine":"2026-06-30","etpReferenceMm":44.297,"besoinMm":44.297},{"culture":"Pêcher adulte tardif","semaine":28,"debutSemaine":"2026-07-07","etpReferenceMm":44.103,"besoinMm":44.103},{"culture":"Pêcher adulte tardif","semaine":29,"debutSemaine":"2026-07-14","etpReferenceMm":44.023,"besoinMm":44.023},{"culture":"Pêcher adulte tardif","semaine":30,"debutSemaine":"2026-07-21","etpReferenceMm":43.178091,"besoinMm":43.178091},{"culture":"Pêcher adulte tardif","semaine":31,"debutSemaine":"2026-07-28","etpReferenceMm":42.781909,"besoinMm":42.781909},{"culture":"Pêcher adulte tardif","semaine":32,"debutSemaine":"2026-08-04","etpReferenceMm":42.1435,"besoinMm":42.1435},{"culture":"Pêcher adulte tardif","semaine":33,"debutSemaine":"2026-08-11","etpReferenceMm":36.3625,"besoinMm":36.3625},{"culture":"Pêcher adulte tardif","semaine":34,"debutSemaine":"2026-08-18","etpReferenceMm":34.763,"besoinMm":34.763},{"culture":"Pêcher adulte tardif","semaine":35,"debutSemaine":"2026-08-25","etpReferenceMm":33.915,"besoinMm":33.915},{"culture":"Pêcher adulte tardif","semaine":36,"debutSemaine":"2026-09-01","etpReferenceMm":29.445,"besoinMm":23.556},{"culture":"Pêcher adulte tardif","semaine":37,"debutSemaine":"2026-09-08","etpReferenceMm":26.987,"besoinMm":21.5896},{"culture":"Pêcher adulte tardif","semaine":38,"debutSemaine":"2026-09-15","etpReferenceMm":24.703,"besoinMm":17.2921},{"culture":"Pêcher adulte tardif","semaine":39,"debutSemaine":"2026-09-22","etpReferenceMm":19.684,"besoinMm":13.7788},{"culture":"Grenades","semaine":14,"debutSemaine":"2026-03-31","etpReferenceMm":20.320682,"besoinMm":6.096205},{"culture":"Grenades","semaine":15,"debutSemaine":"2026-04-07","etpReferenceMm":21.9885,"besoinMm":6.59655},{"culture":"Grenades","semaine":16,"debutSemaine":"2026-04-14","etpReferenceMm":24.101,"besoinMm":7.2303},{"culture":"Grenades","semaine":17,"debutSemaine":"2026-04-21","etpReferenceMm":25.313,"besoinMm":7.5939},{"culture":"Grenades","semaine":18,"debutSemaine":"2026-04-28","etpReferenceMm":26.76,"besoinMm":8.028},{"culture":"Grenades","semaine":19,"debutSemaine":"2026-05-05","etpReferenceMm":28.42,"besoinMm":8.526},{"culture":"Grenades","semaine":20,"debutSemaine":"2026-05-12","etpReferenceMm":32.0425,"besoinMm":9.61275},{"culture":"Grenades","semaine":21,"debutSemaine":"2026-05-19","etpReferenceMm":34.2525,"besoinMm":10.27575},{"culture":"Grenades","semaine":22,"debutSemaine":"2026-05-26","etpReferenceMm":35.91,"besoinMm":10.773},{"culture":"Grenades","semaine":23,"debutSemaine":"2026-06-02","etpReferenceMm":36.274,"besoinMm":10.8822},{"culture":"Grenades","semaine":24,"debutSemaine":"2026-06-09","etpReferenceMm":38.298,"besoinMm":11.4894},{"culture":"Grenades","semaine":25,"debutSemaine":"2026-06-16","etpReferenceMm":40.514,"besoinMm":12.1542},{"culture":"Grenades","semaine":26,"debutSemaine":"2026-06-23","etpReferenceMm":44.702,"besoinMm":13.4106},{"culture":"Grenades","semaine":27,"debutSemaine":"2026-06-30","etpReferenceMm":44.297,"besoinMm":13.2891},{"culture":"Grenades","semaine":28,"debutSemaine":"2026-07-07","etpReferenceMm":44.103,"besoinMm":13.2309},{"culture":"Grenades","semaine":29,"debutSemaine":"2026-07-14","etpReferenceMm":44.023,"besoinMm":13.2069},{"culture":"Grenades","semaine":30,"debutSemaine":"2026-07-21","etpReferenceMm":43.178091,"besoinMm":12.953427},{"culture":"Grenades","semaine":31,"debutSemaine":"2026-07-28","etpReferenceMm":42.781909,"besoinMm":12.834573},{"culture":"Grenades","semaine":32,"debutSemaine":"2026-08-04","etpReferenceMm":42.1435,"besoinMm":12.64305},{"culture":"Grenades","semaine":33,"debutSemaine":"2026-08-11","etpReferenceMm":36.3625,"besoinMm":10.90875},{"culture":"Grenades","semaine":34,"debutSemaine":"2026-08-18","etpReferenceMm":34.763,"besoinMm":10.4289},{"culture":"Grenades","semaine":35,"debutSemaine":"2026-08-25","etpReferenceMm":33.915,"besoinMm":10.1745},{"culture":"Grenades","semaine":36,"debutSemaine":"2026-09-01","etpReferenceMm":29.445,"besoinMm":8.8335},{"culture":"Grenades","semaine":37,"debutSemaine":"2026-09-08","etpReferenceMm":26.987,"besoinMm":8.0961},{"culture":"Grenades","semaine":38,"debutSemaine":"2026-09-15","etpReferenceMm":24.703,"besoinMm":7.4109},{"culture":"Grenades","semaine":39,"debutSemaine":"2026-09-22","etpReferenceMm":19.684,"besoinMm":5.9052},{"culture":"Agrumes","semaine":14,"debutSemaine":"2026-03-31","etpReferenceMm":20.320682,"besoinMm":8.128273},{"culture":"Agrumes","semaine":15,"debutSemaine":"2026-04-07","etpReferenceMm":21.9885,"besoinMm":8.7954},{"culture":"Agrumes","semaine":16,"debutSemaine":"2026-04-14","etpReferenceMm":24.101,"besoinMm":9.6404},{"culture":"Agrumes","semaine":17,"debutSemaine":"2026-04-21","etpReferenceMm":25.313,"besoinMm":10.1252},{"culture":"Agrumes","semaine":18,"debutSemaine":"2026-04-28","etpReferenceMm":26.76,"besoinMm":10.704},{"culture":"Agrumes","semaine":19,"debutSemaine":"2026-05-05","etpReferenceMm":28.42,"besoinMm":11.368},{"culture":"Agrumes","semaine":20,"debutSemaine":"2026-05-12","etpReferenceMm":32.0425,"besoinMm":12.817},{"culture":"Agrumes","semaine":21,"debutSemaine":"2026-05-19","etpReferenceMm":34.2525,"besoinMm":13.701},{"culture":"Agrumes","semaine":22,"debutSemaine":"2026-05-26","etpReferenceMm":35.91,"besoinMm":14.364},{"culture":"Agrumes","semaine":23,"debutSemaine":"2026-06-02","etpReferenceMm":36.274,"besoinMm":14.5096},{"culture":"Agrumes","semaine":24,"debutSemaine":"2026-06-09","etpReferenceMm":38.298,"besoinMm":15.3192},{"culture":"Agrumes","semaine":25,"debutSemaine":"2026-06-16","etpReferenceMm":40.514,"besoinMm":16.2056},{"culture":"Agrumes","semaine":26,"debutSemaine":"2026-06-23","etpReferenceMm":44.702,"besoinMm":17.8808},{"culture":"Agrumes","semaine":27,"debutSemaine":"2026-06-30","etpReferenceMm":44.297,"besoinMm":17.7188},{"culture":"Agrumes","semaine":28,"debutSemaine":"2026-07-07","etpReferenceMm":44.103,"besoinMm":17.6412},{"culture":"Agrumes","semaine":29,"debutSemaine":"2026-07-14","etpReferenceMm":44.023,"besoinMm":17.6092},{"culture":"Agrumes","semaine":30,"debutSemaine":"2026-07-21","etpReferenceMm":43.178091,"besoinMm":17.271236},{"culture":"Agrumes","semaine":31,"debutSemaine":"2026-07-28","etpReferenceMm":42.781909,"besoinMm":17.112764},{"culture":"Agrumes","semaine":32,"debutSemaine":"2026-08-04","etpReferenceMm":42.1435,"besoinMm":16.8574},{"culture":"Agrumes","semaine":33,"debutSemaine":"2026-08-11","etpReferenceMm":36.3625,"besoinMm":14.545},{"culture":"Agrumes","semaine":34,"debutSemaine":"2026-08-18","etpReferenceMm":34.763,"besoinMm":13.9052},{"culture":"Agrumes","semaine":35,"debutSemaine":"2026-08-25","etpReferenceMm":33.915,"besoinMm":13.566},{"culture":"Agrumes","semaine":36,"debutSemaine":"2026-09-01","etpReferenceMm":29.445,"besoinMm":11.778},{"culture":"Agrumes","semaine":37,"debutSemaine":"2026-09-08","etpReferenceMm":26.987,"besoinMm":10.7948},{"culture":"Agrumes","semaine":38,"debutSemaine":"2026-09-15","etpReferenceMm":24.703,"besoinMm":9.8812},{"culture":"Agrumes","semaine":39,"debutSemaine":"2026-09-22","etpReferenceMm":19.684,"besoinMm":7.8736},{"culture":"KaKi Pomme (Jeune)","semaine":14,"debutSemaine":"2026-03-31","etpReferenceMm":20.320682,"besoinMm":6.096205},{"culture":"KaKi Pomme (Jeune)","semaine":15,"debutSemaine":"2026-04-07","etpReferenceMm":21.9885,"besoinMm":6.59655},{"culture":"KaKi Pomme (Jeune)","semaine":16,"debutSemaine":"2026-04-14","etpReferenceMm":24.101,"besoinMm":7.2303},{"culture":"KaKi Pomme (Jeune)","semaine":17,"debutSemaine":"2026-04-21","etpReferenceMm":25.313,"besoinMm":7.5939},{"culture":"KaKi Pomme (Jeune)","semaine":18,"debutSemaine":"2026-04-28","etpReferenceMm":26.76,"besoinMm":8.028},{"culture":"KaKi Pomme (Jeune)","semaine":19,"debutSemaine":"2026-05-05","etpReferenceMm":28.42,"besoinMm":8.526},{"culture":"KaKi Pomme (Jeune)","semaine":20,"debutSemaine":"2026-05-12","etpReferenceMm":32.0425,"besoinMm":9.61275},{"culture":"KaKi Pomme (Jeune)","semaine":21,"debutSemaine":"2026-05-19","etpReferenceMm":34.2525,"besoinMm":10.27575},{"culture":"KaKi Pomme (Jeune)","semaine":22,"debutSemaine":"2026-05-26","etpReferenceMm":35.91,"besoinMm":10.773},{"culture":"KaKi Pomme (Jeune)","semaine":23,"debutSemaine":"2026-06-02","etpReferenceMm":36.274,"besoinMm":10.8822},{"culture":"KaKi Pomme (Jeune)","semaine":24,"debutSemaine":"2026-06-09","etpReferenceMm":38.298,"besoinMm":11.4894},{"culture":"KaKi Pomme (Jeune)","semaine":25,"debutSemaine":"2026-06-16","etpReferenceMm":40.514,"besoinMm":12.1542},{"culture":"KaKi Pomme (Jeune)","semaine":26,"debutSemaine":"2026-06-23","etpReferenceMm":44.702,"besoinMm":13.4106},{"culture":"KaKi Pomme (Jeune)","semaine":27,"debutSemaine":"2026-06-30","etpReferenceMm":44.297,"besoinMm":13.2891},{"culture":"KaKi Pomme (Jeune)","semaine":28,"debutSemaine":"2026-07-07","etpReferenceMm":44.103,"besoinMm":13.2309},{"culture":"KaKi Pomme (Jeune)","semaine":29,"debutSemaine":"2026-07-14","etpReferenceMm":44.023,"besoinMm":13.2069},{"culture":"KaKi Pomme (Jeune)","semaine":30,"debutSemaine":"2026-07-21","etpReferenceMm":43.178091,"besoinMm":12.953427},{"culture":"KaKi Pomme (Jeune)","semaine":31,"debutSemaine":"2026-07-28","etpReferenceMm":42.781909,"besoinMm":12.834573},{"culture":"KaKi Pomme (Jeune)","semaine":32,"debutSemaine":"2026-08-04","etpReferenceMm":42.1435,"besoinMm":12.64305},{"culture":"KaKi Pomme (Jeune)","semaine":33,"debutSemaine":"2026-08-11","etpReferenceMm":36.3625,"besoinMm":10.90875},{"culture":"KaKi Pomme (Jeune)","semaine":34,"debutSemaine":"2026-08-18","etpReferenceMm":34.763,"besoinMm":10.4289},{"culture":"KaKi Pomme (Jeune)","semaine":35,"debutSemaine":"2026-08-25","etpReferenceMm":33.915,"besoinMm":10.1745},{"culture":"KaKi Pomme (Jeune)","semaine":36,"debutSemaine":"2026-09-01","etpReferenceMm":29.445,"besoinMm":8.8335},{"culture":"KaKi Pomme (Jeune)","semaine":37,"debutSemaine":"2026-09-08","etpReferenceMm":26.987,"besoinMm":8.0961},{"culture":"KaKi Pomme (Jeune)","semaine":38,"debutSemaine":"2026-09-15","etpReferenceMm":24.703,"besoinMm":7.4109},{"culture":"KaKi Pomme (Jeune)","semaine":39,"debutSemaine":"2026-09-22","etpReferenceMm":19.684,"besoinMm":5.9052},{"culture":"Olivier","semaine":14,"debutSemaine":"2026-03-31","etpReferenceMm":20.320682,"besoinMm":11.176375},{"culture":"Olivier","semaine":15,"debutSemaine":"2026-04-07","etpReferenceMm":21.9885,"besoinMm":12.093675},{"culture":"Olivier","semaine":16,"debutSemaine":"2026-04-14","etpReferenceMm":24.101,"besoinMm":13.25555},{"culture":"Olivier","semaine":17,"debutSemaine":"2026-04-21","etpReferenceMm":25.313,"besoinMm":13.92215},{"culture":"Olivier","semaine":18,"debutSemaine":"2026-04-28","etpReferenceMm":26.76,"besoinMm":14.718},{"culture":"Olivier","semaine":19,"debutSemaine":"2026-05-05","etpReferenceMm":28.42,"besoinMm":15.631},{"culture":"Olivier","semaine":20,"debutSemaine":"2026-05-12","etpReferenceMm":32.0425,"besoinMm":17.623375},{"culture":"Olivier","semaine":21,"debutSemaine":"2026-05-19","etpReferenceMm":34.2525,"besoinMm":18.838875},{"culture":"Olivier","semaine":22,"debutSemaine":"2026-05-26","etpReferenceMm":35.91,"besoinMm":19.7505},{"culture":"Olivier","semaine":23,"debutSemaine":"2026-06-02","etpReferenceMm":36.274,"besoinMm":19.9507},{"culture":"Olivier","semaine":24,"debutSemaine":"2026-06-09","etpReferenceMm":38.298,"besoinMm":21.0639},{"culture":"Olivier","semaine":25,"debutSemaine":"2026-06-16","etpReferenceMm":40.514,"besoinMm":22.2827},{"culture":"Olivier","semaine":26,"debutSemaine":"2026-06-23","etpReferenceMm":44.702,"besoinMm":24.5861},{"culture":"Olivier","semaine":27,"debutSemaine":"2026-06-30","etpReferenceMm":44.297,"besoinMm":24.36335},{"culture":"Olivier","semaine":28,"debutSemaine":"2026-07-07","etpReferenceMm":44.103,"besoinMm":24.25665},{"culture":"Olivier","semaine":29,"debutSemaine":"2026-07-14","etpReferenceMm":44.023,"besoinMm":24.21265},{"culture":"Olivier","semaine":30,"debutSemaine":"2026-07-21","etpReferenceMm":43.178091,"besoinMm":23.74795},{"culture":"Olivier","semaine":31,"debutSemaine":"2026-07-28","etpReferenceMm":42.781909,"besoinMm":23.53005},{"culture":"Olivier","semaine":32,"debutSemaine":"2026-08-04","etpReferenceMm":42.1435,"besoinMm":23.178925},{"culture":"Olivier","semaine":33,"debutSemaine":"2026-08-11","etpReferenceMm":36.3625,"besoinMm":19.999375},{"culture":"Olivier","semaine":34,"debutSemaine":"2026-08-18","etpReferenceMm":34.763,"besoinMm":19.11965},{"culture":"Olivier","semaine":35,"debutSemaine":"2026-08-25","etpReferenceMm":33.915,"besoinMm":18.65325},{"culture":"Olivier","semaine":36,"debutSemaine":"2026-09-01","etpReferenceMm":29.445,"besoinMm":16.19475},{"culture":"Olivier","semaine":37,"debutSemaine":"2026-09-08","etpReferenceMm":26.987,"besoinMm":14.84285},{"culture":"Olivier","semaine":38,"debutSemaine":"2026-09-15","etpReferenceMm":24.703,"besoinMm":13.58665},{"culture":"Olivier","semaine":39,"debutSemaine":"2026-09-22","etpReferenceMm":19.684,"besoinMm":10.8262},{"culture":"Vigne","semaine":14,"debutSemaine":"2026-03-31","etpReferenceMm":20.320682,"besoinMm":4.064136},{"culture":"Vigne","semaine":15,"debutSemaine":"2026-04-07","etpReferenceMm":21.9885,"besoinMm":4.3977},{"culture":"Vigne","semaine":16,"debutSemaine":"2026-04-14","etpReferenceMm":24.101,"besoinMm":6.02525},{"culture":"Vigne","semaine":17,"debutSemaine":"2026-04-21","etpReferenceMm":25.313,"besoinMm":7.5939},{"culture":"Vigne","semaine":18,"debutSemaine":"2026-04-28","etpReferenceMm":26.76,"besoinMm":8.028},{"culture":"Vigne","semaine":19,"debutSemaine":"2026-05-05","etpReferenceMm":28.42,"besoinMm":11.368},{"culture":"Vigne","semaine":20,"debutSemaine":"2026-05-12","etpReferenceMm":32.0425,"besoinMm":12.817},{"culture":"Vigne","semaine":21,"debutSemaine":"2026-05-19","etpReferenceMm":34.2525,"besoinMm":17.12625},{"culture":"Vigne","semaine":22,"debutSemaine":"2026-05-26","etpReferenceMm":35.91,"besoinMm":17.955},{"culture":"Vigne","semaine":23,"debutSemaine":"2026-06-02","etpReferenceMm":36.274,"besoinMm":21.7644},{"culture":"Vigne","semaine":24,"debutSemaine":"2026-06-09","etpReferenceMm":38.298,"besoinMm":22.9788},{"culture":"Vigne","semaine":25,"debutSemaine":"2026-06-16","etpReferenceMm":40.514,"besoinMm":24.3084},{"culture":"Vigne","semaine":26,"debutSemaine":"2026-06-23","etpReferenceMm":44.702,"besoinMm":29.0563},{"culture":"Vigne","semaine":27,"debutSemaine":"2026-06-30","etpReferenceMm":44.297,"besoinMm":28.79305},{"culture":"Vigne","semaine":28,"debutSemaine":"2026-07-07","etpReferenceMm":44.103,"besoinMm":28.66695},{"culture":"Vigne","semaine":29,"debutSemaine":"2026-07-14","etpReferenceMm":44.023,"besoinMm":28.61495},{"culture":"Vigne","semaine":30,"debutSemaine":"2026-07-21","etpReferenceMm":43.178091,"besoinMm":28.065759},{"culture":"Vigne","semaine":31,"debutSemaine":"2026-07-28","etpReferenceMm":42.781909,"besoinMm":25.669145},{"culture":"Vigne","semaine":32,"debutSemaine":"2026-08-04","etpReferenceMm":42.1435,"besoinMm":25.2861},{"culture":"Vigne","semaine":33,"debutSemaine":"2026-08-11","etpReferenceMm":36.3625,"besoinMm":21.8175},{"culture":"Vigne","semaine":34,"debutSemaine":"2026-08-18","etpReferenceMm":34.763,"besoinMm":19.11965},{"culture":"Vigne","semaine":35,"debutSemaine":"2026-08-25","etpReferenceMm":33.915,"besoinMm":16.9575},{"culture":"Vigne","semaine":36,"debutSemaine":"2026-09-01","etpReferenceMm":29.445,"besoinMm":14.7225},{"culture":"Vigne","semaine":37,"debutSemaine":"2026-09-08","etpReferenceMm":26.987,"besoinMm":12.14415},{"culture":"Vigne","semaine":38,"debutSemaine":"2026-09-15","etpReferenceMm":24.703,"besoinMm":9.8812},{"culture":"Vigne","semaine":39,"debutSemaine":"2026-09-22","etpReferenceMm":19.684,"besoinMm":7.8736}];
const BLOCK_CULTURE_FALLBACK = [{"ilot":"1","bloc":"1 V1 AB long","poste":"1 V1 AB Long","culture":"Abricotier adulte tardif","systeme":"Rondo jet","couleurBuse":"Rouge","debitUnitaire":70,"maille":15,"nbTotal":72,"surface":1080,"debit":5.04,"pluviometrie":4.666666666666667},{"ilot":"1","bloc":"1 V2 AB Court","poste":"1 V2 AB Court","culture":"Abricotier adulte tardif","systeme":"Rondo jet","couleurBuse":"Rouge","debitUnitaire":70,"maille":15,"nbTotal":90,"surface":1350,"debit":6.3,"pluviometrie":4.666666666666667},{"ilot":"1","bloc":"1 V3 PFI Court / Eco","poste":"1 V3 PFI Court / Eco","culture":"Abricotier adulte tardif","systeme":"Rondo jet","couleurBuse":"Rouge","debitUnitaire":70,"maille":12.5,"nbTotal":105,"surface":1312.5,"debit":7.35,"pluviometrie":5.6},{"ilot":"1","bloc":"1 V4 PFI Long","poste":"1 V4 PFI Long","culture":"Abricotier adulte tardif","systeme":"Rondo jet","couleurBuse":"Rouge","debitUnitaire":70,"maille":21,"nbTotal":60,"surface":1260,"debit":4.2,"pluviometrie":3.3333333333333335},{"ilot":"2","bloc":"2 V1 Cerise Abricot VIEUX","poste":"2 V1 V.Public Vieux","culture":"Cerisier adulte Maxma et SL","systeme":"Supernet","couleurBuse":"Noir","debitUnitaire":70,"maille":24,"nbTotal":120,"surface":2880,"debit":8.4,"pluviometrie":2.9166666666666665},{"ilot":"2","bloc":"2 V2 Kaki Pomme","poste":"2 V2 Kaki-Pomme","culture":"KaKi Pomme (Jeune)","systeme":"Supernet","couleurBuse":"Noir","debitUnitaire":70,"maille":15,"nbTotal":20,"surface":300,"debit":1.4,"pluviometrie":4.666666666666667},{"ilot":"2","bloc":"2 V3 Agrumes","poste":"2 V3 Agrumes","culture":"1ère et 2ème feuilles toute espèces","systeme":"Supernet","couleurBuse":"Noir","debitUnitaire":70,"maille":15,"nbTotal":60,"surface":900,"debit":4.2,"pluviometrie":4.666666666666667},{"ilot":"2","bloc":"2 V4 Abricotier","poste":"2 V4 Abricot","culture":"1ère et 2ème feuilles toute espèces","systeme":"Supernet","couleurBuse":"Noir","debitUnitaire":70,"maille":15,"nbTotal":80,"surface":1200,"debit":5.6,"pluviometrie":4.666666666666667},{"ilot":"2","bloc":"2 V5 Cerise","poste":"2 V5 Cerise","culture":"1ère et 2ème feuilles toute espèces","systeme":"Supernet","couleurBuse":"Noir","debitUnitaire":70,"maille":15,"nbTotal":40,"surface":600,"debit":2.8,"pluviometrie":4.666666666666667},{"ilot":"3","bloc":"3 V1 Taille 1","poste":"3 V1 Taille 1","culture":"Olivier","systeme":"Rondo jet","couleurBuse":"Verte","debitUnitaire":64,"maille":36,"nbTotal":90,"surface":3240,"debit":5.76,"pluviometrie":1.78},{"ilot":"3","bloc":"3 V2 Taille 2","poste":"3 V2 Taille 2","culture":"Olivier","systeme":"Rondo jet","couleurBuse":"Verte","debitUnitaire":64,"maille":36,"nbTotal":75,"surface":2700,"debit":4.8,"pluviometrie":1.78},{"ilot":"3","bloc":"3 V3 Irri-ferti - A","poste":"3 V3 Irri-Ferti A","culture":"Olivier","systeme":"Rondo jet","couleurBuse":"Verte","debitUnitaire":64,"maille":36,"nbTotal":60,"surface":2160,"debit":3.84,"pluviometrie":1.78},{"ilot":"3","bloc":"3 V3 Irri-ferti - B","poste":"3 V3 Irri-Ferti B","culture":"Olivier","systeme":"Rondo jet","couleurBuse":"Verte","debitUnitaire":64,"maille":36,"nbTotal":60,"surface":2160,"debit":3.84,"pluviometrie":1.78},{"ilot":"3","bloc":"3 V3 Irri-ferti - C","poste":"3 V3 Irri-Ferti C","culture":"Olivier","systeme":"Rondo jet","couleurBuse":"Verte","debitUnitaire":64,"maille":36,"nbTotal":60,"surface":2160,"debit":3.84,"pluviometrie":1.78},{"ilot":"3","bloc":"3 V3 Irri-ferti - D","poste":"3 V3 Irri-Ferti D","culture":"Olivier","systeme":"Rondo jet","couleurBuse":"Verte","debitUnitaire":64,"maille":36,"nbTotal":60,"surface":2160,"debit":3.84,"pluviometrie":1.78},{"ilot":"3","bloc":"3 V4 Bio","poste":"3 V4 Bio","culture":"Olivier","systeme":"Rondo jet","couleurBuse":"Rouge","debitUnitaire":70,"maille":36,"nbTotal":90,"surface":3240,"debit":6.3,"pluviometrie":1.94},{"ilot":"5","bloc":"5 V1 Vigne Rés .Séch 2021+23 (1 à 27)","poste":"5 V1 Vigne Rés.Séch.2021+23","culture":"Vigne","systeme":"Goutte à goutte","couleurBuse":"/","debitUnitaire":1.6,"maille":2.5,"nbTotal":2430,"surface":5468,"debit":3.89,"pluviometrie":0.64},{"ilot":"5","bloc":"5 V2 Vigne 2021+23 (49 à 69)","poste":"5 V2 Vigne 2021+23","culture":"Vigne","systeme":"Goutte à goutte","couleurBuse":"/","debitUnitaire":1.6,"maille":2.5,"nbTotal":2430,"surface":4253,"debit":3.02,"pluviometrie":0.64},{"ilot":"5","bloc":"5 V3 Vigne 2017 VCR (71 à 79)","poste":"5 V3 Vigne 2017 VCR","culture":"Vigne","systeme":"Goutte à goutte","couleurBuse":"/","debitUnitaire":1.6,"maille":2.5,"nbTotal":998,"surface":2633,"debit":1.6,"pluviometrie":0.64},{"ilot":"6","bloc":"6 V1 Nectarnovala 22-23","poste":"6 V1 Nectarnovala","culture":"1ère et 2ème feuilles toute espèces","systeme":"Rondo","couleurBuse":"Rouge","debitUnitaire":70,"maille":12,"nbTotal":182,"surface":2184,"debit":12.74,"pluviometrie":5.833333333333333},{"ilot":"7","bloc":"7 V1 Cerise","poste":"7 V1 Cerise","culture":"Cerisier adulte Maxma et SL","systeme":"L 20","couleurBuse":"Blanche","debitUnitaire":330,"maille":96,"nbTotal":18,"surface":3360,"debit":5.94,"pluviometrie":3.4375},{"ilot":"7","bloc":"7 V3 Pêches BIO 2023","poste":"7 V3 Peche BIO 2023","culture":"Pêcher adulte tardif","systeme":"Rondo","couleurBuse":"Rouge","debitUnitaire":70,"maille":15,"nbTotal":270,"surface":4050,"debit":18.9,"pluviometrie":4.666666666666667},{"ilot":"7","bloc":"7 V4 Pavie gobelet","poste":"7 V4 Pavie Gobelet","culture":"Pêcher adulte tardif","systeme":"Rondo","couleurBuse":"Rouge","debitUnitaire":70,"maille":15,"nbTotal":189,"surface":2835,"debit":13.23,"pluviometrie":4.666666666666667},{"ilot":"7","bloc":"7 V5 Pavie Simple Y","poste":"7 V5 Pavie Simple Y","culture":"Pêcher adulte tardif","systeme":"Rondo","couleurBuse":"Rouge","debitUnitaire":70,"maille":15.3,"nbTotal":48,"surface":734.4000000000001,"debit":3.36,"pluviometrie":4.57516339869281},{"ilot":"7","bloc":"7 V6 Pavie Tatura","poste":"7 V6 Pavies Tatura","culture":"Pêcher adulte tardif","systeme":"Rondo","couleurBuse":"Rouge","debitUnitaire":70,"maille":13.5,"nbTotal":72,"surface":972,"debit":5.04,"pluviometrie":5.185185185185185},{"ilot":"8","bloc":"8 V1 Haie Coraline","poste":"8 V1 Coraline Haie","culture":"Pêcher adulte précoce","systeme":"Tornado","couleurBuse":"Verte","debitUnitaire":55,"maille":12,"nbTotal":76,"surface":912,"debit":4.18,"pluviometrie":4.583333333333333},{"ilot":"8","bloc":"8 V2 Témoin Coraline","poste":"8 V2 Coraline Témoin","culture":"Pêcher adulte précoce","systeme":"Tornado","couleurBuse":"Verte","debitUnitaire":55,"maille":18,"nbTotal":28,"surface":504,"debit":1.54,"pluviometrie":3.0555555555555554},{"ilot":"8","bloc":"8 V3 Abricot","poste":"8 V3 Abricot","culture":"Abricotier adulte tardif","systeme":"Rondo jet","couleurBuse":"Rouge","debitUnitaire":70,"maille":24,"nbTotal":142,"surface":3408,"debit":9.94,"pluviometrie":2.9166666666666665},{"ilot":"9","bloc":"9 V1 Pêche plate 2026","poste":"9 V1 Pêches plates 2026","culture":"1ère et 2ème feuilles toute espèces","systeme":"Supernet","couleurBuse":"Noir","debitUnitaire":70,"maille":18,"nbTotal":48,"surface":864,"debit":3.36,"pluviometrie":3.888888888888889},{"ilot":"9","bloc":"9 V2 Pêche Boréal","poste":"9 V2 Pêche Boréal","culture":"Pêcher adulte précoce","systeme":"Rondo","couleurBuse":"Rouge","debitUnitaire":70,"maille":24,"nbTotal":80,"surface":1920,"debit":5.6,"pluviometrie":2.9166666666666665},{"ilot":"9","bloc":"9 V3 Pêche Orine","poste":"9 V3 Pêche Orine","culture":"Pêcher adulte tardif","systeme":"Supernet","couleurBuse":"Noir","debitUnitaire":70,"maille":18,"nbTotal":108,"surface":1944,"debit":7.56,"pluviometrie":3.888888888888889},{"ilot":"9","bloc":"9 V5 Abricot Nelson","poste":"9 V5 Abricot Nelson","culture":"Abricotier adulte tardif","systeme":"Rondo","couleurBuse":"Rouge","debitUnitaire":70,"maille":24,"nbTotal":64,"surface":1536,"debit":4.48,"pluviometrie":2.9166666666666665},{"ilot":"9","bloc":"9 V6 Pavies Gobelets","poste":"9 V6 Pavies Gobelets","culture":"Pêcher adulte tardif","systeme":"Rondo","couleurBuse":"Rouge","debitUnitaire":70,"maille":17.5,"nbTotal":176,"surface":3080,"debit":12.32,"pluviometrie":4},{"ilot":"9","bloc":"9 V7 Pavies Haies","poste":"9 V7 Pavies Haies","culture":"Pêcher adulte tardif","systeme":"Rondo","couleurBuse":"Rouge","debitUnitaire":70,"maille":13.6,"nbTotal":141,"surface":1917.6,"debit":9.87,"pluviometrie":5.147058823529412},{"ilot":"10","bloc":"10 V1 COPERNIC Bi-axe","poste":"10 V1 COPERNIC Bi-axe","culture":"1ère et 2ème feuilles toute espèces","systeme":"G à G","couleurBuse":"/","debitUnitaire":2,"maille":0.875,"nbTotal":1872,"surface":1638,"debit":3.744,"pluviometrie":2.2857142857142856},{"ilot":"10","bloc":"10 V2 COPERNIC Gob. Apl","poste":"10 V2 COPERNIC Gob. Apl","culture":"1ère et 2ème feuilles toute espèces","systeme":"G à G","couleurBuse":"/","debitUnitaire":2,"maille":1,"nbTotal":1944,"surface":1944,"debit":3.888,"pluviometrie":2},{"ilot":"10","bloc":"10 V3 COPERNIC Réf","poste":"10 V3 COPERERNIC Réf","culture":"1ère et 2ème feuilles toute espèces","systeme":"G à G","couleurBuse":"/","debitUnitaire":2,"maille":1.5,"nbTotal":672,"surface":1008,"debit":1.344,"pluviometrie":1.3333333333333333},{"ilot":"10","bloc":"10 V4 COPERNIC LowCost","poste":null,"culture":"1ère et 2ème feuilles toute espèces","systeme":"G à G","couleurBuse":"/","debitUnitaire":2,"maille":0.875,"nbTotal":416,"surface":364,"debit":0.832,"pluviometrie":2.2857142857142856},{"ilot":"11","bloc":"11 V1-A PG Pêche Réf","poste":"11 V1-A PG Pêche Réf","culture":"1ère et 2ème feuilles toute espèces","systeme":"Supernet","couleurBuse":"Noir","debitUnitaire":70,"maille":18,"nbTotal":24,"surface":432,"debit":1.68,"pluviometrie":3.888888888888889},{"ilot":"11","bloc":"11 V1-B PG Pêche -30%","poste":"11 V1-B PG Pêche -30%","culture":"1ère et 2ème feuilles toute espèces","systeme":"Supernet","couleurBuse":"Noir","debitUnitaire":70,"maille":18,"nbTotal":96,"surface":1728,"debit":6.72,"pluviometrie":3.888888888888889},{"ilot":"11","bloc":"11 V1-C PG Pêche -50%","poste":"11 V1-C Pêche -50%","culture":"1ère et 2ème feuilles toute espèces","systeme":"Supernet","couleurBuse":"Noir","debitUnitaire":70,"maille":12,"nbTotal":52,"surface":624,"debit":3.64,"pluviometrie":5.833333333333333},{"ilot":"11","bloc":"11 V2-A PG Abricot -30%","poste":"11 V2-A PG Abricot -30%","culture":"1ère et 2ème feuilles toute espèces","systeme":"Supernet","couleurBuse":"Noir","debitUnitaire":70,"maille":24,"nbTotal":100,"surface":2400,"debit":7,"pluviometrie":2.9166666666666665},{"ilot":"11","bloc":"11 V2-B PG Abricot Réf","poste":"11 V2-B PG Abricot Réf","culture":"1ère et 2ème feuilles toute espèces","systeme":"Supernet","couleurBuse":"Noir","debitUnitaire":70,"maille":24,"nbTotal":20,"surface":480,"debit":1.4,"pluviometrie":2.9166666666666665},{"ilot":"11","bloc":"11 V3 Abricot 2014","poste":"11 V3 Abricot 2014","culture":"Abricotier adulte tardif","systeme":"Rondo jet","couleurBuse":"Rouge","debitUnitaire":70,"maille":24,"nbTotal":58,"surface":1392,"debit":4.06,"pluviometrie":2.9166666666666665},{"ilot":"11","bloc":"11 V4 Abricot CAPReD PFI","poste":"11 V4 CAPReD PFI","culture":"Abricotier adulte saison","systeme":"Rondo jet","couleurBuse":"Rouge","debitUnitaire":70,"maille":21,"nbTotal":83,"surface":1743,"debit":5.81,"pluviometrie":3.3333333333333335},{"ilot":"11","bloc":"11 V5 Abricot CAPReD Eco","poste":"11 V5 CAPReD ECO","culture":"Abricotier adulte saison","systeme":"Rondo jet","couleurBuse":"Rouge","debitUnitaire":70,"maille":15,"nbTotal":121,"surface":1815,"debit":8.47,"pluviometrie":4.666666666666667},{"ilot":"11","bloc":"11 V6 Pêche BI 2025+26","poste":"11 V6 Pêche BI 2025","culture":"1ère et 2ème feuilles toute espèces","systeme":"Rondo jet","couleurBuse":"Rouge","debitUnitaire":70,"maille":15,"nbTotal":330,"surface":4950,"debit":23.1,"pluviometrie":4.666666666666667},{"ilot":"12","bloc":"12 V1-A Clém. Confort","poste":"12 V1-A Clém Confort","culture":"Grenades","systeme":"Supernet","couleurBuse":"Bleu","debitUnitaire":40,"maille":15,"nbTotal":48,"surface":720,"debit":1.92,"pluviometrie":2.6666666666666665},{"ilot":"12","bloc":"12 V1-B Clém. Bâche","poste":"12 V1-B Clém Bâche","culture":"Grenades","systeme":"Supernet","couleurBuse":"Bleu","debitUnitaire":40,"maille":15,"nbTotal":48,"surface":720,"debit":1.92,"pluviometrie":2.6666666666666665},{"ilot":"12","bloc":"12 V1-C Clém. Piloté","poste":"12 V1-C Clém Piloté","culture":"Grenades","systeme":"Supernet","couleurBuse":"Bleu","debitUnitaire":40,"maille":15,"nbTotal":48,"surface":720,"debit":1.92,"pluviometrie":2.6666666666666665},{"ilot":"12","bloc":"12 V2 Agrumes 2026","poste":"12 V2 Agrumes 2026","culture":"Grenades","systeme":"Supernet","couleurBuse":"Noir","debitUnitaire":40,"maille":15,"nbTotal":107,"surface":1605,"debit":4.28,"pluviometrie":2.6666666666666665},{"ilot":"12","bloc":"12 V3 Citrons 2026","poste":"12 V3 Citrons 2026","culture":"Grenades","systeme":"Supernet","couleurBuse":"Noir","debitUnitaire":40,"maille":15,"nbTotal":20,"surface":300,"debit":0.8,"pluviometrie":2.6666666666666665},{"ilot":"13","bloc":"13 V1 Cerise","poste":"13 V1 Cerise 19","culture":"Cerisier adulte Maxma et SL","systeme":"Rondo jet","couleurBuse":"Rouge","debitUnitaire":70,"maille":24,"nbTotal":168,"surface":4032,"debit":11.76,"pluviometrie":2.9166666666666665},{"ilot":"13","bloc":"13 V2 Pêche Najentina","poste":"13 V2 Pêche Najentina","culture":"1ère et 2ème feuilles toute espèces","systeme":"Rondo jet","couleurBuse":"Rouge","debitUnitaire":70,"maille":18,"nbTotal":112,"surface":2016,"debit":7.84,"pluviometrie":3.888888888888889},{"ilot":"13","bloc":"13 V3 Pêche Najiris","poste":"13 V3 Pêche Najiris","culture":"1ère et 2ème feuilles toute espèces","systeme":"Rondo jet","couleurBuse":"Rouge","debitUnitaire":70,"maille":12,"nbTotal":108,"surface":1296,"debit":7.56,"pluviometrie":5.833333333333333},{"ilot":"13","bloc":"13 V4 Pêche Moncante","poste":"13 V4 Pêche Moncante","culture":"Pêcher adulte saison","systeme":"Rondo jet","couleurBuse":"Rouge","debitUnitaire":70,"maille":18,"nbTotal":112,"surface":2016,"debit":7.84,"pluviometrie":3.888888888888889},{"ilot":"13","bloc":"13 V5 Pêche Pabina","poste":"13 V5 Pêche Pabina","culture":"Pêcher adulte saison","systeme":"Rondo jet","couleurBuse":"Rouge","debitUnitaire":70,"maille":12,"nbTotal":108,"surface":1296,"debit":7.56,"pluviometrie":5.833333333333333},{"ilot":"13","bloc":"13 V6 Pêche Bellamine","poste":"13 V6 Pêche Bellamine","culture":"Pêcher adulte tardif","systeme":"Rondo jet","couleurBuse":"Rouge","debitUnitaire":70,"maille":18,"nbTotal":112,"surface":2016,"debit":7.84,"pluviometrie":3.888888888888889},{"ilot":"13","bloc":"13 V7 Pêche 12-13","poste":"13 V7 Pêche 12-13","culture":"Pêcher adulte saison","systeme":"Rondo jet","couleurBuse":"Rouge","debitUnitaire":70,"maille":24,"nbTotal":89,"surface":2136,"debit":6.23,"pluviometrie":2.9166666666666665},{"ilot":"15","bloc":"15 V1 Abricot Perlecot","poste":"15 V1 Abricot Perlecot","culture":"Abricotier adulte précoce","systeme":"Rondo jet","couleurBuse":"Rouge","debitUnitaire":70,"maille":24,"nbTotal":87,"surface":2088,"debit":6.09,"pluviometrie":2.9166666666666665},{"ilot":"15","bloc":"15 V1 Abricot Vanilla","poste":"15 V1 Abricot Vanilla","culture":"Abricotier adulte saison","systeme":"Rondo jet","couleurBuse":"Rouge","debitUnitaire":70,"maille":24,"nbTotal":65,"surface":1560,"debit":4.55,"pluviometrie":2.9166666666666665},{"ilot":"15","bloc":"15 V2 Pêche WRed","poste":"15 V2 Pêche Wred","culture":"Pêcher adulte tardif","systeme":"Rondo jet","couleurBuse":"Rouge","debitUnitaire":70,"maille":18,"nbTotal":91,"surface":1638,"debit":6.37,"pluviometrie":3.888888888888889},{"ilot":"15","bloc":"15 V3 Pêche Nabyr/Pajurite","poste":"15 V3 Pêche Nabyr/Pajurite","culture":"Pêcher adulte tardif","systeme":"G à G","couleurBuse":"/","debitUnitaire":1.6,"maille":2.25,"nbTotal":832,"surface":1872,"debit":1.3312,"pluviometrie":0.7111111111111111},{"ilot":"15","bloc":"15 V4 Pêche SweetReine","poste":"15 V4 Pêche SweetReine","culture":"Pêcher adulte tardif","systeme":"Rondo jet","couleurBuse":"Rouge","debitUnitaire":70,"maille":18,"nbTotal":91,"surface":1638,"debit":6.37,"pluviometrie":3.888888888888889},{"ilot":"16","bloc":"16 V1 Pêche Nectatop","poste":"16 V1 Pêche Nectatop","culture":"Pêcher adulte tardif","systeme":"Rondo jet","couleurBuse":"Rouge","debitUnitaire":70,"maille":18,"nbTotal":108,"surface":1944,"debit":7.56,"pluviometrie":3.888888888888889},{"ilot":"16","bloc":"16 V1 Pêche SweetLove","poste":"16 V1 Pêche Sweetlove","culture":"Pêcher adulte tardif","systeme":"Rondo jet","couleurBuse":"Rouge","debitUnitaire":70,"maille":18,"nbTotal":108,"surface":1944,"debit":7.56,"pluviometrie":3.888888888888889},{"ilot":"16","bloc":"16 V2 Abricot 2015","poste":"16 V2 Abricot 2015","culture":"Abricotier adulte tardif","systeme":"Rondo jet","couleurBuse":"Rouge","debitUnitaire":70,"maille":24,"nbTotal":60,"surface":1440,"debit":4.2,"pluviometrie":2.9166666666666665},{"ilot":"16","bloc":"16 V3 Abricots BI 2021","poste":"16 V3 Abricots BI 2021","culture":"Abricotier adulte tardif","systeme":"Rondo jet","couleurBuse":"Rouge","debitUnitaire":70,"maille":21,"nbTotal":121,"surface":2541,"debit":8.47,"pluviometrie":3.3333333333333335},{"ilot":"17","bloc":"17 V1 Abricot PG","poste":"17 V1 Abricot PG","culture":"Abricotier adulte tardif","systeme":"Rondo jet","couleurBuse":"Rouge","debitUnitaire":70,"maille":21,"nbTotal":136,"surface":2856,"debit":9.52,"pluviometrie":3.3333333333333335},{"ilot":"17","bloc":"17 V2 Pêche Mica","poste":"17 V2 Pêche Mica","culture":"Pêcher adulte précoce","systeme":"Tornado","couleurBuse":"Verte","debitUnitaire":55,"maille":18,"nbTotal":27,"surface":486,"debit":1.485,"pluviometrie":3.0555555555555554},{"ilot":"17","bloc":"17 V3 Cristal PG","poste":"17 V3 Cristal PG","culture":"Pêcher adulte précoce","systeme":"Tornado","couleurBuse":"Verte","debitUnitaire":55,"maille":18,"nbTotal":81,"surface":1458,"debit":4.455,"pluviometrie":3.0555555555555554},{"ilot":"17","bloc":"17 V4 Abricot BioAg 20+24","poste":"17 V4 Abricot BioAg 20+24","culture":"1ère et 2ème feuilles toute espèces","systeme":"Rondo jet","couleurBuse":"Rouge","debitUnitaire":70,"maille":12.5,"nbTotal":180,"surface":2250,"debit":12.6,"pluviometrie":5.6},{"ilot":"17","bloc":"17 V5 Pêche BioAg 20+23","poste":"17 V5 Pêche BioAg 20+23","culture":"1ère et 2ème feuilles toute espèces","systeme":"Rondo jet","couleurBuse":"Rouge","debitUnitaire":70,"maille":12,"nbTotal":81,"surface":972,"debit":5.67,"pluviometrie":5.833333333333333},{"ilot":"18","bloc":"18 V1 BI Abricot 23+24","poste":"18 V1 Abricot BI 23+24","culture":"Abricotier adulte tardif","systeme":"Rondo","couleurBuse":"Rouge","debitUnitaire":70,"maille":24,"nbTotal":100,"surface":2400,"debit":7,"pluviometrie":2.9166666666666665},{"ilot":"18","bloc":"18 V2 BI Abricot 2025","poste":"18 V2 Abricot BI 2025","culture":"1ère et 2ème feuilles toute espèces","systeme":"Rondo","couleurBuse":"Rouge","debitUnitaire":70,"maille":24,"nbTotal":65,"surface":1560,"debit":4.55,"pluviometrie":2.9166666666666665},{"ilot":"18","bloc":"18 V3 BI Pêches 23+24","poste":"18 V3 Peche BI 23+24","culture":"Pêcher adulte tardif","systeme":"Rondo","couleurBuse":"Rouge","debitUnitaire":70,"maille":12.5,"nbTotal":205,"surface":2562.5,"debit":14.35,"pluviometrie":5.6},{"ilot":"18","bloc":"18 V4 BI Pêches 2021","poste":"18 V4 Peche BI 2021","culture":"Pêcher adulte tardif","systeme":"Rondo","couleurBuse":"Rouge","debitUnitaire":70,"maille":12.5,"nbTotal":180,"surface":2250,"debit":12.6,"pluviometrie":5.6},{"ilot":"19","bloc":"19 V2 ECOPHYTO","poste":"19 V2 Ecophyto","culture":"Pêcher adulte saison","systeme":"G à G","couleurBuse":"/","debitUnitaire":1.6,"maille":1.875,"nbTotal":1090,"surface":2043.75,"debit":1.744,"pluviometrie":0.8533333333333334},{"ilot":"19","bloc":"19 V3 PFI","poste":"19 V3 PFI","culture":"Pêcher adulte saison","systeme":"Rondo","couleurBuse":"Rouge","debitUnitaire":70,"maille":18,"nbTotal":108,"surface":1944,"debit":7.56,"pluviometrie":3.888888888888889},{"ilot":"19","bloc":"19 V5 Abricot 2026","poste":"19 V5 Abricot 2026","culture":"1ère et 2ème feuilles (majoré) toute espèce","systeme":"Supernet","couleurBuse":"Noir","debitUnitaire":70,"maille":24,"nbTotal":94,"surface":2256,"debit":6.58,"pluviometrie":2.9166666666666665},{"ilot":"19","bloc":"19 V1 Olivier PFI","poste":"19 V1 Olive PFI","culture":"Olivier","systeme":"Rondo jet","couleurBuse":"Rouge","debitUnitaire":70,"maille":36,"nbTotal":40,"surface":1440,"debit":2.8,"pluviometrie":1.94},{"ilot":"19","bloc":"19 V4 Olivier Bio","poste":"19 V4 Olive Bio","culture":"Olivier","systeme":"Rondo jet","couleurBuse":"Rouge","debitUnitaire":70,"maille":36,"nbTotal":40,"surface":1440,"debit":2.8,"pluviometrie":1.94},{"ilot":"20","bloc":"20 V1 BI Pêche","poste":"20 V1 BI Pêche","culture":"Pêcher adulte tardif","systeme":"Rondo jet","couleurBuse":"Rouge","debitUnitaire":70,"maille":12.5,"nbTotal":100,"surface":1250,"debit":7,"pluviometrie":5.6},{"ilot":"20","bloc":"20 V2 BioAg Pêche","poste":"20 V2 BioAg Pêche","culture":"Pêcher adulte précoce","systeme":"Rondo jet","couleurBuse":"Rouge","debitUnitaire":70,"maille":12,"nbTotal":72,"surface":864,"debit":5.04,"pluviometrie":5.833333333333333},{"ilot":"20","bloc":"20 V3 BioAg Abricot","poste":"20 V3 BioAg Abricot","culture":"Abricotier adulte précoce","systeme":"Rondo jet","couleurBuse":"Rouge","debitUnitaire":70,"maille":12.5,"nbTotal":126,"surface":1575,"debit":8.82,"pluviometrie":5.6},{"ilot":"20","bloc":"20 V4 BI Abricot","poste":"20 V4 BI Abricot","culture":"Abricotier adulte tardif","systeme":"Rondo jet","couleurBuse":"Rouge","debitUnitaire":70,"maille":21,"nbTotal":120,"surface":2520,"debit":8.4,"pluviometrie":3.3333333333333335},{"ilot":"20","bloc":"20 V5 PG Abricot","poste":"20 V5 PG Abricot","culture":"Abricotier adulte tardif","systeme":"Rondo jet","couleurBuse":"Rouge","debitUnitaire":70,"maille":21,"nbTotal":73,"surface":1533,"debit":5.11,"pluviometrie":3.3333333333333335},{"ilot":"21","bloc":"21  V1  Abricot","poste":"21 V1 Abricot","culture":"Abricotier adulte précoce","systeme":"Rondo jet","couleurBuse":"Rouge","debitUnitaire":70,"maille":24,"nbTotal":27,"surface":648,"debit":1.89,"pluviometrie":2.9166666666666665},{"ilot":"21","bloc":"21 V1 Cerise","poste":"21 V1 Cerise","culture":"Cerisier adulte Maxma et SL","systeme":"Rondo jet","couleurBuse":"Rouge","debitUnitaire":70,"maille":24,"nbTotal":59,"surface":1416,"debit":4.13,"pluviometrie":2.9166666666666665}];

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
  cropNeeds: CROP_NEEDS_FALLBACK.slice(),
  blockCorrespondences: BLOCK_CULTURE_FALLBACK.slice(),
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

function addDaysToDateString(dateString, days) {
  if (!dateString) return "";
  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  date.setDate(date.getDate() + days);
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function getRepeatPlan(calculation) {
  const enabled = Boolean(
    calculation?.post?.type === "P" &&
    !editingIrrigationId &&
    $("repeatIrrigation").checked
  );
  if (!enabled) return { enabled: false, dates: calculation?.date ? [calculation.date] : [] };

  const intervalDays = Math.max(1, Number($("repeatFrequency").value) || 1);
  const endDate = $("repeatEndDate").value;
  if (!calculation.date || !endDate || endDate < calculation.date) {
    return { enabled: true, intervalDays, endDate, dates: [] };
  }

  const dates = [];
  for (let date = calculation.date, guard = 0; date <= endDate && guard < 366; date = addDaysToDateString(date, intervalDays), guard += 1) {
    dates.push(date);
  }
  return { enabled: true, intervalDays, endDate, dates };
}

function updateRepeatControls() {
  const post = getSelectedPost();
  const canRepeat = Boolean(post?.type === "P" && !editingIrrigationId);
  const card = $("repeatIrrigationCard");
  card.classList.toggle("hidden", !canRepeat);

  if (!canRepeat) {
    $("repeatIrrigation").checked = false;
    $("repeatOptions").classList.add("hidden");
    return;
  }

  const checked = $("repeatIrrigation").checked;
  $("repeatOptions").classList.toggle("hidden", !checked);
  $("repeatEndDate").min = $("irrigationDate").value || currentLocalDateTime().date;
  if (checked && !$("repeatEndDate").value) {
    $("repeatEndDate").value = addDaysToDateString($("irrigationDate").value || currentLocalDateTime().date, 6);
  }
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


function formatDateLabel(dateString) {
  if (!dateString) return "—";
  const parsed = new Date(`${dateString}T12:00:00`);
  if (Number.isNaN(parsed.getTime())) return "—";
  return new Intl.DateTimeFormat("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" }).format(parsed);
}

function getTuesdayWeekStart(dateString) {
  if (!dateString) return "";
  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, day, 12, 0, 0);
  if (Number.isNaN(date.getTime())) return "";
  const daysSinceTuesday = (date.getDay() + 5) % 7;
  date.setDate(date.getDate() - daysSinceTuesday);
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function getPostCorrespondence(post) {
  if (!post) return null;
  return state.blockCorrespondences.find((item) => item.poste === post.poste) || null;
}

function getCropNeed(post, dateString) {
  const correspondence = getPostCorrespondence(post);
  if (!correspondence?.culture || !dateString) return null;
  const weekStart = getTuesdayWeekStart(dateString);
  const need = state.cropNeeds.find((item) =>
    item.culture === correspondence.culture && item.debutSemaine === weekStart
  ) || null;
  if (!need) return { correspondence, weekStart, weekEnd: addDaysToDateString(weekStart, 6), need: null };
  const volume = post.surface > 0 ? (need.besoinMm * post.surface) / 1000 : 0;
  const durationMinutes = post.debit > 0 ? Math.round((volume / post.debit) * 60) : 0;
  return {
    correspondence,
    weekStart,
    weekEnd: addDaysToDateString(weekStart, 6),
    need,
    volume,
    durationMinutes
  };
}

function updateCultureNeedCard() {
  const card = $("cultureNeedCard");
  if (!card) return;
  const post = getSelectedPost();
  const date = $("irrigationDate").value || currentLocalDateTime().date;

  if (!post) {
    card.classList.add("muted");
    card.innerHTML = "Sélectionnez un poste pour afficher le besoin d'irrigation de la semaine.";
    return;
  }

  const crop = getCropNeed(post, date);
  if (!crop?.correspondence) {
    card.classList.add("muted");
    card.innerHTML = `<strong>${escapeHtml(post.poste)}</strong> : aucune culture n'est renseignée pour ce poste dans la table de correspondance.`;
    return;
  }

  if (!crop.need) {
    card.classList.add("muted");
    card.innerHTML = `
      <div class="culture-card-title">
        <div><small>Culture</small><strong>${escapeHtml(crop.correspondence.culture)}</strong></div>
        <span>Semaine du ${formatDateLabel(crop.weekStart)} au ${formatDateLabel(crop.weekEnd)}</span>
      </div>
      <p class="culture-card-empty">Aucun besoin ETP n'est renseigné dans le fichier pour cette semaine.</p>`;
    return;
  }

  card.classList.remove("muted");
  card.innerHTML = `
    <div class="culture-card-title">
      <div><small>Culture</small><strong>${escapeHtml(crop.correspondence.culture)}</strong></div>
      <span>Semaine du mardi ${formatDateLabel(crop.weekStart)} au lundi ${formatDateLabel(crop.weekEnd)}</span>
    </div>
    <div class="culture-grid">
      <div class="culture-value"><small>Besoin ETP culture</small><strong>${formatNumber(crop.need.besoinMm)} mm</strong></div>
      <div class="culture-value"><small>Volume correspondant</small><strong>${formatNumber(crop.volume)} m³</strong></div>
      <div class="culture-value"><small>Temps d'irrigation</small><strong>${formatDuration(crop.durationMinutes)}</strong></div>
    </div>
    <p class="culture-footnote">Calcul réalisé avec la surface et le débit du référentiel des postes. La semaine d'irrigation commence le mardi.</p>`;
}

function readMeterReading() {
  const input = $("meterReading");
  if (!input || input.value === "") return null;
  const value = Number(input.value);
  return Number.isFinite(value) && value >= 0 ? value : null;
}

function entryTimestamp(entry) {
  return new Date(entry.startAt || `${entry.date}T${entry.time}:00`).getTime();
}

function findPreviousMeterEntry(post, date, time, excludeId = editingIrrigationId) {
  if (!post || !date || !time) return null;
  const currentTime = new Date(`${date}T${time}:00`).getTime();
  if (!Number.isFinite(currentTime)) return null;
  return state.irrigations
    .filter((entry) =>
      entry.id !== excludeId &&
      entry.poste === post.poste &&
      entry.meterReading !== null &&
      Number.isFinite(entryTimestamp(entry)) &&
      entryTimestamp(entry) < currentTime
    )
    .sort((a, b) => entryTimestamp(b) - entryTimestamp(a))[0] || null;
}

function calculateMeterAnalysis(calculation) {
  if (!calculation?.post || calculation.post.type !== "V") return null;
  const currentReading = calculation.meterReading;
  const previous = findPreviousMeterEntry(calculation.post, calculation.date, calculation.time);
  if (currentReading === null) return { currentReading, previous, valid: false };

  if (!previous) {
    return { currentReading, previous: null, valid: true, firstReading: true };
  }

  const delta = currentReading - previous.meterReading;
  if (delta < 0) {
    return {
      currentReading,
      previous,
      valid: false,
      meterReset: true,
      delta
    };
  }

  const currentTime = new Date(`${calculation.date}T${calculation.time}:00`).getTime();
  const previousTime = entryTimestamp(previous);
  const expectedEntries = state.irrigations.filter((entry) =>
    entry.id !== editingIrrigationId &&
    entry.poste === calculation.post.poste &&
    entryTimestamp(entry) >= previousTime &&
    entryTimestamp(entry) < currentTime
  );
  const expectedVolume = expectedEntries.reduce((sum, entry) => sum + normalizeNumber(entry.volume), 0);
  const gap = delta - expectedVolume;

  return {
    currentReading,
    previous,
    valid: true,
    firstReading: false,
    delta,
    expectedVolume,
    gap,
    compensation: Math.max(0, -gap),
    surplus: Math.max(0, gap)
  };
}

function updateMeterCard() {
  const card = $("meterReadingCard");
  const info = $("meterPreviousInfo");
  if (!card || !info) return;
  const post = getSelectedPost();

  if (!post || post.type !== "V") {
    card.classList.add("hidden");
    return;
  }

  card.classList.remove("hidden");
  const previous = findPreviousMeterEntry(post, $("irrigationDate").value, $("irrigationTime").value);
  if (!previous) {
    info.textContent = "Aucun ancien relevé pour ce poste : ce relevé servira de valeur de départ.";
    return;
  }

  info.textContent = `Ancien relevé : ${formatNumber(previous.meterReading)} m³ · ${formatDateTime(previous.date, previous.time)}.`;
}

function getWeekBalance(calculation, crop, meterAnalysis) {
  if (!calculation?.post || !crop?.need) return null;
  const currentTime = new Date(`${calculation.date}T${calculation.time}:00`).getTime();
  const weekStartTime = new Date(`${crop.weekStart}T00:00:00`).getTime();

  const priorEntries = state.irrigations.filter((entry) => {
    const time = entryTimestamp(entry);
    return entry.id !== editingIrrigationId &&
      entry.poste === calculation.post.poste &&
      time >= weekStartTime &&
      time < currentTime;
  });

  let deliveredBefore = priorEntries.reduce((sum, entry) => sum + normalizeNumber(entry.volume), 0);

  if (
    meterAnalysis?.valid &&
    !meterAnalysis.firstReading &&
    meterAnalysis.previous &&
    entryTimestamp(meterAnalysis.previous) >= weekStartTime
  ) {
    const previousTime = entryTimestamp(meterAnalysis.previous);
    const expectedSinceMeter = priorEntries
      .filter((entry) => entryTimestamp(entry) >= previousTime)
      .reduce((sum, entry) => sum + normalizeNumber(entry.volume), 0);
    deliveredBefore = deliveredBefore - expectedSinceMeter + meterAnalysis.delta;
  }

  const target = crop.volume;
  const remainingBefore = target - deliveredBefore;
  const remainingAfter = target - deliveredBefore - calculation.volume;
  return { target, deliveredBefore, remainingBefore, remainingAfter };
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
  $("programmerInputs").classList.add("hidden");
  $("valveInputs").classList.add("hidden");

  if (!post) {
    reference.classList.add("muted");
    reference.innerHTML = "Sélectionnez un poste pour afficher son type, sa surface et son débit de référence.";
    updateCultureNeedCard();
    updateMeterCard();
    updateRepeatControls();
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
    $("programmerInputs").classList.remove("hidden");
  } else {
    $("valveInputs").classList.remove("hidden");
  }

  updateCultureNeedCard();
  updateMeterCard();
  updateRepeatControls();
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
  const meterReading = post.type === "V" ? readMeterReading() : null;

  return { post, date, time, durationMinutes, durationHours, volume, doseMm, end, meterReading };
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
  const repeatPlan = getRepeatPlan(calculation);
  const repeatSummary = repeatPlan.enabled && repeatPlan.dates.length
    ? `<p class="recap-repeat">${repeatPlan.dates.length} irrigations seront enregistrées, du ${formatDateTime(repeatPlan.dates[0], calculation.time)} au ${formatDateTime(repeatPlan.dates[repeatPlan.dates.length - 1], calculation.time)}.</p>`
    : "";

  const crop = getCropNeed(calculation.post, calculation.date);
  const meter = calculateMeterAnalysis(calculation);
  const balance = getWeekBalance(calculation, crop, meter);

  let meterSummary = "";
  if (calculation.post.type === "V") {
    if (calculation.meterReading === null) {
      meterSummary = `<div class="recap-analysis warning"><strong>Relevé compteur manquant.</strong> Renseignez le compteur avant d'enregistrer la vanne.</div>`;
    } else if (meter?.firstReading) {
      meterSummary = `<div class="recap-analysis"><strong>Premier relevé compteur :</strong> ${formatNumber(calculation.meterReading)} m³. Il servira de référence pour le prochain passage.</div>`;
    } else if (meter?.meterReset) {
      meterSummary = `<div class="recap-analysis warning"><strong>Compteur inférieur à l'ancien relevé.</strong> L'écart ne peut pas être calculé ; vérifiez s'il y a eu une remise à zéro ou un changement de compteur.</div>`;
    } else if (meter?.valid) {
      const compensationText = meter.compensation > 0.01
        ? `<strong class="negative">À compenser : ${formatNumber(meter.compensation)} m³.</strong>`
        : meter.surplus > 0.01
          ? `<strong class="positive">Aucune compensation nécessaire : ${formatNumber(meter.surplus)} m³ de plus que le volume enregistré.</strong>`
          : `<strong class="positive">Aucune compensation nécessaire : le volume mesuré correspond au volume enregistré.</strong>`;
      meterSummary = `
        <div class="recap-analysis">
          <div class="analysis-grid">
            <div><small>Ancien relevé</small><strong>${formatNumber(meter.previous.meterReading)} m³</strong></div>
            <div><small>Relevé actuel</small><strong>${formatNumber(meter.currentReading)} m³</strong></div>
            <div><small>Écart compteur</small><strong>${formatNumber(meter.delta)} m³</strong></div>
            <div><small>Volume attendu depuis l'ancien relevé</small><strong>${formatNumber(meter.expectedVolume)} m³</strong></div>
          </div>
          <p>${compensationText}</p>
        </div>`;
    }
  }

  let weekSummary = "";
  if (crop?.need && balance) {
    const beforeText = balance.remainingBefore > 0.01
      ? `${formatNumber(balance.remainingBefore)} m³ restent théoriquement à apporter avant cette irrigation.`
      : `Le besoin théorique de la semaine est déjà couvert avant cette irrigation.`;
    const afterText = balance.remainingAfter > 0.01
      ? `<strong>${formatNumber(balance.remainingAfter)} m³ resteraient à apporter après cette irrigation.</strong>`
      : balance.remainingAfter < -0.01
        ? `<strong>Besoin hebdomadaire couvert ; dépassement théorique de ${formatNumber(Math.abs(balance.remainingAfter))} m³.</strong>`
        : `<strong>Cette irrigation couvre exactement le besoin théorique restant de la semaine.</strong>`;
    weekSummary = `
      <div class="recap-analysis week-balance">
        <strong>Semaine du ${formatDateLabel(crop.weekStart)} au ${formatDateLabel(crop.weekEnd)}</strong>
        <p>${beforeText} ${afterText}</p>
      </div>`;
  }

  recap.classList.add("ready");
  recap.innerHTML = `
    <p class="recap-title">Récapitulatif de l’irrigation</p>
    <p class="recap-main">${escapeHtml(calculation.post.poste)} · ${explanation}</p>
    <div class="recap-grid recap-grid-three">
      <div class="recap-value"><small>Volume</small><strong>${formatNumber(calculation.volume)} m³</strong></div>
      <div class="recap-value"><small>Dose</small><strong>${formatNumber(calculation.doseMm)} mm</strong></div>
      <div class="recap-value"><small>${endLabel}</small><strong>${formatEndTime(calculation.end)}</strong></div>
    </div>
    ${meterSummary}
    ${weekSummary}
    ${repeatSummary}`;
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

function findIrrigationDuplicates(calculation = calculateIrrigation()) {
  if (!calculation?.post || !calculation.date || !calculation.time) return [];
  const dates = getRepeatPlan(calculation).dates.length ? getRepeatPlan(calculation).dates : [calculation.date];
  return state.irrigations.filter((entry) =>
    entry.id !== editingIrrigationId &&
    entry.poste === calculation.post.poste &&
    entry.time === calculation.time &&
    dates.includes(entry.date)
  );
}

function findIrrigationDuplicate() {
  return findIrrigationDuplicates()[0] || null;
}

function findFilterDuplicate() {
  const filter = getSelectedFilter();
  const date = $("filterDate").value;
  const time = $("filterTime").value;
  if (!filter || !date || !time) return null;
  return state.filters.find((entry) => entry.id !== editingFilterId && entry.filter === filter.filtre && entry.date === date && entry.time === time) || null;
}

function updateIrrigationDuplicateWarning() {
  const duplicates = findIrrigationDuplicates();
  const warning = $("irrigationDuplicateWarning");
  warning.classList.toggle("hidden", duplicates.length === 0);
  warning.textContent = duplicates.length
    ? `Doublon détecté : ${duplicates.length} irrigation${duplicates.length > 1 ? "s existent" : " existe"} déjà pour ce poste aux dates concernées.`
    : "";
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
  $("repeatIrrigation").checked = false;
  $("repeatOptions").classList.add("hidden");
  $("repeatEndDate").value = "";
  $("meterReading").value = "";
  setDateTimeDefaults("irrigation");
  updateRepeatControls();
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
  if (calculation.post.type === "V" && calculation.meterReading === null) return "Renseignez le relevé actuel du compteur d’eau.";
  const meter = calculateMeterAnalysis(calculation);
  if (meter?.meterReset) return "Le relevé actuel est inférieur à l’ancien relevé. Vérifiez le compteur avant d’enregistrer.";
  const repeatPlan = getRepeatPlan(calculation);
  if (repeatPlan.enabled && !repeatPlan.endDate) return "Choisissez la date de fin de la répétition.";
  if (repeatPlan.enabled && repeatPlan.endDate < calculation.date) return "La fin de la répétition doit être postérieure ou égale à la première date.";
  if (repeatPlan.enabled && repeatPlan.dates.length > 180) return "La répétition est limitée à 180 irrigations par saisie.";
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

  const repeatPlan = getRepeatPlan(calculation);
  const dates = repeatPlan.enabled ? repeatPlan.dates : [calculation.date];
  const button = $("saveIrrigationBtn");
  setBusy(button, true, dates.length > 1 ? `Enregistrement de ${dates.length} irrigations…` : "Enregistrement…");

  const makePayload = (date, index = 0) => {
    const end = getEndDateTime(date, calculation.time, calculation.durationMinutes);
    return {
      debut_at: toIsoDateTime(date, calculation.time),
      fin_at: end.toISOString(),
      ilot: String(calculation.post.ilot),
      poste: calculation.post.poste,
      type_poste: calculation.post.type,
      surface_m2: calculation.post.surface,
      debit_m3_h: calculation.post.debit,
      duree_minutes: calculation.durationMinutes,
      volume_m3: Number(calculation.volume.toFixed(4)),
      dose_mm: Number(calculation.doseMm.toFixed(4)),
      statut: "Réalisée",
      releve_compteur_m3: index === 0 ? calculation.meterReading : null,
      observation: $("irrigationNote").value.trim() || null
    };
  };

  try {
    const query = editingIrrigationId
      ? db.from("irrigations").update(makePayload(calculation.date, 0)).eq("id", editingIrrigationId)
      : db.from("irrigations").insert(dates.map((date, index) => makePayload(date, index)));
    const { error } = await query;
    if (error) throw error;
    const wasEditing = Boolean(editingIrrigationId);
    const count = dates.length;
    resetIrrigationForm();
    await loadHistory({ silent: true });
    showToast(wasEditing
      ? "Irrigation modifiée."
      : count > 1
        ? `${count} irrigations enregistrées.`
        : "Irrigation enregistrée.");
  } catch (error) {
    showToast(databaseErrorMessage(error, "Doublon refusé : une irrigation existe déjà pour ce poste à l’une des dates concernées."), 5500);
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
    startAt: row.debut_at,
    ilot: String(row.ilot),
    poste: row.poste,
    equipmentType: row.type_poste,
    surface: normalizeNumber(row.surface_m2),
    referenceFlow: normalizeNumber(row.debit_m3_h),
    date: start.date,
    time: start.time,
    endDate: end.date,
    endTime: end.time,
    durationMinutes: normalizeNumber(row.duree_minutes),
    durationHours: normalizeNumber(row.duree_minutes) / 60,
    volume: normalizeNumber(row.volume_m3),
    doseMm: normalizeNumber(row.dose_mm),
    meterReading: row.releve_compteur_m3 === null || row.releve_compteur_m3 === undefined
      ? null
      : normalizeNumber(row.releve_compteur_m3),
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
  const [postResult, filterResult, cropResult, correspondenceResult] = await Promise.all([
    db.from("referentiel_postes").select("ilot, poste, type_poste, surface_m2, debit_m3_h").order("ilot").order("poste"),
    db.from("referentiel_filtres").select("filtre, debit_max_m3_h").order("filtre"),
    db.from("besoins_culture").select("culture, semaine, debut_semaine, etp_reference_mm, besoin_etp_mm").order("debut_semaine").order("culture"),
    db.from("correspondance_blocs").select("ilot, bloc, poste_ref, culture, systeme, surface_totale_m2, debit_total_m3_h, pluviometrie_mm_h").order("ilot").order("bloc")
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

  if (!cropResult.error && cropResult.data?.length) {
    state.cropNeeds = cropResult.data.map((row) => ({
      culture: row.culture,
      semaine: normalizeNumber(row.semaine),
      debutSemaine: row.debut_semaine,
      etpReferenceMm: normalizeNumber(row.etp_reference_mm),
      besoinMm: normalizeNumber(row.besoin_etp_mm)
    }));
  } else {
    state.cropNeeds = CROP_NEEDS_FALLBACK.slice();
    notices.push("Les besoins culture n’ont pas été chargés depuis Supabase : les valeurs intégrées à l’application sont utilisées.");
    if (cropResult.error) console.error(cropResult.error);
  }

  if (!correspondenceResult.error && correspondenceResult.data?.length) {
    state.blockCorrespondences = correspondenceResult.data.map((row) => ({
      ilot: String(row.ilot),
      bloc: row.bloc,
      poste: row.poste_ref,
      culture: row.culture,
      systeme: row.systeme || "",
      surface: normalizeNumber(row.surface_totale_m2),
      debit: normalizeNumber(row.debit_total_m3_h),
      pluviometrie: normalizeNumber(row.pluviometrie_mm_h)
    }));
  } else {
    state.blockCorrespondences = BLOCK_CULTURE_FALLBACK.slice();
    notices.push("La correspondance blocs/cultures n’a pas été chargée depuis Supabase : les valeurs intégrées à l’application sont utilisées.");
    if (correspondenceResult.error) console.error(correspondenceResult.error);
  }

  populateLists();
  renderAlerts();
  updateCultureNeedCard();
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
    updateIrrigationRecap();
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
  $("irrigationDate").value = entry.date;
  $("irrigationTime").value = entry.time;
  $("irrigationNote").value = entry.note || "";
  $("meterReading").value = entry.meterReading === null ? "" : entry.meterReading;

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
      const post = state.posts.find((item) => item.poste === entry.poste) || {
        poste: entry.poste,
        surface: entry.surface,
        debit: entry.referenceFlow,
        type: entry.equipmentType
      };
      const crop = getCropNeed(post, entry.date);
      const cultureLine = crop?.correspondence
        ? `<br>Culture : ${escapeHtml(crop.correspondence.culture)}${crop?.need ? ` · Besoin semaine : ${formatNumber(crop.need.besoinMm)} mm` : ""}`
        : "";
      const meterLine = entry.meterReading !== null
        ? `<br>Relevé compteur : ${formatNumber(entry.meterReading)} m³`
        : "";

      return `
        <article class="history-item">
          <div class="history-content">
            <div class="history-title">
              <span class="badge badge-irrigation">Irrigation</span>
              <strong>${escapeHtml(entry.poste)}</strong>
            </div>
            <div class="history-meta">
              Îlot ${escapeHtml(entry.ilot)} · ${entry.equipmentType === "P" ? "Programmateur" : "Vanne volumétrique"}<br>
              ${formatDateTime(entry.date, entry.time)} → ${formatDateTime(entry.endDate, entry.endTime)}<br>
              ${formatDuration(entry.durationMinutes)} · ${formatNumber(entry.volume)} m³ · ${formatNumber(entry.doseMm)} mm
              ${cultureLine}
              ${meterLine}
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

    const irrigationRows = state.irrigations.slice().reverse().map((item) => {
      const post = state.posts.find((entry) => entry.poste === item.poste) || {
        poste: item.poste,
        surface: item.surface,
        debit: item.referenceFlow,
        type: item.equipmentType
      };
      const crop = getCropNeed(post, item.date);
      return {
        Date: item.date,
        "Heure de début": item.time,
        "Date de fin": item.endDate,
        "Heure de fin": item.endTime,
        Îlot: item.ilot,
        Poste: item.poste,
        Type: item.equipmentType === "P" ? "Programmateur (P)" : "Vanne volumétrique (V)",
        Culture: crop?.correspondence?.culture || "",
        "Début semaine (mardi)": crop?.weekStart || "",
        "Besoin ETP culture (mm)": crop?.need?.besoinMm ?? "",
        "Volume théorique semaine (m³)": crop?.volume ?? "",
        "Temps théorique semaine": crop?.durationMinutes ? formatDuration(crop.durationMinutes) : "",
        "Surface (m²)": item.surface,
        "Débit de référence (m³/h)": item.referenceFlow,
        "Durée (h décimales)": item.durationHours,
        "Durée affichée": formatDuration(item.durationMinutes),
        "Volume (m³)": item.volume,
        "Dose (mm)": item.doseMm,
        "Relevé compteur (m³)": item.meterReading ?? "",
        Observation: item.note || ""
      };
    });

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
      ...state.referenceFilters.slice().sort((a, b) => naturalSort(a.filtre, b.filtre)).map((item) => [item.filtre, item.debitMax]),
      [],
      ["CORRESPONDANCE BLOCS / CULTURES"],
      ["Îlot", "Bloc source", "Poste utilisé dans l'application", "Culture", "Système", "Surface source (m²)", "Débit source (m³/h)", "Pluviométrie (mm/h)"],
      ...state.blockCorrespondences.slice().sort((a, b) => naturalSort(a.ilot, b.ilot) || naturalSort(a.bloc, b.bloc)).map((item) => [
        item.ilot,
        item.bloc,
        item.poste || "",
        item.culture,
        item.systeme || "",
        item.surface || "",
        item.debit || "",
        item.pluviometrie || ""
      ]),
      [],
      ["BESOINS CULTURE"],
      ["Culture", "Semaine", "Début semaine (mardi)", "ETP référence (mm)", "Besoin ETP culture (mm)"],
      ...state.cropNeeds.slice().sort((a, b) => a.debutSemaine.localeCompare(b.debutSemaine) || naturalSort(a.culture, b.culture)).map((item) => [
        item.culture,
        item.semaine,
        item.debutSemaine,
        item.etpReferenceMm,
        item.besoinMm
      ])
    ];

    const workbook = XLSX.utils.book_new();
    const irrigationSheet = XLSX.utils.json_to_sheet(irrigationRows.length ? irrigationRows : [{ Information: "Aucune irrigation enregistrée" }]);
    const filterSheet = XLSX.utils.json_to_sheet(filterRows.length ? filterRows : [{ Information: "Aucun contre-lavage enregistré" }]);
    const referenceSheet = XLSX.utils.aoa_to_sheet(referenceRows);
    if (irrigationRows.length) irrigationSheet["!autofilter"] = { ref: irrigationSheet["!ref"] };
    if (filterRows.length) filterSheet["!autofilter"] = { ref: filterSheet["!ref"] };
    setSheetColumnWidths(irrigationSheet, [12, 13, 12, 13, 8, 35, 24, 30, 18, 22, 28, 22, 14, 24, 19, 18, 14, 12, 22, 40]);
    setSheetColumnWidths(filterSheet, [12, 13, 12, 13, 18, 19, 18, 40]);
    setSheetColumnWidths(referenceSheet, [12, 38, 34, 32, 22, 20, 20, 22]);
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
  $("irrigationDate").addEventListener("change", () => { updateRepeatControls(); updateIrrigationRecap(); });
  $("irrigationTime").addEventListener("input", updateIrrigationRecap);
  $("programmerHours").addEventListener("input", updateIrrigationRecap);
  $("programmerMinutes").addEventListener("input", updateIrrigationRecap);
  $("valveVolume").addEventListener("input", updateIrrigationRecap);
  $("meterReading").addEventListener("input", updateIrrigationRecap);
  $("repeatIrrigation").addEventListener("change", () => { updateRepeatControls(); updateIrrigationRecap(); });
  $("repeatFrequency").addEventListener("change", updateIrrigationRecap);
  $("repeatEndDate").addEventListener("change", updateIrrigationRecap);
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
