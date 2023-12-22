import { Gallery } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';
import ImageGallery from '../../components/ImageGallery';
import { images } from '../../utils';
import { useState } from 'react';

function Photos({ searchText }) {
  const [count, setCount] = useState(6);

  return (
    <div className='flex justify-center py-6 grow'>
      <div className='container'>
        <h1 className='px-4 lg:px-0 text-lg mb-4'>
          <span className='text-accent'>Hot</span> Photos of Pork
        </h1>
        <Gallery withDownloadButton={true}>
          <div className='flex flex-wrap'>
            {images.slice(0, count).map((d, index) => {
              return <ImageGallery key={index} link={d.link} />;
            })}
          </div>
        </Gallery>
        {count < images.length && (
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

export default Photos;
