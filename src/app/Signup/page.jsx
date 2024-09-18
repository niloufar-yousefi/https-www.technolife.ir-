"use client"
import * as React from 'react';
import './../globals.css';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import Image from 'next/image';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState, useEffect } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';






export default function SquareCorners() {

  // for focus and blur start
  const [isFocusedUser, setIsFocusedUser] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);

  // for show and hide password start
  const [showPassword, setShowPassword] = useState(false);



  // تعریف router
  const router = useRouter();

  // create task
  const createTask = async (newTask) => {
    fetch('https://65325ff8d80bd20280f56efd.mockapi.io/api/niloofar/users', {
      method: 'POST',
      headers: {'content-type':'application/json'},
      body: JSON.stringify(newTask)
    }).then(res => {
      if (res.ok) {
          return res.json();
      }
      // handle error
    }).then(tasks => {
      // Do something with the list of tasks
      console.log(tasks);
    }).catch(error => {
      // handle error
    })
   };

  return (
    <div className='flex justify-center items-center h-screen bg-slate-50 '>

      <Stack direction="row  " className='shadow-2xl'>

 
        {/* part2 start */}
        <div className=' w-[400px] h-[450px] '>
          {/* useing formik and yup for validation */}
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
              confirmPassword: ''
            }}
            validationSchema={Yup.object({
              name: Yup.string()
                .max(15, 'Your name must be at most 15 characters')
                .required('Please enter your name'),
              email: Yup.string()
                .email('Please enter a valid email')
                .required('Please enter your email'),
              password: Yup.string()
                .min(8, 'Password must be at least 8 characters')
                .required('Please enter your password'),
            })}
            onSubmit={(values, { setSubmitting }) => {
              createTask(values)
              console.log(values);
              setSubmitting(false);
              router.push('/LogIn');

            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
            }) => (
              <form className='pt-14 pb-20 pl-10 pr-16  flex content-between h-full  flex-wrap' onSubmit={handleSubmit}>
                <Grid  xs={12} className='w-full h-[30px] pb-10' >
                  <TextField className='w-full '
                    type="text"
                    name="name"
                    placeholder="نام و نام خانوادگی"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.name && errors.name}
                    error={Boolean(errors.name && touched.name)}
                    style={{ fontFamily: 'kamaleh' }}
                  />
                </Grid>
                <Grid  xs={12} className='w-full h-[30px] pb-10'>
                  <TextField className='w-full'
                    type="email"
                    name="email"
                    placeholder="ایمیل"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.email && errors.email}
                    error={Boolean(errors.email && touched.email)}
                    style={{ fontFamily: 'kamaleh' }}
                  />
                </Grid>
                <Grid xs={12} className='w-full h-[30px] pb-10'>
                  <TextField className='w-full'
                    type="password"
                    name="password"
                    placeholder="پسورد"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.password && errors.password}
                    error={Boolean(errors.password && touched.password)}
                    style={{ fontFamily: 'kamaleh' }}
                  />
                </Grid>
                <Grid  xs={12} className='w-full flex justify-center'>                
                 <Button type="submit" disabled={isSubmitting} style={{fontFamily: 'kamaleh', backgroundColor: '#1020ab', color: 'white', padding: '10px 20px', cursor: 'pointer', transition: 'background-color 0.3s ease-in-out', ':hover': { backgroundColor: '#0a1a2f' } }}>
                   ثبت نام
                  </Button>                
                </Grid>
              </form>
            )}
          </Formik>
        </div>
        {/* part2 end */}

      </Stack>

    </div>
  );
}