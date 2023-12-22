import { recipes, videos, images } from '../../utils';
import RecipeItem from '../../components/RecipeItem';
import { Gallery } from 'react-photoswipe-gallery';
import ImageGallery from '../../components/ImageGallery';
import VideoGallery from '../../components/VideoGallery';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Home({ searchText }) {
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [filteredVideos, setFilteredVideos] = useState(videos);
  const [filteredPhotos, setFilteredPhotos] = useState(videos);

  useEffect(() => {
    const recipe = recipes.filter((item) =>
      item?.title?.toLowerCase().includes(searchText)
    );
    setFilteredRecipes(recipe);

    const photo = images.filter((item) =>
      item?.title?.toLowerCase().includes(searchText)
    );
    setFilteredPhotos(photo);

    const video = videos.filter((item) =>
      item?.title?.toLowerCase().includes(searchText)
    );
    setFilteredVideos(video);
  }, [searchText]);

  return (
    <div className='flex justify-center py-6 grow'>
      <div className='container'>
        {searchText != '' && (
          <h1 className='px-4 lg:px-0 text-lg'>
            Search Results for <span className='text-accent'>{searchText}</span>
          </h1>
        )}

        {/* RECIPES */}
        {searchText != '' ? (
          <div className='flex justify-between pb-4 pt-12 px-4 lg:px-0'>
            <h1>
              <span className='text-accent'>Recipes</span> Result
            </h1>
            {filteredRecipes.length > 6 && (
              <Link to='/recipes' className='hover:text-accent'>
                See all recipes
              </Link>
            )}
          </div>
        ) : (
          <div className='flex justify-between pb-4 pt-12 px-4 lg:px-0'>
            <h1 className=' text-lg'>
              <span className='text-accent'>Hot</span> Recipes of Pork
            </h1>
            <Link to='/photos' className='hover:text-accent'>
              See all recipes
            </Link>
          </div>
        )}
        <div className='flex flex-wrap'>
          {filteredRecipes.slice(0, 6).map((recipe, index) => {
            return (
              <RecipeItem
                key={index}
                title={recipe.title}
                thumbnail={recipe.thumbnail}
                link={recipe.link}
              />
            );
          })}
          {filteredRecipes.length < 1 && (
            <div className='px-4 lg:px-0'>No recipes found</div>
          )}
        </div>

        {/* PHOTOS */}
        {searchText != '' ? (
          <div className='flex justify-between pb-4 pt-12 px-4 lg:px-0'>
            <h1>
              <span className='text-accent'>Photos</span> Result
            </h1>
            {filteredPhotos.length > 6 && (
              <Link to='/photos' className='hover:text-accent'>
                See all photos
              </Link>
            )}
          </div>
        ) : (
          <div className='flex justify-between pb-4 pt-12 px-4 lg:px-0'>
            <h1 className=' text-lg'>
              <span className='text-accent'>Hot</span> Photos of Pork
            </h1>
            <Link to='/photos' className='hover:text-accent'>
              See all photos
            </Link>
          </div>
        )}
        <Gallery withDownloadButton={true}>
          <div className='flex flex-wrap'>
            {filteredPhotos.slice(0, 6).map((d, index) => {
              return <ImageGallery key={index} link={d.link} />;
            })}
            {filteredPhotos.length < 1 && (
              <div className='px-4 lg:px-0'>No photos found</div>
            )}
          </div>
        </Gallery>

        {/* VIDEOS */}
        {searchText != '' ? (
          <div className='flex justify-between pb-4 pt-12 px-4 lg:px-0'>
            <h1>
              <span className='text-accent'>Videos</span> Result
            </h1>
            {filteredVideos.length > 6 && (
              <Link to='/videos' className='hover:text-accent'>
                See all videos
              </Link>
            )}
          </div>
        ) : (
          <div className='flex justify-between pb-4 pt-12 px-4 lg:px-0'>
            <h1 className=' text-lg'>
              <span className='text-accent'>Hot</span> Videos of Pork
            </h1>
            <Link to='/videos' className='hover:text-accent'>
              See all videos
            </Link>
          </div>
        )}

        <Gallery>
          <div className='flex flex-wrap'>
            {filteredVideos.slice(0, 6).map((v, index) => {
              return (
                <VideoGallery
                  key={index}
                  video={v.video}
                  thumbnail={v.thumbnail}
                />
              );
            })}
            {filteredVideos.length < 1 && (
              <div className='px-4 lg:px-0'>No videos found</div>
            )}
          </div>
        </Gallery>
      </div>
    </div>
  );
}

export default Home;
