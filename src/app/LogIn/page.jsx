"use client"
import * as React from 'react';
import './../globals.css';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Diversity2TwoToneIcon from '@mui/icons-material/Diversity2TwoTone';
import DownloadingTwoToneIcon from '@mui/icons-material/DownloadingTwoTone';
import EqualizerTwoToneIcon from '@mui/icons-material/EqualizerTwoTone';
import Image from 'next/image';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState, useEffect } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useRouter } from 'next/navigation';
import Link from 'next/link';







export default function SquareCorners() {

  // for focus and blur start
  const [isFocusedUser, setIsFocusedUser] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);

  // for show and hide password start
  const [showPassword, setShowPassword] = useState(false);

  // for login start // get data from mockapi.io
  const [login, setLogin] = useState([]);
  useEffect(() => {
    fetch('https://65325ff8d80bd20280f56efd.mockapi.io/api/niloofar/users')
      .then(response => response.json())
      .then(data => {
        setLogin(data)
      })
  }, [login]);
  // for login end 

  // تعریف router
  const router = useRouter();


  return (
    <div className='flex justify-center items-center h-screen bg-slate-50 w'>

      <Stack direction="row  " className='shadow-2xl'>



        {/* part2 start */}
        <div className='  w-[400px] h-[450px]  '>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} className='px-10 py-8'>

              {/* part 1 start*/}
              <Grid size={12} sx={{ height: '100px' }} className='pb-8 font-sans text-md  '>
                <div className='w-full h-full relative'>
                   <Image src="/logo1.svg" alt="logo" fill className=' absolute top-0 left-0'   /> 
                </div>
              </Grid>
              {/* part 1 end */}

              {/* part 2 start */}
              <Grid size={12} sx={{ height: '300px' }} className='pb-8 font-sans text-md  '>

                {/* useing formik and yup for validation */}
                <div >
                  <Formik
                    initialValues={{ user: 'niloofar', password: 'niloofar' }}
                    validationSchema={Yup.object({
                      user: Yup.string()
                        .required('required'),
                      password: Yup.string()
                        .required('required'),
                    })}
                    // for login start
                    onSubmit={(values, { setSubmitting }) => {
                      if (values.user === 'niloofar' && values.password === 'niloofar' || login.some(item => item.username === values.user && item.password === values.password)) {
                        //  alert('login success')
                        // window.location.href = '/dashboard';
                        router.push('./');
                      } else {
                        alert('login failed')
                      }

                    }}

                  >

                    <Form>

                      {/* for focus and blur start */}
                      <Field className={`w-full  px-3 py-2 rounded-md ${isFocusedUser ? 'border-2 border-slate-500 outline-none' : 'border-none outline-none'}`} type="text" name="user" placeholder="username" onFocus={() => setIsFocusedUser(!isFocusedUser)} onBlur={() => setIsFocusedUser(!isFocusedUser)} />
                      <div className='w-full h-[10px] px-3 mt-1 text-red-500 text-xs font-sans font-bold'>
                        <ErrorMessage name="user" component="div" />
                      </div>
                      <br />

                      {/* for focus and blur start */}
                      {/* for show and hide password start */}
                      <div className="relative">
                        <Field className={`w-full px-3 py-2 rounded-md ${isFocusedPassword ? 'border-2 border-slate-500 outline-none' : 'border-none outline-none'}`} type={showPassword ? "text" : "password"} name="password" placeholder="password" onFocus={() => setIsFocusedPassword(!isFocusedPassword)} onBlur={() => setIsFocusedPassword(!isFocusedPassword)} />
                        <RemoveRedEyeIcon className='absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500 cursor-pointer' onClick={() => setShowPassword(!showPassword)} />
                      </div>


                      <div className='w-full h-[10px] px-3 mt-1 text-red-500 text-xs font-sans font-bold'>
                        <ErrorMessage name="password" component="div" />
                      </div>
                      <br />
                      <div className="flex justify-center flex-wrap">

                        <button type="submit" className="bg-[#1F3C58] hover:bg-[#152a3d] text-white font-bold font-sans py-2 px-8 rounded">
                          ورود
                        </button>

                        <div className='w-full flex justify-center mt-3'>
                          <p className='text-slate-500 text-xs font-sans'>
                            حساب کاربری ندارید ؟
                            <span className='text-[#1F3C58] underline hover:text-[#152a3d] cursor-pointer text-xs font-sans'> <Link href="/Signup"> ثبت نام</Link></span><br />
                          </p>
                        </div>
                      </div>



                    </Form>
                  </Formik>
                </div>
              </Grid>
              {/* part 2-2 end */}

            </Grid>
          </Box>.
        </div>

        {/* part2 end */}

      </Stack>

    </div>
  );
}