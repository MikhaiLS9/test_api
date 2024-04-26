/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useCallback, useEffect, useState} from "react";
import Star from "../../../public/star.svg";
import styles from "./Rating.module.css";
import cn from "classnames";
import { IRatingProps } from "./Rating.props";

function Rating({
  isEditable = false,
  rating,
  setRating,
  className,
}: IRatingProps) {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = useCallback(
    (currentRating: number) => {
      {
        const updateRatingArray = ratingArray.map((_: JSX.Element, index) => {
          const handleEventRating = (i: number) => {
            if (!isEditable) return;
            constructRating(i);
          };
          const handlePutRating = (index: number) => {
            if (!isEditable || !setRating) return;
            setRating(index);
          };
          return (
            <span
              onMouseEnter={() => handleEventRating(index + 1)}
              onMouseLeave={() => handleEventRating(rating)}
              onClick={() => handlePutRating(index + 1)}
              tabIndex={isEditable ? 0 : -1}
              key={`star_${index}`}
              className={cn(styles.span, className, {
                [styles.fill]: index < currentRating,
                [styles.editable]: isEditable,
              })}
            >
              <Star />
            </span>
          );
        });
        setRatingArray(updateRatingArray);
      }
    },
    [className, isEditable, rating, ratingArray, setRating]
  );

  return (
    <div>
      {ratingArray.map((star, i) => (
        <span key={i}>{star}</span>
      ))}
    </div>
  );
}

export default Rating;
