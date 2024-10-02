import GeographyChart from "../../components/GeographyChart";
import { Box } from "@mui/material";
import Header from "../../components/Header";

const Line = () => {
    return(
        <Box m="20px">
            <Header title="Geography Chart" subtitle="Simple Geography Chart" />
            <Box height="75vh">
                <GeographyChart />
            </Box>
        </Box>
    );
}

export default Line;