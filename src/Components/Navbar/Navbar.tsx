import s from './Navbat.module.css'
export const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <div className={s.item}><a>Profile</a></div>
            <div className={s.item}><a>Messages</a></div>
            <div className={s.item}><a>News</a></div>
            <div className={s.item}><a>Music</a></div>
            <div className={s.item}><a>Settings</a></div>
        </nav>
    )
}