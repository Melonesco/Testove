import React from "react";
import { COUNTRY_STORAGE } from "Storage/Storage";
import { SlideItem } from "utils/types";
import * as S from "../styles";

interface ISliderContainer {
  currentSlide: number;
}

const SliderContainer = ({ currentSlide }: ISliderContainer) => {
  return (
    <S.SliderContainer>
      <S.SlidesContainerInner
        transform={`translateX(-${currentSlide * 33.3333}%)`}
      >
        {COUNTRY_STORAGE.map((slide: SlideItem) => (
          <S.Slide key={slide.id}>
            {slide.images &&
              slide.images.map((img: string, index: number) => (
                <S.GridItem key={index} gridArea={`GridItem${index + 1}`}>
                  <S.SlideImg src={img} alt="img" />
                  {index === 0 && (
                    <S.SlideInfo>
                      <S.SlideTitle>{slide.nameStructure}</S.SlideTitle>
                      <S.SlideCountry>{slide.nameCountry}</S.SlideCountry>
                      <S.SlideText>{slide.description}</S.SlideText>
                    </S.SlideInfo>
                  )}
                </S.GridItem>
              ))}
          </S.Slide>
        ))}
      </S.SlidesContainerInner>
    </S.SliderContainer>
  );
};

export default SliderContainer;
