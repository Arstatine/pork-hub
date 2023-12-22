import MarketPlace from '../../components/MarketPlace';
import { markets } from '../../utils';
import { useState } from 'react';

function Market() {
  const [count, setCount] = useState(6);

  return (
    <div className='flex justify-center py-6 grow'>
      <div className='container'>
        <h1 className='px-4 lg:px-2 text-lg mb-2'>
          <span className='text-accent'>Hot</span> Market Place for Pork
        </h1>
        <div className='flex flex-wrap justify-center'>
          {markets.slice(0, count).map((market, index) => {
            return (
              <MarketPlace
                key={index}
                title={market.title}
                logo={market.logo}
                link={market.link}
              />
            );
          })}
        </div>
        {count < markets.length && (
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

export default Market;
