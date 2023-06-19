import React from 'react'
import { useQuery } from 'react-query'
import {YOUTUBE_API} from "./utils/constents"
import Shimmer from './Shimmer'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'


const getVideos = async () =>{
 
  const fetchData = await fetch(YOUTUBE_API) 
  const data = await fetchData.json()
  
  return data;

}

const VideoContainer = () => {
  const {isLoading,isFetching,data,isError} = useQuery(["hello"],getVideos)
  // console.log(data?.items);


  
  return isLoading ? <Shimmer/>: isError ? <h1>Error</h1> : 
  <div className='w-full md:flex md:flex-wrap md:justify-center md:items-center md:gap-2 md:p-8 md:mt-10'>
   {data?.items?.map((video)=>(
      <Link to={"watch?v=" + video.id} key={video.id}><VideoCard props={video.snippet}/></Link>
   ))}
     

  </div>
}


export default VideoContainer
