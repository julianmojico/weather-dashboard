export function mapEpochToDayAndDate(epochTime) {
    // Convertimos el epoch time a un objeto Date
    const date = new Date(epochTime*1000);

    // Obtenemos el día de la semana como un string abreviado (Mon, Tue, etc.)
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

     // Usamos getUTCDay para evitar desfase
    return daysOfWeek[date.getUTCDay()];
}

export function mapEpochTime(epoch){

    const date = new Date(epoch);

    return date.getHours()+'hs'; 
}