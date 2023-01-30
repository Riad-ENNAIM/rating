import { useState } from "react";
import Star from '../icons/Star';

function Rating() {
  const [rating, setRating] = useState(0);
  const [hoverdRating, setHoverdRating] = useState(0);

  const updateRating = value => {
    setRating(value);
    setHoverdRating(value);
  }

  return (
    <div className="Rating">
      {[1, 2, 3, 4, 5].map(index => (
        <div key={index}
          onClick={() => updateRating(index)}
          onMouseOver={() => setHoverdRating(index)}
          onDoubleClick={() => updateRating(0)}
          onMouseLeave={() => setHoverdRating(0)}
          className={`Rating__star ${(hoverdRating || rating) >= index ? 'Rating__star--yellow' : 'Rating__star--grey'}`}>
          <Star />
        </div>
      ))}
    </div>
  );
}

export default Rating;
