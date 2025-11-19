import { LineChart } from "@mui/x-charts";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from "react";




const PagestoRead = () => {

    const  [Book ,setBook] = useState([])
    const [ , setLoading] = useState(true)
useEffect(() => {
  fetch('/booksData.json')
    .then(res => res.json())
    .then(data => {
      setBook(data);        
     
    })
    .catch(err => {
      console.error(err);
      setLoading(false);  
    });
}, []);
 
const bookName = Book.map(book=>book.bookName)
const totalPages = Book.map(book=>book.totalPages)

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="body2" sx={{ mb: 2 }}>
       <h2 className="text-center py-6 font-bold"> Books Line Chart</h2>
      </Typography>

      <LineChart
        height={300}
        series={[{ data: totalPages, label: 'Total Pages', area: true }]}
        xAxis={[{ data: bookName, scaleType: 'point' }]}
      />
    </Box>
  );
};

export default PagestoRead;
