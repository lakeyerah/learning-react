import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import './ChatBox.css';
import { Bubbles } from './Bubbles.js'

//The chatBox is essential a modal. Would probably rename for reusability purposes  ttrying 
export const ChatBox = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const [va, updateChat] = useState();
    //const [] = useState();

    const [conversation, setConversation] = useState([])
    const [statement, setStatement] = useState('')

    const removeStatement = s => {
        setConversation(conversation.filter(c => c != s))
    }
  

   const submit = (event) =>{
       event.preventDefault();
        setConversation([...conversation, statement])
        setStatement('')
    }

    useEffect(() => {
        //setInterval()
        console.log("We aint get here yet");
    }, []);

    //need 2 states
    // 1 for the conversations 
    //another for the textbox
    //submit button should call the set conversation function with a
    //new state to add to the array with the value added in


    return (
        <>
        <Button variant="primary" onClick={handleShow}>
        Launch demo modal
         </Button>

        <Modal show={show} onHide={handleClose}> 
            <Modal.Header closeButton>
                <Modal.Title>Interviewing Scheduling Portal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    {
                        conversation.map(s => (<Bubbles statement={s} delete={removeStatement}/>))
                    }

            </Modal.Body>
            <Modal.Footer>
                <InputGroup>
                        <FormControl as="textarea" value={statement} onChange={(e) => setStatement(e.target.value)}/>
                        <Button variant="outline-secondary" type='submit' value = 'submit' onClick={submit} >change to image</Button>
                    </InputGroup>
            </Modal.Footer>
            </Modal>
            </>
    ); 
}