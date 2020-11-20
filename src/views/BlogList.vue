<template>
  <div class="blogList">
    <div class="mainBoard">
      <el-row>
        <el-col :span="12" :offset="6">
          <h2 @click="getBlogDetailById" class="title">Android 操作系统架构开篇Android 操作系统架构开篇Android </h2>
        </el-col>
        <el-col :span="12" :offset="6">
          <div class="post-content-preview">2018 年 12 月 ，Google 宣布 Flutter 1.0 版本正式发布。截至目前， Flutter 在 Github 上已获得 88000+
            的关注和 11000+ 的 Fork ，其发展速度相当惊人，是今年移动端最火热的开发框架之一。 Flutter 大火背后的原因是什么？为什么越来越多的企业和开发者会选择使用 Flutter？Flutter
            会成为跨平台开发的终极...
          </div>
        </el-col>
        <el-col :span="12" :offset="6">
          <p>
            Posted by Gityuan on January 31, 2016
          </p>
        </el-col>
        <el-col :span="12" :offset="6">
          <el-divider></el-divider>
        </el-col>
      </el-row>
      <!--  分页组件    -->
      <div style="text-align: center">
        <el-pagination
            layout="prev, pager, next"
            :total=total>
        </el-pagination>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "BlogList",
  data() {
    return {
      total:0
    }
  },
  methods:{
    getBlogDetailById(){
      this.$router.push("/blog/blogDetail/3")
    }
  }
}
</script>

<style scoped>
.mainBoard {
  width: 70%;
  margin: 0 auto;
}
.title:hover {
  color:#409EFF;
  cursor: pointer;
}
.post-content-preview {
  font-size: 13px;
  font-style: italic;
  color: #a3a3a3;
}
</style>