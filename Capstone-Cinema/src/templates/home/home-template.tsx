// import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

function HomeTemplate() {
    return (
        <>
            <Header />
            <Suspense fallback="loading....">
                <Outlet />
            </Suspense>
            <Footer />

        </>
    )
}

export default HomeTemplate