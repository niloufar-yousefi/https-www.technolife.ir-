import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';

function LogInEnter() {
    return (
        <div>
            <Box className='w-[150px] xl:w-[200px]' sx={{  backgroundColor: 'white', border: '1px solid gray', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: 2 }}>
                <Link href='/LogIn'>
                    <Button variant="h6" className='text-gray-500 hover:text-gray-800 text-[10px] xl:text-[14px]' style={{ fontFamily: 'kamaleh' }}>ورود</Button>
                </Link>
                <span className='text-xl text-slate-500'>|</span>
                <Link href='/Signup'>
                    <Button variant="h6" className='text-gray-500 hover:text-gray-800 text-[10px] xl:text-[14px]' style={{ fontFamily: 'kamaleh' }}>ثبت نام</Button>
                </Link>
            </Box>
        </div>
    )
}

export default LogInEnter
