import React, { useCallback, useState, useEffect } from 'react'
import LocationGMap from './LocationGMap'
import { read, utils, writeFile } from 'xlsx'
import axios from 'axios';

function ContactUs() {

    const active = "active";
    const [data, setData] = useState([{}]);

    console.log('ContactUs: Start render');

    const [count, setCount] = useState(0);
    const [state, setState] = useState({ name: "", email: "", phonenumber: "", message: "" });

    const updateName = (e) => {
        setState({ ...state, name: e });
    };
    const updateEmail = (e) => {
        setState({ ...state, email: e });
    };
    const updatePhonenumber = (e) => {
        setState({ ...state, phonenumber: e });
    };
    const updateMessage = (e) => {
        setState({ ...state, message: e });
    };
    const clearContent = () => {
        console.log("Clear Fields")
        setState({ ...state, name: "", email: "", phonenumber: "", message: "" });
    };

    const storeValues = useCallback(() => {
        console.log(`Store Details: ${state.name} ${state.email} ${state.phonenumber} ${state.message} ${count} `);
        //console.log(state);
        //console.log(JSON.stringify(state, null, 2));
        //console.log(JSON.parse(JSON.stringify(state, null, 2)));
        const data = {
            Name: state.name,
            Email: state.email,
            PhoneNumber: state.phonenumber,
            Message: state.message
        };
        console.log(data);
        console.log("String:" + JSON.stringify(state, null, 2));

        axios.post('https://script.google.com/macros/s/AKfycbypbhx8j3IMGMn8tFOZ2OJjLO7sIHWuO4bl_a35cSmFbdcr1PLSZpUqlp2sLAejvKW9/exec', {
            Name: 'John',
            PhoneNumber: '987654321',
            Email: 'jd@gmail.com',
            Message: "Testing..."
        }).then((response) => console.log(response))
            .catch((error) => console.log("Error in Adding data into Excel:" + error + "~" + data));

    }, [state]);

    const storeValuesX = useCallback(() => {
        console.log(`Store Details: ${state.name} ${state.email} ${state.phonenumber} ${state.message} ${count} `);
        console.log(state);
        console.log(JSON.stringify(state, null, 2));
        console.log(JSON.parse(JSON.stringify(state, null, 2)));
        const data = JSON.parse(JSON.stringify(state, null, 2));
        const arr = []
        Object.keys(data).forEach(key => arr.push({ name: key, value: data[key] }))

        /* generate worksheet from state */
        const ws = utils.json_to_sheet(arr);
        /* create workbook and append worksheet */
        const wb = utils.book_new();
        utils.book_append_sheet(wb, ws, "Data");
        /* export to XLSX */
        writeFile(wb, "SheetJSReactAoO.xlsx");
    }, [state]);

    const handleSubmit = (e) => {
        console.log("Log:" + count);
        e.preventDefault();
        if (count == 0) {
            //alert(`Form Details: ${state.name} ${state.email} ${state.phonenumber} ${state.message} ${count} `)
            clearContent();
            setCount(1);
            storeValues();
        } else {
            fetch("https://script.google.com/macros/s/AKfycbypbhx8j3IMGMn8tFOZ2OJjLO7sIHWuO4bl_a35cSmFbdcr1PLSZpUqlp2sLAejvKW9/exec", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    data: {
                            Name: 'John',
                            PhoneNumber: '987654321',
                            Email: 'jd@gmail.com',
                            Message: "Testing..."
                        }
                    }),
            }).then((response) => response.json)
            .then((dxt) => console.log(dxt))
            .catch((error) => console.log("Fetch Error in Adding data into Excel:" + error + "~" + data));

            const  data= 
                {
                    Name: 'JohnXXX',
                    PhoneNumber: '987654321',
                    Email: 'jd@gmail.com',
                    Message: "Testing..."
                }
            ;
            axios.get(
                'https://script.google.com/macros/s/AKfycbypbhx8j3IMGMn8tFOZ2OJjLO7sIHWuO4bl_a35cSmFbdcr1PLSZpUqlp2sLAejvKW9/exec',
                data
              )
              .then(response => {
                console.log(response);
              })
              .catch(error => {
                return console.log(error);
              });
        
            /*axios.post('https://script.google.com/macros/s/AKfycbypbhx8j3IMGMn8tFOZ2OJjLO7sIHWuO4bl_a35cSmFbdcr1PLSZpUqlp2sLAejvKW9/exec', {
                Name: 'John',
                PhoneNumber: '987654321',
                Email: 'jd@gmail.com',
                Message: "Testing..."
            })
            .then((response) => console.log(response))
                .catch((error) => console.log("Error in Adding data into Excel:" + error + "~" + data));
                */

            console.log("Your Requst is already Submitted.");

            clearContent();
        }
    };

    useEffect(() => {
        console.log("useEffect")
    }, [count]);

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
                                    <form onSubmit={(e) => handleSubmit(e)} >
                                        <div className='form-group'>
                                            <input className='email-bt' type='text' name="Name" value={state.name} placeholder='Name' onChange={e => updateName(e.target.value)} />
                                        </div>
                                        <div className='form-group'>
                                            <input className='email-bt' type='text' value={state.email} placeholder='Email' onChange={e => updateEmail(e.target.value)} />
                                        </div>
                                        <div className='form-group'>
                                            <input className='email-bt' type='text' value={state.phonenumber} placeholder='Phone Number' onChange={e => updatePhonenumber(e.target.value)} />
                                        </div>
                                        <div className='form-group'>
                                            <textarea id='comment' rows='5' className='massage-bt' type='text' value={state.message} placeholder='Message' onChange={e => updateMessage(e.target.value)} />
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

