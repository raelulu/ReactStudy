import React from "react";
import Style from "./Button.module.css";
import cn from "classnames";

export default function Button({ size }) {
  const isBig = size === "big";
  return (
    <button
      className={cn(Style.Button, {
        [Style.big]: isBig,
        [Style.small]: !isBig,
      })}
    >
      {isBig ? "큰 버튼" : "작은 버튼"}
    </button>
  );
  // if (size === "big") {
  //   return <button className={cn(Style.Button, Style.big)}>큰 버튼</button>;
  // } else {
  //   return <button className={cn(Style.Button, Style.small)}>작은 버튼</button>;
  // }
}
