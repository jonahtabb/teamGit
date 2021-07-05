import React, { useState } from 'react';

const GithubComp = (props) => {
  const [results, setResults] = useState(null);
  const gitURL = 'https://api.github.com/repos/jonahtabb/teamGit/commits';
  fetch(gitURL)
    .then((res) => res.json())
    .then((results) => {
      let resultsArr = [];

      resultsArr = results.map((result) => {
        return result.commit.author.name;
      });
      console.log(resultsArr);
    });
  return <div>{/* <HelperComp nameArr={results} /> */}</div>;
};

export default GithubComp;

const HelperComp = (props) => {
  let nameList = '';
  for (let username of props.nameArr) {
    nameList += `<p>${username.commit.author.name} </p>`;
  }
  console.log(nameList);

  return nameList;
};
