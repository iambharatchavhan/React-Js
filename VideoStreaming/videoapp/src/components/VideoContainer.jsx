import React from 'react'
import { useQuery } from 'react-query'
import {YOUTUBE_API} from "./utils/constents"

const getVideos = async () =>{
 
  const fetchData = await fetch(YOUTUBE_API) 
  const data = await fetchData.json()
  
  return data;

}

const VideoContainer = () => {
  const {isLoading,isFetching,data,isError} = useQuery(["videos"],getVideos)

  
  return isLoading ? <h1>Loading....</h1> : isError ? <h1>Error</h1> : <h1>data</h1>
}

export default VideoContainer
