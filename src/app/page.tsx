"use client";

import LikeDislike from "@/components/LikeDislike/LikeDislike";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Rating from "@/components/Rating/Rating";
import Header from "@/Layout/Header/Header";
import Main from "@/Layout/Main/Main";
import { useState } from "react";

export default function Home() {
  const [rating, setRating] = useState<number>(4);
  
  return (
    <main className={styles.main}>
      <Header />
      <Header />

      <Main>
        <div style={{ display: "flex", gap: "30px" }}>
          <Button appearance="large">БОльшая кнопка</Button>
          <Button appearance="medium">Средняя</Button>
          <Button appearance="small">М</Button>
          <Rating isEditable={true} rating={rating} setRating={setRating} />
         
        </div>
      </Main>
    </main>
  );
}
