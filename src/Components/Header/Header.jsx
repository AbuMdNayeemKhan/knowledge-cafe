import profile from "../../assets/images/profile-images.jpg";
const Header = () => {
    return (
        <div className="flex justify-between items-center p-4 mx-4 border-b-2">
            <h1 className='text-4xl font-bold p-5'>Knowledge Cafe</h1>
            <img src={profile} alt="" className="h-[50px] w-[50px] object-cover object-top rounded-full" />
        </div>
    );
};

export default Header;