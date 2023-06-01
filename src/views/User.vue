<script setup lang="ts">

import { inject, ref } from "vue";
import { getUserList, delUser } from '@/axios/post'
import { checkPwd } from "@/axios/get";
import { ElMessage, ElMessageBox } from "element-plus";
import User from "@/class/User";
import UserDrawer from '@/components/UserDrawer.vue'
import getCookie from "@/cookie/getcookie";

const apikey = ref("")
async function getapikey() {
    let key = getCookie("apikey")
    if (key === null || await getUserList(key) === undefined) {
        document.cookie = "apikey=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
        location.replace("./#/Login")
    } else {
        apikey.value = key
    }
}
console.log(apikey.value);
const handleEdit = (index: number, row: User) => {
    isShow.value = true
    info.value = row
}
const handleDelete = async (index: number, row: User) => {
    ElMessageBox.confirm(
        '确定删除?',
        'Warning',
        {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'warning',
        }
    )
        .then(async () => {
            try {

                if (await delUser(apikey.value, row.uid)) {

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
        })
        .catch(() => {
        })

}
const addUser = () => {
    isShow.value = true
}

const tableData = ref(null)


const isShow = ref(false)
const info = ref<User>(new User())

const parentBorder = ref(true)
fetchData()
async function fetchData() {
    try {
        await getapikey()
        tableData.value = await getUserList(apikey.value)
    } catch (error) {
        console.log(error);
    }
}
const closeAdd = () => {
    isShow.value = false
    info.value = new User()
}
const succes = () => {
    isShow.value = false
    info.value = new User()
    fetchData()
}
</script>
<template>
    <div class="header">
        <h1>用户列表</h1>
    </div>
    <div class="table">
        <el-button type="primary" style="margin-bottom: 10px" @click="addUser">添加</el-button>
        <el-table :data="tableData" :border="parentBorder" style="width: 100%" max-height="375">

            <el-table-column label="姓名" prop="uname" />
            <el-table-column label="头像Url" prop="pic"></el-table-column>
            <el-table-column label="描述" prop="info"></el-table-column>
            <el-table-column label="操作" width="150px">
                <template #default="scope">
                    <div class="btndiv">
                        <el-button size="small" type="primary" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                        <el-button size="small" type="danger"
                            @click="handleDelete(scope.$index, scope.row)">Delete</el-button>

                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
    <UserDrawer :isShow="isShow" :info="info" @succes="succes" @closeAdd="closeAdd" :apikey="apikey"></UserDrawer>
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