// Import
import "./Card.css"

// Function
const Card = (props) => {
	return (
		<>
			<article>
				<header>
					<h2>{props.title || "Placeholder title"}</h2>
				</header>
				<section>
					{props.text ||
						"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id corporis ipsa voluptatibus molestiae modi, dolores beatae inventore distinctio repellat voluptate cum illum? Soluta sed officiis perferendis, explicabo quae tenetur numquam?"}
				</section>
			</article>
		</>
	)
}

// Export
export default Card
