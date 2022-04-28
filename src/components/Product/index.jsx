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
import coin from "../../assets/icons/coin.svg";
import sampleProduct from "../../assets/sample-product.png";

const Product = ({ setSelected, isSelected, id }) => {
  const points = 6000;
  const price = Math.floor(Math.random() * 10000);
  const affordable = price <= points;

  return (
    <Card onMouseOver={() => setSelected(id)} selected={isSelected}>
      <CardImageContainer>
        {affordable ? (
          <Shop selected={isSelected} />
        ) : (
          <PointsNeeded>
            You need {price - points}
            <CoinIcon src={coin} size="20px" alt="an icon of a golden coin" />
          </PointsNeeded>
        )}

        <CardImage src={sampleProduct} alt="product image" />
      </CardImageContainer>
      <Line />
      <InfoContainer>
        <Category>category</Category>
        <ProductName>product</ProductName>
      </InfoContainer>
      {isSelected && (
        <SelectedLayer affordable={affordable}>
          <SelectedContainer>
            {affordable ? (
              <>
                <PointsContainer>
                  <Text>12.000</Text>
                  <CoinIcon
                    src={coin}
                    size="26px"
                    alt="an icon of a golden coin"
                  />
                </PointsContainer>
                <RedeemButton>Redeem now</RedeemButton>
              </>
            ) : (
              <>
                <PointsContainer>
                  <Text>12.000</Text>
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
