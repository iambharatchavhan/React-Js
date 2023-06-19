import React from "react";

const VideoCard = ({props}) => {
  // console.log(props);

  const {channelTitle,title,
  } = props

  const {url} = props.thumbnails.high
  const {url:url2} = props.thumbnails.default
  return (
    <div className=" cursor-pointer rounded-lg overflow-hidden w-[320px] md:w-[380px] md:flex md:flex-col md:h-[360px] -mt-10 ">
      <div className=" w-[320px] h-[180px] md:w-[350px] md:h-[200px]">
        <img
          src={url}
          alt=""
          className="rounded-lg object-cover object-center w-[320px] h-[180px] md:w-[350px] md:h-[200px]"
        />
      </div>
      <div className="flex justify-center gap-4 p-1">
        <div>
          <div className="rounded-full w-[40px] h-[40px] overflow-hidden">
          <img
            src={url2}
            alt=""
            className="rounded-full cursor-pointer w-[60px] h-[60px]"
          />
          </div>
          
        </div>
        <div>
          <h1 className="text-lg max-h-[55px] overflow-hidden">
           {title}
          </h1>
          <p className=" text-gray-600 text-sm  dark:text-gray-300  dark:hover:text-white cursor-pointer">{channelTitle}</p>
        
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
