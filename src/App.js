// Imports
import Card from "./Card"
import "./App.css"

// Function
const App = () => {
	const click = () => {
		console.log("Ik ben geklikt!")
	}

	const random = () => {
		console.log(Math.random())
	}

	const sum = () => {
		console.log(12032 + 3459)
	}

	return (
		<>
			<Card mouseclick={click} title='Eerste kaart' />
			<Card mouseclick={random} text='Ik ben een stukje text' />
			<Card mouseclick={sum} title='Derde kaart' text='Ik ben ook een stukje text' />
		</>
	)
}

// Export
export default App
