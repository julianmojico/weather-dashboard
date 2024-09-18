import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';//Icono Tormenta
import WbSunnyIcon from '@mui/icons-material/WbSunny'; //Solcito
import { SvgIcon } from '@mui/material';

export default function Week(){
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

          <Grid key={1} size={{ xs: 2, sm: 4, md: 6 }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
              <WbSunnyIcon />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Bariloche
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Sunny windy weather today but we love eating chocolates and hiking in the mountains with a lot of snow and skiing super fast.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          
          <Grid key={1} size={{ xs: 2, sm: 4, md: 6 }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
              <WbSunnyIcon />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Moron
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Sunny windy weather today. 
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          
          <Grid key={1} size={{ xs: 2, sm: 4, md: 6 }}>
          <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
              <ThunderstormIcon fontSize='large' htmlColor='blue'/>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Tandil
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    The forecast for Tandil city shows very have storms with possibility of tornado, earthquake
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid key={1} size={{ xs: 2, sm: 4, md: 6, lg: 6 }}>
          <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
              <AcUnitIcon />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Mar del Plata
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Mardel people are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all streets except Champagnat
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>


        </Grid>
      </Box>
    )
}