import React from "react";
import UkraineMap from "assets/image/map.png";
import * as GS from "utils/global";
import * as S from "./styles";

const NewsletterSignupForm = () => {
  return (
    <S.FormBlock>
      <S.Title>Subscribe to our news letter</S.Title>
      <S.Form action="">
        <S.Input type="email" placeholder="Your Email" />
        <GS.GlobalButton type="submit">Subscribe</GS.GlobalButton>
      </S.Form>
      <S.FormBlockImg src={UkraineMap} alt="img" />
    </S.FormBlock>
  );
};

export default NewsletterSignupForm;
