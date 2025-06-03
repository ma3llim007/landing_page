import { Grid, styled } from "@mui/material";

const ImageWrapper = styled(Grid)({
    position: "relative",
    width: "70%",
    height: "500px", // Adjust as needed
    overflow: "hidden",
    border: "1px solid red",
    top: "-270px",
    left: "30%",
});

const OverlayImage = styled("img")({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 2,
    position: "relative",
    right: 0,
});

const OverLayImage = ({ image }: { image: string }) => {
    return (
        <Grid container>
            <ImageWrapper>
                <OverlayImage src={image} alt="Overlay Image" />
            </ImageWrapper>
        </Grid>
    );
};

export default OverLayImage;
