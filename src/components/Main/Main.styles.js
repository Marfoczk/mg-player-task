import styled from 'styled-components'


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

`;
export const SliderWrapper = styled.div`
    margin-top: -2rem;
    margin-bottom: auto;
    max-height: 45%;
    grid-area: b;
`;
export const StyledTitle = styled.p`
    padding:.5rem;
    color: ${props => props.big ? "white" : "#6F729C"};
    font-size: ${props => props.big ? "3.6rem" : "1.8rem"};
    text-transform: ${props => props.big ? null : "uppercase"};
    font-family: ${props => props.big ? "Gilroy-Bold" : "Gilroy-Light"};
`;
export const ControlsDiv = styled.div`
    margin-top: auto;
    margin-bottom: auto;
    padding: 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;
export const SvgDiv = styled.div`
    width: 3rem;
    height: 3rem;
    cursor: pointer;

    &:active{
        -webkit-box-shadow: 0px 0px 25px 8px rgba(255,255,255,0.1), inset 0px 0px 10px 3px rgba(255,255,255,0.1);
        -moz-box-shadow: 0px 0px 25px 8px rgba(255,255,255,0.1), inset 0px 0px 10px 3px rgba(255,255,255,0.1);
        box-shadow: 0px 0px 25px 8px rgba(255,255,255,0.1), inset 0px 0px 10px 3px rgba(255,255,255,0.1);
    }
`;