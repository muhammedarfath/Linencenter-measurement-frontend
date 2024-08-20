import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const CSRFToken = () => {
    const [csrftoken, setcsrftoken] = useState('');

    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                await axios.get("http://127.0.0.1:8000//accounts/csrf_cookie");
                const token = getCookie('csrftoken');
                setcsrftoken(token);
                console.log(csrftoken);
                Cookies.set('csrftoken', token);  
            } catch (err) {
                console.error("CSRF token fetching failed");
            }
        };

        fetchData();
    }, []);

    return (
        <input type='hidden' name='csrfmiddlewaretoken' value={csrftoken} />
    );
};

export default CSRFToken;
