import Image from "next/image";
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

const SpotlightContainer = styled.div`
  text-align: center;
`;

export default function Spotlight({ image, name, artist }) {
  return (
    <SpotlightContainer>
      <h1>Piece of the Day</h1>
      <StyledList>
        <li>
          <Image
            src={image}
            height={300}
            width={300}
            alt={`Art piece ${name} by ${artist}`}
          />
        </li>
        <li>
          <h3>{`"${name}" by ${artist}`}</h3>
        </li>
      </StyledList>
    </SpotlightContainer>
  );
}
