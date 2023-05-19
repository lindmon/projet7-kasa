import './banner.scss';
//Rendre le banner en dépendance de la page chargée
function Banner() {
    const path = window.location.pathname;
    if(path === "/") {
        return(
            <section className="banner">
                <p className='banner-text'>Chez vous, partout et ailleurs</p>
            </section>
        )
    } if (path === "/about") {
        return(
            <section className="banner_about">
            </section>           
        )
     }
}
export default Banner