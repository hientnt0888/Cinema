import { getLocal } from "src/utils";
import { axiosAuth, axiosWithoutAuth } from "./axios.config";
import { ACCESS_TOKEN } from "src/constants";

type TBody = {
    taiKhoan: "string",
    matKhau: "string",
    email: "string",
    soDt: "string",
    maNhom: "string",
    hoTen: "string"
};

export const signUp = async (data: TBody) => {
  try {
    const resp = await axiosWithoutAuth("/Users/signup", {
      method: "POST",
      data,
    });
    // fetch: body
    // axios: data

    return resp.data.content;
  } catch (error: any) {
    throw new Error(error);
  }
};

type TDataSignin = {
  email: string;
  password: string;
};

export const signIn = async (data: TDataSignin) => {
  try {
    const resp = await axiosWithoutAuth("/Users/signin", {
      method: "POST",
      data,
    });
    // fetch: body
    // axios: data

    return resp.data.content;
  } catch (error: any) {
    throw new Error(error);
  }
};

// Users/getProfile
export const getProfile = async () => {
  try {
    const resp = await axiosAuth("/Users/getProfile", {
      method: "POST",
    });
    // fetch: body
    // axios: data

    return resp.data.content;
  } catch (error: any) {
    throw new Error(error);
  }
};
