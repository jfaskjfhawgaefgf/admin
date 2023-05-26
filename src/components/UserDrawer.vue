<script setup lang="ts">

import { ref, computed, watch } from 'vue'
import User from '@/class/User';
import { getUserList, addUser, editUser } from '@/axios/post';
import { checkPwd } from "@/axios/get";
import { ElMessage } from 'element-plus';

const props = defineProps({
    isShow: Boolean,
    info: User
})
const drawer2 = computed(() => props.isShow)
const direction = ref('rtl')
function cancelClick() {
    emits("closeAdd")
}
const form = ref({
    uid: 0,
    status: 1,
    uname: "",
    pic: "",
    info: ""
})
const isEdit = ref(false)


watch(() => props.info, (newInfo) => {
    if (newInfo) {

        form.value = newInfo
        isEdit.value = true

    } else {
        isEdit.value = false
    }
})

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
    if (isEdit.value) {
        try {
            isOK.value = await editUser(await checkPwd("admin123"), form.value.uid, {
                uname: form.value.uname,
                pic: form.value.pic,
                info: form.value.info
            })
        } catch (error) {
            console.log(error);
        }
    } else {
        try {
            isOK.value = await addUser(await checkPwd("admin123"), {
                uname: form.value.uname,
                pic: form.value.pic,
                info: form.value.info
            })

        } catch (error) {
            console.log(error);
        }
    }
    if (isOK.value) {
        ElMessage({
            message: '成功',
            type: 'success',
        })
        emits("succes")
    } else {
        ElMessage.error('失败')
    }
}
const emits = defineEmits(["closeAdd", "succes"])
</script>

<template>
    <el-drawer v-model="drawer2" :direction="direction" @close="$emit('closeAdd')" size="360px">
        <template #header>
            <h4>{{ info?.uname ? '修改' : '新增' }}</h4>
        </template>
        <template #default>
            <el-form :model="form" label-width="auto" label-position="top">
                <el-row>
                    <el-col>
                        <el-form-item label="姓名">
                            <el-input v-model="form.uname" />
                        </el-form-item>
                        <el-form-item label="头像url">
                            <el-input v-model="form.pic" />
                        </el-form-item>
                        <el-form-item label="简介">
                            <el-input v-model="form.info" type="textarea" :rows="8" />
                        </el-form-item>
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