import Link from "next/link";
import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
  position: fixed;
  bottom: 0;
  font-size: 30px;
  padding: 40px;
  background-color: coral;
`;

export default function Navigation() {
  return (
    <StyledList>
      <Link href={`/`}>Home</Link>
      <Link href={`/art-pieces`}>All</Link>
      <Link href={""}>Favourites</Link>
    </StyledList>
  );
}
