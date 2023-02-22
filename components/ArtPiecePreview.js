import Image from "next/image";

export default function ArtPiecePreview({ imageSource, name, artist }) {
  console.log(imageSource);
  return (
    <div>
      <Image
        src={imageSource}
        alt={name}
        width={300}
        height={300}
        priority={true}
      />
      <p>{name}</p>
      <p>{artist}</p>
    </div>
  );
}
