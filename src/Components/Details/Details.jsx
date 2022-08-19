import {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Details.css';

const Details = () => {
    const [card, setCard] = useState([]);
    const nav = useNavigate();
    const params = useParams();
    const cardFilter = card.filter((fil) => fil.name === params.name);

    useEffect(() => {
        fetch("https://jgalat.github.io/ds-weapons-api/").then((response) => {
            response.json().then((data) => {
                setCard(data);
            })
        })
    }, []);
    
    return ( 
        <div className='page_details'>
            {
                cardFilter.map((cardmap, index) => {
                    return <div className='details_wrapper' key={index}>
                        <div className='name_wrapper'>
                        <h2>{cardmap.name}</h2>
                        <h3>{cardmap.weapon_type}</h3>
                        </div>
                        <div className='stats_wrapper'>
                        <div className='damage_stats'>
                            <h3>Damage</h3>
                            <p>Physical: {cardmap.damage.physical}</p>
                            <p>Magic: {cardmap.damage.magic}</p>
                            <p>Lightning: {cardmap.damage.lightning}</p>
                            <p>Fire: {cardmap.damage.fire}</p>
                        </div>
                        <div className='damage_reduction_stats'>
                            <h3>Damage Reduction</h3>
                            <p>Physical: {cardmap.damage_reduction.physical}</p>
                            <p>Magic: {cardmap.damage_reduction.magic}</p>
                            <p>Lightning: {cardmap.damage_reduction.lightning}</p>
                            <p>Fire: {cardmap.damage_reduction.fire}</p>
                        </div>
                        <div className='requirements'>
                            <h3>Requirements</h3>
                            <p>Dexterity: {cardmap.requirements.dexterity}</p>
                            <p>Faith: {cardmap.requirements.faith}</p>
                            <p>intelligence: {cardmap.requirements.intelligence}</p>
                            <p>strength: {cardmap.requirements.strength}</p>
                        </div>
                        </div>
                        <h3>Durability: {cardmap.durability}</h3>
                        <div className='bonus_wrapper'>
                            <ul>
                                <li>Dexterity: {cardmap.bonus.dexterity} </li>
                                <li> Faith: {cardmap.bonus.faith} </li>
                                <li> intelligence: {cardmap.bonus.intelligence} </li>
                                <li>strength: {cardmap.bonus.strength}</li>
                                <button className='back_button' onClick={() => {nav('/')}}>Voltar</button>
                            </ul>
                        </div>
                    </div>
                })
            }
        </div>
     );
}
 
export default Details;