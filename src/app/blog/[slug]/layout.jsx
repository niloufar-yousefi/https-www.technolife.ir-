import React from 'react'
import './../../globals.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BanerTop from './../../components/BanerTop';
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';




function layout({ children }) {
    return (
        <html lang="en">
            <body>
                <div className='w-full  overflow-hidden bg-slate-50 h-auto'>
                    <Box sx={{ flexGrow: 1 }} >
                        <Grid container>

                            {/* part1 baner top */}
                            <Grid xs={12} className='z-50'>
                                <BanerTop />
                            </Grid>

                            {/* part2 header */}
                            <Grid xs={12} className='z-50 '>
                                <Header />
                            </Grid>

                            {/* part3 content */}
                            <Grid xs={12} className='pt-[140px] lg:pt-[280px] '>
                                <div className='w-full h-auto px-4 lg:px-10'>
                                    {children}
                                </div>


                            </Grid>

                            {/* part4 footer */}
                            <Grid xs={12} className='mb-[10px] mt-[40px]'>
                                <Footer />
                            </Grid>


                        </Grid>
                    </Box>
                </div>
            </body>
        </html>
    )



}

export default layout
