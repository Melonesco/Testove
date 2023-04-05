import { GlobalContainer, GlobalLogo } from "utils/global";
import * as S from "../styles";

interface IHeader {
  isModal: boolean;
}

const Header = ({ isModal }: IHeader) => {
  return (
    <S.Header>
      <GlobalContainer>
        <S.HeaderInner>
          <S.LogoContainer bool={!isModal ? "none" : "block"}>
            <GlobalLogo>trppd</GlobalLogo>
          </S.LogoContainer>
          <S.Navigation bool={!isModal ? "none" : "flex"}>
            <S.NavItem>My Collection</S.NavItem>
            <S.SpacerVertical />
            <S.ProfileWrapper>
              <S.NavItem>My Collection</S.NavItem>
              <S.ProfilePicture />
            </S.ProfileWrapper>
          </S.Navigation>
        </S.HeaderInner>
      </GlobalContainer>
    </S.Header>
  );
};

export default Header;
