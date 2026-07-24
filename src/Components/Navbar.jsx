import {Link} from "react-router-dom";
const Navbar = ({name})=>{
    return <>
        <div className="flex justify-between bg-gray-800 text-white p-4">
            <h1 className="bg-gray-600 p-2 rounded-xl ">Git & Github</h1>
            <h1 className="bg-gray-600 p-2 rounded-xl">Learning From Shreyash coding school</h1>
            <Link to='/about' className="bg-gray-600 p-2 rounded-xl">About this page</Link>
        </div>
    </>
}

export default Navbar