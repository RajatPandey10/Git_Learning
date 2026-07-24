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
        <div className='flex flex-col gap-4'>
            <h1 className='text-center text-lg bg-blue-300 text-black rounded mt-4'><span>Branching</span></h1>
            <p className="" >
                A branch in Git is an independent line of development. It allows developers to work on new features, bug fixes, or experiments without affecting the main codebase. Once the changes are tested and verified, the branch can be merged back into the main branch.
            </p>
            <li className="ml-2 text-green-300"><span className="text-black bg-white px-2 py-1 rounded-lg ">git branch name_of_your_branch</span> :for creating branch, you can use anyname </li>
            <li className="ml-2 text-green-300"><span className="text-black bg-white px-2 py-1 rounded-lg ">git branch</span> :to know how many branches are there or in which branch you are currently. </li>
            <li className="ml-2 text-green-300"><span className="text-black bg-white px-2 py-1 rounded-lg ">git switch name_of_your_branch</span> :for switching from one branch to other </li>
            <li className="ml-2 text-green-300"><span className="text-black bg-white px-2 py-1 rounded-lg ">git merge your_branch_Name</span> :for merging branches. </li>
            <li className="ml-2 text-green-300"><span className="text-black bg-white px-2 py-1 rounded-lg ">git branch -d your_branch_name</span> :for deleting branche. </li>
        
        </div>
        <div className='flex flex-col gap-4'>
            <h1 className='text-center text-lg bg-blue-300 text-black rounded mt-4'><span>CONFLICT</span></h1>
            <p className="" >
                A Git conflict (merge conflict) occurs when Git is unable to automatically merge changes because the same part of the same file has been modified differently in two branches. In this situation, the developer must manually resolve the conflict before completing the merge.
            </p>
            <h1>Has 4 methods to resolve conflict.</h1>
            <li className="ml-2 text-green-300"><span className="text-black bg-white px-2 py-1 rounded-lg ">Accept current change</span> :Merging current means main branch code only. </li>
            <li className="ml-2 text-green-300"><span className="text-black bg-white px-2 py-1 rounded-lg ">Accept incomming changes</span> :Merging other branch code. </li>
            <li className="ml-2 text-green-300"><span className="text-black bg-white px-2 py-1 rounded-lg ">Accept both changes</span> :Merging both. </li>
            <li className="ml-2 text-green-300"><span className="text-black bg-white px-2 py-1 rounded-lg ">compare changes</span> :for comaprision. </li>
        
        </div>
    </div>
    </>
}

export default About;