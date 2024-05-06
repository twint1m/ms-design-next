'use client'

import styled from "styled-components";

export const ContentWrapper = styled.div`
    position: relative;
`
export const SlideHeader = styled.h1`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;
    color: white;
    font-weight: 300;
`

export const SlideButton = styled.button`
    font-family: inherit;
    letter-spacing: 2px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    background: #404040;
    padding: 25px 75px;
    font-weight: 200;
    font-size: 27px;
`
export const PopularProductsWrapper = styled.div`
    margin: 30px 0 75px 0;
`
export const PopularProductsTitle = styled.h1`
    text-align: center;
    font-family: var(--font-playfair-display), sans-serif;
    font-size: 70px;
    font-weight: 600;
    color: #111111;
    margin-bottom:46px;
`
export const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 280px);
    grid-gap: 20px;
    justify-content: center;
`


export const RecentlyViewedWrapper = styled.div`
    margin-bottom: 75px;
`
export const RecentlyViewedTitle = styled.h2`
    text-align: center;
    font-family: var(--font-playfair-display), sans-serif;
    font-size: 54px;
    font-weight: 600;
    color: #111111;
    margin-bottom:15px;
`

export const CallToAction = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    > div {
        position: absolute;
        top: 10%;
        background: #FFFFFF;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 400px;
        padding: 20px 35px;
        gap: 20px;
        opacity: .8;
        > h3 {
            text-align: center;
            font-family: var(--font-playfair-display), sans-serif;
            font-size: 20px;
            font-weight: 600;
            color: #111111;
        }
        > hr {
            width: 180px;
            height: 1px;
            border: 0;
            background: #4A4A4A;
            text-align: center;
        }
        > p {
            font-weight: 300;
            font-size: 18px;
            text-align: center;
        }
        > button {
            font-family: inherit;
            font-size: 13px;
            font-weight: 300;
            line-height: 27px;
            letter-spacing: 2px;
            background: #404040;
            padding: 5px 40px;
            color: #FFFFFF;
        }
    }
`