import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {
   Navbar,
   Feed,
   SearchFeed,
   VideoDetail,
   ChannelDetail,
} from "./components";

const App = () => {
   return (
      <BrowserRouter>
         <Box sx={{ bgcolor: "#000" }}>
            <Navbar />
            <Routes>
               <Route exact path="/" element={<Feed />} />
               <Route exact path="/video/:id" element={<VideoDetail />} />
               <Route exact path="/channel/:id" element={<ChannelDetail />} />
               <Route
                  exact
                  path="/search/:searchTerm"
                  element={<SearchFeed />}
               />
            </Routes>
         </Box>
      </BrowserRouter>
   );
};

export default App;
