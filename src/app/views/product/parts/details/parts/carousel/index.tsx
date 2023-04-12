import { Grid } from '@mui/material'
import React, { useRef, useState } from 'react'
import { useRouteLoaderData } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from 'swiper';
import classes from './style.module.scss'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Carousel() {
    const [ImagePreview, setImagePreview] = useState(null)
    const loaderData: any = useRouteLoaderData("singleProduct")
    const images = loaderData?.product?.shopifyData?.images
    const sliderRef = useRef<any>(null)

    return (
        <Grid container flexDirection="column" className={classes.carousel}>
            {images && images.length ? (
                <Grid item container>
                    <img src={ImagePreview || images[0].src} width="100%" alt="droplinked" />
                </Grid>
            ) : null}

            {images && images.length > 2 ? (
                <Grid item container padding={4} justifyContent="center" className={classes.thumb}>
                    <span
                        onClick={() => sliderRef.current?.slideNext()}
                        className={`${classes.arrow} ${classes.right}`}
                    >
                        <ArrowForwardIosIcon />
                    </span>
                    <span
                        className={`${classes.arrow} ${classes.left}`}
                        onClick={() => sliderRef.current?.slidePrev()}
                    >
                        <ArrowBackIosIcon />
                    </span>

                    <Grid item container sm={9}>
                        <Swiper
                            spaceBetween={40}
                            slidesPerView={3}
                            onSwiper={it => (sliderRef.current = it)} modules={[Navigation]}
                        >
                            {images.map((el: any, key: number) =>
                                <SwiperSlide className={classes.slide} onClick={() => setImagePreview(el.src)} key={key}>
                                    <img src={el.src} width="100%" alt="droplinked" />
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </Grid>
                </Grid>
            ) : null}
        </Grid>
    )
}

export default Carousel