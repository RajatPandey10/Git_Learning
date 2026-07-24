const About = ()=>{
    return <>
     <div className="bg-gray-800 text-white p-4 rounded-lg m-4 flex flex-col gap-4">
        In this tutorial i have learned about Untracked, Tracked, Staging and commited stages.
        Learng some commands such as:
        <li className="ml-2 text-green-300"><span className="text-black bg-white px-2 py-1 rounded-lg ">git status -s</span> : this command use to check the status of the current and modified files.</li>
        <li className="ml-2 text-green-300"><span className="text-black bg-white px-2 py-1 rounded-lg ">git log --oneline</span> :  tells how many commit u had done till yet means works as a saved point.</li>
        <li className="ml-2 text-green-300"><span className="text-black bg-white px-2 py-1 rounded-lg ">git reset --hard HEAD~1</span> : delete the last commit and move head to the last commit and chenged the file also which delete those changed which u had done in your last commit</li>
        <li className="ml-2 text-green-300"><span className="text-black bg-white px-2 py-1 rounded-lg ">git reset --soft HEAD~1</span> : delete only the commit and files remains unchanged in staging stage.</li>
        <li className="ml-2 text-green-300"><span className="text-black bg-white px-2 py-1 rounded-lg ">git reset --mixed HEAD~1</span> : delete only the commit and files remains unchanged in the untracked stage.</li>
        
    </div>
    </>
}

export default About;