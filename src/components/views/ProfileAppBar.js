import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppBar from "../AppBar";
import Toolbar from "../Toolbar";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { Alert } from "@mui/material";
import Typography from "../Typography";

const rightLink = {
  fontSize: 16,
  color: "common.white",
  ml: 3,
};

function ProfileAppBar() {
  const [error, setError] = React.useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/"
            sx={{ fontSize: 24 }}
          >
            {"+Mindful"}
          </Link>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <Typography variant="body2" color="inherit" sx={rightLink}>
              {currentUser.email}
            </Typography>
            <Link
              variant="h6"
              underline="none"
              onClick={handleLogout}
              sx={{ ...rightLink, color: "secondary.main" }}
            >
              {"Log Out"}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
      {error && <Alert severity="error">{error}</Alert>}
    </div>
  );
}

export default ProfileAppBar;
