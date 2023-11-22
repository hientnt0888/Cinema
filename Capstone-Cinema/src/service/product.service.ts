import { TMovie } from '../pages/home/convert';
import { axiosWthoutAuth } from './axios.config';

export const getAllMovie = async ():Promise<TMovie> =>{
 try{
    const resp = await axiosWthoutAuth("./QuanLyPhim/LayDanhSachPhim");
    return resp.data.content;
 }
 catch(error:any){
    throw new Error(error)
 }
}
export const getBanner = async ():Promise<TMovie> =>{
   try{
      const resp = await axiosWthoutAuth("./QuanLyPhim/LayDanhSachBanner");
      return resp.data.content;
   }
   catch(error:any){
      throw new Error(error)
   }
  }
