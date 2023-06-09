import './collapse.scss';
import arrowUp from '../../assets/arrow-up.png';
import arrowDown from '../../assets/arrow-down.png';
import { useState } from 'react';
//Créer le composant Collapse avec les defferent class en dépendence de la page
function Collapse({title , content}) { 
    const [toggle, setToggle] = useState(true);
    const aboutPage = window.location.pathname === "/about";
return(
       <div className={aboutPage ? "collapse_about" :"collapse"}>
            <div className="title"  onClick={() => setToggle(!toggle)} >
                {title}
                <img src={toggle ? arrowDown : arrowUp} alt="pour ouvrir la description" className="arrow" />
            </div>
            <div className={toggle ? "content_hidden":"content"}> 
                {Array.isArray(content) ? 
                content.map((item, index) =>{
                    return(
                        <p key={index}>{item}</p>
                    )
                }):
                content
                }
            </div>
       </div>
    )
}
export default Collapse