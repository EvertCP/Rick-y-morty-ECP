import style from './card.module.css'
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
     <div className={style.card}>
           <div className={style.dataContainer}>
           <button className={style.button}
              onClick={props.onClose}
           >X</button>
              <h2>{props.name}</h2>
              <h4>{props.species}</h4>
              <h4>{props.gender}</h4>
           </div>
        <Link to={`/detail/${props.id}`} >
           <img  className={style.image} src={props.image} alt={props.name} />
        </Link>
     </div>
  );
}

// props = { }
// name: Nombre
// species: Especie
// gender: Género
// image: Imagen
// onClose: La función que se va a ejecutar cuando el usuario haga click en el botón de cerrar.
