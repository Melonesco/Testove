import React, { useCallback, useEffect, useRef, useState } from "react";
import SliderContainer from "./Layout/SliderContainer";
import { DirectionSlider, SlideItem } from "utils/types";
import { COUNTRY_STORAGE } from "Storage/Storage";
import * as GS from "utils/global";
import * as S from "./styles";

const EditorsPick = () => {
  const [currentSlide, setCurrentSlide] = useState<any>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = (direction: DirectionSlider) => {
    if (direction === DirectionSlider.Left) {
      setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1);
    } else {
      setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1);
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setShowModal(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  const handleOpenModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

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
              <S.SortBlock>
                <S.Sort onClick={handleOpenModal}>sort by</S.Sort>
              </S.SortBlock>
              {showModal && (
                <S.ModalWrapper>
                  <S.Modal ref={modalRef}>
                    <S.CloseButton onClick={handleCloseModal}>
                      &times;
                    </S.CloseButton>
                    <S.ModalCountry>
                      {COUNTRY_STORAGE.map((country: SlideItem) => (
                        <S.Country
                          key={country.id}
                          onClick={() => setCurrentSlide(country.id - 1)}
                        >
                          {country.nameCountry}
                        </S.Country>
                      ))}
                    </S.ModalCountry>
                  </S.Modal>
                </S.ModalWrapper>
              )}
            </S.Body>
          </S.Slider>
          <SliderContainer currentSlide={currentSlide} />
        </S.Container>
      </S.Section>
    </GS.GlobalContainer>
  );
};

export default EditorsPick;
