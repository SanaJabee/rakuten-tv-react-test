const listArray =[];
export const fetchData = async (id) => {
    try {
        const response = await fetch("https://gizmo.rakuten.tv/v3/lists/" + id + "?classification_id=5&device_identifier=web&locale=es&market_co");
        const { data } = await response.json();
        listArray.push(data.contents.data);
        return listArray;
    }
    catch (e) {
    }
}