<template>
     <div style="background-color:white" class="search-style">
        <div style="width:100%;height:450px;background-image:url('/static/images/bg.jpg');text-align:center">
            <div class="h1" style="padding-top:80px">
              汇聚全球技术 助力企业升级
            </div>
       
              <div style="margin:15px auto;width:40%" class="">
                <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                  <el-select v-model="select" slot="prepend" placeholder="请选择">
                    <el-option label="产品名称" value="1"></el-option>
                    <el-option label="CAS号" value="2"></el-option>
                  </el-select>
                  <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
                
              </div>
        </div>
        <div class="container-info">
            <div class="bread-crumb">
                <span class="is-link"><a  >首页</a><i class="el-icon-arrow-right"></i></span>
                <span class="is-link"><a   id="typename">商机直通车</a><i class="el-icon-arrow-right"></i></span>
                <span name="name">产品商机</span>
                
            </div>
            <div class="creening-conditions">
               <el-row>
                  <div class="filter-label">
                    所属领域1
                  </div>
                <!-- <ul class="filter-items">
                     <li v-for='item of areaList' :key="item" class="filter-item" >
                        <div class="item-content">
                           <span class="no-limit"> {{item}}</span>
                        </div>
                    </li>
                </ul> -->
                <div class="filter-items" style="width:100%;;text-align:left">
                    
                  <el-radio-group v-model="informantType" @change="changeOptions()">
                    <el-radio-button v-for="item in options" :key="item" :value="item" :label="item"  >
                       {{item}}
                    </el-radio-button>
                  </el-radio-group>
                </div>
                
               </el-row>

                <el-row>
                  <div class="filter-label">
                    所属领域2
                  </div>
                <!-- <ul class="filter-items">
                     <li v-for='item of areaList' :key="item" class="filter-item" >
                        <div class="item-content">
                           <span class="no-limit"> {{item}}</span>
                        </div>
                    </li>
                </ul> -->
                <div class="filter-items" style="width:100%;;text-align:left">
                    
                  <el-radio-group v-model="informantType" @change="changeOptions()">
                    <el-radio-button v-for="item in options" :key="item" :value="item" :label="item"  >
                       {{item}}
                    </el-radio-button>
                  </el-radio-group>
                </div>
                
               </el-row>

                <el-row>
                  <div class="filter-label">
                    所属领域3
                  </div>
                <!-- <ul class="filter-items">
                     <li v-for='item of areaList' :key="item" class="filter-item" >
                        <div class="item-content">
                           <span class="no-limit"> {{item}}</span>
                        </div>
                    </li>
                </ul> -->
                <div class="filter-items" style="width:100%;;text-align:left">
                    
                  <el-radio-group v-model="informantType" @change="changeOptions()">
                    <el-radio-button v-for="item in options" :key="item" :value="item" :label="item"  >
                       {{item}}
                    </el-radio-button>
                  </el-radio-group>
                </div>
                
               </el-row>
               <el-row>
                  <div class="dataList">
                      <div style="width:100px;height:300px;background-color:red"></div>
                      <div style="width:100px;height:300px; background-color: rgba(0,0,0,.8); z-index: -1; top: 0;left: 0; position: absolute;overflow: hidden;"></div>
                  </div>
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
        activeName: 'first', 
        input3: '',
        select: '1',
        options:["不限","能源电力","环境工程","化学化工","机械电子"],
        informantType:"不限"
   
    };
  },mounted(){
      this.init()
  }, methods: {
    
    init(){
        $("#leftBox2").parent().find("a").css("background-color","#0690f7");
        $("#leftBox2").css("background-color","#1976c5");
    },

    changeOptions(){
      console.log(this.informantType);
    }
      
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.search-style  .el-radio-button:first-child .el-radio-button__inner {
    border: none;
    border-radius: 0px 0 0 0px;
}

.search-style  .el-radio-button:last-child .el-radio-button__inner {
    border-radius: 0 0px 0px 0;
}

 .search-style  .el-radio-button__inner{
    border:none;
    margin: 0px 20px;
    border:none;
    background: none
}


 .search-style  .el-radio-button__orig-radio:checked+.el-radio-button__inner { 
    -webkit-box-shadow: none;
     
}

.filter-label{
    float:left; 
    min-height: 45px;
    line-height: 45px;
    font-weight: 700;
}

.filter-items{
    min-height: 45px;
    line-height: 45px;
}

.filter-item{
    padding-left: 40px;
    list-style:none;
    float:left; 
    color: #707070;
    font-size: 14px;
}

.active{
  padding:0 15px;
  background-color: #e3f1ff;
  color: #0a539a;
  outline: 1px solid #4dafed;
  line-height: 30px;
}

.filter-item .item-content {
    cursor: pointer;
    display: inline-block;
}

.creening-conditions{
  width:100%;
  height:500px;
  background-color: #868E96;
  margin-top:30px;
  padding: 15px 0 15px 30px;
  text-align: center;
  border: 1px solid #efefef;
  background-color: #fafafa;
}

.search-style  .el-select .el-input {
    width: 130px;
  }
 .search-style  .input-with-select .el-input-group__prepend {
    background-color: #ffffff;
  }

.search{
      width: 80%;
      padding: 15px 0 15px 30px;
      text-align: center;
      border: 1px solid #efefef;
      background-color: #fafafa;
      height:400px;
      margin: 0 auto;
}

.h1 {
     margin-top: 0;
    margin-bottom: 40px;
    font-size: 33px;
    font-weight: 700;
    letter-spacing: 1px;
    color: #eee
}

.search-style  .el-input-group__append, .el-input-group__prepend {
    background-color: #0690f7;
}

.search-style  .el-input-group__append, .el-input-group__prepend button{
    color: #f5f7fa;
     border: 1px solid #0690f7;
}

.container-info{
  width:1200px;
   
  min-height:400px;
  margin:30px auto
}

.bread-crumb{
  color: #868E96;
      font-size: 14px;
    line-height: 20px;
}
 
</style>
