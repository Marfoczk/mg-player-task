import React, { useState } from 'react';
import Main from './components/Main/Main'
import More from './components/More/More'
import Playlist from './components/Playlist/Playlist'
import './App.scss';
import GlobalStyle from './GlobalStyle'
import {CSSTransition} from 'react-transition-group'
import {datta} from './data'

function App() {
  const [showMore, setShowMore] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [data, setData] = useState(datta);
  const [init, setInit] = useState(1);
  const [currentSong, setCurrentSong] = useState(data[init].tracks[0].name);
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);

  return (
    <div className="App">

      <Main 
        data={data[init]} 
        setData={setData}
        currentSong={currentSong} 
        setCurrentSong={setCurrentSong}
        setShowMore={setShowMore} 
        showMore={showMore} 
        showPlaylist={showPlaylist} 
        setShowPlaylist={setShowPlaylist}
        i={i}
        setI={setI}
        init={init}
        setInit={setInit}
        playing={playing}
        setPlaying={setPlaying}
      />
      <CSSTransition
        in={showMore}
        timeout={300}
        classNames="more"
        unmountOnExit
        onEnter={() => setShowMore(true)}
        onExited={() => setShowMore(false)}
      >
        <More/>
      </CSSTransition>

      <CSSTransition
        in={showPlaylist}
        timeout={300}
        classNames="playlist"
        unmountOnExit
        onEnter={() => setShowPlaylist(true)}
        onExited={() => setShowPlaylist(false)}
      >
        <Playlist 
          data={data[init]} 
          showPlaylist={showPlaylist} 
          setShowPlaylist={setShowPlaylist}
          setCurrentSong={setCurrentSong}
          setI={setI}
          setPlaying={setPlaying}
        />
      </CSSTransition>
      
      <GlobalStyle/>
    </div>
  );
}

export default App;
