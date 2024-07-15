import Image from "next/image";

// to get started, run yarn && yarn next dev
export default function Home() {
  return (
    <div className="bg-white text-black h-screen">
      <Image src="/pikachu.jpg" alt="Pikachu" width={200} height={200} />
      <Image src="/pokeball-sprite.png" alt="Pokeball" width={30} height={30} />
      <div>Pikachu</div>
    </div>
  );
}
