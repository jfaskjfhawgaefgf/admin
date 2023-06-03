<script setup lang="ts">
import { checkPwd } from '@/axios/get';
import { ElMessage } from 'element-plus';
import { ref } from 'vue'
const password = ref('')
const submit = async () => {
    let key = await checkPwd(password.value)
    if (key === "") {
        ElMessage.error('登录失败，请检查密码是否正确！')
    } else {
        let now = new Date();
        let expires = new Date(now.getTime() + 24 * 3600 * 1000);
        let expiresStr = expires.toUTCString();
        document.cookie = "apikey=" + key + "; expires=" + expiresStr + "; path=/";
        ElMessage({
            message: '登录成功！',
            type: 'success',
        })
        location.replace("./")
    }

}
</script>
<template>
    <div class="login-box">
        <div class="Card">
            <h1 style="text-align: center;font-size: 32px;color: #333;margin: 0;padding: 30px 20px;border-bottom: 1px solid #eee;">欢迎登录</h1>
            <div class="demo-login">
                <div class="form">
                    <label for="password">密码：</label>
                    <input  v-show="false"/>
                    <input v-model="password" type="password" id="password" @keydown.enter="submit" required>
                    <input type="button" value="登录" @click="submit">
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less">
body {
    background: #f8f8f8;
    font-family: Arial, sans-serif;
}

.Card {
    border-radius: 30px;
    width: 333px;
    box-shadow: 5px 5px 5px 5px #cccccc;
}

.demo-login {
    padding: 5%;
    width: 300px;
    margin: 0 auto !important;
}

.login-box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}



.form {
    padding: 20px;
}

label {
    display: block;
    color: #666;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 10px;
}

input[type=password] {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-sizing: border-box;
}

input[type=button] {
    width: 100%;
    margin-top: 20px;
    padding: 10px;
    font-size: 16px;
    color: #fff;
    background: #2db7f5;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

input[type=button]:hover {
    background: #1d8ce0;
}
</style>