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
import Points from './points.json';

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
      points: Points,
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
