import {
  Grid,
  Card,
  Typography,
  FormControl,
  TextField,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import Link from "next/link";

interface ButtonProps {
  id: number;
  title: string;
  icon: string;
  link: string;
}

const buttons: readonly ButtonProps[] = [
  {
    id: 1,
    title: "Money Withdrawal",
    icon: "/images/pin-icon-1.png",
    link: "/pin",
  },
  {
    id: 2,
    title: "Money Deposit",
    icon: "/images/pin-icon-2.png",
    link: "/pin",
  },
  {
    id: 3,
    title: "Pin Change",
    icon: "/images/pin-icon-3.png",
    link: "/pin",
  },
  {
    id: 4,
    title: "Balance Enquiry",
    icon: "/images/pin-icon-4.png",
    link: "/pin",
  },
];

export default function Home() {
  return (
    <Grid sx={{ padding: "40px" }}>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        {buttons.map((button) => {
          return (
            <Grid key={button.id}>
              <Link href={button.link}>
                <Card
                  sx={{
                    background: "#F4F4F4",
                    borderRadius: "30px",
                    padding: "30px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "none",
                    gap: "20px",
                    minHeight: "200px",
                    minWidth: "250px",
                    cursor: "pointer",
                    transition: "all 0.1s ease",
                    "&:hover": {
                      border: "1px solid #444094",
                    },
                  }}
                >
                  <Grid sx={{ width: "60px" }}>
                    <img src={button.icon} alt="icon" width="100%" />
                  </Grid>
                  <Typography
                    dangerouslySetInnerHTML={{
                      __html: button.title.replace("\n", "<br />"),
                    }}
                    sx={{
                      textAlign: "center",
                      color: "#444094",
                      fontSize: "22px",
                      fontWeight: 100,
                    }}
                  ></Typography>
                </Card>
              </Link>
            </Grid>
          );
        })}
        <Grid sx={{ width: "55px" }}>
          <img src="/images/arrow-right.png" alt="icon" width="100%" />
        </Grid>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "50px",
          width: "100%",
          justifyContent: "center",
          mt: 5,
        }}
      >
        <Card
          sx={{
            background: "#F4F4F4",
            borderRadius: "30px",
            padding: "30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "none",
            gap: "20px",
            minWidth: "360px",
          }}
        >
          <Typography variant="h4" sx={{ color: "#444094", fontWeight: 100 }}>
            Hello <strong>Hasan</strong>
          </Typography>
          <Grid sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Grid sx={{ display: "flex", gap: "10px" }}>
              <Grid sx={{ width: "25px" }}>
                <img
                  src="/images/us-flag.png"
                  alt="img"
                  width="100%"
                  style={{ borderRadius: "30px" }}
                />
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  gap: "5px",
                  flexDirection: "column",
                }}
              >
                <Typography variant="subtitle1" sx={{ color: "#8F7DE4" }}>
                  Total Balance
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ color: "#444094", fontWeight: 400 }}
                >
                  $ 20, 345. 56
                </Typography>
              </Grid>
            </Grid>
            <Grid sx={{ display: "flex", gap: "10px" }}>
              <Grid sx={{ width: "25px" }}>
                <img
                  src="/images/eu-flag.png"
                  alt="img"
                  width="100%"
                  style={{ borderRadius: "30px" }}
                />
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  gap: "5px",
                  flexDirection: "column",
                }}
              >
                <Typography variant="subtitle1" sx={{ color: "#8F7DE4" }}>
                  Total Balance
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ color: "#444094", fontWeight: 400 }}
                >
                  € 20, 345. 56
                </Typography>
              </Grid>
            </Grid>
            <Grid sx={{ display: "flex", gap: "10px" }}>
              <Grid sx={{ width: "25px" }}>
                <img
                  src="/images/russian-flag.png"
                  alt="img"
                  width="100%"
                  style={{ borderRadius: "30px" }}
                />
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  gap: "5px",
                  flexDirection: "column",
                }}
              >
                <Typography variant="subtitle1" sx={{ color: "#8F7DE4" }}>
                  Total Balance
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ color: "#444094", fontWeight: 400 }}
                >
                  ₽ 1, 345. 56
                </Typography>
              </Grid>
            </Grid>
            <Typography
              variant="subtitle1"
              sx={{ color: "#8F7DE4", cursor: "pointerƒ" }}
            >
              Show all
            </Typography>
          </Grid>
        </Card>
        <Grid>
          <Typography variant="h4" sx={{ color: "#444094", fontWeight: 100 }}>
            Fast Cash
          </Typography>
          <Grid sx={{ mt: 3 }}>
            <Typography
              variant="h6"
              sx={{ color: "#444094", fontWeight: 100, mb: 1 }}
            >
              Currency
            </Typography>
            <FormControl sx={{ml: "-5px"}}>
              <OutlinedInput
                sx={{
                  m: 1,
                  width: "35ch",
                  borderRadius: "30px",
                  borderColor: "#444094",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "30px",
                    color: "#444094",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#444094",
                  },
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <Typography sx={{ color: "#444094", cursor: "pointer" }}>
                      Max
                    </Typography>
                  </InputAdornment>
                }
                type="number"
                id="outlined-basic"
                placeholder="Enter amount"
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
