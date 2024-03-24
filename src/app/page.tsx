import Link from "next/link";
import CardRepository from "@/components/cardRepository";

export default function Home() {
  const date = new Date();

  return (
    <>
      <nav>
        <div className="logo">
          <h1>Gabriel Olveira</h1>
        </div>
        <ul>
          <li>Sobre mim</li>
          <li>Projects</li>
          <li>Contacts</li>
        </ul>
      </nav>
      <main>
        <div className="info">
          <img src="" alt="" />
          <div className="content">
            <h1>Gabriel Oliveira</h1>
            <p>Technical Student & Back-end Developer</p>
            <ul>
              <li>
                <Link href={"https://github.com/polabiel"}>Github</Link>
              </li>
              <li>
                <Link href={"https://instagram.com/polabiel"}>instagram</Link>
              </li>
              <li>
                <Link href={"https://www.linkedin.com/in/polabiel/"}>
                  Linkedin
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="actions-buttons">
          <ul>
            <li>
              <button>Download CV</button>
            </li>
            <li>
              <button>E-mail</button>
            </li>
            <li>
              <button>Linkedin</button>
            </li>
          </ul>
        </div>
        <div className="tabs-buttons">
          <ul>
            <li>
              <button>Portflio</button>
            </li>
            <li>About</li>
          </ul>
        </div>
        <div className="about-me">
          <p>
            I am currently a technical student at COTUCA, one of the most
            prestigious technical schools in Brazil. My focus is on backend
            development, where I am constantly honing my skills and expanding my
            knowledge. I am passionate about technology and always eager to
            learn new things. As a backend developer, I understand the
            importance of creating robust and secure server-side applications. I
            am proficient in various backend technologies and always stay
            updated with the latest trends in the industry. My goal is to use my
            skills and education to contribute to meaningful projects and make a
            difference in the tech world.
          </p>
        </div>
        <div className="projects"><CardRepository /></div>
      </main>
      <footer>
        <p>© Gabriel Oliveira. {date.getFullYear()} All rights reserved</p>
      </footer>
    </>
  );
}
