<template>
    <div style="min-height:200px;width:100%;margin:40px">

      <el-row style="width:600px">
           <el-form ref="form" :model="form" :inline="true" label-width="80px">
                <el-form-item label="用户头像" style="width:100%">
                      <div class="block">
                            <el-avatar :src="src" size="large"></el-avatar>
                        </div>
                </el-form-item>
                <el-form-item label="用户ID" style="width:100%">
                   1032
                </el-form-item>
                <el-form-item label="帐号" style="width:100%">
                     180****1067
                </el-form-item>
                <el-form-item label="昵称">
                    <el-input v-model="form.name" value="测试"> </el-input>
                </el-form-item>
                 <el-form-item label="姓名">
                    <el-input v-model="form.name" value="测试"> </el-input>
                </el-form-item>
                <el-form-item label="手机">
                    <el-input v-model="form.name" value="测试"> </el-input>
                </el-form-item>
                   <el-form-item label="微信">
                    <el-input v-model="form.name" value="测试"> </el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input v-model="form.name" value="测试"> </el-input>
                </el-form-item>


  
                   <el-form-item label="公司/机构">
                    <el-input v-model="form.name" value="测试"> </el-input>
                </el-form-item>
                <el-form-item label="职位/职务">
                    <el-input v-model="form.name" value="测试"> </el-input>
                </el-form-item>
                 <el-form-item label="所在地址">
                    <el-input v-model="form.name" value="测试"> </el-input>
                </el-form-item>
                <el-form-item label="所在行业" style="width:100%">
                    <el-input v-model="form.name" value="测试"> </el-input>
                </el-form-item>
                <el-form-item label="我对以下感兴趣">
                    <el-input v-model="form.name" value="测试"> </el-input>
                </el-form-item>
               <el-form-item label="推荐人">
                    <el-input   value="测试"> </el-input>
                </el-form-item>
    <el-form-item label="是否公开展示">
                     <el-switch
                style="display: block"
                v-model="value2"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-text="公开展示"
                inactive-text="">
                </el-switch>
                </el-form-item>
              

            </el-form>
      </el-row>

      <el-row style="margin-left:300px">
          <el-button type="primary">保存</el-button>
      </el-row>

       <el-row style="margin:50px">
         <div style="margin-top: 15px;width：200px">
            <el-input placeholder="身份证号码" v-model="input2" style="width:300px">
                <template slot="append">认证</template>
            </el-input>
         </div>
      </el-row>

       <el-row>
           
           <el-col :span="18">
                <el-steps :active="2" align-center>
                    <el-step title="步骤1" description="个人身份认证"></el-step>
                    <el-step title="步骤2" description="认证通过"></el-step>
                </el-steps>
           </el-col>
       </el-row>

       <el-row>
            <el-button type="primary">加入专家智库</el-button>
       </el-row>
    </div>
</template>
<script>
export default {
    data(){
        return {
             src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
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
                value2: true
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