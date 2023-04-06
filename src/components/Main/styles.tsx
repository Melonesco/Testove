import styled from "styled-components";
import { COLORS } from "utils/colors";

export const Main = styled.main`
  position: relative;
  width: 100%;
`;

export const Wrapper = styled.div<IBurgerMenu>`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 340px;
  height: 100%;
  z-index: 5;
  overflow: hidden;
  background-color: rgba(40, 39, 42, 0.5);

  @media (max-width: 1550px) {
    min-width: 260px;
  }

  @media (max-width: 1250px) {
    min-width: 220px;
  }

  @media (max-width: 830px) {
    width: 100%;
    display: ${(props) => props.bool};
    background-color: rgba(40, 39, 42, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 6;
  }
`;

interface IBurgerMenu {
  bool: string;
}

export const BlockClick = styled.div`
  position: fixed;
  right: 30px;
  top: 24px;
  z-index: 50;
  cursor: pointer;
`;

export const BurgerMenu = styled.img<IBurgerMenu>`
  width: 30px;
  height: 30px;
  display: none;

  @media (max-width: 830px) {
    display: ${(props) => props.bool};
  }
`;

export const CloseIcon = styled.img<IBurgerMenu>`
  width: 30px;
  height: 30px;
  display: none;

  @media (max-width: 830px) {
    display: ${(props) => props.bool};
  }
`;

export const Header = styled.header`
  position: absolute;
  width: 100%;
  z-index: 10;

  @media (max-width: 1000px) {
    padding-right: 30px;
  }
`;

export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);

  @media (max-width: 830px) {
    display: block;
  }
`;

export const LogoContainer = styled.div<IBurgerMenu>`
  background: ${COLORS.yellow};
  max-width: 450px;
  padding: 40px;
  width: 100%;

  @media (max-width: 1550px) {
    max-width: 350px;
    padding: 30px;
  }

  @media (max-width: 1250px) {
    max-width: 300px;
    padding: 24px;
  }

  @media (max-width: 830px) {
    position: fixed;
    top: 0;
    left: 0;
    max-width: 200px;
    padding: 24px;
    z-index: 50;
    display: ${(props) => props.bool};
  }
`;

export const Navigation = styled.nav<IBurgerMenu>`
  align-items: center;
  display: flex;
  gap: 64px;
  justify-content: flex-end;
  width: 100%;
  font-weight: 600;
  font-size: 14px;
  color: ${COLORS.white};

  @media (max-width: 1250px) {
    gap: 40px;
    font-size: 12px;
  }

  @media (max-width: 830px) {
    z-index: 500;
    position: fixed;
    top: 24px;
    left: 230px;
    display: ${(props) => props.bool};
    justify-content: start;
  }

  @media (max-width: 650px) {
    z-index: 500;
    position: fixed;
    top: 100px;
    left: 30px;
    display: ${(props) => props.bool};
    justify-content: start;
  }
`;

export const SpacerVertical = styled.div`
  width: 2px;
  height: 20px;
  background: ${COLORS.white};
`;

export const ProfileWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
`;

export const ProfilePicture = styled.img`
  background-color: ${COLORS.black};
  border-radius: 100%;
  height: 40px;
  width: 40px;

  @media (max-width: 1250px) {
    width: 32px;
    height: 32px;
  }
`;

export const List = styled.div`
  margin-top: 210px;
  margin-left: 75px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 60px;
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 1550px) {
    margin-left: 40px;
    font-size: 16px;
  }

  @media (max-width: 1250px) {
    margin-top: 160px;
    margin-left: 30px;
    font-size: 14px;
    gap: 40px;
  }

  @media (max-width: 830px) {
    font-size: 32px;
  }

  @media (max-width: 630px) {
    gap: 30px;
    font-size: 24px;
  }
`;

export const AdjacentSibling = styled.div`
  width: 0;
  height: 2px;
  background-color: #ffffff;
  position: absolute;
  left: 180px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  transition: all 0.8s ease;

  @media (max-width: 1550px) {
    left: 150px;
  }

  @media (max-width: 830px) {
    left: 500px;
  }
`;

