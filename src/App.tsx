import Hero from "./components/HeroSection";
import OverLayImage from "./components/OverLayImage";
import studentImage from "./assets/student.jpg";
const App = () => {
    return (
        <>
            <Hero />
            <OverLayImage image={studentImage} />
        </>
    );
};

export default App;
