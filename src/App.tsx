import { Typography } from "@mui/material";
import Hero from "./components/HeroSection";
import ImageWithBackgroundEffect from "./components/Image";

const App = () => {
    return (
        <>
            <Hero />
            <ImageWithBackgroundEffect imageUrl="https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg" alt="Team photo">
                <Typography variant="h6" sx={{ color: "white" }}>
                    Our Creative Team
                </Typography>
            </ImageWithBackgroundEffect>
        </>
    );
};

export default App;
