import styled from "styled-components";
import { COLORS } from "utils/colors";

export const Wrapper = styled.div`
  background-color: ${COLORS.mainDark};
  padding: 180px 150px 180px 0;
  display: flex;
  gap: 150px;

  @media (max-width: 1550px) {
    gap: 100px;
  }

  @media (max-width: 1250px) {
    padding: 120px 80px 120px 0;
    gap: 60px;
  }

  @media (max-width: 1000px) {
    padding: 100px 30px 100px 0;
    gap: 30px;
  }

  @media (max-width: 830px) {
    flex-direction: column-reverse;
    align-items: center;
    padding: 60px 0;
  }
`;

export const Img = styled.img`
  width: 750px;
  height: 750px;

  @media (max-width: 1250px) {
    width: 600px;
    height: 600px;
  }

  @media (max-width: 1000px) {
    width: 500px;
    height: 500px;
  }
  @media (max-width: 830px) {
    width: 100%;
    height: 600px;
    object-fit: cover;
  }
`;

export const Block = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 60px;

  @media (max-width: 1250px) {
    gap: 30px;
  }

  @media (max-width: 1000px) {
    gap: 20px;
  }

  @media (max-width: 830px) {
    width: 100%;
    text-align: center;
    align-items: center;
    padding: 0 30px;
  }
`;

export const Title = styled.div`
  max-width: 300px;
`;

export const Text = styled.div`
  font-size: 24px;
  max-width: 580px;
  font-style: italic;

  @media (max-width: 1250px) {
    font-size: 20px;
    max-width: 480px;
  }

  @media (max-width: 1000px) {
    font-size: 18px;
    max-width: 420px;
  }

  @media (max-width: 830px) {
    max-width: 100%;
  }
`;

export const BlockInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 1000px) {
    gap: 20px;
  }
`;

export const WidthInfo = styled.div`
  max-width: 410px;

  @media (max-width: 1250px) {
    max-width: 300px;
  }

  @media (max-width: 1000px) {
    max-width: 400px;
  }

  @media (max-width: 830px) {
    max-width: 100%;
  }
`;
