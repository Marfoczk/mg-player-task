import React, { useEffect, useRef } from 'react'
import styled, { keyframes } from 'styled-components'

const anIm = keyframes`
  0%   { transform: scaleY(1.4);}
  50%  { transform: scaleY(.8);}
  80% { transform: scaleY(1.2);}
`;
const StyledBoard = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-around;
    width: 100%;
    opacity: ${props => props.playing && props.data ? '100%' : '0%'};
    transition: opacity .2s ease;

    .siema {
        transform-origin: bottom;
        animation-name: ${anIm};
        animation-duration: 2s;
        animation-timing-function: ease;
        animation-delay: 0s;
        animation-iteration-count: infinite;
    }
    .siema:nth-child(odd) { animation: ${anIm} 1s ease .3s infinite; }
    .siema:nth-child(4n+1) { animation: ${anIm} 2s ease .3s infinite; }
    .siema:nth-child(4n+2) { animation: ${anIm} 1s ease .3s infinite; }
    .siema:nth-child(4n+3) { animation: ${anIm} 3s ease .3s infinite; }
    .siema:nth-child(4n+4) { animation: ${anIm} .5s ease .3s infinite; }
    .siema:nth-child(3n+3) { animation: ${anIm} 1s ease .5s infinite; }
`;

export default function AudioWave( { playing, data, i } ) {

    const WaveDiv = useRef(null);

    function generate() {
        function createDiv() {
        var boardDiv = document.createElement("div");
        boardDiv.style.width = `2px`;
        boardDiv.style.margin= '1px';
        boardDiv.style.backgroundColor = "#755DD5";
        boardDiv.classList.add('siema');
        // boardDiv.style.animationDuration = 2 + Math.floor((5 - 2) * Math.random())+'s';
        boardDiv.style.height = 20 + Math.floor((60 - 20) * Math.random())+'px';
        return boardDiv;
        }
    
        function createDivs() {
        const board = WaveDiv.current;
        for (let i=0; i < 80; i += 1) {
            board.appendChild(createDiv());
        }
        }
        createDivs();
    }

  useEffect(()=>{
    generate();
  }, [])


    return (
        <StyledBoard playing={playing} data={data.tracks[i].src} ref={WaveDiv}></StyledBoard>
    )
}
