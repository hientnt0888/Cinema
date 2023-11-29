import { Carousel } from 'antd';
import { styled } from 'styled-components';

export const Mycaroucel = styled(Carousel)`
.slick-dots .slick-dots-bottom .btn-slider li button{
background: red;
}
`;
export const contentStyle: React.CSSProperties = {
    width: "93%",
    height: "400px",
    alignItems: "center",
    margin: "auto"
};