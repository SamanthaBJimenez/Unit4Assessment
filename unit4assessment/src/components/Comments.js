import React, { useState } from 'react';
import { useInput } from '../util/customHooks';
import '../css/Comments.css';

const Comments = () => {
    const commentName = useInput('');
    const commentSubject = useInput('');
    const [comments, setComments] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let commentObj = {
            Name: commentName.value,
            Subject: commentSubject.value
        };

        if(!comments) {
            setComments(commentObj);
        } else {
            setComments(comments => [...comments, commentObj])
        }
    };

    let showComments = comments.map(comment => {
        return(
            <div className='commentSubDiv'>
                <p>Name: {comment.Name}</p>
                <p>Subject: {comment.Subject}</p>
            </div>
        )
    });

    return(
        <div className='commentMainDiv'>
            <div className='commentHeader'>
                <h1 className='commentH'>Post a Comment</h1>
                <form className='commentForm' onSubmit={handleSubmit}>
                    <label for='name'>Name:</label>
                    <input required className='nameInput' type='text' placeholder='Your Name...' {...commentName}/>
                    <label for='name'>Comment:</label>
                    <input required className='commentInput' type='text' placeholder='Your Comment...' {...commentSubject}/>
                    <button type='submit' className='submitBtn'>Submit</button>
                </form>
            </div>
            <div className='showComments'>{showComments}</div>
        </div>
    )
}

export default Comments;