import React from "react";
import {
  Navbar,
  Logo,
  InfoContainer,
  UserName,
  PointsHolder,
  Points,
  CoinIcon,
} from "./Navigation";
import logoImage from "../../assets/aerolab-logo.svg";
import coin from "../../assets/icons/coin.svg";

const Navigation = ({ user}) => {
  return (
    <Navbar>
      <Logo src={logoImage} />
      <InfoContainer>
        <UserName>{user.name}</UserName>
        <PointsHolder>
          <Points>{user.points}</Points>
          <CoinIcon src={coin} alt="an icon of a golden coin" />
        </PointsHolder>
      </InfoContainer>
    </Navbar>
  );
};

export default Navigation;
