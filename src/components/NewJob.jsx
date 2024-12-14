import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { createJob } from '../services'
import { getJobById,updateJob } from '../services'
const NewJob = () => {
    const [isEdit,setIdEdit] = useState(false)
    const { id } = useParams();
    useEffect(()=>{
        if(id){
            setIdEdit(true)
        }
    },[id])
    const [jobFormData,setJobFormData] = useState({
        companyName : '',
        jobPosition : '',
        salary : '',
        jobType: ''
    })


    useEffect(()=>{
        if(isEdit,id){
            const fetchJob = async() =>{
                const res = await getJobById(id);
                if(res.status === 200){
                    const data = await res.json()
                    setJobFormData(data)
                }
                else{
                    console.log(res)
                }
            }
            fetchJob()
        }
        
    },[isEdit,id])

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const res = isEdit ? await updateJob(id,jobFormData) :await createJob(jobFormData);
        if(res.status === 200){
            const data = await res.json();
            console.log(data);
            alert(isEdit?`Job edited succesfully`:`Job created successfully`)
        }
        else if (res.status === 401 ){
            alert('login to create job')
        }
        else{
            console.log(res);
            alert('error')
        }
    }

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setJobFormData({...jobFormData,[name]:value})
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text" name='companyName' placeholder='Enter Your Company Name' value={jobFormData.companyName} onChange={handleChange}/>
        <input type="text" name='jobPosition' placeholder='Enter Your Job Position' value={jobFormData.jobPosition} onChange={handleChange}/>
        <input type="number" name='salary' placeholder='Enter Your salary' value={jobFormData.salary} onChange={handleChange}/>
        <select type="text" name='jobType' value={jobFormData.jobType} onChange={handleChange}>
            <option value="">Select Job Type</option>
            <option value="full-time">full-time</option>
            <option value="part-time">part-time</option>
            <option value="contract">contract</option>
            <option value="internship">internship</option>
            <option value="freelancer">freelancer</option>
        </select>
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default NewJob