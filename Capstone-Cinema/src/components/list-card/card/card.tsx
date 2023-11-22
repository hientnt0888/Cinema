import React from 'react'
import css from "./card.module.css";
import { useNavigate } from "react-router-dom";
import { string } from 'yup';
import * as S from "./style.ts";
export type Tcard = {
    mp: number;
    src: string;
    alt?: string;
    name: string;
    desc: string;
}
type Props = Tcard
function Card(props: Props) {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/detail/${props.mp}`);
    };
    return (
        <>
            <div className={css["container"]}>
                <img
                    onClick={handleNavigate}
                    className={css["card-img"]} src={props.src} alt="" />
                <S.Name>{props.name}</S.Name>
            </div>
        </>
    )
}

export default Card
