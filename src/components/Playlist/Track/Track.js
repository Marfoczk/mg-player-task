import React from 'react'
import { StyledLi, Number, Title, Dots, Duration } from './Tack.styles'

const Track = ({ showPlaylist, setShowPlaylist, index, title, duration, setCurrentSong, setI }) => {

    function changeTrack(e) {
        setCurrentSong(e.target.innerText);
        setShowPlaylist(!showPlaylist);
        setI(index);
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