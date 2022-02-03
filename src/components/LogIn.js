import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "./Typography";
import AppFooter from "./views/AppFooter";
import AppAppBar from "./views/AppAppBar";
import AppForm from "./views/AppForm";
import FormButton from "./form/FormButton";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import withRoot from "./withRoot";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { Alert } from "@mui/material";

function LogIn() {
  const [form, setForm] = React.useState({ email: "", password: "" });
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const { login } = useAuth();
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(form.email, form.password);
      history.push("/profile");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  };

  return (
    <React.Fragment>
      <AppAppBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign In
          </Typography>
          <Typography variant="body2" align="center">
            {"Not a member yet? "}
            <Link href="/signup/" align="center" underline="always">
              Sign Up here
            </Link>
          </Typography>
        </React.Fragment>
        {error && <Alert severity="error">{error}</Alert>}
        <FormControl>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <TextField
              autoComplete="email"
              autoFocus
              disabled={loading}
              fullWidth
              label="Email"
              margin="normal"
              name="email"
              required
              size="large"
              value={form.email}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              size="large"
              disabled={loading}
              required
              name="password"
              autoComplete="current-password"
              label="Password"
              type="password"
              margin="normal"
              value={form.password}
              onChange={handleChange}
            />
            <FormButton
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
              size="large"
              color="secondary"
              fullWidth
            >
              {loading ? "In progress…" : "Sign In"}
            </FormButton>
          </Box>
        </FormControl>
        <Typography align="center">
          <Link underline="always" href="/forgotpassword/">
            Forgot password?
          </Link>
        </Typography>
      </AppForm>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(LogIn);
