<template>
    <div id="boiling">
        <Header/>
        <div class="container">
            <div class="scrollNav">
                <ul>
                    <li>推荐</li>
                    <li>热门</li>
                    <li>关注</li>
                    <li>开源推荐</li>
                    <li>内推招聘</li>
                    <li>掘金相亲</li>
                    <li>上班摸鱼</li>
                    <li>应用安利</li>
                    <li>开发工具</li>
                    <li>New资讯</li>
                </ul>
            </div>
        </div>
        <div id="wraper">
        <div class="feidiantuijian-list" v-for="(item,index) in dataLists" :key="index">
            <div class="one">
                <div class="one-header">
                    <div class="one-header-left">
                        <div class="one-header-left-title">{{item.user.username}}</div>
                        <div class="one-header-left-r">
                            <span>{{item.user.jobTitle}}</span>
                            <span>11小时前</span>
                        </div>
                    </div>
                    <div class="one-header-right">关注</div>
                </div>
                <div class="one-main">
                    <p>{{item.content}}</p>
                </div>
                <div class="one-img">
                    <img :src="item.pictures[0]" alt="" :class="item.pictures.length!=0?'box':''">
                </div>
                <div class="one-foot">
                    <div class="one-foot-left">
                        <img src="https://b-gold-cdn.xitu.io/v3/static/img/zan.e9d7698.svg" alt=""><span>{{item.likedCount}}</span>
                    </div>
                    <div class="one-foot-right">
                        <i class="iconfont icon-shuxiebianji"></i><span>{{item.commentCount}}</span>
                    </div>
                </div>
            </div>
        </div>

        </div>
    </div>
</template>


<script>
import Header from "common/header";
import http from "utils/http";
export default {
    name:"boiling",
    components:{
        Header,
    },
    data(){
        return {
            dataLists:[],
        }
    },
    created(){
        http('get','/v1/getHotRecommendList?uid=&device_id=&token=&src=web')
        .then((data)=>{
            console.log(data.d.list);
            this.dataLists = data.d.list;
        })
    },
    mounted(){
        
        
    }
}
</script>

<style scoped>
#boiling{
    width: 100%;
    height: 100%;
}
#wraper{
    background-color: #f4f5f5;
    overflow: auto;
    height: 80%;
}
.container{
    padding-bottom: .3rem;
    background-color: #f4f5f5;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .15);
}
.scrollNav {
    width: 100%;
    height: .92rem;
    border-top: 1px solid #f1f1f1;
    background: #fff; 
}

.scrollNav ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    height: .92rem;
    line-height: .92rem;
    width: 100%;
    background: #fff;
    overflow-x: auto;
    overflow-y: hidden;
}

.scrollNav ul li {
    font-size: .24rem;
    height: .92rem;
    line-height: .92rem;
    text-align: center;
    width: 18%;
    flex-shrink: 0;
}

.scrollNav>ul>li:hover {
    color: blue;
}
.feidiantuijian-list {
        width: 100%;
        display: flex;
        flex-direction: column;
        overflow-x: hidden;
        overflow-y: auto;
        margin-bottom: .4rem;
}

    .one {
        width: 100%;
        height: auto;
        background: #fff;
        margin-bottom: .3rem;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .15);
    }
    .one:nth-last-child(1){
        margin-bottom: 0;
    }

    .one-header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .32rem .48rem 0 .48rem;
    }

    .one-header-left {
        display: flex;
        flex-direction: column;
        align-content: space-between
    }

    .one-header-left-title {
        font-size: .28rem;
        font-weight: 600;
        color: #2e3135;
    }

    .one-header-right {
        width: 1.1rem;
        border-radius: .04rem;
        text-align: center;
        line-height: .52rem;
        height: .52rem;
        font-size: .26rem;
        border: 1px solid #6cbd45;
        color: #6cbd45;
    }

    .one-main {
        padding: 0 .48rem;
        line-height: 1.5;
        position: relative;
    }

    .emoji {
        width: .4rem;
        height: .4rem;
        position: absolute;
        right: 1.73rem;
        bottom: 0
    }

    .one-img {
        padding: 0 0 0 .48rem;
        margin: .2rem 0 .3rem 0;
    }
     .one-img .box{
         width: 6rem;
         height: 4rem;
     }
    .one-foot {
        display: flex;
        width: 100%;

    }

    .one-foot-left,
    .one-foot-right {
        width: 50%;
        height: .68rem;
        border-top: 1px solid #e5e5e5;
        display: flex;
        justify-content: center;
        align-items: center
    }

    .one-foot-left>img {
        width: .36rem;
        height: .36rem;
    }

    .one-foot-left {
        border-right: 1px solid #e5e5e5;
    }

    .one-foot-left>span {
        width: .23rem;
        height: .36rem;
        margin-left: .07rem;
        line-height: .36rem
    }

    .icon-shuxiebianji {
        font-size: .34rem;
        color: #999
    }

    .one-foot-right>span {
        width: .23rem;
        height: .36rem;
        margin-left: .07rem;
        line-height: .36rem
    }

   


</style>



