'use client'

import styled from "styled-components";

export const HeaderWrapper = styled.header`
    align-items: center;
    > div {
        background: #F5F5DC;
        padding: 15px 0;
        > div {
            display: flex;
            justify-content: flex-end;
            gap: 250px;
            > h1 {
                font-family: var(--font-raleway), sans-serif;
                font-weight: 200;
                line-height: 22px;
                font-size: 20px;
                font-style: italic;
            }
            > button {
                margin-right: 50px;
            }
        }
    }
    > nav {
        display: flex;
        padding: 15px 0;
        > div {
            gap: 190px;
            > ul {
                display: flex;
                gap: 50px;
                align-items: center;
            }
        }
    }
`