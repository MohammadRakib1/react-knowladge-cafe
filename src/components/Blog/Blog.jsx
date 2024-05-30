import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmark, handlemarkAsRead }) => {
    const { title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of the title${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className='mr-4'>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)}><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl mb-4'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span className='mr-4' key={idx}><a href=''>#{hash}</a></span>)
                }
            </p>
            <button onClick={() => handlemarkAsRead(reading_time)} className='mt-4 text-purple-800 font-bold underline'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handlemarkAsRead: PropTypes.func
}

export default Blog;