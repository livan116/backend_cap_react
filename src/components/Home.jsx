import React from 'react'
import { useState, useEffect } from 'react'
import { getJobs } from '../services';

const Home = () => {
    const [jobs , setJobs] = useState([]);
    const[loading,setLoading] = useState(true);
    useEffect(()=>{
        const fetchJobs = async() =>{
            setLoading(true)
            const res = await getJobs()
            if(res.status === 200){
                const data = await res.json();
              
                setJobs(data)
            }
            else{
                console.log(res)
            }
            setLoading(false)
        }
        fetchJobs()
    },[])
  return (
    <div>
        Home
    </div>
  )
}

export default Home