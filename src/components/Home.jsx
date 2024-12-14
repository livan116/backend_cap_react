import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import { getJobs,deleteJob } from "../services";

const Home = () => {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()
  const fetchJobs = async () => {
    setLoading(true);
    const res = await getJobs();
    if (res.status === 200) {
      const data = await res.json();

      setJobs(data);
    } else {
      console.log(res);
    }
    setLoading(false);
  };
  useEffect(() => {
    
    fetchJobs();
  }, []);

  const handleDelete = async(id) =>{
    const res = await deleteJob(id);
    if(res.status === 200){
        const data = await res.json();
        console.log(data)
        alert('Job deleted succesfully')
        fetchJobs()
    }
    else if(res.status === 401){
        alert('You are not authorized to delete this job')
    }
    else{
        console.log(res)
        alert("error")
    }
  }
  return (
    <div>
      <h1>Home</h1>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        jobs.map((job) => (
          <div key={job._id}>
            <h1>{job.companyName}</h1>
            <p>{job.jobPosition}</p>
            <button onClick={()=>navigate(`/editJob/${job._id}`)}>Edit</button>
            <button onClick={()=>handleDelete(job._id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
