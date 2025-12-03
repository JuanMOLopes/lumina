import "./NavBar.css";

export default function NavBar() {
    return (
        <nav className="sidebar">
            <div className="sidebar-logo">
                <img src="logo.png" alt="Logo" />
                <h2>Lumina</h2>
            </div>

            <ul className="sidebar-menu">
                <li><a href="/index.html">Home</a></li>
                <li><a href="/projeto.html">Projeto & grupo</a></li>
            </ul>
        </nav>
    );
}