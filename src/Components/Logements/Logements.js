import React from 'react';
import { useParams, useEffect } from 'react-router-dom';
import datas from '../../logement'
// import { useEffect } from "react"
import Collapse from '../Collapse'
import Error from '../Error/Error'
import "../../Styles/logements.css"
import '../../Styles/index.css'
import Carousel from '../Carousel/Carousel';
import records from "../../logement.json"



const arrayStars = [1, 2, 3, 4, 5]


export default function Logements() {

  

  const idLogements = useParams('id').id;
	const dataCurrent = datas.filter(data => data.id === idLogements);
	


	if (dataCurrent.length === 0) {
		return <Error />;
}

	
	

	 // cherche l'id dans le fichier logements.json
	 const record = records.find(element => element.id === idLogements)
    
	 // si l'URL à été modifié manuellement, redirection vers la page d'erreur
	 if (!record) return(<Error />)


	const name = dataCurrent[0].host.name.split(' '); 
	const description  = dataCurrent[0].description;
	const equipments = dataCurrent[0].equipments;


	
	return (
		<>
			
			<main className="accomodation">
			<Carousel pictures={record.pictures}/>
				<div className="accomodation_content">
					<div className="accomodation_content_infos">
						<h1>{dataCurrent[0].title}</h1>
						<p>{dataCurrent[0].location}</p>
						<div className="towns">
							{dataCurrent[0].tags.map((tag, index) => {
								return (
									<button key={index}>{tag}</button>
								)
							})}
						</div>
					</div>


					
					<div className="accomodation_content_host">
						<div>
							<div className='accomodation_content_host_name'>
								<span>{name[0]}</span>
								<span>{name[1]}</span>
							<img src={dataCurrent[0].host.picture} alt="host of this accomodation" />
							
							</div>						</div>
					</div>
					<div className='stars'>
                            {
                                arrayStars.map(element => {
                                    const nbreEtoiles = parseInt(record.rating)
                                    return(<span key={"star-"+element} className={element <= nbreEtoiles ? 'span1' : 'span2'}>★</span>)
                                })
                            }
                        </div>
				</div>
				<div className="accomodation_collapse">
					<div className="accomodation_collapse_item">
						<Collapse title={'Description'} content={description} />	
					</div>
					<div className="accomodation_collapse_item">
						<Collapse title={'Équipements'} content={equipments}/>
					</div>	
				</div>
			</main>
		</>
	)
}