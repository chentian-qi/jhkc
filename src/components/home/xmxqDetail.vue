<template>
     <div style="background-color:white;" class="search-style">
         <div class="container-info">
            <div class="bread-crumb">
                <span class="is-link"><a href="/#/HelloWorld" >首页</a><i class="el-icon-arrow-right"></i></span>
                <span class="is-link"><a   id="typename">商机直通车</a><i class="el-icon-arrow-right"></i></span>
                <span class="is-link"><a   id="typename">项目商机</a><i class="el-icon-arrow-right"></i></span>
                <span name="name">详情</span>
                
            </div>
            <div class="main-contail">
               <el-row :gutter="20">
                  
                   <el-col :span="4"> <div style="text-align:left;font-size: 20px;font-weight: 700;color: #1f86ed;"> 基础信息：</div></el-col>

                </el-row>
                <el-row :gutter="20">
                  <el-col :span="4"><div class="first">项目名称:</div></el-col>
                  <el-col :span="8"><div class="second">CDMO定制生产溴化项目二</div></el-col> 
                </el-row>
             

             
               
                <el-row :gutter="20">
                  <el-col :span="4"><div class="first">发布时间:</div></el-col>
                  <el-col :span="6"><div class="second">2019-10-10</div></el-col> 
                </el-row>
                 <el-row :gutter="20">
                  <el-col :span="4"><div class="first">到期时间:</div></el-col>
                  <el-col :span="6"><div class="second">2019-10-20</div></el-col> 
                </el-row>
                
                <el-row :gutter="20">
                  <el-col :span="4"><div class="first">具体要求:</div></el-col>
                  <el-col :span="20"><div class="second">产品数量：220Kg 反应步数：2步 生产周期： 4周 原料及工艺：使用原料溴素（550Kg）、氯仿（4T）、硫氰酸铵、乙酸乙酯/庚烷，后处理有重结晶、干燥等，反应放热，需要循环降温体系。 三废情况：含盐废水约8T，其中2T氯化铵+HCl废水（20%盐分），5.5T溴化钠废水（10%盐分），其他溶剂做回收处理约10T。 需要设备：搪瓷釜2*2000L（有滴加装置，能盐水冷却）、搪瓷釜2*1000L抽滤槽和鼓风干燥设备。【所发需求均已经过快车筛选认证，真实可靠，欢迎推荐，项目成功，收益共享】</div></el-col> 
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