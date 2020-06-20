import React, { useState } from 'react'
import Track from './Track/Track'
import hideIco from '../../images/hide_ico.svg'
import { Wrapper, Scroll, IMG } from './Playlist.styles'

export default function Playlist({ data, ...rest }) {

    const [show, setShow] = useState(false);
    return (
        <Wrapper>
            
            <Scroll show={show}>
            {data.tracks.map((track, index) => (
                <Track
                    key={index}
                    index={index}
                    title={track.name}
                    duration={track.duration}
                    {...rest}
                    />
            ))}
            </Scroll>
            <IMG show={show} src={hideIco} onClick={()=> setShow(!show)}/>
        </Wrapper>
    )
}
