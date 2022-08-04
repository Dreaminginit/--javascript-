<template>
    <el-container class="home_container">
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
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item>首页</el-breadcrumb-item>
                        <el-breadcrumb-item>用户中心</el-breadcrumb-item>
                        <el-breadcrumb-item :to="{ path: '/' }">项目状态</el-breadcrumb-item>
                    </el-breadcrumb>
                    <el-card>
                        <el-row :gutter="20">
                            <el-col :span="7">
                                <el-input placeholder="请输入内容">
                                    <el-button slot="append" icon="el-icon-search"></el-button>
                                </el-input>
                            </el-col>
                            <el-col :span="4">
                                <el-button type="primary">上传项目</el-button>
                            </el-col>
                        </el-row>
                    
                        <el-table :data="tableList" border stripe>
                            <el-table-column label="项目id" prop="id"></el-table-column>
                            <el-table-column label="项目名称" prop="project"></el-table-column>
                            <el-table-column label="项目类别" prop="item"></el-table-column>
                            <el-table-column label="项目上传者" prop="username"></el-table-column>
                            <el-table-column label="上传时间" prop="date"></el-table-column>
                            <el-table-column label="项目状态" prop="state">
                                <span class="font-color">评审中</span>
                            </el-table-column>
                            <el-table-column label="项目操作" prop="is_delete">
                                <el-tooltip content="编辑" placement="top">
                                    <el-button type="primary" icon="el-icon-edit" circle></el-button>
                                </el-tooltip>
                                <el-tooltip content="删除" placement="top">
                                    <el-button type="danger" icon="el-icon-delete" circle></el-button>
                                </el-tooltip>
                            </el-table-column>
                        </el-table>
                        <el-pagination class="font_page" :current-page="queryinfo.pagenum" :page-size="queryinfo.pagesize" :total="queryinfo.total"></el-pagination>
                    </el-card>    
                </el-main>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
export default {
    data() {
        return{
            tableList: [
                {
                    id: '001',
                    project: '测试项目一',
                    item: '综合',
                    username: '测试用户4',
                    date: '2022 04-27',
                    state: '',
                    is_delete: ''
                }
            ],
            queryinfo: {
                pagenum: 1,
                pagesize: 1,
                total: 1,
            }
        }
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
    }
}
</script>

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
    background-color: #ebf2f9;
    box-shadow: 2px 2px 10px #373d41;
    width: 98%;
    margin-left: 1%;
    margin-top: 5px;
}
.el-breadcrumb{
    margin-bottom: 15px;
    font-size: 20px;
}
.el-table{
    margin-top: 15px;
    font-size: 20px;
}
span{
    color: rgb(145, 223, 28);
    font-weight: 700;
}
.font_page{
    margin-top: 15px;
    font-size: 20px;
}
</style>