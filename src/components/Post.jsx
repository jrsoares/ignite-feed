import styles from './Post.module.css';
export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/jrsoares.png"
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>Júnior Soares</strong>
            <span>Web developer</span>
          </div>
        </div>
        <time title="03 de outubro às 16:48">Publicado há 1 hora</time>
      </header>

      <div className={styles.content}>
        <p>Fala pessal </p>
        <p>Acabei de fazer mais um projeto pro meu portifolio</p>
        <p>
          <a href="#">jr/blog</a>
        </p>
        <p>
          <a href="">#novoprojeto #portifa</a>
        </p>
      </div>
    </article>
  );
}
