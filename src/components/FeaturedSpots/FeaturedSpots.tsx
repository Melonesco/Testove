import React, { useCallback, useEffect, useState } from "react";
import { NATURE_SLIDES_STORAGE } from "Storage/Storage";
import { SliderContainer } from "./Layout/SliderContainer";
import * as GS from "utils/global";
import * as S from "./styles";
import { DirectionSlider } from "../../utils/types";

const FeaturedSpots = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleButtonClick = useCallback(
    (direction: string): void => {
      if (direction === DirectionSlider.Left) {
        setCurrentSlide(
          currentSlide === 0
            ? NATURE_SLIDES_STORAGE.length - 3
            : currentSlide - 1
        );
      } else {
        setCurrentSlide(
          currentSlide === NATURE_SLIDES_STORAGE.length - 3
            ? 0
            : currentSlide + 1
        );
      }
    },
    [currentSlide]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      handleButtonClick(DirectionSlider.Right);
    }, 4000);

    return () => clearInterval(timer);
  }, [currentSlide, handleButtonClick]);

  return (
    <GS.GlobalContainer>
      <S.Section>
        <GS.GlobalWrapper>
          <S.BlockTitle>
            <GS.GlobalWrapperTitle>Featured Spots</GS.GlobalWrapperTitle>
            <GS.GlobalWrapperInfo>
              Some of featured spot that you might want visit before you die
            </GS.GlobalWrapperInfo>
          </S.BlockTitle>
          <S.Link>
            <S.LinkText>View All</S.LinkText>
            <S.AdjacentSibling />
          </S.Link>
        </GS.GlobalWrapper>
        <div>
          <SliderContainer currentSlide={currentSlide} />
          <S.SliderContent>
            <S.SliderContentText>Outdoors Edition</S.SliderContentText>
            <S.SliderContentIndex>
              {currentSlide + 1}/{NATURE_SLIDES_STORAGE.length - 2}
            </S.SliderContentIndex>
          </S.SliderContent>
        </div>
      </S.Section>
    </GS.GlobalContainer>
  );
};

export default FeaturedSpots;
