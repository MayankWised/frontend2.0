
import Avatar from '../../../components/ui/others/Avatar'
import IconButton from '../../../components/ui/buttons/IconButton'
import { editableIcon, home, libraryIcon, message, settingIcon } from '../../../assets'
import './RecentComponentText'
import RecentComponentText from './RecentComponentText'
import Divider from '../../../components/ui/others/Divider'

//dummy data
import data from '../dummydata/recent.json'
import { useState } from 'react'

// Temporary Name of The Component.
const SectionA = () => {
   const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the data based on the current page
  const displayedData = data.slice(startIndex, endIndex);

  const handlePageChange = (newPage:any) => {
    setCurrentPage(newPage);
  };
  return (
    <div className='w-[25%] h-[50%] border-[1px] border-[#E5E5E5] rounded-r-lg  relative px-5 py-5'>
      
         <div className='flex flex-row items-center gap-4 mt-3'>
            <Avatar size={40}/>
            <div className='flex flex-col'>
                <h3 className='font-bold text-sm'>Robert Green</h3>
                <p className='font-normal text-sm'>Software Developer</p>
            </div>
         </div>
         
         <div className='flex flex-col gap-3  mt-3'>
              <IconButton icon={home} text={"Home"} direction={'left'}/>
              <IconButton icon={message} text={"Message"} direction={'left'}/>
              <IconButton icon={libraryIcon} text={"Browse Library"} direction={'left'}/>
              <IconButton icon={editableIcon} text={"Learn By Stream"} direction={'left'}/>
              <IconButton icon={settingIcon} text={"Settings"} direction={'left'}/>
         </div>

         <div className='mx-[-20px] py-2'>
            <Divider/>
         </div>

         <div className='mt-3 flex flex-col'>
        <h5 className='text-[18px] font-inter font-[700]'>Recent</h5>
        <div className='py-3 gap-2 flex flex-col'>
          {displayedData.map((info) => (
            <RecentComponentText
              key={info.id} // Make sure to use a unique key for each item
              HeaderText={`${info.title}`}
              BodyText={`${info.modified}`}
            />
          ))}
        </div>
        {/* Pagination controls */}
        <div className='mt-3 flex flex-row items-center justify-between'>
         <div className=''>
            <h5 className='text-[11px] font-inter'>{`Showing ${itemsPerPage} of ${data.length} items`}</h5>
         </div>
         <div className='flex flex-row'>
            {[...Array(Math.ceil(data.length / itemsPerPage)).keys()].map((page) => (
               <button
               key={page + 1}
               onClick={() => handlePageChange(page + 1)}
               className={`mx-2 px-3 py-1 font-inter text-sm ${
                  currentPage === page + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
               } rounded`}
               >
               {page + 1}
               </button>
            ))}
         </div>
        </div>
        
      </div>
         
         <div className='mx-[-20px] py-2'>
            <Divider/>
         </div>

         <div className='text-[20px] font-inter font-[400] cursor-pointer text-center mt-3'>
            <h5>See all</h5>
         </div>
    </div>
  )
}

export default SectionA