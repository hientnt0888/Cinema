// import React, { useEffect, useRef, useState } from 'react'
import css from "./footer.module.css"
import IconYT from '../../assets/icon/icon-footer'
import IconInsta from '../../assets/icon/icon-insta'
import IconFB from '../../assets/icon/icon-fb'
function Footer() {
    return (
        <footer>
            <div className={css["footer-icon"]}>
                <div className={css["icon-fb"]}>
                    <IconFB />
                </div>
                <div className={css["icon-ins"]}>
                    <IconInsta />
                </div>
                <div className={css["icon-yt"]}>
                    <IconYT />
                </div>


            </div>
            <div className={css["footer-bg"]}>
                <div className={css["metiz-footer"]}>
                    <div className={css["area"]}>
                        <img src="/dist/img/logo_footer.png" alt="" />
                        <span>TẦNG 1 HELIO CENTER,</span>
                        <span>ĐƯỜNG 2/9, HẢI CHÂU,</span>
                        <span>ĐÀ NẴNG</span>
                    </div>

                    <div className={css["metiz-info"]}>
                        <h2>METIZ CINEMA</h2>
                        <p>GIỚI THIỆU</p>
                        <p>LIÊN HỆ</p>
                        <p>TUYỂN DỤNG</p>
                    </div>
                    <div className="metiz-moreinfo">
                        <h2>THÔNG TIN CHUNG</h2>
                        <p>ĐIỀU KHOẢN CHUNG</p>
                        <p>CÂU HỎI THƯỜNG GẶP</p>
                        <p>ĐIỀU KHOẢN GIAO DỊCH</p>
                    </div>
                    <div className={css["footer-img"]}>
                        <img src="/dist/img/phim-hay-thang-11-2023-tai-metiz-cinema.jpg" alt="" />
                    </div>
                </div>

                <div className={css["metiz-company"]}>
                    <div className={css["company-info"]}>
                        <p>Tên Doanh Nghiệp: Công Ty TNHH KHỞI PHÁT.</p>
                        <p>Giấy CNĐKKD: 0400668112 - Ngày cấp: 05/11/2008. Đăng ký thay đổi lần thứ 11 ngày 21/12/2016</p>
                        <p>Cơ quan cấp: Phòng Đăng ký kinh doanh - Sở kế hoạch và đầu tư Thành phố Đà Nẵng</p>
                        <p>Địa chỉ đăng ký kinh doanh: 22 đường 2/9, Phường Bình Hiên, Q.Hải Châu, Tp.Đà Nẵng, Việt Nam.</p>
                        <p>Điện thoại: 0236 3630 689</p>
                    </div>
                    <div className={css["company-img"]}>
                        {/* <img src="/src/assets/img/icon-notify.png" alt="" /> */}
                        <img src="/dist/img/icon-notify.png" alt="" />
                    </div>
                </div>
                <hr className={css["footer-hr"]} />
                <div className={css["footer-end"]}>
                    <p>MỘT SẢN PHẨM ĐẾN TỪ KHỞI PHÁT, LTD.</p>
                    <img src="/dist/img /logo_bottom.png" alt="" />
                    <p>BẢN QUYỀN © 2017 METIZ CINEMA</p>
                </div>
            </div>
            {/* </div> */}
        </footer>
    )
}

export default Footer