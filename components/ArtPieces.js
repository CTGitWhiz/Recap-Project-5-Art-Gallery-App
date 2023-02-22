import ArtPiecePreview from "./ArtPiecePreview"

export default function ArtPieces({pieces}) {

    return (
        <ul>
          {pieces.map((piece) => (
            <li key={piece.id}>
              <ArtPiecePreview
                image={piece.url}
                title={piece.title}
                artist={piece.artist}
              />
            </li>
          ))}
        </ul>
      )
    }


