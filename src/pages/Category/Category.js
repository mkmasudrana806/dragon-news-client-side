import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummaryCard from "../SharedPages/NewsSummaryCard/NewsSummaryCard";

const Category = () => {
  const categoryNews = useLoaderData();
  return (
    <div>
      <h3>this category has {categoryNews.length} news</h3>
      {
        categoryNews.map( news => <NewsSummaryCard key={news._id} news={news}></NewsSummaryCard>)
      }
    </div>
  );
};

export default Category;
