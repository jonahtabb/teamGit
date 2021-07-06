import React, { useState } from 'react';

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
    <>
      <button onClick={fetcher}>Github</button>
      {resultsArr && <HelperComp info={resultsArr} />}
    </>
  )
};

export default GithubComp;

const HelperComp = (props) => {
  return (
    <>
      {props.info.map(n => {
        return( <>
          <p>{n.message}</p>
          <p>{n.committer.date}</p>
          <p>{n.author.name}</p>
          </>
          )
      })}
    </>
  )
};
