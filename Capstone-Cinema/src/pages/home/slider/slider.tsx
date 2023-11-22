import React from 'react';
import { Carousel } from 'antd';
import { contentStyle } from './style';

export function Slider() {
    return (
        <>
            <Carousel autoplay dots={{ className: "btn-slider" }}>
                <div>
                    <img style={contentStyle} src="http://movieapi.cyberlearn.vn/hinhanh/lat-mat-48h.png" alt="" />
                </div>
                <div>
                    <img style={contentStyle} src="http://movieapi.cyberlearn.vn/hinhanh/cuoc-chien-sinh-tu.png" alt="" />
                </div>
                <div>
                    <img style={contentStyle} src="/src/assets/img/phim-hay-thang-11-2023-tai-metiz-cinema.jpg" alt="" />
                </div>
            </Carousel >
        </>
    )
}

