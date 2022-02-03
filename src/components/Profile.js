import * as React from "react";
import Typography from "./Typography";
import { styled } from "@mui/material/styles";
import { getWeatherByLocation } from "./../api/api";
import withRoot from "./withRoot";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ProfileAppBar from "./views/ProfileAppBar";
import AppFooter from "./views/AppFooter";
import MusicPlayer from "./MusicPlayer";
import { useAuth } from "../contexts/AuthContext";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import FormButton from "./form/FormButton";

const Background = styled(Box)({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundRepeat: "repeat",
  zIndex: -2,
});

function Profile() {
  const { currentUser } = useAuth();

  const [weather, setWeather] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [location, setLocation] = React.useState("11101");
  const [currentLocation, setCurrentLocation] = React.useState();

  React.useEffect(() => {
    setLoading(true);
    const response = getWeatherByLocation(location);
    response.then((weatherResp) => setWeather(weatherResp));
    setLoading(false);
  }, [location]);

  const handleChange = (e) => {
    setCurrentLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setLocation(currentLocation);
  };

  const showWeatherInfo = () => {
    return weather ? (
      <>
        Seems like you are at {weather.location.name}, {weather.location.region}
        .
        <br />
        <Container
          sx={{
            mt: 2,
            mb: 2,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={weather.current.condition.icon}
            alt="weather condition icon"
          />
        </Container>
        Current Weather: {weather.current.condition.text}
        <br />
        Temp: {weather.current.temp_f}&deg;F, feels like{" "}
        {weather.current.feelslike_f}&deg;F
      </>
    ) : (
      "Please wait while we gather some weather info..."
    );
  };

  return (
    <>
      <ProfileAppBar />
      <Container
        sx={{
          mb: 14,
          mt: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Background
          sx={{
            backgroundColor: "#7fc7d9", // Average color of the background image.
            backgroundPosition: "center",
          }}
        />
        <Typography color="inherit" align="center" variant="h2" marked="center">
          Welcome back!
        </Typography>
        <Typography variant="body2" color="inherit" sx={{ mt: 2, mb: 3 }}>
          Currently logged in as {currentUser.email}
        </Typography>
        <Typography
          color="inherit"
          align="center"
          variant="h5"
          sx={{ mb: 5, mt: { sx: 2, sm: 5 } }}
        >
          {showWeatherInfo()}
        </Typography>
        <FormControl>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <TextField
              autoComplete="location"
              autoFocus
              disabled={loading}
              fullWidth
              label="Location"
              margin="normal"
              name="location"
              size="large"
              value={currentLocation}
              onChange={handleChange}
            />
            <FormButton
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
              size="large"
              color="secondary"
              fullWidth
            >
              {loading ? "Checking…" : "Change Location"}
            </FormButton>
          </Box>
        </FormControl>
        {weather && (
          <Card mt={5}>
            <CardContent>
              <MusicPlayer weatherCode={weather.current.condition.code} />
            </CardContent>
          </Card>
        )}
      </Container>
      <AppFooter />
    </>
  );
}

export default withRoot(Profile);
