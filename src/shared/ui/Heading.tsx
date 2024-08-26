interface IHeading {
  title: string;
  size?: string;
  font?: string;
}

export default function Heading({
  title,
  size = "text-3xl",
  font = "font-medium",
}: IHeading) {
  return (
    <h1
      className={`w-full flex justify-center mb-6 sm:${size} ${font} text-4xl`}>
      {title}
    </h1>
  );
}
