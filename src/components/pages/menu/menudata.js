/**
 * 用于储存菜单列表数据
 */
// 导入font图标
import '@/assets/font/iconfont.css'

const menudata = [
    {
        id : 1,
        title : '首页',
        path : '/home',
        icon : 'iconfont icon-shouye',
        children : []
    },
    {
        id : 2,
        title : '用户中心',
        path : '',
        icon : 'iconfont icon-duojicaidan',
        children : [
            {
                id : 2-1,
                title : '个人中心',
                path : '/userinfo',
                icon : 'iconfont icon-gerenzhongxin',
                children : []
            },
            {
                id : 2-2,
                title : '评审结果',
                path : '',
                icon : 'iconfont icon-zongcejieguochakan',
                children : []
            },
            {
                id : 2-3,
                title : '风险统计',
                path : '',
                icon : 'iconfont icon-tongji',
                children : []
            }
        ]
    },
    {
        id : 3,
        title : '项目分类',
        path : '',
        icon : 'iconfont icon-duojicaidan',
        children : [
            {
                id : 3-1,
                title : '工科',
                path : '',
                icon : 'iconfont icon-gongke',
                children : []
            },
            {
                id : 3-2,
                title : '理科',
                path : '',
                icon : 'iconfont icon-like',
                children : []
            },
            {
                id : 3-3,
                title : '文体',
                path : '',
                icon : 'iconfont icon-wenti',
                children : []
            },
            {
                id : 3-4,
                title : '商科',
                path : '',
                icon : 'iconfont icon-shangye',
                children : []
            },
            {
                id : 3-5,
                title : '综合',
                path : '',
                icon : 'iconfont icon-zonghe',
                children : []
            }
        ]
    },
    {
        id : 4,
        title : '商务合作',
        path : '',
        icon : 'iconfont icon-cooperation-full2',
        children : []
    }
]

export default menudata