import React from "react"
import styled, { css } from "styled-components";


function User({name, image, diet, restriction, id, onHandleDeleteUser}) {
  //  const [newImage, setNewImage] = useState("")
const Visual = styled.div`
background: ${props => props.background || "aliceblue"};
height: 120px;
width: 100%;
`;
  
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
    
const ClampingMyStyleLayout = styled.div`
display: grid;
place-items: center;
${layoutBox};

.card {
  width: clamp(23ch, 50%, 46ch);
  display: flex;
  flex-direction: column;
  padding: 1rem;
}
`;
  
  
  const Box = styled.div`
    background: ${props => props.background || "aliceblue"};
    display: grid;
    place-items: center;
    padding: 1rem;
    font-weight: bold;
  `;
  
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
    
    function handleDelete(id) {
        fetch(`http://localhost:3000/users/${id}`, {
          method: "DELETE"
        })
          .then(r => r.json())
          .then(() => {console.log((id))
          });
          onHandleDeleteUser(id)
      }

    //   function handleImageUpdate(e, id) {
    //       e.preventDefault()
       

    //       fetch(`http://localhost:3000/users/${id}`, {
    //         method: "PATCH",
    //         headers: {
    //         "Content-Type" : "application/json",
    //       },
    //         body: JSON.stringify({
    //         name:name,
    //         image:newImage,
    //         password:"Scout123",
    //     }),
    // })
    //     .then((r) => r.json())
    //     .then((updateImage) => console.log(updateImage))

    //   }
  
return (

    <div>
      <ClampingMyStyleLayout>
        <Box className="card">
          <h2>{name}'s Profile</h2>
          <Visual background="palegreen">  
            <p>Restrictions: {restriction}</p> 
            <p>Preference: {diet}</p>
            </Visual>
          <img src={image} alt={name}/>
        </Box>
        <Button onSubmit={() => handleDelete(id)}>Delete Account</Button>
      </ClampingMyStyleLayout>
    </div>
    )
}
export default User