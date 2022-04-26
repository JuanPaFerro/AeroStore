import styled from "styled-components";

export const Navbar = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0px 48px;
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
  width: 24px;
  height: 24px;
  border-radius: 100%;
`;
