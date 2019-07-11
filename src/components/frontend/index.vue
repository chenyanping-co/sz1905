<template>
    <div id="frontend">
        <div class="zhuanlan" v-for="(item,index) in dataLists" :key="index">
      <div class="zhuanlan-box">
        <div class="zhuanlan-box1">
          <div>
            <ul class="zhuanlan-ul1">
              <li class="zhuanlan-ul1-li" style="color: #b71ed7;">{{item.topic}}</li>
              <li>
                <div>
                  <a class="wangzy">{{item.author}}</a>
                </div>
              </li>
              <li class="dayday"><span>{{item.time}}</span>小时前</li>
              <li>
                <a href="/tag/JavaScript" class="Javascript">{{item.category}}</a>
              </li>
            </ul>
          </div>
          <div class="zhuanlan-why">
            <a href="/post/5d1ea7a8e51d454fd8057bea">{{item.title}}</a>
          </div>
          <div>
            <ul class="zhuanlan-ul3">
              <li class="zhuanlan-ul3-li1">
                <a>
                  <img
                    class="ul3img"
                    src="https://b-gold-cdn.xitu.io/v3/static/img/zan.e9d7698.svg"
                  />
                  <span style="color: #b2b1c2">{{item.likeCount}}</span>
                </a>
              </li>
              <li>
                <a>
                  <img
                    class="ul3img"
                    src="https://b-gold-cdn.xitu.io/v3/static/img/comment.4d5744f.svg"
                  />
                  <span style="color: #b2b1c2">{{item.comment}}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>


<script>
import http from "utils/http"
export default {
    name:"frontend",
    data(){
        return{
            dataLists:[],
        }
    },
    created(){
        http('get','/welcome/frontend')
        .then((data)=>{
            this.dataLists = data.data;
        })
    }
}
</script>

<style scoped>
#frontend{
  position: absolute;
  top: 2.12rem;
  bottom: 0;
  width: 100%;
  overflow: auto;
}
.entry-list {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.href {
  width: 100%;
  height: 1.5rem;
  background: #fff;
  border-bottom: 1px solid #666;
}
.href-box {
  padding: 0.18rem 0.48rem;
  width: 100%;
  height: 1.65rem;
  margin: 0 auto;
}
.guanggao {
  font-size: 0.24rem;
  color: #b2bac2;
  display: flex;
  align-items: baseline;
  white-space: nowrap;
}
.guanggao1 {
  border-radius: 2px;
  border: 1px solid #b2bac2;
  margin-left: -2px;
  margin-right: 10px;
  padding: 1px 5px;
}
.href-title {
  margin-top: 0.15rem;
  font-size: 0.3rem;
  font-weight: 600;
  color: #2e3135;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.href-title2 {
  margin-top: 0.12rem;
  font-size: 0.24rem;
  color: #b2bac2;
}

.zhuanlan {
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #e5e5e5;
}
.zhuanlan-box {
  padding: 0.18rem 0.48rem;
  width: 100%;
  height: 1.65rem;
  margin: 0 auto;
}
.zhuanlan-ul1 {
  display: flex;
  align-items: baseline;
  white-space: nowrap;
}
.zhaunlan-ul1-li {
  font-weight: 500;
  color: #b71ed7;
}

.zhuanlan-why {
  font-size: 0.24rem;
  font-weight: 600;
  line-height: 1.2;
  color: #2e3135;
  margin-top: 0.1rem;
}
.zhuanlan-why a{
  color: #2e3135;
}
.zhuanlan-ul3 {
  display: flex;
  margin-top: 0.2rem;
}
.ul3img {
  width: 0.24rem;
  height: 0.24rem;
  margin-right: 0.04rem;
}
.zhuanlan-ul3-li1 {
  align-items: center;
  display: flex;
  height: 100%;
}
.zhuanlan-ul3 > li {
  width: 1rem;
  height: 0.26rem;
  border: 1px solid #999;
  border-radius: 0.02rem;
  padding: 0 0.2rem;
}
.zhuanlan-ul3 > li > a {
  display: flex;
}
.wangzy,
.Javascript,
.dayday {
  color: #b2bac2;
}
</style>

