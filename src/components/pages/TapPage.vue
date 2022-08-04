<template>
<div class="bg_img">
    <div class="title_font"><span>专家评审系统</span></div>
    <div class="contain">
        <button class="btn_one">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span class="font">用户界面</span>
            </button>
        <button class="btn_two"><span class="font">专家评审</span></button>
    </div>
</div>

</template>

<script>
export default {
    
}
</script>

<style scoped="scoped">
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
}
.title_font{
    position: fixed;
    top: 10px;
    font-size: 40px;
    font-weight: 700;
    color: #fff;
    text-shadow: 1px 1px 0 #000,
                 -1px 1px 0 #000,
                 1px -1px 0 #000;
                 
}
.contain{
    width: 100%;
    height: 40%;
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
}
.btn_one{
    width: 25%;
    height: 60%;
    position: relative;
    float: left;
    left: 15%;
    top: 50%;
    transform: translateY(-50%);
    background-color: var(--white);
    border-radius: 20px;
    /* box-shadow: 0 0 1px #f0f0f0,
				0 0 2px #f0f0f0; */
	/* background-color: var(--white);
    background: url("https://asaki-m.com/zhuye/indexBg/wangzhe-2.jpg");
    background-attachment: fixed; */
}
.btn_two{
    width: 25%;
    height: 60%;
    position: relative;
    float: right;
    right: 15%;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 20px;
    box-shadow: 0 0 1px #f0f0f0,
				0 0 2px #f0f0f0;
}
.font{
    font-size: 40px;
    font-weight: 700;
    color: #fff;
    text-shadow: 1px 1px 0 #000,
                 -1px 1px 0 #000,
                 1px -1px 0 #000;
}
button{
    overflow: hidden;

}
button span {
            position: absolute;
            display: block;
        }
button span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #03e9f4);
    animation: animate1 1s linear infinite;
}
  
@keyframes animate1 {
    0% {
        left: -100%;
    }
  
    50%,
    100% {
        left: 100%;
        }
}
  
button span:nth-child(2) {
    top: 0;
    right: 0;
    height: 100%;
    width: 2px;
    background: linear-gradient(92deg, transparent, #03e9f4);
    animation: animate2 1s linear infinite;
    animation-delay: 0.25s;
}
  
@keyframes animate2 {
    0% {
        top: -100%;
    }
  
    50%,
    100% {
        top: 100%;
    }
}
  
button span:nth-child(3) {
    bottom: 0;
    right: -100%;
    height: 2px;
    width: 100%;
    background: linear-gradient(180deg, transparent, #03e9f4);
    animation: animate3 1s linear infinite;
    animation-delay: 0.5s;
}
  
@keyframes animate3 {
    0% {
        right: -100%;
    }
  
    50%,
    100% {
        right: 100%;
    }
}
  
button span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(270deg, transparent, #03e9f4);
    animation: animate4 1s linear infinite;
    animation-delay: 0.75s;
}
  
@keyframes animate4 {
    0% {
        bottom: -100%;
    }
  
    50%,
    100% {
        bottom: 100%;
    }
}
</style>