'use client'
import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import BanerTop from './../components/BanerTop';
import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';
import './../globals.css'
import useStore from './../store/store'
import Image from 'next/image';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Link from 'next/link';

function page() {

    const basket = useStore((state) => state?.basket) || []
    const removeFromBasket = useStore((state) => state.removeFromBasket)
    const increaseQuantity = useStore((state) => state.increaseQuantity)
    const decreaseQuantity = useStore((state) => state.decreaseQuantity)
    const totalPrice = basket.reduce((total, item) => total + item.price * item.quantity, 0)



    return (

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

                    {/* part3 content basket start */}
                    <Grid xs={12} className='pt-[140px] lg:pt-[280px] '>
                        <div className='w-full h-auto px-4 lg:px-10'>
                            {
                                basket.length === 0 ? (
                                    <div className='w-full h-[50vh]  px-4 lg:px-10 border-2 border-slate-200 rounded-2xl flex flex-wrap justify-center content-center'>
                                        <h5 className='text-xl lg:text-2xl  font-bold w-full text-center text-slate-500'>سبد خرید شما خالی است!</h5>
                                        <div className='w-[200px] h-[200px] mt-[30px]'>
                                            <Image src='/basket.png' width={200} height={200} alt='empty' priority className='w-full h-full' ></Image>
                                        </div>

                                    </div>
                                ) : (
                                    <div className='w-full h-auto  lg:px-10 flex justify-between  *:border-2 *:border-slate-200 *:rounded-2xl'>
                                        {/* part 1 */}
                                        <div className="w-[60%] bg-white">
                                            {basket.map((item) => (
                                                <div key={item.id} className='w-full h-[300px] flex flex-wrap justify-between items-center px-6 py-2'>

                                                    {/* part1-1 */}
                                                    <div className='w-full h-[60%] flex flex-wrap justify-between content-center '>
                                                        <div className='w-[60%] h-full flex flex-wrap justify-between content-center '>
                                                            <p className='text-slate-500 text-sm lg:text-xl w-[100%] '>{item.title}</p>
                                                        </div>

                                                        <div className='w-[20%] h-full flex flex-wrap justify-between items-center'>
                                                            <Image src={item.image} width={100} height={100} alt={item.name} priority className='w-auto h-auto' quality={100} ></Image>
                                                        </div>
                                                    </div>

                                                    {/* part1-2 */}
                                                    <div className='w-full h-[40%] flex flex-wrap justify-between items-center '>
                                                        {/* part1-2-1 */}
                                                        <div className="w-[30%]">
                                                            <p className='text-slate-500 text-sm lg:text-xl w-[100%] '>{item.price} <span className='text-slate-500 text-xs '>تومان</span></p>
                                                        </div>

                                                        {/* part1-2-2 */}
                                                        <div className="w-[50%] flex flex-wrap justify-between items-center ">

                                                            <div className='w-[20%] h-full flex flex-wrap justify-between items-center'>
                                                                <DeleteIcon onClick={() => removeFromBasket(item.id)} className='text-slate-500 mx-auto cursor-pointer hover:text-slate-700 duration-75' />
                                                            </div>

                                                            <div className='w-[60%] h-full flex flex-wrap justify-between items-center '>

                                                                <div className='w-[33%] h-full flex flex-wrap justify-between items-center  rounded-2xl'>
                                                                    <AddIcon onClick={() => increaseQuantity(item.id)} className='text-slate-500 mx-auto cursor-pointer hover:text-slate-700 duration-75' />
                                                                </div>

                                                                <div className='w-[33%] h-full flex flex-wrap justify-center items-center  rounded-2xl'>
                                                                    <p className='text-slate-500 text-sm lg:text-xl w-[100%] mx-auto text-center'>{item.quantity}</p>
                                                                </div>

                                                                <div className='w-[33%] h-full flex flex-wrap justify-between items-center  rounded-2xl'>
                                                                    <RemoveIcon onClick={() => decreaseQuantity(item.id)} className='text-slate-500 mx-auto cursor-pointer hover:text-slate-700 duration-75' />
                                                                </div>

                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* part2 */}
                                        <div className="w-[39%] lg:w-[30%] h-[300px] lg:h-[200px] bg-white flex flex-wrap  px-4">

                                            <div className="w-full h-[50%] flex flex-wrap  items-center ">
                                                <div className='w-full lg:w-[50%] h-[50%] lg:h-full flex flex-wrap  items-center '>
                                                    <p className='text-slate-500 text-sm lg:text-lg font-bold w-[100%] lg:text-center'>قیمت کل</p>
                                                </div>

                                                <div className='w-full lg:w-[50%] h-[50%] lg:h-full flex flex-wrap  lg:items-center '>
                                                    <p className='text-slate-500 text-sm lg:text-lg font-bold w-[100%] lg:text-center'>{totalPrice} <span className='text-slate-500 text-xs '>تومان</span></p>
                                                </div>
                                            </div>

                                            <div className="w-full h-[50%] flex flex-wrap  items-center">
                                                <Link className='w-full' href='/LogIn'>
                                                    <Button onClick={() => addToBasket({ id: data.id, title: data.title_fa, price: data.price.rrp_price, image: data.images.main, quantity: 1 })} variant="contained" color="success" className='text-slate-50  py-3 rounded-lg w-full hover:text-slate-200 text-[14px] duration-75' style={{ fontFamily: 'kamaleh' }}>
                                                        ادامه فرآیند خرید
                                                    </Button>
                                                </Link>
                                            </div>

                                        </div>
                                    </div>
                                )
                            }
                        </div>

                    </Grid>
                    {/* part3 content basket end **********/}

                    {/* part4 footer */}
                    <Grid xs={12} className='mb-[10px] mt-[40px]'>
                        <Footer />
                    </Grid>


                </Grid>
            </Box>
        </div>


    )
}

export default page