export const LinkText = styled.div`
  cursor: pointer;
  z-index: 10;
`;

export const NavItem = styled.div`
  position: relative;

  &:hover ${AdjacentSibling} {
    width: 100px;

    @media (max-width: 830px) {
      width: 500px;
    }
  }
`;

export const Slider = styled.div`
  width: 100%;
`;

export const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: scroll;
  display: flex;
  -webkit-box-shadow: inset 0px -100px 40px -11px rgba(40, 39, 42, 1);
  -moz-box-shadow: inset 0px -100px 40px -11px rgba(40, 39, 42, 1);
  box-shadow: inset 0px -100px 40px -11px rgba(40, 39, 42, 1);

  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

interface SlideProps {
  left: number;
}

export const Slide = styled.div<SlideProps>`
  height: 1200px;
  display: flex;
  width: 100%;
  padding-left: 496px;
  align-items: center;
  flex: 0 0 100%;
  left: ${(props) => props.left}%;
  position: relative;
  transition: all 1s ease-in-out;

  @media (max-width: 1550px) {
    height: 1000px;
    padding-left: 365px;
  }

  @media (max-width: 1250px) {
    height: 800px;
    padding-left: 280px;
  }

  @media (max-width: 1000px) {
    height: 700px;
    padding-left: 100px;
  }

  @media (max-width: 650px) {
    height: 500px;
    padding-left: 0;
  }
`;

interface SlideImgProps {
  backgroundImage: string;
}

export const SlideImg = styled.img<SlideImgProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;

  z-index: -5;
`;

export const SlideInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: flex-start;
  @media (max-width: 1250px) {
    gap: 20px;
  }

  @media (max-width: 650px) {
    width: 100%;
    align-items: center;
    text-align: center;
    margin: 0 30px;
  }
`;

export const SlideTitle = styled.h3`
  font-size: 72px;
`;

export const SlideText = styled.div`
  font-weight: 600;
  max-width: 460px;
`;

export const SliderContent = styled.div`
  margin-left: 500px;
  margin-right: 150px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  background-color: ${COLORS.mainDark};

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${COLORS.gray};
    z-index: -1;
  }

  @media (max-width: 1550px) {
    margin-left: 365px;
    margin-right: 100px;
  }

  @media (max-width: 1250px) {
    margin-left: 280px;
    margin-right: 60px;
  }

  @media (max-width: 1000px) {
    margin-left: 250px;
    margin-right: 30px;
    z-index: 5;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const SliderPanel = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${COLORS.mainDark};
`;

export const SliderButtons = styled.button`
  color: rgb(0, 0, 0);
  font-size: 24px;
  font-weight: bold;
  outline: none;
  border: none;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  background-color: rgb(255, 255, 255);
  cursor: pointer;
  transition: background-color 0.2s ease 0s;

  &:hover {
    background-color: rgb(255, 255, 255, 0.8);
  }

  @media (max-width: 1250px) {
    font-size: 16px;
    width: 30px;
    height: 30px;
  }
`;

export const SliderContentText = styled.h3`
  background-color: ${COLORS.mainDark};
  font-weight: bold;
  padding-right: 40px;
  font-size: 16px;
  margin-left: 10px;

  @media (max-width: 1250px) {
    font-size: 14px;
  }

  @media (max-width: 650px) {
    padding-right: 10px;
    margin-left: 5px;
  }
`;

export const SliderContentIndex = styled.p`
  letter-spacing: 6px;
  background-color: ${COLORS.mainDark};
  font-weight: bold;
  padding: 0 40px;
  margin-right: 40px;

  @media (max-width: 1250px) {
    padding: 0 20px;
    margin-right: 40px;
    font-size: 12px;
  }

  @media (max-width: 650px) {
    padding: 0 5px;
    margin-right: 20px;
    letter-spacing: 0;
  }
`;
