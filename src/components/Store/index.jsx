import React, { useEffect, useState } from "react";
import {
  Bar,
  FilterButton,
  Container,
  FiltersContainer,
  Text,
  VerticalSeparator,
  NavButtonsContainer,
  NavButton,
  Line,
  ProductsContainer,
} from "./Store";
import Product from "../Product";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";

const Store = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sort, setSort] = useState("recent");

  return (
    <Container>
      <Bar>
        <FiltersContainer>
          <Text color="#616161">16 of 32 products</Text>
          <VerticalSeparator />
          <Text>Sort by:</Text>
          <FilterButton
            className={sort === "recent" && "active"}
            onClick={() => setSort("recent")}
          >
            <span>Most recent</span>
          </FilterButton>
          <FilterButton
            className={sort === "low" && "active"}
            onClick={() => setSort("low")}
          >
            <span>Lowest price</span>
          </FilterButton>
          <FilterButton
            className={sort === "high" && "active"}
            onClick={() => setSort("high")}
          >
            <span>Highest price</span>
          </FilterButton>
        </FiltersContainer>
        <NavButtonsContainer>
          <NavButton>
            <img src={arrowLeft} alt="an arrow pointing to the left" />
          </NavButton>
          <NavButton>
            <img src={arrowRight} alt="an arrow pointing to the right" />
          </NavButton>
        </NavButtonsContainer>
      </Bar>
      <Line />
      <ProductsContainer>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((el) => (
          <Product
            key={el}
            isSelected={selectedProduct === el}
            setSelected={setSelectedProduct}
            id={el}
          />
        ))}
      </ProductsContainer>
      <Bar>
        <FiltersContainer>
          <Text color="#616161">16 of 32 products</Text>
        </FiltersContainer>
        <NavButtonsContainer>
          <NavButton>
            <img src={arrowLeft} alt="an arrow pointing to the left" />
          </NavButton>
          <NavButton>
            <img src={arrowRight} alt="an arrow pointing to the right" />
          </NavButton>
        </NavButtonsContainer>
      </Bar>
      <Line />
    </Container>
  );
};

export default Store;
