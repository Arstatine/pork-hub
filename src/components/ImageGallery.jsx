import { Item } from 'react-photoswipe-gallery';

function ImageGallery({ link }) {
  return (
    <Item
      content={
        <div className='flex justify-center h-full'>
          <img src={link} className='object-contain object-center' />
        </div>
      }
      original={link}
      thumbnail={link}
      width='1024'
      height='768'
    >
      {({ ref, open }) => (
        <div className='w-full sm:w-1/2 lg:w-1/3 overflow-hidden object-cover'>
          <img
            ref={ref}
            onClick={open}
            src={link}
            title='Hello'
            className='object-cover aspect-video cursor-pointer hover:scale-105 transition-all'
          />
        </div>
      )}
    </Item>
  );
}

export default ImageGallery;
