import React, { useState, useRef, useEffect } from 'react'
import styles from './Main.module.scss'

import {ReactComponent as ShuffleIco} from '../../images/shuffle_ico.svg'
import {ReactComponent as PrevIco} from '../../images/previous_ico.svg'
import {ReactComponent as NextIco} from '../../images/next_ico.svg'
import {ReactComponent as RepeatIco} from '../../images/repeat_ico.svg'
import { Wrapper, SliderWrapper, StyledTitle, ControlsDiv, SvgDiv } from './Main.styles'

import Nav from './Nav/Nav'
import Slick from './Slick/Slick'
import ProgressBar from './ProgressBar/ProgressBar'
import AudioWave from './AudioWave/AudioWave'
import NextSong from './NextSong/NextSong'
import ReactHowler from 'react-howler'


const Main = ({ init, setInit, data, setData, currentSong, setCurrentSong, setShowMore, showMore, showPlaylist, setShowPlaylist, i, setI }) => {

    const sliderRef = useRef(null);
    const nextSong = data.tracks[i+1].name;
    const nextSongTime = data.tracks[i+1].duration;
    const source = data.tracks[i].src;
    const [playing, setPlaying] = useState(true);

    function next() {
        if (init >= 2) return 
        setInit(prevInit => prevInit + 1)
        sliderRef.current.slickNext();
        setPlaying(false);
    };
    function previous() {
        if (init < 1) return
        setInit(prevInit => prevInit - 1)
        sliderRef.current.slickPrev();
        setPlaying(false);
    };

    useEffect(()=>{
        setCurrentSong(data.tracks[i].name);
        // setPlaying(true);
    },[init,i])

      function handlePlay() {
        playing ? 
        setPlaying(false) : 
        setPlaying(true)
      }

      function handleEnd() {
        setPlaying(false);
        setI(prevI => prevI + 1);
      }
      function handleLoad() {
          setPlaying(true);
      }
    
    return (
        <Wrapper>

            <Nav
             showMore={showMore} 
             setShowMore={setShowMore} 
             showPlaylist={showPlaylist} 
             setShowPlaylist={setShowPlaylist} 
             data={data}/>

            <SliderWrapper>
                <Slick 
                    data={data} 
                    setData={setData} 
                    next={next} 
                    prev={previous} 
                    forwardedRef={sliderRef}
                />
            </SliderWrapper>
           
            <StyledTitle big>{currentSong}</StyledTitle>
            <StyledTitle>{data.artist}</StyledTitle>

            <ControlsDiv>
                <SvgDiv><ShuffleIco/></SvgDiv>
                <SvgDiv><PrevIco onClick={previous}/></SvgDiv>
                <div 
                    onClick={handlePlay} 
                    className={playing && data.tracks[i].src ? `${styles.inactive} ${styles.show}` : `${styles.inactive}`}>
                </div>
                <SvgDiv><NextIco onClick={next}/></SvgDiv>
                <SvgDiv><RepeatIco/></SvgDiv>
            </ControlsDiv>

            {data.tracks[i].src &&         
            <ReactHowler
                playing={playing}
                src={source}
                onEnd={handleEnd}
                onLoad={handleLoad}
            />
            }

            <ProgressBar/>
            <AudioWave
                playing={playing}
                data={data}
                i={i}
            />
            <NextSong 
                nextSong={nextSong} 
                showPlaylist={showPlaylist} 
                setShowPlaylist={setShowPlaylist}
                nextSongTime={nextSongTime}
            />
        
        </Wrapper>
    )
}

export default Main;