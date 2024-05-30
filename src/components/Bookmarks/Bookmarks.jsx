import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-5 mt-8 rounded-lg">
            <div className='bg-[#6047EC1A] border border-[#6047EC] rounded-lg'>
                <h3 className='text-[24px] text-center text-[#6047EC] p-4'>Spent time on read : {readingTime}</h3>
            </div>
            <h2 className="text-2xl my-4 text-center">Bookmarked Blogs : {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;