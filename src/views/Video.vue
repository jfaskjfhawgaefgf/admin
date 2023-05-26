<script setup lang="ts">

import { ref } from "vue";
import VideoDrawer from "@/components/VideoDrawer.vue";
import { getVideoList, delVideo } from '@/axios/post'
import { checkPwd } from "@/axios/get";
import Video from "@/class/Video";
import VideoShow from '@/components/VideoShow.vue'
import { ElMessage } from "element-plus";

const handleEdit = (index: number, row: Video) => {
    isShow.value = true
    info.value = row
}
const handleShow = (index: number, row: Video) => {
    isShow1.value = true
    info1.value = row
}
const handleDelete = async (index: number, row: Video) => {
    try {
        if (await delVideo(await checkPwd("admin123"), row.uid)) {
            ElMessage({
                message: '成功',
                type: 'success'
            })
            fetchData()
        } else {
            ElMessage.error('失败')
        }
    } catch (error) {
        console.log(error);
    }
}
const addVideo = () => {
    isShow.value = true
}
const tableData = ref(null)


const isShow = ref(false)
const isShow1 = ref(false)
const info = ref<Video>(new Video())
const info1 = ref<Video>(new Video())

const parentBorder = ref(true)
const childBorder = ref(true)
fetchData()
async function fetchData() {
    try {
        tableData.value = await getVideoList(await checkPwd("admin123"))
    } catch (error) {
        console.log(error);
    }
}
const closeAdd = () => {
    isShow.value = false
    info.value = new Video()
}
const succes = () => {
    isShow.value = false
    info.value = new Video()
    fetchData()
}
const closeAdd1 = () => {
    isShow1.value = false
    info1.value = new Video()
}
</script>

<template>
    <div class="header">
        <h1>视频列表</h1>
    </div>
    <div class="table">
        <el-button type="primary" style="margin-bottom: 10px" @click="addVideo">添加</el-button>
        <el-table :data="tableData" :border="parentBorder" style="width: 100%" max-height="375">

            <el-table-column label="标题" prop="title" />
            <el-table-column label="描述" prop="info" width="500"></el-table-column>
            <el-table-column label="操作">
                <template #default="scope">
                    <div class="btndiv">
                        <el-button size="small" @click="handleShow(scope.$index, scope.row)">Show</el-button>
                        <el-button size="small" type="primary" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                        <el-button size="small" type="danger"
                            @click="handleDelete(scope.$index, scope.row)">Delete</el-button>

                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
    <VideoDrawer :isShow="isShow" :info="info" @succes="succes" @closeAdd="closeAdd"></VideoDrawer>
    <VideoShow :isShow="isShow1" :info="info1" @closeAdd="closeAdd1"></VideoShow>
</template>

<style lang="less">
* {
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
}

.header {
    font-size: 2.2rem;
    color: #606266;
    margin-left: 50px;
    line-height: 130px;
}

.table {
    width: 1000px;
    margin: 10px auto;
}

.btndiv {
    margin: 0 auto;
    width: 182px;
}
</style>