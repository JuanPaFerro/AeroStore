import styled from "styled-components";

export const Navbar = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0px 5%;
`;
export const Logo = styled.img`
  width: 39px;
  height: 36px;
`;
export const InfoContainer = styled.div`
  display: flex;
  height: 48px;
`;
export const UserName = styled.span`
  font-family: SourceSansPro-Regular;
  font-size: 24px;
  color: #616161;
  letter-spacing: -0.15px;
  line-height: 48px;
  text-align: left;
`;
export const PointsHolder = styled.div`
  margin-left: 18px;
  background: #ededed;
  border-radius: 100px;
  width: 103px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
`;
export const AddPointsLayer = styled.div`
  display: none;
  ${PointsHolder}:hover & {
    cursor: pointer;
    height: 100%;
    width: 100%;
    background-color: #2f98df;
    opacity: 90%;
    color: #ffffff;
    font-size: 24px;
    border-radius: 100px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    &:active {
      top: 1px;
    }
  }
`;
export const Points = styled.span`
  font-family: SourceSansPro-Regular;
  font-size: 24px;
  color: #616161;
  letter-spacing: -0.15px;
  line-height: 48px;
  text-align: left;
`;
export const CoinIcon = styled.img`
  background-image: radial-gradient(50% -18%, #ffcf00 50%, #f7ae15 100%);
  width: ${({ size }) => size || "24px"};
  height: ${({ size }) => size || "24px"};
  border-radius: 100%;
`;
export const BagContainer = styled.div`
  height: 100%;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const HistoryContainer = styled.div`
  min-width: 250px;
  max-height: 320px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  position: absolute;
  top: 50px;
  right: 0;
  scrollbar-width: none;
  background: #ffffff;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 1;
`;
export const HistoryItem = styled.div`
  width: 100%;
  border-bottom: 1px solid #ededed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
`;
export const HorizontalContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: center;  
`;
export const ItemImage = styled.img`
  height: 30px;
  width: 30px;
  object-fit: cover;
  margin-right: 5px;
`;
export const ItemText = styled.span`
  font-size: 16px;
  margin-right: 2px;
`;
