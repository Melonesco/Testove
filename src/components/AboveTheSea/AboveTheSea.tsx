import React from "react";
import Sea from "assets/image/hermansyah-7uXn7nudorc-unsplash.jpg";
import * as GS from "utils/global";
import * as S from "./styles";

const AboveTheSea = () => {
  return (
    <GS.GlobalContainer>
      <S.Wrapper>
        <S.Img src={Sea} alt="img" />
        <S.Block>
          <S.Title>
            <GS.GlobalTitle>Above The Sea</GS.GlobalTitle>
          </S.Title>
          <S.Text>
            " Eros reque munere ul guo, commodo ullamcorber ad eam. His aelerno
            scriplorem ei, sea ul epicuri lincidunt. "
          </S.Text>
          <S.BlockInfo>
            <S.WidthInfo>
              <GS.GlobalInfoText>
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Sections 1.10.32 and
                1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
                reproduced in their exact original form, accompanied by English.
              </GS.GlobalInfoText>
            </S.WidthInfo>
            <S.WidthInfo>
              <GS.GlobalInfoText>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source.
              </GS.GlobalInfoText>
            </S.WidthInfo>
          </S.BlockInfo>
          <GS.GlobalButton>Read More</GS.GlobalButton>
        </S.Block>
      </S.Wrapper>
    </GS.GlobalContainer>
  );
};

export default AboveTheSea;
