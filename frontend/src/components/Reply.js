import { OverlayTrigger } from 'react-bootstrap'
import { Popover } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useState } from 'react'

const Reply = (props) => {

    const [show, setShow] = useState(false);
    const [editInput, setEditInput] = useState(false);
    const [comentario, setComentario] = useState({
        mensaje: "",
    })


    const datosInput = (e) => {
        setComentario({
            mensaje: e.target.value
        })
    }

    console.log(comentario)
    const changeInput = () => {
        setEditInput(!editInput)
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const popover = (
        <Popover delay={{ show: 250, hide: 400 }}>
            <Popover.Content>
                <button className="btnOpcionED" onClick={handleShow}><i class="fas fa-trash-alt"></i> Delete</button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete comment</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to delete this comment?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary">
                            Delete
                 </Button>
                    </Modal.Footer>
                </Modal>
                <button onClick={changeInput} className="btnOpcionED"><i class="fas fa-edit"></i>Edit</button>
            </Popover.Content>
        </Popover>
    )


    const userPic = "http://baravdg.com/wp-content/uploads/2021/05/1.jpg"
    const nombreProfesor = "Juan Marquina"
    console.log(props)
    return (
        <>
            <div className="contenedorEditorYcomentario">
                <div className="contenedorReply">
                    <div className="fotoProfesor" style={{ backgroundImage: `url("${userPic}")` }}></div>
                    <div className="contenedorDatosUserReply">
                        <h5>{nombreProfesor}</h5>
                        {!editInput
                            ? <div><p>sadasd</p></div>
                            : <div className="contenedorInputEdit">
                                <input
                                    className="inputEdit"
                                    onChange={datosInput}
                                    name="comentario" type="text"
                                />
                                <button className="btnSendEdit">
                                    <i class="fas fa-paper-plane"></i>
                                </button>

                            </div>
                        }

                    </div>
                </div>
                <OverlayTrigger rootClose={true} trigger="click" placement="right" overlay={popover}>
                    <Button className="btnOpciones" ><i className="fas fa-ellipsis-h"></i></Button>
                </OverlayTrigger>
            </div>
        </>
    )
}

export default Reply