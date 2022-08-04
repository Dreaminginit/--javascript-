<template>
  <div>
    <el-submenu :index="item.id + ''" v-for="item in menulist" :key="item.id">
                    <!-- 一级菜单 -->
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>{{item.title}}</span>
                    </template>

                    <!-- 二级菜单 -->
                    <el-menu-item :index="subItem.id + ''" v-for="subItem in item.children" :key="subItem.id">
                        <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>{{subItem.title}}</span>
                        </template>>
                    </el-menu-item>
                </el-submenu>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
