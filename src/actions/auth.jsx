import Cookies from 'js-cookie';
import axios from 'axios';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
} from './types';


export const signUp = (email, password, re_password) => async dispatch => {
    const csrfToken = Cookies.get('csrftoken');
    console.log('CSRF Token:', csrfToken);
    
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken  
        }
    };

    console.log(config,"this is config");  

    const body = JSON.stringify({ email, password, re_password });

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/accounts/sign_up`, body, config);

        if (res.data.error) {
            dispatch({
                type: REGISTER_FAIL
            });
        } else {
            dispatch({
                type: REGISTER_SUCCESS
            });
        }
    } catch (err) {
        dispatch({
            type: REGISTER_FAIL
        });
    }
};
