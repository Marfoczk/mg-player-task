import styled from 'styled-components'


export const Wrapper = styled.div`
    background-color: white;
    padding: 0 1rem;
    display: grid;
    height: 8rem;
    grid-template-columns: 1fr 3fr 1fr;
    align-items: center;
    z-index: 5;

    img{
        padding: .5rem;
        margin: 0 auto;
        width: 40%;
        height: 40%;
    }

    div:nth-child(2){
        margin-left: 3rem;
        margin-right: auto;
    }
`;

export const StyledText = styled.p`
    text-transform: ${props => props.up ? 'uppercase' : 'null'};
    color: ${props => props.up ? '#6F729C' : '#1B1B1B'};
    text-align: left;
    font-size: ${props => props.up ? '1.8rem' : '2rem'};
`;

export const StyledTime = styled.p`
    font-size: 2.4rem;
    color: #6F729C;
`;