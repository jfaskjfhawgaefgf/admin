<script setup lang="ts">
import { checkPwd } from '@/axios/get';
import { getVideo } from '@/axios/post';
import Video from '@/class/Video';
import { computed, ref, watch } from 'vue';

const props = defineProps({
    isShow: Boolean,
    info: Video,
    apikey: String
})
const apikey = computed(() => props.apikey)
const dialogTableVisible = computed(() => props.isShow)
watch(() => props.info, async (newInfo) => {
    if (newInfo && apikey.value) {
        data.value = await getVideo(apikey.value, newInfo.uid)
    }
})
const data = ref<Video>(new Video())
const childBorder = ref(true)
</script>
<template>
    <el-dialog v-model="dialogTableVisible" @close="$emit('closeAdd')">
        <div style="margin-left: 20px">
            <el-descriptions title="视频信息" column="1" >
                
                <el-descriptions-item label="标题：">{{ data && data.title }}</el-descriptions-item>
                <el-descriptions-item label="描述：">{{ data && data.info }}</el-descriptions-item>
                <el-descriptions-item label="视频url：">{{ data && data.src }}</el-descriptions-item>
                <el-descriptions-item label="视频封面：">{{ data && data.img }}</el-descriptions-item>
                <el-descriptions-item label="下载量：">{{ data && data.download }}</el-descriptions-item>
                <el-descriptions-item label="播放量：">{{ data && data.visit }}</el-descriptions-item>
                <el-descriptions-item label="评分：">{{ data && data.score }}</el-descriptions-item>
            </el-descriptions>
            <h3>人员表</h3>
            <el-table v-if="data && data.user" :data="data.user" :border="childBorder">
                <el-table-column label="职位" prop="works" />
                <el-table-column label="姓名" prop="uname" />
                <el-table-column label="描述" prop="info" />
            </el-table>
        </div>
    </el-dialog>
</template>
<style lang="less"></style>
