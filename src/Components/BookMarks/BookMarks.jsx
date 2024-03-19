import { PropTypes } from 'prop-types';
import BookMark from '../BookMark/BookMark';
const BookMarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3">
            <div>
                <h3 className='text-4xl'>Reading Time: {readingTime}</h3>
            </div>
            <h2>bookmarks: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmar => <BookMark key={bookmar.id}  bookmar={bookmar}></BookMark>)
            }
        </div>
    );
};
BookMarks.propTypes ={
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default BookMarks;