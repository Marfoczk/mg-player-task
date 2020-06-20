import styled from 'styled-components'


export const Wrapper = styled.div`
    background-color: rgba(31, 25, 56, 0.95);
    width: 100%;
    height: 100%;
    z-index: 3;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;

    img{
        align-self: center;
        padding: 0 0 3rem;
        width: 20rem;
        height: auto;
    }
`;
export const StyledTitle = styled.p`
    padding:.5rem;
    color: ${props => props.big ? "white" : "#6F729C"};
    font-size: ${props => props.big ? "3.6rem" : "1.8rem"};
    text-transform: ${props => props.big ? null : "uppercase"};
    font-family: ${props => props.big ? "Gilroy-Bold" : "Gilroy-Light"};
`;

export const StyledText = styled.p`
    padding: .2rem;
    margin: 2rem;
    /* line-height: 6.4rem; */
    /* margin: 1rem; */
    font-size: 2.4rem;
    color: white;
    cursor: pointer;
`;
export const StyledDot = styled.p`
    /* font-family: 'Gilroy-Bold'; */
    color: #808080;
    font-size: 2.4rem;
    letter-spacing: 2rem;
    padding: 2rem;
`;