"use client";

import { FC, useState } from "react";
import { IHeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import Button from "@/components/Button/Button";
import LikeDislike from "@/components/LikeDislike/LikeDislike";

const Header: FC<IHeaderProps> = (props) => {
  const [likes, setLikes] = useState(2);
  const [dislikes, setDislikes] = useState(2);
  const [likeActive, setLikeActive] = useState(false);
  const [dislikeActive, setDislikeActive] = useState(false);

  //логика такая если нажал лайк/дизлайк, то уже не можешь ставить лайк/дизлайк
  const handleLike = () => {
    if (!likeActive) {
      setLikes((prevLikes) => prevLikes + 1);
      setLikeActive(true);

      if (dislikeActive) {
        setDislikes((prevDislikes) => prevDislikes - 1);
        setDislikeActive(false);
      }
    } else {
      setLikes((prevLikes) => prevLikes - 1);
      setLikeActive(false);
    }
  };
  //логика такая если нажал лайк/дизлайк, то уже не можешь ставить лайк/дизлайк
  const handleDislike = () => {
    if (!dislikeActive) {
      setDislikes((prevDislikes) => prevDislikes + 1);
      setDislikeActive(true);
      if (likeActive) {
        setLikes((prevLikes) => prevLikes - 1);
        setLikeActive(false);
      }
    } else {
      setDislikes((prevDislikes) => prevDislikes - 1);
      setDislikeActive(false);
    }
  };
  return (
    <header className={styles.header} {...props}>
      <div style={{ display: "flex", gap: "30px" }}>
        <Button appearance="svgIcon" onClick={handleLike}>
          <LikeDislike
            appearance="up"
            count={likes}
            isActiveLike={likeActive}
          />
        </Button>
        <Button appearance="svgIcon" onClick={handleDislike}>
          <LikeDislike
            appearance="down"
            count={dislikes}
            isActiveDislike={dislikeActive}
          />
        </Button>
      </div>
    </header>
  );
};

export default Header;
