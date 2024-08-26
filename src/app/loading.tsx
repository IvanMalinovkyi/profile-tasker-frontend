import { ILoader } from "@/shared/types/loader.types";
import Loader from "@/shared/ui/Loader";

export default function Loading({ width = 60, height = 60 }: ILoader) {
  return (
    <div className="h-full w-full absolute flex justify-center items-center">
      <Loader
        width={width}
        height={height}
      />
    </div>
  );
}
