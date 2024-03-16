import React from 'react'
import { Box, Button, IconButton } from '@mui/material';
import { useSwiper } from 'swiper/react';
import { MoveLeft, MoveRight } from 'lucide-react';


const SwiperBtn = () => {

    const swiper = useSwiper();

    return (
        <Box
            className="swiper-nav-btns"
            sx={{
                display: "flex",
                gap: "2rem",
            }}>
            <IconButton
                onClick={() => swiper.slidePrev()}
                sx={{
                    bgcolor: "transparent",
                    border: "2px solid lightgray"
                }}>
                <MoveLeft />
            </IconButton>
            <IconButton
                onClick={() => swiper.slideNext()}
                sx={{
                    bgcolor: "transparent",
                    border: "2px solid lightgray"
                }}>
               <MoveRight />
            </IconButton>
        </Box>
    )
}

export default SwiperBtn