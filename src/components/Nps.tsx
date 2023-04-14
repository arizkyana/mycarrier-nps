import React, { memo } from "react";
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  Box,
  Card,
  Typography,
  TextField,
  Button,
  ButtonGroup
} from "@mui/material";
import { ChevronLeft, LanguageOutlined } from "@mui/icons-material";

function Nps() {
  return (
    <Box
      component={"form"}
      sx={{
        width: "100%",
        height: "100vh"
      }}
    >
      <Box
        sx={{
          paddingTop: 10,
          height: "100%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <Box
          sx={{
            maxWidth: "55%",
            maxHeight: "60%",
            width: "100%"
          }}
        >
          <Box
            sx={{
              marginBottom: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%"
            }}
            component={"section"}
          >
            <Box>
              <Button
                disableRipple
                size={"small"}
                type={"button"}
                variant={"text"}
                startIcon={<ChevronLeft />}
              >
                Kembali ke Dashboard
              </Button>
            </Box>
            <Box
              component={"div"}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <LanguageOutlined />
              <Box sx={{ marginLeft: 1 }}>
                <ButtonGroup>
                  <Button size={"small"}>ID</Button>
                  <Button size={"small"}>EN</Button>
                </ButtonGroup>
              </Box>
            </Box>
          </Box>
          <Box sx={{ marginBottom: 3 }}>
            <Typography
              variant={"body1"}
              component={"h1"}
              sx={{ display: "block", fontWeight: "500" }}
            >
              Pelanggan yang terhormat,
            </Typography>
            <Typography variant={"body2"} component={"p"}>
              Terima kasih telah terhubung dengan tim kami. Bantu kami dengan
              meluangkan 1 menit dari waktu Anda untuk mengisi survei berikut.
            </Typography>
          </Box>
          <Card sx={{ padding: 3 }}>
            <Box sx={{ textAlign: "right", paddingRight: 10 }}>
              <Typography variant={"caption"}>Soal 1 dari 4</Typography>
            </Box>
            <Box
              component={"form"}
              sx={{
                width: "40%",
                margin: "0 auto"
              }}
            >
              <Box sx={{ marginBottom: 2 }}>
                <TextField
                  type={"text"}
                  placeholder={"Full Name"}
                  label={
                    <>
                      {"Full Name"}{" "}
                      <Box component={"span"} sx={{ color: "red" }}>
                        *
                      </Box>
                    </>
                  }
                  variant={"standard"}
                  sx={{ width: "100%" }}
                />
              </Box>
              <Box sx={{ marginBottom: 2 }}>
                <TextField
                  type={"text"}
                  placeholder={"Full Name"}
                  label={
                    <>
                      {"Full Name"}{" "}
                      <Box component={"span"} sx={{ color: "red" }}>
                        *
                      </Box>
                    </>
                  }
                  variant={"standard"}
                  sx={{ width: "100%" }}
                />
              </Box>
              <Box sx={{ marginBottom: 2 }}>
                <TextField
                  type={"text"}
                  placeholder={"Full Name"}
                  label={
                    <>
                      {"Full Name"}{" "}
                      <Box component={"span"} sx={{ color: "red" }}>
                        *
                      </Box>
                    </>
                  }
                  variant={"standard"}
                  sx={{ width: "100%" }}
                />
              </Box>
              <Box sx={{ marginBottom: 2 }}>
                <TextField
                  type={"text"}
                  placeholder={"Full Name"}
                  label={
                    <>
                      {"Full Name"}{" "}
                      <Box component={"span"} sx={{ color: "red" }}>
                        *
                      </Box>
                    </>
                  }
                  variant={"standard"}
                  sx={{ width: "100%" }}
                />
              </Box>
              <Box
                sx={{
                  paddingY: 3
                }}
              >
                <Button
                  disabled
                  disableElevation
                  type={"button"}
                  variant={"contained"}
                  sx={{
                    borderRadius: "9999px",
                    width: "80%",
                    display: "block",
                    margin: "0 auto"
                  }}
                >
                  Next
                </Button>
              </Box>
            </Box>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#DE1B1B"
    }
  },
  typography: {
    fontFamily: "Ubuntu",
    fontSize: 14
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: () => ({
        body: {
          background: "#E5E5E5"
        }
      })
    },

    MuiTextField: {
      styleOverrides: {
        root: () => ({
          fontSize: "10pt"
        })
      }
    }
  }
});

export const NpsComponent = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Nps />
  </ThemeProvider>
);
export default memo(NpsComponent);
