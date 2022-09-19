// Import
import "./Card.css"

// Function
const Card = (props) => {
	return (
		<>
			<article onClick={props.mouseclick}>
				<header>
					<h2>{props.title || "placeholder title"}</h2>
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
