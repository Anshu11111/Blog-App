import { createContext, useState } from "react";
import { baseurl } from "../baseurl";

export const AppContext=createContext();

 export default function AppContextProvider ({children}){
    const [loading,setloading]=useState(false);
    const [posts,setposts]=useState([]);
    const [page,setpage]=useState(1);
    const [totalPages,settotalpage]=useState(null);

async function fetchBlogPosts(page=1){
    setloading(true);
    let url=`${baseurl}?page=${page}`;
    try{
const result=await fetch(url);
const data=await result.json();
setpage(data.page);
setposts(data.posts);
settotalpage(data.totalPages);

    }
    catch(error){
console.log("Error in fetching data");
setpage(1);
setposts([]);
settotalpage(null);
    }
    setloading(false);
}
function handlepagechange(){
    setpage(page);
    fetchBlogPosts(page);
}

    const value={
        posts,
        setposts,
        loading,
        setloading,
        page,
        setpage,
        totalPages,
        settotalpage,
        fetchBlogPosts,
        handlepagechange
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>;
}