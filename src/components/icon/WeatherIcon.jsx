export default function WeatherIcon({icon, alt}) {
    return (
        <div>
            <img src={`icons/${icon}-s.png`} alt={alt} />
        </div>
    );
}