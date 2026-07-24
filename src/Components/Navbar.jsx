import {Link} from "react-router-dom";
const Navbar = ({name})=>{
    return <>
        <div className="flex justify-between bg-gray-800 text-white p-4">
            <Link to='/' className="bg-gray-600 p-2 rounded-xl ">Git & Github</Link>
            <h1 className=" p-2 rounded-xl text-green-400">Learning From Shreyash coding school</h1>

            <div className='flex gap-2'>
                 <Link to='/about' className="bg-gray-600 p-2 rounded-xl px-4">About</Link>
                <Link to='/contact' className="bg-gray-600 p-2 rounded-xl px-4">Contact</Link>
        
            </div>    
        </div>
    </>
}

export default Navbar