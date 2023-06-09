import './error.scss';
import { Link, useRouteError } from 'react-router-dom';
//Créer le composant Error avec tous les composants nécessaire
function Error() {
    const error = useRouteError();
    console.log(error);
    return(
            <section className='errorSection'>
                <div className="error_info">
                    <h2 className='error_info_title'>404</h2>
                    <p className='error_info_text'>Oups! La page que vous demandez n'existe pas.</p>
                </div>
                <Link to='/' className='error_linkToHome'>Retourner sur la page d'accueil</Link>
            </section>
        
    )
}
export default Error