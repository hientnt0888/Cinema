import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getMoviebyMP } from '../../service';
import { IIFE } from '../../util';
import { TDetail } from './convert';
import * as S from "./style"
import css from "./detail.module.css"
import { useScrollToTop } from '../../hook/rool-to-top';
function Detail() {
    useScrollToTop()
    const param = useParams<{ MaPhim: string }>();
    const [detail, setDetail] = useState<TDetail>();
    useEffect(() => {
        IIFE(async () => {
            if (param.MaPhim) {
                const resp = await getMoviebyMP(param.MaPhim);
                setDetail(resp)
            }
        })
    }, [])
    return (
        <>
            <div className={css["bg"]}>
                <div className={css["main"]}>
                    <div className={css["info-movie"]}>
                        <S.Image src={detail?.hinhAnh} alt="" />
                        <div className={css["info-text"]}>
                            <S.Name> {detail?.tenPhim}</S.Name>
                            <S.Info> {detail?.moTa}</S.Info>
                            <S.Info>{detail?.trailer}</S.Info>
                        </div>
                    </div>
                </div>
                <button className={css["bookTK"]}>Đặt Vé</button>
            </div>


        </>
    )
}

export default Detail