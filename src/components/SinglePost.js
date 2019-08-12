import React, { useContext, useState } from 'react';
import { PostContext } from '../contexts/PostContextProvider';
import Modal from 'react-modal';
Modal.setAppElement('#root')

const customStyles = {
    content: {
        width: '30rem',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};



export default ({ match, history }) => {

    const { posts, dispatch } = useContext(PostContext)

    const [isOpen, setOpen] = useState(false)

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const getPostById = id => {

        const _id = isNaN(id) ? id : +id;

        return posts.find(post => post.id === _id);
    }

    let post = getPostById(match.params.id);

    const handleClick = (e) => {

        dispatch({
            type: 'UPDATE_POST', post:
            {
                id: post.id, title: title.trim() ? title : post.title,
                body: body.trim() ? body : post.body
            }
        })

        setOpen(false)

    }

    return post ? (
        <div className="my-5">
            <h2>Post title</h2>
            <div>{post.title}</div>
            <h2 className="my-3">Post body</h2>
            <div>{post.body}</div>
            <button className="btn btn-success mr-3" onClick={() => setOpen(true)}>Update</button>

            <Modal
                isOpen={isOpen}
                onRequestClose={() => setOpen(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div >
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Update Post</h5>
                        <button type="button" className="close" onClick={() => setOpen(false)} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="recipient-name" className="col-form-label">Title:</label>
                                <input type="text" className="form-control" defaultValue={post.title} onChange={(e) => setTitle(e.target.value)} id="recipient-name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message-text" className="col-form-label">Body:</label>
                                <textarea className="form-control" defaultValue={post.body} onChange={(e) => setBody(e.target.value)} id="message-text"></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={handleClick}>Update</button>
                    </div>
                </div>


            </Modal>

            <button className="btn btn-danger" onClick={(e) => { dispatch({ type: 'DELETE_POST', id: post.id }); history.push('/') }}>Delete</button>
        </div>
    ) : (<div>There is no post with id: {match.params.id}</div>)
}