<template>
    <el-container>
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
        <el-container>
            <el-aside width="200px">
                <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>导航一</span>
                        </template>
                        <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航二</span>
                    </el-menu-item>
                    <el-menu-item index="3" disabled>
                        <i class="el-icon-document"></i>
                        <span slot="title">导航三</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航四</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-container>
                <el-main>
                    <el-form label-width="210px">
                        <span class="font-line">------------------------项目详情------------------------</span>
                        <el-form-item label="项目id">
                            <span>001</span>
                        </el-form-item>
                        <el-form-item label="项目名称">
                            <span>测试项目一</span>
                        </el-form-item>
                        <el-form-item label="项目类别">
                            <span>综合</span>
                        </el-form-item>
                        <el-form-item label="项目上传者">
                            <span>测试用户4</span>
                        </el-form-item>
                        <el-form-item label="上传时间">
                            <span>2022</span>
                            <span>04-27</span>
                        </el-form-item>
                        <el-form-item label="项目文档">
                            <img class="img_docx" src="@/assets/001.png"/>
                        </el-form-item>
                        <el-form-item label="项目描述">
                            <span>这是一个测试项目，用于测试评审功能是否正常。</span>
                        </el-form-item>
                        <span class="font-line">------------------------评审打分------------------------</span>
                        <el-form-item label="技术是否有创新" required>
                            <el-radio-group v-model="form.resource1">
                                <el-radio label="是"></el-radio>
                                <el-radio label="否"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="项目是否环保" required>
                            <el-radio-group v-model="form.resource2">
                                <el-radio label="是"></el-radio>
                                <el-radio label="否"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="项目的必要性" required>
                            <el-radio-group v-model="form.resource3">
                                <el-radio label="10-9(很强)"></el-radio>
                                <el-radio label="8-7(强)"></el-radio>
                                <el-radio label="6-5(较强)"></el-radio>
                                <el-radio label="4(一般)"></el-radio>
                                <el-radio label="4分以下(较差)"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="项目的先进性" required>
                            <el-radio-group v-model="form.resource4">
                                <el-radio label="10-9(很强)"></el-radio>
                                <el-radio label="8-7(强)"></el-radio>
                                <el-radio label="6-5(较强)"></el-radio>
                                <el-radio label="4(一般)"></el-radio>
                                <el-radio label="4分以下(较差)"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="项目的可行性" required>
                            <el-radio-group v-model="form.resource5">
                                <el-radio label="10-9(很强)"></el-radio>
                                <el-radio label="8-7(强)"></el-radio>
                                <el-radio label="6-5(较强)"></el-radio>
                                <el-radio label="4(一般)"></el-radio>
                                <el-radio label="4分以下(较差)"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                         <el-form-item label="项目实施基础评价" required>
                            <el-radio-group v-model="form.resource6">
                                <el-radio label="10-9(很强)"></el-radio>
                                <el-radio label="8-7(强)"></el-radio>
                                <el-radio label="6-5(较强)"></el-radio>
                                <el-radio label="4(一般)"></el-radio>
                                <el-radio label="4分以下(较差)"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                         <el-form-item label="项目市场前景与预期效果评价" required>
                            <el-radio-group v-model="form.resource7">
                                <el-radio label="10-9(很强)"></el-radio>
                                <el-radio label="8-7(强)"></el-radio>
                                <el-radio label="6-5(较强)"></el-radio>
                                <el-radio label="4(一般)"></el-radio>
                                <el-radio label="4分以下(较差)"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                         <el-form-item label="项目的竞争优势" required>
                            <el-rate v-model="form.value"  :texts=this.texts01 :colors="colors"  show-text></el-rate>
                        </el-form-item>
                         <el-form-item label="项目市场需求" required>
                            <el-rate v-model="form.value"  :texts=this.texts02 :colors="colors"  show-text></el-rate>
                        </el-form-item>
                        <el-form-item label="项目风险预估" required>
                            <el-rate v-model="form.value"  :texts=this.texts03 :colors="colors"  show-text></el-rate>
                        </el-form-item>
                        <el-form-item label="项目评价意见" required>
                            <el-input type="textarea" v-model="form.desc"></el-input>
                        </el-form-item>
                    </el-form>
                </el-main>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
export default {
    data() {
        return{
            form: {
                resource1: '',
                resource2: '',
                resource3: '',
                resource4: '',
                resource5: "",
                desc: '',
                value: ''
            },
            texts01: ['极小','较弱','一般','较强','极大'],
            texts02: ['极小','较弱','一般','较强','极大'],
            texts03: ['极小','较弱','一般','较强','极大'],
            colors: ['#99A9BF', 'rgba(224, 132, 40)', 'red']
        }
    },
    methods: {
        loginOut () {
          // 清空 token
          window.sessionStorage.clear()
          // 路由跳转到登录注册页
          this.$router.push('/Login_and_Register')
        },
        userinfo () {
          this.$router.push('/userinfo')
        },
    }
}
</script>

<style scoped>
.el-header{
    background-color: #373d41;
    display: flex;
    justify-content: space-between;
    padding: 0;
    align-content: center;
    color: #fff;
    font-size: 20px;
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
.el-main{
    background-color: #fff;
    box-shadow: 2px 2px 10px #373d41;
    width: 98%;
    margin-left: 1%;
    margin-top: 5px;
}
.font-line{
    position: relative;
    font-size: 20px;
    font-weight: 700;
    left: 25%;
}
.font_01{
    font-size: 20px;
}
.el-form-item__label{
    font-size: 20px;
}
.el-textarea{
    width: 60%;
}
.el-textarea__inner{
    height: 90px;
}
</style>