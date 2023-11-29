// import React from 'react'
import css from "./header.module.css"
import { Link, useNavigate } from "react-router-dom"
import { useAppSelector } from '../../redux/hook';
import { setLogin } from "../../redux/userSlice";
import { removeLocal } from '../../util';
import { ACCESS_TOKEN } from '../../const';
import { useDispatch } from "react-redux";

function Show({ when, fallback, children }: any) {
    return when ? children : fallback;
}
function Header() {
    const navigate = useNavigate();
    // const { cart } = useAppSelector((rootReducer) => rootReducer.cartsReducer);
    const { login } = useAppSelector((rootReducer) => rootReducer.userReducer);
    const dispatch = useDispatch();

    return (
        <>
            <div className={css["header"]}>
                <div className={css["header-time"]}>
                    <p>GIỜ MỞ CỬA: 9:00 - 22:00</p>
                </div>
                <div className={css["header-info"]}></div>
                <div className={css["header-img"]}>
                    {/* <img src="/src/assets/img/METIZ_LOGO_WEB.png" alt="" /> */}
                    <img src="../../../dist/img/METIZ_LOGO_WEB.png" alt="" />
                </div>
                <div className={css["header-movie"]}>
                    <Link className={css["header-text"]} to={"."}>LỊCH CHIẾU</Link>
                    <Link className={css["header-text"]} to={"."}>PHIM</Link>
                    <Link className={css["header-text"]} to={"."}>ƯU ĐÃI</Link>
                    <Link className={css["header-text"]} to={"."}>THÀNH VIÊN</Link>
                </div>
                <div className={css["header-login"]}>
                    <Show
                        when={login.email}
                        fallback={
                            <Link className={css["header-log"]} to={"/Sign"}>ĐĂNG NHẬP</Link>
                        }
                    >
                        <Link style={{ color: "white", padding: "0 2rem", fontSize: "1.7rem" }} to="profile">{login.email}</Link>
                    </Show>

                    <Show
                        when={!login.email}
                        fallback={
                            <button style={{ color: "white", fontSize: "1.5rem" }}
                                onClick={() => {
                                    // 1. Chuyen ve trang login
                                    navigate("/Sign");
                                    // 2. Xoa localstorage
                                    removeLocal(ACCESS_TOKEN);
                                    // 3. Remove tren redux;
                                    dispatch(
                                        setLogin({
                                            email: "",
                                        }),
                                    );
                                }}
                            >
                                Logout
                            </button>
                        }
                    >
                        <Link className={css["header-log"]} to={"/Regis"}>ĐĂNG KÝ</Link>
                    </Show>

                </div>

            </div>

        </>
    )
}

export default Header
