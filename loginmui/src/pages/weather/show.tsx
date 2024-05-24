import Grid from "@mui/material/Grid";


interface IWeatherPage {
}

// url = http://localhost:8002/
// örnek response:
/*
  {
    "data": {
        "city": "İstanbul",
        "temperature": "19"
        "humidity": "1",
        "wind": 15,
    }
  }
*/
export const WeatherPage: React.FC<IWeatherPage> = () => {
    const [selectedCity, setSelectedCity] = useState()
    const onCitySelect = () => {
        // Axios ile veri çek state'lerini güncelle
    }

    useEffect(
        ()=>{
            // Axios ile ver çek diğer state leri güncelle
        },
        [selectedCity]
    )
    return (
        <Grid>
            Hava Durumu
        </Grid>
    )
}