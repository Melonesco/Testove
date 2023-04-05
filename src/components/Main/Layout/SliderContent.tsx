import React from "react";
import { LAKE_SLIDES_STORAGE } from "Storage/Storage";
import { DirectionSlider } from "utils/types";
import * as S from "../styles";

interface ISliderContent {
  handleButtonClick(direction: string): void;
  currentSlide: number;
}

const SliderContent = ({ handleButtonClick, currentSlide }: ISliderContent) => {
  return (
    <S.SliderContent>
      <S.SliderPanel>
        <S.SliderButtons
          onClick={() => handleButtonClick(DirectionSlider.Left)}
        >
          {"<"}
        </S.SliderButtons>
        <S.SliderButtons
          onClick={() => handleButtonClick(DirectionSlider.Right)}
        >
          {">"}
        </S.SliderButtons>
        <S.SliderContentText>Outdoors Edition</S.SliderContentText>
      </S.SliderPanel>
      <S.SliderContentIndex>
        {currentSlide + 1}/{LAKE_SLIDES_STORAGE.length}
      </S.SliderContentIndex>
    </S.SliderContent>
  );
};

export default SliderContent;
