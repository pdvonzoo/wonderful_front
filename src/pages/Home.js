import React, { useState, useEffect } from "react";
import Layout from "../components/common/Layout";
import Data from "../components/Book/data.json";
import BookList from "../components/Book/BookList";
import styled from "styled-components";

const HomeConatainer = styled.div`
  background-color: #e4e4e4;
  height: 100%;
`;

export default () => {
  const [datas, setDatas] = useState(null);
  useEffect(() => {
    setDatas(Data.books);
  }, []);

  return <HomeConatainer><BookList datas={datas} width="33.3%" height="" display="flex" /></HomeConatainer>;
};
