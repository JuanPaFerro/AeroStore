import styled from "styled-components";
import headerImg from "../../assets/header-x2.png";

export const HeaderContainer = styled.div`
  height: 480px;
  width: 100%;
`;
export const HeaderBackground = styled.div`
  width: 100%;
  object-fit: cover;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 412px;
    background-image: url(${headerImg});
    background-size: cover;
  }
`;
export const TextContainer = styled.div`
  height: 80px;
  width: 314px;
  position: relative;
  bottom: 115px;
  left: 133px;
`;

export const Text = styled.span`
  font-family: SourceSansPro-Bold;
  font-size: 64px;
  color: #ffffff;
  text-align: left;
`;
