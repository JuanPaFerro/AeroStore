import React from "react";
import {
  HeaderContainer,
  HeaderBackground,
  Text,
  TextContainer,
} from "./Header";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderBackground>
        <TextContainer>
          <Text>Electronics</Text>
        </TextContainer>
      </HeaderBackground>
    </HeaderContainer>
  );
};

export default Header;
