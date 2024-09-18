import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';




function SearchBox({ border, setBorder }) {
    return (
        <Box className={`${border ? 'border-2 border-gray-300' : ''} duration-75`} sx={{ display: 'flex', alignItems: 'center', width: '70%', backgroundColor: 'grey.200', borderRadius: 2, overflow: 'hidden' }}>
            <SearchIcon sx={{ m: 1, ml: 3, color: 'gray' }} />
            <InputBase 
                onFocus={() => setBorder(true)} 
                onBlur={() => setBorder(false)}
                sx={{ ml: 1, flex: 1, fontFamily: 'kamaleh', fontSize: '14px' }}
                placeholder='جست و جو ...'
                inputProps={{ 'aria-label': 'search' }}
            />
        </Box>
    );
}

export default SearchBox

