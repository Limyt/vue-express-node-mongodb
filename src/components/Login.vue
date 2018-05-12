<template>
    <div class="login" id="login">
        <input type="text" placeholder="请输入账号" v-model="name">
        <input type="text" placeholder="请输入密码" v-model="password">
        <button @click="submit()">提交</button>
        <el-table
    :data="dataLogin"
    stripe
    element-loading-text="拼命加载中"
    header-row-class-name="tableHeader"
    v-loading.fullscreen.lock="loading"
    empty-text="亲，暂时没有数据哦"
    border
    style="width: 100%">
            <el-table-column
            fixed
            prop="name"
            label="用户名"
            align="center"
            width="200">
            </el-table-column>
            <el-table-column
            prop="password"
            label="密码"
            align="center"
            width="200">
            </el-table-column>
             <el-table-column
            label="操作"
            align="center"
            width="360">
            <template slot-scope="scope">
                <el-button type="danger" size="small" @click="del(scope.row['_id'])">删除</el-button>
            </template>
            </el-table-column>
    </el-table>
    </div>
</template>

<script>
export default {
    name:'login',
    data(){
        return{
            name:'',
            password:'',
            dataLogin:[],
            loading: false
        }
    },
    methods:{
        del(id){
            var that = this;
            var deleteId = id;
            let params = {
                id:this.deleteId
            }
            this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            }).then(() => {
                this.$http.delete("/api/login/id",params).then((newData) =>{
                    //console.log(newData);
                    if (newData.ok) {
                        this.$message({
                            type: "success",
                            message: "删除成功!"
                        });
                        this.getAll();
                    } else {
                        this.$message({
                            type: "error",
                            message: "删除失败!"
                        });
                    }
                },(response) =>{
                    // this.loading = false;
                });
            }).catch(() => {
                this.$message({
                    type: "info",
                    message: "已取消删除"
                });
            });
        },
        getAll(){
            this.$http.get("/api/login").then((data) =>{
                console.log(data.body);
                this.dataLogin = data.body;
               // console.log(this.dataLogin[0]._id);
            },(response) =>{
               // console.log(err);
            })
        },
        submit(){
            let that = this;
            let params = {
                name:this.name,
                password:this.password
            }
            let name = this.name;
            let password = this.password;
            // this.$http.post("/api/login/is",params).then((data) =>{
            //     console.log(data.body);
            //     this.$message({
            //       type: "success",
            //       message: "登录成功!",
            //       onClose: function() {
            //           that.name = "";
            //           that.password = "";
            //           that.getAll();
            //       }
            //     });
            // },(response) =>{
            //     this.$message({
            //       type: "success",
            //       message: "登录失败!"
            //     });
            //     //这里面是获取数据失败的情况下
            //     // this.loading = false;
            // });
            this.$http.post("/api/login/login",params).then((data)=>{
                //console.log(data.body);
                if(data.body.length > 0){
                    this.$message({
                        type: "success",
                        message: "登录成功!",
                        onClose: function() {
                            that.name = "";
                            that.password = "";
                            //that.getAll();
                        }
                    });
                }else{
                    this.$message({
                        type: "success",
                        message: "登录失败!"
                    });
                }
            })
        }
    },
    mounted:function(){
        this.getAll();
    }
}
</script>

<style lang="scss">
#login{
    .item{
        width: 100%;
        border:1px solid #ccc;
        p{
            display: inline-block;
            padding:5px 30px;
        }
    }
}
</style>


