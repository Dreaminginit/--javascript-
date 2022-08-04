<template>
    <el-container class="home_container">
        <!-- 头部区域 -->
        <el-header>
            <div style="display:flex;align-items:center">
                <img src="@/assets/access.png" alt="" style="width:100px;height:50px;margin-left:10px;">
                <span style="margin-left:5px;font-size:30px;">专家评审系统</span>
            </div>
            <div style="display:flex;align-items:center;margin-right:10px">
                <img src="@/assets/default.png" alt="" class="avature" @click="userinfo"/>
                <el-button type="info" @click="loginOut">退出</el-button>
            </div>
        </el-header>
        <!-- 主体部分 -->
        <el-main>
            <!-- 菜单栏 -->
            <el-menu background-color="#545c64"
                text-color="#fff"
                active-text-color="#409EFF"
                mode="horizontal"
                class="el-menu-demo"
                >
                <!-- 循环菜单数据列表 -->
                <Menulist v-for="(menu,i) in menulist" :key="i" :item="menu"/>
            </el-menu>
            <div>
                <div class="body1_right">
                   <carousel/> 
                </div>
                <div class="body1_left">
                    <span class="font_1">留言板</span>
                    <div class="people_mian">
                        <el-button class="btn_1" type="primary" icon="el-icon-edit" circle></el-button>
                    </div>
                </div>
                <div class="body2">
                    <div class="body2_left">
                        <span class="body2_font">评审申报入口</span>
                        <div class="body2_left_contain">
                            <el-card shadow="hover">初级评审</el-card>
                            <el-card shadow="hover">中级评审</el-card>
                            <el-card shadow="hover">高级评审</el-card>
                            <el-card shadow="hover">专家评审</el-card>
                        </div>
                    </div>
                    <div class="body2_right">
                        <span class="body2_font">快速通道</span>
                        <div class="body2_right_contain">
                            <div class="body2_right_contain_top">
                                <div class="body2_right_contain_top_left" @click="toProject"><span>个人申报</span></div>
                                <div class="body2_right_contain_top_right" @click="toProject_access"><span>企业申报</span></div>
                            </div>
                            <div class="body2_right_contain_buttom" @click="toProject_jindu">行政申报</div>
                        </div>
                    </div>
                </div>
            </div>
        </el-main>
        <!-- 底部区域 -->
        <el-footer>
            <span class="footer">@ 2022 | 黄俊铭</span>
        </el-footer>
    </el-container>
</template>

<script>
// 导入菜单数据静态js
import menudata from './menu/menudata'
import Menulist from './Menulist.vue'
import carousel from './Carousel.vue'
export default {
    components: {
        Menulist,
        carousel
    },
  data () {
    return {
        // 左侧菜单列表
        menulist: []
    }
  },
  created () {
      this.menulist = menudata
  },
  methods: {
      loginOut () {
          // 清空 token
          window.sessionStorage.clear()
          // 路由跳转到登录注册页
          this.$router.push('/Login_Register')
      },
      userinfo () {
          this.$router.push('/userinfo')
      },
      toProject() {
          this.$router.push('/Project')
      },
      toProject_access() {
          this.$router.push('/Project_access')
      },
      toProject_jindu() {
          this.$router.push('/Project_jindu')
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home_container{
    height: 100%;
}
.el-header{
    background-color: #373d41;
    display: flex;
    justify-content: space-between;
    padding: 0;
    align-content: center;
    color: #fff;
    font-size: 20px;
}
.el-main{
    background-color: #fff;
    padding: 0;
    justify-content: center;
    align-content: center;
}
.avature{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-right: 20px;
}
.avature:hover{
    cursor: pointer;
}
.body1_right{
    width: 70%;
    margin-top: 20px;
    margin-left: 50%;
    transform: translateX(-50%);
}
.body1_left{
    width: 95%;
    height: 150px;
    margin-left: 20px;
    background-color: #ffffff;
    box-shadow: 2px 2px 10px #475669;
    border-radius: 8px;
}
.people_mian{
    width: 98%;
    height: 120px;
    background-color: #f4c882;
    margin-left: 1%;
}
.font_1{
    font-weight: 700;
    margin-left: 50%;
}
.btn_1{
    position: relative;
    margin-top: 15%;
    float: right;
}
.body2_left{
    margin-left: 40px;
    width: 30%;
    height: 100%;
    float: left;
}
.body2_font{
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    height: 80px;
    line-height: 80px;
}
.body2_left_contain{
    width: 100%;
    height: 251.6px;
    margin: auto;
    border: 1px solid #ddedfa;
    background-color: #ffffff;
    position: relative;
    box-shadow: 2px 2px 10px #475669;
}
.body2_right{
    margin-left: 20%;
    height: 100%;
    float: left;
}
.body2_right_contain{
    height: 251.6px;
    width: 100%;
    border: 1px solid #ddedfa;
    background-color: #ffffff;
    box-shadow: 2px 2px 10px #475669;
}
.body2_right_contain_top{
    height: 134px;
    width: 100%;
    border-bottom: 2px solid #b3b3b3;
}
.body2_right_contain_top_left{
    width: 188.5px;
    height: 133px;
    border-right: 2px solid #b3b3b3;
    background: url(http://xzzc.jsxzhrss.gov.cn/images/ww/a/a/grdlout.png) no-repeat center 40px;
    font-size: 16px;
    font-weight: 700;
    line-height: 195px;
    float: left;
}
.body2_right_contain_top_left:hover{
    background-color: #81c4ff;
    cursor: pointer;
}
.body2_right_contain_top_right{
    width: 188.5px;
    height: 133px;
    background: url(http://xzzc.jsxzhrss.gov.cn/images/ww/a/a/dwdlout.png) no-repeat center 40px;
    font-size: 16px;
    font-weight: 700;
    line-height: 195px;
    float: left;
}
.body2_right_contain_top_right:hover{
    background-color: #81c4ff;
    cursor: pointer;
}
.body2_right_contain_buttom{
    height: 135px;
    width: 100%;
    background: url(http://xzzc.jsxzhrss.gov.cn/images/ww/a/a/pshdlout.png) no-repeat 115px center;
    font-size: 16px;
    font-weight: 700;
    line-height: 135px;
    text-indent: 180px;
}
.body2_right_contain_buttom:hover{
    background-color: #81c4ff;
    cursor: pointer;
}
.el-footer{
    background-color: #333744;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
}
  
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}
  
.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
.footer{
    height: 5%;
    width: 100%;
    color: #ccc;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    margin-top: 30px;
}
</style>
