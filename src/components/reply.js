import React from "react";
import { Stack } from "@mui/material";
import './post.css';


export default function Reply(props) {
    const [text, setText] = React.useState('');
    const [user, setUser] = React.useState('');


    const handleSubmit = (event) => {
        props.reply.push(
             {
                 postId: props.postId,
                 user: user,
                 text: text,
                 vote: 0
             }  
        );
        event.preventDefault();
  
    }

    return (
        <div className="popUp">
        <form onSubmit={handleSubmit}>
        <Stack spacing={2} alignItems={"end"}>

            <textarea name="text"
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder= "Write your reply…."
                required>Some text...</textarea>

         
                <input
                    name="user"
                    type="user"
                    value={user}
                    placeholder="Your name.."
                    onChange={e => setUser(e.target.value)}
                    required />

            <button className="replyButton">Submit</button>
            </Stack>
        </form>
        </div>
    );
}
