import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const Layout = ({ children }: Props) => {
  return (
    <LayoutContainer>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledMain = styled.main`
  flex-grow: 1; // Because all other components default to 0, Main receives 100% of extra space.
`;
