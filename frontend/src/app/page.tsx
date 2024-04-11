import Image from "next/image";
import { LIBRE_BASKERVILLE } from "./fonts";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <section className="w-1/2 flex flex-col">
        <Image src="/logo.svg" alt="Arbif - Logo" width={220} height={80} />
        <h1 className="max-w-330 mt-10">
          <span className="text-2xl font-normal">
            Facilidade e transparência{" "}
          </span>
          <span
            className={`${LIBRE_BASKERVILLE.className} mt-4 text-4xl font-bold text-primary`}
          >
            para sua empresa crescer
          </span>
        </h1>
      </section>
    </main>
  );
}
