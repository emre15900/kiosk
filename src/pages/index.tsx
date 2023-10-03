import SelectLanguage from "@/components/select-language";
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
  return (
    <Grid sx={{padding: "40px"}}>
      <Grid container spacing={2}>
        {buttons.map((button) => {
          return (
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
          );
        })}
      </Grid>
    </Grid>
  );
}
