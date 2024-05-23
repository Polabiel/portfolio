import Link from "next/link";

export default function() {
    return (
        <nav>
            <div className="logo">
                <h1>Gabriel Olveira</h1>
            </div>
            <ul>
                <li>
                    <Link href={"about"}>Sobre mim</Link>
                </li>
                <li>
                    <Link href={"projects"}>Projetos</Link>
                </li>
                <li>
                    <Link href={"Contacts"}>Contatos</Link>
                </li>
            </ul>
        </nav>
    )
}