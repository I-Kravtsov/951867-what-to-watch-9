import { useAppSelector } from '../../hooks';
import { CommentsType } from '../../types/types';
import dayjs from 'dayjs';


function Reviews () {
  const comments: CommentsType = useAppSelector((state) => state.comments);
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {comments.map((item, index) => {
          if(index % 2 === 0) {
            return (
              <div key={item.id} className="review">
                <blockquote className="review__quote">
                  <p className="review__text">{item.comment}</p>

                  <footer className="review__details">
                    <cite className="review__author">{item.user.name}</cite>
                    <time className="review__date" dateTime={dayjs(item.date).toISOString()}>{dayjs(item.date).format('MMMM DD YYYY')}</time>
                  </footer>
                </blockquote>

                <div className="review__rating">{item.rating}</div>
              </div>
            );
          }
          return '';
        }) }

      </div>
      <div className="film-card__reviews-col">
        {comments.map((item, index) => {
          if(index % 2 === 1) {
            return (
              <div key={item.id} className="review">
                <blockquote className="review__quote">
                  <p className="review__text">{item.comment}</p>

                  <footer className="review__details">
                    <cite className="review__author">{item.user.name}</cite>
                    <time className="review__date" dateTime={dayjs(item.date).toISOString()}>{dayjs(item.date).format('MMMM DD YYYY')}</time>
                  </footer>
                </blockquote>

                <div className="review__rating">{item.rating}</div>
              </div>
            );
          }
          return '';
        }) }
      </div>
    </div>
  );
}

export default Reviews;
