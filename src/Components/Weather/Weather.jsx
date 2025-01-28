import st from './Weather.module.scss'

function Weather({ data }) {
	return (
		<div className={st.root}>
			<h2 className={st.location}>{data.location.name}</h2>
			<p>Температура: {data.current.temp_c}°C</p>
			<p>Погода: {data.current.condition.text}</p>
			<p>Влажность: {data.current.humidity}%</p>
			<p>Скорость ветра: {data.current.wind_kph} км/ч</p>
		</div>
	)
}

export default Weather
