<script setup lang="ts">

import { ref, computed, watch } from 'vue'
import Video from '@/class/Video';
import User from '@/class/User';
import { getUser, getUserList, editVideo, addVideo } from '@/axios/post';
import { checkPwd } from "@/axios/get";
import { ElMessage } from 'element-plus';

const props = defineProps({
    isShow: Boolean,
    info: Video
})
const drawer2 = computed(() => props.isShow)
const direction = ref('rtl')
function cancelClick() {
    emits("closeAdd")
    clear()
}
const form = ref({
    uid: 0,
    title: "",
    info: "",
    src: "",
    img: ""
})
const isEdit = ref(false)


watch(() => props.info, (newInfo) => {
    if (newInfo) {
        form.value = {
            uid: newInfo.uid,
            title: newInfo.title,
            info: newInfo.info,
            src: newInfo.src,
            img: newInfo.img
        }
        try {
            newInfo.user.forEach(async (element: { uid: number; works: any; }) => {
                TableData.value.push(
                    {
                        uid: element.uid,
                        uname: (await getUser((await checkPwd("admin123")), element.uid)).uname,
                        works: element.works
                    })
            })
        } catch (error) {
            console.log(error);
        }
        isEdit.value = true
    } else {
        isEdit.value = false
    }
})


const value = ref()
const works = ref('')
const options = ref([new User()])
fetchData()
async function fetchData() {
    try {
        options.value = await getUserList(await checkPwd("admin123"))
    } catch (error) {
        console.log(error);
    }
}
fetchData()
async function confirmClick() {
    let isOK = ref(false)
    TableData.value.forEach((element) => {
        user.value.push({
            uid: element.uid,
            works: element.works
        })
    })
    if (isEdit.value) {
        try {
            isOK.value = await editVideo(await checkPwd("admin123"), form.value.uid, {
                title: form.value.title,
                info: form.value.info,
                src: form.value.src,
                img: form.value.img,
                user: user.value
            })
        } catch (error) {
            console.log(error);
        }
    } else {
        try {
            isOK.value = await addVideo(await checkPwd("admin123"), true,{
                title: form.value.title,
                info: form.value.info,
                src: form.value.src,
                img: form.value.img,
                user: user.value
            })
            
        } catch (error) {
            console.log(error);
        }
    }
    user.value = []
    if (isOK.value) {
        ElMessage({
            message: '成功',
            type: 'success',
        })
        emits("succes")
        clear()
    } else {
        ElMessage.error('失败')
    }
}
interface workuser {
    uid: number,
    works: String
}
const user = ref<workuser[]>([])
const emits = defineEmits(["closeAdd", "succes"])
interface worksUser {
    uid: number,
    uname: string,
    works: String
}

const TableData = ref<worksUser[]>([])

const handleDelete = (index: number, row: worksUser) => {
    TableData.value.splice(index, 1)
}

async function addUser() {
    try {
        TableData.value.push(
            {
                uid: value.value,
                uname: (await getUser((await checkPwd("admin123")), value.value)).uname,
                works: works.value
            })
    } catch (error) {
        console.log(error);
    }
}

function clear() {
    TableData.value = []
    value.value = ref()
    works.value = ''
}
</script>

<template>
    <el-drawer v-model="drawer2" :direction="direction" @close="$emit('closeAdd'), clear()" size="720px">
        <template #header>
            <h4>{{ info?.title ? '修改' : '新增' }}</h4>
        </template>
        <template #default>
            <el-form :model="form" label-width="auto" label-position="top">
                <el-row>
                    <el-col :span="11">
                        <el-form-item label="标题">
                            <el-input v-model="form.title" />
                        </el-form-item>
                        <el-form-item label="视频url">
                            <el-input v-model="form.src" />
                        </el-form-item>
                        <el-form-item label="封面url">
                            <el-input v-model="form.img" />
                        </el-form-item>
                        <el-form-item label="简介">
                            <el-input v-model="form.info" type="textarea" :rows="8" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="1">
                    </el-col>
                    <el-col :span="11">
                        <el-form-item label="选择角色">
                            <el-select v-model="value" clearable placeholder="Select" style="width: 100%;">
                                <el-option v-for="item in options" :key="item.uid" :label="item.uname" :value="item.uid" />
                            </el-select>
                        </el-form-item>
                        <el-form-item label="职位">
                            <el-input v-model="works" />
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="addUser">添加</el-button>
                        </el-form-item>
                        <el-table :data="TableData" style="width: 100%" height="250">
                            <el-table-column label="姓名" prop="uname" />
                            <el-table-column label="职位" prop="works" />
                            <el-table-column label="操作">
                                <template #default="scope">
                                    <el-button size="small" type="danger"
                                        @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-col>
                </el-row>
            </el-form>
        </template>
        <template #footer>
            <div style="flex: auto">
                <el-button @click="cancelClick">cancel</el-button>
                <el-button type="primary" @click="confirmClick">confirm</el-button>
            </div>
        </template>
    </el-drawer>
</template>

<style scoped lang="less"></style>