//wrkjgnnkj
getBtn.addEventListener("click", getUser); // id is getBtn
let url = "https://randomuser.me/api"

getUser(); // hoisting will ensure that functions are defined before this call

function getUser() {
        // fetch returns a promise: pending until it resolves to a response object                    
    fetch(url)
        // now the promise is settled and we we have a response object
        // next: send the settled response as an argument to the next callback 
    .then(decodeData)
        // we now have a result: the json from a successful response, or we threw an error
        // next: first callback is called in the case of success, second if rejected 
    .then(success, fail);
        // if only one argument, catch handles rejected promise
    //.then(success)                                          
    //.catch(fail)
}

function decodeData(response) {     // take the response object as a parameter
    // return (response.json())
    if (response.ok) {              // 200 - 299 is true (200 is success)
        apiData.innerHTML = "response is " + response.status;
        return (response.json())    // returns promise that resolves to result of parsing as JSON
      }
      else
        throw response.status      // throw an error: the response code
}

function success(userData) {
    // A template literal is of the form `three plus four is ${ 3 + 4 }`
  apiData.innerHTML = `<img  class="user" src=${userData.results[0].picture.large} alt="rando user">
  <h2 class="user">Meet ${userData.results[0].name.first} ${userData.results[0].name.last}</h2>`;

  const apiFirst = userData.results[0].name.first;
  apiform = document.querySelector("form")
  apiform.innerHTML = `<input type="hidden" name="first" value="${apiFirst}"/>`

  const apiLast = userData.results[0].name.last;
  apiform.innerHTML += `<input type="hidden" name="last" value="${apiLast}"/>`

  const apiCountry = userData.results[0].location.country;
  apiform.innerHTML += `<input type="hidden" name="country" value="${apiCountry}"/>`

  apiform.innerHTML += `<input type="submit" id="addBtn" class="btn" value="Add This One"></button>`
}

function fail(error) {
    apiData.innerHTML = "Something went wrong with parsing JSON."
    mdnCodes = "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"
    apiData.innerHTML+= `<br>The problem: <a href=${mdnCodes}>${error} Error</a>`
}