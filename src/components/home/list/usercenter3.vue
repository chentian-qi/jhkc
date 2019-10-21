<template>
    <div style="min-height:200px;width:100%;margin:40px">
        <el-tabs v-model="activeName" style="height:50px">
            <el-tab-pane label="资源" name="first" ></el-tab-pane>
            <el-tab-pane label="商机" name="second"></el-tab-pane> 
        </el-tabs>
     

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
             <div style="padding:40px 0px">
               <div class="demo-input-suffix" >
                  关键字：
                  
                  <el-input
                    placeholder="请输入内容"
                    prefix-icon="el-icon-search"
                    v-model="input2" style="width:200px">
                  </el-input>
                </div>
            </div>
            <div style="padding:40px 0px">
                <el-button type="primary">新建</el-button><el-button type="primary">查询</el-button>
            </div>
             <div class="dataList">
                      <el-table  :data="tableData"  style="width: 80%">
                        <el-table-column prop="date" label="编号" > 
                          <template slot-scope="scope">
                                <div  @click="handleJoinPeople(scope.row)" > {{scope.row.date}} </div>
                          </template>
                        </el-table-column>
                       
                        <el-table-column  prop="data" label="申请日期">  </el-table-column>
                        <el-table-column  prop="data" label="状态"> 
                          <template slot-scope="scope">
                                <div  @click="handleJoinPeople(scope.row)" > 审核通过 </div>
                          </template>
                         </el-table-column>
                     
                          <el-table-column
                            fixed="right"
                            label="操作"
                            width="100">
                            <template slot-scope="scope">
                                <el-button @click="handleClick(scope.row)" type="text" size="small">对接</el-button> 
                                
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
</template>
<script>
export default {
    
    data(){
         const cityOptions = ['默认', '发布时间', '关注'];
        return {
             src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
              fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
               form: {
                    name: '炽热',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                  radio1: '商机',
        activeName: 'first', 
        input3: '',
        select: '1',
        currentPage4:1,
        options:["不限","能源电力","环境工程","化学化工","机械电子"],
        informantType:"不限",
        tableData: [{
          date: '12154711',
          name: '108-43-0',
          address: '200公斤',
          data:"2019-08-19",
          tag:"过程仿真"
        }, {
          date: '12154711',
          name: '108-43-0',
          address: '200公斤',
          data:"2019-08-19"
        }, {
          date: '12154711',
          name: '108-43-0',
          address: '200公斤',
          data:"2019-08-19"
        }, {
          date: '12154711',
          name: '108-43-0',
          address: '200公斤',
          data:"2019-08-19"
        }, {
          date: '12154711',
          name: '108-43-0',
          address: '200公斤',
          data:"2019-08-19"
        }, {
          date: '12154711',
          name: '108-43-0',
          address: '200公斤',
          data:"2019-08-19"
        }],
        checkboxGroup1: ['默认'], 
        cities: cityOptions
        }
    }
}
</script>

<style>
.el-avatar--large {
    width: 80px;
    height: 80px;
    line-height: 40px;
}
</style>