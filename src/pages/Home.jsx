import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";
const Home = () => {
  return (
    <>
      <Hero title="Become a react dev" />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default Home;
