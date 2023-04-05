import React, { useEffect, useRef, useState } from "react";
import { BsFillPlayCircleFill, BsPauseCircleFill } from "react-icons/bs";
import {
  BsSkipBackwardCircleFill,
  BsFillFastForwardCircleFill,
} from "react-icons/bs";

function PlayMusic({ data, cb }) {
  // useState
  const [play, setPlay] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  //   useRef
  const audioPlayer = useRef(); //reference this is audio container
  const progressBar = useRef(); // refference our progess
  const animationRef = useRef(); //reffrence our animation

  // use effect
  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnMinutes}:${returnSeconds}`;
  };

  const togglePlayPause = () => {
    const prevValue = play;
    setPlay(!prevValue);
    if (prevValue) {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    } else {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100} %`
    );
    setCurrentTime(progressBar.current.value);
  };
  return (
    <>
      <div className="container">
        <div className="music-img">
          <img src={data.imgsrc} height={200} width={200} alt="NotFound" />
        </div>
        <div className="content">
          <h1> {data.artist_name} </h1>

          <div className="playerBar">
            <div className="currTime">{calculateTime(currentTime)}</div>

            <div>
              <input
                type="range"
                className="progressBar"
                defaultValue="0"
                ref={progressBar}
                onChange={changeRange}
              />
            </div>

            <div className="durTime">
              {duration && !isNaN(duration) && calculateTime(duration)}
            </div>
          </div>

          <div className="audioPlayer">
            <audio id="audioPart" ref={audioPlayer} src={data.src}></audio>
            <button>
              <BsSkipBackwardCircleFill onClick={() => cb("backward", data.index)} />
            </button>

            <button onClick={togglePlayPause}>
              {play ? <BsPauseCircleFill /> : <BsFillPlayCircleFill />}
            </button>

            <button>
              <BsFillFastForwardCircleFill onClick={() => cb("forward", data.index)} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayMusic;
