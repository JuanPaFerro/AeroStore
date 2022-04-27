import React from "react";
import {
  Badge,
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
} from "./Product";
import coin from "../../assets/icons/coin.svg";
import sampleProduct from "../../assets/sample-product.png";

const Product = ({ setSelected, isSelected, id }) => {
  return (
    <Card onClick={() => setSelected(id)} selected={isSelected}>
      <CardImageContainer>
        <Badge selected={isSelected} />
        <CardImage src={sampleProduct} alt="product image" />
      </CardImageContainer>
      <Line />
      <InfoContainer>
        <Category>category</Category>
        <ProductName>product</ProductName>
      </InfoContainer>
      {isSelected && (
        <SelectedLayer>
          <SelectedContainer>
            <PointsContainer>
              <Text>12.000</Text>
              <CoinIcon src={coin} alt="an icon of a golden coin" />
            </PointsContainer>
            <RedeemButton>Redeem now</RedeemButton>
          </SelectedContainer>
        </SelectedLayer>
      )}
    </Card>
  );
};

export default Product;
