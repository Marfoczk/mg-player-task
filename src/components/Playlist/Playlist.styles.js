import styled from 'styled-components'


export const Wrapper = styled.div`
    background-color: white;
    width: 100%;
    height: 90%;
    z-index: 5;
    position: absolute;
    bottom: 0;
    padding: 4rem 6rem;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const Scroll = styled.div`
    position: relative;
    margin-top: 1rem;
    margin-bottom: auto;
    width: 100%;
    height: ${props => props.show ? '100%' : '80%'};
    overflow: hidden;
    overflow: ${props => props.show ? "scroll" : "hidden"};
    /* overflow: ${props => props.show ? 'scroll' : 'hidden'}; */
    /* background-color: ${props => props.show ? 'red' : 'green'}; */
    transition: all 0.3s linear;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
    
    &::after{
        content:'';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-position: top;
        background-size: 100% 100%;
        background-image: linear-gradient(180deg, rgba(255,255,255,0.11294940339417014) 0%, rgba(255,255,255,0) 25%, rgba(255,255,255,1) 100%);
        position: absolute;
        pointer-events: none;
        transition: all 0.3s linear;
        /*   transition-delay: 1s; */
        opacity: ${props => props.show ? '0' : '1'}
        }
`;

export const IMG = styled.img`
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    transition: transform .2s ease;
    transform: ${props => props.show ? 'rotate(180deg)' : 'rotate(0deg)'};
`;