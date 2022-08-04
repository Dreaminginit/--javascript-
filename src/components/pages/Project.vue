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
                    <el-form :model="form" label-width="100px">
                        <el-form-item label="项目名称" required>
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="项目类别" required>
                            <el-select v-model="form.region" placeholder="请选择项目类别">
                                <el-option label="工科"></el-option>
                                <el-option label="理科"></el-option>
                                <el-option label="文体"></el-option>
                                <el-option label="商科"></el-option>
                                <el-option label="综合"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="项目上传者" required>
                            <el-input v-model="form.username"></el-input>
                        </el-form-item>
                        <el-form-item label="上传时间" required>
                            <el-col :span="11">
                                <el-form-item>
                                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col class="line" :span="2">-</el-col>
                            <el-col :span="11">
                                <el-form-item>
                                    <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                                </el-form-item>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="项目描述">
                            <el-input v-model="form.desc" type="textarea"></el-input>
                        </el-form-item>
                        <el-form-item label="项目封面图">
                            <div class="img-show" v-if="imgUrl">
                                <img :src="imgUrl" class="avatar01"/>
                                <span class="actions">
                                    <!-- 放大 -->
                                    <span class="item">
                                        <i class="el-icon-zoom-in" @click="enlarge()"></i>
                                    </span>
                                    <!-- 删除 -->
                                    <span class="item">
                                        <i class="el-icon-delete" @click="del()"></i>
                                    </span>
                                </span>
                            </div>
                            <!-- 图片上传 -->
                            <el-upload v-else
                            action="#"
                            class="uploader-avatar"
                            list-type="picture"
                            :auto-upload="false"
                            :show-file-list="false"
                            :on-change="imgPreview">
                                <i class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                            <!-- 图片显示框 -->
                            <el-dialog :visible.sync="dialogVisible">
                                <img width="100%" :src="dialogUrl" alt=""/>
                            </el-dialog>
                        </el-form-item>
                        <el-form-item label="上传附件" required>
                            <el-card>
                                <el-upload class="upload-demo"
                                    ref="upload"
                                    action="#"
                                    :file-list="fileList"
                                    accept=".pdf, .doc, .docx, .xls, .xlsx, .zip, .jpg, .png, .rar"
                                    :http-request="reportFileHttpRequest"
                                    :on-preview="handlePreview"
                                    :on-remove="handleRemove"
                                    :before-upload="beforeAvatarUpload"
                                    :auto-upload="false"
                                    drag
                                    multiple
                                    style="text-align: center">
                                    <i class="el-icon-upload"></i>
                                    <div class="el-upload__text">将文件拖至此处，或<em>点击上传</em></div>
                                    <div  class="el-upload__tip" slot="tip">只能上传word,excel,pdf,jpg,png,zip,rar文件</div>
                                </el-upload>
                            </el-card>
                            <div align="center">
                                <span slot="footer" class="dialog-footer">
                                    <el-button style="margin-left: 10px;" size="small" @click="fileList = []">取消</el-button>
                                    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                                </span>
                            </div>
                        </el-form-item>
                    </el-form>
                </el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>

<script scoped>
export default {
    data() {
        return{
            imgUrl: '',
            dialogVisible: false,
            dialogUrl: '',
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                username: '',
                desc: ''
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
        // 缩略图
        imgPreview (file) {
            this.imgUrl = URL.createObjectURL(file.raw)
        },
        enlarge () {
            this.dialogVisible = true;
            this.dialogUrl = this.imgUrl;
        },
        del () {
            this.imgUrl = '';
            this.dialogUrl = '';
        },
        // 上传文件 此时会触发组件的http-request
        submitUpload() {
            this.$refs.upload.submit();
        },
        // 文件列表移除文件时的钩子
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        // 点击文件列表中已上传的文件时的钩子
        handlePreview(file) {
            console.log(file);
        },
        // 文件上传之前的钩子
        beforeAvatarUpload(file) {
            const isLt2M = file.size / 1024 / 1024 < 32;
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 32MB!');
            }
            return isLt2M;
        },
        // 自定义上传
        reportFileHttpRequest(param) {
            if (this.$refs.upload) {
                this.$refs.upload.clearFiles() // 清除上传的文件
            }
            const _this = this
            // 开始上传文件 新建一个formData
            const formData = new FormData();//FormData对象，添加参数只能通过append('key', value)的形式添加
            formData.append("file", param.file);//添加文件对象
            const url = 'http://***********/upload';
            axios.post(url, formData)
            .then(res => {
                axios.post(url, data)
                .then(function (resp) {
                    if (resp.data.code == 200) {
                        _this.$message({
                            message: '上传成功',
                            type: 'success'
                        });
                    } else {
                        _this.$message(resp.data.data)
                    }
                })
            })
        }
    }
}
</script>

<style>
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
.line{
    font-size: 30px;
    font-weight: 700;
}
.uploader-avatar .el-upload{
    background-color: #fbfbff;
    border: 2px dashed #72b2fb;
    border-radius: 6px;
    box-sizing: border-box;
    width: 148px;
    height: 148px;
    cursor: pointer;
    line-height: 146px;
    vertical-align: top;
    overflow: hidden;
}
.uploader-avatar .el-upload:hover{
    border-color: #72b2fb;
}
.img-show{
    position: relative;
    border: 2px solid #0f437d;
    border-radius: 6px;
    box-sizing: border-box;
    width: 148px;
    height: 148px;
    cursor: pointer;
    overflow: hidden;
}
.uploader-avatar>>>i{
    font-size: 28px;
    color: #8c939d;
}
.avatar01{
    width: 148px;
    height: 148px;
    display: block;
}
.actions{
    position: absolute;
    width: 100%;
    height: 100%;
    line-height: 148px;
    left: 0;
    top: 0;
    cursor: default;
    text-align: center;
    color: #fff;
    opacity: 0;
    font-size: 10px;
    background-color: rgba(0,0,0,.5);
    transition: opacity .3s;
}
.actions:hover{
    opacity: 1;
}
.actions:hover span{
    display: inline-block;
}
.actions span{
    display: none;
    margin: 0 16px;
    cursor: pointer;
}
.el-input{
    width: 60%;
    float: left;
}
.el-textarea{
    width: 60%;
}
.el-textarea__inner{
    height: 90px;
}
.el-card{
    width: 80%;
}
.el-select{
    width: 50%;
}
.el-col-11{
    width: 20%;
}
</style>