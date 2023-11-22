import React from 'react'
import css from "./card.module.css";
import { string } from 'yup';
export type Tcard = {
    src: string;
    alt?: string;
    name: string;
    desc: string;
}
type Props = Tcard
function Card(props: Props) {
    return (
        <>
            <div className={css["container"]}>
                <img className={css["card-img"]} src={props.src} alt="" />
            </div>
        </>
    )
}

export default Card
