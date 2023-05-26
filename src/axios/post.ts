import axios from "axios";
import { fa, tr } from "element-plus/es/locale";
export async function getVideoList(key: string): Promise<any> {
  let data;
  await axios
    .post("http://127.0.0.1:10086/api/admin/getVideoList", {
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
    .post("http://127.0.0.1:10086/api/admin/getUser", {
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
    .post("http://127.0.0.1:10086/api/admin/getVideo", {
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
    .post("http://127.0.0.1:10086/api/admin/getUserList", {
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
    .post("http://127.0.0.1:10086/api/admin/addVideo", {
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
    .post("http://127.0.0.1:10086/api/admin/editVideo", {
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
    .post("http://127.0.0.1:10086/api/admin/delVideo", {
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
    .post("http://127.0.0.1:10086/api/admin/addUser", {
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
    .post("http://127.0.0.1:10086/api/admin/editUser", {
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
    .post("http://127.0.0.1:10086/api/admin/delUser", {
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
