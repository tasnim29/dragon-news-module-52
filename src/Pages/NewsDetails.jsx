import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import RightSide from "../Components/HomePageLayout/RightSide";
import { useLoaderData, useParams } from "react-router";
import NewsDetailsCard from "../Components/NewsDetailsCard/NewsDetailsCard";

const NewsDetails = () => {
  const data = useLoaderData();
  //   console.log(data);
  const { id } = useParams();
  const [news, setNews] = useState({});

  useEffect(() => {
    const targetNews = data.find((news) => news.id == id);
    setNews(targetNews);
  }, [data, id]);

  return (
    <div>
      <Header></Header>
      <div className="w-11/12 mx-auto grid grid-cols-12 gap-5 py-10">
        <main className="col-span-9 space-y-5">
          <h1 className="font-bold">Dragon News Details</h1>
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </main>
        <aside className="col-span-3">
          <RightSide></RightSide>
        </aside>
      </div>
    </div>
  );
};

export default NewsDetails;
