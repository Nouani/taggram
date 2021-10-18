import styled, { keyframes } from "styled-components";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const bounce = keyframes`
    0% {
        transform: scale(1.1);
        opacity: 1;
    }
    20% {
        transform: scale(1.4);
        opacity: 0.5;
    }
    40% {
        transform: scale(0.9);
        opacity: 0.2;
    }
    60% {
        transform: scale(1);
        opacity: 0;
    }
`;

export const HeartIconSelected = styled(AiFillHeart)`
    margin-top: 8px;
    cursor: pointer;

    &.bounce {
        animation: ${bounce} 0.3s forwards ease-in;
    }
`;

export const HeartIconUnselected = styled(AiOutlineHeart)`
    margin-top: 8px;
    cursor: pointer;

    &.bounce {
        animation: ${bounce} 0.4s forwards ease-in;
    }
`;
