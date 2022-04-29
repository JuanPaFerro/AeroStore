import React from "react";
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

const Product = ({
  setSelected,
  isSelected,
  _id,
  cost,
  img,
  category,
  name,
  points,
}) => {
  const affordable = cost <= points;
  const config = {
    headers: { Authorization: `Bearer ${import.meta.env.VITE_TOKEN}` },
  };
  const bodyParameters = {
    productId: _id,
  };
  const onRedeem = () => {
    axios.post(
      `${import.meta.env.VITE_API_URL}/redeem`,
      bodyParameters,
      config
    );
  };

  return (
    <Card onMouseOver={() => setSelected(_id)} selected={isSelected}>
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
            {affordable ? (
              <>
                <PointsContainer>
                  <Text>{cost}</Text>
                  <CoinIcon
                    src={coin}
                    size="26px"
                    alt="an icon of a golden coin"
                  />
                </PointsContainer>
                <RedeemButton onClick={onRedeem}>Redeem now</RedeemButton>
              </>
            ) : (
              <>
                <PointsContainer>
                  <Text>{cost}</Text>
                  <CoinIcon
                    src={coin}
                    size="26px"
                    alt="an icon of a golden coin"
                  />
                </PointsContainer>
                <Text size="20px">You don't have enough points</Text>
              </>
            )}
          </SelectedContainer>
        </SelectedLayer>
      )}
    </Card>
  );
};

export default Product;
