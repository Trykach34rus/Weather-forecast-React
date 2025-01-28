import axios from 'axios'
import { useState } from 'react'
import Search from '../Search/Search.jsx'
import Weather from '../Weather/Weather.jsx'
import st from './Display.module.scss'

function Display() {
	const [weather, setWeather] = useState(null)
	const [error, setError] = useState(null)

	async function fetchData(city) {
		const apiKey = '6c606082ca6e43bfb9d150742252101'
		try {
			const response = await axios.get(
				`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
			)
			setWeather(response.data)
			setError(null)
		} catch (error) {
			setError(error, 'Город не найден')
			setWeather(null)
		}
	}

	return (
		<div className={st.root}>
			<h1 className={st.title}>Прогноз погоды</h1>
			<Search fetchData={fetchData} />
			{error && <p className='error'>{error}</p>}
			{weather && (
				<div className='weather'>
					<Weather data={weather} />
				</div>
			)}
		</div>
	)
}

export default Display
