import styled from "styled-components";
import { COLORS } from "./colors";

export const GlobalWidth = styled.div`
  max-width: 2200px;
  margin: 0 auto;
`;

export const GlobalContainer = styled.div`
  margin-right: 150px;

  @media (max-width: 1550px) {
    margin-right: 100px;
  }

  @media (max-width: 1250px) {
    margin-right: 60px;
  }
  @media (max-width: 1000px) {
    margin-right: 0;
  }
`;

export const GlobalWrapper = styled.div`
  min-width: 340px;
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 35px;

  @media (max-width: 1550px) {
    min-width: 260px;
  }

  @media (max-width: 1250px) {
    min-width: 220px;
    gap: 20px;
  }

  @media (max-width: 1000px) {
    text-align: center;
    align-items: center;
    gap: 10px;
  }
`;

export const GlobalWrapperTitle = styled.h2`
  display: inline-block;
  max-width: 140px;
  font-size: 32px;

  @media (max-width: 1250px) {
    font-size: 28px;
  }

  @media (max-width: 1000px) {
    font-size: 40px;
    max-width: 100%;
  }

  @media (max-width: 650px) {
    font-size: 32px;
    line-height: 30px;
  }
`;

export const GlobalWrapperInfo = styled.p`
  width: 200px;
  line-height: 24px;
  font-size: 16px;

  @media (max-width: 1250px) {
    font-size: 14px;
    line-height: 20px;
  }

  @media (max-width: 1000px) {
    width: 300px;
  }

  @media (max-width: 650px) {
    font-size: 12px;
    max-width: 200px;
  }
`;

export const GlobalLogo = styled.div`
  color: ${COLORS.mainDark};
  font-weight: bold;
  font-size: 32px;
  position: relative;

  @media (max-width: 1000px) {
    font-size: 24px;
  }

  @media (max-width: 650px) {
    font-size: 20px;
  }

  &:before {
    content: "";
    position: absolute;
    bottom: 8px;
    left: 85px;
    width: 20px;
    height: 2px;
    background-color: ${COLORS.mainDark};

    @media (max-width: 1000px) {
      width: 16px;
      left: 66px;
    }

    @media (max-width: 650px) {
      width: 16px;
      left: 56px;
    }
  }
`;

export const GlobalTitle = styled.h2`
  font-size: 72px;
  line-height: 70px;
  font-weight: bold;

  @media (max-width: 1250px) {
    font-size: 52px;
    line-height: 50px;
  }

  @media (max-width: 1000px) {
    font-size: 40px;
    line-height: 38px;
  }

  @media (max-width: 650px) {
    font-size: 32px;
    line-height: 30px;
  }
`;

export const GlobalButton = styled.button`
  font-size: 16px;
  font-weight: bold;
  background-color: ${COLORS.yellow};
  color: ${COLORS.mainDark};
  padding: 15px 40px;
  border: none;
  border-radius: 50px;
  cursor: pointer;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ffffff;
  }

  @media (max-width: 1250px) {
    padding: 14px 36px;
  }

  @media (max-width: 1000px) {
    padding: 12px 30px;
  }

  @media (max-width: 650px) {
    padding: 12px 24px;
    font-size: 14px;
  }
`;

export const GlobalTitleInSections = styled.h2`
  font-size: 32px;
  line-height: 30px;

  @media (max-width: 1250px) {
    font-size: 28px;
    line-height: 26px;
  }
`;

export const GlobalSubtitle = styled.h3`
  margin-top: 4px;
  font-size: 24px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.3);

  @media (max-width: 1250px) {
    font-size: 20px;
  }
`;

export const GlobalInfoText = styled.p`
  line-height: 24px;
  font-size: 16px;

  @media (max-width: 1250px) {
    font-size: 14px;
    line-height: 20px;
  }

  @media (max-width: 650px) {
    font-size: 12px;
  }
`;
