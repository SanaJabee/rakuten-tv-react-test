export const fetchMovieData = async (id) => {
    try {
        const response = await fetch("https://gizmo.rakuten.tv/v3/movies/" + id + "?classification_id=5&device_identifier=web&locale = es & market_code=es");
        const { data } = await response.json();
        return data;
    }
    catch (e) {
    }

    
}