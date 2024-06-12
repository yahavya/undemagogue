import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Typography } from '@mui/material';
export default function Home() {

   const saveInput = () => {
    return document.getElementById("twitterHandle").value;
  }

  const handleSubmit = (event) => {
    const twitterHandle = saveInput();
    event.preventDefault();
  
  // Using the Fetch API to make a basic API call from the client

  fetch(`https://us-central1-simplemap-d3ec4.cloudfunctions.net/app/api/getDemagogues/?twitterHandle=${twitterHandle}`,  {
    method: 'GET'
  })
  .then(response => response.json())
  .then(dataRes => console.log(dataRes))
  .catch(error => console.error('Error:', error));

  };

  const handleUnfollow = (url) => {
    window.open(url, '_blank');
  };


const data = [ //temporary, replace with actual data, sort
    { name: "Ben Gvir", hate_score: 85, url: "https://twitter.com/itamarbengvir" },
    { name: "Ben Caspit", hate_score: 59, url: "https://twitter.com/itamarbengvir" },
    { name: "Bibi", hate_score: 26, url: "https://twitter.com/itamarbengvir" },
]
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{position: 'elative', height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h1" component="h1" className={styles.title}>Welcome to undemagogue</Typography>

        <form onSubmit={handleSubmit} style={{marginTop: '20px', justifyContent: 'center', alignItems: 'center'}}>
          <input type="text" id="twitterHandle" placeholder="Enter your text" />
          <Button type="submit">Submit</Button>
        </form>

       <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Hate Score</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.hate_score}</TableCell>
                  <TableCell><Button type="button" onClick={()=> handleUnfollow(item.link)}>Unfollow</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </main>

      {/*... */}
    </div>
  );
}