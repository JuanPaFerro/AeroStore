import React, { useCallback, useState, useContext } from "react";
import {
  Shop,
  Card,
  CardImageContainer,
  Category,
  InfoContainer,
  Line,
  PointsContainer,
  ProductName,
  RedeemButton,
  SelectedContainer,
  SelectedLayer,
  Text,
  CoinIcon,
  CardImage,
  PointsNeeded,
} from "./Product";
import axios from "axios";
import coin from "../../assets/icons/coin.svg";
import { Context } from "../../Context";

const Product = ({
  setSelected,
  isSelected,
  _id,
  cost,
  img,
  category,
  name,
}) => {
  const { user, fetchUserData } = useContext(Context);
  const [isSending, setIsSending] = useState(false);
  const { points } = user;
  const affordable = cost <= points;
  const sendRequest = useCallback(async () => {
    if (isSending) return;
    setIsSending(true);
    const config = {
      headers: { Authorization: `Bearer ${import.meta.env.VITE_TOKEN}` },
    };
    const bodyParameters = {
      productId: _id,
    };
    await axios.post(
      `${import.meta.env.VITE_API_URL}/redeem`,
      bodyParameters,
      config
    );
    fetchUserData();
    setIsSending(false);
  }, [isSending]);

  return (
    <Card onClick={() => setSelected(_id)} selected={isSelected}>
      <CardImageContainer>
        {affordable ? (
          <Shop selected={isSelected} />
        ) : (
          <PointsNeeded>
            You need {cost - points}
            <CoinIcon src={coin} size="20px" alt="an icon of a golden coin" />
          </PointsNeeded>
        )}

        <CardImage src={img.hdUrl} alt="product image" />
      </CardImageContainer>
      <Line />
      <InfoContainer>
        <Category>{category}</Category>
        <ProductName>{name}</ProductName>
      </InfoContainer>
      {isSelected && (
        <SelectedLayer affordable={affordable}>
          <SelectedContainer>
            <PointsContainer>
              <Text>{cost}</Text>
              <CoinIcon src={coin} size="26px" alt="an icon of a golden coin" />
            </PointsContainer>
            {affordable ? (
              <RedeemButton disabled={isSending} onClick={sendRequest}>
                Redeem now
              </RedeemButton>
            ) : (
              <PointsContainer>
                <Text size="20px">{`You only have ${points} `}</Text>
                <CoinIcon
                  src={coin}
                  size="20px"
                  alt="an icon of a golden coin"
                />
              </PointsContainer>
            )}
          </SelectedContainer>
        </SelectedLayer>
      )}
    </Card>
  );
};

export default Product;
