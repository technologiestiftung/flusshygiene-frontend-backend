"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const skeleton_1 = require("../layouts/skeleton");
// interface IInfo {
//   [key:string]: any;
// }
const info = (_props) => {
    return (react_1.default.createElement(skeleton_1.Skeleton, { title: 'Vorhersagemodell' },
        react_1.default.createElement("div", { className: 'info' },
            react_1.default.createElement("h1", null, "Beschreibung Vorhersagemodell"),
            react_1.default.createElement("p", null, "Die Badegew\u00E4sserqualit\u00E4t wird regelm\u00E4\u00DFig durch das Landesamt f\u00FCr Gesundheit und Soziales \u00FCberwacht und zeigt die gute Qualit\u00E4t in den Berliner Seen, die den B\u00FCrger zum Baden einl\u00E4dt."),
            react_1.default.createElement("p", null, "Einige Badestellen im n\u00F6rdlichen Bereich der Unterhavel (Grunewaldturm und Kleine Badewiese) werden, wenn es regnet, vom Berliner Stadtgebiet beeinflusst. Wie wir es von der Wettervorhersage kennen, regnet es \u00F6rtlich und zeitlich sehr unterschiedlich. Auch die Flie\u00DFgeschwindigkeit in Spree und Havel kann sich innerhalb kurzer Zeit stark ver\u00E4ndern. Mit einer Verschlechterung der Badegew\u00E4sserqualit\u00E4t ist dann zu rechnen, wenn es stark geregnet hat, es zu Einleitungen aus dem Stadtgebiet kommt, und die Flie\u00DFgeschwindigkeit im Fluss hoch ist. Dieser Zusammenhang wurde im Forschungsprojekt FLUSSHYGIENE \u00FCber zwei Jahre sehr genau untersucht und kann nun genutzt werden um die Badegew\u00E4sserqualit\u00E4t vorherzusagen."),
            react_1.default.createElement("p", null, "Zu diesem Zweck wurde aus den gewonnenen Messdaten ein statistisches Modell entwickelt, dass die Badegew\u00E4sserqualit\u00E4t f\u00FCr jeden Tag bewertet. Durch sehr gute Ergebnisse w\u00E4hrend der FLUSSHYGIENE-Projektphase, wird das Modell nun f\u00FCr den dauerhaften Einsatz getestet. Hierf\u00FCr \u00FCbermitteln die Berliner Wasserbetriebe (BWB) jeden Tag die gemessenen Daten zu Regen, Mischwasser\u00FCberl\u00E4ufen aus der Kanalisation sowie die Zu- und Ablaufdaten vom Kl\u00E4rwerk Ruhleben. Die Senatsverwaltung f\u00FCr Umwelt, Verkehr und Klimaschutz (SenUVK) \u00FCbermittelt die t\u00E4glichen Daten \u00FCber den gemessenen Durchfluss, also wie viel Wasser im Fluss pro Sekunde abflie\u00DFt. Die Daten werden automatisch eingelesen, aufbereitet und mit Hilfe des statistischen Modells ausgewertet. Am Ende steht jeden Morgen eine Prognose \u00FCber die Wasserqualit\u00E4t, die an diesem Tag zu erwarten ist."),
            react_1.default.createElement("h2", null, "Hinweise:"),
            react_1.default.createElement("p", null, "Das Baden in nat\u00FCrlichen Gew\u00E4ssern ist nie zu 100% risikofrei. Auch der Schiffs- und Bootsverkehr in der Unterhavel kann zu Belastungen f\u00FChren, die durch das Modell nicht vorhergesagt werden."))));
};
exports.default = info;
