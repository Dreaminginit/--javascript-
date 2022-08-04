<template>
  <div class="box">
    <el-carousel :interval="3000" type="card" height="200px">
        <el-carousel-item v-for="img in images" :key="img">
            <img :src="img.url" alt="" class="img_item"/>
        </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
    data() {
        return {
            images: [
                {url: require('@/assets/love/0 (1).jpg')},
                {url: require('@/assets/love/0 (2).jpg')},
                {url: require('@/assets/love/0 (3).jpg')},
                {url: require('@/assets/love/0 (4).jpg')},
            ]
        }
    }
}
</script>

<style scoped>
.box {
    display: flex;
    justify-content: center;
}
.el-carousel__item h3 {
    color: #475669;
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
  .el-carousel {
      width: 400px;
  }
  .img_item {
      height: 200px;
      width: 200px;
  }
</style>