import styled from "styled-components";
import { COLORS } from "utils/colors";

export const Section = styled.div`
  width: 100%;
  margin-bottom: 180px;
  display: flex;

  @media (max-width: 1250px) {
    margin-bottom: 120px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    margin-bottom: 60px;
  }
`;

export const Container = styled.div`
  margin-left: 150px;

  @media (max-width: 1550px) {
    margin-left: 100px;
  }

  @media (max-width: 1250px) {
    margin-left: 60px;
  }

  @media (max-width: 1000px) {
    margin: 20px 30px;
  }
`;

export const Slider = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

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

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${COLORS.mainDark};
  padding-right: 40px;

  @media (max-width: 1250px) {
    padding-right: 20px;
  }

  @media (max-width: 650px) {
    padding-right: 10px;
  }
`;

export const Button = styled.button`
  color: #000000;
  font-size: 24px;
  font-weight: bold;
  outline: none;
  border: none;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  background-color: #ffffff;
  cursor: pointer;

  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 1250px) {
    width: 30px;
    height: 30px;
    font-size: 16px;
  }
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-right: 40px;

  @media (max-width: 650px) {
    margin-right: 20px;
    gap: 20px;
  }
`;

export const Numbers = styled.p`
  background-color: ${COLORS.mainDark};
  padding: 0 40px;
  font-weight: bold;
  letter-spacing: 6px;

  @media (max-width: 1250px) {
    font-size: 12px;
    padding: 0 30px;
  }

  @media (max-width: 650px) {
    padding: 10px;
    letter-spacing: 0;
  }
`;

export const SortBlock = styled.div`
  background-color: ${COLORS.mainDark};
  padding: 0 30px;
`;

export const Sort = styled.div`
  font-weight: bold;
  cursor: pointer;

  @media (max-width: 1250px) {
    font-size: 14px;
  }

  @media (max-width: 650px) {
    padding: 10px;
  }
`;

export const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  border-radius: 8px;
  top: -200px;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const Modal = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`;

export const ModalCountry = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 20px;
`;

export const Country = styled.p`
  color: #ffffff;
  font-size: 24px;
  cursor: pointer;
  font-weight: bold;
`;

export const SliderContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  overflow: hidden;

  @media (max-width: 1250px) {
    margin-top: 30px;
  }
`;

interface TransformProps {
  transform: string;
}

export const SlidesContainerInner = styled.div<TransformProps>`
  display: flex;
  width: 300%;
  transition: transform 0.5s;
  transform: ${(props) => props.transform};
`;

export const Slide = styled.div`
  width: 100%;
  height: 1170px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 75px 75px;
  grid-template-areas:
    "GridItem1 GridItem1 GridItem2"
    "GridItem1 GridItem1 GridItem3"
    "GridItem4 GridItem5 GridItem5";

  @media (max-width: 1250px) {
    gap: 40px 40px;
    height: 900px;
  }

  @media (max-width: 1000px) {
    gap: 30px 30px;
    height: 800px;
  }

  @media (max-width: 830px) {
    gap: 20px;
    height: 700px;
  }

  @media (max-width: 650px) {
    gap: 10px;
    height: 500px;
  }
`;

interface GridProps {
  gridArea: string;
}

export const GridItem = styled.div<GridProps>`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: end;
  grid-area: ${(props) => props.gridArea};
`;

export const SlideImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

export const SlideInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px;
  width: 100%;
  height: 210px;
  background-color: rgba(0, 0, 0, 0.4);
  transition: all 0.5s ease;

  @media (max-width: 830px) {
    padding: 0 20px;
    height: 160px;
  }
`;

export const SlideTitle = styled.h3`
  font-size: 32px;

  @media (max-width: 1250px) {
    font-size: 28px;
  }

  @media (max-width: 830px) {
    font-size: 24px;
  }
`;

export const SlideCountry = styled.h3`
  font-size: 24px;
  color: rgba(255, 255, 255, 0.6);

  @media (max-width: 1250px) {
    font-size: 20px;
  }

  @media (max-width: 830px) {
    font-size: 16px;
  }
`;

export const SlideText = styled.p`
  margin-top: 40px;
  width: 500px;
  font-size: 14px;
  line-height: 24px;

  @media (max-width: 1250px) {
    width: 400px;
    margin-top: 32px;
    line-height: 20px;
  }

  @media (max-width: 830px) {
    margin-top: 10px;
    max-width: 300px;
    font-size: 12px;
  }
`;
