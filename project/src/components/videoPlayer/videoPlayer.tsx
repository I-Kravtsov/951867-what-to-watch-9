import { useEffect, useRef } from 'react';
import { FilmCardType } from '../../types/types';

type VideoPlayerProps = {
  isPlaying: boolean,
  filmCard: FilmCardType,
};


function Videoplayer ({isPlaying, filmCard} : VideoPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if(videoRef.current === null) {
      return;
    }

    if(isPlaying) {
      timeout = setTimeout(() => videoRef.current?.play(), 1000);
      return;
    }

    videoRef.current.load();
    return() => {
      clearTimeout(timeout);
    };
  }, [isPlaying]);
  return (
    <div className="small-film-card__image">
      <video src={filmCard.previewVideoLink} poster={filmCard.previewImage} muted autoPlay={isPlaying} ref={videoRef} width="280" height="175" />
    </div>
  );
}

export default Videoplayer;
