import React from "react";
import { Link } from "react-router-dom";
import Homepage from "./Homepage";
import { Button, Box} from "@mui/material";
const ThankYou = () => {
  return (
    <div>
      <img src="Thankyou.jpg" className="center"/>
      <Box textAlign='center'>
      <Link to={'/homepage'}><Button variant="contained" color="secondary" sx={{ m: 2 }}>Home</Button></Link>
      <Link to={'/products'}><Button variant="contained" color="secondary" sx={{ m: 2 }}>Countinue Shopping</Button></Link>
      </Box>
    </div>
  )
}

export default ThankYou
