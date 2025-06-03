import { Box, Container, styled, Typography } from "@mui/material";
import gsap from "gsap";
import Grid from "@mui/material/Grid";
import { useEffect, useRef } from "react";
import StarIcon from "@mui/icons-material/Star";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import theme from "../theme";

const HeroSection = styled(Box)(({ theme }) => ({
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    textAlign: "center",
    overflow: "hidden",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
        alignItems: "center",
    },
    [theme.breakpoints.up("lg")]: {
        position: "relative",
        padding: theme.spacing(8, 4),
    },
}));

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
    [theme.breakpoints.between("md", "lg")]: {
        display: "none",
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
    [theme.breakpoints.down("sm")]: {
        display: "none",
    },
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
});

const RoundedIcon = styled("div")({
    width: 50,
    height: 50,
    backgroundColor: "#505050",
    top: "-16px",
    left: "45px",
    position: "absolute",
    borderRadius: "50%",
    opacity: "0.7",
    [theme.breakpoints.down("sm")]: {
        display: "none",
    },
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
    [theme.breakpoints.up("lg")]: {
        width: 70,
        height: 70,
        top: "-20px",
        left: "50px",
    },
    [theme.breakpoints.between("md", "lg")]: {
        display: "none",
    },
});

const CircularButton = styled("button")(({ theme }) => ({
    width: 150,
    height: 150,
    borderRadius: "50%",
    border: "2px solid #505050",
    color: "#FFFFFF",
    textTransform: "uppercase",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    fontSize: "0.8rem",
    letterSpacing: "1px",
    position: "absolute",
    backgroundColor: "transparent",
    opacity: 0.7,
    transition: "all 0.3s ease",
    cursor: "pointer",
    outline: "none",
    borderStyle: "solid",
    "&:hover": {
        opacity: 0.8,
        borderColor: "#888",
    },
    "& > .arrow-icon": {
        position: "absolute",
        right: 15,
        bottom: 30,
        fontSize: 20,
    },
    "& > span": {
        textAlign: "start",
        lineHeight: 1.4,
    },
    [theme.breakpoints.down("sm")]: {
        height: 50,
        borderRadius: 10,
        fontSize: "0.8rem",
        letterSpacing: "1px",
        position: "static",
        "& > .arrow-icon": {
            display: "none",
        },
    },
    [theme.breakpoints.down("md")]: {
        height: 50,
        borderRadius: 10,
        fontSize: "0.8rem",
        letterSpacing: "1px",
        position: "static",
        "& > .arrow-icon": {
            display: "none",
        },
    },
     [theme.breakpoints.between("md", "lg")]: {
         height: 50,
        borderRadius: 10,
        fontSize: "0.8rem",
        letterSpacing: "1px",
        position: "static",
        "& > .arrow-icon": {
            display: "none",
        },
    },
}));

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
                <Grid
                    container
                    display="flex"
                    alignItems="center"
                    spacing={4}
                    justifyContent={{
                        xs: "center",
                        sm: "center",
                        md: "center",
                        lg: "flex-start",
                    }}
                    textAlign={{
                        xs: "center",
                        sm: "center",
                        md: "center",
                        lg: "start",
                    }}
                >
                    <Grid size={{ xs: 12, md: 12, lg: 9 }}>
                        <Typography
                            ref={titleRef}
                            variant="h2"
                            sx={{
                                fontWeight: 800,
                                fontSize: { xs: "2rem", sm: "3rem", md: "3.5rem", lg: "5rem" },
                                color: "#FFFFFF",
                                lineHeight: 1.2,
                                mb: 4,
                            }}
                            gutterBottom
                        >
                            Driving Results <br />
                            with <StyledText>Creative Digital</StyledText> <br />
                            Solutions
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: "#CCCCCC",
                                fontSize: { xs: "1rem", lg: "1.1rem" },
                                maxWidth: { lg: "500px" },
                                position: { lg: "relative" },
                                left: { lg: "380px" },
                                top: { lg: "-55px" },
                                mb: 2,
                            }}
                        >
                            Our team of experts is dedicated to helping you achieve your digital goals. From website design and development to SEO, PPC advertising, and social media marketing.
                        </Typography>
                        <CircularButton
                            sx={{
                                mx: { xs: "auto", sm: "auto", md: 0 },
                                display: "inline-flex",
                            }}
                        >
                            <span>
                                Explore Our
                                <br />
                                Services
                            </span>
                            <ArrowOutwardIcon className="arrow-icon" />
                        </CircularButton>
                    </Grid>
                    <Grid size={{ xs: 0, sm: 0, md: 0, lg: 3 }} sx={{ minWidth: "full", display: "flex", justifyContent: "flex-end" }}>
                        <Wrapper>
                            <RoundedIcon />
                            <CenterIcon />
                            <RotatingText ref={svgRef} viewBox="0 0 200 200" aria-label="Rotating text circle">
                                <defs>
                                    <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
                                </defs>
                                <text
                                    fill="#FFFFFF"
                                    fontSize="1rem"
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
