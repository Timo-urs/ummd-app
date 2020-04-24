const data = [
    ['7:00 bis 8:30 Uhr','Frühstücke mit Deiner Familie, ehe Deine Eltern zur Arbeit aufbrechen müssen.'],
    ['8:30 Uhr','Schaue Dir unseren Morgenimpuls an oder bringe deine Anliegen selbst vor Gott.'],
    ['8:30 bis 9:15 Uhr','Schaue Dir die Aufgaben Deiner Lehrer per Email oder auf Iserv „Aufgaben“ für ein Hauptfach an. Nutze selbstständig die Zeit, um Lerninhalte zu wiederholen, die dir schwerfallen.'],
    ['9:15 bis 9:30 Uhr','Pause – Schaue aus dem Fenster, genieße die Sonne, den Garten, den Balkon! Was empfindest Du als besonders schön?'],
    ['9:30 bis 10:15 Uhr','Beschäftige dich mit den Aufgaben für ein zweites Hauptfach.'],
    ['10:15 bis 10:30 Uhr','Bewegte Pause - Halte Dich fit! Mache Dein eigenes Sportprogramm in den eigenen vier Wänden oder schaue Dir unsere Fitness-Links im Beitrag „Tipps zum Tag“ an.'],
    ['10:30 bis 11:15 Uhr','Schaue Dir die Aufgaben in Deiner Mappe bzw. Deinem Buch für ein Nebenfach Deiner Wahl an.'],
    ['11:15 bis 11:30 Uhr','Pause – Zeit für einen Snack!'],
    ['11:30 bis 11:45','Vokabeln lernen! Schaue Dir jeden Tag eine andere Fremdsprache an. Wenn Du in der fünften Klasse bist, wiederhole nur die Englischvokabeln.'],
    ['11:45 bis 12.00 Uhr','Challenge des Tages – lasse dich auf IServ überraschen!'],
    ['12:00 Uhr bis 12:15 Uhr','Denkpause – Zeit für Stille. Erinnere dich an unser Motto zur Fastenzeit: 40 Tage Flugmodus! Wir wissen, dass dies in diesen Tagen besonders schwer ist. Überlege, wie lange Du heute auf dein Handy verzichten und Dich ohne Fernsehen beschäftigen kannst.'],
    ['12:15 bis 13:00 Uhr','Mappen in Ordnung bringen. Fehlt noch ein Arbeitsblatt? Haben deine Mappen ein Inhaltsverzeichnis? Gibt es Seiten, die noch einmal ordentlich abgeschrieben werden können?'],
    ['13:00 bis 14:00 Uhr','Zeit für ein Mittagessen! Falls deine Eltern morgens arbeiten, decke für dich, deine Geschwister oder Eltern den Tisch. Falls Du schon kochen kannst, zaubere doch einmal ein schönes Gericht!'],
    ['Ab 14:00 Uhr','Kreative Phase - Was machst Du gerne ohne Handy? Musiziere, zeichne, singe, bastle, stricke, nähe, bringe Deine Gedanken zu Papier, rufe Verwandte oder Freunde an! Oma und Opa freuen sich mit Sicherheit über einen Anruf, ein Bild oder einen Brief!']
];

let _new = [];

data.forEach(val=>{
    _new.push({
        time:val[0],
        text:val[1],
        active:false
    });
});

console.log(_new);