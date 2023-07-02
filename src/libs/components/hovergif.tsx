"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type TextiGIFProps = {
  text: string;
  color?: string;
  url: string;
  width?: string;
};
const TextiGIF = ({ url, text, color, width }: TextiGIFProps) => {
  const [show, setShow] = useState(false);
  const [x, setX] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const [left, setLeft] = useState(0);
  const c = color || "black";
  const w = width || "300px";
  useEffect(() => {
    setLeft(ref.current?.offsetLeft || 0);
  }, [ref.current]);
  return (
    <span
      ref={ref}
      onMouseMove={(e) => {
        setX(e.clientX - left - 130);
      }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      style={{ color: c }}
      className="italic mr-2 cursor-pointer relative"
    >
      {text}
      {show && (
        <Image
          onMouseEnter={() => setShow(false)}
          src={url}
          style={{ width: w, left: x }}
          alt="GIF"
          className="absolute bottom-[100%]"
        />
      )}
    </span>
  );
};

export default TextiGIF;
