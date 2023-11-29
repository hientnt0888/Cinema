import { axiosWthoutAuth } from './axios.config';
export type Tbody = {
    taiKhoan: string,
    matKhau: string,
    email: string,
    soDt: number,
    maNhom: string,
    hoTen: string
}
export const signUp = async (data:Tbody) =>{
    try{
       const resp = await axiosWthoutAuth("/QuanLyNguoiDung/DangKy",{method: "POST",
       data});
       return resp.data.content;
    }
    catch(error:any){
       throw new Error(error)
    }
   }
export type Tlogin = {
    taiKhoan:string,
    matKhau:string
}
   export const logIn = async (data:Tlogin) =>{
    try{
       const resp = await axiosWthoutAuth("/QuanLyNguoiDung/DangNhap",{
    method:"POST",
    data,})
       return resp.data.content;
    }
    catch(error:any){
       throw new Error(error)
    }
   }
//https://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/DangNhap
 