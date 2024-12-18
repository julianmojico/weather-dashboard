export async function fetchLocations(query) {

    const response = await fetch(`http://localhost:3001/location`)
    return await response.json()

/*
    return fetch('http://dataservice.accuweather.com/locations/v1/cities/search?' + new URLSearchParams({
        apiKey: 'wKKjwferXpVkzLZ44Yuv4vu1lagbR8Nr',
        q: query,
    }));
*/
}