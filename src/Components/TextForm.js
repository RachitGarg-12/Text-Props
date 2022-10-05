import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';


function TextForm(props) {
    const [text, setText] = useState("Initial text");
    const handleUpClick = (e) => {
        let newtext = text.toUpperCase();
        setText(newtext);
        console.log(text);
        e.preventDefault();
    }

    const handleonChange = (e) => {
        setText(e.target.value)
        e.preventDefault();
    }

    return (
        <Form>
            <h1>{props.text_box_title}</h1>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" value={text} onChange={handleonChange} rows={9} />
            </Form.Group>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
        </Form>
    )
}

export default TextForm