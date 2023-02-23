import ArtPiecePreview from "../../components/ArtPiecePreview";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
  justify-content: center;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ArtPiecesContainer = styled.div`
  text-align: center;
`;

export default function ArtPieces({ picData }) {
  return (
    <ArtPiecesContainer>
      <h1>Pieces Of Art</h1>
      <StyledList>
        {picData.map(({ slug, imageSource, name, artist }) => {
          return (
            <li key={slug}>
              <ArtPiecePreview
                slug={slug}
                image={imageSource}
                name={name}
                artist={artist}
              />
            </li>
          );
        })}
      </StyledList>
    </ArtPiecesContainer>
  );
}
