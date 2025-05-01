import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header/Header";
import LatestNews from "../Components/LatestNews/LatestNews";
import Navbar from "../Components/Navbar/Navbar";
import RightSide from "../Components/HomePageLayout/RightSide";
import LeftSide from "../Components/HomePageLayout/LeftSide";

const HomeLayouts = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="latest-news w-11/12 mx-auto my-5">
          <LatestNews></LatestNews>
        </section>
        <nav className="latest-news w-11/12 mx-auto">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="w-11/12 mx-auto my-5  grid grid-cols-12 gap-5">
        <section className="left-nav col-span-3 sticky top-0 h-fit">
          <LeftSide></LeftSide>
        </section>
        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
        <section className="right-nav col-span-3 sticky top-0 h-fit">
          <RightSide></RightSide>
        </section>
      </main>
    </div>
  );
};

export default HomeLayouts;
