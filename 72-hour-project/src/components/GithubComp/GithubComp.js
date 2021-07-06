import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'reactstrap'


const GithubComp = (props) => {
  const [resultsArr, setResultsArr] = useState(null);
  const gitURL = 'https://api.github.com/repos/jonahtabb/teamGit/commits';

  const fetcher = () => {
    fetch(gitURL)
      .then((res) => res.json())
      .then((results) => {
        console.log(results)
        let resultsArr = [];


        resultsArr = results.map((result) => {
          return result.commit
        });

        setResultsArr(resultsArr)

      });
  }
  return(
    <div className="card my-4">
      <h2>Git Hub Commit History:</h2>
      <Button className="custom-button" onClick={fetcher}>Github</Button>
      {resultsArr && <HelperComp info={resultsArr} />}
    </div>
  )
};

export default GithubComp;

const HelperComp = (props) => {
  return (
    <>
      {props.info.map(n => {
        return( <div className="card my-2 border">
          <p>{n.message}</p>
          <p>{n.committer.date}</p>
          <p>{n.author.name}</p>
          </div>
          )
      })}
    </>
  )
};
