import React, { useContext, useEffect, useState } from "react";
import {
  Navbar,
  Logo,
  InfoContainer,
  UserName,
  PointsHolder,
  Points,
  CoinIcon,
  AddPointsLayer,
  BagContainer,
  HistoryContainer,
  HistoryItem,
  HorizontalContainer,
  ItemImage,
  ItemText,
} from "./Navigation";
import logoImage from "../../assets/aerolab-logo.svg";
import coin from "../../assets/icons/coin.svg";
import { FiShoppingBag } from "react-icons/fi";
import { Context } from "../../Context";
import axios from "axios";

const Navigation = () => {
  const { user, fetchUserData } = useContext(Context);
  const [showHistory, setShowHistory] = useState(false);
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
        <BagContainer onClick={() => setShowHistory((prev) => !prev)}>
          <FiShoppingBag
            size={30}
            color={showHistory ? "#6ee8ff" : "#565656"}
          />
          {showHistory && (
            <HistoryContainer>
              {[...user.redeemHistory].reverse().map((product, index) => (
                <HistoryItem delay={index} key={`${product._id}-${index}`}>
                  <HorizontalContainer>
                    <ItemImage src={product.img.url} />
                    <ItemText>{product.name}</ItemText>
                  </HorizontalContainer>
                  <HorizontalContainer>
                    <ItemText>{product.cost}</ItemText>
                    <CoinIcon
                      src={coin}
                      size="14px"
                      alt="an icon of a golden coin"
                    />
                  </HorizontalContainer>
                </HistoryItem>
              ))}
            </HistoryContainer>
          )}
        </BagContainer>
      </InfoContainer>
    </Navbar>
  );
};

export default Navigation;
