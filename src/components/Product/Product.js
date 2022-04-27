import styled from "styled-components";
import buyBlue from "../../assets/icons/buy-blue.svg";
import buyWhite from "../../assets/icons/buy-white.svg";

export const Card = styled.div`
  background: #ffffff;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 276px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  cursor: pointer;
  position: relative;
`;
export const CardImageContainer = styled.div`
  background: #ffffff;
  width: 100%;
  height: 182px;
`;
export const Line = styled.div`
  background: #d9d9d9;
  width: 95%;
  height: 1px;
`;
export const InfoContainer = styled.div`
  margin-top: 20px;
  width: 95%;
  display: flex;
  flex-direction: column;
`;
export const Category = styled.span`
  font-family: SourceSansPro-Regular;
  font-size: 16px;
  color: #a3a3a3;
  letter-spacing: -0.04px;
  text-align: left;
  margin-bottom: 1px;
`;
export const ProductName = styled.span`
  font-family: SourceSansPro-Regular;
  font-size: 18px;
  color: #616161;
  letter-spacing: -0.04px;
  text-align: left;
`;
export const Badge = styled.div`
  width: 42px;
  height: 42px;
  position: relative;
  top: 0px;
  float: right;
  background: ${({ selected }) =>
    selected ? `url(${buyWhite})` : `url(${buyBlue})`};
  background-size: cover;
  border-radius: 100%;
  z-index: 10;
`;
export const SelectedLayer = styled.div`
  height: 100%;
  width: 100%;
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(-180deg, #0ad4fa 0%, #25bbf1 100%);
  opacity: 90%;
`;
export const SelectedContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const PointsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
export const CoinIcon = styled.img`
  background-image: radial-gradient(50% -18%, #ffcf00 50%, #f7ae15 100%);
  width: 26px;
  height: 26px;
  border-radius: 100%;
  margin-left: 10px;
`;
export const Text = styled.span`
  font-family: SourceSansPro-Regular;
  font-size: 36px;
  color: #ffffff;
  letter-spacing: -0.08px;
  text-align: center;
`;
export const RedeemButton = styled.div`
  height: 42px;
  width: 80%;
  border-radius: 500px;
  background: #ffffff;
  font-family: SourceSansPro-Regular;
  font-size: 18px;
  color: #616161;
  letter-spacing: -0.04px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
