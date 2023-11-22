import React from 'react'
import Card, { Tcard } from './card/card'
import css from "./listcard.module.css"
type Props = {
    data: Tcard[]
}
function ListCard(props: Props) {
    return (
        <>
            <div className={css["list-moviebg"]}>
                <div className={css["btn"]}>
                    <button className={css["btn-card"]}>PHIM ĐANG CHIẾU</button>
                    <button className={css["btn-card"]}>PHIM SẮP CHIẾU</button>
                </div>
                <div className={css["list-movie"]}>
                    {props.data.map((item) => {
                        return (
                            <Card
                                mp={item.mp}
                                desc={item.desc}
                                name={item.name}
                                src={item.src}
                                alt={item.alt}
                            />
                        );
                    })}
                </div>
            </div>

        </>
    )
}

export default ListCard