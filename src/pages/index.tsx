import { Grid, Card, Typography } from "@mui/material";
import Link from "next/link";

interface ButtonProps {
  id: number;
  title: string;
  icon: string;
  link: string;
  img: string;
}

const buttons: readonly ButtonProps[] = [
  {
    id: 1,
    title: "Cash \n Withdrawal",
    icon: "/images/animate/home-screen-icon-1.gif",
    img: "/images/home-screen-icon-1.png",
    link: "/pin",
  },
  {
    id: 2,
    title: "Cash \n Deposit",
    icon: "/images/animate/home-screen-icon-2.gif",
    img: "/images/home-screen-icon-2.png",
    link: "/pin",
  },
  {
    id: 3,
    title: "Buy/Sell \n Crypto",
    icon: "/images/animate/home-screen-icon-3.gif",
    img: "/images/home-screen-icon-3.png",
    link: "/pin",
  },
  {
    id: 4,
    title: "Cross Border \n Money Transfer",
    icon: "/images/animate/home-screen-icon-4.gif",
    img: "/images/home-screen-icon-4.png",
    link: "/pin",
  },
  {
    id: 5,
    title: "Get Pay \n Visa Card",
    icon: "/images/animate/home-screen-icon-5.gif",
    img: "/images/home-screen-icon-5.png",
    link: "/pin",
  },
  {
    id: 6,
    title: "Service \n For Dealers",
    icon: "/images/animate/home-screen-icon-6.gif",
    img: "/images/home-screen-icon-6.png",
    link: "/pin",
  },
  {
    id: 7,
    title: "FX \n Exchange",
    icon: "/images/animate/home-screen-icon-7.gif",
    img: "/images/home-screen-icon-7.png",
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
        <Link href="/buy-sell-crypto">
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
        </Link>
        <Link href="/transaction">
          <Typography
            variant="h6"
            sx={{
              color: "#444094",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Transaction
          </Typography>
        </Link>
        <Link href="/cards">
          <Typography
            variant="h6"
            sx={{
              color: "#444094",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Cards
          </Typography>
        </Link>
        <Link href="/card-type">
          <Typography
            variant="h6"
            sx={{
              color: "#444094",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Card Type
          </Typography>
        </Link>
        <Link href="/passport-details">
          <Typography
            variant="h6"
            sx={{
              color: "#444094",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Passport Details
          </Typography>
        </Link>
        <Link href="/payment-detail">
          <Typography
            variant="h6"
            sx={{
              color: "#444094",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Payment Details
          </Typography>
        </Link>
        <Link href="/success">
          <Typography
            variant="h6"
            sx={{
              color: "#444094",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Success
          </Typography>
        </Link>
        <Link href="/success-2">
          <Typography
            variant="h6"
            sx={{
              color: "#444094",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Success Two
          </Typography>
        </Link>
        <Link href="/success-transfer">
          <Typography
            variant="h6"
            sx={{
              color: "#444094",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Success Transfer
          </Typography>
        </Link>
        <Link href="/exchange">
          <Typography
            variant="h6"
            sx={{
              color: "#444094",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Exchange
          </Typography>
        </Link>
        <Link href="/exchange-step-2">
          <Typography
            variant="h6"
            sx={{
              color: "#444094",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Exchange Two
          </Typography>
        </Link>
        <Link href="/pin-step-two">
          <Typography
            variant="h6"
            sx={{
              color: "#444094",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Pin Step Two
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
      </Grid>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          mt:"-40px"
        }}
      >
        <Grid sx={{ width: "550px" }}>
          <img src="/images/logo.webp" alt="logo" width="100%" />
        </Grid>
        <Typography
          variant="h6"
          sx={{ mt: "-30px", color: "#000000", fontWeight: 600 }}
        >
          slakfjllsafljks sjfksfjl
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ mb: 12, mt: 2, color: "#000000", fontWeight: 400 }}
        >
          slakfjllsafljks sjfksfjl <strong>220 sfsfa</strong>
        </Typography>
      </Grid>
      <Grid container spacing={2}>
        {rows?.map((row, rowIndex) => (
          <Grid key={rowIndex} container justifyContent="center" spacing={2}>
            {row.map((button: any) => (
              <Grid key={button.id} item xs={12} sm={6} md={3}>
                <Link href={button.link}>
                  <Card
                    sx={{
                      background: "#ffffff",
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
                      border: "2px solid #444094",
                      "&:hover": {
                        border: "2px solid rgb(84 253 95 / 87%)",
                      },
                    }}
                  >
                    <Grid sx={{ width: "120px" }}>
                      {/* <video autoPlay loop muted poster={button.img}>
                        <source src={button.icon} type="video/mp4" />
                      </video> */}
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
      <Grid>
        <Grid sx={{ width: "100%" }}>
          <img
            src="/images/animate/buildings.gif"
            alt="ana-binalar"
            width="100%"
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
