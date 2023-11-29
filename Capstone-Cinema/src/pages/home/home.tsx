// import React from 'react'
import { Slider } from './slider/slider'
import ListCard from '../../components/list-card/list-card'
// import { axiosWthoutAuth } from '../../service';
import { useState, useEffect } from "react";
import { getAllMovie } from '../../service/product.service';
import { IIFE } from '../../util';
import { convertMovie } from './convert';
import { Tcard } from '../../components/list-card/card/card';
import { useScrollToTop } from '../../hook/rool-to-top';

function Home() {
    useScrollToTop()
    const [listMovie, setListMovie] = useState<Tcard[]>([]);
    useEffect(() => {
        IIFE(async () => {
            const resp: any = await getAllMovie();
            setListMovie(convertMovie(resp))
        })
    }, [])
    return (
        <>
            <div style={{ backgroundColor: "#0f1d2f" }}>
                <Slider />
            </div>
            <ListCard data={listMovie} />

        </>
    )
}

export default Home