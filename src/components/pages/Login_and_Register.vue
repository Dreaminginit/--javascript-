<template>
    <div class="bg_img">
        <div class="title_font">
			<span class="b_font">专家评审系统</span>
			<span class="s_font">专家端</span>
			<el-link class="tap_login" icon="el-icon-s-custom" type="danger" @click="TapLogin">您是用户请切换，点击这里</el-link>
		</div>

        <div class="contain_box">
           <div class="form_demo">
               <div class="switch"><span class="btn_font">已有/未有账号？</span></div>
               <input type="checkbox" style="display: none;" id="change">
                    <label for="change">切换</label>

               <div class="turn_page">
                   <div class="over">
                       <el-form action="" class="login" :model="loginForm" :rules="loginRules">
                           <h1>欢迎回来</h1>
                           <el-form-item prop="username">
                               <span class="h2">用户名：</span>
                               <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
                           </el-form-item>
                           <el-form-item prop="password">
                                <span class="h2">密码：</span>
                                <el-input v-model="loginForm.password" placeholder="请输入密码"></el-input> 
                           </el-form-item> 
                           <el-form-item>
                               <el-button class="btn1" type="primary" round>登录</el-button>
                           </el-form-item>
                       </el-form>

                       <el-form action="" class="register" :model="registerForm" :rules="loginRules">
                           <h1>加入我们</h1>
                           <el-form-item prop="invitecode">
                               <span class="h3">邀请码：</span>
                                <el-input v-model="registerForm.invitecode" placeholder="请输入邀请码"></el-input>
                           </el-form-item>
                           <el-form-item prop="username">
                               <span class="h3">用户名：</span>
                               <el-input v-model="registerForm.username" placeholder="请输入用户名"></el-input>
                           </el-form-item>
                           <el-form-item prop="password">
                                <span class="h3">密码：</span>
                                <el-input v-model="registerForm.password" placeholder="请输入密码"></el-input> 
                           </el-form-item>
                           <el-form-item>
                               <el-button class="btn2" type="primary" round>注册</el-button>
                           </el-form-item>
                       </el-form>
                   </div>
               </div>
           </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return{
            // 登录表单的数据绑定对象
			loginForm: {
				username:'',
				password: ''
			},
			registerForm: {
				username:'',
				password: '',
				invitecode: ''
			},
            // 登录表单验证规则
       		loginRules: {
			//   验证用户名是否合法
				username: [
					{ required: true, message: '请输入用户名', trigger: 'blur' },
					{ min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
				],
				// 验证密码是否合法
				password: [
					{ required: true, message: '请输入密码', trigger: 'blur' },
					{ min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
				],
                // 验证邀请码是否合法
                invitecode: [
                    { required: true, message: '邀请码不能为空', trigger: 'blur' },
                    { min:6, max: 6, message: '邀请码为6个字符', trigger: 'blur' }
                ]
			},
        }
    },
    methods: {
        TapLogin () {
            this.$router.push('/Login_Register')
        }
    }
}
</script>

