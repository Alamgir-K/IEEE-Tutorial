"use client"

import Link from 'next/link';
import Navigation from '../../components/navigation';
import styles from '../../styles/Page.module.css'
import { useState } from 'react';
import axios from 'axios';

const Message = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone_number: '',
        message: '',
    });
    const [apiResponse, setApiResponse] = useState(null);

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
        console.log(formData);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('https://cloudsking.com/react_api.php', formData);
            setApiResponse(response.data);
            console.log(response.data);
        } catch (error) {
            setApiResponse(error.message);
            console.log(error.message);
        }
    };

    return (
        <main className={styles.main}>
            <Navigation activePage="message" />
            <h1>Hey, this is "send message" page</h1>

            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    placeholder="tell me your name"
                    value={formData.name}
                    onChange={handleChange}
                />

                <label>Phone number:</label>
                <input
                    type="text"
                    name="phone_number"
                    placeholder="tell me your phone number"
                    value={formData.phone_number}
                    onChange={handleChange}
                />

                <label>Message:</label>
                <input
                    type="text"
                    name="message"
                    placeholder="tell me your message"
                    value={formData.message}
                    onChange={handleChange}
                />

                <button type="submit">Submit</button>
            </form>
            {apiResponse && <h3>{apiResponse}</h3>}
            <h3>
                <Link href="/">Back</Link>
            </h3>
        </main>
    );
};

export default Message;