import styles from "./page.module.scss"

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1>
        <span># </span>Hi! I&#39;am <span>Karol</span>!
      </h1>
      <h3>
        <span>### </span>Full Stack <span>Developer</span> from Poland
      </h3>
      <hr />
      <p>
        <span className={styles.text_yellow}>&#123;</span>
        <ul>
          <li>
            <span className={styles.text_blue}>&#34;Specialization&#34;</span>
            <span className={styles.text_white}>: </span>&#34;I&#39;am
            specializing in creating pixel perfect Interfaces. Currently my
            favorite stack to do that is{" "}
            <strong>React + Typescript + TailwindCSS</strong>&#34;
            <span className={styles.text_white}>,</span>
          </li>
{/* stack */}
          <li>
            <span className={styles.text_blue}>&#34;Stack&#34;</span>
            <span className={styles.text_white}>: </span>
            <span className={styles.text_pink}>&#123;</span>
            <ul>
              <li>
                <span className={styles.text_blue}>&#34;Frontend&#34;</span>
                <span className={styles.text_white}>: </span>&#34;React,
                Typescript, JavaScript ES6+, Redux&#34;
                <span className={styles.text_white}>,</span>
              </li>
              <li>
                <span className={styles.text_blue}>&#34;Backend&#34;</span>
                <span className={styles.text_white}>: </span>&#34;Node.js,
                Express, MongoDB, PostgreSQL&#34;
                <span className={styles.text_white}>,</span>
              </li>
              <li>
                <span className={styles.text_blue}>&#34;CSS&#34;</span>
                <span className={styles.text_white}>: </span>&#34;TailwindCSS,
                SASS, CSS Modules, Bootstrap&#34;
                <span className={styles.text_white}>,</span>
              </li>
              <li>
                <span className={styles.text_blue}>&#34;Testing&#34;</span>
                <span className={styles.text_white}>: </span>&#34;JEST, React
                Testing Library, Cypress, Playwright&#34;
                <span className={styles.text_white}>,</span>
              </li>
              <li>
                <span className={styles.text_blue}>&#34;Working_Environment&#34;</span>
                <span className={styles.text_white}>: </span>&#34;Linux, Git, Github, Jira, Confluence, Figma&#34;
                <span className={styles.text_white}>,</span>
              </li>
              <li>
                <span className={styles.text_blue}>&#34;Other&#34;</span>
                <span className={styles.text_white}>: </span>&#34;Wordpress, WooCommerce&#34;
              </li>
            </ul>
            <span className={styles.text_pink}>&#125;</span>
          </li>
          {/* //background */}
          <li>
            <span className={styles.text_blue}>&#34;AI&#34;</span>
            <span className={styles.text_white}>: </span>&#34;I&#39;am using ChatGPT to prototyping (generating more realistic text placeholders), in my learning process (in limited way, i do not trust it :D)/ MidJourney/LeonardoAi to generate placeholders/inspiration &#34;
            <span className={styles.text_white}>,</span>
          </li>
          <li>
            <span className={styles.text_blue}>&#34;Background&#34;</span>
            <span className={styles.text_white}>: </span>&#34;I have always love to create. Programming is art in itself. But I am experienced in other related occupations. So in my toolbox are many semi related to programming skills, such as: Photography, Composition, Esthetics, 2D Animation, UI/UX&#34;
            <span className={styles.text_white}>,</span>
          </li>
          <li>
            <span className={styles.text_blue}>&#34;Experience&#34;</span>
            <span className={styles.text_white}>: </span>&#34;I&#39;am
            experienced with various Frontend and Backend technologies&#34;
            <span className={styles.text_white}>,</span>
          </li>
        </ul>
        <span className={styles.text_yellow}>&#125;</span>
      </p>
    </div>
  )
}
