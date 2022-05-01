import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: 0 6%;
  padding-bottom: 74px;
`;
export const Bar = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
  justify-content: space-between;
  margin-bottom: 24px;
`;
export const FiltersContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    position: fixed;
    box-sizing: border-box;
    bottom: 0;
    left: 0;
    background-color: #fff;
    box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1);
    z-index: 20;
    width: 100%;
    padding: 2%;
    justify-content: space-evenly;
  }
  @media (max-width: 540px) {
    justify-content: space-between;
  }
`;
export const LeftBarContainer = styled.div`
  display: flex;
  width: 90%;
`;
export const NavButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 10%;
`;
export const NavButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
export const FilterButton = styled.div`
  cursor: pointer;
  background: #ededed;
  border-radius: 100px;
  width: 163px;
  height: 48px;
  display: flex;
  align-items: center;
  margin-left: 10px;
  justify-content: center;
  & > span {
    font-family: SourceSansPro-Regular;
    font-size: 24px;
    color: #a3a3a3;
    text-align: left;
  }
  &.active {
    background: #0ad4fa;
    & > span {
      color: #ffffff;
    }
  }

  @media (max-width: 768px) {
    margin: 0px;
    width: fit-content;
    padding: 0 10px;
    box-sizing:border-box ;
    & > span {
      font-size: 18px;
    }
  }
`;
export const VerticalSeparator = styled.div`
  background: #d9d9d9;
  width: 1px;
  height: 49px;
  margin: 0 24px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Text = styled.span`
  font-family: SourceSansPro-Regular;
  font-size: 24px;
  color: ${({ color }) => color || "#a3a3a3"};
  letter-spacing: -0.15px;
  text-align: left;
  align-self: center;
  @media (max-width: 540px) {
    font-size: 20px;
    display: ${({ needsToHide }) => needsToHide && "none"};
  }
`;
export const Line = styled.div`
  background: #d9d9d9;
  width: 100%;
  height: 1px;
`;
export const ProductsContainer = styled.div`
  width: 100%;
  margin-bottom: 60px;
  padding-top: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
  gap: 20px;
`;
