import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  // Using the Fetch API to make a basic API call from the client

  fetch('https://us-central1-simplemap-d3ec4.cloudfunctions.net/app/api/test',  {
    method: 'GET'
  })
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>Welcome to Next.js!</h1>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter your text" />
          <button type="submit">Submit</button>
        </form>
      </main>

      {/*... */}
    </div>
  );
}