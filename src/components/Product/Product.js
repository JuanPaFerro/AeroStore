import styled from "styled-components";
import buyBlue from "../../assets/icons/buy-blue.svg";
import buyWhite from "../../assets/icons/buy-white.svg";

export const Card = styled.div`
  background: #ffffff;
  transition: 0.3s ease-in-out;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  cursor: pointer;
  position: relative;
  margin-top: ${({ selected }) => (selected ? "0" : "12px")};
  ${({ selected }) =>
    selected &&
    `-webkit-box-shadow: 18px 18px 30px -7px rgba(0,0,0,0.56);
    -moz-box-shadow: 18px 18px 30px -7px rgba(0,0,0,0.56);
    box-shadow: 18px 18px 30px -7px rgba(0,0,0,0.56);`}
`;
export const CardImageContainer = styled.div`
  background: #ffffff;
  min-width: 100%;
  min-height: 182px;
  position: relative;
`;
export const CardImage = styled.img`
  object-fit: cover;
  max-width: 100%;
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
export const Shop = styled.div`
  width: 42px;
  height: 42px;
  position: absolute;
  top: 0px;
  right: 0px;
  background: ${({ selected }) =>
    selected ? `url(${buyWhite})` : `url(${buyBlue})`};
  background-size: cover;
  border-radius: 100%;
  z-index: 10;
`;
export const PointsNeeded = styled.div`
  height: 42px;
  width: 142px;
  position: absolute;
  top: 0px;
  right: 0px;
  background: rgba(97, 97, 97, 0.8);
  border-radius: 100px;

  font-family: SourceSansPro-Regular;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: -0.03px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  background-image: ${({ affordable }) =>
    affordable
      ? `linear-gradient(
    -180deg,
    rgba(10, 212, 250, 0),
    rgba(37, 187, 241, 1)
  );`
      : `linear-gradient(
    -180deg,
    rgba(250, 250, 250, 0),
    rgba(50, 50, 50, 1)
  );`};
  border-radius: 5px;
`;
export const SelectedContainer = styled.div`
  width: 100%;
  padding-top: 50px;
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
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 100%;
  margin-left: 10px;
`;
export const Text = styled.span`
  font-family: SourceSansPro-Regular;
  font-size: ${({ size }) => size || "36px"};
  color: #ffffff;
  letter-spacing: -0.08px;
  text-align: center;
`;
export const RedeemButton = styled.div`
  height: 42px;
  width: 80%;
  border-radius: 100px;
  background-color: transparent;
  font-family: SourceSansPro-Regular;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: -0.04px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  font-size: bold;
  border: 2px solid #ffffff;
  position: relative;
  transition-duration: 0.4s;

  &:hover {
    border: 2px rgba(255, 255, 255, 0.6);
    background: rgba(255, 255, 255, 0.6);
    color: #616161;
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.5s;
    box-shadow: 0 0 10px 40px white;
  }
  &:active:after {
    box-shadow: 0 0 0 0 white;
    position: absolute;
    border-radius: 100px;
    left: 0;
    top: 0;
    opacity: 1;
    transition: 0s;
  }
  &:active {
    top: 1px;
  }
`;
