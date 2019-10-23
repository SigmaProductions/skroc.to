
# Skroc.To backend

Skroc.To backend is RESTful API webserver for text summarization clients (we are planning on implementing website and forum bot)

## Installation

Use npm to install dependencies 

```bash
npm install 
```

## Usage
For starting server/running tests
```npm

npm run start #starts express server on port 3000
npm run test #run tests 
```
Swagger is setup so if you go to <http://localhost:3000/api> you will get swagger UI

## Endpoint 


* **URL**
  "/summarize"


* **Method:**
  `POST`

* **Data Params**
   `TextToSummarize=[string]`

* **Success Response:**

    **Code:** 200   
    **Content:** ` [string] `
 
* **Error Response:**

  * **Code:** *TODO*   
    **Content:** `{ [error : string] }`

* **Sample Call:**
 > curl -X POST "http://localhost:3000/summarize" -H "accept: application/json" -H "Content-Type: application/json" -d "{ \"TextToSummarize\": \"Podczas wszystkich dyskusji o rozwoju firm, produkcyjnych nieustannie poruszany jest temat braku rąk do pracy. Przedstawiciele międzynarodowego biznesu\"}"

* **Notes:**
summarization is not yet implemented
  
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)