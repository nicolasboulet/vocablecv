// import Mercury from '@postlight/mercury-parser';


  // const buttonMercury = document.getElementById("mercuryButton");

  // buttonMercury.addEventListener("click", (event) => {

  //   const cors = 'https://cors-anywhere.herokuapp.com/';
  //   let targetSite = document.getElementById("mercuryInput").value;
  //   const urlTarget = `${cors}${targetSite}`;

  //   const extractContent = (html) => {
  //     return (new DOMParser).parseFromString(html, "text/html") .
  //         documentElement . textContent;
  // }

  //   const sendData = (data) => {
  //     const test = data ;
  //     const url = 'http://127.0.0.1:3000/api/v1/audios';
  //       fetch(url, {
  //         method: 'POST',
  //         headers: { "Content-Type": "application/json",
  //                    "Accept": "application/json"
  //          },
  //         body: JSON.stringify({ "audio": { "title": `${data.title}`,
  //                                           "text_to_transcript": `${extractContent(data.content)}`,
  //                                           "text_html": `${data.content}`
  //         }})
  //       })
  //   }
  //   Mercury.parse(urlTarget).then(result => sendData(result));
  // })



// export { mercuryExtract };