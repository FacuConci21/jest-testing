import axios from 'axios';

export function getDataFromAPI(url) {
    return axios.get(url)
        .then(({ data }) => data)
        .finally( () => console.log('done'));
}