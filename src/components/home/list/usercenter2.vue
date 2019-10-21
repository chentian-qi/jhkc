<template>
    <div style="min-height:200px;width:100%;margin:40px">

      <el-row style="width:600px">
           <el-form ref="form" :model="form" :inline="true" label-width="80px">
                <el-form-item label="公司图片" style="width:100%">
                      
                            <el-image :src="src" style="width:150px"></el-image>
                               <el-image :src="src" style="width:150px"></el-image>
                            <el-image :src="src" style="width:150px"></el-image>
                        
                </el-form-item>
                
                <el-form-item label="公司属性" style="width:100%">
                  生产型，研发型，贸易型，服务型
                </el-form-item>
                <el-form-item label="企业性质" style="width:100%">
                    民营
                </el-form-item>
                <el-form-item label="年产值">
                    <el-input   value="500万以下"> </el-input>
                </el-form-item>
                 <el-form-item label="有无进出口权">
                    <el-input   value="有"> </el-input>
                </el-form-item>
                <el-form-item label="成立年份">
                   <el-input   value="1992 08 21"> </el-input>
                </el-form-item>
                   <el-form-item label="企业官网">
                    <el-input   value="www.baidu.com"> </el-input>
                </el-form-item>
                 <el-form-item label="人数">
                   <el-input   value="11111"> </el-input>
                </el-form-item>
                <el-form-item label="研发人员数量">
                   <el-input   value="11111"> </el-input>
                </el-form-item>

                <el-form-item label="质检人员数量">
                   <el-input   value="11111"> </el-input>
                </el-form-item>


                <el-form-item label="核心产品">
                    <el-input placeholder="优势产品1" v-model="input2">
                        <template slot="append">加入优品直通车</template>
                    </el-input>
                      <el-input placeholder="优势产品1" v-model="input2">
                        <template slot="append">加入优品直通车</template>
                    </el-input>
                </el-form-item>

                <el-form-item label="核心服务">
                    <el-input placeholder="优选服务1" v-model="input2">
                        <template slot="append">加入优选服务</template>
                    </el-input>
                     <el-input placeholder="优选服务2" v-model="input2">
                        <template slot="append">加入优选服务</template>
                    </el-input>
                </el-form-item>

               
   


            </el-form>
      </el-row>

      <el-row style="margin-left:300px">
          <el-button type="primary">保存</el-button>
   
      </el-row>

       <el-row style="margin:50px">
         <div style="margin-top: 15px;width：200px">
           <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                list-type="picture">
                <el-button size="small" type="primary">公司认证</el-button>
                <div slot="tip" class="el-upload__tip">公司营业执照</div>
                </el-upload>
         </div>
      </el-row>



      
       <el-row style="margin:50px">
         <div style="margin-top: 15px;width：200px">
           <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                list-type="picture">
                <el-button size="small" type="primary">资质认证</el-button>
                <div slot="tip" class="el-upload__tip">资质类型+有效期+附件</div>
                </el-upload>
         </div>
      </el-row>



       <el-row>
           
           <el-col :span="18">
                <el-steps :active="3" align-center>
                    <el-step title="步骤3" description="企业身份认证"></el-step>
                    <el-step title="步骤4" description="认证通过"></el-step>
                </el-steps>
           </el-col>
       </el-row>

      
    </div>
</template>
<script>
export default {
    data(){
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
                }
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