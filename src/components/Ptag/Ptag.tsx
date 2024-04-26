import { FC } from "react";
import { IPtagProps } from "./Ptag.props";
import styles from "./Ptag.module.css";
import cn from "classnames";

const Ptag: FC<IPtagProps> = ({ children, size , ...props}) => {
  return (
    <p
      className={cn(styles.p, {
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
        [styles.large]: size === "large",
      })}
      {...props}
    >
      {children}
    </p>
  );
};

export default Ptag;
