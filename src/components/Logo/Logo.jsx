import logoAlanding from './assets/logoA.avif'
import classes from './Logo.module.css'

const Logo = () =>{

    return(
        <a href="#"><img className= {classes.imgLogo} src= {logoAlanding} alt="Alanding" /></a>
    )
}

export default Logo