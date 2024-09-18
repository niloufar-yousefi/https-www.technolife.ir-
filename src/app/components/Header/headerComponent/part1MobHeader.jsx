import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import CircularProgress from '@mui/material/CircularProgress';
import { useQuery } from 'react-query';


function DrawerList() {
    const { isLoading, error, data } = useQuery('posts', () =>
        fetch('https://one-api.ir/digikala/?token=745773:66ac97d10ec51&action=home')
            .then(res => res.json())
            .then(val => {
                let x = [val.result.home_1.title, val.result.home_2.title, val.result.home_3.title, val.result.home_4.title, val.result.home_5.title, val.result.home_6.title, val.result.home_7.title, val.result.home_8.title]
                return x;
            })
    )
    return (
        <Box className='pt-5' sx={{ width: 250, position: 'fixed', right: 0, top: 0, height: '100%', backgroundColor: 'white', zIndex: 1000 }} role="presentation" >
            {isLoading &&
                // <p className='flex items-center gap-2 text-slate-500 text-xs'><CircularProgress className='text-slate-500' size={10} />در حال بارگذاری ... </p>
               <>
                <div className='w-full border-b border-gray-200 h-[50px] flex items-center pb-[360px] pt-10  px-5'>
                    <p className='flex items-center gap-2 text-slate-500 text-sm'><CircularProgress className='text-slate-500' size={10} />در حال بارگذاری ... </p>
                </div>
        
               </>
                
            }
            {error &&
                <p className='flex items-center  text-slate-500 text-xs'>خطایی رخ داده است</p>
            }
            {
                data && Array.isArray(data) && data.map((item) => (
                    <div className='w-full border-b h-[50px] flex items-center border-gray-200  px-3'>
                        <Link href=''>
                            <Button variant="h6" className='text-gray-500 hover:text-gray-800 text-sm' style={{ fontFamily: 'kamaleh' }}>{item}</Button>
                        </Link>
                    </div>
                ))
            }
        </Box>
    );
}


export default function TemporaryDrawer() {

    // react query
    const queryClient = new QueryClient()

    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

  


    return (
        <div>
            <Button onClick={toggleDrawer(true)}>
                <MenuIcon />
            </Button>
          

            <QueryClientProvider client={queryClient}>
                <Drawer open={open} onClose={toggleDrawer(false)}>
                    <DrawerList />
                </Drawer>
            </QueryClientProvider>
        </div>
    );
}
