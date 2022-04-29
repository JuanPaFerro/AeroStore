import React, { useContext, useState } from "react";
import {
  Navbar,
  Logo,
  InfoContainer,
  UserName,
  PointsHolder,
  Points,
  CoinIcon,
  AddPointsLayer,
} from "./Navigation";
import logoImage from "../../assets/aerolab-logo.svg";
import coin from "../../assets/icons/coin.svg";
import { Context } from "../../Context";
import axios from "axios";

const Navigation = () => {
  const { user, fetchUserData } = useContext(Context);
  const getMorePoints = async () => {
    const body = {
      amount: 1000,
    };
    await axios.post(`${import.meta.env.VITE_API_URL}/user/points`, body, {
      headers: { Authorization: `Bearer ${import.meta.env.VITE_TOKEN}` },
    });
    fetchUserData();
  };

  return (
    <Navbar>
      <Logo src={logoImage} />
      <InfoContainer>
        <UserName>{user.name}</UserName>
        <PointsHolder>
          <Points>{user.points}</Points>
          <CoinIcon src={coin} alt="an icon of a golden coin" />
          <AddPointsLayer onClick={getMorePoints}>+ 1000</AddPointsLayer>
        </PointsHolder>
      </InfoContainer>
    </Navbar>
  );
};

export default Navigation;
