'use client'
import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';
import Image from 'next/image';
import { Button } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Divider from '@mui/material/Divider';



const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='w-full  px-4 lg:px-10 text-slate-50  '>

            <div className="w-full h-full bg-[rgb(20,39,64)] rounded-2xl  px-4 lg:px-10 py-4">
                <Box sx={{ flexGrow: 1, height: '100%', width: '100%' }}>
                    <Grid container height={'100%'} width={'100%'}>

                        {/* part 1 */}
                        <Box sx={{ flexGrow: 1, height: '100%', width: '100%' }}>
                            <Grid container height={'100%'} width={'100%'}>

                                {/* part 1-1 */}
                                <Grid xs={3} sm={2} lg={1} sx={{ height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image src='/logo1.svg' alt='logo' width={100} height={100} priority style={{ width: 'auto', height: 'auto' }} />
                                </Grid>

                                {/* part 2-1 */}
                                <Grid xs={9} sm={10} lg={11} sx={{ height: '100px', display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                                    <Button onClick={scrollToTop} variant='contained' className='bg-slate-50 text-slate-800 rounded-lg py-2' style={{ fontFamily: 'kamaleh' }}>
                                        بازگشت به بالا
                                        <KeyboardArrowUpIcon className='mr-2' />
                                    </Button>
                                </Grid>

                                {/* part 2 */}
                                <Grid xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div className=" w-full h-[1px] bg-slate-500"></div>
                                </Grid>

                                {/* part 3 */}
                                <Grid xs={12} className='pt-4' sx={{height: '200px',display: 'flex',flexWrap:'wrap' }}>
                                    <Typography variant="h6" component="h2" gutterBottom className='text-slate-50 w-full ' style={{ fontFamily: 'kamaleh' }}>
                                        اطلاعات تماس
                                    </Typography>
                                    <Typography variant="body1" gutterBottom className='text-slate-50 w-full' style={{ fontFamily: 'kamaleh' }}>
                                        آدرس: تهران، خیابان ولیعصر، پلاک ۱۲۳۴
                                    </Typography>
                                <Typography variant="body1" gutterBottom className='text-slate-50 w-full' style={{ fontFamily: 'kamaleh' }}>
                                    تلفن: ۰۲۱۸۸۸۸۸۸
                                </Typography>
                                    <Typography variant="body1" gutterBottom className='text-slate-50 w-full' style={{ fontFamily: 'kamaleh' }}>
                                        ایمیل: info@technolife.com
                                    </Typography>
                                </Grid>
                            </Grid>

                             {/* part 4 */}
                             <Grid xs={12} className='py-4' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <p className='text-slate-50 text-center '>Developed by <span className='text-blue-500'>Niloofar Yoosefi Khorram</span></p>
                                </Grid>

                        </Box>


                    </Grid>
                </Box>
            </div>
        </div>
    );
}

export default Footer;