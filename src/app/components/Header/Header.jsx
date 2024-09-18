'use client'
import React, { useState, useEffect, useLayoutEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import SearchBox from './headerComponent/part2DeskHeader';
import LogInEnter from './headerComponent/part3DeskHeader';
import Cart from './headerComponent/part4DeskHeader';
import TitleMenu from './headerComponent/part5DeskHeader';
import Drawer from './headerComponent/part1MobHeader';


function Header() {

    //input search about SearchBox on part2DeskHeader
    const [border, setBorder] = useState(false)

    //scroll on top menu part 5
    const [isScroll, setIsScroll] = useState(false)
    useLayoutEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })
    }, [])


    return (
        <div className='w-full border-b border-gray-300 bg-white duration-300 px-4 lg:px-10  fixed top-[20px] lg:top-[50px]'>

            {/* mobile start */}
            <div className='w-full h-[100px]  flex justify-center items-center  lg:hidden'>
                <Box sx={{ flexGrow: 1, height: '100%', width: '100%' }}>
                    <Grid container height={'100%'} width={'100%'}>

                        {/*  part 1 start */}
                        <Grid xs={1} sx={{ height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Drawer />
                        </Grid>
                        {/* part */}

                        {/* part 2 */}
                        <Grid xs={6} md={8} sx={{ height: '100px', display: 'flex', alignItems: 'center', paddingRight: '10px' }}>
                            <div className='w-full'>
                                {/*part2DeskHeader start*/}
                                <SearchBox border={border} setBorder={setBorder} />
                                {/*part2DeskHeader end*/}
                            </div>
                        </Grid>

                        {/* part 3 */}
                        <Grid  xs={4} md={2} sx={{ height: '100px', display: 'flex', alignItems: 'center' }}>
                            <div className='w-full flex justify-end items-center'>
                                {/*part3DeskHeader start*/}
                                <LogInEnter />
                                {/*part3DeskHeader end*/}
                            </div>
                        </Grid>

                        {/* part 4 */}
                        <Grid xs={1} className='' sx={{ height: '100px', alignItems: 'center', display: 'flex', justifyContent: 'end' }}>
                            <div className='w-full flex justify-end items-center'>
                                {/* part4DeskHeader start */}
                                <Cart />
                                {/* part4DeskHeader end */}
                            </div>
                        </Grid>

                    </Grid>
                </Box>
            </div>
            {/* mobile end */}



            {/* desktop start */}
            <div className={`${isScroll ? 'lg:h-[100px]' : 'lg:h-[180px]'} duration-300 hidden lg:block`}>
                <Box sx={{ flexGrow: 1, height: '100%', width: '100%' }}>
                    <Grid container height={'100%'} width={'100%'}>


                        {/* part 1 */}
                        <Grid xs={1} sx={{ height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Image src='/logo1.svg' alt='logo' width={100} height={100} priority style={{ width: 'auto', height: 'auto' }} />
                        </Grid>

                        {/* part 2 */}
                        <Grid xs={8} sx={{ height: '100px', display: 'flex', alignItems: 'center', paddingRight: '10px' }}>
                            <div className='w-full'>
                                {/*part2DeskHeader start*/}
                                <SearchBox border={border} setBorder={setBorder} />
                                {/*part2DeskHeader end*/}
                            </div>
                        </Grid>

                        {/* part 3 */}
                        <Grid  xs={2} sx={{ height: '100px', display: 'flex', alignItems: 'center' }}>
                            <div className='w-full flex justify-end items-center'>
                                {/*part3DeskHeader start*/}
                                <LogInEnter />
                                {/*part3DeskHeader end*/}
                            </div>
                        </Grid>

                        {/* part 4 */}
                        <Grid xs={1} className='' sx={{ height: '100px', alignItems: 'center', display: 'flex', justifyContent: 'end' }}>
                            <div className='w-full flex justify-end items-center'>
                                {/* part4DeskHeader start */}
                                <Cart />
                                {/* part4DeskHeader end */}
                            </div>
                        </Grid>

                        {/* part 5 list on bottom */}
                        <Grid xs={11} xl={9} sx={{ transition: 'all 0.3s', opacity: isScroll ? '0' : '1', height: isScroll ? '0' : '80px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {/* part5DeskHeader start */}
                            <TitleMenu />
                            {/* part5DeskHeader end */}
                        </Grid>

                    </Grid>
                </Box>
            </div>
            {/* desktop end */}

        </div>
    )
}

export default Header

