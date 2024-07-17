import { CircularProgress } from "@mui/material"
import {Box} from "@mui/material"

const SuspenseLoader=()=> {
  return (
    <Box>
    <CircularProgress/>
    <p>Loading...</p>
    </Box>
  )
}

export default SuspenseLoader
