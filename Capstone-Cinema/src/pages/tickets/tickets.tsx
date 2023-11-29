// import React from 'react'
import { useState, useEffect } from "react";
import { getTickets } from '../../service/product.service';
import { IIFE } from '../../util';
import { useScrollToTop } from '../../hook/rool-to-top';

function Tickets() {
    useScrollToTop()
    const [listTickets, setListTickets] = useState([]);
    useEffect(() => {
        IIFE(async () => {
            const resp = await getTickets();
            console.log(resp)
            setListTickets((resp))
        })
    }, [])
    return (
        <>
            {listTickets}
        </>
    )
}

export default Tickets