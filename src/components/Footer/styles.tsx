import styled from "styled-components";
import { COLORS } from "utils/colors";

export const Footer = styled.footer`
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.yellow};
  padding: 0 150px;

  @media (max-width: 1550px) {
    padding: 0 100px;
  }

  @media (max-width: 1250px) {
    height: 80px;
    padding: 0 60px;
  }

  @media (max-width: 1000px) {
    height: 60px;
  }

  @media (max-width: 650px) {
    padding: 30px;
  }
`;

export const Data = styled.div`
  color: ${COLORS.mainDark};
  font-weight: bold;

  @media (max-width: 1000px) {
    font-size: 14px;
  }

  @media (max-width: 650px) {
    font-size: 12px;
  }
`;

export const Socials = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 1000px) {
    gap: 10px;
  }
`;

export const Social = styled.svg`
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    fill: ${COLORS.gray};
  }
`;
