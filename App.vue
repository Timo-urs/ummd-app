<template>
  <view class="container">
    <Statusbar color="#489ec9" />
    <Header title="My Day @ Home" />

    <view v-if="!isLoading" class="content">
      <view class="warnings" v-if="warnings.length > 0">
        <text class="warning" v-for="(warning, index) in warnings" :key="index">{{warning}}</text>
      </view>
      <scroll-view class="plan">
        <view class="plan-point" v-for="(plan, index) in point_order" :key="index">
          <text class="point-time" v-bind:class="classObjectTime(plan.active)">{{ plan.time }}</text>
          <text class="point-text" v-bind:class="classObjectText(plan.active)">{{ plan.text }}</text>
        </view>
      </scroll-view>
    </view>
    <view
        class="loading-screen" 
        v-if="isLoading">
        <activity-indicator size="large" color="#888888" class="loading-screen-loader" />
    </view>
  </view>
</template>

<script>
import Statusbar from './components/Statusbar';
import Header from './components/Header';

export default {
  components: {
    Statusbar,
    Header
  },
  data(){
    setTimeout(()=>{
      this.isLoading = false;
    }, 1000);
    return {
      isLoading: true,
      hours: 0,
      minutes: 0,
      old_activePoint: {},
      point_order: [],
      points:[
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
      ],
      warnings:[
        "Wichtig: Keine Heimarbeit im Schlafanzug!"
      ]
    }
  },
  created(){
    this.startTimeCheck();
  },
  methods: {
    startTimeCheck: function (){
      this.hours = new Date().getUTCHours()+1;
      this.minutes = new Date().getUTCMinutes();
      if(this.minutes < 10){
        this.minutes = '0'+this.minutes;
      }
      let time = parseFloat(`${this.hours}.${this.minutes}`);
      let activePoint = {};
      this.points.forEach(point=>{
        if(point.start <= time && point.end > time){
          point.active = true;
          activePoint = point;
        }else{
          point.active = false;
        }
      });
      if(activePoint === this.old_activePoint){
        setTimeout(this.startTimeCheck, 1000 * 60);
      }else{
        this.old_activePoint = activePoint;
        this.point_order = [];
        let activeWasThere = false;
        let activeIndex = 0;
        let order_cache = [];
        for(let key in this.points){
          if(!this.points[key].active && !activeWasThere){
            this.point_order.push(this.points[key]);
          }else if(!this.points[key].active && activeWasThere){
            order_cache.push(this.points[key]);
          }else if(this.points[key].active){
            activeWasThere = true;
            this.point_order.unshift(this.points[key]);
            activeIndex = 1+this.point_order.indexOf(this.points[key]);
          }
        }
        order_cache.reverse();
        for(let key in order_cache){
          this.point_order.splice(activeIndex, 0, order_cache[key])
        }
        setTimeout(this.startTimeCheck, 1000 * 60);
      }
    },
    classObjectTime: function (active) {
      return {
        'point-time-active': active,
        'point-time-inactive': !active
      }
    },
    classObjectText: function (active){
      return {
        'point-text-active': active,
        'point-text-inactive': !active
      }
    }
  }
}
</script>

<style>
.container {
  background-color: #011b28;
  flex: 1;
}
.content {
  width: 100%;
  height: 100%;
  background-color: #011b28;
}
.warnings {
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 5px;
}
.warning {
  font-size: 17px;
  color:  #f1c40f;
}
.plan {
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
}
.plan-point{
  display: flex;
  align-items:flex-start;
}
.point-time-inactive {
  color: #888;
  text-transform: uppercase;
  padding-top: 10px;
}
.point-text-inactive {
  color: #bdc3c7;
  font-size: 16px;
  text-transform: uppercase;
  padding-bottom: 10px;
}
.point-time-active {
  color: #bdc3c7;
  font-size: 17px;
  padding-top: 20px;
  text-transform: uppercase;
}
.point-text-active {
  color: #f1f1f1;
  font-size: 25px;
  padding-bottom: 20px;
}
.loading-screen {
  height: 100%;
}
.loading-screen-loader {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 30%;
}
</style>
