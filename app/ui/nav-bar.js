import NavLink from './nav-link';

export default () => {
    return (
        <nav className="flex flex-col gap-4 border-e  h-vh">
            <p>Nyistragram</p>
            <NavLink ruta="/" texto="Home"></NavLink>
            <NavLink ruta="/create" texto="Create"></NavLink>
            <NavLink ruta="/search" texto="Search"></NavLink>
            <NavLink ruta="/profile" texto="Profile"></NavLink>

        </nav>
    )
}