"use client";
import { Oval } from "react-loader-spinner";
import { ILoader } from "../types/loader.types";

export default function Loader({ width, height }: ILoader) {
  return (
    <Oval
      height={height}
      width={width}
      ariaLabel="loading"
    />
  );
}
