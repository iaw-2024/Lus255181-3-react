import { Card } from "./Card"

export const Gallery = ({ recipes }) => {
    return <div className="gallery">
        {recipes ?
            recipes.map(recipe => 
            <Card key={recipe.nombre} recipe={recipe} />
          ) : <span>Cargando ...</span>
        }
      </div>
}