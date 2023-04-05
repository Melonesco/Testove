import React, { useState } from "react";
import Header from "./Layout/Header";
import { LAKE_SLIDES_STORAGE } from "Storage/Storage";
import SliderContainer from "./Layout/SliderContainer";
import List from "./Layout/List";
import SliderContent from "./Layout/SliderContent";
import { DirectionSlider } from "utils/types";
import * as S from "./styles";
import menu from "assets/image/menu.png";
import close from "assets/image/close.png";

const Main: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModal, setIsModal] = useState(false);

  const handleButtonClick = (direction: DirectionSlider) => {
    if (direction === DirectionSlider.Left) {
      setCurrentSlide(
        currentSlide === 0 ? LAKE_SLIDES_STORAGE.length - 1 : currentSlide - 1
      );
    } else {
      setCurrentSlide(
        currentSlide === LAKE_SLIDES_STORAGE.length - 1 ? 0 : currentSlide + 1
      );
    }
  };

  const modalOpen = () => {
    setIsModal(true);
  };

  const modalClose = () => {
    setIsModal(false);
  };

  return (
    <S.Main>
      <Header isModal={isModal} />
      <S.Wrapper bool={!isModal ? "none" : "block"}>
        <List />
      </S.Wrapper>
      <S.BlockClick onClick={modalOpen}>
        <S.BurgerMenu src={menu} bool={isModal ? "none" : "block"} alt="img" />
      </S.BlockClick>
      <S.BlockClick onClick={modalClose}>
        <S.CloseIcon src={close} alt="img" bool={!isModal ? "none" : "block"} />
      </S.BlockClick>
      <S.Slider>
        <SliderContainer currentSlide={currentSlide} />
        <SliderContent
          handleButtonClick={handleButtonClick}
          currentSlide={currentSlide}
        />
      </S.Slider>
    </S.Main>
  );
};

export default Main;
