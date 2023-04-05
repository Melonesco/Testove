import styled from "styled-components";
import { COLORS } from "utils/colors";

export const Section = styled.section`
  margin-top: 120px;
  width: 100%;
  display: flex;
  gap: 80px;

  @media (max-width: 1550px) {
    gap: 65px;
  }

  @media (max-width: 1250px) {
    gap: 30px;
    margin-top: 60px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const BlockTitle = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 35px;

  @media (max-width: 1550px) {
    gap: 20px;
  }

  @media (max-width: 1000px) {
    align-items: center;
    text-align: center;
    width: 100%;
    gap: 10px;
  }
`;

export const LinkText = styled.span`
  cursor: pointer;

  @media (max-width: 1250px) {
    font-size: 14px;
  }

  @media (max-width: 1000px) {
    font-size: 20px;
  }
`;

export const AdjacentSibling = styled.div`
  width: 0;
  height: 2px;
  background-color: #ffffff;
  position: absolute;
  right: 80px;
  bottom: 4px;
  transition: all 0.5s ease;

  @media (max-width: 1000px) {
    bottom: -5px;
    right: 0;
  }
`;

export const Link = styled.div`
  margin-top: 120px;
  display: inline-block;
  flex-direction: row-reverse;
  align-items: flex-end;
  gap: 20px;
  position: relative;
  float: right;

  &:hover ${AdjacentSibling} {
    width: 110px;

    @media (max-width: 1000px) {
      width: 100%;
    }
  }

  @media (max-width: 1250px) {
    margin-top: 60px;
  }

  @media (max-width: 1000px) {
    margin-top: 20px;
  }

  @media (max-width: 650px) {
    margin-top: 10px;
  }
`;

export const SliderContainer = styled.div`
  margin-top: 110px;
  width: 100%;
  height: 730px;
  overflow-x: scroll;
  display: flex;
  position: relative;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1250px) {
    margin-top: 60px;
    height: 550px;
  }

  @media (max-width: 1000px) {
    padding-right: 30px;
    margin-top: 20px;
  }

  @media (max-width: 650px) {
    margin-top: 10px;
    padding-right: 0;
    height: 650px;
    text-align: center;
  }
`;

interface SlideProps {
  left: number;
}

export const Slide = styled.div<SlideProps>`
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 60px;
  margin-left: 75px;
  flex: 0 0 calc((100% / 3) - 75px);
  left: ${(props) => props.left}%;
  position: relative;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1550px) {
    margin-left: 40px;
    flex: 0 0 calc((100% / 3) - 40px);
  }

  @media (max-width: 1250px) {
    gap: 30px;
    margin-left: 30px;
    flex: 0 0 calc((100% / 3) - 30px);
  }

  @media (max-width: 650px) {
    gap: 20px;
    margin-left: 0;
    flex: 0 0 100%;
    left: ${(props) => props.left}%;
  }
`;

export const SlideImg = styled.img`
  width: 100%;
  height: 340px;

  @media (max-width: 1250px) {
    height: 260px;
  }

  @media (max-width: 830px) {
    height: 200px;
  }

  @media (max-width: 650px) {
    height: 160px;
  }

  @media (max-width: 650px) {
    height: 400px;
  }
`;

export const SliderInfo = styled.div`
  width: 100%;
`;

export const SlideCountry = styled.h3`
  margin-top: 4px;
  font-size: 24px;
  color: rgba(255, 255, 255, 0.3);
`;

export const SlideInfo = styled.div`
  margin-top: 40px;

  @media (max-width: 1250px) {
    margin-top: 20px;
  }

  @media (max-width: 830px) {
    margin-top: 10px;
  }

  @media (max-width: 830px) {
    max-width: 400px;
    margin: 10px auto;
  }

  @media (max-width: 650px) {
    max-width: 300px;
  }

  @media (max-width: 420px) {
    max-width: 200px;
  }
`;

export const SlideButton = styled.a`
  color: ${COLORS.yellow};
  display: block;
  font-weight: bold;
  font-size: 16px;
  text-transform: lowercase;
  cursor: pointer;

  &:hover {
    color: rgba(254, 226, 81, 0.8);
  }

  @media (max-width: 1250px) {
    font-size: 14px;
  }

  @media (max-width: 650px) {
    margin: 0 auto;
  }
`;

export const SliderContent = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;

  @media (max-width: 1000px) {
    margin-right: 30px;
  }

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
`;

export const SliderContentText = styled.h3`
  background-color: ${COLORS.mainDark};
  font-weight: bold;
  padding-right: 40px;
  font-size: 16px;
  padding-left: 75px;

  @media (max-width: 1550px) {
    padding-left: 40px;
  }

  @media (max-width: 1250px) {
    padding-left: 30px;
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
    margin-right: 30px;
    font-size: 12px;
  }
`;
