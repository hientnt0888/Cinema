import React from 'react'
import css from "./header.module.css"
import { Link } from "react-router-dom"
function Header() {
    return (
        <>
            <div className={css["header"]}>
                <div className={css["header-time"]}>
                    <p>GIỜ MỞ CỬA: 9:00 - 22:00</p>
                </div>
                <div className={css["header-info"]}></div>
                <div className={css["header-img"]}>
                    <img src="/src/assets/img/METIZ_LOGO_WEB.png" alt="" />
                </div>
                <div className={css["header-movie"]}>
                    <Link className={css["header-text"]} to={"."}>LỊCH CHIẾU</Link>
                    <Link className={css["header-text"]} to={"."}>PHIM</Link>
                    <Link className={css["header-text"]} to={"."}>ƯU ĐÃI</Link>
                    <Link className={css["header-text"]} to={"."}>THÀNH VIÊN</Link>
                </div>
                <div className={css["header-login"]}>
                    <Link className={css["header-log"]} to={"."}>ĐĂNG NHẬP</Link>
                    <Link className={css["header-log"]} to={"."}>ĐĂNG KÝ</Link>
                </div>

            </div>

        </>
    )
}

export default Header