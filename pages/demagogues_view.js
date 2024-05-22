import Head from 'next/head';
import styles from '../styles/Home.module.css';

const DemagoguesView = (asdf) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>{asdf} These are your demagogues:</h1>
      </main>

      {/*... */}
    </div>
  );
}

const Blogs = () => {
  return <h1>Blog Articles</h1>;
};

export default Blogs;
