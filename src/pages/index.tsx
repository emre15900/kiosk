import { Inter } from 'next/font/google'
import { Grid, Card } from '@mui/material';


export default function Home() {
  return (
    <Grid>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ background: "#F4F4F4", borderRadius: "30px", padding: "30px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>

          </Card>
        </Grid>
      </Grid>
    </Grid>
  )
}
