import axios from "axios";
const apiurl = process.env.VUE_APP_API_URL
export async function checkPwd(password: string): Promise<string> {
  let data: string = "";
  await axios
    .get(apiurl+"/checkPwd", {
      params: {
        password: password,
      },
    })
    .then(function (response) {
      if (response.data.status === 200) {
        data = response.data.data;
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  return data;
}
