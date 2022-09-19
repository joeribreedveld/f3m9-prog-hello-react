// Import
import "./Card.css"

// Functions
const Card3 = () => {
	const hallo = () => {
		console.log("Ik ben kaartje drie")
	}

	return (
		<>
			<article onClick={hallo}>
				<header>
					<h2>Derde kaart</h2>
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
export default Card3
