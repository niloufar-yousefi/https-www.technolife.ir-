import React, { useEffect } from 'react'
import Link from 'next/link';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useQuery } from 'react-query';
import { QueryClient, QueryClientProvider } from 'react-query';
import CircularProgress from '@mui/material/CircularProgress';


function PostList() {
    let url = 'https://one-api.ir/digikala/?token=745773:66ac97d10ec51&action=home'
    //fetch data from api for title menu
    const { isLoading, error, data } = useQuery('posts', () =>
        fetch(url)
            .then(res => res.json())
            .then(val => {
                let x = [{
                    title: val.result.home_1.title,
                    category_id: 77
                },
                {
                    title: val.result.home_2.title,
                    category_id: 11
                },
                {
                    title: val.result.home_3.title,
                    category_id: 211
                },
                {
                    title: val.result.home_4.title,
                    category_id: 6004
                },
                {
                    title: val.result.home_5.title,
                    category_id: 6017
                },
                {
                    title: val.result.home_6.title,
                    category_id: 18,
                },
                {
                    title: val.result.home_7.title,
                    category_id: 5980
                },
                {
                    title: val.result.home_8.title,
                    category_id: 5848
                },
                ]
                return x;
            })
    )


    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            {isLoading &&
                <>
                    <div className='w-full  rounded-xl h-[50px] flex items-center shadow-sm  px-3'>
                        <p className='flex items-center gap-2 text-slate-500 text-xs'><CircularProgress className='text-slate-500' size={10} />در حال بارگذاری ... </p>
                    </div>

                </>
            }
            {error && <p className='flex items-center  text-slate-500 text-xs'>خطایی رخ داده است</p>}
            {
                data && Array.isArray(data) && data.map((item, index) => {
                    return (
                        <Link   key={index} href={`/blog/${item.category_id}`}>
                            <Button variant="h6" className='text-gray-500 hover:text-gray-800 text-[10px] xl:text-[12px]' style={{ fontFamily: 'kamaleh' }}>{item.title}</Button>
                        </Link>
                    )
                })
            }
        </Box>
    );
}

function TitleMenu() {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            <PostList />
        </QueryClientProvider>
    )
}

export default TitleMenu
