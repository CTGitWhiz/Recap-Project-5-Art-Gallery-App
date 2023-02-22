import Image from "next/image";

export default function Spotlight({ piece }) {
  return (
    <div>
      <h2>Spotlight Piece</h2>
      <Image
        src={piece.imageSource}
        alt={`Art piece by ${piece.artist}`}
        width={400}
        height={400}
      />
      <p>Artist: {piece.artist}</p>
    </div>
  );
}
