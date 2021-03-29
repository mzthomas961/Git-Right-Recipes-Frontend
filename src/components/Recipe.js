import React from "react"
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'

function Recipe({name,ingredients,image}){
    return(
        <CardDeck style={{width: 'flex', flexDirection: 'row'}}>
        
         <Card style={{width: 2, height: 2}} >
          <Card.Img  variant="top" src={image} alt={name} />
    <Card.Body style={{width: 1, height: 1}} >
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        {ingredients}
      </Card.Text>
        </Card.Body>
         </Card>
        
    </CardDeck>
        // <div>
        // <h3>{name}</h3>
        // <img src={image} alt={name}/>
        // <h3>{ingredients}</h3>
        // <p>{instructions}</p>
        // </div>
    )
}
export default Recipe