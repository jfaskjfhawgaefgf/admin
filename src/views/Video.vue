<script setup lang="ts">
import {ref} from "vue";

const handleEdit = (index: number, row: User) => {
    console.log(index, row)
}
const handleDelete = (index: number, row: User) => {
    console.log(index, row)
}
const parentBorder = ref(true)
const childBorder = ref(true)
const tableData = [
    {
        "uid": 1, // 唯一识别号
        "status":1, // 视频状态
        "title": "芒种", // 视频标题
        "info": "登上微博热搜的芒种是什么意思？知道真相的我...", // 视频简介
        "visit": 119, // 视频浏览量
        "download": 514, // 视频下载量
        "score": 1919810, // 视频平分(此数据内容将来会更改)
        "src": "https://cloud.alongw.cn/f/xWFq/%E6%B5%8B%E8%AF%951.mp4", // 视频url
        "img": "/img/banner.png", // 视频封面
        "user": [ // 视频参演列表
            {
                "uid": 0, // 参演人的唯一识别号UID
                "works": "摸鱼的" // 参演角色
            },
            {
                "uid": 1,
                "works": "演员"
            }
        ]
    }
]
</script>

<template>
<div class="header">
    <h1>视频列表</h1>
</div>
  <div class="table">
      <el-button type="primary" style="margin-bottom: 10px">添加</el-button>
      <el-table :data="tableData" :border="parentBorder" style="width: 100%">
          <el-table-column type="expand">
              <template #default="props">
                      <div style="margin-left: 20px">
                          <el-descriptions title="视频信息">
                              <el-descriptions-item label="Uid">{{ props.row.uid }}</el-descriptions-item>
                              <el-descriptions-item label="描述">{{ props.row.info }}</el-descriptions-item>
                              <el-descriptions-item label="播放量">{{ props.row.visit }}</el-descriptions-item>
                              <el-descriptions-item label="标题">{{ props.row.title }}</el-descriptions-item>
                              <el-descriptions-item label="视频url">{{ props.row.src }}</el-descriptions-item>
                              <el-descriptions-item label="下载量">{{ props.row.download }}</el-descriptions-item>
                              <el-descriptions-item label="状态">{{ props.row.status }}</el-descriptions-item>
                              <el-descriptions-item label="视频封面">{{ props.row.img }}</el-descriptions-item>
                              <el-descriptions-item label="评分">{{ props.row.score }}</el-descriptions-item>
                          </el-descriptions>
                      <h3>人员表</h3>
                      <el-table :data="props.row.user" :border="childBorder">
                          <el-table-column label="uid" prop="uid" />
                          <el-table-column label="works" prop="works" />
                      </el-table>
                  </div>
              </template>
          </el-table-column>
          <el-table-column label="Uid" prop="uid" />
          <el-table-column label="标题" prop="title" />
          <el-table-column label="状态" prop="status" />
          <el-table-column label="Operations">
              <template #default="scope">
                  <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
                  >Edit</el-button
                  >
                  <el-button
                      size="small"
                      type="danger"
                      @click="handleDelete(scope.$index, scope.row)"
                  >Delete</el-button
                  >
              </template>
          </el-table-column>
      </el-table>
  </div>
</template>

<style lang="less">
*{
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif;
}
.header{
  font-size: 2.2rem;
  color: #606266;
  margin-left: 50px;
}
.table{
    width: 1000px;
    margin: 10px auto;
}
</style>