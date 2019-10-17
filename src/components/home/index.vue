<template>
     <div>
        <div class="searchBox">
          <div class="inner">
              <div class="logoBox">
                  <img src="/static/images/index05.jpg" alt="">
              </div>
              <div class="searInp">
                  <div>
                        <el-radio-group v-model="radio1">
                          <el-radio-button label="商机"></el-radio-button>
                          <el-radio-button label="资源"></el-radio-button>
                        </el-radio-group>
                    </div>
                    <div class="cellBox2">
                      <input type="text" placeholder="请输入反应类型、产品类型、反应领域等关键词">
                      <a>搜索</a>
                  </div>
              </div>
          </div>
          <div>
              <div style="width:80%;margin:0 auto;">
                <template>
                  <el-tabs v-model="activeName" @tab-click="handleClick" stretch>
                    <el-tab-pane label="商机" name="first">
                        <div style="width:100%;height:300px" class="shou">
                             <el-row :gutter="5"> 
                                <el-col :span="8">
                                     <div style="background-image:url('/static/images/jhtj02.jpg');height:300px;background-size: 100% 100%;" @click="goPage(1)">
                                          
                                          <div class="box4">项目商机</div>
                                      </div>
                                </el-col>
                                <el-col :span="8">
                                      <div style="background-image:url('/static/images/index_jhxw02.jpg');height:300px;background-size: 100% 100%;" @click="goPage(2)">
                                          
                                          <div class="box4">产品商机</div>
                                      </div>
                                </el-col>
                                <el-col :span="8">
                                       <div style="background-image:url('/static/images/index_jhxw05.jpg');height:300px;background-size: 100% 100%;"  @click="goPage(3)">
                                          
                                          <div class="box4">技术商机</div>
                                      </div>
                                 </el-col>
                              </el-row>
                              <el-row  :gutter="5">
                                <el-col :span="8">
                                     <div style="background-image:url('/static/images/jjjh02.jpg');height:300px;background-size: 100% 100%;" @click="goPage(4)">
                                          
                                          <div class="box4">投、融资商机</div>
                                      </div>
                                </el-col>
                                <el-col :span="8">
                                      <div style="background-image:url('/static/images/index_ban01.jpg');height:300px;background-size: 100% 100%;" @click="goPage(5)">
                                          
                                          <div class="box4">其它商机</div>
                                      </div>
                                 </el-col>
                              </el-row>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="资源" name="second">
                        <div style="width:100%;height:300px"  class="shou">
                             <el-row :gutter="5"> 
                                <el-col :span="8">
                                     <div style="background-image:url('/static/images/index_jhxw03.jpg');height:300px;background-size: 100% 100%;" @click="goPage(6)">
                                          
                                          <div class="box4">生产资源</div>
                                      </div>
                                </el-col>
                                <el-col :span="8">
                                      <div style="background-image:url('/static/images/jhtj03.jpg');height:300px;background-size: 100% 100%;" @click="goPage(7)">
                                          
                                          <div class="box4">技术资源</div>
                                      </div>
                                </el-col>
                                <el-col :span="8">
                                       <div style="background-image:url('/static/images/index_jhxw04.jpg');height:300px;background-size: 100% 100%;" @click="goPage(8)">
                                          
                                          <div class="box4">市场资源</div>
                                      </div>
                                 </el-col>
                              </el-row>
                              <el-row  :gutter="5">
                            
                                <el-col :span="8">
                                      <div style="background-image:url('/static/images/index_ban01.jpg');height:300px;background-size: 100% 100%;" @click="goPage(9)">
                                          <div class="box4">其它资源</div>
                                      </div>
                                 </el-col>
                              </el-row>
                        </div>
                    </el-tab-pane> 
                  </el-tabs>
                </template>
              </div>

           
          </div>
          
          
      </div>
         <div style="width:100%;margin:0 auto;padding-top:100px;min-height:300px;background-color: white">
             <el-divider content-position="center"><span style="font-size: 36px;font-weight: 700;color: #666;"> 行业顶尖专家 资深技术顾问</span></el-divider>
             <div style="text-align:center; font-size: 16px; color: #666;margin-top: 40px;">10000+合作技术方 更有全网专家信息可检索</div>
             <div style="margin:50px auto 0px;width:80%">
               <el-row>
                <el-col :span="6">
                        <div class="zuanjia" v-on:mouseenter="handleOver($event)" >
                              <div style="text-align:center">
                                <el-avatar src="/static/images/qianfen.png" :size="116"></el-avatar>
                                <div style="margin-top: 18px;margin-bottom: 18px;font-size: 24px;color: #111d23;">
                                    马杰
                                </div>
                                <div style="margin-bottom: 20px;font-size: 18px;color: #666;">
                                    副教授
                                </div>
                                <div style="width:80%;margin:0 auto;text-align:left">
                                  <div class="tag">
                                   污染治理
                                  </div>
                                  <div class="tag">
                                    新型高效吸附剂及滤料的研发
                                  </div>
                                  <div class="tag">
                                     电容去离子器件电极电容去离子器件电极材料的开发电容去离子器件电极材料的开发材料的开发 
                                  </div>
                                </div>
                              </div>
                       </div>
                        

                       <div class="showzuanjia" hidden @click="gozjPage()" >
                             <div style="text-align:center;background-color:rgb(88,119,164);color:white;min-height: 320px;padding:40px 50px " v-on:mouseleave="handleOut($event)">
                                 概况实验室简要介绍代表成果主要从事新型医药用高分子材料、药物输送系统的研...
                                 <div style="margin-top:100px;font-size:30px">
                                   查看详情 <i class="el-icon-zoom-in"></i>
                                 </div>
                              </div>
                       </div>
                  </el-col>
                 <el-col :span="6">
                        <div class="zuanjia" v-on:mouseenter="handleOver($event)" >
                              <div style="text-align:center">
                                <el-avatar src="/static/images/qianfen.png" :size="116"></el-avatar>
                                <div style="margin-top: 18px;margin-bottom: 18px;font-size: 24px;color: #111d23;">
                                    马杰
                                </div>
                                <div style="margin-bottom: 20px;font-size: 18px;color: #666;">
                                    副教授
                                </div>
                                <div style="width:80%;margin:0 auto;text-align:left">
                                  <div class="tag">
                                   污染治理
                                  </div>
                                  <div class="tag">
                                    新型高效吸附剂及滤料的研发
                                  </div>
                                  <div class="tag">
                                     电容去离子器件电极电容去离子器件电极材料的开发电容去离子器件电极材料的开发材料的开发 
                                  </div>
                                </div>
                              </div>
                       </div>
                        

                       <div class="showzuanjia" hidden @click="gozjPage()" >
                             <div style="text-align:center;background-color:rgb(88,119,164);color:white;min-height: 320px;padding:40px 50px " v-on:mouseleave="handleOut($event)">
                                 概况实验室简要介绍代表成果主要从事新型医药用高分子材料、药物输送系统的研...
                                 <div style="margin-top:100px;font-size:30px">
                                   查看详情 <i class="el-icon-zoom-in"></i>
                                 </div>
                              </div>
                       </div>
                  </el-col>
                    <el-col :span="6">
                        <div class="zuanjia" v-on:mouseenter="handleOver($event)" >
                              <div style="text-align:center">
                                <el-avatar src="/static/images/qianfen.png" :size="116"></el-avatar>
                                <div style="margin-top: 18px;margin-bottom: 18px;font-size: 24px;color: #111d23;">
                                    马杰
                                </div>
                                <div style="margin-bottom: 20px;font-size: 18px;color: #666;">
                                    副教授
                                </div>
                                <div style="width:80%;margin:0 auto;text-align:left">
                                  <div class="tag">
                                   污染治理
                                  </div>
                                  <div class="tag">
                                    新型高效吸附剂及滤料的研发
                                  </div>
                                  <div class="tag">
                                     电容去离子器件电极电容去离子器件电极材料的开发电容去离子器件电极材料的开发材料的开发 
                                  </div>
                                </div>
                              </div>
                       </div>
                        

                       <div class="showzuanjia" hidden @click="gozjPage()" >
                             <div style="text-align:center;background-color:rgb(88,119,164);color:white;min-height: 320px;padding:40px 50px " v-on:mouseleave="handleOut($event)">
                                 概况实验室简要介绍代表成果主要从事新型医药用高分子材料、药物输送系统的研...
                                 <div style="margin-top:100px;font-size:30px">
                                   查看详情 <i class="el-icon-zoom-in"></i>
                                 </div>
                              </div>
                       </div>
                  </el-col>
                   <el-col :span="6">
                        <div class="zuanjia" v-on:mouseenter="handleOver($event)" >
                              <div style="text-align:center">
                                <el-avatar src="/static/images/qianfen.png" :size="116"></el-avatar>
                                <div style="margin-top: 18px;margin-bottom: 18px;font-size: 24px;color: #111d23;">
                                    马杰
                                </div>
                                <div style="margin-bottom: 20px;font-size: 18px;color: #666;">
                                    副教授
                                </div>
                                <div style="width:80%;margin:0 auto;text-align:left">
                                  <div class="tag">
                                   污染治理
                                  </div>
                                  <div class="tag">
                                    新型高效吸附剂及滤料的研发
                                  </div>
                                  <div class="tag">
                                     电容去离子器件电极电容去离子器件电极材料的开发电容去离子器件电极材料的开发材料的开发 
                                  </div>
                                </div>
                              </div>
                       </div>
                        

                       <div class="showzuanjia" hidden @click="gozjPage()" >
                             <div style="text-align:center;background-color:rgb(88,119,164);color:white;min-height: 320px;padding:40px 50px " v-on:mouseleave="handleOut($event)">
                                 概况实验室简要介绍代表成果主要从事新型医药用高分子材料、药物输送系统的研...
                                 <div style="margin-top:100px;font-size:30px">
                                   查看详情 <i class="el-icon-zoom-in"></i>
                                 </div>
                              </div>
                       </div>
                  </el-col>
                </el-row>
              <el-row>
                    <el-col :span="24"><div style="text-align:center;padding:50px">  <el-button plain>查看更多专家</el-button></div></el-col>
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
        radio1: '商机',
        activeName: 'first'
    };
  }, methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      
          
    handleOver (e) {
       $(e.currentTarget).hide();
       $(e.currentTarget).parent().find(".showzuanjia").show();
       console.log("show")
    },
    
    handleOut (e) {
        $(e.currentTarget).parent().hide();
       $(e.currentTarget).parent().parent().find(".zuanjia").show();
        console.log( $(e.currentTarget).parent().html())
    },

    gozjPage(){
       this.$router.push({name:"HelloWorld",query:{goodsId:this.goodsId}})
    },
    goPage(num){
       
      if(num == 2){
          this.$router.push({name:"productxq",query:{goodsId:this.goodsId}})
      }

        
      if(num == 1){
          this.$router.push({name:"xmxq",query:{goodsId:this.goodsId}})
      }


      if(num == 3){
          this.$router.push({name:"jsxq",query:{goodsId:this.goodsId}})
      }
      

      
      if(num == 4){
          this.$router.push({name:"trz",query:{goodsId:this.goodsId}})
      }

      if(num == 5){
          this.$router.push({name:"qtxq",query:{goodsId:this.goodsId}})
      }


     if(num == 6){
       console.log("shengproductxq")
          this.$router.push({name:"shengproductxq",query:{goodsId:this.goodsId}})
      }

     if(num == 7){
          this.$router.push({name:"shengxmxq",query:{goodsId:this.goodsId}})
      }

     if(num == 8){
          this.$router.push({name:"shengjsxq",query:{goodsId:this.goodsId}})
      }

     if(num == 9){
          this.$router.push({name:"shengtzsj",query:{goodsId:this.goodsId}})
      }


      
    }

      
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

 .el-radio-button:first-child .el-radio-button__inner {
    border-radius: 0 0 0 0;
}

 .el-radio-button:last-child .el-radio-button__inner {
    border-radius: 0 0px 0px 0;
}
 

.picture{
   
  width:100%;
  height:300px 
}

.box4{
  color: black;
  font-size: 30px;
  text-align: center;
  line-height: 300px
}

.zuanjia{
  min-height: 400px; 
  border-right: 1px solid #eee;
  cursor:pointer;
}

.shou{
   cursor:pointer;
}
 

.tag {
    display: inline-block;
    margin-bottom: 9px;
    padding: 0 14px;
    min-width: 90px;
    max-width: 194px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 0;
    font-size: 15px;
    background-color: transparent;
    color: #849194;
    border: 1px solid #849194;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
}

 
 
</style>
