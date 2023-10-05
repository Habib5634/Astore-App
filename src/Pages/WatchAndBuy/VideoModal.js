import React from 'react';
import {AiOutlineClose} from 'react-icons/ai'

const VideoModal = ({ video, closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center top-0  bg-black bg-opacity-80">
      <div className="bg-white rounded-lg p-4 h-fit flex">
        <div className=''>
        
        <video autoPlay muted controls className="">
          <source src={video.src} type="video/mp4" className='h-1/2' />
        </video>
        </div>
        <div>
        <h1 className="text-xl font-bold mt-4">{video.title}</h1>
        <p className="text-gray-700 mb-2">Price: Rs.{video.price}</p>
        <p className="text-gray-700 mb-4">Real Price: Rs.{video.realPrice}</p>
        <button onClick={closeModal} className="bg-gray-500 absolute top-3 right-3 text-white py-2 px-4 rounded hover:bg-gray-600">
          <AiOutlineClose/>
        </button>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
