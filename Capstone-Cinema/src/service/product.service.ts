import { TDetail } from '../pages/detail/convert';
import { TMovie } from '../pages/home/convert';
import { axiosWthoutAuth } from './axios.config';

export const getAllMovie = async ():Promise<TMovie> =>{
 try{
    const resp = await axiosWthoutAuth("/QuanLyPhim/LayDanhSachPhim");
    return resp.data.content;
 }
 catch(error:any){
    throw new Error(error)
 }
}
export const getMoviebyMP = async (MaPhim:string):Promise<TDetail> =>{
   try{
      const resp = await axiosWthoutAuth(`/QuanLyPhim/LayThongTinPhim?MaPhim=${MaPhim}`);
      return resp.data.content;
   }
   catch(error:any){
      throw new Error(error)
   }
  }
