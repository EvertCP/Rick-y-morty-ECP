import { useState } from "react";
import styles from "./searchBar.module.css";

export default function SearchBar(props) {
   // props = { onSearch=función }

   const [character, setCharacter] = useState("");
   const handleChange = e => {
      const {value} = e.target;
      //console.log(e);
      setCharacter(value);
   }

   return (
      <div className={styles.container}>
         <input className={styles.input}
            type="search"
            name="search"   
            id="search"
            onChange={handleChange}
         />
         <button onClick={() => props.onSearch(character)} className={styles.button} >
            <span>Agregar</span>
            </button>
      </div>
   );
}