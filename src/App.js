import Pagination from "./components/Pagination";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";

function App() {
  const {fetchBlogPosts}=useContext(AppContext);

  useEffect(()=>{
fetchBlogPosts();
  },[])
  return (
   <div>
   <Header/>
   <Blogs/>
   <Pagination/>
   </div>
    
  );
}

export default App;
