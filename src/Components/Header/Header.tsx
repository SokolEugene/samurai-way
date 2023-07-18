
import logo from '../../images/logo.png'
import s from './Header.module.css'
export const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.logoHeader} src={logo} alt=""/>
        </header>
    )
}