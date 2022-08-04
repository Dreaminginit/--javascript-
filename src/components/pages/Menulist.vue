<template>
    <div class="menu_item">
        <!-- 无子菜单的节点 -->
        <template v-if="item.children && item.children.length == 0">
            <el-menu-item :key="item.id" :index="item.id + ''">
                <i :class="item.icon"></i>
                <span>{{item.title}}</span>
            </el-menu-item>
        </template>

        <!-- 有子菜单的节点 -->
        <el-submenu v-else :index="item.id + ''">
            <span slot="title">
              <i :class="item.icon"></i>
              {{item.title}}
            </span>
            <!-- 遍历子节点 -->
            <template v-for="child in item.children">
                <Menulist v-if="child.children && child.children.length > 0" :key="child.id" :item="child"/>
                <el-menu-item v-else :key="child.id" :index="child.id + ''">
                    <i :class="child.icon"></i>
                    <span>{{child.title}}</span>
                </el-menu-item>
            </template>
        </el-submenu>
    </div>
</template>

<script scoped>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
        }
    }
}
</script>

<style>
.menu_item {
    float: left;
    display: inline;
    position: static;
}
/* .el-menu-item {
    height: 25px;
} */
.el-submenu__icon-arrow {
    position: static;
    vertical-align: middle;
    margin-left: 10px;
    margin-top: -3px;
}
span{
    margin-left: 10px;
}

</style>