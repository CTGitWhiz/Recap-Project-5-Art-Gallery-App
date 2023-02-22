import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";
import Spotlight from "../components/Spotlight";

const fetcher = (url) => fetch(url).then((res) => res.json());

function pickRandomPiece(pieces) {
  const randomIndex = Math.floor(Math.random() * pieces.length);
  return pieces[randomIndex];
}

export default function Home() {
  const { data, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>Failed to load art pieces</div>;
  if (!data) return <div>Loading.....</div>;

  const spotlightPiece = pickRandomPiece(data);

  return (
    <div>
      <Spotlight piece={spotlightPiece} />
      <ArtPieces pieces={data} />
    </div>
  );
}
