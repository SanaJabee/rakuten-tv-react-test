export const fetchTrailerData = async (id) => {
    try {
        const response = await fetch('https://gizmo.rakuten.tv/v3/me/streamings?classification_id=5&device_identifier=web&locale=es&market_code=es', {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    audio_language: "SPA",
                    audio_quality: "2.0",
                    content_id: id,
                    content_type: "movies",
                    device_serial: "device_serial_1",
                    device_stream_video_quality: "FHD",
                    player: "web:PD-NONE",
                    subtitle_language: "MIS",
                    video_type: "trailer"
                })

        });


        const { data } = await response.json();
        return data;
    }
    catch (e) {
    }


}