import SearchBar from "../searchBar/searchBar";
import styles from "./navBar.module.css";
import { NavLink } from "react-router-dom";

export default function NavBar(props) {
   // props = { onSearch=función }
   return (
      <div className={styles.container}>
         <NavLink to="/about">
            <button>
               <span>About</span>
            </button>
         </NavLink>
         <NavLink to="/home">
            <button>
               <span>Home</span>
            </button>
         </NavLink>
         <SearchBar onSearch={props.onSearch} />
      </div>
   );
}