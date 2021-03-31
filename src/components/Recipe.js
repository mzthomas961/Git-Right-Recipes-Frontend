import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails"
import styled, { css } from "styled-components";


function Recipe({name,image, instructions, ingredients}) {
  const [showDetails, setShowDetails] = useState(false)
  
  const layoutBox = css`
  width: 80%;
  min-height: 100px;
  resize: both;
  overflow: auto;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
  
  > * {
    border: 1px dashed rgba(0, 0, 0, 0.1);
  }
  `;


const Box = styled.div`
  background: ${props => props.background || "aliceblue"};
  display: grid;
  place-items: center;
  padding: 1rem;
  font-weight: bold;
`;


  const SidebarSaysLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(250px, 25%) 1fr;
  ${layoutBox};
  `;
  

  function handleClick() {
    setShowDetails(!showDetails)

  }

  const Button = styled.button`
  background: dodgerblue;
  padding: 5px;
  border: 2px solid black;
  border-radius: 4px;
  cursor: pointer;
  transition: 200ms ease;
  color: white;
  text-decoration: none;
  font: 1rem sans-serif;

  &:hover {
    background: blueviolet;
    color: white;
  }

  &:focus {
    background: hotpink;
    color: white;
  }
`;
  
  return (
        <div>
          <h2>{name}</h2>
            <SidebarSaysLayout>
              <Box background="papayawhip"><Button onClick={handleClick}> Recipe Details</Button>
              {showDetails ? <RecipeDetails instructions={instructions} ingredients={ingredients}/> : null}
              </Box>
             <Box>
              <img className="image" src={image} alt={name} width="400" height="400"/>
             </Box>
          </SidebarSaysLayout>
        </div>
        
       
        
    )
}
export default Recipe