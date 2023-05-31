import axios from "axios";

const apiurl = process.env.VUE_APP_API_URL
export async function getVideoList(key: string): Promise<any> {
  let data;
  await axios
    .post(apiurl+"/admin/getVideoList", {
      key: key,
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
export async function getUser(key: string, uid: number): Promise<any> {
  let data;
  await axios
    .post(apiurl+"/admin/getUser", {
      key: key,
      uid: uid,
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
export async function getVideo(key: string, uid: number): Promise<any> {
  let data;
  await axios
    .post(apiurl+"/admin/getVideo", {
      key: key,
      uid: uid,
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
export async function getUserList(key: string): Promise<any> {
  let data;
  await axios
    .post(apiurl+"/admin/getUserList", {
      key: key,
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
export async function addVideo(
  key: string,
  before: boolean,
  vdata: any
): Promise<boolean> {
  let data: boolean = false;
  await axios
    .post(apiurl+"/admin/addVideo", {
      key: key,
      before: before,
      data: vdata,
    })
    .then(function (response) {
      if (response.data.status === 200) {
        data = true;
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  return data;
}
export async function editVideo(
  key: string,
  uid: number,
  vdata: any
): Promise<boolean> {
  let data: boolean = false;
  await axios
    .post(apiurl+"/admin/editVideo", {
      key: key,
      uid: uid,
      data: vdata,
    })
    .then(function (response) {
      if (response.data.status === 200) {
        data = true;
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  return data;
}
export async function delVideo(key: string, uid: number): Promise<boolean> {
  let data: boolean = false;
  await axios
    .post(apiurl+"/admin/delVideo", {
      key: key,
      uid: uid,
    })
    .then(function (response) {
      if (response.data.status === 200) {
        data = true;
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  return data;
}
export async function addUser(key: string, udata: any): Promise<boolean> {
  let data: boolean = false;
  await axios
    .post(apiurl+"/admin/addUser", {
      key: key,
      data: udata,
    })
    .then(function (response) {
      if (response.data.status === 200) {
        data = true;
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  return data;
}
export async function editUser(
  key: string,
  uid: number,
  udata: any
): Promise<boolean> {
  let data: boolean = false;
  await axios
    .post(apiurl+"/admin/editUser", {
      key: key,
      uid: uid,
      data: udata,
    })
    .then(function (response) {
      if (response.data.status === 200) {
        data = true;
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  return data;
}
export async function delUser(key: string, uid: number): Promise<boolean> {
  let data: boolean = false;
  await axios
    .post(apiurl+"/admin/delUser", {
      key: key,
      uid: uid,
    })
    .then(function (response) {
      if (response.data.status === 200) {
        data = true;
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  return data;
}
