import React from "react";
import { LAKE_SLIDES_STORAGE } from "Storage/Storage";
import { SlideItem } from "utils/types";
import * as GS from "utils/global";
import * as S from "../styles";

interface ISliderContainer {
  currentSlide: number;
}

const SliderContainer = ({ currentSlide }: ISliderContainer) => {
  return (
    <S.SliderContainer>
      {LAKE_SLIDES_STORAGE.map((slide: SlideItem) => (
        <S.Slide key={slide.id} left={-currentSlide * 100}>
          <S.SlideImg
            src={slide.backgroundImage}
            backgroundImage={
              slide.backgroundImage ? slide.backgroundImage : "img"
            }
          />
          <S.SlideInfo>
            <GS.GlobalTitle>{slide.nameStructure}</GS.GlobalTitle>
            <S.SlideText>
              <GS.GlobalInfoText>{slide.description}</GS.GlobalInfoText>
            </S.SlideText>
            <GS.GlobalButton>Read More</GS.GlobalButton>
          </S.SlideInfo>
        </S.Slide>
      ))}
    </S.SliderContainer>
  );
};

export default SliderContainer;
