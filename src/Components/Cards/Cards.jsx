import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cards.css";

const Cards = ( {searchInputValue} ) => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const filterCards = cards.filter((fil) => fil.name.toLowerCase() === searchInputValue.toLowerCase());
  const nav = useNavigate();

  useEffect(() => {
    setLoading(true);
    try{
      fetch("https://jgalat.github.io/ds-weapons-api/").then((response) => {
        response.json().then((data) => {
          setCards(data);
        });
      });
    } catch {
      console.log("erro");
    } finally {
      setLoading(false);
    }
  }, []);
  

  return (
    <>
      <div className="cards_container">
    {
      (loading) ? "Loading..." : ''
    }
    {
      (searchInputValue === "") ? cards.map((cardsmap, index) => {
        return <div className="card_wrapper" key={index} onClick={() => {nav(`weapon/${cardsmap.name}`)}}>
          <h2>{cardsmap.name}</h2>  
          <h3>Type: {cardsmap.weapon_type}</h3>
          <div className="cardInfo_wrapper">
          <div className="damage_stats">
          <ul>
            <li>Fire: {cardsmap.damage.fire}</li>
            <li>Lightning: {cardsmap.damage.lightning}</li>
            <li>Magic: {cardsmap.damage.magic}</li>
            <li>Physical: {cardsmap.damage.physical}</li> 
          </ul>  
          </div>
          <div className="weapon_img_wrapper">
            <img 
            className="weapon_img"
            src="http://ds3-cinders.wdfiles.com/local--files/image-set-equipment:greatsword-of-artorias/greatsword-of-artorias.png"
            alt="" />
          </div>
          </div>
        </div>;
      }) : filterCards.map((cardsmap, index) => {
        return <div className="card_wrapper" key={index} onClick={() => {nav(`weapon/${cardsmap.name}`)}}>
          <h2>{cardsmap.name}</h2>  
          <h3>Type: {cardsmap.weapon_type}</h3>
          <div className="cardInfo_wrapper">
          <div className="damage_stats">
          <ul>
            <li>Fire: {cardsmap.damage.fire}</li>
            <li>Lightning: {cardsmap.damage.lightning}</li>
            <li>Magic: {cardsmap.damage.magic}</li>
            <li>Physical: {cardsmap.damage.physical}</li> 
          </ul>  
          </div>
          <div className="weapon_img_wrapper">
            <img 
            className="weapon_img"
            src="http://ds3-cinders.wdfiles.com/local--files/image-set-equipment:greatsword-of-artorias/greatsword-of-artorias.png"
            alt="" />
          </div>
          </div>
        </div>;
      })
    }     
      </div>
    </>
  );
};

export default Cards;
