import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { useState } from'react';
import {TailSpin} from "react-loader-spinner";
import { Table, Tooltip, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Typography, AppBar, Toolbar, Input } from '@mui/material';
export default function Home() {

  const [data, setData] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [isLoading, setLoading] = useState(false);


  const saveInput = () => {
    return document.getElementById("twitterHandle").value;
  }

  const handleSubmit = (event) => {
    const twitterHandle = saveInput();
    event.preventDefault();
    setLoading(true);


    // Using the Fetch API to make a basic API call from the client

    fetch(`https://us-central1-simplemap-d3ec4.cloudfunctions.net/app/api/getDemagogues/?twitterHandle=${twitterHandle}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        setData(data);
        setShowTable(true);
        setLoading(false);
      })
      .catch(error => {
       console.error('Error:', error);
       setLoading(false);
     });
  };


  const handleUnfollow = (url) => {
    window.open(url, '_blank');
  };


const demagogueData = [ //temporary, replace with actual data, sort
    { name: "Ben Gvir", hate_score: 85, url: "https://twitter.com/itamarbengvir" },
    { name: "Ben Caspit", hate_score: 59, url: "https://twitter.com/BenCaspit" },
    { name: "Bibi", hate_score: 26, url: "https://twitter.com/netanyahu" },
]
  return (
    <div className={styles.container}>
      <Head>
        <title>undemagogue (WIP)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

       <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Undemagogue 
          </Typography>
          {/* Add more navigation items here */}
        </Toolbar>
      </AppBar>

      <main style={{position: 'elative', height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h1" component="h1" className={styles.title}>Welcome to undemagogue</Typography>

        <form onSubmit={handleSubmit} style={{marginTop: '20px', justifyContent: 'center', alignItems: 'center'}}>
          <Input type="text" id="twitterHandle" placeholder="Enter your text" />
          <Button type="submit">Submit</Button>
        </form>

  
      {isLoading ? (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
            <TailSpin type="Loader" color="#00BFFF" height={80} width={80} />
            </div> 
      ) : (
        showTable && (
       <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Hate Score
                  <Tooltip title="Hate score represents the level of hate or dislike towards a person or a topic.">
                        <span style={{ marginLeft: 5, cursor: 'pointer', fontSize: '12px', color: 'teal', borderRadius: '50%', padding: '2px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', border: '1px solid white' }}>?</span>
                      </Tooltip>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {demagogueData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.hate_score}</TableCell>
                  <TableCell><Button type="button" onClick={()=> handleUnfollow(item.url)}>Unfollow</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>)
      )}

      </main>

      {/*... */}
    </div>
  );
}