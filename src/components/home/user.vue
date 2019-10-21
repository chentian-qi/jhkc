<template>

    <div  style="background-color:white;" class="container-info">
       <div class="bread-crumb">
                <span class="is-link"><a href="" >首页</a><i class="el-icon-arrow-right"></i></span>
                <span name="name">个人中心</span>
         </div>
        <el-tabs :tab-position="tabPosition"  type="border-card" style="min-height: 800px;">
           
            <el-tab-pane
                v-for="(item) in editableTabs"
                :key="item.name"
                :label="item.title"
                :name="item.name">
                <component :is=item.content></component>

            </el-tab-pane> 

        </el-tabs>
    </div>   


  
</template>
<script>

  import a1  from '@/components/home/list/usercenter.vue'
    import a2  from '@/components/home/list/usercenter2.vue'
  import a5  from '@/components/home/list/usercenter3.vue'
    import a9  from '@/components/home/list/usercenter4.vue'

  export default {
    data() {
      return {
        tabPosition: 'left',
        item:{
          content  : "jsss",
        },
        editableTabs:[
          {
              title: '账户信息',
              name: '账户信息',
              content: 'a1'
          },
          {
                      title: '公司信息',
                      name: '公司信息',
                      content: 'a2'
          },
          {
                      title: '服务能力',
                      name: '服务能力',
                      content: 'a3'
          },
          {
                      title: '发布供需',
                      name: '发布供需',
                      content: 'a4'
          },
          {
                      title: '管理',
                      name: '管理',
                      content: 'a5'
          },
          {
                      title: '我的询盘',
                      name: '我的询盘',
                      content: 'a5'
          },
          {
                      title: '我收到的询盘',
                      name: '我收到的询盘',
                      content: 'a5'
          },
           {
                      title: '消息',
                      name: '消息',
                      content: 'a9'
          },
          {
                      title: '收藏',
                      name: '收藏',
                      content: 'a8'
          },
          {
                      title: '草稿箱',
                      name: '草稿箱',
                      content: 'a5'
          }
        ]
      };
    },
     components: {
      a1,a2,a5,a9
    }

  };
</script>



<style>
div{
  font-size: 14px;
}
 
 .bread-crumb{
  color: #868E96;
      font-size: 14px;
    line-height: 20px;
}

.container-info{
  width:1200px;
   
  min-height:400px;
  margin:0px auto 0px;
  padding:20px 0px
}

.main-contail{
  width:100%;
  min-height:100px;
  background-color: #868E96;
  margin-top:30px;
  padding: 15px 20px 15px 30px;
  text-align: center;
  border: 1px solid #efefef;
  background-color: #fafafa;
}

.first{
    font-weight: 700;
    min-height: 30px;
    line-height: 30px;
    text-align:right;
}


.second{ 
    min-height: 30px;
    line-height: 30px;
     text-align:left;
}

.el-tabs--left .el-tabs__header.is-left, .el-tabs--left .el-tabs__header.is-right, .el-tabs--left .el-tabs__nav-scroll, .el-tabs--left .el-tabs__nav-wrap.is-left, .el-tabs--left .el-tabs__nav-wrap.is-right, .el-tabs--right .el-tabs__header.is-left, .el-tabs--right .el-tabs__header.is-right, .el-tabs--right .el-tabs__nav-scroll, .el-tabs--right .el-tabs__nav-wrap.is-left, .el-tabs--right .el-tabs__nav-wrap.is-right {
    height: 800px;
}

</style>