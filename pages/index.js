import ReactDOM from "react-dom/client";
// import { Link } from 'react-router';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Blogs from "./demagogues_view";
import Link from 'next/link'

import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useNavigate } from "react-router-dom";


export default function Home() {
  // let navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    // Placeholder
    serverResponse = JSON.stringify({
      "demagogues":
        [
          { "handle": "@bot1", "hate_rate": 10, "fake_rate": 73 },
          { "handle": "@bot2", "hate_rate": 20, "fake_rate": 33 },
          { "handle": "@bot3", "hate_rate": 30, "fake_rate": 43 }
        ]
    })

    demagogues = JSON.parse(serverResponse)
    // navigate(path)
    // Add your form submission logic here
  };

  // Using the Fetch API to make a basic API call from the client

  fetch('https://getdemagogue-es5dg2hjaa-uc.a.run.app',  {
    method: 'GET',
    mode: 'no-cors'
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
        <Link legacyBehavior href={{ pathname: 'get_demagogues', query: { data: JSON.stringify({ 'a': 1 }) } }}>
          <a>About us</a>
        </Link>
      </main>

      {/*... */}
    </div >
  );
}
