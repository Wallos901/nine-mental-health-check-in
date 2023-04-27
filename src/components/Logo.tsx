import styled from "styled-components";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <StyledH2>Nine Mental Health</StyledH2>
    </Link>
  );
};

export default Logo;

const StyledH2 = styled.h2`
  background: -webkit-linear-gradient(270deg, #02dae6 0%, #008fe2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
