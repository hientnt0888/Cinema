import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getMoviebyMP } from '../../service';
import { IIFE } from '../../util';
import { TDetail } from './convert';
import * as S from "./style"
import css from "./detail.module.css"
import { useScrollToTop } from '../../hook/rool-to-top';
import { useAppSelector } from '../../redux/hook';
function Detail() {
    const { login } = useAppSelector((rootReducer) => rootReducer.userReducer);
    const navigate = useNavigate();
    const handleBookTicket = () => {
        if (login.email) {
            alert("Đặt vé thành công!");
            if (login) {
                navigate("/");
            }
        } else {
            alert("Vui lòng đăng nhập để đặt vé!");
            navigate("/Sign");
        }
    };
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
                            <S.Info> <p>Trailer</p>{detail?.trailer}</S.Info>
                        </div>
                    </div>
                </div>
                <button
                    onClick={handleBookTicket}
                    className={css["bookTK"]}>Đặt Vé</button>
            </div>
        </>
    )
}
export default Detail