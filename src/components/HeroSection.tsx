import { Box, Button, Container, styled, Typography } from "@mui/material";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const HeroSection = styled(Box)(({ theme }) => ({
    background: "0D0D0D",
    color: "#FFFFFF",
    minHeight: "70vh",
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
            opacity: 0,
            y: 30,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
        });
    }, []);

    return (
        <HeroSection>
            <Container maxWidth="lg">
                <Box maxWidth={"600px"}>
                    <Typography ref={titleRef} variant="h1" sx={{ fontWeight: 700 }} gutterBottom>
                        Driving Results with <StyledText>Creative Digital</StyledText> Solutions
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#C0C0C0", mb: 4 }}>
                        Our team of experts is dedicated to helping you achieve your digital goals. From website design and development to SEO, PPC advertising, and social media marketing.
                    </Typography>
                    <Button ref={buttonRef} variant="outlined" sx={{ color: "#FFFFFF", borderColor: "#505050" }}>
                        Explore Our Servies
                    </Button>
                </Box>
            </Container>
            <Circle ref={circleRef}>PROJECT SHOWCASE · PROJECT SHOWCASE ·</Circle>
        </HeroSection>
    );
};

export default Hero;
