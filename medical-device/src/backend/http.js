import axios from 'axios';

// defalut timeout
axios.defaults.timeout = 1000;

// set header of post request
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.patch['Content-Type'] = 'application/json';


/**
 * get method
 * @param {String} url [request url]
 * @param {Object} params [request parameters]
 */

export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, params)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
  });
}

/**
 * post method
 * @param {String} url [request url]
 * @param {Object} params [request parameters]
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
  });
}



