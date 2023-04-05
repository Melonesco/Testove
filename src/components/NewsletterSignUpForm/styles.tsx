import styled from "styled-components";
import { COLORS } from "utils/colors";

export const FormBlock = styled.div`
  padding: 140px 0 190px 0;
  margin: 0 150px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 120px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${COLORS.gray};
  }

  @media (max-width: 1550px) {
    margin: 0 100px;
  }

  @media (max-width: 1250px) {
    padding: 100px 0 150px 0;
    margin: 0 60px;
  }

  @media (max-width: 1000px) {
    padding: 80px 0 120px 0;
    margin: 0 30px;
    gap: 60px;
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const Input = styled.input`
  outline: none;
  width: 490px;
  border: none;
  padding: 15px 24px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 50px;
  color: ${COLORS.mainDark};

  @media (max-width: 1250px) {
    width: 400px;
    font-size: 14px;
    padding: 14px 20px;
  }

  @media (max-width: 1000px) {
    width: 300px;
    font-size: 14px;
    padding: 12px 16px;
  }

  @media (max-width: 650px) {
    width: 240px;
    font-size: 12px;
  }

  @media (max-width: 420px) {
    width: 200px;
  }
`;

export const FormBlockImg = styled.img`
  position: absolute;
  width: 500px;
  height: auto;
  z-index: -1;

  @media (max-width: 1250px) {
    width: 460px;
    font-size: 14px;
  }

  @media (max-width: 1000px) {
    width: 400px;
    font-size: 14px;
    top: 40px;
  }
`;
