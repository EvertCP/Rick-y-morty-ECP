import Card from '../Card/Card.jsx'
import style from './cards.module.css'


export default function Cards(props) {
   // props = { characters: [ {--}, {--}, {---} ] }
   const { characters } = props;
   // characters = [ {--}, {--}, {---} ]
   return (
      <div className={style.container}>
         {characters.map(character => (
            <Card 
               id={character.id}
               key={character.id}
               name={character.name}
               species={character.species}
               gender={character.gender}
               image={character.image}
               onClose={() => props.onClose(character.id)}
            />
         ))}
      </div>
   );
}
