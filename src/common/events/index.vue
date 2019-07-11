<template>
    <div id="events">
        <div class="entry-list">
        <div class="poster1">
            <a href="https://www.bagevent.com/event/5251280?bag_track=banner"> <img class="posterimg" src="https://b-gold-cdn.xitu.io/v3/static/img/default.2a5b86b.png"></a>
        </div>

        <div class="list1" style="margin-top: .8rem" v-for="(item,index) in eventObj" :key="index">
          <div class="entry-inner">
             <div class="banner">
                <a href="https://www.huodongxing.com/event/6493982154900"> <img :src="item.screenshot"></a>
          </div>

          </div>
          <div class="msg1">
            <div class="msgtitle">{{item.title}}</div>
            <div class="date">
              <span>{{item.startTime}}</span>
            </div>
            <div class="bottom">
              <div class="address">
                >
                <span>>{{item.city}}</span>
              </div>
              <div class="btn-join">报名参加</div>
            </div>
          </div>
        </div> 
        </div>
    </div>
</template>


<script>
export default {
    name:"events",
    props:{
        eventObj:{
            type:Array,
            default:[]
        }
    },
    data(){
        return{
            dataList:[],
        }
    },
    created(){

            
    }
}
</script>

<style scoped>

.entry-list {
  width: 100%;
  overflow: auto;
  position: absolute;
  top: 2.12rem;
  bottom: 0;
}
.poster1 {
  width: 100%;
  height: 5.6rem;
}
.poster1 > img {
  width: 100%;
  height: 5.6rem;
}
.entry-inner {
  width: 100%;
}
.banner {
  width: 100%;
}
.banner img {
  width: 100%;
}
.msg1 {
  padding: 0.4rem 0.24rem 0.3rem;
  background: #fff;
}
.msgtitle {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  height: 0.8rem;
  font-size: 0.24rem;
  font-weight: 700;
}
.date {
  margin-top: 0.12rem;
  font-size: 0.24rem;
}
.bottom {
  margin-top: 0.12rem;
  font-size: 0.24rem;
  display: flex;
  justify-content: space-between;
}
.btn-join {
  width: 2rem;
  height: 0.5rem;
  border-radius: 0.6rem;
  background-color: #4d91fd;
  line-height: 0.5rem;
  color: #fff;
  text-align: center;
}
</style>

