import * as React from 'react';
import './globals.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BanerTop from './components/BanerTop'
import Header from './components/Header/Header';
import Slider from './components/Main/Slider';
import SaleTrend from './components/Main/sale&Trend';
import List from './components/Main/List';
import Footer from './components/Footer/Footer';



export default function Home() {
  return (
    <div className="w-full  overflow-hidden bg-slate-50 h-auto">
      <Box sx={{ flexGrow: 1 }} >
        <Grid container>

          {/* part1 baner top */}
          <Grid xs={12} className='z-50'>
            <BanerTop />
          </Grid>

          {/* part2 header */}
          <Grid xs={12} className='z-50'>
            <Header />
          </Grid>

          {/* part3 slider */}
          <Grid className='pt-[100px] lg:pt-[230px]' xs={12}>
            <div className='w-full h-[30vh] md:h-[50vh] xl:h-[50vh] '>
              <Slider />
            </div>
          </Grid>

          {/* part4 list */}
          <Grid xs={12} className=''>
            <List />
          </Grid>

          {/* part5 sale&trend  */}
          <Grid xs={12} className=' mb-[20px] lg:mb-[50px]'>
            <SaleTrend />
          </Grid>

          {/* part6 foo */}
          <Grid xs={12} className='mb-[10px]'>
            <Footer />
            
          </Grid>
        </Grid>

      </Box>
    </div>
  );
}
