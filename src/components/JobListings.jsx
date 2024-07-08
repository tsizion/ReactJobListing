/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import JobListing from "./JobListing";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const JobListings = ({ isHome = false }) => {
  const [jobs, setjobs] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("/api/jobs");
        const data = await res.json();
        setjobs(data);
      } catch (error) {
        console.log("error fetching data", error);
      } finally {
        setloading(false);
      }
    };
    fetchJobs();
  }, []);

  const recentjobs = isHome ? jobs.slice(0, 3) : jobs;
  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent jobs" : "Browse Jobs"}
          </h2>

          {loading ? (
            <Spinner loading={loading} />
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {" "}
                {recentjobs.map((job) => (
                  <JobListing key={job.id} job={job} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default JobListings;
