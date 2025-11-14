import { toast } from "react-toastify";

const getstoredReadLidt = () => {
  const storedListStr = localStorage.getItem("read-list");

  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};


const getStoredWishlist =()=>{



    const storedListStr  = localStorage.getItem('wishlist')
   return storedListStr? JSON.parse(storedListStr) :[]; 
}

const AddToostoredReadlist = (id) => {
  const Storedlist = getstoredReadLidt();

  if (Storedlist.includes(id)) {
    // console.log("bookd ");
    toast.error('Already read this book!')
  } else {
    Storedlist.push(id);
    const  storedList = JSON.stringify(Storedlist) 
    localStorage.setItem("read-list",storedList)
    toast.success('Added to Read List!')
  }

};


const addToStoredWishlist  =(id)=>{

const storedList = getStoredWishlist()

if(!storedList.includes()){

storedList.push(id)
localStorage.setItem('wishlist',JSON.stringify(storedList))
toast.success('Added to Wish List!')

}else{
console.log("red");

  toast.error('Added to Wish List!')
}


}
export {AddToostoredReadlist ,getstoredReadLidt,addToStoredWishlist ,getStoredWishlist};
