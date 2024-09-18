import React from 'react'
import Link from 'next/link';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Cart() {
    return (
        <div>
            <Link href='/basket'>
                <Button className='text-gray-500  hover:text-gray-700 flex justify-end px-0'>
                    <ShoppingCartIcon sx={{ fontSize: 24 }} />
                </Button>
            </Link>
        </div>
    )
}

export default Cart
