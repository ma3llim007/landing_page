import { Box, Button, Container, styled, Typography } from "@mui/material";
import gsap from "gsap";
import Grid from "@mui/material/Grid";
import { useEffect, useRef } from "react";
import StarIcon from "@mui/icons-material/Star";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import theme from "../theme";

const HeroSection = styled(Box)({
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "#0D0D0D",
});

const StyledText = styled("span")({
    fontStyle: "italic",
    color: "#A0A0A0",
    textDecoration: "underline",
    textDecorationThickness: "2px",
});

const Wrapper = styled("div")({
    position: "relative",
    width: 200,
    height: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
        width: 150,
        height: 150,
    },
});

const RotatingText = styled("svg")({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    transformBox: "fill-box",
});

const CenterIcon = styled(StarIcon)({
    color: theme.palette.grey[500],
    fontSize: 60,
    zIndex: 2,
});

const RoundedIcon = styled("div")({
    width: 70,
    height: 70,
    backgroundColor: "#505050",
    top: "-25px",
    left:"45px",
    position: "absolute",
    borderRadius: "50%",
    opacity: "0.7",
});

const Hero: React.FC = () => {
    const titleRef = useRef<HTMLHeadingElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const svgRef = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        // Animate title and button
        gsap.from([titleRef.current, buttonRef.current], {
            y: 30,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
        });

        // Rotate the SVG circle infinitely, slow rotation
        gsap.to(svgRef.current, {
            rotate: 360,
            duration: 20,
            repeat: -1,
            ease: "linear",
            transformOrigin: "50% 50%",
        });
    }, []);

    return (
        <HeroSection>
            <Container>
                <Grid container spacing={4} alignItems="center">
                    <Grid size={{ lg: 9 }}>
                        <Typography
                            ref={titleRef}
                            variant="h2"
                            sx={{
                                fontWeight: 800,
                                fontSize: { xs: "2.2rem", sm: "3rem", md: "3.5rem", lg: "5rem" },
                                color: "#FFFFFF",
                                lineHeight: 1.2,
                            }}
                            gutterBottom
                        >
                            Driving Results <br />
                            with <StyledText>Creative Digital</StyledText> <br />
                            Solutions
                        </Typography>
                        <Typography variant="body1" sx={{ color: "#CCCCCC", fontSize: "1.1rem", maxWidth: 500, position: "relative", left: "380px", top: "-55px" }}>
                            Our team of experts is dedicated to helping you achieve your digital goals. From website design and development to SEO, PPC advertising, and social media marketing.
                        </Typography>
                        <Button
                            ref={buttonRef}
                            variant="outlined"
                            sx={{
                                width: 150,
                                height: 150,
                                borderRadius: "50%",
                                border: "2px solid #505050",
                                color: "#FFFFFF",
                                textTransform: "uppercase",
                                px: 2,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignContent: "center",
                                fontSize: "0.8rem",
                                letterSpacing: "1px",
                                position: "absolute",
                                backgroundColor: "transparent",
                                opacity: 0.5,
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    opacity: 0.8,
                                    borderColor: "#888",
                                },
                            }}
                        >
                            <Box component="span" sx={{ textAlign: "start", lineHeight: 1.4 }}>
                                Explore Our
                                <br />
                                Services
                            </Box>
                            <ArrowOutwardIcon
                                sx={{
                                    position: "absolute",
                                    right: 15,
                                    bottom: 30,
                                    fontSize: "20px",
                                }}
                            />
                        </Button>
                    </Grid>
                    <Grid size={{ lg: 3 }} sx={{ minWidth: "full", display: "flex", justifyContent: "flex-end" }}>
                        <Wrapper>
                            <RoundedIcon />
                            <CenterIcon />
                            <RotatingText ref={svgRef} viewBox="0 0 200 200" aria-label="Rotating text circle">
                                <defs>
                                    <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
                                </defs>
                                <text
                                    fill="#FFFFFF"
                                    fontSize="17"
                                    letterSpacing="2"
                                    style={{
                                        fontFamily: '"Inter", sans-serif',
                                        fontWeight: 500,
                                    }}
                                >
                                    <textPath xlinkHref="#circlePath" startOffset="0%">
                                        PROJECT SHOWCASE · PROJECT SHOWCASE ·
                                    </textPath>
                                </text>
                            </RotatingText>
                        </Wrapper>
                    </Grid>
                </Grid>
            </Container>
        </HeroSection>
    );
};

export default Hero;
