'use client'

import styled from "styled-components";

export const Header = styled.header`
    align-items: center;
    > div {
        display: flex;
        background: #F5F5DC;
        padding: 15px 0;
        justify-content: center;
        > div {
            margin: 0;
            gap: 350px;
            > h1 {
                font-family: 'Raleway', sans-serif;
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
        > div {
            > ul {
                display: flex;
                align-items: center;
            }
        }
    }
`