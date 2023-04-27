import { ContentContainer } from "@/styles/styledComponents";
import Logo from "./Logo";
import NavBar from "./NavBar";
import { NavBar as NavBarType } from "@/common/types";
import styled from "styled-components";

const Header = () => {
  const headerNav: NavBarType = {
    links: [{ text: "Schedule", url: "/schedule" }],
  };
  return (
    <HeaderWrapper>
      <ContentContainer>
        <HeaderContainer>
          <Logo />
          <NavBar navBar={headerNav} />
        </HeaderContainer>
      </ContentContainer>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 200px;
`;

const HeaderWrapper = styled.header`
  background: var(--dark-blue);
`;
