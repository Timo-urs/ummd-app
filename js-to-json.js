const fs = require('fs');

fs.writeFileSync('points.json', JSON.stringify([
    {
      start: 7,
      end: 8.3,
      time: '7:00 bis 8:30 Uhr',
      text: 'Frühstücke mit Deiner Familie, ehe Deine Eltern zur Arbeit aufbrechen müssen.',
      active: false
    },
    {
      start: 8.3,
      end:8.33,
      time: '8:30 Uhr',
      text: 'Schaue Dir unseren Morgenimpuls an oder bringe deine Anliegen selbst vor Gott.',
      active: true
    },
    {
      start: 8.33,
      end: 9.15,
      time: '8:30 bis 9:15 Uhr',
      text: 'Schaue Dir die Aufgaben Deiner Lehrer per Email oder auf Iserv „Aufgaben“ für ein Hauptfach an. Nutze selbstständig die Zeit, um Lerninhalte zu wiederholen, die dir schwerfallen.',
      active: false
    },
    {
      start: 9.15,
      end: 9.3,
      time: '9:15 bis 9:30 Uhr',
      text: 'Pause – Schaue aus dem Fenster, genieße die Sonne, den Garten, den Balkon! Was empfindest Du als besonders schön?',
      active: false
    },
    {
      start: 9.3,
      end: 10.15,
      time: '9:30 bis 10:15 Uhr',
      text: 'Beschäftige dich mit den Aufgaben für ein zweites Hauptfach.',
      active: false
    },
    {
      start: 10.15,
      end: 10.3,
      time: '10:15 bis 10:30 Uhr',
      text: 'Bewegte Pause - Halte Dich fit! Mache Dein eigenes Sportprogramm in den eigenen vier Wänden oder schaue Dir unsere Fitness-Links im Beitrag „Tipps zum Tag“ an.',
      active: false
    },
    {
      start: 10.3,
      end: 11.15,
      time: '10:30 bis 11:15 Uhr',
      text: 'Schaue Dir die Aufgaben in Deiner Mappe bzw. Deinem Buch für ein Nebenfach Deiner Wahl an.',
      active: false
    },
    {
      start: 11.15,
      end: 11.3,
      time: '11:15 bis 11:30 Uhr',
      text: 'Pause – Zeit für einen Snack!',
      active: false
    },
    {
      start: 11.3,
      end: 11.45,
      time: '11:30 bis 11:45',
      text: 'Vokabeln lernen! Schaue Dir jeden Tag eine andere Fremdsprache an. Wenn Du in der fünften Klasse bist, wiederhole nur die Englischvokabeln.',    
      active: false
    },
    {
      start: 11.45,
      end: 12,
      time: '11:45 bis 12.00 Uhr',
      text: 'Challenge des Tages – lasse dich auf IServ überraschen!',
      active: false
    },
    {
      start: 12,
      end: 12.15,
      time: '12:00 Uhr bis 12:15 Uhr',
      text: 'Denkpause – Zeit für Stille. Erinnere dich an unser Motto zur Fastenzeit: 40 Tage Flugmodus! Wir wissen, dass dies in diesen Tagen besonders schwer ist. Überlege, wie lange Du heute auf dein Handy verzichten und Dich ohne Fernsehen beschäftigen kannst.',
      active: false
    },
    {
      start: 12.15,
      end: 13,
      time: '12:15 bis 13:00 Uhr',
      text: 'Mappen in Ordnung bringen. Fehlt noch ein Arbeitsblatt? Haben deine Mappen ein Inhaltsverzeichnis? Gibt es Seiten, die noch einmal ordentlich abgeschrieben werden können?',
      active: false
    },
    {
      start: 13,
      end: 14,
      time: '13:00 bis 14:00 Uhr',
      text: 'Zeit für ein Mittagessen! Falls deine Eltern morgens arbeiten, decke für dich, deine Geschwister oder Eltern den Tisch. Falls Du schon kochen kannst, zaubere doch einmal ein schönes Gericht!',
      active: false
    },
    {
      start: 14,
      end: 18.3,
      time: 'Ab 14:00 bis 18:30 Uhr',
      text: 'Kreative Phase - Was machst Du gerne ohne Handy? Musiziere, zeichne, singe, bastle, stricke, nähe, bringe Deine Gedanken zu Papier, rufe Verwandte oder Freunde an! Oma und Opa freuen sich mit Sicherheit über einen Anruf, ein Bild oder einen Brief!',
      active: false
    },
    {
      start: 18.3,
      end: 23,
      time: 'Ab 18:30 bis 23 Uhr',
      text: 'Do what you want!',
      active: false
    },
    {
      start: 23,
      end:7,
      time: 'Ab 23 Uhr',
      text: 'Sleep \n -------------------------------------------------',
      active: false
    }
  ]));