<template>
  <div class="header">
    <a href="javascript:;" class="logo">
      <img src="https://b-gold-cdn.xitu.io/v3/static/img/simplify-logo.3e3c253.svg" alt />
    </a>
    <nav>
      <ul class="nav-list">
        <li>
          <div class="menu" @click="handleNav()">
            <span>首页</span>
            <i class="iconfont icon-zelvxuanzefeiyongdaosanjiaoxingfandui"></i>
          </div>
          <ul class="menu-show" v-if="showFlag">
            <router-link to="/" tag="li">
              <a href="javascript:;">首页</a>
            </router-link>
            <router-link to="/boiling" tag="li">
              <a href="javascript:;">沸点</a>
            </router-link>
            <router-link to="/topic" tag="li">
              <a href="javascript:;">话题</a>
            </router-link>
            <router-link to="/brochure" tag="li">
              <a href="javascript:;">小册</a>
            </router-link>
            <router-link to="/events" tag="li">
              <a href="javascript:;">活动</a>
            </router-link>
          </ul>
        </li>
        <li>
          <form>
            <input type="text" placeholder="搜索更新啦" class="ipt" />
          </form>
        </li>
        <li class="remind">
          <a href="javascript:;">
            <i class="iconfont icon-lingdang"></i>
          </a>
        </li>
        <li class="person">
          <div class="personShow" @click="handlePic()"></div>
          <ul class="personMenu" v-if="picFlag">
            <div>
              <li>
                <a href="javascript:;">
                  <i class="iconfont icon-shuxiebianji"></i>
                  <span>写文章</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i class="iconfont icon-caogaoben"></i>
                  <span>草稿</span>
                </a>
              </li>
            </div>
            <div>
              <li>
                <a href="javascript:;">
                  <i class="iconfont icon-wodedangxuan"></i>
                  <span>我的主页</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i class="iconfont icon-dianzan"></i>
                  <span>我赞过的</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i class="iconfont icon-shoucang"></i>
                  <span>我的收藏集</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i class="iconfont icon-shopcart"></i>
                  <span>已购</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i class="iconfont icon-biaoqian"></i>
                  <span>标签管理</span>
                </a>
              </li>
            </div>
            <div>
              <li>
                <a href="javascript:;">
                  <i class="iconfont icon-shezhi"></i>
                  <span>设置</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i class="iconfont icon-guanyuwomen"></i>
                  <span>关于</span>
                </a>
              </li>
            </div>
            <div>
              <li>
                <a href="javascript:;">
                  <i class="iconfont icon-dengchu"></i>
                  <span>登出</span>
                </a>
              </li>
            </div>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      showFlag: false,
      picFlag: false
    };
  },
  methods: {
    handleNav() {
      this.showFlag = !this.showFlag;
    },
    handlePic() {
      this.picFlag = !this.picFlag;
    }
  }
};
</script>

<style scoped>
     .header {
            display: flex;
            width: 96%;
            height: 1.2rem;
            margin: 0 auto;
            align-items: center;
            border-bottom: 1px solid #f1f1f1;
            position: relative;
            background: #fff;
        }
        
        .logo {
            width: .9rem;
            height: .76rem;
            min-width: .9rem;
            margin-left: .16rem;
        }
        
        .logo img {
            width: 100%;
            height: 100%;
        }
        
        nav {
            height: 100%;
            flex: 1 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .nav-list {
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
        
        .menu {
            display: flex;
            align-items: center;
            color: #007fff;
            font-size: .33rem;
            justify-content: center;
            padding: 0;
            width: 1.3rem;
            cursor: pointer;
        }
        
        .menu span {
            margin-right: .14rem;
        }
        
        .menu i {
            font-size: .25rem;
        }
        
        form {
            border: 1px solid hsla(0, 0%, 59.2%, .2);
            background-color: rgba(227, 231, 236, .2);
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-radius: .04rem;
            margin: 0 .14rem;
        }
        
        .remind {
            margin: 0 .14rem;
        }
        
        .remind a i {
            font-size: .55rem;
        }
        
        .ipt {
            width: 2.2rem;
            padding: .14rem;
            font-size: .22rem;
            border: 0;
            color: #666;
            background-color: transparent;
        }
        
        .person {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            padding-left: .28rem;
        }
        
        .personShow {
            cursor: pointer;
            width: .6rem;
            height: .6rem;
            border-radius: 50%;
            background: url(https://mirror-gold-cdn.xitu.io/16bcf0e758d46207500?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1)no-repeat;
            background-size: 100%;
        }
        
        .personMenu {
            position: absolute;
            right: 0;
            top: 1.1rem;
            width: 3.14rem;
            background-color: #fff;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .1);
            border: 1px solid rgba(177, 180, 185, .45);
            border-radius: .08rem;
            font-size: .32rem;
            z-index: 9;
        }
        
        .personMenu div {
            border-bottom: 1px solid rgba(0, 0, 0, .04);
            padding: .24rem 0;
        }
        
        .personMenu div a {
            display: flex;
            align-items: center;
            padding: .12rem .24rem;
            font-size: .3rem;
        }
        
        .personMenu div a i {
            display: inline-block;
            width: .38rem;
            height: .38rem;
            margin-right: .2rem;
            font-size: .35rem;
            color: #b2bac2;
            vertical-align: middle;
        }
        
        .menu-show {
            position: absolute;
            top: 1.1rem;
            background-color: #fff;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .1);
            border: 1px solid rgba(177, 180, 185, .45);
            z-index: 9;
        }
        
        .menu-show li {
            height: 1rem;
            padding: 0 .36rem;
            line-height: 1rem;
            font-size: .3rem;
        }
        
        .menu-show-active {
            color: #007fff;
        }
        </style>