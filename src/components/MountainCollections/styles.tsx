import styled from "styled-components";
import { COLORS } from "utils/colors";

export const Section = styled.section`
  position: relative;
  padding-top: 100px;

  @media (max-width: 650px) {
    padding-top: 20px;
  }
`;

export const SectionInner = styled.div`
  display: flex;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 0 30px;
  }
`;

export const ListOfCollections = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 2;
`;

export const Title = styled.div`
  @media (max-width: 1000px) {
    text-align: center;
  }
`;

export const Subtext = styled.div`
  width: 400px;
  margin: 50px 0 130px 0;

  @media (max-width: 1250px) {
    margin: 20px 0 80px 0;
  }

  @media (max-width: 1000px) {
    width: 100%;
    max-width: 500px;
    margin: 10px auto 60px auto;
    text-align: center;
  }
`;
export const Blocks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  padding-bottom: 70px;
  margin-bottom: 70px;

  @media (max-width: 1550px) {
    gap: 100px;
  }

  @media (max-width: 1250px) {
    padding-bottom: 60px;
    margin-bottom: 60px;
  }

  @media (max-width: 650px) {
    display: block;
    width: 100%;
    padding-bottom: 40px;
    margin-bottom: 40px;
  }

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${COLORS.gray};
  }

  &:last-child {
    padding-bottom: 0;
    margin-bottom: 110px;

    @media (max-width: 1250px) {
      margin-bottom: 80px;
    }

    @media (max-width: 650px) {
      margin-bottom: 60px;
    }

    &:before {
      display: none;
    }
  }
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 650px) {
    align-items: center;
    text-align: center;
    gap: 20px;
    padding: 0 30px;
  }
`;

export const BlockTopic = styled.div``;

export const BlockSubtitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.3);
`;

export const BlockInfo = styled.div`
  max-width: 650px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 1550px) {
    width: 100%;
  }

  @media (max-width: 1250px) {
    gap: 20px;
  }
  @media (max-width: 1000px) {
    gap: 10px;
  }
`;

export const BlockImg = styled.img`
  width: auto;
  min-width: 340px;
  height: 340px;
  object-fit: cover;

  @media (max-width: 650px) {
    margin-top: 40px;
    width: 100%;
  }
`;

export const BlockWidthImg = styled.div`
  width: 340px;
  height: 340px;
  overflow: hidden;

  @media (max-width: 1250px) {
    height: 300px;
  }

  @media (max-width: 1000px) {
    height: 260px;
  }

  @media (max-width: 830px) {
    width: 500px;
    height: auto;
  }

  @media (max-width: 650px) {
    width: 100%;
    height: auto;
  }
`;

export const SectionBackgroundBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1200px;
  box-shadow: inset 1px -120px 40px -57px rgba(40, 39, 42, 1),
    inset 1px 120px 40px -57px rgba(40, 39, 42, 1);

  @media (max-width: 1250px) {
    height: 1000px;
  }

  @media (max-width: 650px) {
    display: none;
  }
`;

export const SectionBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
`;
