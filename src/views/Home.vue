<template>
  <div class="home">
    <el-row>
      <el-col :span="8" :offset="8">
        <div class="avatar">
          <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=334095196,2262933056&fm=26&gp=0.jpg" alt=""/>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8" :offset="8">
        <div class="slogon">
          <p id="slogon">心里有光，前路有亮</p>
        </div>
      </el-col>
    </el-row>
    <el-row>
    <el-col :span="8" :offset="8">
      <div> 
        <el-menu class="el-menu-demo" mode="horizontal">
          <el-menu-item index="1"><router-link to="/blog">博客</router-link></el-menu-item>
          <el-menu-item index="2"><router-link to="">相册</router-link></el-menu-item>
          <el-menu-item index="3"><router-link to="">视频</router-link></el-menu-item>
          <el-menu-item index="4"><router-link to="">随记</router-link></el-menu-item>
          <el-menu-item index="5"><router-link to="">关于你，关于我</router-link></el-menu-item>
        </el-menu>
      </div>
    </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {
  },
};
</script>

<style scoped>
.avatar {
  vertical-align: middle;
  display: flex;
  flex-direction: inherit;
  justify-content: center;
}
.slogon {
  text-align: center;
}
li {
  display: block;
  float: left;
  list-style: none;
  margin-left: 10px;
}
a {
  text-decoration: none;
}
.el-menu {
  display: flex;
  align-items: center; /* 水平居中 */
  justify-content: center; /* 垂直居中 */
}
</style>
