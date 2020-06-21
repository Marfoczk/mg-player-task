import React from 'react'
import { StyledLi, Number, Title, Dots, Duration } from './Tack.styles'

const Track = ({ showPlaylist, setShowPlaylist, index, title, duration, setCurrentSong, setI, setPlaying }) => {

    function changeTrack(e) {
        setCurrentSong(e.target.innerText);
        setShowPlaylist(!showPlaylist);
        setI(index);
        setPlaying(true);
    }


    return (
        <StyledLi>
            {title && <Number>{index+1}.</Number>}
            <Title onClick={changeTrack}>{title}</Title>
            <Dots></Dots>
            <Duration>{duration}</Duration>
        </StyledLi>
    )
}

export default Track;