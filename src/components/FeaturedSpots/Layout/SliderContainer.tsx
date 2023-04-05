import React from "react";
import { NATURE_SLIDES_STORAGE } from "Storage/Storage";
import { SlideItem } from "utils/types";
import * as GS from "utils/global";
import * as S from "../styles";

interface ISliderContainer {
  currentSlide: number;
}

const screen = document.documentElement.clientWidth;

const SliderContainer = ({ currentSlide }: ISliderContainer) => {
  return (
    <S.SliderContainer>
      {NATURE_SLIDES_STORAGE.map((slide: SlideItem) => (
        <S.Slide
          key={slide.id}
          left={screen > 650 ? -currentSlide * (100 / 3) : -currentSlide * 100}
        >
          <S.SlideImg src={slide.backgroundImage} alt="img" />
          <S.SliderInfo>
            <GS.GlobalTitleInSections>1</GS.GlobalTitleInSections>
            <GS.GlobalSubtitle>{slide.nameCountry}</GS.GlobalSubtitle>
            <S.SlideInfo>
              <GS.GlobalInfoText>{slide.description}</GS.GlobalInfoText>
            </S.SlideInfo>
          </S.SliderInfo>
          <S.SlideButton>read more</S.SlideButton>
        </S.Slide>
      ))}
    </S.SliderContainer>
  );
};

export { SliderContainer };
