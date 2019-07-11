<template>
  <div id="activity">
    <div class="box">
         <Header />
      <div class="scrollNav">
        <ul>
          <router-link tag="li" to="/events/all">热门活动</router-link >
          <router-link tag="li" to="/events/beijing">北京</router-link >
          <router-link tag="li" to="/events/shanghai">上海</router-link >
          <router-link tag="li" to="/events/guangzhou">广州</router-link >
          <router-link tag="li" to="/events/shenzhen">深圳</router-link >
          <router-link tag="li" to="/events/hangzhou">杭州</router-link >
        </ul>
      </div>
        <router-view></router-view>
    </div>
  </div>
</template>


<script>
import Header from "common/header";
import http from "utils/http";
export default {
  name: "activity",
  components: {
    Header
  },
};
</script>

<style scoped>
.poster1>a{display: block;width: 100%;height: 5.6rem;}
.poster1>a>img{width: 100%;height: 5.6rem}
#activity{
    width: 100%;
    height: 100%;
}
.box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f1f1f1;
  position: relative;
}
.header {
  width: 100%;
  height: 1.2rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.32rem;
  align-items: center;
  font-weight: 550;
  background: #fff;
}
.logo {
  margin-left: 0.2rem;
}
.logo > img {
  width: 0.9rem;
  height: 0.76rem;
}
.nav {
  width: 6.5rem;
  height: 0.6rem;
}
.nav > .list {
  display: flex;
  justify-content: space-around;
}
.nav > .list > li:nth-child(1),
.nav > .list > li:nth-child(3) {
  color: blue;
  margin-top: 0.08rem;
}
.last-li {
  width: 1.2rem;
  font-size: 0.24rem;
  line-height: 0.4rem;
}

.first-li {
  width: 1.2rem;
  display: flex;
}
.icon-zelvxuanzefeiyongdaosanjiaoxingfandui {
  font-size: 0.25rem;
  margin-left: 0.04rem;
  margin-top: 0.04rem;
}
.ipt {
  height: 0.62rem;
  padding: 0.072rem;
  outline: none;
  font-size: 0.3rem;
  width: 2rem;
}

.scrollNav {
  width: 100%;
  height: 0.92rem;
  border-top: 1px solid #666;
  background: #fff;
  overflow-x: scroll;
  overflow-y: hidden;
}
.scrollNav > ul {
  display: flex;
  justify-content: space-between;
  width: 100%;
  overflow-y: hidden;
  height: 0.92rem;
}
.scrollNav > ul > li {
  font-size: 0.24rem;
  width: 1.4rem;
  margin: 0 0.1rem;
  height: 0.92rem;
  line-height: 0.92rem;
  text-align: center;
}
.scrollNav > ul > li:hover {
  color: #4d91fd;
}

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



