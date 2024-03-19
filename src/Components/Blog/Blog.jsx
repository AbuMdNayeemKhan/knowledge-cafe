import { CiBookmark } from "react-icons/ci";
import PropTypes from 'prop-types'; 

const Blog = ({blog, handleAddToBookmark, handlesetReadingTime}) => {
    const {title, cover, reading_time, author, post_date, author_img, hashtags} = blog;
    return (
        <div className="mb-20 space-y-4">
            <img src={cover} alt={`cover pic of the: ${title}`} className='h-[450px] w-[845px] object-cover' />
            <div className='flex justify-between mb-4'>
                <div className='flex gap-6'>
                    <img src={author_img} alt={author} className='h-[60px] w-[60px] rounded-full object-cover' />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{post_date}</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <span>{reading_time} Min Read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className="text-2xl"><CiBookmark></CiBookmark></button>
                </div>
            </div>
            <h1 className='text-4xl'>{title}</h1>
            <p>
                {
                    hashtags.map((hash, i) => <a key={i} href="#">#{hash} </a>)
                }
            </p>
            <button className="text-purple-600 font-bold underline" onClick={() => handlesetReadingTime(reading_time)}>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handlesetReadingTime: PropTypes.func
}

export default Blog;