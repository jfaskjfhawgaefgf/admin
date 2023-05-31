const fs = require("fs");
const path = require("path");

const envFilePath = path.join(__dirname, ".env");

if (!fs.existsSync(envFilePath)) {
  const envContent = `# API URL
  VUE_APP_API_URL=http://127.0.0.1:10086/api`;
  fs.writeFileSync(envFilePath, envContent);

  console.log("配置文件不存在");
  console.log("生成.env文件成功");
  console.log("请修改配置文件(.env)后重新启动");
  process.exit(1);
}
