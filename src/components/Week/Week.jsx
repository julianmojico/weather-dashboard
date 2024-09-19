import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny'; //Solcito
import Paper from '@mui/material/Paper';

export default function Week() {
    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={{xs: 2, md: 3}}>

                <Grid item key={1} size={{xs: 12, sm: 12, md: 3}}>
                    <Paper elevation={6} sx={{maxWidth: 1, borderRadius: 2}}>
                        <WbSunnyIcon/>
                        <Typography gutterBottom variant="h5" component="div">
                            Bariloche
                        </Typography>
                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                            Sunny windy weather today but we love eating chocolates and hiking in the mountains
                            with a lot of snow and skiing super fast.
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item key={1} size={{xs: 12, sm: 12, md: 1.5}}>
                    <Paper elevation={6} sx={{maxWidth: 1, borderRadius: 2}}>
                        <WbSunnyIcon/>
                        <Typography gutterBottom variant="h5" component="div">
                            Bariloche
                        </Typography>
                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                            Sunny windy weather today but we love eating chocolates and hiking in the mountains
                            with a lot of snow and skiing super fast.
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item key={1} size={{xs: 12, sm: 12, md: 1.5}}>
                    <Paper elevation={6} sx={{maxWidth: 1, borderRadius: 2}}>
                        <WbSunnyIcon/>
                        <Typography gutterBottom variant="h5" component="div">
                            Bariloche
                        </Typography>
                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                            Sunny windy weather today but we love eating chocolates and hiking in the mountains
                            with a lot of snow and skiing super fast.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item key={1} size={{xs: 12, sm: 12, md: 1.5}}>
                    <Paper elevation={6} sx={{maxWidth: 1, borderRadius: 2}}>
                        <WbSunnyIcon/>
                        <Typography gutterBottom variant="h5" component="div">
                            Bariloche
                        </Typography>
                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                            Sunny windy weather today but we love eating chocolates and hiking in the mountains
                            with a lot of snow and skiing super fast.
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item key={1} size={{xs: 12, sm: 12, md: 1.5}}>
                    <Paper elevation={6} sx={{maxWidth: 1, borderRadius: 2}}>
                        <WbSunnyIcon/>
                        <Typography gutterBottom variant="h5" component="div">
                            Bariloche
                        </Typography>
                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                            Sunny windy weather today but we love eating chocolates and hiking in the mountains
                            with a lot of snow and skiing super fast.
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item key={1} size={{xs: 12, sm: 12, md: 1.5}}>
                    <Paper elevation={6} sx={{maxWidth: 1, borderRadius: 2}}>
                        <WbSunnyIcon/>
                        <Typography gutterBottom variant="h5" component="div">
                            Bariloche
                        </Typography>
                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                            Sunny windy weather today but we love eating chocolates and hiking in the mountains
                            with a lot of snow and skiing super fast.
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item key={1} size={{xs: 12, sm: 12, md: 1.5}}>
                    <Paper elevation={6} sx={{maxWidth: 1, borderRadius: 2}}>
                        <WbSunnyIcon/>
                        <Typography gutterBottom variant="h5" component="div">
                            Bariloche
                        </Typography>
                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                            Sunny windy weather today but we love eating chocolates and hiking in the mountains
                            with a lot of snow and skiing super fast.
                        </Typography>
                    </Paper>
                </Grid>

            </Grid>
        </Box>
    )
}