import { useState, useEffect } from "react";
import styled from "styled-components"

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    apiData();
  }, []);

  const apiData = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    const data = await response.json();

    console.log(data);
    setPopular(data.recipes);
  };

  return popular.map((recipe) => {
    <Wrapper >
    return (
   
        <Card key={recipe.id}>
        <img src={recipe.image} alt={recipe.title} />
        <p>{recipe.title}</p>
        </Card>
   
    );   </Wrapper>
  });
};

// const Wrapper = styled.div `
//   border: 1px solid red;


// `;
// const Card = styled.div `
//   border: 1px solid red;
// `;

// export default Popular;
