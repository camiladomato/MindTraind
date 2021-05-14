import { useState } from "react"
import Reply from '../components/Reply'
import coursesActions from "../redux/actions/coursesActtions"
import { connect } from "react-redux"


const Post = (props) => {


    const { title, text, user: { profilePicture, lastName, firstName }, reply } = props.post
    const [commentReply, setCommentReply] = useState(false)
    const { token, email } = props.userLogged

    const [objConsult, setobjConsult] = useState({
        text: "",
        idCourse: props.idCourse,
        token: token,
        action: "add",
        userReply: email
    })


    const datosInput = (e) => {
        setobjConsult({
            ...objConsult,
            text: e.target.value
        })
    }

    return (
        <div className="contenedorPost">
            <h2 className="tituloPost">{title}</h2>
            <div className="contedorDatosUsuario">
                <img className="comentarioFotoUser" src={profilePicture} alt="" />
                <div className="contenedorNameUser">
                    <h3>{firstName} {lastName}</h3>
                </div>
            </div>
            <div className="contenedorComentario">
                <p>{text}</p>
            </div>
            <div onClick={() => { setCommentReply(!commentReply) }} className="contenedorComentario replyBtn">
                <i class="fas fa-reply"></i>
                <p>Reply</p>
            </div>
            { commentReply &&
                <>
                    {/*    <div>{reply.map(reply => <Reply reply={reply} />)}</div> */}
                    <div className="contenedorInputComment">
                        <input onChange={datosInput} name="text" className="inputComment" type="text" />
                        <div className="contenedorIconoSearch">
                            <i class="fas fa-paper-plane"></i>
                        </div>

                    </div>
                </>
            }
        </div>
    )
}


const mapStateToProps = state => {
    return {
        userLogged: state.user.userLogged,
        courses: state.courses.courses
    }
}


const mapDispatchToProps = {

    /*     editComment: coursesActions.editComment,
        deleteComment: coursesActions.deleteComment, */
    sendPost: coursesActions.sendPost,
    getCourseById: coursesActions.getCourseById,
}


export default connect(mapStateToProps, mapDispatchToProps)(Post)