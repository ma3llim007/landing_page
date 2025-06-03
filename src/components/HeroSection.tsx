import { Box, Button, Container, styled, Typography } from "@mui/material";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const HeroSection = styled(Box)(({ theme }) => ({
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    padding: theme.spacing(8, 4),
}));

const StyledText = styled("span")({
    fontStyle: "italic",
    color: "#B3B3B3",
});

const Circle = styled(Box)(({ theme }) => ({
    position: "absolute",
    right: 40,
    top: "50%",
    transform: "translateY(-50%)",
    border: "1px solid #333333",
    width: 140,
    height: 140,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    textAlign: "center",
    color: "#888",
    writingMode: "vertical-rl",
    textOrientation: "mixed",
}));

const Hero: React.FC = () => {
    const titleRef = useRef<HTMLHeadingElement | null>(null);
    const buttonRef = useRef<HTMLHeadingElement | null>(null);
    const circleRef = useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {
        gsap.from([titleRef.current, buttonRef.current, circleRef.current], {
            y: 30,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
        });
    }, []);

    return (
        <HeroSection>
            <Container maxWidth="lg">
                <Box maxWidth={"800px"} border={"1px solid red"}>
                    <Typography ref={titleRef} variant="h2" color="primary" sx={{ fontWeight: 700 }} gutterBottom>
                        Driving Results
                    </Typography>
                    <Typography ref={titleRef} variant="h2" color="primary" sx={{ fontWeight: 700 }} gutterBottom>
                        with <StyledText>Creative Digital</StyledText>
                    </Typography>
                    <Typography ref={titleRef} variant="h2" color="primary" sx={{ fontWeight: 700 }} gutterBottom>
                        Solutions
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#C0C0C0", mb: 4 }}>
                        Our team of experts is dedicated to helping you achieve your digital goals. From website design and development to SEO, PPC advertising, and social media marketing.
                    </Typography>
                    <Button ref={buttonRef} variant="outlined" sx={{ color: "#FFFFFF", borderColor: "#505050" }}>
                        Explore Our Servies
                    </Button>
                </Box>
                <Circle ref={circleRef}>PROJECT SHOWCASE · PROJECT SHOWCASE ·</Circle>
            </Container>
        </HeroSection>
    );
};

export default Hero;
