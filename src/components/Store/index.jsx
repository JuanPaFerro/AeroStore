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
import { useGetAllProducts } from "../../hooks/useGetAllProducts";

const Store = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sort, setSort] = useState("recent");
  const [page, setPage] = useState(1);
  const [sortedProducts, setSortedProducts] = useState([]);
  const { products, loading } = useGetAllProducts();
  const limit = 16;

  if (loading) return "loading";

  useEffect(() => {
    let start = limit * (page - 1);
    let end = start + limit;
    const newProducts =
      sort !== "recent"
        ? [...products].sort((a, b) => {
            if (sort === "low") {
              return a.cost - b.cost;
            }
            if (sort === "high") {
              return b.cost - a.cost;
            }
          })
        : [...products];
    setSortedProducts([...newProducts].slice(start, end));
  }, [sort, page, products]);

  return (
    <Container>
      <Bar>
        <FiltersContainer>
          <Text color="#616161">{`${page * limit} of ${
            products.length
          } products`}</Text>
          <VerticalSeparator />
          <Text>Sort by:</Text>
          <FilterButton
            className={sort === "recent" && "active"}
            onClick={() => {
              setSort("recent");
              setPage(1);
            }}
          >
            <span>Most recent</span>
          </FilterButton>
          <FilterButton
            className={sort === "low" && "active"}
            onClick={() => {
              setSort("low");
              setPage(1);
            }}
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
          {page > 1 && (
            <NavButton onClick={() => setPage((page) => page - 1)}>
              <img src={arrowLeft} alt="an arrow pointing to the left" />
            </NavButton>
          )}
          {page < products.length / limit && (
            <NavButton onClick={() => setPage((page) => page + 1)}>
              <img src={arrowRight} alt="an arrow pointing to the right" />
            </NavButton>
          )}
        </NavButtonsContainer>
      </Bar>
      <Line />
      <ProductsContainer>
        {sortedProducts.map((product) => (
          <Product
            key={product._id}
            isSelected={selectedProduct === product._id}
            setSelected={setSelectedProduct}
            {...product}
          />
        ))}
      </ProductsContainer>
      <Bar>
        <FiltersContainer>
          <Text color="#616161">{`${page * limit} of ${
            products.length
          } products`}</Text>
        </FiltersContainer>
        <NavButtonsContainer>
          {page > 1 && (
            <NavButton onClick={() => setPage((page) => page - 1)}>
              <img src={arrowLeft} alt="an arrow pointing to the left" />
            </NavButton>
          )}
          {page < products.length / limit && (
            <NavButton onClick={() => setPage((page) => page + 1)}>
              <img src={arrowRight} alt="an arrow pointing to the right" />
            </NavButton>
          )}
        </NavButtonsContainer>
      </Bar>
      <Line />
    </Container>
  );
};

export default Store;
