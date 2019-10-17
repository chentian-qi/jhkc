<template>
     <div style="background-color:white;" class="search-style">
         <div class="container-info">
            <div class="bread-crumb">
                <span class="is-link"><a href="/#/HelloWorld" >首页</a><i class="el-icon-arrow-right"></i></span>
                <span class="is-link"><a   id="typename">资源直通车</a><i class="el-icon-arrow-right"></i></span>
                <span class="is-link"><a   id="typename">市场资源</a><i class="el-icon-arrow-right"></i></span>
                <span name="name">详情</span>
                
            </div>
            <div class="main-contail">
                <el-row :gutter="20">
                   <el-col :span="4">
                      <div style="text-align:left;font-size: 20px;font-weight: 700;color: #1f86ed;"> 基础信息：</div>
                   </el-col>
                   <el-row>
                      <div style="text-align:right;font-size: 20px;font-weight: 700; ">  <i class="el-icon-star-off"></i></div>
                   </el-row>
 
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="4"><div class="first">编号:</div></el-col>
                  <el-col :span="8"><div class="second">2015895541</div></el-col> 
                </el-row>
               <el-row :gutter="20">
                  <el-col :span="4"><div class="first">  我的优势市场/销售行业</div></el-col>
                  <el-col :span="8"><div class="second">  北美-医药</div></el-col> 
                </el-row>
                 <el-row :gutter="20">
                  <el-col :span="4"><div class="first"> </div></el-col>
                  <el-col :span="8"><div class="second">  中国-医药</div></el-col> 
                </el-row>

                   <el-row :gutter="20">
                  <el-col :span="4"><div class="first">  我的优势市场/销售区域</div></el-col>
                  <el-col :span="8"><div class="second">  北美-医药</div></el-col> 
                </el-row>
                 <el-row :gutter="20">
                  <el-col :span="4"><div class="first"> </div></el-col>
                  <el-col :span="8"><div class="second">  中国-医药</div></el-col> 
                </el-row>

             <el-row :gutter="20">
                  <el-col :span="4"><div class="first"> 客户</div></el-col>
                  <el-col :span="8"><div class="second">  中国石化-北美</div></el-col> 
                </el-row>
                 <el-row :gutter="20">
                  <el-col :span="4"><div class="first"> </div></el-col>
                  <el-col :span="8"><div class="second">  中国化工-南非</div></el-col> 
                </el-row>
               
                <el-row :gutter="20">
                  <el-col :span="4"><div class="first">发布时间:</div></el-col>
                  <el-col :span="6"><div class="second">2019-10-10</div></el-col> 
                </el-row>
              
                
                
                <el-row :gutter="20">
                   <div style="text-align:center;height:60px;line-height:60px"> 
                      <el-tag>标签一</el-tag>
                      <el-tag type="success">标签二</el-tag>
                      <el-tag type="info">标签三</el-tag>
                      <el-tag type="warning">标签四</el-tag>
                      <el-tag type="danger">标签五</el-tag>
                   </div>
                </el-row>
                <el-row>
                      <el-col :offset="4" :span="20" style="text-align:left;color: #868E96;">  
                        <el-button type="warning">我要对接</el-button>
                        <span style="vertical-align: bottom;">&nbsp;&nbsp;&nbsp;咨询：5&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;浏览：1259</span>
                      </el-col> 
                       
                </el-row>
               

            </div>
            <div class="main-contail">
               <el-row :gutter="20">
                   <div style="text-align:left;font-size: 20px;font-weight: 700;color: #1f86ed;"> 资料信息：</div>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="4"><div class="first">公司名称:</div></el-col>
                  <el-col :span="6"><div class="second">精化快车</div></el-col> 
                </el-row>
                 <el-row :gutter="20">
                  <el-col :span="4"><div class="first">职位:</div></el-col>
                  <el-col :span="6"><div class="second">技术</div></el-col> 
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="4"><div class="first">联系人</div></el-col>
                  <el-col :span="6"><div class="second">吕经理</div></el-col> 
                </el-row>

                <el-row :gutter="20">
                  <el-col :span="4"><div class="first">手机:</div></el-col>
                  <el-col :span="6"><div class="second">188****8988</div></el-col> 
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="4"><div class="first">微信:</div></el-col>
                  <el-col :span="6"><div class="second">188****5885</div></el-col> 
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="4"><div class="first">邮箱:</div></el-col>
                  <el-col :span="20"><div class="second">9454****2@qq.com</div></el-col> 
                </el-row>

            </div>

           

         </div> 
          


         
     </div>
 
    
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
   
    return {
     
   
    };
  },mounted(){
      this.init()
  }, methods: {
    
    init(){
        $("#leftBox2").parent().find("a").css("background-color","#0690f7");
        $("#leftBox2").css("background-color","#1976c5");
    },

   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

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


</style>