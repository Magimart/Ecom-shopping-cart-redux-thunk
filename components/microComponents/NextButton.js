import styles from '../../styles/test.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight} from "@fortawesome/free-solid-svg-icons";
import React from "react";



const  NextPageButton = React.forwardRef(({ onClick, href }, ref) => {
       return (
          <button className={styles.nextButton} href={href} onClick={onClick} ref={ref}>
              <FontAwesomeIcon id={styles.nextButtonIcon} icon={faChevronRight}/>
         </button>
      )
    })
export default NextPageButton;

  




