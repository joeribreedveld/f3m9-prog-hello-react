// Import
import "./Card.css"

// Function
const Card2 = () => {
	const hallo = () => {
		console.log("Ik ben kaartje twee")
	}

	return (
		<>
			<article onClick={hallo}>
				<header>
					<h2>Tweede kaart</h2>
				</header>
				<section>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, aut mollitia numquam doloremque impedit rem, veritatis repudiandae reiciendis omnis magnam quas dolor totam
					facilis. Illo iste cupiditate a esse quia!
				</section>
			</article>
		</>
	)
}

// Export
export default Card2
