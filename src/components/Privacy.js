import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "./Typography";
import AppAppBar from "./views/AppAppBar";
import AppFooter from "./views/AppFooter";
import withRoot from "./withRoot";

function Privacy() {
  return (
    <React.Fragment>
      <AppAppBar />
      <Container>
        <Box sx={{ mt: 7, mb: 12 }}>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Privacy
          </Typography>
          <Card sx={{ maxWidth: 300, margin: "auto", marginTop: 8 }}>
            <CardContent>
              <Typography variant="body2">
                We respect your privacy. We would never sell any of your data.
                Ever.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Privacy);
