import axios from "axios";
export async function checkPwd(password: string): Promise<string> {
  let data: string = "";
  await axios
    .get("http://127.0.0.1:10086/api/checkPwd", {
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
