<template>
    <div class="login-register">
		<div class="title_font">
			<img src="@/assets/access.png" alt="" style="width:100px;height:50px;margin-left:10px;">
			<span class="b_font">专家评审系统</span>
			<span class="s_font">用户端</span>
			<router-link :to="{path:'/Login_and_Register'}">
			<el-link class="tap_login" icon="el-icon-s-custom" type="danger">您是专家请切换，点击这里</el-link>
			</router-link>
		</div>
		<div class="contain">
			<!-- 输入登录与注册页面大窗区域 -->
			<div class="big-box" :class="{active:isLogin}">
				<!-- 登录页面 -->
				<div class="big-contain" v-if="isLogin">
					<span class="btitle">账户登录</span>
					<!-- 登录表单区域 -->
					<div class="bform">
						<el-form ref="loginFormRef" :model="loginForm" :rules="loginRules">
							<!-- 用户名 -->
							<el-form-item prop="username">
								<span class="span_font">用户名：</span>
								<el-input v-model="loginForm.username" placeholder="请输入用户名"
									prefix-icon="iconfont icon-yonghu"></el-input>
							</el-form-item>
							<!-- 密码 -->
							<el-form-item prop="password">
								<span class="span_font">密码：</span>
								<el-input v-model="loginForm.password" placeholder="请输入密码"
									prefix-icon="iconfont icon-ziyuanxhdpi" type="password" show-password></el-input>
							</el-form-item>
							<!-- 按钮区域 -->
							<el-form-item>
								<el-button class="bbutton" type="primary" @click="login" round>登录</el-button>
							</el-form-item>
						</el-form>
					</div>
				</div>
				<!-- 注册页面 -->
				<div class="big-contain" v-else>
					<span class="btitle">创建账户</span>
					<!-- 注册表单区域 -->
					<div class="b_form">
						<el-form ref="registernFormRef" :model="registerForm" :rules="loginRules">
							<!-- 用户名 -->
							<el-form-item prop="username">
								<span class="span_font">用户名：</span>
								<el-input v-model="registerForm.username" placeholder="请输入用户名"
								prefix-icon="iconfont icon-yonghu"></el-input>
							</el-form-item>
							<!-- 密码 -->
							<el-form-item prop="password">
								<span class="span_font">密码：</span>
								<el-input v-model="registerForm.password" placeholder="请输入密码"
								prefix-icon="iconfont icon-ziyuanxhdpi" type="password" show-password></el-input>
							</el-form-item>
							<!-- 手机号码 -->
							<el-form-item prop="phonenumber">
								<span class="span_font">手机号码：</span>
								<el-input v-model="registerForm.phonenumber" placeholder="请输入手机号码"
								prefix-icon="iconfont icon-shoujihaoma"></el-input>
							</el-form-item>
							<!-- 注册按钮 -->
							<el-form-item>
								<el-button class="b_button" type="primary" @click="register" round>注册</el-button>
							</el-form-item>
						</el-form>
					</div>
				</div>
			</div>

			<!-- 切换登录与注册页面小窗区域 -->
			<div class="small-box" :class="{active:isLogin}">
				<!-- 切换注册 -->
				<div class="small-contain" v-if="isLogin">
					<span class="stitle">你好，朋友!</span>
					<p class="scontent">开始注册，和我们一起旅行</p>
					<button class="sbutton" @click="changeType">注册</button>
				</div>
				<!-- 切换登录 -->
				<div class="small-contain" v-else>
					<span class="stitle">欢迎回来!</span>
					<p class="scontent">与我们保持联系，请登录你的账户</p>
					<button class="sbutton" @click="changeType">登录</button>
				</div>
			</div>
		</div>
    </div>
</template>

