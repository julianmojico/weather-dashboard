import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function TempViewer({minTemp, maxTemp, icon, direction, minTempVariant, maxTempVariant}) {
    return (
        <Stack direction={direction} sx={{justifyContent: "space-between", alignItems: "center"}}>
            <Stack direction="row" sx={{justifyContent: "flex-start", alignItems: "flex-end"}}>
                <Typography variant={minTempVariant} sx={{
                    color: "text.secondary",
                    fontWeight: "regular",
                    display: "flex",
                    alignItems: "flex-end"
                }}>
                    {minTemp}°/
                </Typography>
                <Typography variant={maxTempVariant} sx={{
                    color: "text.primary",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "flex-end"
                }}>
                    {maxTemp}°
                </Typography>
            </Stack>
            <Typography variant={maxTempVariant}
                        sx={{color: "text.primary", fontWeight: "bold", display: "inline", alignItems: "center"}}>
                {icon}
            </Typography>
        </Stack>
    );
}