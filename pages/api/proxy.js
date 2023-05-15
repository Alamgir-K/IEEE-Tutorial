import axios from 'axios';
import qs from 'qs';

export default async function handler(req, res) {
    try {
        const response = await axios.post('https://cloudsking.com/react_api.php',
            qs.stringify(req.body),
            { headers: { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8' } })

        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error connecting to the API.' });
    }
}