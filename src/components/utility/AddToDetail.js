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
    console.log("bookd ");
  } else {
    Storedlist.push(id);
    const  storedList = JSON.stringify(Storedlist) 
    localStorage.setItem("read-list",storedList)
  }
};


const addToStoredWishlist  =(id)=>{

const storedList = getStoredWishlist()
if(!storedList.includes()){

storedList.push(id)
localStorage.setItem('wishlist',JSON.stringify(storedList))

}else{

    console.log("This book is already in the Wishlist!");
}


}
export {AddToostoredReadlist ,getstoredReadLidt,addToStoredWishlist ,getStoredWishlist};
