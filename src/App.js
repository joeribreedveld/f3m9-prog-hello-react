// Imports
import Card from "./Card"
import Card2 from "./Card2"
import Card3 from "./Card3"
import "./App.css"

// Function
const App = () => {
	return (
		<>
			<Card
				title='Eerste kaart'
				text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quia error accusamus esse odio doloribus commodi perferendis aut aspernatur optio voluptatum, sunt libero delectus vitae maiores eum cum aperiam soluta.'
			/>
			<Card
				title='Tweede kaart'
				text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quia error accusamus esse odio doloribus commodi perferendis aut aspernatur optio voluptatum, sunt libero delectus vitae maiores eum cum aperiam soluta.'
			/>
			<Card
				title='Derde kaart'
				text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quia error accusamus esse odio doloribus commodi perferendis aut aspernatur optio voluptatum, sunt libero delectus vitae maiores eum cum aperiam soluta.'
			/>
		</>
	)
}

// Export
export default App
