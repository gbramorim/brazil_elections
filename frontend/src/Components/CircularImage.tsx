import React from "react";
import { Image } from "semantic-ui-react";

type CircularImageProps = {
  src: string;
  size:
    | "mini"
    | "tiny"
    | "small"
    | "medium"
    | "large"
    | "big"
    | "huge"
    | "massive";
  circular?: boolean;
};

const CircularImage = ({ src, size, circular }: CircularImageProps) => (
  <Image src={src} size={size} circular={circular} />
);

export default CircularImage;
