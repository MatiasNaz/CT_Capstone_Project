import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import Typography from "./Typography";
import AppFooter from "./views/AppFooter";
import AppAppBar from "./views/AppAppBar";
import AppForm from "./views/AppForm";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import FormButton from "./form/FormButton";
import withRoot from "./withRoot";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { Alert } from "@mui/material";

function SignUp() {
  const [form, setForm] = React.useState({ email: "", password: "" });
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const { signup } = useAuth();
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
      await signup(form.email, form.password);
      history.push("/profile");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  };

  return (
    <React.Fragment>
      <AppAppBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign Up
          </Typography>
          <Typography variant="body2" align="center">
            <Link href="/login/" underline="always">
              Already have an account?
            </Link>
          </Typography>
        </React.Fragment>
        {error && <Alert severity="error">{error}</Alert>}
        <FormControl>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 6 }}
          >
            <TextField
              autoComplete="email"
              disabled={loading}
              fullWidth
              label="Email"
              margin="normal"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              disabled={loading}
              required
              name="password"
              autoComplete="new-password"
              label="Password"
              type="password"
              margin="normal"
              value={form.password}
              onChange={handleChange}
            />
            <FormButton
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
              color="secondary"
              fullWidth
            >
              {loading ? "In progress…" : "Sign Up"}
            </FormButton>
          </Box>
        </FormControl>
      </AppForm>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(SignUp);
