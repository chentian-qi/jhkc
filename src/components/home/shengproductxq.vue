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
                <span class="is-link"><a href="/#/HelloWorld" >首页</a><i class="el-icon-arrow-right"></i></span>
                <span class="is-link"><a   id="typename">资源直通车</a><i class="el-icon-arrow-right"></i></span>
                <span name="name">生产资源</span>
                
            </div>
            <div class="creening-conditions">
               <el-row>
                  <div class="filter-label">
                    合作方式
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
                    合作标签 
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
                    是否自有厂房
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
                
            </div>
            <div class="sort">
              <el-row> 
                 <el-col :span="1"><div>排序：</div></el-col>
                  <el-col :span="23">
                     <el-checkbox-group v-model="checkboxGroup1">
                  <el-checkbox-button class="group-checkbox" v-for="city in cities" :label="city" :key="city">
                    <i class="el-icon-bottom"></i>
                       {{city}}</el-checkbox-button>
                </el-checkbox-group>
                  </el-col>
               
              </el-row>
            </div>
             
            <div class="dataList">
                      <el-table  :data="tableData"  style="width: 100%">
                        <el-table-column prop="date" label="生产资源编号" > 
                          <template slot-scope="scope">
                                <div  @click="handleJoinPeople(scope.row)" >201909545 </div>
                          </template>
                        </el-table-column>
                        <el-table-column  prop="name" label="合作方式" >
                            <template slot-scope="scope">
                                <div  >合作方式 </div>
                          </template>
                         </el-table-column>

                         <el-table-column  prop="name" label="合作标签" >
                            <template slot-scope="scope">
                                <div  >合作标签 </div>
                          </template>
                         </el-table-column>

                        <el-table-column  prop="name" label="是否自有厂房" >
                            <template slot-scope="scope">
                                <div  >有 </div>
                          </template>
                         </el-table-column>

                        <el-table-column  prop="name" label="  擅长技术/工艺类型" >
                            <template slot-scope="scope">
                                <div>   擅长技术/工艺类型 </div>
                          </template>
                         </el-table-column>

                        <el-table-column  prop="name" label="    擅长产品/结构类型" >
                            <template slot-scope="scope">
                                <div>     擅长产品/结构类型 </div>
                          </template>
                         </el-table-column>
                    

                        <el-table-column  prop="name" label=" 特殊或优势原料" >
                            <template slot-scope="scope">
                                <div>   特殊或优势原料 </div>
                          </template>
                         </el-table-column>
                         
                        <el-table-column  prop="data" label="发布日期">  </el-table-column>
                        <el-table-column
                          prop="tag"
                          label="标签"
                          width="100"
                          :filters="[{ text: '钢铁冶金', value: '钢铁冶金' }, { text: '过程仿真', value: '过程仿真' }]"
                           
                          filter-placement="bottom-end">
                          <template slot-scope="scope">
                            <el-tag
                              :type="scope.row.tag === '过程仿真' ? 'primary' : 'success'"
                              disable-transitions>{{scope.row.tag == null ? "过程仿真" :"钢铁冶金"  }} </el-tag>
                          </template>
                        </el-table-column>
                      </el-table>
                      <div style="text-align:right;padding-top:20px">
                            <el-pagination
                                    @size-change="handleSizeChange"
                                    @current-change="handleCurrentChange"
                                    :current-page="currentPage4"
                                    :page-sizes="[10, 50, 100]"
                                    :page-size="10"
                                    layout="total, sizes, prev, pager, next, jumper"
                                    :total="400">
                                  </el-pagination>
                      </div>
            </div>
        </div>
     </div>
 
    
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    const cityOptions = ['默认', '发布时间', '关注'];
    return {
        radio1: '商机',
        activeName: 'first', 
        input3: '',
        select: '1',
        currentPage4:1,
        options:["不限","能源电力","环境工程","化学化工","机械电子"],
        informantType:"不限",
        tableData: [{
          date: '间氯苯酚',
          name: '108-43-0',
          address: '200公斤',
          data:"2019-08-19",
          tag:"过程仿真"
        }, {
          date: '间氯苯酚',
          name: '108-43-0',
          address: '200公斤',
          data:"2019-08-19"
        }, {
          date: '间氯苯酚',
          name: '108-43-0',
          address: '200公斤',
          data:"2019-08-19"
        }],
        checkboxGroup1: ['默认'], 
        cities: cityOptions
   
    };
  },mounted(){
      this.init()
  }, methods: {
    
    init(){
        $("#leftBox3").parent().find("a").css("background-color","#0690f7");
        $("#leftBox3").css("background-color","#1976c5");
    },

    changeOptions(){
      console.log(this.informantType);
    },
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
    },
    handleJoinPeople(data){
      this.$router.push({name:"shengproductxqDetail",query:{goodsId:this.goodsId}})
    }
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
div{
  font-size: 14px;
}

.dataList{
  padding: 30px 30px;
}

.sort{
    width:100%;
  min-height:40px; 
  margin-top:30px;
  padding: 15px 0 15px 20px;
  text-align: left;
  border: 1px solid #efefef; 
      line-height: 40px;
}

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
    width:100px
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

/**.active{
  padding:0 15px;
  background-color: #e3f1ff;
  color: #0a539a;
  outline: 1px solid #4dafed;
  line-height: 30px;
} */

.filter-item .item-content {
    cursor: pointer;
    display: inline-block;
}

.creening-conditions{
  width:100%;
  min-height:100px;
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
  margin:30px auto 0px;
}

.bread-crumb{
  color: #868E96;
      font-size: 14px;
    line-height: 20px;
}

.group-checkbox{
    padding: 0px 10px;
}
.group-checkbox>span{
  border: 1px solid #efefef; 
  border-radius: 4px 0 0 4px;
}

.el-checkbox-button:last-child .el-checkbox-button__inner {
    border-radius: 0 0px 0px 0; 
}


.el-checkbox-button:first-child .el-checkbox-button__inner {
    border-radius: 0 0px 0px 0; 
}
 
</style>
