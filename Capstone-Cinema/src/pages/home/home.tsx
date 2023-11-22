import React from 'react'
import { Slider } from './slider/slider'
import ListCard from '../../components/list-card/list-card'
import { axiosWthoutAuth } from '../../service';
import { useState, useEffect } from "react";
import { getAllMovie } from '../../service/product.service';
import { IIFE } from '../../util';
import { TMovie, convertMovie } from './convert';
import { Tcard } from '../../components/list-card/card/card';

function Home() {
    const [listMovie, setListMovie] = useState<Tcard[]>([]);
    useEffect(() => {
        IIFE(async () => {
            const resp = await getAllMovie();
            setListMovie(convertMovie(resp))
        })
    }, [])
    console.log(listMovie)
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