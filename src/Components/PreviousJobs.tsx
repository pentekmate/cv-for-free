import { useCollapse } from 'react-collapsed';


export default function PreviousJobs(){
        const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    return (
        <div className="collapsible bg-gray-200 rounded-md">
            <div className="header" {...getToggleProps()}>
                {isExpanded ? 'Job title' : 'asd'}
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    <form action="" className='px-5'>
                        <div className="flex gap-8 w-full mt-4">
                            <div className="flex flex-col w-full">
                                <label htmlFor="prevJobTitle">Betölteni kívánt munkakör</label>
                                <input className="bg-white" type="text" name="prevJobTitle" onChange={(e)=>setPrevJobTitle(e.target.value)}/>
                            </div>
                            <div className="flex flex-col w-full">
                                <label htmlFor="employer">Munkáltató</label>
                                <input className="bg-white" type="text" name="employer" onChange={(e)=>setEmployer(e.target.value)}/>
                            </div>
                        </div>
                        <div className="flex gap-8 w-full mt-4">
                            <div className='flex gap-2'>
                                <div className="flex flex-col w-full">
                                    <label htmlFor="beginDate">Kezdés dátuma</label>
                                    <input className="bg-white" type="text" name="beginDate" onChange={(e)=>setBeginDate(e.target.value)}/>
                                </div>
                                <div className="flex flex-col w-full">
                                    <label htmlFor="endDate">Befejezés dátuma</label>
                                    <input className="bg-white" type="text" name="endDate" onChange={(e)=>setEndDate(e.target.value)}/>
                                </div>
                            </div>
                            <div className="flex flex-col w-full">
                                <label htmlFor="city">Helység</label>
                                <input className="bg-white" type="text" name="city" onChange={(e)=>setCity(e.target.value)}/>
                            </div>
                        </div>
                        <div className="flex gap-8 w-full">
                            
                           
                        </div>
                    </form>
                </div>
            </div>
        </div>
        );
    }

    
