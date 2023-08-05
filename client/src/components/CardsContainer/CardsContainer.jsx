import Card from "../Card/Card"
import style from "./CardsContainer.module.css"
const CardsContainer = () =>{
    const videogames = [{
		"id": "31fe4872-5863-4494-a538-53d017221120",
		"name": "mariobros1",
		"background_image": "https",
		"released": "1985-01-01",
		"rating": 10,
		"created": true,
		"genres": [
			{
				"name": "Action"
			},
			{
				"name": "Indie"
			}
		],
		"platforms": [
			{
				"name": "PC"
			},
			{
				"name": "iOS"
			}
		]
	},
	{
		"id": "4ecb09cc-f55b-4c29-a2bc-a45c733c5697",
		"name": "payday8",
		"background_image": "\"http:image\"",
		"released": "1985-01-01",
		"rating": 5,
		"created": true,
		"genres": [
			{
				"name": "Action"
			}
		],
		"platforms": [
			{
				"name": "PC"
			}
		]
	},
	{
		"id": "58103c06-5174-476f-b803-ab59ed8fee93",
		"name": "payday7",
		"background_image": "\"http:image\"",
		"released": "1985-01-01",
		"rating": 5,
		"created": true,
		"genres": [],
		"platforms": []
	},
	{
		"id": "73ed6587-08ad-4964-8176-4e3bf0a3958e",
		"name": "payday9",
		"background_image": "\"http:image\"",
		"released": "1985-01-01",
		"rating": 5,
		"created": true,
		"genres": [
			{
				"name": "Action"
			}
		],
		"platforms": []
	}]
    return (
        <div className={style.container}> 
            {videogames.map(videogame =>{
                return <Card
                id= {videogame.id}
                name= {videogame.name}
                />
            })}
        </div>
    )
}

export default CardsContainer