// Import
import "./Card.css"

// Function
const Card = (props) => {
	return (
		<>
			<article>
				<header>
					<h2>{props.title}</h2>
				</header>
				<section>{props.text}</section>
			</article>
		</>
	)
}

// Export
export default Card
