<template>
     <div style="background-color:white;" class="search-style">
         <div class="container-info">
            <div class="bread-crumb">
                <span class="is-link"><a href="/#/HelloWorld" >首页</a><i class="el-icon-arrow-right"></i></span>
                <span class="is-link"><a   id="typename">资源直通车</a><i class="el-icon-arrow-right"></i></span>
                <span class="is-link"><a   id="typename">技术资源</a><i class="el-icon-arrow-right"></i></span>
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
                  <el-col :span="4"><div class="first">  擅长技术/工艺类型:</div></el-col>
                  <el-col :span="8"><div class="second">  擅长技术/工艺类型</div></el-col> 
                </el-row>

           
               
                <el-row :gutter="20">
                  <el-col :span="4"><div class="first">发布时间:</div></el-col>
                  <el-col :span="6"><div class="second">2019-10-10</div></el-col> 
                </el-row>
              
                
                <el-row :gutter="20">
                  <el-col :span="4"><div class="first">核心能力介绍:</div></el-col>
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

           <div style="padding-top:20px"> 
              <el-tabs type="border-card" style="width: 1252px;">
                <el-tab-pane label="详情描述">

                   
                <el-row>
                  <el-col :span="4"><div class="det1">技术带头人介绍:</div></el-col>
                  <el-col :span="20">
                     <div class="det2">
                         <p>不断流清淤机器人是一种能在无需阻断下水道施工段的情况下进行清淤工作，使得下水道清淤作业效率和安全性成倍提高的新型应用设备。清淤机器人及其配套泥浆脱水系统设备的研发指引着未来智慧城市地下100米的发展方向。</p>
                         <p>专注于解决以下三大问题</p>
                         <p>1.施工安全性能难保障；</p>
                         <p>2.施工效率低；</p>
                         <p>3.施工费用高。</p>
                         <p>项目前期在原石油科学研究院专家及华东理工大学专家的支持下，本项目的清淤机器人目前已完成原型机制造，通过了各项验证，准备开始量产，已获得4项核心专利的授权，还有2项发明专利处于待授权阶段，并另有6项专利申报在规划当中。</p>
                          
                    </div>
                  </el-col> 
                </el-row>
                 <el-row>
                  <el-col :span="4"><div class="det1">技术能力详情:</div></el-col>
                  <el-col :span="20">
                   <div class="det2">
                         <p>不断流清淤机器人是一种能在无需阻断下水道施工段的情况下进行清淤工作，使得下水道清淤作业效率和安全性成倍提高的新型应用设备。清淤机器人及其配套泥浆脱水系统设备的研发指引着未来智慧城市地下100米的发展方向。</p>
                         <p>专注于解决以下三大问题</p>
                         <p>1.施工安全性能难保障；</p>
                         <p>2.施工效率低；</p>
                         <p>3.施工费用高。</p>
                         <p>项目前期在原石油科学研究院专家及华东理工大学专家的支持下，本项目的清淤机器人目前已完成原型机制造，通过了各项验证，准备开始量产，已获得4项核心专利的授权，还有2项发明专利处于待授权阶段，并另有6项专利申报在规划当中。</p>
                          
                    </div>  
                  </el-col> 
                </el-row>

                   

                 <el-row>
                      <el-col :offset="4" :span="20" style="text-align:left;color: #868E96;margin-top:20px">  
                        <el-button type="warning">我要对接</el-button>
                        <span style="vertical-align: bottom;">&nbsp;&nbsp;&nbsp;咨询：5&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;浏览：1259</span>
                      </el-col> 
                       
                </el-row>
               
                </el-tab-pane>
                <el-tab-pane label="安全保障">
                  <img src="/static/images/pic.png">
                </el-tab-pane> 
              </el-tabs>
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