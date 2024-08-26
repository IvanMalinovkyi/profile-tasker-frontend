"use client";

import { PAGES } from "@/shared/config/routes";
import { Button } from "@/shared/ui/buttons/Button";
import Heading from "@/shared/ui/Heading";
import { MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { push } = useRouter();

  return (
    <main className="flex justify-center items-center flex-grow w-full bg-gray-100">
      <div className="h-full flex flex-col justify-center items-center max-w-2xl">
        <Heading title="My Skills"></Heading>
        <div className="my-5 text-xl text-center">
          Платформа, створена для ефективного представлення та просування ваших
          професійних навичок у цифровому світі
        </div>
        <Button
          variant="secondary"
          onClick={() => push(PAGES.ABOUT_PLATFORM)}>
          Дізнатися більше <MoveRight />
        </Button>
      </div>
    </main>
  );
}