<script >
export default {
    data () {
        return {
			// 定义触发切换页面的变量
			isLogin:false,
			// 登录表单的数据绑定对象
			loginForm: {
				username:'',
				password: ''
			},
			registerForm: {
				username:'',
				password: '',
				phonenumber: ''
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
				// 验证手机号码是否合法
				phonenumber: [
					{ required: true, message: '请输入手机号码', trigger: 'blur' },
					{ min: 11, max: 11, message: '请输入11位手机号吗', trigger: 'blur' }
				]
			}
        }
    },
    methods: {
		// 切换页面函数
		changeType () {
				this.isLogin = !this.isLogin
		},
		// 登录函数
		login () {
      		this.$refs.loginFormRef.validate( async valid => {
        		if(!valid) return
				const { data: res } = await this.$http.post('api/login', this.loginForm)
				if(res.status !== 0) return this.$message.error(res.message)
				this.$message.success(res.message)
				// 将登陆成功后的token保存到客户端的 sessionStorage 中
				// 项目中除了登录和注册的接口外，其他API接口都需要登录之后才能访问
				// token只因在网页打开时生效，所以保存在 sessionStorage 中
				window.sessionStorage.setItem('token', res.token)
				// 通过编程式导航登录后跳转到后台主页，路由地址：/home
				this.$router.push('/home')
      		})
    	},
		// 注册函数
		register () {
			this.$refs.registernFormRef.validate( async valid => {
				if(!valid) return;
				const { data: res } = await this.$http.post('api/reguser', this.registerForm);
				if(res.status !== 0) return console.log(res.message)
				console.log('注册成功')
			})
		}
    }
    
}
</script>

<style scoped>
.login-register{
	/* 定义div为浏览器视图窗口 */
		align-items: center;
		background-color: var(--white);
		background: url("https://res.cloudinary.com/dci1eujqw/image/upload/v1616769558/Codepen/waldemar-brandt-aThdSdgx0YM-unsplash_cnq4sb.jpg");
		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		display: grid;
		height: 100vh;
		place-items: center;
}
.title_font{
	position: fixed;
	top: 0;
	left: 10px;
}
.b_font{
	font-size: 40px;
	font-weight: 700;
	color: #fff;
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
.contain{
	/* 定义登录与注册表单页面 */
		width: 50%;
		height: 50%;
		position: relative;
		left: 40%;
		transform: translateX(-50%);
		border-radius: 20px;
		box-shadow: 0 0 1px #f0f0f0,
					0 0 2px #f0f0f0;
}
.big-box{
		width: 70%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 30%;
		transform: translateX(0%);
		transition: all 1s;
		background-color: rgb(255, 255, 255);
		border-top-right-radius: inherit;
		border-bottom-right-radius: inherit;
}
.small-box{
		width: 30%;
		height: 100%;
		background: linear-gradient(135deg,rgb(57, 138, 176),rgb(56, 107, 183));
		position: absolute;
		top: 0;
		left: 0;
		transform: translateX(0%);
		transition: all 1s;
		border-top-left-radius: inherit;
		border-bottom-left-radius: inherit;
}
.big-contain{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
}
.btitle{
	font-size: 1.5em;
	font-weight: bold;
	color: rgb(0, 0, 0);
}
.stitle{
		font-size: 1.5em;
		font-weight: bold;
		color: #fff;
}
.bform{
		width: 100%;
		height: 40%;
		padding: 2em 0;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
}
.b_form {
	margin-top:20px ;
}
.bbutton{
		width: 40%;
		height: 40px;
		border-radius: 24px;
		border: none;
		outline: none;
		background-color: rgb(57,167,176);
		color: #fff;
		font-size: 1.3em;
		cursor: pointer;
		margin-left: 90px;
}
.b_button{
		width: 40%;
		height: 40px;
		border-radius: 24px;
		border: none;
		outline: none;
		background-color: rgb(56, 107, 183);
		color: #fff;
		font-size: 1.3em;
		cursor: pointer;
		margin-left: 90px;
}
.scontent{
		font-size: 0.8em;
		color: #fff;
		text-align: center;
		padding: 2em 4em;
		line-height: 1.7em;
}
.small-contain{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
}
.sbutton{
		width: 60%;
		height: 40px;
		border-radius: 24px;
		border: 1px solid #fff;
		outline: none;
		background-color: transparent;
		color: #fff;
		font-size: 0.9em;
		cursor: pointer;
}
.big-box.active{
		left: 0;
		transition: all 0.5s;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		border-top-left-radius: inherit;
		border-bottom-left-radius: inherit;
}
.small-box.active{
		left: 100%;
		background: linear-gradient(135deg,rgb(57,167,176),rgb(56,183,145));
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
		border-top-right-radius: inherit;
		border-bottom-right-radius: inherit;
		transform: translateX(-100%);
		transition: all 1s;
}
.el-input{
	width: 70%;
	float: right;
}
.span_font{
	float: left;
	font-size: 15px;
	font-weight: 700;
}
</style>