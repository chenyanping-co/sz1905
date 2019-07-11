<template>
    <div>
        <Header/>
        <div class="scrollNav">
            <ul>
                <router-link tag="li" to="/welcome/recommended">推荐</router-link>
                <router-link tag="li" to="/welcome/backend">后端</router-link>
                <router-link tag="li" to="/welcome/frontend">前端</router-link>
                <router-link tag="li" to="/welcome/android">Android</router-link>
                <router-link tag="li" to="/welcome/ios">iOS</router-link>
                <router-link tag="li" to="/welcome/ai">人工智能</router-link>
                <router-link tag="li" to="/welcome/freebie">开发工具</router-link>
                <router-link tag="li" to="/welcome/career">代码人生</router-link>
                <router-link tag="li" to="/welcome/article">阅读</router-link>
            </ul>
        </div>
        <!-- <HomeList/> -->
        <router-view></router-view>
    </div>
</template>


<script>
import Header from "../../common/header";
import HomeList from "components/homelist"
export default {
    name:"home",
    components:{
        Header,
        HomeList
    }
}
</script>

<style scoped>
.scrollNav{width: 100%;height: .92rem;border-top: 1px solid #666;background: #fff;overflow-x: scroll;overflow-y: hidden;}
.scrollNav>ul{display: flex;justify-content: space-between;line-height: .92rem;width: 150%}
.scrollNav>ul>li{font-size: .24rem;width: 1.4rem;height: .92rem;margin: 0 .1rem;line-height: .92rem;text-align: center;}
.scrollNav>ul>li:hover{color: #007fff;}
.firstnavli{margin-left: .35rem}

</style>



