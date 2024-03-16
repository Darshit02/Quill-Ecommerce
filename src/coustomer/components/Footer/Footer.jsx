import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-gray-900 text-white text-center mt-10"
        container
        sx={{ backgroundColor: "gray.900", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            <strong>Company</strong>
            <div>
              <Button className="pb-5" variant="h6">
                About
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6">
                Blog
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6">
                press
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6">
                Privcy Policy
              </Button>
            </div>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            <strong>Legal</strong>
            <div>
              <Button className="pb-5" variant="h6">
                Our Policy
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6">
                Terms of Service
              </Button>
            </div>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            <strong>Solutions</strong>
            <div>
              <Button className="pb-5" variant="h6">
                Marketing
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6">
                Analytics
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6">
                Commerce
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6">
                Support
              </Button>
            </div>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            <strong>Documentation</strong>
            <div>
              <Button className="pb-5" variant="h6">
                Guides
              </Button>
            </div>
          </Typography>
        </Grid>
      
      </Grid>
    </div>
  );
};

export default Footer;
