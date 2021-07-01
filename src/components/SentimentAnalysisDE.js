import React, { useState } from 'react';
import { Container, Card, CardText, CardBody, CardTitle, CardSubtitle, UncontrolledTooltip } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Sentiment from 'sentiment';

const SentimentAnalysisDE = ({ dark }) => {

    const sentiment = new Sentiment();

    const [sentimentScore, setSentimentScore] = useState(null)
    const [generalSentiment, setGeneralSentiment] = useState(null)

    var grLanguage = {
        labels: {

            "aufgeben": -2,

            "aufgegeben": -2,

            "verlässt": -2,

            "entführt": -2,

            "Entführung": -2,

            "Entführungen": -2,

            "verabscheuen": -3,

            "verabscheut": -3,

            "abscheulich": -3,

            "verabscheut": -3,

            "Fähigkeiten": 2,

            "Fähigkeit": 2,

            "an Bord": 1,

            "abgebrochen": -1,

            "Abbrüche": -1,

            "abwesend": -1,

            "Abwesende": -1,

            "abschließen": 2,

            "aufgelöst": 2,

            "absolviert": 2,

            "auflösen": 2,

            "absorbiert": 1,

            "Missbrauch": -3,

            "missbraucht": -3,

            "Missbrauch": -3,

            "missbrauchen": -3,

            "überheblich ": -3,

            "akzeptieren": 1,

            "akzeptabel": 1,

            "Annahme": 1,

            "akzeptiert": 1,

            "annehmen": 1,

            "akzeptiert": 1,

            "zugänglich": 1,

            "Unfall": -2,

            "zufällig": -2,

            "versehentlich": -2,

            "Unfälle": -2,

            "Beifall": 2,

            "gelobt": 2,

            "Auszeichnung": 2,

            "erfüllen": 2,

            "erfüllt": 2,

            "erfüllt": 2,

            "Leistung": 2,

            "Errungenschaften": 2,

            "Anschuldigung": -2,

            "Anschuldigungen": -2,

            "anklagen": -2,

            "angeklagt": -2,

            "beschuldigt": -2,

            "anklagen": -2,

            "ein che": -2,

            "erreichbar": 1,

            "schmerzen": -2,

            "freisprechen": 2,

            "freispricht": 2,

            "freigesprochen": 2,

            "freisprechen": 2,

            "erbittert": -3,

            "aktiv": 1,

            "ausreichend": 1,

            "bewundern": 3,

            "bewundert": 3,

            "bewundert": 3,

            "bewundern": 3,

            "zugeben": -1,

            "gibt zu": -1,

            "zugelassen": -1,

            "ermahnen": -2,

            "ermahnt": -2,

            "übernehmen": 1,

            "annimmt": 1,

            "liebenswert": 3,

            "Anbetung": 3,

            "verehren": 3,

            "verehrt": 3,

            "verehrt": 3,

            "anbetend": 3,

            "anbetungswürdig": 3,

            "erweitert": 1,

            "Vorteil ": 2,

            "vorteilhaft": 2,

            "vorteilhaft": 2,

            "Vorteile": 2,

            "Abenteuer": 2,

            "Abenteuer": 2,

            "abenteuerlich": 2,

            "Gegner": -1,

            "ratsam": 1,

            "betroffen": -1,

            "Zuneigung": 3,

            "liebevoll": 3,

            "Zuneigung": 3,

            "befallen": -1,

            "erschwinglich": 2,

            "beleidigt": -1,

            "Liebhaber": 2,

            "Angst": -2,

            "erschweren": -2,

            "verschlimmert": -2,

            "erschwert": -2,

            "erschwerend": -2,

            "Aggression": -2,

            "Aggressionen": -2,

            "aggressiv": - 2,

            "Aggressivität": -2,

            "entsetzt": -2,

            "agog": 2,

            "quälen": -3,

            "gequält": -3,

            "quält": -3,

            "quälend": -3,

            "quälen": -3,

            "gequält": -3,

            "quält": -3,

            "quälend": -3,

            "stimme zu": 1,

            "angenehm": 2,

            "einverstanden": 1,

            "Vereinbarung": 1,

            "stimmt zu": 1,

            "Alarm": -2,

            "alarmiert": -2,

            "Alarmist": -2,

            "Alarmisten": -2,

            "leider": -1,

            "Alarm": -1,

            "Entfremdung": -2,

            "lebendig": 1,

            "Anschuldigung": -2,

            "Vorwürfe": -2,

            "allergisch": -2,

            "erlauben": 1,

            " Verbündeter": 2,

            "allein": -2,

            "altruistisch": 2,

            "erstaunen": 2,

            "erstaunt": 2,

            "überrascht": 2,

            "erstaunlich": 4,

            "ambitioniert": 2,

            "ambivalent": -1,

            "freundschaftlich": 2,

            "amüsieren": 3,

            "amüsiert": 3,

            "Belustigung": 3,

            "Vergnügen": 3,

            "Wut": -3,

            "verärgert": -3,

            "ärgert": -3,

            "wütend": -3,

            "Angst": -3,

            "angst": -3,

            "Animosität": -2,

            "ärgern": -2,

            "Ärger": -2,

            "verärgert": -2,

            "nervig": -2,

            "nervt": -2,

            "antagonistisch": -2,

            "anti": -1,

            "Vorfreude": 1,

            "Angst": -2,

            "ängstlich": -2,

            "apathisch": -3,

            "Apathie": -3,

            "Affenfick": -3,

            "apokalyptisch": -2,

            "entschuldigen": -1,

            "entschuldigt": -1,

            "entschuldigt": -1,

            "entschuldigen": -1,

            "entschuldigen": -1,

            "entschuldigt": -1,

            "entschuldigt sich": -1,

            "entschuldigen": -1,

            "Entschuldigung": -1,

            "entsetzt": -2,

            "entsetzlich": -2,

            "ansprechend": 2,

            "beschwichtigen": 2,

            "besänftigt": 2,

            "besänftigt": 2,

            "beschwichtigen": 2,

            "Applaus": 2,

            "applaudiert": 2,

            "applaudieren": 2,

            "applaudiert": 2,

            "Applaus": 2,

            "schätzen ": 2,

            "geschätzt": 2,

            "schätzt": 2,

            "schätzen": 2,

            "Wertschätzung": 2,

            "ängstlich": -2,

            "angemessen": 2,

            "angemessen": 2,

            "Genehmigung": 2,

            "genehmigt": 2,

            "genehmigt": 2,

            "glühend": 1,

            "Verhaftung": -2,

            "festgenommen": -3,

            "Verhaftungen": -2,

            "arrogant": -2,

            "Arschloch": -4,

            "schämen": -2,

            "beschämt": -2,

            "Arsch": -4,

            "Ermordung": -3,

            "Attentate": -3,

            "Angriff": -2,

            "Angriffe": -2,

            "Vermögenswert": 2,

            "Vermögenswerte": 2,

            "Arschficken": -4,

            "Arschloch ": -4,

            "erstaunt": 2,

            "erstaunen": 3,

            "erstaunt": 3,

            "erstaunlich": 3,

            "erstaunlich": 3,

            "erstaunt": 3,

            "grauenhaft": -3,

            "Gräuel": -3,

            "Angriff": -1,

            "angegriffen": -1,

            "angreifen": -1,

            "Angriffe": -1,

            "anziehen": 1,

            "angezogen": 1,

            "anziehend": 2,

            "Attraktion": 2,

            "Sehenswürdigkeiten": 2,

            "attraktiv": 2,

            "attraktiv": 2,

            "Attraktivität": 2,

            "anzieht": 1,

            "kühn": 3,

            "Aura": 1,

            "Autorität": 1,

            "Rache": -2,

            "gerächt": -2,

            "Rächer": -2,

            "Rächer": -2,

            "rächt": -2,

            "Rache": -2,

            "abwenden": -1,

            "abgewandt": -1,

            "wendet ab": -1,

            "eifrig": 2,

            "vermeiden": -1,

            "vermieden": -1,

            "vermeidet": -1,

            "warten": -1,

            "erwartet": -1,

            "wartet": -1,

            "Auszeichnung": 3,

            "ausgezeichnet": 3,

            "Auszeichnungen": 3,

            "großartig": 4,

            "schrecklich": -3,

            "umständlich": -2,

            "Axt": -1,

            "bestätigt": -1,

            "unterstützt": 1,

            "unterstützen": 2,

            "Rücken": 1,

            "schlecht": -3,

            "Pech": -2,

            "badass": -3,

            "schlecht": -3,

            "Schlecht": -3,

            "Rettungsaktion": -2,

            "ausgewogen": 1,

            "Bambus": -2,

            "bamboozled": -2,

            "bambusles": -2,

            "verbot": -2,

            "verbannen": -1,

            "bankrott": -3,

            "Insolvenz": -3,

            "Bankster": -3,

            "verboten": -2,

            "Barbar": -2,

            "barbarisch": -2,

            "barbarisch": -2,

            "Schnäppchen": 2,

            " barriere": -2,

            "Bastard": -5,

            "Bastarde": -5,

            "Kampf": -1,

            "gekämpft": -1,

            "Kämpfe": -1,

            "kämpfen": -2,

            "geschlagen": -2,

            "selig": 3,

            "schlagen": -1,

            "Schönheiten": 3,

            "schön": 3,

            "schön": 3,

            "verschönern": 3,

            "Schönheit": 3,

            "angemessen": 2,

            "passend": 2,

            "herabsetzen": -2,

            "herabgesetzt": -2,

            "Geliebte": 3,

            "Wohltäter": 2,

            "Wohltäter": 2,

            "Nutzen": 2,

            "Vorteile": 2,

            "begünstigt": 2,

            "vorteilhaft": 2,

            "wohlwollend": 3,

            "trauern": -2,

            "verloren ": -2,

            "trauert": -2,

            "Trauer": -2,

            "am besten": 3,

            "am besten verdammt": 4,

            "verraten": -3,

            "Verrat": -3,

            "verraten": -3,

            "verraten": -3,

            "verrät": -3,

            "besser": 2,

            "Voreingenommenheit": -1,

            "voreingenommen": -2,

            "groß": 1,

            "Schlampe": -5,

            "Hündinnen": -5,

            "bitter": -2,

            "bitter": -2,

            "bitter": -2,

            "bizarr": -2,

            "erpressung": -3,

            "erpresst": -3,

            "erpressen": -3,

            "Erpressungen": -3,

            "bla": -2,

            "Schuld": -2,

            "beschuldigt": -2,

            "Schuld": -2,

            "beschuldigen": -2,

            "segnen": 2,

            "segnet": 2,

            "Segen": 3,

            "Segen": 3,

            "blind": -1,

            "Glück": 3,

            "glückselig": 3,

            "fröhlich": 2,

            "aufgebläht": -1,

            "Blockade": -2,

            "Blockbuster": 3,

            "blockiert": -1,

            "blockieren": -1,

            "Blöcke": -1,

            "blutig": -3,

            "verschwommen": -2,

            "prahlerisch": -2,

            "fett": 2,

            "kühn": 2,

            "Bombe": -1,

            "boost": 1,

            "verstärkt": 1,

            "ankurbeln": 1,

            "boost": 1,

            "bohren": -2,

            "gelangweilt": -2,

            "langweilig": -3,

            "mühe": -2,

            "gestört": -2,

            "stört": -2,

            "lästig": -2,

            "boykott": -2,

            "boykottiert": -2,

            "boykottieren": -2,

            "Boykotte": -2,

            "Gehirnwäsche": -3,

            "mutig": 2,

            "Mut": 2,

            "Tapferkeit": 2,

            "bravourös": 3,

            "Verstoß": -2,

            "verletzt": -2,

            "Verstöße": -2,

            "verletzen": -2,

            " Durchbruch": 3,

            "atemberaubend": 5,

            "Bestechung": -3,

            "bestochen": -3,

            "Bestechungen": -3,

            "Bestechung": -3,

            "hell": 1,

            "am hellsten": 2,

            "Helligkeit": 1,

            "brillant": 4,

            "Brillanz": 3,

            "Glanz": 3,

            "flotte": 2,

            "kaputt": -1,

            "kaputt": -1,

            "brüten": -2,

            "brutal": -3,

            "brutal": -3,

            "gemobbt": -2,

            "Quatsch": -4,

            "bully": -2,

            "Mobbing": -2,

            "verdammt": -2,

            "schwimmend": 2,

            "Belastung": -2,

            "belastet": -2,

            "belastend": -2,

            "Belastungen": -2,

            "Einbrecher": -2,

            "Einbruch": -2,

            "ruhig": 2,

            "beruhigt": 2,

            "beruhigend": 2,

            "beruhigt": 2,

            "kann nicht stehen": -3,

            "abbrechen": -1,

            "abgesagt": -1,

            "stornieren": -1,

            "storniert": -1,

            "Krebs": -1,

            "Fähigkeiten": 1,

            "Fähigkeit": 1,

            "fähig": 1,

            "gefesselt": 3,

            "Pflege": 2,

            "sorglos": 1,

            "vorsichtig": 2,

            "vorsichtig": 2,

            "Vorsicht": 2,

            "nachlässig": -2,

            "sorgt": 2,

            "fürsorglich": 2,

            "einkassieren": -2,

            "Unfall": -2,

            "Katastrophe": -3,

            "katastrophal": -4,

            "vorsichtig": -1,

            "feiern": 3,

            "Promi bewertet": 3,

            "feiert": 3,

            "feiern": 3,

            "Feier": 3,

            "feiern": 3,

            "Zensor": -2,

            "zensiert": -2,

            "Zensoren": -2,

            "sicher": 1,

            "Leid": -2,

            "verärgert": -2,

            "Herausforderung": -1,

            "Champion": 2,

            "Meister": 2,

            "Champions ": 2,

            "Zufall": 2,

            "Chancen": 2,

            "Chaos": -2,

            "chaotisch": -2,

            "aufgeladen": -3,

            "Gebühren": -2,

            "Charisma": 2,

            "gemeinnützig": 2,

            "charme": 3,

            "charmant": 3,

            "charmant": 3,

            "reizlos": -3,

            "züchtigen": -3,

            "gezüchtigt": -3,

            "bestraft": -3,

            "Züchtigung": -3,

            "betrügen": -3,

            "betrogen": -3,

            "Betrüger": -3,

            "Betrüger": -3,

            "betrügen": -3,

            "betrügt": -3,

            "jubeln": 2,

            "gejubelt": 2,

            "fröhlich": 2,

            "fröhlich": 2,

            "jubeln": 2,

            "freudlos": -2,

            "prost": 2,

            "fröhlich": 3,

            "schätzen": 2,

            "geschätzt": 2,

            "schätzt": 2,

            "schätzen": 2,

            "schick": 2,

            "tadeln": -3,

            "geschimpft": -3,

            "tadeln": -3,

            "Schelten": -3,

            "kindisch": -2,

            "kühlen": -1,

            "ersticken": -2,

            "erstickt": -2,

            "drosselt": -2,

            "ersticken": -2,

            "klärt": 2,

            "Klarheit": 2,

            "Zusammenstoß": -2,

            "klasse": 3,

            "sauber": 2,

            "Reiniger": 2,

            "klar": 1,

            "gelöscht": 1,

            "eindeutig": 1,

            "löscht": 1,

            "klug": 2,

            "bewölkt": -1,

            "ahnungslos": -2,

            "Hahn": -5,

            "Schwanzsauger": -5,

            "Schwanzsauger": -5,

            "übermütig": -2,

            "erzwungen": -2,

            "Zwang": -2,

            "zusammenbrechen": -2,

            "zusammengebrochen": -2,

            "zusammenbricht": -2,

            "zusammenbrechen": -2,

            "kollidieren": -1,

            "kollidiert": -1,

            "kollidieren": -1,

            "Kollision": -2,

            "Kollisionen": -2,

            "kolluierend": -3,

            "Kampf": -1,

            "Kämpfe": -1,

            "Komödie": 1,

            "Komfort": 2,

            "bequem": 2,

            "bequem": 2,

            "beruhigend": 2,

            "Komfort": 2,

            "komisch": 1,

            "empfehlen": 2,

            "empfohlen": 2,

            "verpflichten": 1,

            "Verpflichtung": 2,

            "verpflichtet": 1,

            "engagiert": 1,

            "verpflichtend": 1,

            "Mitgefühl": 2,

            "mitfühlend": 2,

            "gezwungen": 1,

            "Kompetenzen": 1,

            "kompetent": 2,
            "kompetenz": 2,

            "wettbewerbsfähig": 2,

            "zufrieden": -2,

            "beschweren": -2,

            "beschwert": -2,

            "beschweren": -2,

            "beschwert": -2,

            "Beschwerde": -2,

            "Beschwerden": -2,

            "komplizieren": -2,

            "Kompliment": 2,

            "komplimentiert": 2,

            "Komplimente": 2,

            "umfassend": 2,

            "besorgt": -2,

            "versöhnen": 2,

            "versöhnt": 2,

            "versöhnt": 2,

            "versöhnlich": 2,

            "verurteilen": -2,

            "Verurteilung": -2,

            "verurteilt": -2,

            "verurteilt": -2,

            "Vertrauen": 2,

            "zuversichtlich": 2,

            "zuversichtlich": 2,

            "Konflikt": -2,

            "widersprüchlich": -2,

            "konflikthaft": -2,

            "Konflikte": -2,

            "verwirren": -2,

            "verwirrt": -2,

            "verwirrend": -2,

            "Herzlichen Glückwunsch": 2,

            "gratulieren": 2,

            "Herzlichen Glückwunsch": 2,

            "Herzlichen Glückwunsch": 2,

            "Einwilligung": 2,

            "Einwilligungen": 2,

            "tröstend": 2,

            "Verschwörung": -3,

            "Verstopfung": -2,

            "c onstrained": -2,

            "Ansteckung": -2,

            "Ansteckungen": -2,

            "ansteckend": -1,

            "Verunreinigung": -2,

            "Verunreinigungen": -2,

            "kontaminieren": -2,

            "kontaminiert": -2,

            "kontaminiert": -2,

            "kontaminieren": -2,

            "Kontamination": -2,

            "Kontaminationen": -2,

            "Verachtung": -2,

            "verachtenswert": -2,

            "verächtlich": -2,

            "verächtlich": -2,

            "konkurrieren": -1,

            "Anwärter": -1,

            "konkurrierend": -1,

            "streitig": -2,

            "anfechtbar": -2,

            "umstritten": -2,

            "umstritten": -2,

            "Kontroversen": -2,

            "Kontroverse": -2,

            "verurteilt": -2,

            "überzeugen": 1,

            "überzeugt": 1,

            "überzeugt": 1,

            "gesellig": 2,

            "cool": 1,

            "cooles Zeug": 3,

            "in die Enge getrieben": -2,

            "Leiche": -1,

            "korrupt": -3,

            "korrupt": -3,

            "verderben": -3,

            "Korruption": -3,

            "korrupt": -3,

            "kostspielig": -2,

            "Mut": 2,

            "mutig": 2,

            "mutig": 2,

            "Mut": 2,

            "höflich": 2,

            "Höflichkeit": 2,

            "Vertuschung": -3,

            "Feigling": -2,

            "feige": -2,

            "Gemütlichkeit": 2,

            "Krampf": -1,

            "Mist": -3,

            "beschissen": -3,

            "Absturz": -2,

            "verrückter": -2,

            "am verrücktesten": -2,

            "verrückt": -2,

            "kreativ": 2,

            "am Niedergeschlagen": -2,

            "weinte": -2,

            "schreit": -2,

            "Verbrechen": -3,

            "Verbrechen": -3,

            "kriminell": -3,

            "Kriminelle": -3,

            "kriminalität ": -3,

            "kriminiert": -3,

            "kriminiert": -3,

            "Krise": -3,

            "Kritiker": -2,

            "kritisieren": -2,

            "kritisiert": -2,

            "kritisiert": -2,

            "kritisieren": -2,

            "Kritik": -2,

            "kritisieren": -2,

            "kritisiert": -2,

            "kritisiert": -2,

            "kritisieren": -2,

            "Kritiker": -2,

            "Kritik": -2,

            "Gedränge": -1,

            "roh": -1,

            "grausam": -3,

            "Grausamkeit": -3,

            "zerquetschen": -1,

            "zerkleinert": -2,

            "zerquetscht": -1,

            "zerquetschen": -1,

            "weinen": -1,

            "weinen": -2,

            "listig": 2,

            " Fotze": -5,

            "neugierig": 1,

            "Fluch": -1,

            "schneiden": -1,

            "Kürzung": -2,

            "Kürzungen": -2,

            "süß": 2,

            "schneidet": -1,

            "schneiden": -1,

            "zynisch": -2,

            "zynisch": -2,

            "Zynismus": -2,

            "Schaden": -3,

            "beschädigt": -3,

            "Schäden": -3,

            "schädigend": -3,

            "verdammt": -2,

            "verdammt süß": 3,

            "verdammt gut": 4,

            "verdammt": -4,

            "verdammt": -4,

            "Gefahr": -2,

            "gefährlich": -2,

            "gefährlich": -2,

            "waghalsig": 2,

            "gewagt": 2,

            "dunkelste": -2,

            "Dunkelheit": -1,

            "unerschrocken": 2,

            "blendend": 3,

            "tot": -3,

            "Dämpfung": -2,

            "Deadlock": -2,

            "tödlich": -3,

            "ohrenbetäubend": -1,

            "liebe": 2,

            "liebe": 3,

            "Tod": -2,

            "Todesfälle": -2,

            "debonair": 2,

            "Schulden": -2,

            "Täuschung": -3,

            "betrügerisch": -3,

            "täuschen": -3,

            "getäuscht": -3,

            "täuscht": -3,

            "täuschen": -3,

            "Täuschung": -3,

            "täuschend": -3,

            "entscheidend": 1,

            "gewidmet": 2,

            "Widmung": 2,

            "besiegen": -2,

            "besiegt": -2,

            "defekt": -3,

            "defekt": -3,

            "Mängel": -3,

            "Verteidiger": 2,

            " Verteidiger": 2,

            "wehrlos": -2,

            "aufschieben": -1,

            "aufschieben": -1,

            "trotzhaft": -1,

            "mangelhaft": -2,

            "Mangel": -2,

            "Mängel": -2,

            "Defizit": -2,

            "deformiert": -2,

            "Deformitäten": -2,

            "Deformität": -2,

            "betrug": -3,

            "betrug": -3,

            "geschick": 2,

            "verstorben": -2,

            "abbauen": -2,

            "degradiert": -2,

            "verschlechtert": -2,

            "entmenschlichen": -2,

            "entmenschlicht": -2,

            "entmenschlicht": -2,

            "entmenschlichend": -2,

            "ablehnen": -2,

            "niedergeschlagen": -2,

            "erniedrigend": -2,

            "dejects": -2,

            "Verzögerung": -1,

            "verzögert": -1,

            "köstlich": 3,

            "lecker": 3,

            "Freude": 3,

            "erfreut": 3,

            "entzückend": 3,

            "herrlich": 3,

            "erfreulich": 3,

            "freuden": 3,

            "nachfrage": -1,

            "gefordert": -1,

            "fordernd": -1,

            "Forderungen": -1,

            "Demonstration": -1,

            "demoralisieren": -2,

            "demoralisiert": -2,

            "demoralisiert": -2,

            "demoralisierend": -2,

            "Verweigerung": -2,

            "Ablehnungen": -2,

            "verweigert": -2,

            "Verweigerer": -2,

            "Leugner": -2,

            "leugnet": -2,

            "anprangern": -2,

            "denunziert": - 2,

            "Delle": -2,

            "verweigern": -2,

            "verweigern": -2,

            "bedauern": -3,

            "bedauert": -3,

            "bedauert": -3,

            "bedauern": -3,

            "deportieren": -2,

            "deportiert": -2,

            "deportieren": -2,

            "deportiert": -2,

            "Abschiebung": -2,

            "Abschiebungen": -2,

            "depressiv": -2,

            "deprimierend": -2,

            "Entzug": -3,

            "entgleisen": -2,

            "entgleist": -2,

            "entgleisen": -2,

            "verfallen": -2,

            "verspotten": -2,

            "verspottet": -2,

            "höhnt": -2,

            "verspotten": -2,

            "Hohn": -2,

            "wünschenswert": 2,

            "Wunsch": 1,

            "Wunsch ed": 2,

            "begehrenswert": 2,

            "verzweifeln": -3,

            "verzweifeln": -3,

            "verzweifelt": -3,

            "verzweifelt": -3,

            "verzweifelt": -3,

            "mutlos": -3,

            "zerstören": -3,

            "zerstört": -3,

            "zerstören": -3,

            "zerstört": -3,

            "Zerstörung": -3,

            "zerstörerisch": -3,

            "abgetrennt": -1,

            "festhalten": -2,

            "inhaftiert": -2,

            "Haft": -2,

            "verschlechtern": -2,

            "verschlechtert": -2,

            "verschlechtert": -2,

            "verschlechtern": -2,

            "bestimmt": 2,

            "abschreckend": -2,

            "abziehen": -1,

            "abgezogen": -1,

            "schmälert": -1,

            "verwüsten": -2,

            "verwüstet": -2,

            "verheerend": -2,

            "Verwüstung": -2,

            "Verwüstungen": -2,

            "hingebungsvoll": 3,

            "Hingabe": 2,

            "hingebungsvoll": 2,

            "Diamant": 1,

            "Schwanz": -4,

            "Dickkopf": -4,

            "sterben": -3,

            "gestorben": -3,

            "schwierig": -1,

            "schüchtern": -2,

            "Würde": 2,

            "Dilemma": -1,

            "Fleiß": 2,

            "Dipshit": -3,

            "düster": -3,

            "entsetzlich": -3,

            "Schmutz": -2,

            "schmutziger": -2,

            "am schmutzigsten": -2,

            "schmutzig": -2,

            "Behinderungen": -2,

            "Behinderung": -2,

            "deaktivieren": -1,

            "Nachteil": -2,

            "benachteiligt": -2,

            "stimme nicht zu": -2,

            "unzufrieden": -2,

            "Uneinigkeit": -2,

            "verschwinden": -1,

            "verschwunden": -1,

            "verschwindet": -1,

            "enttäuscht": -2,

            "enttäuscht": -2,

            "enttäuschend": -2,

            " Enttäuschung": -2,

            "Enttäuschungen": -2,

            "enttäuscht": -2,

            "Ablehnung": -2,

            "Ablehnungen": -2,

            "ablehnen": -2,

            "abgelehnt": -2,

            "missbilligt": -2,

            "missbilligen": -2,

            "Katastrophe": -2,

            "Katastrophen": -2,

            "katastrophal": -3,

            "nicht glauben": -2,

            "verwerfen": -1,

            "verworfen": -1,

            "verwerfen": -1,

            "verwirft": -1,

            "Unterscheidung": 2,

            "Unwohlsein": -2,

            "trostlos": -2,

            "Enttäuschung": -2,

            "unzufrieden": -2,

            "Zwietracht": -2,

            "ermäßigt": - 1,

            "entmutigt": -2,

            "diskreditiert": -2,

            "unterscheiden": -2,

            "diskriminiert": -2,

            "diskriminiert": -2,

            "diskriminierend": -2,

            "diskriminierend": -2,

            "Verachtung": -2,

            "Krankheit": -1,

            "Krankheiten": -1,

            "Schande": -2,

            "beschämt": -2,

            "verkleiden": -1,

            "verkleidet": -1,

            "verkleidet": -1,

            "verkleiden": -1,

            "Ekel": -3,

            "angewidert": -3,

            "ekelhaft": -3,

            "ekelhaft": -3,

            "entmutigt": -2,

            "unehrlich": -2,

            "desillusioniert": -2,

            "abgelehnt": -2,

            "zusammenhanglos": -2,

            "mag nicht": -2,

            "unbeliebt": -2,

            "mag nicht": -2,

            "düster": -2,

            "bestürzt": -2,

            "entlassen": -2,

            "Störung": -2,

            "Störungen": -2,

            "unorganisiert": -2,

            "desorientiert": -2,

            "verunglimpfen": -2,

            "verachtet": -2,

            "verunglimpft": -2,

            "abwertend": -2,

            "unzufrieden": -2,

            "Unmut": -2,

            "unverhältnismäßig": -2,

            "Streit": -2,

            "umstritten": -2,

            "Streitigkeiten": -2,

            "bestreiten": -2,

            "disqualifiziert": -2,

            "Unruhe": -2,

            "nicht beachten": - 2,

            "nicht beachtet": -2,

            "vernachlässigen": -2,

            "nicht beachtet": -2,

            "respektlos": -2,

            "respektlos": -2,

            "stören": -2,

            "gestört": -2,

            "störend": -2,

            "Störung": -2,

            "Störungen": -2,

            "störend": -2,

            "stört": -2,

            "unzufrieden ": -2,

            "geschmacklos": -2,

            "ausgezeichnet": 2,

            "verzerren": -2,

            "verzerrt": -2,

            "verzerren": -2,

            "verzerrt": -2,

            "ablenken": -2,

            "abgelenkt": -2,

            "Ablenkung": -2,

            "lenkt ab": -2,

            "Not": -2,

            "beunruhigt": -2,

            "Noten": -2,

            "beunruhigend": -2,

            "Misstrauen": -3,

            "misstrauisch": -3,

            "stören": -2,

            "gestört": -2,

            "störend": -2,

            "stört": -2,

            "Zittern": -2,

            "umleiten": -1,

            "schwindlig": -1,

            "ausweichen": -2,

            "zwielichtig": - 2,

            "funktioniert nicht": -3,

            "schmerzhaft": -2,

            "spenden": 2,

            "gespendet": 2,

            "spendet": 2,

            "spenden": 2,

            "Spende": 2,

            "mag nicht": -2,

            "Untergang": -2,

            "verdammt": -2,

            "zweifel": -1,

            "bezweifelt": -1,

            "zweifelhaft": -1,

            "zweifeln": -1,

            "Zweifel": -1,

            "dusche": -3,

            "douchebag": -3,

            "sauer": -2,

            "bestürzt": -2,

            "Downer": -2,

            "heruntergekommen": -2,

            "Nachteil": -2,

            "ziehen": -1,

            "geschleppt": -1,

            "ziehen": -1,

            "abgelassen": -2,

            "Angst": -2,

            "gefürchtet": -2,

            "dr eadful": -3,

            "fürchten": -2,

            "traum": 1,

            "träume": 1,

            "trostlos": -2,

            "schlaff": -2,

            "fallen": -1,

            "weggefallen": -1,

            "ertrinken": -2,

            "ertrunken": -2,

            "ertrinkt": -2,

            "Plackerei": -2,

            "betrunken": -2,

            "zweifelhaft": -2,

            "blöd": -2,

            "dumpf": -2,

            "dumm": -3,

            "Dummkopf": -3,

            "dump": -1,

            "abgeladen": -2,

            "dumps": -1,

            "dupe": -2,

            "überführt": -2,

            "duper": -2,

            "dauerhaft": 2,

            "sterben": -3,

            "Dysfunktion": -2,

            "eifrig": 2,

            "ernst": 2,

            "leicht": 2,

            "einfach": 1,

            "ekstatisch": 4,

            "unheimlich": -2,

            "unheimlich": -2,

            "effektiv": 2,

            "effektiv": 2,

            "Wirksamkeit": 2,

            "mühelos": 2,

            "erfreut": 3,

            "Heiterkeit": 3,

            "elegant": 2,

            "elegant": 2,

            "peinlich": -2,

            "verlegen": -2,

            "peinlich": -2,

            "peinlich": -2,

            "Verlegenheit": -2,

            "Unterschlagung": -3,

            "verbittert": -2,

            "umarmen": 1,

            "Notfall": -2,

            "empathisch": 2,

            "ermächtigen": 2,

            "Ermächtigung": 2,

            "Leere": -1,

            "leer": -1,

            "verzaubert": 2,

            "enc ourage": 2,

            "ermutigt": 2,

            "Ermutigung": 2,

            "ermutigt": 2,

            "ermutigend": 2,

            "befürworten": 2,

            "befürwortet": 2,

            "Bestätigung": 2,

            "befürwortet": 2,

            "Feinde": -2,

            "Feind": -2,

            "energisch": 2,

            "engagieren": 1,

            "engagiert": 1,

            "verstrickt": 1,

            "fesselnd": 3,

            "genießen": 2,

            "angenehm": 2,

            "genoss": 2,

            "genießen": 2,

            "genießt": 2,

            "aufklären": 2,

            "erleuchtet": 2,

            "aufklärend": 2,

            "erleuchtet": 2,

            "langweilig": -2,

            "wüten": -2,

            "wütend": - 2,

            "erzürnt": -2,

            "wütend": -2,

            "entrückt": 3,

            "sklaven": -2,

            "versklavt": -2,

            "versklavt": -2,

            "sicherstellen": 1,

            "sicherstellen": 1,

            "unternehmungslustig": 1,

            "unterhaltsam": 2,

            "enthral": 3,

            "begeistert": 3,

            "berechtigt": 1,

            "anvertraut": 2,

            "neidet": -1,

            "neidisch": -2,

            "umweltfreundlich": 2,

            "Neid": -1,

            "neidisch": -1,

            "fehlerhaft": -2,

            "Fehler": -2,

            "Fehler": -2,

            "Flucht": -1,

            "entkommt": -1,

            "entkommen": -1,

            "Wertschätzung": 2,

            "geschätzt": 2,

            "ethisch": 2,

            "Euphorie": 3,

            "euphorisch": 4,

            "evakuieren": -1,

            "evakuiert": -1,

            "evakuiert": -1,

            "evakuieren": -1,

            "Evakuierung": -1,

            "immergrün": 2,

            "immergrün": 2,

            "immergrün": -3,

            "Räumung": -1,

            "böse": -3,

            "verschärfen": -2,

            "verschlimmert": -2,

            "verschlimmert": -2,

            "verschärfend": -2,

            "übertreiben": -2,

            "übertrieben": -2,

            "übertreibt": -2,

            "übertreiben": -2,

            "exaparat": -2,

            "verärgert": -2,

            "verärgert": -2,

            "ärgerlich": -2,

            " exzellenz": 3,

            "ausgezeichnet": 3,

            "aufregen": 3,

            "aufgeregt": 3,

            "Aufregung": 3,

            "aufregend": 3,

            "ausschließen": -1,

            "ausgeschlossen": -2,

            "Ausschluss": -1,

            "exklusiv": 2,

            "entsetzlich": -1,

            "Entschuldigung": -1,

            "befreit": -1,

            "erschöpft": -2,

            "begeistert bewertet": 3,

            "erregt": 3,

            "berauschend": 3,

            "entlasten": 2,

            "entlastet": 2,

            "entlastet": 2,

            "entlasten": 2,

            "erweitern": 1,

            "erweitert": 1,

            "vertreiben": -2,

            "vertrieben": -2,

            "vertreiben": -2,

            "vertreibt": -2,

            "fachmännisch": 2,

            "ausbeuten": -2,

            "ausgenutzt": -2,

            "ausbeuten": -2,

            "ausbeuten": -2,

            "Erkundung": 1,

            "Erkundungen": 1,

            "aussetzen": -1,

            "exponiert": -1,

            "exponiert": -1,

            "aussetzen": -1,

            "exquisit": 3,

            "erweitern": 1,

            "erweitert": 1,

            " extrem": -2,

            "Extremisten": -2,

            "überschwänglich": 4,

            "jubelnd": 3,

            "jubelnd": 3,

            "fabelhaft": 4,

            "fabelhaft": 4,

            "Mode": -2,

            "Schwuchtel": -3,

            "Schwuchtel": -3,

            "Schwuchteln": -3,

            "fehlgeschlagen": -2,

            "fehlgeschlagen": -2,

            "fehlgeschlagen": -2,

            "fehlgeschlagen": -2,

            "Fehler": -2,

            "Ausfälle": -2,

            "zappelig": -2,

            "fair": 2,

            "Fairness": 2,

            "Glaube": 1,

            "treu": 3,

            "falsch": -3,

            "Fälscher": -3,

            "Fälschungen": -3,

            "fälschen": -3,

            "gefallen": -2,

            "fallen": -1,

            "falsch": -1,

            "falsch": -2,

            "gefälscht": -3,

            "falsifizieren": -3,

            "Ruhm": 1,

            "hunger": -2,

            "berühmt": 2,

            "Lüfter": 3,

            "fantastisch": 4,

            "Farce": -1,

            "faszinieren": 3,

            "fasziniert": 3,

            "fasziniert": 3,

            "faszinierend": 3,

            "Faszination": 3,

            "faschistisch": -2,

            "Faschisten": -2,

            "tödlich": -3,

            "Todesfälle": -3,

            "Todesfall": -3,

            "Müdigkeit": -2,

            "müde": -2,

            "Müdigkeit": -2,

            "ermüdend": -2,

            "bevorzugen": 2,

            "günstig": 2,

            "günstig": 2,

            "bevorzugt": 2,

            "Favorit": 2,

            "Favorit": 2,

            "Favoriten": 2,

            "Gefälligkeiten": 2,

            "Gefallen": 2,

            "günstig": 2,

            "günstig": 2,

            "bevorzugt": 2,

            "Favorit": 2,

            "bevorzugt": 2,

            "Favoriten": 2,

            "Gefälligkeiten": 2,

            "Angst": -2,

            "ängstlich": -2,

            "ängstlich": -2,

            "fürchten": -2,

            "furchtlos": 2,

            "Furchtlosigkeit": 2,

            "furchterregend": -2,

            "satt": -3,

            "schwach": -2,

            "Gefühl": 1,

            "Verbrechen": -3,

            "Verbrechen": -3,

            "fruchtbar": 2,

            "eifrig": 2,

            "eifrig": 2,

            "festlich": 2,

            "Fieber": -2,

            "Fiasko": -3,

            "fidg etty": -2,

            "Kampf": -1,

            "kämpfen": -2,

            "gut": 2,

            "Geldstrafen": -2,

            "am besten": 3,

            "Feuer": -2,

            "gefeuert": -2,

            "feuern": -2,

            "passen": 1,

            "fitness": 1,

            "Dreck": -2,

            "dreckig": -2,

            "Flaggschiff": 2,

            "Fehler": -2,

            "fehlerhaft": -3,

            "fehlerfrei": 2,

            "fehlerfrei": 2,

            "Fehler": -2,

            "flieht": -1,

            "flop": -2,

            "flops": -2,

            "Grippe": -2,

            "aufgeregt": -2,

            "fokussiert": 2,

            "lieb": 2,

            "Vorliebe": 2,

            "Dummkopf": -2,

            "töricht": -2,

            "Narren": -2,

            "verbieten": -1,

            "verboten": -2,

            "verbieten": -2,

            "erzwungen": -1,

            "Abschottung": -2,

            "Zwangsvollstreckungen": -2,

            "Vorderseite": 1,

            "vergessen": -1,

            "vergessen": -2,

            "vergesslich": -1,

            "verzeihen": 1,

            "verzeihen": 1,

            "vergessen": -1,

            "vergessen": -1,

            "Glück": 2,

            "Glück": 2,

            "zum Glück": 2,

            "faul": -3,

            "hektisch": -1,

            "Betrug": -4,

            "Betrug": -4,

            "Betrüger": -4,

            "Betrüger": -4,

            "Betrug": -4,

            "betrügerisch": -4,

            "Freak": -2,

            "kostenlos": 1,

            "Freiheit": 2,

            "Freiheiten": 2,

            "Raserei": -3,

            "frisch": 1,

            "Freund": 1,

            "Freundlichkeit": 2,

            "freundlich": 2,

            "Freundschaft": 2,

            "schreck": -2,

            "erschrocken": -2,

            "erschreckend": -3,

            "frikin": -2,

            "verspielt": 2,

            "die Stirn runzeln": -1,

            "fruchtlos": -2,

            "frustrieren": -2,

            "frustriert": -2,

            "frustriert": -2,

            "frustrierend": -2,

            "Frust": -2,

            "ftw": 3,

            "ficken": -4,

            "gefickt": -4,

            "Ficker": -4,

            "Ficker": -4,

            "Fickgesicht": -4,

            "Fickkopf": -4,

            "verdammt": -4,

            "verdammt": -4,

            "verdammt toll": 4,

            "fuck king beautiful": 4,

            "verdammt süß": 4,

            "verdammt fantastisch": 4,

            "verdammt gut": 4,

            "verdammt toll": 4,

            "verdammt heiß": 2,

            "verdammte Liebe": 4,

            "verdammt liebt": 4,

            "verdammt perfekt": 4,

            "fuckard": -4,

            "fud": -3,

            "gefickt": -4,

            "verdammt": -4,

            "erfüllen": 2,

            "erfüllt": 2,

            "Erfüllung": 2,

            "erfüllt": 2,

            "rauchend": -2,

            "Spaß": 4,

            "Beerdigung": -1,

            "Beerdigungen": -1,

            "funky": 2,

            "lustiger": 4,

            "lustig": 4,

            "wütend": -3,

            "sinnlos": -2,

            "knebel": -2,

            "geknebelt": -2,

            "gewinnen": 2,

            "gewonnen": 2,

            "gewinnen": 2,

            "Gewinne": 2,

            "galant": 3,

            "galant": 3,

            "galanterie": 3,

            "spielverändernd": 3,

            "Müll": -1,

            "Juwel": 3,

            "großzügig": 2,

            "großzügig": 2,

            "genial": 3,

            "grässlich": -2,

            "Geist": -1,

            "schwindlig": -2,

            "Geschenk": 2,

            "froh": 3,

            "glamourös": 3,

            "glamourös": 3,

            "Freude": 3,

            "freudig": 3,

            "düster": -1,

            "düster": -2,

            "herrlich": 2,

            "Ruhm": 2,

            "düster": -2,

            "Gott": 1,

            "verdammt": -3,

            "Gottesgabe": 4,

            "gold": 2,

            "gut": 3,

            "gutaussehend": 3,

            "Guten Morgen": 1,

            "Güte": 3,

            "Goodwill": 3,

            "albern": -2,

            "albern": -2,

            "Gnade": 1,

            "anmutig": 2,

            "gnädig": 3,

            "groß": 3,

            "erteilen": 1,

            "erteilt": 1,

            "erteilen": 1,

            "Stipendien": 1,

            "dankbar": 3,

            "Befriedigung": 2,

            "Grab": -2,

            "grau": -1,

            "grausig": -2,

            "gr8": 3,

            "großartig": 3,

            "größer": 3,

            "am Größten": 3,

            "Gier": -3,

            "gierig": -2,

            "grüne Wäsche": -3,

            "grüne Wäsche": -3,

            "grüne nwash": -3,

            "Grünwäscher": -3,

            "Grünwäscher": -3,

            "Greenwashing": -3,

            "grüßen": 1,

            "begrüßt": 1,

            "Gruß": 1,

            "Grüße": 2,

            "grüßt": 1,

            "grau": -1,

            "Trauer": -2,

            "bekümmert": -2,

            "grimmig": -2,

            "greifen": 2,

            "stöhnen": -2,

            "gestöhnt": -2,

            "stöhnen": -2,

            "stöhnt": -2,

            "brutto": -2,

            "wachsen": 1,

            "Wachstum": 2,

            "Wachstum": 2,

            "grausam": -3,

            "garantie": 1,

            "Schuld": -3,

            "schuldig": -3,

            "leichtgläubigkeit": -2,

            "leichtgläubig": -2,

            "Waffe": -1,

            "ha": 2,

            "gehackt": -1,

            "haha": 3,

            "hahaha": 3,

            "hahaha": 3,

            "hagel": 2,

            "gegrüßt": 2,

            "halleluja": 3,

            "handverlesen": 1,

            "schön": 3,

            "glücklos": -2,

            "Unglück": -2,

            "am glücklichsten": 3,

            "Glück": 3,

            "glücklich": 3,

            "belästigen": -3,

            "belästigt": -3,

            "belästigt": -3,

            "belästigend": -3,

            "Belästigung": -3,

            "schwer": -1,

            "härter": 2,

            "Not": -2,

            "hart": 2,

            "schaden": -2,

            "geschädigt": -2,

            "schädlich": -2,

            "schädlich": -2,

            "Harmonie": 2,

            "harmonisch": 2,

            "h einstimmig": 2,

            "schaden": -2,

            "gestört": -2,

            "hart": -2,

            "härter": -2,

            "am härtesten": -2,

            "hart": -2,

            "hass": -3,

            "gehasst": -3,

            "Hasser": -3,

            "Hasser": -3,

            "hasst": -3,

            "hassen": -3,

            "Hass": -3,

            "heimat": -1,

            "heimgesucht": -2,

            "eindringlich": 1,

            "heimsucht": -1,

            "Verwüstung": -2,

            "gefährlich": -3,

            "Kopfschmerzen": -2,

            "gesund": 2,

            "herzzerreißend": -3,

            "mit gebrochenem Herzen": -3,

            "von Herzen": 3,

            "herzlos": -2,

            "herzerwärmend": 3,

            "Himmel": 2,

            "himmlisch": 4,

            " hochherzig": -2,

            "hehe": 2,

            "Hölle": -4,

            "höllisch": -2,

            "Hilfe": 2,

            "hilfreich": 2,

            "helfen": 2,

            "hilflos": -2,

            "hilft": 2,

            "Held": 2,

            "Helden": 2,

            "heroisch": 3,

            "zögerlich": -2,

            "zögern": -2,

            "versteckt": -1,

            "verstecken": -1,

            "abscheulich": -3,

            "versteckt": -1,

            "verstecken": -1,

            "hervorheben": 2,

            "urkomisch": 2,

            "hindern": -2,

            "Hindernis": -2,

            "Scherz": -2,

            "hohl": -1,

            "obdachlos": -2,

            "Heimweh": -2,

            "Mord": -2,

            "Morde": -2,

            "ehrlich": 2,

            "ho noch": 2,

            "geehrt": 2,

            "ehren": 2,

            "Ehre": 2,

            "geehrt": 2,

            "ehren": 2,

            "Hooligan": -2,

            "Rowdytum": -2,

            "Hooligans": -2,

            "hoffen": 2,

            "hoffnungsvoll": 2,

            "hoffentlich": 2,

            "hoffnungslos": -2,

            "Hoffnungslosigkeit": -2,

            "hofft": 2,

            "hoffen": 2,

            "schrecklich": -3,

            "schrecklich": -3,

            "schrecklich": -3,

            "schrecklich": -3,

            "entsetzt": -3,

            "im Krankenhaus": -2,

            "feindlich": -2,

            "Huckster": -2,

            "umarmen": 2,

            "riesig": 1,

            "umarmt": 2,

            "menschlich": 2,

            " demütig": 1,

            "humbug": -2,

            "humorvoll": 3,

            "erniedrigt": -3,

            "Erniedrigung": -3,

            "Humor": 2,

            "humorvoll": 2,

            "Humor": 2,

            "humorvoll": 2,

            "Hunger": -2,

            "hurra": 5,

            "verletzen": -2,

            "verletzend": -2,

            "schmerzt": -2,

            "heuchlerisch": -2,

            "Hysterie": -3,

            "hysterisch": -3,

            "Hysterik": -3,

            "eklig": -3,

            "Idiotie": -3,

            "Idiot": -3,
            "idiot": -3,
            "idioten": -3,

            "idiotisch": -3,

            "Unwissenheit": -2,

            "unwissend": -2,

            "ignorieren": -1,

            "ignoriert": -2,

            "ignoriert": -1,

            "krank": -2,

            "unglücklich": -2,

            "illegal": -3,

            "illegal": -3,

            "illegitim": -3,

            "Analphabetismus": -2,

            "Krankheit": -2,

            "Krankheiten": -2,

            "unlogisch": -2,

            "phantasievoll": 2,

            "Idiot": -3,

            "immobilisiert": -1,

            "unsterblich": 2,

            "immun": 1,

            "beeinträchtigen": -2,

            "beeinträchtigt": -2,

            "beeinträchtigen": -2,

            "Beeinträchtigung": -2,

            "beeinträchtigt": -2,

            "ungeduldig": -2,

            "Anklage": -3,

            "Anklagen": -3,

            "hindern": -2,

            "behindert": -2,

            "hindert": -2,

            "hindern": -2,

            "behindert": -2,

            "unvollkommen": - 2,

            "Bedeutung": 2,

            "wichtig": 2,

            "auferlegen": -1,

            "auferlegt": -1,

            "erlegt": -1,

            "imponierend": -1,

            "Betrüger": -2,

            "impotent": -2,

            "beeindrucken": 3,

            "beeindruckt": 3,

            "beeindruckt": 3,

            "beeindruckend": 3,

            "eingesperrt": -2,

            "Gefangenschaft": -2,

            "falsch": -2,

            "falsch": -2,

            "verbessern": 2,

            "verbessert": 2,

            "Verbesserung": 2,

            "verbessert": 2,

            "verbessern": 2,

            "Unfähigkeit": -2,

            "Untätigkeit": -2,

            "unzureichend": -2,

            "versehentlich": -2,

            "unangemessen": -2,

            "in der Lage": -2,

            "unfähig": -2,

            "unfähig": -2,

            "unfähig machen": -2,

            "Weihrauch": -2,

            "erzürnt": -2,

            "Weihrauch": -2,

            "inzensieren": -2,

            "inkohärent": -2,

            "Inkompetenz": -2,

            "inkompetent": -2,

            "unvollständig": -1,

            "unverständlich": -2,

            "rücksichtslos": -2,

            "Unannehmlichkeiten": -2,

            "unbequem": -2,

            "erhöhen": 1,

            "erhöht": 1,

            "unentschlossen": -2,

            "unzerstörbar": 2,

            "angeklagt": -2,

            "Gleichgültigkeit": -2,

            "gleichgültig": -2,

            " empört": -2,

            "Empörung": -2,

            "indoktrinieren": -2,

            "indoktriniert": -2,

            "indoktriniert": -2,

            "indoktrinieren": -2,

            "ungenießbar": -2,

            "unerbittlich": -3,

            "unentschuldbar": -3,

            "unwirksam": -2,

            "unwirksam": -2,

            "unwirksam": -2,

            "Ineffizienz": -2,

            "ineffizient": -2,

            "ineffizient": -2,

            "unfähig": -2,

            "Unfähigkeit": -2,

            "Kinder": -2,

            "infantilisiert": -2,

            "verliebt": 2,

            "Verliebtheit": 2,

            "infizieren": -2,

            "infiziert": -2,

            "infizieren": -2,

            "Infektion": -2,

            "Infektionen": -2,

            "ansteckend": -2,

            "infiziert": -2,

            "minderwertig": -2,

            "befallen": -2,

            "befallen": -2,

            "befallen": -2,

            "befällt": -2,

            "entzündet": -2,

            "zufügen": -2,

            "zugefügt": -2,

            "zufügen": -2,

            "fügt zu": -2,

            "einflussreich": 2,

            "verletzen": -2,

            "verletzt": -2,

            "verletzen": -2,

            "verletzt": -2,

            "Verstoß": -2,

            "wüten": -2,

            "wütend": -2,

            "erregt": -2,

            "wütend": -2,

            "unterdrücken": -1,

            "unmenschlich": -2,

            "verletzt": -2,

            "Verletzungen": -2,

            "Verletzung": -2,

            "Ungerechtigkeit": -2,

            "innovieren": 1,

            "innoviert": 1,

            "Innovation": 1,

            "innovativ": 2,

            "nicht funktionsfähig": -2,

            "Inquisition": -2,

            "wissbegierig": 2,

            "wahnsinnig": -2,

            "Wahnsinn": -2,

            "unsicher": -2,

            "unempfindlich": -2,

            "Unempfindlichkeit": -2,

            "unbedeutend": -2,

            "faul": -2,

            "insolvent": -2,

            "Schlaflosigkeit": -2,

            "inspiration": 2,

            "inspirierend": 2,

            "inspirieren": 2,

            "inspiriert": 2,

            "inspiriert": 2,

            "inspirierend": 3,

            "Mangel": -2,

            "ungenügend": -2,

            "unzureichend": -2,

            "Beleidigung": -2,

            "beleidigt": -2,

            "beleidigend": -2,

            "Beleidigungen": -2,

            "intakt": 2,

            "Integrität": 2,

            "intelligent": 2,

            "intensiv": 1,

            "Interesse": 1,

            "interessiert": 2,

            "interessant ": 2,

            "Interessen": 1,

            "verhört": -2,

            "unterbrechen": -2,

            "unterbrochen": -2,

            "unterbrechen": -2,

            "Unterbrechung": -2,

            "unterbricht": -2,

            "Intimität": 2,

            "einschüchtern": -2,

            "eingeschüchtert": -2,

            "einschüchtert": -2,

            "einschüchternd": -2,

            " Einschüchterung": -2,

            "Unnachgiebigkeit": -2,

            "Unnachgiebigkeit": -2,

            "kompliziert": 2,

            "Intrigen": 1,

            "Invasion": -1,

            "unbesiegbar": 2,

            "einladen": 1,

            "einladend": 1,

            "unverwundbar": 2,

            "wütend": -3,

            "ironisch": -1,

            "Ironie": -1,

            "irrational": -1,

            "irreparabel": -2,

            "irreproduzierbar": -2,

            "unwiderstehlich": 2,

            "unwiderstehlich": 2,

            "unentschlossen": -2,

            "unverantwortlich": -2,

            "unverantwortlich": -2,

            "irreversibel": -1,

            "irreversibel": -1,

            "reizen": -3,

            "irritiert": -3,

            "reizt": -3,

            "irritierend": -3,

            "isoliert": -1,

            "jucken": -2,

            "esel": -4,

            "Esel": -4,

            "inhaftiert": -2,

            "fröhlich": 2,

            "eifersüchtig": -2,

            "Eifersucht": -2,

            "Gefahr": -2,

            "Ruck": -3,

            "Jesus": 1,

            "Juwel": 1,

            "Juwelen": 1,

            "scherzhaft": 2,

            "beitreten": 1,

            "Witz": 2,

            "Witze": 2,

            "lustig": 2,

            "jovial": 2,

            "Freude": 3,

            "freudig": 3,

            "freudig": 3,

            "freudlos": -2,

            "freudig": 3,

            "jubelnd": 3,

            "sprunghaft": -1,

            "Gerechtigkeit": 2,

            "zu Recht": 2,

            "begründet ": 2,

            "eifrig": 1,

            "Rückschlag": -3,

            "Rückschläge": -3,

            "entführen": -2,

            "entführt": -2,

            "Entführung": -2,

            "Entführungen": -2,

            "Entführungen": -2,

            "töten": -3,

            "getötet": -3,

            "töten": -3,

            "tötet": -3,

            "freundlich": 2,

            "irgendwie": 0,

            "kinder": 2,

            "Freundlichkeit": 2,

            "küssen": 2,

            "ein großes Lob": 3,

            "mangel": -2,

            "mangelhaft": -2,

            "lag": -1,

            "verzögert": -2,

            "nacheilend": -2,

            "hinkt": -2,

            "lahm": -2,

            "Wahrzeichen": 2,

            "verfallen": -1,

            "verfallen": -1,

            "lachen": 1,

            "lacht": 1,

            "lachen ": 1,

            "lacht": 1,

            "lachen": 1,

            "gestartet": 1,

            "lawl": 3,

            "Klage": -2,

            "Klagen": -2,

            "faul": -1,

            "Führung": 1,

            "führend": 2,

            "Leck": -1,

            "durchgesickert": -1,

            "verlassen": -1,

            "legal": 1,

            "legal": 1,

            "nachsichtig": 1,

            "tödlich": -2,

            "Tödlichkeit": -2,

            "lethargisch": -2,

            "Lethargie": -2,

            "Lügner": -3,

            "Lügner": -3,

            "verleumderisch": -2,

            "gelogen": -2,

            "leblos": -1,

            "Lebensretter": 4,

            "leichtherzig": 1,

            "sympathisch": 2,

            "gefällt mir": 2,

            "sympathisch": 2,

            " gefiel mir": 2,

            "Likes": 2,

            "gefällt mir": 2,

            "Gefällt mir": 2,

            "Einschränkung": -1,

            "begrenzt": -1,

            "Grenzen": -1,

            "Rechtsstreit": -1,

            "streitig": -2,

            "lebendig": 2,

            "livid": -2,

            "lmao": 4,

            "lmfao": 4,

            "verabscheuen": -3,

            "verabscheut": -3,

            "verabscheut": -3,

            "Abscheu": -3,

            "ekelhaft": -3,

            "beeinflusst": -2,

            "Lobby": -2,

            "Lobbyarbeit": -2,

            "Lobbyist": -2,

            "Lobbyisten": -2,

            "lol": 3,

            "lolol": 4,

            "lololol": 4,

            "lolololol": 4,

            "einsam": -2,

            "einsam": -2,

            "Sehnsucht": -1,

            "lool": 3,

            "webstuhl": -1,

            "aufgetaucht": -1,

            "droht": -1,

            "webt": -1,

            "loool": 3,

            "looool": 3,

            "lose": -3,

            "verliert": -3,

            "Verlierer": -3,

            "verlieren": -3,

            "Verlust": -3,

            "Verluste": -3,

            "verloren": -3,

            "lausig": -2,

            "liebenswert": 3,

            "liebe": 3,

            "geliebt": 3,

            "Lieben": 3,

            "schön": 3,

            "liebt": 3,

            "liebevoll": 2,

            "liebevolle Güte": 3,

            "niedrigste": -1,

            "treu": 3,

            "Loyalität": 3,

            "Glück": 3,

            "zum Glück": 3,

            "Glück": 3,

            "lukrativ": 3,

            "lächerlich": -3,

            "düster": -2,

            "verrückt": -3,

            "Verrückte": -3,

            "lauern": -1,

            "lauern": -1,

            "lauert": -1,

            "Luxus": 2,

            "makaber": -2,

            "verrückt": -3,

            "wahnsinnig": -3,

            "erfunden": -1,

            "wahnsinnig": -3,

            "Wahnsinn": -3,

            "großartig": 3,

            "Fehlanpassung": -2,

            "Fehlentwicklung": -2,

            "Mißhandlung": -2,

            "obligatorisch": -1,

            "manipuliert": -1,

            "manipulieren": -1,

            "Manipulation": -1,

            "Totschlag": -3,

            "wundern": 3,

            "wunderbar": 3,

            "Wunder": 3,

            "Meisterwerk": 4,

            "Meisterwerke": 4,

            "Angelegenheit": 1,

            "angelegenheiten": 1,

            "reif": 2,

            "sinnvoll": 2,

            "bedeutungslos": -2,

            "Medaille": 3,

            "Mittelmaß": -3,

            "meditativ": 1,

            "melancholisch": -2,

            "unvergesslich": 1,

            "Erinnerung": -2,

            "bedrohen": -2,

            "bedroht": -2,

            "bedroht": -2,

            "Gnade": 2,

            "fröhlich": 3,

            "faszinierend": 3,

            "Durcheinander": -2,

            "durcheinander": -2,

            "vermasseln": -2,

            "methodisch": 2,

            "methodisch": 2,

            "geistlos": -2,

            "Wunder": 4,

            "Heiterkeit": 3,

            "lustig": 3,

            "lustig": 3,

            "fehlverhalten": -2,

            "sich schlecht benommen": -2,

            "sich schlecht benehmen": -2,

            "Fehlverhalten": -2,

            "Fehlmarken": -3,

            "fehlbesetzt": -2,

            "Unfug": -1,

            "Unfug": -1,

            "falsch klassifiziert": -2,

            "falsch klassifiziert": -2,

            "falsch klassifizieren": -2,

            "Fehlverhalten": -2,

            "fehlgeleitet": -2,

            "Fehlleitung": -2,

            "Fehlverhalten ": -2,

            "elend": -3,

            "erbärmlich": -3,

            "Elend": -2,

            "Fehlzündung": -2,

            "Unglück": -2,

            "bedenken": -2,

            "Fehlinformationen": -2,

            "falsch informiert": -2,

            "fehlinterpretiert": -2,

            "irreführen": -3,

            "irregeführt": -3,

            "irreführend": -3,

            "Misle- Anzeigen": -3,

            "fehlplatzieren": -2,

            "fehlplatziert": -2,

            "fehlplatziert": -2,

            "verlegen": -2,

            "Fehlbewertung": -3,

            "falsch gelesen": -1,

            "Fehlmeldung": -2,

            "falsch gemeldet": -2,

            "Fehlmeldung": -2,

            "Fehlberichte": -2,

            "falsch darstellen": -2,

            "falsche Darstellung": -2,

            "falsche Darstellungen": -2,

            "falsch dargestellt": -2,

            "falsch darstellen": -2,

            "stellt falsch dar": -2,

            "fehlen": -2,

            "verpasst": -2,

            "fehlt": -2,

            "Fehler": -2,

            "fehlerhaft": -2,

            "Fehler": -2,

            "irre": -2,

            "missunde rstand": -2,

            "Missverständnis": -2,

            "missversteht": -2,

            "missverstanden": -2,

            "Missbrauch": -2,

            "missbraucht": -2,

            "Missbrauch": -2,

            "Missbrauch": -2,

            "stöhnen": -2,

            "gestöhnt": -2,

            "stöhnen": -2,

            "stöhnt": -2,

            "spotten": -2,

            "verspottet": -2,

            "verspotten": -2,

            "spottet": -2,

            "modernisieren": 2,

            "modernisiert": 2,

            "modernisiert": 2,

            "modernisieren": 2,

            "Hetze": -2,

            "monopolisieren": -2,

            "monopolisiert": -2,

            "monopolisiert": -2,

            "monopolisieren": -2,

            "monoton": -1,

            "launisch": -1,

            "mope": -1,

            "trüb": -1,

            "Idiot": -3,

            "Mutterficker": -5,

            "mutterficken": -5,

            "motivieren": 1,

            "motiviert": 2,

            "motivierend": 2,

            "Motivation": 1,

            "trauern": -2,

            "betrauert": -2,

            "trauer": -2,

            "Trauer": -2,

            "trauert": -2,

            "matschig": -2,

            "mumpisch": -2,

            "Mord": -2,

            "Mörder": -2,

            "Mord": -3,

            "mörderisch": -3,

            "Morde": -2,

            "düster": -2,

            "Mythos": -1,

            "n00b": -2,

            "naiv": -2,

            "Narzissmus": -2,

            "böse": -3,

            "natürlich": 1,

            "naiv": -2,

            "bedürftig": -2,

            "negativ": -2,

            "Negativität": -2,

            "vernachlässigen": -2,

            "vernachlässigt": -2,

            "vernachlässigen": -2,

            "vernachlässigt": -2,

            "nerven": -1,

            "nervös": -2,

            "nervös": -2,

            "schön": 3,

            "schick": 2,

            "niggas": -5,

            "Nigger": -5,

            "nein": -1,

            "kein Spaß": -3,

            "edel": 2,

            "edelste": 2,

            "laut": -1,

            "nicht genehmigt": -2,

            "Unsinn": -2,

            "noob": -2,

            "nasy": -2,

            "nicht gut": -2,

            "funktioniert nicht": -3,

            "bemerkenswert": 2,

            "auffällig": 2,

            "berüchtigt": -2,

            "kein vel": 2,

            "taub": -1,

            "Pflege": 2,

            "Nüsse": -3,

            "auslöschen": -2,

            "ausgelöscht": -2,

            "ekelhaft": -3,

            "obszön": -2,

            "Obszönität": -2,

            "besessen": 2,

            "veraltet": -2,

            "Hindernis": -2,

            "Hindernisse": -2,

            "stur": -2,

            "hindern": -2,

            "behindert": -2,

            "behindert": -2,

            "Behinderung": -2,

            "behindert": -2,

            "ungerade": -2,

            "Straftat": -2,

            "Straftaten": -2,

            "beleidigen": -2,

            "beleidigt": -2,

            "Täter": -2,

            "beleidigend": -2,

            "beleidigt": -2,

            "Beleidigung": -2,

            "Straftaten": -2,

            "offensiv": -2,

            "offensiv": -2,

            "offline": -1,

            "ok": 2,

            "unheilvoll": 3,

            "einmal im Leben": 3,

            "oops": -2,

            "Chancen": 2,

            "Gelegenheit": 2,

            "unterdrückt": -2,

            "Unterdrückung": -2,

            "Unterdrücke": -2,

            "bedrückend": -2,

            "Optimismus": 2,

            "optimistisch": 2,

            "wahllos": -2,

            "ausgrenzen": -2,

            "ausgegrenzt": -2,

            "ausgrenzt": -2,

            "autsch": -2,

            "Ausfall": -2,

            "Ausfälle": -2,

            "Ausbruch": -2,

            "Ausbrüche": -2,

            "Aufschrei": -2,

            "ausmanövriert": -2,

            "unterlegen": -2,

            "Empörung": -3,

            "empört": -3,

            "empörend": -3,

            "Ausstrahlung": 2,

            "hervorragend": 5,

            "überglücklich": 4,

            "Überlastung": -1,

            "übersehen": -1,

            "überfürsorglich": -2,

            "überrannt": -2,

            "überreagieren": -2,

            "o verreagiert": -2,

            "überreagieren": -2,

            "Überreaktion": -2,

            "überreagiert": -2,

            "überverkaufen": -2,

            "überverkauft": -2,

            "überverkauft": -2,

            "Aufsicht": -1,

            "Übervereinfachung": -2,

            "übervereinfacht": -2,

            "vereinfacht": -2,

            "übervereinfachen": -2,

            "überverkauft": -2,

            "Übertreibung": -2,

            "Übertreibungen": -2,

            "übergewichtig": -1,

            "überreizt": -3,

            "Oxymoron": -1,

            "Schmerz": -2,

            "schmerzt": -2,

            "schmerzhaft": -2,

            "Panik": -3,

            "in Panik geraten": -3,

            " Panik": -3,

            "Paradies": 3,

            "paradox": -1,

            "Entschuldigung": 2,

            "begnadigt": 2,

            "verzeihen": 2,

            "Entschuldigung": 2,

            "Verhandeln": -1,

            "Leidenschaft": 1,

            "leidenschaftlich": 2,

            "passiv": -1,

            "passiv": -1,

            "erbärmlich": -2,

            "bezahlen": -1,

            "Frieden": 2,

            "friedlich": 2,

            "friedlich": 2,

            "bestrafen": -2,

            "bestraft": -2,

            "bestraft": -2,

            "bestrafen": -2,

            "Strafe": -2,

            "nachdenklich": -1,

            "perfekt": 3,

            "perfektioniert": 2,

            "Vollkommenheit": 3,

            "perfekt": 3,

            "perfekt": 2,

            "Gefahr": -2,

            "Eidechse ": -3,

            "verübt": -2,

            "Täter": -2,

            "Täter": -2,

            "perplex": -2,

            "verfolgen": -2,

            "verfolgt": -2,

            "verfolgt": -2,

            "Verfolgung": -2,

            "gestört": -2,

            "pervers": -3,

            "nervig": -2,

            "Pessimismus": -2,

            "pessimistisch": -2,

            "versteinert": -2,

            "Philanthropie": 2,

            "phobisch": -2,

            "malerisch": 2,

            "anhäufen": -1,

            "Plünderung": -2,

            "piken": -2,

            "piquiert": -2,

            "pissen": -4,

            "sauer": -4,

            "pissen": -3,

            "erbärmlich": -2,

            "mitleid": -1,

            "mitleid": -2,

            "Pest": -3,

            "geplagt": -3,

            "Plagen": -3,

            "plagen": -3,

            "verspielt": 2,

            "angenehm": 3,

            "bitte": 1,

            "erfreut": 3,

            "angenehm": 3,

            "Vergnügen": 3,

            "stolpern": -2,

            "ergreifend": 2,

            "sinnlos": -2,

            "ausgeglichen": -2,

            "Gift": -2,

            "vergiftet": -2,

            "Gifte": -2,

            "poliert": 2,

            "höflich": 2,

            "Höflichkeit": 2,

            "Schadstoff": -2,

            "verschmutzen": -2,

            "verschmutzt": -2,

            "Verschmutzer": -2,

            "Verschmutzer": -2,

            "verschmutzt": -2,

            "Verschmutzung ": -2,

            "schlecht": -2,

            "ärmer": -2,

            "am schlechtesten": -2,

            "schlecht": -2,

            "beliebt": 3,

            "Beliebtheit": 3,

            "positiv": 2,

            "positiv": 2,

            "besitzergreifend": -2,

            "posttraumatisch": -2,

            "aufschieben": -1,

            "verschoben": -1,

            "verschiebt": -1,

            "aufschieben": -1,

            "Armut": -1,

            "mächtig": 2,

            "machtlos": -2,

            "Lob": 3,

            "gelobt": 3,

            "lobt": 3,

            "loben": 3,

            "beten": 1,

            "beten": 1,

            "betet": 1,

            "prblm": -2,

            "prblms": -2,

            "räuberisch": -2,

            "vorbereitet ": 1,

            "Druck": -1,

            "unter Druck": -2,

            "vorgeben": -1,

            "vorgeben": -1,

            "tut vor": -1,

            "hübsch": 1,

            "verhindern": -1,

            "verhindert": -1,

            "verhindern": -1,

            "verhindert": -1,

            "stechen": -5,

            "Gefängnis": -2,

            "Gefangener": -2,

            "Gefangene": -2,

            "privilegiert": 2,

            "proaktiv": 2,

            "Problem": -2,

            "Probleme": -2,

            "Gewinn": 2,

            "profitabel": 2,

            "profiteur": -2,

            "Gewinne": 2,

            "Fortschritt": 2,

            "verbieten": -1,

            "verbietet": -1,

            "hervorragend": 2,

            "versprechen": 1,

            "versprochen ": 1,

            "verspricht": 1,

            "fördern": 1,

            "befördert": 1,

            "fördert": 1,

            "fördern": 1,

            "sofort": 1,

            "Propaganda": -2,

            "anklagen": -1,

            "verfolgt": -2,

            "verfolgt": -1,

            "Strafverfolgung": -1,

            "Aussicht": 1,

            "Aussichten": 1,

            "Wohlstand ": 3,

            "wohlhabend": 3,

            "schützen": 1,

            "geschützt": 1,

            "schützt": 1,

            "protest": -2,

            "Demonstranten": -2,

            "protestieren": -2,

            "Proteste": -2,

            "stolz": 2,

            "stolz": 2,

            "provozieren": -1,

            "provoziert": -1,

            "provoziert": -1,

            "provozieren": -1,

            "Umsicht": 2,

            "Pseudowissenschaft": -3,

            "psychopathisch": -2,

            "bestrafen": -2,

            "bestraft": -2,

            "bestraft": -2,

            "bestrafen": -2,

            "Strafe": -2,

            "rein": 1,

            "reinste": 1,

            "zweckgerichtet": 2,

            "aufdringlich": -1,

            "verwirrt": -2,

            "beben ": -2,

            "Qualitäten": 2,

            "Qualität": 2,

            "fraglich": -2,

            "befragt": -1,

            "befragen": -1,

            "Rassismus": -3,

            "rassistisch": -3,

            "Rassisten": -3,

            "Wut": -2,

            "wütend": -2,

            "regnerisch": -1,

            "rant": -3,

            "Ranter": -3,

            "Ranter": -3,

            "rantes": -3,

            "Vergewaltigung": -4,

            "vergewaltigt": -4,

            "Vergewaltiger": -4,

            "Entrückung": 2,

            "entrückt": 2,

            "Entzücken": 2,

            "entzückt": 4,

            "Ausschlag": -2,

            "ratifiziert": 2,

            "erreichen": 1,

            "erreicht": 1,

            "erreicht": 1,

            "erreichen": 1,

            "beruhigen": 1,

            "beruhigt": 1,

            "beruhigt": 1,

            "beruhigend": 2,

            "Rebell": -2,

            "Rebellion": -2,

            "Rebellen": -2,

            "Rezession": -2,

            "rücksichtslos": -2,

            "Anerkennung": 2,

            "empfehlen": 2,

            "empfohlen": 2,

            "empfohlen": 2,

            "eingelöst": 2,

            "verfeinern": 1,

            "raffiniert": 1,

            "verfeinert": 1,

            "erfrischend": 2,

            "verweigern": -2,

            "verweigert": -2,

            "verweigert": -2,

            "verweigern": -2,

            "bedauern": -2,

            "bedauern": -2,

            "bedauert": -2,

            "bedauert": -2,

            "bedauern": -2,

            "regieren": 1,

            "ablehnen": -1,

            "abgelehnt": -1,

            "ablehnen": -1,

            "Ablehnung": -2,

            "ablehnt": -1,

            "freuen": 4,

            "freut": 4,

            "freut": 4,

            "jubeln": 4,

            "entspannt": 2,

            "unerbittlich": -1,

            "Zuverlässigkeit": 2,

            "zuverlässig": 2,

            "zuverlässig": 2,

            "abhängig": 2,

            "entlasten": 1,

            "erleichtert": 2,

            "entlastet": 1,

            "erleichtern": 2,

            "genießen": 2,

            "bemerkenswert": 2,

            "Reue": -2,

            "abstoßend": -2,

            "Rückwirkung": -2,

            "Auswirkungen": -2,

            "Mahnung": -2,

            "gemahnt": -2,

            "Mahnung ": -2,

            "Mahnungen": -2,

            "abstoßen": -1,

            "abgestoßen": -2,

            "abstoßend": -2,

            "Rettung": 2,

            "gerettet": 2,

            "rettet": 2,

            "nachtragend": -2,

            "zurücktreten": -1,

            "zurückgetreten": -1,

            "zurücktreten": -1,

            "rücktritt": -1,

            "entschlossen": 2,

            "Auflösung": 2,

            "auflösen": 2,

            "gelöst": 2,

            "löset": 2,

            "auflösen": 2,

            "Respekt": 2,

            "respektiert": 2,

            "Respekt": 2,

            "Verantwortung": 1,

            "verantwortlich": 2,

            "ansprechend": 2,

            "erholsam": 2,

            "ruhelos": -2,

            "wiederherstellen": 1,

            " wiederhergestellt": 1,

            "wiederherstellt": 1,

            "wiederherstellen": 1,

            "einschränken": -2,

            "eingeschränkt": -2,

            "einschränken": -2,

            "Einschränkung": -2,

            "restriktiv": -1,

            "einschränkt": -2,

            "einbehalten": -1,

            "verzögern": -2,

            "verzögert": -2,

            "Rückzug": -1,

            "Rache": -2,

            "rachsüchtig": -2,

            "verehrt": 2,

            "wiederbeleben": 2,

            "belebt": 2,

            "ekelhaft": -2,

            "Belohnung": 2,

            "belohnt": 2,

            "lohnend": 2,

            "Belohnungen": 2,

            "reich": 2,

            "reich": 2,

            "lächerlich": -3,

            "rig": -1,

            "manipuliert": -1,

            " Rechtsrichtung": 3,

            "Gerechtigkeit": 2,

            "rechtmäßig": 2,

            "zu Recht": 2,

            "streng": 3,

            "streng": 3,

            "Aufruhr": -2,

            "Aufstände": -2,

            "aufsteigen": 1,

            "steigt": 1,

            "Risiko": -2,

            "Risiken": -2,

            "riskant": -2,

            "nieten": 3,

            "rauben": -2,

            "Räuber": -2,

            "gekleidet": -2,

            "anziehen": -2,

            "raubt": -2,

            "robust": 2,

            "rofl": 4,

            "roflcopter": 4,

            "roflmao": 4,

            "Romantik": 2,

            "romantisch": 2,

            "romantisch": 2,

            "rose": 1,

            "rotfl": 4,

            "rotflmfao": 4,

            "Fäulnis": 4,

            "faul": -3,

            "unhöflich": -2,

            "ruinieren": -2,

            "ruiniert": -2,

            "ruinieren": -2,

            "Ruinen": -2,

            "Sabotage": -2,

            "traurig": -2,

            "traurig": -2,

            "traurig": -2,

            "leider": -2,

            "sicher": 1,

            "sicher": 1,

            "sicherer": 2,

            "Sicherheit": 1,

            "hervorragend": 1,

            "grüßen": 2,

            "begrüßt": 2,

            "grüßt": 2,

            "grüßen": 2,

            "Erlösung": 2,

            "sappy": -1,

            "sarkastisch": -2,

            "zufrieden": 2,

            "wild": -2,

            "Wilden": -2,

            "speichern": 2,

            "gespeichert": 2,

            "Einsparungen": 1,

            "Betrug": -2,

            "Betrug": -2,

            "Skandal": -3,

            "skandalös": -3,

            "Skandale": -3,

            "Sündenbock": -2,

            "Sündenböcke": -2,

            "erschrecken": -2,

            "Angst": -2,

            "Narbe": -2,

            "Narben": -2,

            "gruselig": -2,

            "skeptisch": -2,

            "schelten": -2,

            "Schaufel": 3,

            "verachten": -2,

            "verachtend": -2,

            "schreien": -2,

            "geschrien": -2,

            "schreien": -2,

            "schreit": -2,

            "verschraubt": -2,

            "verschraubt": -3,

            "Abschaum": -3,

            "Drecksack": -4,

            "nahtlos": 2,

            "nahtlos": 2,

            "sicher": 2,

            "gesichert": 2,

            "sichert": 2,

            "Aufruhr": -2,

            "aufrührerisch": -2,

            "verführt": -1,

            "Selbstmissbrauch": -2,

            "selbstbewusst": 2,

            "in sich widersprüchlich": -2,

            "selbsttäuschend": -2,

            "egoistisch": -3,

            "Egoismus": -3,

            "Satz": -2,

            "verurteilt": -2,

            "Sätze": -2,

            "Verurteilung": -2,

            "ruhig": 2,

            "Siedlung": 1,

            "Siedlungen": 1,

            "schwer": -2,

            "schwer": -2,

            "sexistisch": -2,

            "sexistisch": -2,

            "sexy": 3,

            "wackelig": -2,

            "Schade": -2,

            "beschämt": -2,

            "beschämend": -2,

            "teilen": 1,

            "geteilt": 1,

            "Aktien": 1,

            "zerschmettert": -2,

            "Scheiße": -4,

            "Scheißkopf": -4,

            "beschissen": -3,

            "Schock": -2,

            "schockiert": -2,

            "schockierend": -2,

            "Erschütterungen": -2,

            "shoody": -2,

            "schießen": -1,

            "kurzsichtig": -2,

            "Kurzsichtigkeit": -2,

            "Mangel": -2,

            "Mangel": -2,

            "Spitzmaus": -4,

            "schüchtern": -1,

            "krank": -2,

            "Krankheit": -2,

            "Nebenwirkung": -2,

            "Nebenwirkungen": -2,

            "seufz": -2,

            "Bedeutung": 1,

            "signifikant": 1,

            "Stummschaltung": -1,

            "albern": -1,

            "Einfachheit": 1,

            "Sünde": -2,

            "aufrichtig": 2,

            "aufrichtig": 2,

            "aufrichtig": 2,

            "Aufrichtigkeit": 2,

            "sündig": -3,

            "einseitig": -2,

            "unheimlich": -2,

            "Sünden": -2,

            "skeptisch": -2,

            "skeptisch": -2,

            "Skepsis": -2,

            "Skeptiker": -2,

            "knallen": -2,

            "Schrägstrich": -2,

            "aufgeschnitten": -2,

            "Schrägstriche": -2,

            "Schneiden": -2,

            "Sklave": -3,

            "Sklaverei": -3,

            "Sklaven": -3,

            "Schlaflosigkeit": -2,

            "glatt": 2,

            "schlüpfrig": 2,

            "schlechteste": 2,

            "rutschen": -1,

            "schlampig": -2,

            "träge": -2,

            "absacken": -1,

            "Schlampe": -5,

            "smart": 1,

            "intelligenter": 2,

            "intelligente t": 2,

            "verschmieren": -2,

            "lächeln": 2,

            "lächelt": 2,

            "lächelt": 2,

            "lächeln": 2,

            "Smog": -2,

            "schmuggeln": -2,

            "geschmuggelt": -2,

            "Schmuggel": -2,

            "schmuggelt": -2,

            "hinterhältig": -1,

            "niesen": -2,

            "geniesst": -2,

            "niest": -2,

            "niesen": -2,

            "snub": -2,

            "brüskiert": -2,

            "snubbing": -2,

            "Snubs": -2,

            "ernüchternd": 1,

            "feierlich": -1,

            "fest": 2,

            "Solidarität": 2,

            "verfestigt": 2,

            "erstarrt": 2,

            "verfestigen": 2,

            "verfestigen": 2,

            "Lösung": 1,

            "Lösungen": 1,

            "lösen": 1,

            "gelöst": 1,

            "löst": 1,

            "lösen": 1,

            "düster": -2,

            "irgendwie": 0,

            "Hurensohn": -5,

            "beruhigen": 3,

            "beruhigt": 3,

            "beruhigend": 3,

            "anspruchsvoll": 2,

            "wund": -1,

            "Leid": -2,

            "traurig": -2,

            "Entschuldigung": -1,

            "geräumig": 1,

            "Spam": -2,

            "Spammer": -3,

            "Spammer": -3,

            "spammen": -2,

            "Funke": 1,

            "funkeln": 3,

            "funkelt": 3,

            "funkeln": 3,

            "Speerspitze": 2,

            "spekulativ": -2,

            "Geist": 1,

            "temperamentvoll": 2,

            "geistlos": -2,

            "boshaft": -2,

            "großartig": 3,

            "verdorben": -2,

            "verdorben": -2,

            "fleckenlos": 2,

            "spritzig": 2,

            "verschwenden": -2,

            "verschwendet": -2,

            "verschwenden": -2,

            "verschwenden": -2,

            "erstickt": -1,

            "stich": -2,

            "erstochen": -2,

            "stabil": 2,

            "sticht": -2,

            "stillstand": -2,

            "festgefahren": -2,

            "blockieren": -2,

            "Ausdauer": 2,

            "Stempel": -2,

            "stank": -2,

            "erschrocken": -2,

            "erschreckend": 3,

            "verhungern": -2,

            "verhungert": -2,

            "verhungert": -2,

            "verhungern": -2,

            "ste adfast": 2,

            "stehlen": -2,

            "stehlen": -2,

            "stiehlt": -2,

            "Stereotyp": -2,

            "stereotypisiert": -2,

            "erstickt": -1,

            "stimulieren": 1,

            "stimuliert": 1,

            "stimuliert": 1,

            "anregend": 2,

            "geizig": -2,

            "stinken": -2,

            "gestunken": -2,

            "Stinker": -2,

            "stinkend": -2,

            "stinkt": -2,

            "stinkig": -2,

            "gestohlen": -2,

            "gestohlen": -2,

            "stoppen": -1,

            "angehalten": -1,

            "stoppen": -1,

            "stoppt": -1,

            "stark": 2,

            "gerade": 1,

            "seltsam": -1,

            "seltsam": -1,

            "erwürgt ": -2,

            "Stärke": 2,

            "stärken": 2,

            "verstärkt": 2,

            "Stärkung": 2,

            "stärkt": 2,

            "Stärken": 2,

            "Stress": -1,

            "gestresst": -2,

            "Stressor": -2,

            "Stressoren": -2,

            "geschlagen": -2,

            "streik": -1,

            "Stürmer": -2,

            "streikt": -1,

            "stark": 2,

            "stärker": 2,

            "am stärksten": 2,

            "geschlagen": -1,

            "kampf": -2,

            "gekämpft": -2,

            "kämpft": -2,

            "kämpfen": -2,

            "stur": -2,

            "steckengeblieben": -2,

            "betäubt": -2,

            "atemberaubend": 4,

            "dumm": -2,

            "Dummheit": -3,

            "dumm": -2,

            "sanft": 2,

            "Vorladung": -2,

            "wesentlich": 1,

            "im Wesentlichen": 1,

            "subversiv": -2,

            "erfolgreich": 3,

            "erfolgreich": 3,

            "erfolgreich": 3,

            "erfolgreich": 3,

            "Erfolg": 2,

            "erfolgreich": 3,

            "erfolgreich": 3,

            "saugen": -3,

            "saugt": -3,

            "klagen": -2,

            "verklagt": -2,

            "klagen": -2,

            "klagen": -2,

            "leiden": -2,

            "erlitten": -2,

            "Kranker": -2,

            "Leidende": -2,

            "leiden": -2,

            "leidet": -2,

            "suizidal": -2,

            " Selbstmord": -2,

            "Selbstmorde": -2,

            "klagen": -2,

            "geeignet": 2,

            "geeignet": 2,

            "schmollen": -2,

            "schmollen": -2,

            "mürrisch": -2,

            "Sonnenschein": 2,

            "super": 3,

            "hervorragend": 5,

            "überlegen": 2,

            "unterstützen": 2,

            "unterstützt": 2,

            "Anhänger": 1,

            "Anhänger": 1,

            "unterstützen": 1,

            "unterstützend": 2,

            "unterstützt": 2,

            "höchst": 4,

            "überlebt": 2,

            "überleben": 2,

            "Überlebender": 2,

            "verdächtig": -1,

            "vermutet": -1,

            "verdächtig": -1,

            "verdächtige": -1,

            "aussetzen": -1,

            "su ausgegeben": -1,

            "verdächtig": -2,

            "Nachhaltigkeit": 1,

            "nachhaltig": 2,

            "nachhaltig": 2,

            "schwören": -2,

            "fluchen": -2,

            "schwört": -2,

            "süß": 2,

            "süßer": 3,

            "süßeste": 3,

            "schnell": 2,

            "schnell": 2,

            "Schwindel": -3,

            "Schwindel": -3,

            "Schwindel": -3,

            "sympathisch": 2,

            "Mitgefühl": 2,

            "Befleckung": -2,

            "verdorben": -2,

            "Talent": 2,

            "tard": -2,

            "anlaufen": -2,

            "angelaufen": -2,

            "trübt": -2,

            "Tränen": -2,

            "zärtlich": 2,

            "Zärtlichkeit": 2,

            "angespannt": -2,

            "Spannung": -1,

            "schrecklich": -3,

            "schrecklich": -3,

            "großartig": 4,

            "großartig": 4,

            "erschrocken": -3,

            "terror": -3,

            "Terrorist": -2,

            "Terroristen": -2,

            "terrorisieren": -3,

            "terrorisiert": -3,

            "terrorisiert": -3,

            "danke": 2,

            "dankbar": 2,

            "danke": 2,

            "dornig": -2,

            "nachdenklich": 2,

            "gedankenlos": -2,

            "bedrohung": -2,

            "bedrohen": -2,

            "bedroht": -2,

            "bedrohlich": -2,

            "bedroht": -2,

            "Bedrohungen": -2,

            "begeistert": 5,

            "vereiteln": -2,

            "verhindern d": -2,

            "vereiteln": -2,

            "vereitelt": -2,

            "schüchtern": -2,

            "ängstlich": -2,

            "müde": -2,

            "titten": -2,

            "Toleranz": 2,

            "tolerant": 2,

            "zahnlos": -2,

            "oben": 2,

            "Spitzen": 2,

            "zerrissen": -2,

            "Folter": -4,

            "gefoltert": -4,

            "Foltern": -4,

            "foltern": -4,

            "totalitär": -2,

            "Totalitarismus": -2,

            "tout": -2,

            "angepriesen": -2,

            "ankündigen": -2,

            "Werber": -2,

            "giftig": -3,

            "Tragödien": -2,

            "Tragödie": -2,

            "tragisch": -2,

            "ruhig": 2,

            "Übertretung": -2,

            " überquert": -2,

            "übertretet": -2,

            "übertreten": -2,

            "Falle": -1,

            "gefangen": -2,

            "fallen": -1,

            "Trauma": -3,

            "traumatisch": -3,

            "Travestie": -2,

            "Verrat": -3,

            "verräterisch": -3,

            "Schatz": 2,

            "Schätze": 2,

            "zittern": -2,

            " tremor": -2,

            "zittern": -2,

            "zitternd": -2,

            "Drangsal": -2,

            "Tribut": 2,

            "ausgetrickst": -2,

            "Trick": -2,

            "Triumph": 4,

            "siegreich": 4,

            "troll": -2,

            "Problem": -2,

            "beunruhigt": -2,

            "Probleme": -2,

            "beunruhigend": -2,

            "wahr": 2,

            "Vertrauen": 1,

            "vertrauenswürdig": 2,

            "Vertrauen": 1,

            "Tumor": -2,

            "Möse": -5,

            "tyran": -3,

            "tyrannisch": -3,

            "tyrannisch": -3,

            "tyrannisch": -3,

            "Tyrannen": -3,

            "allgegenwärtig": 2,

            "äh": -2,

            "Hässlichkeit": -3,

            "hässlich": -3,

            "unfähig": -2,

            "inakzeptabel": -2,

            "unbeschwichtigbar": -2,

            "unbewertet": -2,

            "nicht genehmigt": -2,

            "unattraktiv": -2,

            "nicht verfügbar": -1,

            "nicht verfügbar": -2,

            "unbewusst": -2,

            "unerträglich": -2,

            "unglaublich": -1,

            "unglaublich": -1,

            "unvoreingenommen": 2,

            "unsicher": -1,

            "unklar": -1,

            "unbequem": -2,

            "unbekümmert": -2,

            "unbestätigt": -1,

            "nicht überzeugt": -1,

            "nicht im Abspann": -1,

            "unentschlossen": -1,

            "ungekocht": -2,

            "unterschätzen": -1,

            "unterschätzt ": -1,

            "unterschätzt": -1,

            "unterschätzen": -1,

            "untergraben": -2,

            "untergraben": -2,

            "untergräbt": -2,

            "untergraben": -2,

            "unterdurchschnittlich": -2,

            "unterdurchschnittlich": -2,

            "unterdurchschnittlich": -2,

            "leistungsschwach": -2,

            "unverdient": -2,

            "unerwünscht": -2,

            "unruhig": -2,

            "arbeitslos": -1,

            "Arbeitslosigkeit": -2,

            "ungleich": -1,

            "unerreicht": 2,

            "unethisch": -2,

            "ereignislos": -2,

            "unfair": -2,

            "ungünstig": -2,

            "untauglich": -2,

            "unfit ": -2,

            "unfokussiert": -2,

            "unverzeihlich": -3,

            "unversöhnlich": -2,

            "unerfüllt": -2,

            "unlustig": -2,

            "ungenießbar": -2,

            "undankbar": -3,

            "unglücklich": -2,

            "Unglück": -2,

            "ungesund": -2,

            "unhygienisch": -2,

            "vereinheitlicht": 1,

            "einfallslos": -2,

            "unbeeindruckt": -2,

            "uninspiriert": -2,

            "unintelligent": -2,

            "unbeabsichtigt": -2,

            "unbeteiligt": -2,

            "vereint": 1,

            "ungerecht": -2,

            "unwahrscheinlich": -1,

            "ungeliebt": -2,

            "ungeliebt": -2,

            "unübertroffen": 1,

            "unmotiviert": -2,

            "unoriginell": -2,

            "unparlamentarisch": -2,

            "unangenehm": -2,

            "unangenehm": -2,

            "unprofessionell": -2,

            "entwirren": 1,

            "aufheben": -2,

            "unerforscht": -2,

            "unsicher": -2,

            "unzufrieden": -2,

            "unwissenschaftlich": -2,

            "ungesichert": -2,

            "unsel Fisch": 2,

            "unruhig": -1,

            "unverkauft": -1,

            "unerfahren": -2,

            "unsound": -2,

            "instabil": -2,

            "unaufhaltsam": 2,

            "erfolglos": -2,

            "erfolglos": -2,

            "nicht unterstützt": -2,

            "unsicher": -1,

            "unbefleckt": 2,

            "unwahr": -2,

            "unerwünscht": -2,

            "unwürdig": -2,

            "erhebend": 2,

            "Aufruhr": -3,

            "verärgert": -2,

            "verärgert": -2,

            "verstörend": -2,

            "verklemmt": -2,

            "dringend": -1,

            "nützlich": 2,

            "Nützlichkeit": 2,

            "nutzlos": -2,

            "nutzlos": -2,

            "vage": -2,

            "validieren": 1,

            "validiert": 1,

            "validiert": 1,

            "validieren": 1,

            "vapid": -2,

            "Urteil": -1,

            "Urteile": -1,

            "angelegt": 1,

            "Verärgerung": -2,

            "ärgerlich": -2,

            "lebendig": 3,

            "bösartig": -2,

            "Opfer": -3,

            "Viktimisierung": -3,

            "opfern": -3,

            "Opfer": -3,

            "opfert": -3,

            "opfern": -3,

            "Opfer": -3,

            "Sieger": 3,

            "Sieger": 3,

            "Sieg": 3,

            "Siege": 3,

            "wachsam": 3,

            "Kraft": 3,

            "abscheulich": -3,

            "bestätigen": 2,

            "bestätigt ": 2,

            "bestätigt": 2,

            "Rechtfertigung": 2,

            "verletzen": -2,

            "verletzt": -2,

            "verletzt": -2,

            "verletzend": -2,

            "Verstoß": -2,

            "Verstöße": -2,

            "Gewalt": -3,

            "gewaltbezogen": -3,

            "gewalttätig": -3,

            "gewaltsam": -3,

            "tugendhaft": 2,

            "virulent": -2,

            "Vision": 1,

            "visionär": 3,

            "visionieren": 1,

            "Visionen": 1,

            "Lebenskraft": 3,

            "Vitamin": 1,

            "vitriol": -3,

            "lebendig": 3,

            "lebendig": 2,

            "lautstark": -1,

            "erbrechen": -3,

            "erbrochen": - 3,

            "Erbrechen": -3,

            "erbrochen": -3,

            "Anfälligkeit": -2,

            "anfällig": -2,

            "Ausfall": -2,

            "Ausfälle": -2,

            "Wichser": -3,

            "wollen": 1,

            "Krieg": -2,

            "Kriegsführung": -2,

            "warm": 1,

            "warmherzig": 2,

            "Wärme": 2,

            "Wärme": 2,

            "warnen": -2,

            "gewarnt": -2,

            "Warnung": -3,

            "Warnungen": -3,

            "warnt": -2,

            "Abfall": -1,

            "verschwendet": -2,

            "verschwenden": -2,

            "schwankend": -1,

            "schwach": -2,

            "geschwächt": -2,

            "Schwäche": -2,

            "Schwächen": -2,

            "Reichtum": 3,

            "wohlhabender": 2,

            "Wohl dir": 2,

            "müde": -2,

            "weinen": -2,

            "weinen": -2,

            "seltsam": -2,

            "willkommen": 2,

            "willkommen": 2,

            "willkommen": 2,

            "Wohlbefinden": 2,

            "gut Champion": 3,

            "gut entwickelt": 2,

            "gut etabliert": 2,

            "gut fokussiert": 2,

            "gepflegt": 2,

            "gut proportioniert": 2,

            "skurril": 1,

            "Tünche": -3,

            "Hure": -4,

            "böse": -2,

            "verwitwet": -1,

            "Bereitschaft": 2,

            "gewinnen": 4,

            "Gewinner": 4,

            "gewinnen": 4,

            "gewinnt": 4,

            "winwin": 3,

            "Weisheit": 1,

            "wünsche": 1,

            "Wi sie ": 1,

            "wünschen": 1,

            "Rückzug": -3,

            "geist": 2,

            "wehgegonen": -2,

            "leider": -3,

            "gewonnen": 3,

            "wunderbar": 4,

            "wunderbar": 4,

            "woo": 3,

            "woohoo": 3,

            "wooo": 4,

            "wow": 4,

            "getragen": -1,

            "besorgt": -3,

            "Sorgen": -3,

            "Sorge": -3,

            "besorgniserregend": -3,

            "schlechter": -3,

            "verschlechtern": -3,

            "verschlechtert": -3,

            "Verschlechterung": -3,

            "verschlechtert sich": -3,

            "verehrt": 3,

            "schlechteste": -3,

            "wert": 2,

            "wertlos": -2,

            "würdig": 2,

            "wow": 4,

            "wow": 4,

            "wowww": 4,

            "zornig": -3,

            "Wrack": -2,

            "Schrauben": -2,

            "falsch": -2,

            "Fehler": -2,

            "Fehler": -2,

            "falsch": -2,

            "falsch": -2,

            "zu Unrecht": -2,

            "falsch": -2,

            "wtf": -4,

            "wtff": -4,

            "wtff": -4,

            "xo": 3,

            "xoxo": 3,

            "xoxoxo": 4,

            "xoxoxoxo": 4,

            "ja": 1,

            "sehnsüchtig": 1,

            "jaee": 2,

            "ja": 1,

            "jugendlich": 2,

            "eklig": -2,

            "lecker": 3,

            "eiferer": -2,

            "Eiferer": -2,

            "eifrig": 2

        },
        scoringStrategy: {
            apply: function (tokens, cursor, tokenScore) {
                if (cursor > 0) {
                    var prevtoken = tokens[cursor - 1];
                    if ((prevtoken === 'nicht') ||
                        (prevtoken === 'kein') ||
                        (prevtoken === 'niemals') ||
                        (prevtoken === 'kaum')) {
                        tokenScore = -tokenScore;
                    }
                }
                return tokenScore;
            }
        }
    };
    sentiment.registerLanguage('gr', grLanguage);

    const findSentiment = (e) => {
        const result = sentiment.analyze(e.target.value, { language: 'gr' })
        console.log(result)
        setSentimentScore(result.score)

        if (result.score > 0) {
            setGeneralSentiment('Positive')
        } else if (result.score < 0) {
            setGeneralSentiment('Negative')
        } else {
            setGeneralSentiment('Neutral')
        }

    }


    return (
        <Card className={dark ? "bg-dark text-light" : "bg-light text-dark"} >
            <CardBody className={generalSentiment === "Positive" ? "bg-success text-light" : generalSentiment === "Negative" ? "bg-danger text-light" : ""}>
                <CardTitle tag="h5">Stimmungsanalyse (Deutsch)</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted"> </CardSubtitle>

                <Label for="exampleText" className="mb-1 mt-2" >Zum analysieren typen Sie hier den Text </Label>
                <Input type="textarea" rows="13" name="text" id="exampleText" onChange={findSentiment} className={dark ? "bg-dark text-light" : "bg-light text-dark"} placeholder="Ihre Text..." />

                <p className="mt-4" >Ergebnis: {generalSentiment}</p>
                <p>Quantität:  {(sentimentScore / 7).toPrecision(4)}</p>
            </CardBody>

        </Card>
    );
}

export default SentimentAnalysisDE;