import styles from '../../styles/Layout.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const  PrevPageButton = React.forwardRef(({ onClick, href }, ref) => {
      return (
         <button className={styles.prevButton} href={href} onClick={onClick} ref={ref}>
             <FontAwesomeIcon id={styles.prevButtonIcon} icon={faChevronLeft}/>
        </button>
     )
   })
export default PrevPageButton;