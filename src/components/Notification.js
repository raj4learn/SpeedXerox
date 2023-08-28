import React, { useState, useCallback, useEffect } from 'react'

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Fade from "@mui/material/Fade";

function Notification(props) {
    /* seconds, severity */
    const { title, message } = props;
    const seconds=3;
    const [alertVisibility, setAlertVisibility] = useState(false);
    
    useEffect(() => {
        console.log("Notification useEffect")
        setAlertVisibility(true);
    }, [message]);

    const handleClose = () => {
        setAlertVisibility(false);
    }
    const millSec = seconds*1000;
    return (
        <Fade
            in={alertVisibility} //Write the needed condition here to make it appear
            timeout={{ enter: millSec, exit: millSec }} //Edit these two values to change the duration of transition when the element is getting appeared and disappeard
            addEndListener={() => {
                setTimeout(() => {handleClose()}, 2000);
            }}
        >
            <Alert severity="success" variant="standard" className="alert">
                <AlertTitle>{title}</AlertTitle>
                {message}
            </Alert>
        </Fade>
    )
}

export default Notification;

