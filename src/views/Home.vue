<script lang="ts" setup>
import {ref} from 'vue'
import {
    SwitchButton,
    Menu as IconMenu,
    Histogram
} from '@element-plus/icons-vue'
import { reactive, toRefs } from 'vue'
const state = reactive({
    circleUrl:
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
})
const { circleUrl } = toRefs(state)
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>
<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <el-menu
                        :default-active="activeIndex"
                        :ellipsis="false"
                        class="el-menu-demo"
                        mode="horizontal"
                        style="position: fixed;width: 96%;"

                        @select="handleSelect"
                >
                    <el-menu-item index="0">LOGO</el-menu-item>
                    <div class="flex-grow"/>
                    <el-dropdown>
                        <div class="el-dropdown-link" style="margin-right: 25px;margin-top: 14px;margin-bottom: 13px;">
                            <el-avatar :size="30" :src="circleUrl" />
                        </div>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item :icon="SwitchButton">退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </el-menu>
            </el-header>
            <!--        侧边布局-->
            <el-container>
                <el-aside class="layout-container-demo" width="64px">
                    <!--            侧边菜单栏-->

                    <el-scrollbar style="height: 100%;">

                        <div style="position: fixed;height: 100%;border-right: solid 1px var(--el-menu-border-color);">
                            <el-menu :collapse=true :default-openeds="['1']" unique-opened=true>
                                <el-sub-menu index="1" :default-openeds="['1-1']">
                                    <template #title>
                                        <el-icon>
                                            <el-icon><Histogram /></el-icon>
                                        </el-icon>
                                        <span>仪表盘</span>
                                    </template>
                                    <el-menu-item index="1-1">仪表盘</el-menu-item>
                                </el-sub-menu>
                                <el-sub-menu index="2">
                                    <template #title>
                                        <el-icon>
                                            <icon-menu/>
                                        </el-icon>
                                        <span>管理界面</span>
                                    </template>
                                    <router-link to="/Video" style="text-decoration: none">
                                        <el-menu-item index="2-1">视频管理</el-menu-item>
                                    </router-link>
                                    <router-link to="/User" style="text-decoration: none">
                                        <el-menu-item index="2-2">用户管理</el-menu-item>
                                    </router-link>
                                </el-sub-menu>
                            </el-menu>
                        </div>
                    </el-scrollbar>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style lang="less">
//侧边栏菜单
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}

.layout-container-demo .el-menu {
  border-right: none;
}

* {
  padding: 0;
  margin: 0;
}

.flex-grow {
  flex-grow: 1;
}

html, body, #app, .common-layout, section, .el-scrollbar__view {
  height: 100%;
}


.block-col-2 .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}

</style>