import React from "react";
import ListOfCollections from "./Layout/ListOfCollections";
import Desert from "assets/image/desert.jpg";
import * as GS from "utils/global";
import * as S from "./styles";

const MountainCollections = () => {
  return (
    <S.Section>
      <GS.GlobalContainer>
        <S.SectionInner>
          <GS.GlobalWrapper />
          <ListOfCollections />
          <S.SectionBackgroundBlock>
            <S.SectionBackground src={Desert} alt="img" />
          </S.SectionBackgroundBlock>
        </S.SectionInner>
      </GS.GlobalContainer>
    </S.Section>
  );
};

export default MountainCollections;
