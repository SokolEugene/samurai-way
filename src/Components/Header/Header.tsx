import logo from '../../images/logo.png'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {DataType} from "../redux/auth-reducer";

type HeaderPropsType = {
    login: string | null
    isFetching?: boolean | undefined
    setAuthUserData: (data: DataType) => void;
}

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <NavLink to={`/profile`}><img className={s.logoHeader} src={logo} alt=""/></NavLink>
            <div className={s.login}>
                {props.isFetching ? <p>logout</p> : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )
}