export const Card = ({ recipe }) => {

    return <div className='card'>
        <div>
            <h2>{recipe.nombre}</h2>
            <img src={recipe.imagen} alt={recipe.nombre} />
        </div>
        <div>
            <h2>Ingredientes</h2>
            <ul>
                {recipe.ingredientes.map(ingrediente =>
                    <li>{ingrediente}</li>
                )}
            </ul>
        </div>
        <div>
            <h2>Pasos</h2>
            <ol>
                {recipe.pasos.map(paso =>
                    <li>{paso}</li>
                )}
            </ol>
        </div>
    </div>
}