import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { closeMenu } from './utils/appSlice';

const PlayVideo = () => {
    // const id = useParams();
    // console.log(id);

    const [id] = useSearchParams()
    console.log(id.get("v"));


    const dispatch = useDispatch();

    useEffect(()=>{
       dispatch(closeMenu())
    },[])
  return (
    <div className='dark:bg-[#0F0F0F] dark:text-white'>
     <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + id.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default PlayVideo
