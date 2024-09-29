import { FC } from 'react';
import { NewsList } from '@/components/NewsList';
import { getNewsData } from '@/lib/getNewsData';
import { NewsResponse } from '@/types/newResponse';

type PropsTypes = {
    searchParams?: { item: string };
};

const SearchPage: FC<PropsTypes> = async ({ searchParams }) => {
    const news: NewsResponse = await getNewsData(
        'general',
        searchParams?.item,
        true
    );
    return (
        <div>
            <h1>
                Search Results for :{' '}
                <span className='underline decoration-orange-400 decoration-2'>
                    {searchParams?.item}
                </span>
            </h1>
            <NewsList news={news} />
        </div>
    );
};

export default SearchPage;
