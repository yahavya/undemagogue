// pages/about.js
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Typography, AppBar, Toolbar, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Us - undemagogue (WIP)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Undemagogue
          </Typography>
          <Link href="/" passHref>
            <Button color="inherit">Home</Button>
            </Link>
          {/* Add more navigation items here */}
        </Toolbar>
      </AppBar>

      <main style={{ position: 'elative', height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h1" component="h1" className={styles.title}>
          About Us
        </Typography>

        <Typography variant="body1" component="p" style={{ marginTop: '20px' }}>
          We're Ilai and Yaron, two devs who are passionate about democracy. We want to help you with finding the people in your community who are hateful towards others, or are spreading fake news. Using LLMs, we rate the hate score of the people you follow, and suggest you unfollow those who have a track record of being hateful.
        </Typography>

        {/* <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
             <Image
              src="/ilai.png"
              width={450}
              height={450}
              alt="Picture of Ilai"
              style={{ objectFit: 'cover',
              marginLeft: '200px',
              borderRadius: '5px',
              border: '1px solid #fff',}}
            />
            <Image
              src="/yaron.png"
              width={450}
              height={450}
              alt="Picture of Yaron"
              style={{
              objectFit: 'cover',
              marginRight: '200px',
              borderRadius: '5px',
              border: '1px solid #fff',
            }}

              
            />
            </div> */}
      </main>
    </div>
  );
}