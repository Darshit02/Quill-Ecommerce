import { Avatar, Grid, Box, Rating } from "@mui/material";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3} className="space-x-3">
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white bg-blue-500"
              sx={{ width: 56, height: 56 }}
            >
              D
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2">
            <div className="">
              <p className="font-semibold text-lg">Darshit</p>
              <p className="opacity-70">Feb 5,2024</p>
            </div>
          </div>
          <Rating value={4} precision={.5}name="half-rating" readOnly />
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
