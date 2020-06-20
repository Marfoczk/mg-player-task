import React from 'react'
import playlistico from '../../../images/playlist_ico.svg'
import { Wrapper, StyledText, StyledTime} from './NextSong.styles'

export default function NextSong({showPlaylist, setShowPlaylist, nextSong, nextSongTime}) {
    return (
        <Wrapper>
            <img alt='' style={{cursor: 'pointer'}} onClick={() => setShowPlaylist(!showPlaylist)} src={playlistico}/>
            <div>
                <StyledText up>Next</StyledText>
                <StyledText>{nextSong}</StyledText>
            </div>
            <StyledTime>{nextSongTime}</StyledTime>
        </Wrapper>
    )
}
