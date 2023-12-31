import {
    Alert,
    Button,
    CardActions,
    CardContent,
    CardHeader,
    Divider,
    TextField,ThemeProvider,createTheme
  } from "@mui/material";
  import React, { useState } from "react";
  import RefreshIcon from "@mui/icons-material/Refresh";
  import "./style.css";
  
  export const Captcha = () => {
    const theme =createTheme();
    const randomString = Math.random().toString(36).slice(8);
    const [captcha, setCaptcha] = useState(randomString);
    const [text, setText] = useState("");
    const [valid, setValid] = useState(false);
    const [success, setSuccess] = useState(false);
  
    const refreshString = () => {
      setText("");
      setCaptcha(Math.random().toString(36).slice(8));
    };
  
    const matchCaptcha = (event) => {
      event.preventDefault();
      if (text === captcha) {
        setValid(false);
        setSuccess(true);
      } else {
        setValid(true);
        setSuccess(false);
      }
    };
    return (
      <ThemeProvider theme={theme}>
      <React.Fragment>
        {success && (
          <Alert variant="outlined" sx={{ marginBottom: "50px" }}>
            Successful
          </Alert>
        )}
        <div className="card">
          <Divider />
          <CardContent>
            <CardActions>
              <div className="h3">{captcha}</div>
              <Button
                startIcon={<RefreshIcon />}
                onClick={() => refreshString()}
              ></Button>
            </CardActions>
            <form id="cap"onSubmit={matchCaptcha}>
              <TextField
                label="Enter Captcha"
                focused
                value={text}
                fullWidth
                onChange={(e) => setText(e.target.value)}
                error={valid}
                helperText={valid && "Invalid Captcha"}
              />
              <Button
                variant="contained"
                color="success"
                type="submit"
                sx={{ marginTop: "1px" }}
              >
                Submit
              </Button>
            </form>
          </CardContent>
        </div>
      </React.Fragment>
      </ThemeProvider>
    );
  };
  export default Captcha;
