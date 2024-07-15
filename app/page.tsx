import Image from "next/image";

// to get started, run yarn && yarn next dev
export default function Home() {
  return (
    <div className="bg-white text-black h-screen">
      <div className="flex justify-center w-full pt:24 sm:pt-24">
        <Image src="/pikachu.jpg" alt="Pikachu" width={200} height={200} />
      </div>
      <div className="flex justify-center w-full gap-2 items-center">
        <Image
          src="/pokeball-sprite.png"
          alt="Pokeball"
          width={30}
          height={30}
          className="hidden sm:block"
        />
        <div>Pikachu</div>
      </div>
    </div>
  );
}
