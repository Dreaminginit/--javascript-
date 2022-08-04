<template>
    <div class="userinfo">
        <div>
            <el-link @click="backhome" icon="el-icon-back" class="tittle_1">返回</el-link>
            <sapn class="title_2">个人中心</sapn>
        </div>
        <div class="contain">
            <div class="top_info">
                <div class="picture_header">
                    <img class="picture_img" src='https://ww4.sinaimg.cn/mw2000/a1d3feabjw1ez3ul46nlsj20hs0hsmz1.jpg'/>
                </div>
                <div class="user_info">
                    <div class="avatar_box" style="width:6.25rem;height:6.25rem;">
                        <el-avatar class="avatar_img" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                    </div>
                    <span class="font1">{{ tableData.nickname }}</span>
                </div>
            </div>
            <div class="bottom_info">
                <div class="tap_nav">
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="用户信息" name="first">
                            <el-form label-position="left" inline class="demo-table">
                                <el-form-item label="用户ID：">
                                    <span>{{ tableData.id }}</span>
                                </el-form-item>
                                <el-form-item label="用户名：">
                                    <span>{{ tableData.username }}</span>
                                </el-form-item>
                                <el-form-item label="用户昵称：">
                                    <span>{{ tableData.nickname }}</span>
                                </el-form-item>
                                <el-form-item label="手机号码：">
                                    <span>{{ tableData.phonenumber }}</span>
                                </el-form-item>
                                <el-form-item label="email：">
                                    <span>{{ tableData.email }}</span>
                                </el-form-item>
                                <el-form-item>
                                    <span class="font_btn" @click="showEditDialog(tableData.id)">编辑</span>
                                </el-form-item>
                            </el-form>
                        </el-tab-pane>
                        <el-tab-pane label="赛事管理" name="second">赛事管理</el-tab-pane>
                        <el-tab-pane label="相册管理" name="third">相册管理</el-tab-pane>
                    </el-tabs>

                     <el-dialog title="修改个人信息" @close="editClosed" :visible.sync="isEditDialog" width="80%">
                        <el-form :model="editForm" :rules="editFormRules" ref="editFormRef" label-width="30%">
                            <el-form-item label="用户ID：">
                                <el-input v-model="editForm.id" disabled></el-input>
                            </el-form-item>
                            <el-form-item label="用户名：">
                                <el-input v-model="editForm.username" disabled></el-input>
                            </el-form-item>
                            <el-form-item label="用户昵称：">
                                <el-input v-model="editForm.nickname"></el-input>
                            </el-form-item>
                            <el-form-item label="手机号码：">
                                <el-input v-model="editForm.phonenumber"></el-input>
                            </el-form-item>
                            <el-form-item label="email：">
                                <el-input v-model="editForm.email"></el-input>
                            </el-form-item>
                        </el-form>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="isEditDialog = false">取消</el-button>
                            <el-button type="primary" @click="editUserInfo">保存</el-button>
                        </span>
                    </el-dialog>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { valid } from '@hapi/joi'
export default {
    data() {
        return {
            // 存储从服务器获取的用户信息空对象
             tableData: {},
            // 修改用户信息弹窗关闭或显示
            isEditDialog: false,
            // 编辑用户信息的空对象
            editForm: {},
            // 修改用户信息表单验证规则
            editFormRules: {

            }
        }
    },
    methods: {
        // 获取用户信息函数
        async getUserinfo() {
            const { data: res } = await this.$http.get('/my/userinfo')
            if(res.status !== 0) return console.log(res.message)
            // 将从数据库获取的用户信息赋值给定义空对象
            this.tableData = res.data
        },
        // 用于弹出修改用户信息的页面
        async showEditDialog(id) {
            const { data: res } = await this.$http.get('/my/userinfo/')
            if(res.status !== 0) return console.log(res.message)
            this.editForm = res.data
            this.isEditDialog = true
        },
        // 监听修改用户信息弹窗是否关闭
        editClosed() {
            this.$refs.editFormRef.resetFields()
        },
        //修改用户信息函数
        editUserInfo() {
            this.$refs.editFormRef.validate( async valid => {
                console.log(valid)
                if(!valid) return
                // 发起修改用户信息的数据请求
                const {data: res} = await this.$http.post('/my/userinfo', {
                    id: this.editForm.id,
                    nickname: this.editForm.nickname,
                    phonenumber: this.editForm.phonenumber,
                    email: this.editForm.email
                })
                if(res.status !== 0) return console.log(res.message)
                this.isEditDialog = false
                this.getUserinfo()
                console.log(res.message)
            })
        },
        backhome() {
            this.$router.push('/home')
        }
    },
    // 当一登录页面时，就触发获取用户信息函数
    created() {
        this.getUserinfo();
    }
    
}
</script>

<style>
.userinfo{
/* 定义div为浏览器视图窗口 */
	align-items: center;
		background-color: var(--white);
		background: url("https://asaki-m.com/zhuye/indexBg/anime-people-6.jpg");
		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		height: 100vh;
		place-items: center;
}
.tittle_1{
    font-size: 20px;
    font-weight: 700;
    margin-left: 20px;
    margin-top: 20px;
    color: #fff;
}
.title_2{
    font-size: 30px;
    font-weight: 700;
    color: #fff;
    margin-left: 36%;
}
.el-link.el-link--default:hover{
    color: rgb(251, 138, 208);
}
.contain{
    width: 50%;
    height:90%;
    position: relative;
    top: 15px;
	left: 50%;
	transform: translateX(-50%);
    box-shadow: 0 0 3px #f0f0f0,
				0 0 6px #f0f0f0;
}
.top_info{
    align-items: center;
    height: 30%;
    padding: 0;
}
.picture_header{
    width: calc(100% + 2px);
    height: 200px;
    margin: -1px -1px 0;
    position: relative;
    display: inline-block;
}.picture_img{
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    object-fit: cover;
}
.user_info{
    display: flex;
    background-color: #fff;
}
.avatar_box{
    margin: -50px 20px 20px 15px;
    border-radius: 50%;
    z-index: 10;
    display: inline-block;
}
.avatar_img{
    height: 100%;
    width: 100%;
    border-radius: 50%;
}
.font1{
    line-height: 20px;
    font-size: 20px;
    font-weight: 700;
}
.bottom_info{
    position: absolute;
    width: 100%;
    height: 60%;
    bottom: 0;
    background-color: #fff;
}
.tap_nav{
    position: relative;
    display: flex;
}
.el-tabs{
    width: 80%;
    margin-left: 10%;
}
.el-tabs__active-bar{
    margin-left: 6%;
    width: 80%;
    background-color: rgb(255, 167, 36);
}
.el-tabs__item.is-active{
    color: rgb(255, 167, 36);
}
.el-tabs__item{
    justify-content: space-around;
    font-weight: 700;
}
.el-tabs__item{
    left: 20px;
    padding-right: 50px;
}
.el-tabs__content{
    position: relative;
    top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
}
.demo-table {
    font-size: 0;
}
.demo-table label {
    width: 90px;
    color: #99a9bf;
}
.demo-table .el-form-item {
    margin-bottom: 0;
    width: 100%;
}
.font_btn{
    font-size: 15px;
    font-weight: 700;
    color: rgb(73, 73, 73);
}
.el-input{
    float: left;
    width: 70%;
}
</style>