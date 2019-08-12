import React, { useState, useContext } from 'react';
import { PostContext } from '../contexts/PostContextProvider';


export default () => {
    const { dispatch } = useContext(PostContext)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')





    const handleSubmit = (e) => {
        e.preventDefault();
        const id = '-' + Math.random().toString(36).substr(2, 9) + '-' + Math.random().toString(36).substr(2, 9);
        dispatch({ type: 'ADD_POST', post: { id: id,title: title, body: body, userId:id } });
        setTitle('');
        setBody('')

    }





return (<form onSubmit={handleSubmit}>
    <div className="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} id="title" placeholder="Enter title" />
    </div>
    <div className="form-group">
        <label htmlFor="body">Body</label>
        <input type="text" className="form-control" value={body} onChange={(e) => setBody(e.target.value)} id="body" placeholder="Enter body" />
    </div>

    <button type="submit" className="btn btn-primary">Submit</button>
</form>)
}