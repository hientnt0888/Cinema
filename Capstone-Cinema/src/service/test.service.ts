// import { getLocal } from "../util/index";
import { axiosAuth, axiosWithoutAuth } from "./test.config";
// import { ACCESS_TOKEN } from "../const";

type TBody = {
  email: string;
  password: string;
  name: string;
  gender: boolean;
  phone: string;
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
