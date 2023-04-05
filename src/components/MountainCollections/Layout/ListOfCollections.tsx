import React from "react";
import { MOUNTAIN_COLLECTIONS_STORAGE } from "Storage/Storage";
import { IStorageMountainCollections } from "utils/types";
import * as GS from "utils/global";
import * as S from "../styles";

const ListOfCollections = () => {
  return (
    <S.ListOfCollections>
      <S.Title>
        <GS.GlobalTitle>Mountain Collections</GS.GlobalTitle>
      </S.Title>
      <S.Subtext>
        <GS.GlobalInfoText>
          See our mountain collections, explore and Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </GS.GlobalInfoText>
      </S.Subtext>
      {MOUNTAIN_COLLECTIONS_STORAGE.map(
        (content: IStorageMountainCollections) => (
          <S.Blocks key={content.id}>
            <S.Block>
              <S.BlockTopic>
                <GS.GlobalTitleInSections>
                  {content.title}
                </GS.GlobalTitleInSections>
                <GS.GlobalSubtitle>{content.subtitle}</GS.GlobalSubtitle>
              </S.BlockTopic>
              <S.BlockInfo>
                <GS.GlobalInfoText>
                  {content.paragraphs.text1}
                </GS.GlobalInfoText>
                <GS.GlobalInfoText>
                  {content.paragraphs.text2}
                </GS.GlobalInfoText>
              </S.BlockInfo>
              <GS.GlobalButton>Read More</GS.GlobalButton>
            </S.Block>
            <S.BlockWidthImg>
              <S.BlockImg src={content.img} alt="img" />
            </S.BlockWidthImg>
          </S.Blocks>
        )
      )}
    </S.ListOfCollections>
  );
};

export default ListOfCollections;
