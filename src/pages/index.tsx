import { Grid, Card, Typography } from "@mui/material";
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
    title: "Cash \n Withdrawal",
    icon: "/images/home-screen-icon-1.png",
    link: "/pin",
  },
  {
    id: 2,
    title: "Cash \n Deposit",
    icon: "/images/home-screen-icon-2.png",
    link: "/pin",
  },
  {
    id: 3,
    title: "Buy/Sell \n Crypto",
    icon: "/images/home-screen-icon-3.png",
    link: "/pin",
  },
  {
    id: 4,
    title: "Cross Border \n Money Transfer",
    icon: "/images/home-screen-icon-4.png",
    link: "/pin",
  },
  {
    id: 5,
    title: "Get Pay \n Visa Card",
    icon: "/images/home-screen-icon-5.png",
    link: "/pin",
  },
  {
    id: 6,
    title: "Service \n For Dealers",
    icon: "/images/home-screen-icon-6.png",
    link: "/pin",
  },
  {
    id: 7,
    title: "FX \n Exchange",
    icon: "/images/home-screen-icon-7.png",
    link: "/pin",
  },
];

export default function Home() {
  const rows: any[][] = [];
  let currentRow: any[] = [];

  buttons.forEach((button, index) => {
    currentRow.push(button);

    if ((index + 1) % 7 === 0 || index === buttons.length - 1) {
      rows.push(currentRow);
      currentRow = [];
    }
  });

  return (
    <Grid sx={{ padding: "40px" }}>
      <Grid
        sx={{
          mb: 5,
          display: "flex",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <Typography variant="h5">PAGES:</Typography>
        <Link href="/">
          <Typography
            variant="h6"
            sx={{
              color: "#444094",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Home
          </Typography>
        </Link>
        <Link href="/pin">
          <Typography
            variant="h6"
            sx={{
              color: "#444094",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Pin
          </Typography>
        </Link>
        <Link href="/pin/step-2">
          <Typography
            variant="h6"
            sx={{
              color: "#444094",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Pin Step 2
          </Typography>
        </Link>
        <Link href="/pin/step-3">
          <Typography
            variant="h6"
            sx={{
              color: "#444094",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Pin Step 3
          </Typography>
        </Link>
        <Link href="/pin/step-4">
          <Typography
            variant="h6"
            sx={{
              color: "#444094",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Pin Step 4
          </Typography>
        </Link>
        <Link href="/password">
          <Typography
            variant="h6"
            sx={{
              color: "#444094",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Password
          </Typography>
        </Link>
        <Link href="/sendmoney">
          <Typography
            variant="h6"
            sx={{
              color: "#444094",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Send Money
          </Typography>
        </Link>
        <Link href="/sendmoney/step-2">
          <Typography
            variant="h6"
            sx={{
              color: "#444094",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Send Money Step 2
          </Typography>
        </Link>
        <Link href="/sendmoney/step-3">
          <Typography
            variant="h6"
            sx={{
              color: "#444094",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Send Money Step 3
          </Typography>
        </Link>
        <Link href="/sendmoney/step-4">
          <Typography
            variant="h6"
            sx={{
              color: "#444094",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Send Money Step 4
          </Typography>
        </Link>
        <Link href="/otp">
          <Typography
            variant="h6"
            sx={{
              color: "#444094",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            OTP
          </Typography>
        </Link>
        {/* <Link href="/buy-sell-crypto">
          <Typography
            variant="h6"
            sx={{
              color: "#444094",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
           Buy Sell Crypto
          </Typography>
        </Link>
        <Link href="/identity-verification">
          <Typography
            variant="h6"
            sx={{
              color: "#444094",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Identity Verification
          </Typography>
        </Link> */}
      </Grid>
      <Grid container spacing={2}>
        {rows?.map((row, rowIndex) => (
          <Grid key={rowIndex} container justifyContent="center" spacing={2}>
            {row.map((button: any) => (
              <Grid key={button.id} item xs={12} sm={6} md={3}>
                <Link href={button.link}>
                  <Card
                    sx={{
                      background: "#F4F4F4",
                      borderRadius: "30px",
                      padding: "90px 30px 50px 30px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "none",
                      gap: "20px",
                      cursor: "pointer",
                      transition: "all 0.1s ease",
                      maxWidth: "380px",
                      maxHeight: "500px",
                      minHeight: "430px",
                      "&:hover": {
                        border: "1px solid #444094",
                      },
                    }}
                  >
                    <Grid sx={{ width: "120px" }}>
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
                      }}
                    ></Typography>
                    <Grid
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "flex-end",
                        width: "100%",
                        mt: 2,
                      }}
                    >
                      <Grid sx={{ width: "45px" }}>
                        <img
                          src="/images/arrow-right.png"
                          alt="icon"
                          width="100%"
                        />
                      </Grid>
                    </Grid>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
