'use client'

import styled from "styled-components";

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    border: .5px solid #9B9B9B;
    width: fit-content;
    padding: 10px 0 20px 0;
    > p {
        color: #111111;
        font-weight: 200;
        text-align: center;
    }
    ul {
        display: flex;
        gap: 5px;
        li {
            width: 20px;
            height: 20px;
            border: 2px solid white;
            box-shadow: 0 0 1px 1px #DDDDDD;
            border-radius: 50%;
            //background: #574C56;
            cursor: pointer;
        }
    }
    > button {
        font-family: inherit;
        font-size: 16px;
        font-weight: 200;
        color: #FFFFFF;
        background: #333333;
        padding: 7px 20px;
        letter-spacing: 1px;
    }
`