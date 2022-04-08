import { useEffect, useRef, useState } from 'react';
import { FilmCardType } from '../../types/types';

type VideoPlayerProps = {
  isPlaying: boolean,
  filmCard: FilmCardType,
};


function Videoplayer ({isPlaying, filmCard} : VideoPlayerProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
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
  }, [filmCard]);
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if(videoRef.current === null) {
      return;
    }

    if(isPlaying) {
      timeout = setTimeout(() => videoRef.current?.play(), 1000);
      console.log(timeout);
      return;
    }

    videoRef.current.load();
    return() => {
      console.log(timeout);
      clearTimeout(timeout);
      console.log('unm');
    };
  }, [isPlaying]);
  return (
    <div className="small-film-card__image">
      <video src={filmCard.previewVideoLink} poster={filmCard.previewImage} muted autoPlay={isPlaying} ref={videoRef} width="280" height="175" />
    </div>
  );
}

export default Videoplayer;
