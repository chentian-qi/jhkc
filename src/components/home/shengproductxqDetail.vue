<template>
     <div style="background-color:white;" class="search-style">
         <div class="container-info">
            <div class="bread-crumb">
                <span class="is-link"><a href="/#/HelloWorld" >首页</a><i class="el-icon-arrow-right"></i></span>
                <span class="is-link"><a   id="typename">资源直通车</a><i class="el-icon-arrow-right"></i></span>
                <span class="is-link"><a   id="typename">生产资源</a><i class="el-icon-arrow-right"></i></span>
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
              <div style="width:50%;float :left">
                
                <el-row :gutter="20">
                  <el-col :span="8"><div class="first">生产编号:</div></el-col>
                  <el-col :span="6"><div class="second">22565655</div></el-col> 
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="8"><div class="first">园区名称:</div></el-col>
                  <el-col :span="6"><div class="second">上海</div></el-col> 
                </el-row>
                 <el-row :gutter="20">
                  <el-col :span="8"><div class="first">园区等级:</div></el-col>
                  <el-col :span="6"><div class="second">国家</div></el-col> 
                </el-row>



                <el-row :gutter="20">
                  <el-col :span="8"><div class="first">合作方式:</div></el-col>
                  <el-col :span="6"><div class="second">技术入股</div></el-col> 
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="8"><div class="first">合作标签:</div></el-col>
                  <el-col :span="6"><div class="second">合作生产</div></el-col> 
                </el-row>

               <el-row :gutter="20">
                  <el-col :span="8"><div class="first">是否自有厂房:</div></el-col>
                  <el-col :span="6"><div class="second">有</div></el-col> 
                </el-row>
                   <el-row :gutter="20">
                  <el-col :span="8"><div class="first">擅长技术/工艺类型:</div></el-col>
                  <el-col :span="6"><div class="second">擅长技术/工艺类型</div></el-col> 
                </el-row>

                 <el-row :gutter="20">
                  <el-col :span="8"><div class="first">擅长产品/结构类型:</div></el-col>
                  <el-col :span="6"><div class="second">擅长产品/结构类型</div></el-col> 
                </el-row>
                   <el-row :gutter="20">
                  <el-col :span="8"><div class="first">特殊或优势原料:</div></el-col>
                  <el-col :span="6"><div class="second">特殊或优势原料</div></el-col> 
                </el-row>

                 <el-row :gutter="20">
                  <el-col :span="8"><div class="first">废水处理能力:</div></el-col>
                  <el-col :span="6"><div class="second">废水处理能力</div></el-col> 
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="8"><div class="first">废气处理能力:</div></el-col>
                  <el-col :span="6"><div class="second">废气处理能力</div></el-col> 
                </el-row>


                <el-row :gutter="20">
                  <el-col :span="8"><div class="first">废固处理能力:</div></el-col>
                  <el-col :span="6"><div class="second">废固处理能力</div></el-col> 
                </el-row>





                <el-row :gutter="20">
                  <el-col :span="8"><div class="first">发布时间:</div></el-col>
                  <el-col :span="6"><div class="second">2019-10-10</div></el-col> 
                </el-row>
                 <el-row :gutter="20">
                  <el-col :span="8"><div class="first">到期时间:</div></el-col>
                  <el-col :span="6"><div class="second">2019-10-20</div></el-col> 
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="8"><div class="first">地址:</div></el-col>
                  <el-col :span="8"><div class="second">上海市浦东新区金科路大楼A栋4楼</div></el-col> 
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
             <div style="width:50%;float :left">
                   <el-row :gutter="20">
                     <el-col :span="8">
                        <div class="demo-image__placeholder">
                          <el-image src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"></el-image>
                   </div>
                     </el-col>
                     <el-col :span="8">
                        <div class="demo-image__placeholder">
                          <el-image src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"></el-image>
                   </div>
                     </el-col>
                     <el-col :span="8">
                        <div class="demo-image__placeholder">
                          <el-image src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"></el-image>
                   </div>
                     </el-col>
                   </el-row>
                   <el-row :gutter="20">
                     <el-col :span="12">
                        <div class="demo-image__placeholder">
                          <el-image src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"></el-image>
                   </div>
                     </el-col>
                     <el-col :span="12">
                        <div class="demo-image__placeholder">
                          <el-image src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"></el-image>
                   </div>
                     </el-col>
                     
                   </el-row>
                   
             </div>

                 <div style="clear:both">
 
             </div>

            <div class="main-contail">
               <el-row :gutter="20">
                   <div style="text-align:left;font-size: 20px;font-weight: 700;color: #1f86ed;"> 项目信息：</div>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="4"><div class="first">已审批项目:</div></el-col>
                  <el-col :span="20">
                    <div class="second">
                         <el-row :gutter="20">
                            <el-col :span="6"><div class="second">项目1</div></el-col> 
                          </el-row>
                            <el-row :gutter="20">
                            <el-col :span="6"><div class="second">项目1</div></el-col> 
                          </el-row>
                    </div>
                 </el-col> 

                 
                </el-row>
                  <el-row :gutter="20">
                  <el-col :span="4"><div class="first">已批未投产项目及原因:</div></el-col>
                  <el-col :span="20">
                    <div class="second">
                         <el-row :gutter="20">
                            <el-col><div class="second">项目1 资金断裂</div></el-col>  
                          </el-row>
                          <el-row :gutter="20">
                            <el-col><div class="second">项目2 资金断</div></el-col> 
                          </el-row>
                    </div>
                 </el-col> 

                 
                </el-row>
              </div>
              

            </div>

               <div class="main-contail">
               <el-row :gutter="20">
                   <div style="text-align:left;font-size: 20px;font-weight: 700;color: #1f86ed;"> 生产设备信息：</div>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="4"><div class="first">生产设备1:</div></el-col>
                  
                  <el-col :span="2">
                           <div style="text-align:left;height:100%">
                              
                              <p>规格</p>
                              <p>材质</p>
                              <p>数量</p>
                           </div>
                   
                 </el-col> 

                 <el-col :span="6">
                   <div class="demo-image__placeholder">
                          <el-image src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"></el-image>
                   </div>
                   
                 </el-col> 
                    <el-col :span="6">
                   <div class="demo-image__placeholder">
                          <el-image src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"></el-image>
                   </div>
                   
                 </el-col> 
                 
                </el-row>

                <el-row :gutter="20">
                  <el-col :span="4"><div class="first">生产设备1:</div></el-col>
                  
                  <el-col :span="2">
                           <div style="text-align:left;height:100%">
                              
                              <p>规格</p>
                              <p>材质</p>
                              <p>数量</p>
                           </div>
                   
                 </el-col> 

                 <el-col :span="6">
                   <div class="demo-image__placeholder">
                          <el-image src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"></el-image>
                   </div>
                   
                 </el-col> 
                    <el-col :span="6">
                   <div class="demo-image__placeholder">
                          <el-image src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"></el-image>
                   </div>
                   
                 </el-col> 
                 
                </el-row>
                 


                
              

            </div>

              <div class="main-contail">
               <el-row :gutter="20">
                   <div style="text-align:left;font-size: 20px;font-weight: 700;color: #1f86ed;"> 检测设备信息：</div>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="4"><div class="first">检测设备1:</div></el-col>
                  
                  <el-col :span="2">
                           <div style="text-align:left;height:100%">
                              
                              <p>型号</p> 
                              <p>数量</p>
                           </div>
                   
                 </el-col> 

                 <el-col :span="6">
                   <div class="demo-image__placeholder">
                          <el-image src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"></el-image>
                   </div>
                   
                 </el-col> 
                    <el-col :span="6">
                   <div class="demo-image__placeholder">
                          <el-image src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"></el-image>
                   </div>
                   
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
                  <el-col :span="4"><div class="det1">核心生产能力:</div></el-col>
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
                  <el-col :span="4"><div class="det1">常规采购:</div></el-col>
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
                  <el-col :span="4"><div class="det1">其它需求:</div></el-col>
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
                  <el-col :span="4"><div class="det1">新项目要求:</div></el-col>
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