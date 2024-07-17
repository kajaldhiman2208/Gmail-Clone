import { Box } from "@mui/material";
import { useRouteError } from "react-router-dom";

const ErrorComponent=()=> {
    const error= useRouteError();
    console.log(error);
  return (
    <Box style={{ marginLeft:250 }}>
        <p>There is an error Loading Page
            </p>  
    </Box>
  )
}

export default ErrorComponent