/*
class ContactUs extends Component {

    constructor(props) {
        super(props)

        this.state = {
            user_name: '',
            user_email: '',
            user_phonenumber: '',
            user_message: '',
            submitted: 0
        }
    }
    handleUserName = (event) => {
        this.setState({
            user_name: event.target.value
        })
    }
    handleUserEmail = (event) => {
        this.setState({
            user_email: event.target.value
        })
    }
    handleUserPhoneNumber = (event) => {
        this.setState({
            user_phonenumber: event.target.value
        })
    }
    handleUserMessage = (event) => {
        this.setState({
            user_message: event.target.value
        })
    }
    handleSubmited = (event) => {
        this.setState({
            submitted: 1
        })
    }

    clearContent = () => {
        console.log("Clear Submited Data");
        this.setState({
            user_name: '',
            user_email: '',
            user_phonenumber: '',
            user_message: '',
            submitted: 1
        })
    }

    / * get state data and export to XLSX * /
    exportFile = () => useCallback(() => {
        / * generate worksheet from state * /
        const ws = utils.json_to_sheet(pres);
        / * create workbook and append worksheet * /
        const wb = utils.book_new();
        utils.book_append_sheet(wb, ws, "Data");
        / * export to XLSX *  /
        writeFile(wb, "SheetJSReactAoO.xlsx");
    }, [pres]);


    handleSubmit = event => {
        if (this.state.submitted == 0) {
            alert(`Form Details: ${this.state.user_name} ${this.state.user_email} ${this.state.user_phonenumber} ${this.state.user_message} `)
            this.clearContent();
        } else {
            alert("Your Requst is already Submitted.");
        }
        event.preventDefault();
    }

    render() {
        console.log('ContactUs: Start render');

        const { user_name, user_email, user_phonenumber, user_message } = this.state
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
                                        <form onSubmit={this.handleSubmit} >
                                            <div className='form-group'>
                                                <input className='email-bt' type='text' name="Name" value={user_name} placeholder='Name' onChange={this.handleUserName} />
                                            </div>
                                            <div className='form-group'>
                                                <input className='email-bt' type='text' value={user_email} placeholder='Email' onChange={this.handleUserEmail} />
                                            </div>
                                            <div className='form-group'>
                                                <input className='email-bt' type='text' value={user_phonenumber} placeholder='Phone Number' onChange={this.handleUserPhoneNumber} />
                                            </div>
                                            <div className='form-group'>
                                                <textarea id='comment' rows='5' className='massage-bt' type='text' value={user_message} placeholder='Message' onChange={this.handleUserMessage} />
                                            </div>
                                            <div className='send_btn'>
                                                <div className='main_bt' type='text' onClick={this.handleSubmit}> <a href="#" text="SEND">Submit</a></div>
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
}
*/

export default ContactUs