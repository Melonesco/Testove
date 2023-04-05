import React, { useState } from "react";
import SliderContainer from "./Layout/SliderContainer";
import { DirectionSlider } from "utils/types";
import * as GS from "utils/global";
import * as S from "./styles";

const EditorsPick = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleButtonClick = (direction: DirectionSlider) => {
    if (direction === DirectionSlider.Left) {
      setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1);
    } else {
      setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1);
    }
  };

  return (
    <GS.GlobalContainer>
      <S.Section>
        <GS.GlobalWrapper>
          <GS.GlobalWrapperTitle>Editor's Pick</GS.GlobalWrapperTitle>
          <GS.GlobalWrapperInfo>
            Our picks, just for you nam an vidisse admodum omittantur, nihil
            corrumpit
          </GS.GlobalWrapperInfo>
        </GS.GlobalWrapper>
        <S.Container>
          <S.Slider>
            <S.Buttons>
              <S.Button onClick={() => handleButtonClick(DirectionSlider.Left)}>
                {"<"}
              </S.Button>
              <S.Button
                onClick={() => handleButtonClick(DirectionSlider.Right)}
              >
                {">"}
              </S.Button>
            </S.Buttons>
            <S.Body>
              <S.Numbers>{currentSlide + 1}/3</S.Numbers>
              <S.Sort>sort by</S.Sort>
            </S.Body>
          </S.Slider>
          <SliderContainer currentSlide={currentSlide} />
        </S.Container>
      </S.Section>
    </GS.GlobalContainer>
  );
};

export default EditorsPick;
