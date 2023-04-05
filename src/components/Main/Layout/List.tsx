import React from "react";
import * as S from "../styles";

const StorageButtons: string[] = [
  "Home",
  "Recommendation",
  "Explore",
  "Help",
  "About Us",
];

const List = () => {
  return (
    <S.List>
      {StorageButtons.map((text: string, index: number) => (
        <S.NavItem key={index}>
          <S.LinkText>{text}</S.LinkText>
          <S.AdjacentSibling />
        </S.NavItem>
      ))}
    </S.List>
  );
};

export default List;
