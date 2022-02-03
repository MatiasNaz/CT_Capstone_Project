import * as React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "./Typography";
import AppAppBar from "./views/AppAppBar";
import AppFooter from "./views/AppFooter";
import withRoot from "./withRoot";

function Terms() {
  return (
    <React.Fragment>
      <AppAppBar />
      <Container>
        <Box sx={{ mt: 7, mb: 12 }}>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Terms
          </Typography>
          <Card sx={{ maxWidth: 300, margin: "auto", marginTop: 8 }}>
            <CardContent>
              <Typography variant="body2">
                By using this site, you agree to all our terms and conditions.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Terms);
