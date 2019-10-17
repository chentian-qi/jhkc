<template>
     <div style="background-color:white;" class="search-style">
         <div class="container-info">
            <div class="bread-crumb">
                <span class="is-link"><a href="/#/HelloWorld" >首页</a><i class="el-icon-arrow-right"></i></span>
                <span class="is-link"><a   id="typename">商机直通车</a><i class="el-icon-arrow-right"></i></span>
                <span class="is-link"><a   id="typename">投融资商机</a><i class="el-icon-arrow-right"></i></span>
                <span class="is-link"><a   id="typename">投资</a><i class="el-icon-arrow-right"></i></span>
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
               <el-row>
                  <el-col :span="12">
             
                <el-row :gutter="20">
                  <el-col :span="4"><div class="first">标题:</div></el-col>
                  <el-col :span="6"><div class="second">供1-氯甲基萘大生产技术</div></el-col> 
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="4"><div class="first">所属地区:</div></el-col>
                  <el-col :span="6"><div class="second">上海</div></el-col> 
                </el-row>

                <el-row :gutter="20">
                  <el-col :span="4"><div class="first">前期费用:</div></el-col>
                  <el-col :span="6"><div class="second">种子期</div></el-col> 
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="4"><div class="first">需要资料:</div></el-col>
                  <el-col :span="6"><div class="second">计划书</div></el-col> 
                </el-row>

                 <el-row :gutter="20">
                  <el-col :span="4"><div class="first">投资行业:</div></el-col>
                  <el-col :span="6"><div class="second">计划书</div></el-col> 
                </el-row>


                 <el-row :gutter="20">
                  <el-col :span="4"><div class="first">投资阶段:</div></el-col>
                  <el-col :span="6"><div class="second">计划书</div></el-col> 
                </el-row>
                
                 <el-row :gutter="20">
                  <el-col :span="4"><div class="first">投资方式:</div></el-col>
                  <el-col :span="6"><div class="second">意向资金</div></el-col> 
                </el-row>
                
                 <el-row :gutter="20">
                  <el-col :span="4"><div class="first">资本类型:</div></el-col>
                  <el-col :span="6"><div class="second">融资用途</div></el-col> 
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
                 
                  </el-col>
                  <el-col :span="6">
                        <img src="/static/images/bg.jpg" style="width:100%;height:100px">
                          <img src="/static/images/bg.jpg" style="width:100%;height:100px">
                  </el-col>
                  <el-col :span="6">
                        <img src="/static/images/bg.jpg" style="width:100%;height:100px"> 
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
                <el-tab-pane label="内容详情">

                   
                <el-row>
                  <el-col :span="4"><div class="det1">具体详述:</div></el-col>
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

.det1{
      color: #666;
    font-size: 24px;
    font-weight: 700;
    margin-top: 40px; 
}
 
 
.det2{
    margin-top: 40px; 
     min-height: 30px;
    line-height: 30px;
     text-align:left;
 
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