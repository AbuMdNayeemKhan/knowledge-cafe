import PropTypes from 'prop-types';

const BookMark = ({bookmar}) => {
    const {title} = bookmar;
    return (
        <div className='bg-slate-200 p-4 m-4'>
            <h3 className='text-3xl'>{title}</h3>
        </div>
    );
};

BookMark.propTypes = {
    bookmark: PropTypes.object
}

export default BookMark;