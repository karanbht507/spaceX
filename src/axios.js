import axios from "axios";
import querystring from "querystring";

let config = {
  headers: { accept: "application/json" }
};

class RestClient {
  /*************** GET Method ***********/
  static get(params = {}) {
    let query = querystring.stringify(params);
    console.log("------------params", params, query);
    return new Promise(function(fulfill, reject) {
      axios
        .get(
          "https://api.spacexdata.com/v3/launches?limit=100&" + query,
          config
        )
        .then(function(response) {
          fulfill({ status: response.status, data: response.data });
        })
        .catch(function(error) {
          reject(error);
        });
    });
  }
}

export default RestClient;
