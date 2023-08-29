import React, { useCallback, useState, useEffect } from 'react'
import LocationGMap from './LocationGMap'
import Notification from './Notification'

function ContactUs() {
    console.log('ContactUs: Start render');

    const [count, setCount] = useState(0);
    const [state, setState] = useState({ name: "", email: "", phonenumber: "", message: "" });

    const [formData, setData] = useState(state);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(true);
    const [notificationMessage, setNotificationMessage] = useState("");

    /* const updateName = (e) => {
        setData({ ...formData, name: e });
    };
    const updateEmail = (e) => {
        setData({ ...formData, email: e });
    };
    const updatePhonenumber = (e) => {
        setData({ ...formData, phonenumber: e });
    };
    const updateMessage = (e) => {
        setData({ ...formData, message: e });
    }; */

    const onChangeHandeler = (e) => {
        console.log(e.target);
        const { name, value } = e.target;
        setData({ ...formData, [name]: value });
        console.log(formData);
    };

    const handleSubmit = (e) => {
        console.log("Log:" + count);
        e.preventDefault();

        setIsSubmit(true);
        setFormErrors(validate(formData));

        console.log("handleSubmit isSubmit:" + isSubmit);
        console.log("handleSubmit formErrors:" + formErrors);
        if (count === 0) {
            if (isSubmit && Object.keys(formErrors).length === 0) {
                // alert(`Form Details: ${state.name} ${state.email} ${state.phonenumber} ${state.message} ${count} `)
                clearContent();
                setCount(1);
                storeValues();
                setNotificationMessage("Your feedback is Submitted, Thank you.");
            } else {
                setNotificationMessage("Unable to submit the feedback, Retry later.");
            }
        } else {
            console.log("You have already Submitted the feedback, Thank you.");
            setNotificationMessage("You have already Submitted the feedback, Thank you.");
        }
    };

    const clearContent = () => {
        console.log("Clear Fields")
        setData({ ...formData, name: "", email: "", phonenumber: "", message: "" });
    };

    const validate = (values) => {
        const errors = {}

        if (!values.name) {
            errors.name = "Enter the value for Name";
        }

        if (!values.email) {
            errors.email = 'Enter the value for Email';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address'
        }

        if (!values.phonenumber) {
            errors.phonenumber = "Enter the value for Phone Number";
        } else if (!/^\d{10}$/i.test(values.phonenumber)) {
            errors.phonenumber = 'Enter Phone number of 10 digit number'
        }

        if (!values.message) {
            errors.message = "Enter the value for Message";
        }
        return errors;
    }

    const storeValues = useCallback(() => {
        console.log(`Store Details: ${formData.name} ${formData.email} ${formData.phonenumber} ${formData.message} ${count} `);
        const data = {
            "name": formData.name,
            "email": formData.email,
            "phonenumber": formData.phonenumber,
            "message": formData.message
        };
        console.log(data);
        console.log("String:" + JSON.stringify(formData, null, 2));

        fetch("https://script.google.com/macros/s/AKfycbwSIKbVFOzTA0YT9TkIB-t0aQL0qL8xFZZpUrCl6vpwOMNuUbFjZm232nr7Soh_T0AL/exec?action=add", {
            method: "POST",
            body: JSON.stringify(formData, null, 2)
        }).then((response) => console.log(response))
            .catch((error) => console.log("storeValues: Fetch Error in Adding data into Excel:[" + error + "]~[" + JSON.stringify(data) + "]"));

    }, [formData]);

    useEffect(() => {
        console.log("useEffect")
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formData);
            setIsSubmit(true);
        } else {
            setIsSubmit(false);
        }
    }, [count, formErrors]);

    return (
        <React.Fragment>
            <div className="contact_section layout_padding">
                <div className="container">
                    <h1 className="contact_text">Contact Us</h1>
                </div>
            </div>

            <div className='contact_section_2 layout_padding'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-6 padding_0'>
                            <div className='mail_section'>
                                <div className='email_text'>
                                    {/* <pre> {JSON.stringify(formData, undefined, 2)} </pre> */}
                                    {/* <pre> {notificationMessage} </pre> */}
                                    { notificationMessage && <Notification title="Alert" message={notificationMessage} /> }
                                    <form onSubmit={(e) => handleSubmit(e)} >
                                        <p>{formErrors.name}</p>
                                        <div className='form-group'>
                                            <input className='email-bt' type='text' name="name" value={formData.name} placeholder='Name' onChange={onChangeHandeler} />
                                        </div>
                                        <p>{formErrors.email}</p>
                                        <div className='form-group'>
                                            <input className='email-bt' type='text' name="email" value={formData.email} placeholder='Email' onChange={onChangeHandeler} />
                                        </div>
                                        <p>{formErrors.phonenumber}</p>
                                        <div className='form-group'>
                                            <input className='email-bt' type='text' name="phonenumber" value={formData.phonenumber} placeholder='Phone Number' onChange={onChangeHandeler} />
                                        </div>
                                        <p>{formErrors.message}</p>
                                        <div className='form-group'>
                                            <textarea id='comment' rows='5' className='massage-bt' type='text' name="message" value={formData.message} placeholder='Message' onChange={onChangeHandeler} />
                                        </div>
                                        <div className='send_btn'>
                                            <div className='main_bt' type='text' onClick={handleSubmit}> <a href="#" text="SEND">Submit</a></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <LocationGMap />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ContactUs