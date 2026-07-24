import {Link} from "react-router-dom";

const Home = ()=>{
    return <>
        <div className="bg-gray-800 text-white flex items-center justify-center mt-5  p-40 rounded-xl">
            <div className="text-center">
                <h1 className='text-lg'>Welcome! <br/>

                        This website showcases everything I have learned about Git and GitHub throughout my learning journey. The concepts presented here were learned through a YouTube tutorial and hands-on practice.

                        To explore the topics I have covered, click the button below or navigate to the "About This Page" section from the navigation bar.
                </h1>
                <Link to="/about">
                    <button 
                    className="bg-green-400 hover:bg-green-500 rounded-xl  p-2 mt-2 text-lg  active:scale-95  transition-transform duration-150"> 
                    About</button>
                </Link>
            </div>
        </div>
    </>
}

export default Home