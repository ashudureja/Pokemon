import React from "react";
import styles from "./bubble.module.css";
import { Link } from "react-router-dom";



const BubbleText = ({text}) => {
  return (
    <Link to={text} className="text-center cursor-pointer text-3xl md:text-6xl font-thin text-yellow-300">
      {(text).split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </Link>
  );
};

export default BubbleText;