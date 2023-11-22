import { Tcard } from "../../components/list-card/card/card"

export type TMovie = {
        maPhim: number
        tenPhim: string
        biDanh: string
        trailer: string
        hinhAnh: string
        moTa: string
        maNhom: string
        ngayKhoiChieu: string
        danhGia: number
        hot: boolean
        dangChieu: boolean
        sapChieu: boolean  
}

export const convertMovie = (data: TMovie[]):Tcard[]=>{
    return data.map(item=>({
        desc:item.moTa,
        name:item.tenPhim,
        src:item.hinhAnh,
        mp:item.maPhim,
      }))
}