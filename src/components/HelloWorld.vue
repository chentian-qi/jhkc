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
                    <el-radio-button v-for="item in options" :key="item" :value="item" :label="item"   >
                      <i class="el-icon-bottom"></i>
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
                
            </div>
            <div class="sort">
              <row> 
                <el-checkbox-group v-model="checkboxGroup1">
                  <el-checkbox-button class="group-checkbox" v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
                </el-checkbox-group>
              </row>
            </div>
             
            <div class="dataList">
                      <el-table  :data="tableData"  style="width: 100%">
                        <el-table-column prop="date" label="产品名称" >  </el-table-column>
                        <el-table-column  prop="name" label="CAS号" > </el-table-column>
                        <el-table-column  prop="address" label="求购数量">  </el-table-column>
                        <el-table-column  prop="data" label="发布日期">  </el-table-column>
                      </el-table>
                      <div style="text-align:right">
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
    const cityOptions = ['上海', '北京', '广州', '深圳'];
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
          data:"2019-08-19"
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
        }, {
          date: '间氯苯酚',
          name: '108-43-0',
          address: '200公斤',
          data:"2019-08-19"
        }],
        checkboxGroup1: ['上海'],
        checkboxGroup2: ['上海'],
        checkboxGroup3: ['上海'],
        checkboxGroup4: ['上海'],
        cities: cityOptions
   
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
    },
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
    }
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
 
 
</style>
