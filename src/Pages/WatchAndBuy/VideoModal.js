import React, { useState } from 'react';
import {AiOutlineRight, AiOutlineLeft, AiOutlineClose } from 'react-icons/ai'
import {BsStarFill,BsStarHalf,BsStar} from 'react-icons/bs'

const VideoModal = ({ video, closeModal }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    if (currentImageIndex < video.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center top-0 z-50 bg-black bg-opacity-80">
      <div className="bg-white rounded-lg p-4 h-fit flex">
        <div className=''>
        
        <video autoPlay muted controls className="">
          <source src={video.src} type="video/mp4" className='h-1/2' />
        </video>
        </div>
        <div>
        <div className="relative h-1/2">
                                    {video.images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`Product ${index + 1}`}
                                            className={`w-full h-full  ${index === currentImageIndex ? '' : 'hidden'
                                                }`}
                                        />
                                    ))}
                                    <button
                                        onClick={handlePrevImage}
                                        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-xl font-bold"
                                    >
                                        <AiOutlineLeft className='text-3xl text-gray-600' />
                                    </button>
                                    <button
                                        onClick={handleNextImage}
                                        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-xl font-bold"
                                    >
                                        <AiOutlineRight className='text-3xl text-gray-600' />
                                    </button>
                                </div>
                                <div className='pt-6 pl-6 pr-6 flex flex-col justify-center w-full items-center'>
                                <h1 className='text-center text-2xl mb-6 mt-6 font-medium'>{video.title}</h1>
            <span className='flex text-lime-500 space-x-1 mb-6'>
              {Array.from({ length: 5 }, (_, index) => {
                if (index + 1 <= Math.floor(video.rating)) {
                  return <BsStarFill key={index} className="mt-1 text-lime-500" />;
                } else if (index + 0.5 <= video.rating) {
                  return <BsStarHalf key={index} className="mt-1 text-lime-500" />;
                } else {
                  return <BsStar key={index} className="mt-1 text-gray-300" />;
                }
              })}
              <p className='text-gray-500'>{video.reviews} reviews</p>
            </span>
            <span className=' flex'>
              <p className='text-gray-500 text-sm pr-2 mt-0.5 line-through'> Rs.{video.realPrice}</p> <p className='text-red-500  font-medium'>Rs.{video.price}</p>
            </span>
        </div>
        <button onClick={closeModal} className="bg-gray-500 absolute top-3 right-3 text-white py-2 px-4 rounded hover:bg-gray-600">
          <AiOutlineClose/>
        </button>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
