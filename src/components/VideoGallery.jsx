import { Item } from 'react-photoswipe-gallery';

function VideoGallery({ video, thumbnail }) {
  return (
    <Item html={`${video}`} width='1280' height='720'>
      {({ ref, open }) => (
        <div className='w-full sm:w-1/2 lg:w-1/3 overflow-hidden object-cover relative'>
          <div
            ref={ref}
            onClick={open}
            className='absolute top-0 left-0 w-full h-full bg-transparent z-[2] cursor-pointer'
          ></div>
          <div
            dangerouslySetInnerHTML={{ __html: video }}
            className='z-[1] aspect-video w-auto object-cover overflow-hidden'
          ></div>
        </div>
      )}
    </Item>
  );
}

export default VideoGallery;
