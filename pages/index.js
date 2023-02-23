import Spotlight from "../components/Spotlight";

export default function SpotlightPage({ picData }) {
  const { imageSource, name, artist } =
    picData[Math.floor(Math.random() * picData.length)];

  return (
    <div>
      <Spotlight image={imageSource} name={name} artist={artist} />
    </div>
  );
}
