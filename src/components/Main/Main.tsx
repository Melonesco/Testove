import React, { useState } from "react";
import Header from "./Layout/Header";
import { LAKE_SLIDES_STORAGE } from "Storage/Storage";
import SliderContainer from "./Layout/SliderContainer";
import List from "./Layout/List";
import SliderContent from "./Layout/SliderContent";
import { DirectionSlider } from "utils/types";
import menu from "assets/image/menu.png";
import close from "assets/image/close.png";
import * as S from "./styles";

const Main: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
    const [showModal, setShowModal] = useState(false);

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

    const handleOpenModal = () => {
        setShowModal(true);
        document.body.style.overflow = 'hidden';
    };

    const handleCloseModal = () => {
        setShowModal(false);
        document.body.style.overflow = 'auto';
    };

  return (
    <S.Main>
      <Header isModal={showModal} />
      <S.Wrapper bool={!showModal ? "none" : "block"}>
        <List />
      </S.Wrapper>
      <S.BlockClick onClick={handleOpenModal}>
        <S.BurgerMenu src={menu} bool={showModal ? "none" : "block"} alt="img" />
      </S.BlockClick>
      <S.BlockClick onClick={handleCloseModal}>
        <S.CloseIcon src={close} alt="img" bool={!showModal ? "none" : "block"} />
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
