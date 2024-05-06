'use client'
import styled from "styled-components";

export const FooterWrapper = styled.footer`
    margin: 50px auto 20px auto;
    ul {
        display: flex;
        flex-direction: column;
        gap: 15px;
        > h1 {
            font-family: var(--font-playfair-display);
            font-weight: 400;
        }
        > li {
            font-weight: 300;
            font-style: italic;
        }
    }
    > div {
        display: flex;
        flex-direction: column;
        gap: 30px;
        > div {
            display: flex;
            justify-content: space-between;
            > div {
                font-weight: 300;
                display: flex;
                flex-direction: column;
                gap: 10px;
                > p {
                    &:first-child {
                        font-size: 20px;
                    }
                }
                > input {
                    padding: 8px 225px 8px 20px;
                    border: 1px solid #DDDDDD;
                    font-weight: 300;
                    appearance: none;
                    &::-webkit-outer-spin-button,
                    &::-webkit-inner-spin-button {
                        appearance: none;
                    }
                    &::placeholder {
                        font-style: italic;
                    }
                }
                > button {
                    font-family: inherit;
                    letter-spacing: 2px;
                    font-weight: 300;
                    padding: 10px 35px;
                    background: #404040;
                    color: #fff;
                    width: max-content;
                }
            }
            
        }
    }
    p {
        &:last-child {
            font-weight: 300;
            font-style: italic;
        }
    }
    hr {
        width: 95%;
        margin: 0 auto;
        height: 1px;
        border: 0;
        background: #EEEEEE;
    }
`