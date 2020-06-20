import React from 'react'
import { NavDiv, BackIcon, StyledDiv, MoreIcon } from './Nav.styles'


const Nav = ({ showMore, setShowMore, showPlaylist, setShowPlaylist, data }) => {
    return (
        <NavDiv>
            <BackIcon onClick={() => showMore ? setShowMore(!showMore) : showPlaylist ? setShowPlaylist(!showPlaylist) : null}/>
            <StyledDiv>
                <p>album</p>
                <p>{data.album}</p>
            </StyledDiv>
            <MoreIcon onClick={() => setShowMore(!showMore)}/>
        </NavDiv>
    )
}

export default Nav