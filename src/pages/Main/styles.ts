import styled from "styled-components";
import COLORS from "../../colors";

export const ExploreButton = styled.div`
    position:relative;
    padding: 12px 48px;
    margin-top: 32px;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
    transition: .2s;

    :before {
        content:"";
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        border-radius:5px; 
        padding:1px; 
        background:linear-gradient(45deg,${COLORS.Green},${COLORS.Blue}); 
        -webkit-mask: 
            linear-gradient(#0D021C 0 0) content-box, 
           linear-gradient(#0D021C 0 0);
        -webkit-mask-composite: destination-out; 
    mask-composite: exclude; 
    }

    :hover {
        opacity: .8;
    }
    

`