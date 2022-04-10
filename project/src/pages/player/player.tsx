import dayjs from 'dayjs';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { FilmCardType } from '../../types/types';

function Player(): JSX.Element {
  const {id} = useParams();
  const film: FilmCardType = useAppSelector((state) => state.film);
  const promoFilm = useAppSelector((state) => state.promoFilm);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const progressRef = useRef<HTMLProgressElement | null>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [timeLeft, setTimeLeft] = useState<string | null>(null);
  const [currentPozition, setCurrentPozition] = useState(0);


  const currentFilm = promoFilm.id === Number(id) ? promoFilm : film;
  const getTimeLeft = (currentTime: number, runTime: number): void => {
    const currentTimeLeft = (runTime - currentTime)* 1000;
    let timeLeftFormat = '-hh:mm:ss';
    if (currentTimeLeft < 3600000) {timeLeftFormat = '-mm:ss';}
    setTimeLeft(dayjs(currentTimeLeft).format(timeLeftFormat));
  };

  useEffect(() => {
    if (videoRef.current !== null) {
      videoRef.current.onloadeddata = () => setIsLoading(false);
    }

    return () => {
      if (videoRef.current !== null) {
        videoRef.current.onloadeddata = null;
        videoRef.current = null;
      }
    };
  }, [id]);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    if (!isPlaying) {
      videoRef.current.pause();
    }
  }, [isPlaying]);
  return (
    <div className="player">
      <video
        ref={videoRef}
        onTimeUpdate={(evt) => {
          setCurrentPozition(evt.currentTarget.currentTime * 100 / evt.currentTarget.duration);
          getTimeLeft(evt.currentTarget.currentTime, evt.currentTarget.duration);
        }}
        src={currentFilm.videoLink}
        className="player__video"
        poster={currentFilm.previewImage}
      >
      </video>

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              ref={progressRef}
              className="player__progress"
              value={currentPozition}
              max="100"
            >
            </progress>
            <div className="player__toggler" style={{left: `${currentPozition}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{timeLeft}</div>
        </div>

        <div className="player__controls-row">
          <button  disabled={isLoading} onClick={() => setIsPlaying(!isPlaying)} type="button" className="player__play">
            <svg viewBox="0 0 14 21" width="14" height="21">
              <use xlinkHref={isPlaying ? '#pause' :'#play-s' }></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{currentFilm.name}</div>

          <button
            onClick={() => {
              if(videoRef.current !== null) {
                videoRef.current.requestFullscreen();
              }
            }}
            type="button"
            className="player__full-screen"
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