<style scoped>
.bg_img{
    align-items: center;
	background-color: var(--white);
	background: url("https://asaki-m.com/zhuye/indexBg/animescape-2.jpg");
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	display: grid;
	height: 100vh;
	place-items: center;
    overflow: hidden;
}
.title_font{
	position: fixed;
	top: 0;
	left: 10px;
	/* text-shadow: 1px 1px 0 #000,
                 -1px 1px 0 #000,
                 1px -1px 0 #000; */
}
.b_font{
	font-size: 40px;
	font-weight: 700;
	color: #fff;
}
.b_font::after{
    content: "专家评审系统";
    /* 颜色为透明 */
    color: transparent;
    position: absolute;
    top: 0;
    left: 10px;
    background: linear-gradient(to right,#ff69b3,#fe0000,#ffa401,#ffff01,#008102,#40e1d2,#410098,#9400d4);
    /* 以文字的范围来裁剪背景图片 */
    background-clip: text;
    -webkit-background-clip: text;
    /* 将元素裁剪为一个圆形（100px表示圆的直径，0% 50%表示圆心的位置） */
    clip-path: circle(100px at 0% 50%);
    /* 执行动画（动画 时长 infinite表示无限次播放） */
    animation: light 5s infinite;
}
/* 定义动画 改变圆心的位置 */
@keyframes light{
    0%{
        clip-path: circle(100px at 0% 50%);
    }
    50%{
        clip-path: circle(100px at 100% 50%);
    }
    100%{
        clip-path: circle(100px at 0% 50%);
    }
}
.s_font{
	font-size: 20px;
	color: #fff;
    text-shadow: 1px 1px 0 #000,
                 -1px 1px 0 #000,
                 1px -1px 0 #000;
}
.tap_login{
	position: fixed;
	top: 24px;
	right: 30px;
	font-size: 16px;
	font-weight: 700;
}
.contain_box{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
}
.form_demo{
  position: relative;
  width: 400px;
  height: 600px;
}
/* 切换按钮所在的白色区域 */
.switch{
  background-color: #FCFBFA;
  width: 100%;
  height: 140px;
  position: absolute;
  left: 0;
  bottom: 0;
  border-radius: 8px;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
}
.btn_font{
    margin-top: 100px;
}
/* 切换按钮 */
#change:checked+label,
/* +用来选择同级后面最近的元素  */
#change:not(:checked)+label{
  background-color: #FFB8CE;
  color: white;
  width: 280px;
  padding: 8px 0;
  /* 用padding方便文字垂直居中 */
  font-size: 24px;
  font-weight: 600;
  position: absolute;
  bottom: 22px;
  left: 50%;
  transform: translate(-50%);
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
}
/* 旋转体 */
.turn_page{
  width: 100%;
  height: 400px;
  position: absolute;
  top: 0;
  perspective: 800px;
  /* 旋转的时候的透视效果 */
}
.over{
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;/* preserve-3d表示后代元素任然以3d的模式进行变换 */
  transition: all 1.6s ease;
  /* 旋转持续时间 */
  /* ease是慢快慢 */
}
#change:checked ~ .turn_page .over{
  transform: rotateY(180deg);
}
.el-form{
  position: absolute;
  background-color: #FCFBFA;
  height: 100%;
  width: 100%;
  border-radius: 8px;
  transform-style: preserve-3d;
  text-align: center;
  backface-visibility: hidden;
  /* backface-visibility是一个重要的属性，它规定背对用户的3D元素是否显示，
  这里应该规定为不显示（hidden），否则不该显示背面的时候背面会显示出来? */
}
.register{
    transform: rotateY(180deg);
}
.h1{
    margin-top: 40px;
    transform-style: preserve-3d;
    transform: translate3d(0, 0, 1px);
}
.el-input{
    width: 70%;
    border-radius: 8px;
    margin-bottom: 20px;
    padding: 0 16px;
    transform-style: preserve-3d;
    transform: translate3d(0, 0, 1px);
    float: right;
}
.h2{
    font-size: 15px;
    font-weight: 700;
    float: left;
    transform-style: preserve-3d;
    transform: translate3d(0, 0, 1px);
    margin-left: 20px;
    margin-top: 20px;
}
.h3{
    font-size: 15px;
    font-weight: 700;
    float: left;
    transform-style: preserve-3d;
    transform: translate3d(0, 0, 1px);
    margin-left: 20px;
}
.login .el-input:nth-child(-n+3){
  /* 选择class为login的子元素中的前三个input */
  margin: 20px 0;
}
.btn1{
  border: none;
  width: 280px;
  font-size: 24px;
  font-weight: 600;
  padding: 6px 0;
  color: white;
  border-radius: 8px;
  margin-top: 15px;
  cursor: pointer;
}
.btn2{
    background-color: #981E61;
  border: none;
  width: 280px;
  font-size: 24px;
  font-weight: 600;
  padding: 6px 0;
  color: white;
  border-radius: 8px;
  margin-top: 15px;
  cursor: pointer;
}
</style>