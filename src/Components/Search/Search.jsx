import { useState } from 'react'
import st from './Search.module.scss'

function Search({ fetchData }) {
	const [city, setCity] = useState('')

	const handleSearch = () => {
		fetchData(city)
		setCity('')
	}

	return (
		<div>
			<input
				className={st.root}
				type='text'
				placeholder='Введите название города'
				value={city}
				onChange={e => setCity(e.target.value)}
			/>
			<button onClick={handleSearch}>Поиск</button>
		</div>
	)
}

export default Search
