import { PropTypes } from 'prop-types';
import BookMark from '../BookMark/BookMark';
const BookMarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3">
            <h2>bookmarks: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmar => <BookMark key={bookmar.id}  bookmar={bookmar}></BookMark>)
            }
        </div>
    );
};
BookMarks.propTypes ={
    bookmarks: PropTypes.array
}
export default BookMarks;