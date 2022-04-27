import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: 0 132px;
  margin-bottom: 74px;
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
  width: fit-content;
`;
export const NavButtonsContainer = styled.div`
  display: flex;
  width: 108px;
  justify-content: space-between;
`;
export const NavButton = styled.button`
  background: none;
  border: none;
`;
export const FilterButton = styled.div`
  background: #ededed;
  border-radius: 100px;
  width: 163px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 24px;
  & > span {
    font-family: SourceSansPro-Regular;
    font-size: 24px;
    color: #a3a3a3;
    letter-spacing: -0.15px;
    line-height: 48px;
    text-align: left;
  }
  &.active {
    background: #0ad4fa;
    & > span {
      color: #ffffff;
    }
  }
`;
export const VerticalSeparator = styled.div`
  background: #d9d9d9;
  width: 1px;
  height: 49px;
  margin: 0 24px;
`;
export const Text = styled.span`
  font-family: SourceSansPro-Regular;
  font-size: 24px;
  color: ${({ color }) => color || "#a3a3a3"};
  letter-spacing: -0.15px;
  line-height: 48px;
  text-align: left;
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
