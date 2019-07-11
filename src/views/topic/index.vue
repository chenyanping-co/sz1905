<template>
    <div>
        <Header/>
        <div id="topic-view">
        <div id="content">
            <h2>全部话题</h2>
            <div id="lists">
                <ul>
                    <li v-for="(item,index) in topicList" :key="index">
                        <a :href="'https://juejin.im/topic/' + item.objectId">
                            <div class="ImgL" :style="'background-image:url('+item.icon+');'+'background-size:100% 100%'">
                                <!-- <img :src="item.icon" alt=""> -->
                            </div>
                        </a>
                        <div class="txtR">
                            <a :href="'https://juejin.im/topic/' + item.objectId">{{item.title}}</a>
                            <span><strong>{{item.followersCount}}</strong> 关注 · <strong>{{item.msgsCount}}</strong> 沸点</span>
                            <span class="sub">+ 关注</span>
                        </div>
                    </li>                  
                </ul>
            </div>
        </div>
    </div>
    </div>
</template>


<script>
import Header from "common/header";
import http from "utils/http";
export default {
    name:"topic",
    data(){
        return{
            topicList:[],
        }
    },
    components:{
        Header,
    },
    created(){
        http('get','/v1/topicList?uid=5d2061eb6fb9a07ef37688fe&device_id=1562403307560&token=eyJhY2Nlc3NfdG9rZW4iOiJaSlh5YjlFTU9KVzFnS0trIiwicmVmcmVzaF90b2tlbiI6IlIwVUxmaVZ1bXlmMjJ6NVIiLCJ0b2tlbl90eXBlIjoibWFjIiwiZXhwaXJlX2luIjoyNTkyMDAwfQ%3D%3D',{src:"web",sortType:"hot",page:0,pageSize:100})
        .then((data)=>{
            this.topicList = data.d.list;
            console.log(this.topicList)
        })
    }
}
</script>

<style scoped>
#topic-view{
    position: absolute;
    top: 1.2rem;
    bottom: 0;
    margin-top: .36rem;
    padding-left: .36rem;
    padding-right: .36rem;
    width: 100%;
    overflow: auto;
}
#content h2{
    font-size: .48rem;
    margin: .48rem 0;
    padding-left: .28rem;
}
#lists ul li{
    padding: .36rem .28rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
#lists ul li a{
    margin-right: 0.096rem;
}
#lists ul li .ImgL{
    width: 1.44rem;
    height: 1.44rem;
}
#lists ul li .ImgL img{
    width: 1.44rem;
    height: 1.44rem;
}
#lists ul li .txtR{
    height: 1.44rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: .28rem;
}
#lists ul li .txtR>a{
    font-size: .4rem;
    color: #007fff;
    font-weight: bold;
}
#lists ul li .txtR span{
    font-size: .28rem;
}
#lists ul li .txtR .sub{
    color: #37c701;
}
</style>



