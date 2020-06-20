import styled from 'styled-components'

export const StyledLi = styled.li`
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    width: 100%;
`;
export const Dots = styled.div`
    flex: 1;
    /* border-bottom: .3rem dotted black;
    letter-spacing: rem; */
    background-image: linear-gradient(to right, #333 10%, rgba(255, 255, 255, 0) 0%);
    background-position: bottom;
    background-size: 10px 1px;
    background-repeat: repeat-x;
    height: 100%;
`;
export const Number = styled.span`
    color: #6F729C;
    font-size: 1.8rem;
    padding: 2rem;
`;
export const Title = styled.span`
    color: #1B1B1B;
    font-size: 2.4rem;
    cursor: pointer;
`;
export const Duration = styled.span`
    color: #6F729C;
    font-size: 2.4rem;
`;