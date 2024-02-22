import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination=() =>{
  const{page, handlepagechange,totalPages}=useContext(AppContext);
  return (
    <div>
      <div>
        {
          page>1 &&
         (<button onClick={()=> handlepagechange(page-1)}>Back</button>) 
        }
         {
          page<totalPages &&
         (<button onClick={()=> handlepagechange(page+1)}>Next
         </button>) 
        }
        <p>Page{page} of {totalPages}</p>
      </div>
      </div>
  )
}

export default Pagination