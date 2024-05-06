'use client'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import Image from "next/image";
import firstSlide from '@/assets/slider/slider-image-1.jpg'
import secondSlide from '@/assets/slider/slider-image-2.jpg'
import thirdSlide from '@/assets/slider/slider-image-3.jpg'
import {A11y, Navigation, Pagination, Scrollbar} from "swiper/modules";
import 'swiper/swiper-bundle.css'
import {
    CardWrapper,
    ContentWrapper,
    PopularProductsTitle,
    PopularProductsWrapper, RecentlyViewedWrapper,
    SlideButton,
    SlideHeader,
    RecentlyViewedTitle,
    CallToAction
} from '@/app/styles'
import mainBgImage from '@/assets/main-bg-image.jpg'
import Card ,{ICardData} from "@/components/Card";
import useCardData from "@/hooks/useCardData";
import React, {Suspense} from "react";

export default function Home() {
    const { data, loading, error } = useCardData();

    return (
      <>
          <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              // pagination={{clickable: true}}
              scrollbar={{draggable: true}}
          >
              <SwiperSlide>
                  <ContentWrapper>
                      <Image src={firstSlide} alt="test" />
                      <SlideHeader>
                          Уникальные предметы декора на любой вкус ждут вас!
                      </SlideHeader>
                  </ContentWrapper>
              </SwiperSlide>
              <SwiperSlide>
                  <SlideHeader>Покупайте онлайн и преобразите свое пространство</SlideHeader>
                  <Image src={secondSlide} alt={'test'}/></SwiperSlide>
              <SwiperSlide>
                  <SlideButton>К покупкам!</SlideButton>
                  <Image src={thirdSlide} alt={'test'}/></SwiperSlide>
          </Swiper>
          <PopularProductsWrapper>
              <PopularProductsTitle>Популярные товары</PopularProductsTitle>
              <CardWrapper>
                  <Suspense fallback={<div>🌀 Loading...</div>}>
                      {
                          data?.map((product: ICardData) => (
                              <Card
                                  key={product.id}
                                  {...product}
                              />
                          ))}
                  </Suspense>
              </CardWrapper>
          </PopularProductsWrapper>
          <RecentlyViewedWrapper>
              <RecentlyViewedTitle>Недавно просмотренные</RecentlyViewedTitle>
              <CardWrapper>
              </CardWrapper>
          </RecentlyViewedWrapper>
          <CallToAction>
              <Image src={mainBgImage} alt={'background image'}/>
              <div>
                  <h3>Декоративные и дизайнерские предметы интерьера - идеальное дополнение для вашего дома!</h3>
                  <hr/>
                  <p>
                      Не упустите возможность сделать свой дом неповторимым и изысканным с помощью декоративных и дизайнерских предметов от MS Design.
                      Создайте уют и стиль, который отражает вашу индивидуальность и характер.
                  </p>
                  <button>К каталогу</button>
              </div>
          </CallToAction>
      </>
  );
}
