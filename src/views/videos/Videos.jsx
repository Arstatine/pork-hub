import { useEffect, useState } from 'react';
import { Gallery } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';
import VideoGallery from '../../components/VideoGallery';
import { videos } from '../../utils';

function Videos() {
  const [count, setCount] = useState(6);

  return (
    <div className='flex justify-center py-6 grow'>
      <div className='container'>
        <h1 className='px-4 lg:px-0 text-lg mb-4'>
          <span className='text-accent'>Hot</span> Videos of Pork
        </h1>
        <Gallery>
          <div className='flex flex-wrap'>
            {videos.slice(0, count).map((v, index) => {
              return (
                <VideoGallery
                  key={index}
                  video={v.video}
                  thumbnail={v.thumbnail}
                />
              );
            })}
          </div>
        </Gallery>
        {count < videos.length && (
          <div className='text-center mt-6'>
            <button
              onClick={() => setCount((prev) => prev + 6)}
              className='py-2 border px-4 rounded-sm hover:bg-accent hover:text-primary hover:border-accent'
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Videos;
