import React, { Component } from "react";
import { Grid } from "@mui/material";
import { Stack } from "@mui/material";
import { IconButton } from "@mui/material";
import { Dialog } from "@mui/material";
import { DialogContent } from "@mui/material";
import './home.css';
import Post from "./post";
import Reply from "./reply";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

var postList = [
    {
        id: 1,
        user: 'Pythagoras',
        text: 'TIL, a^2+b^2=c^2. If only I had an easy way to type that equation online!',
        vote: 1988,
    },
    {
        id: 2,
        user: 'Deadlights',
        text: 'Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.',
        vote: 1990,
    },
];
var replyList = [
    {
        postId: 1,
        user: 'US President',
        text: 'LIES! The radical left are trying to corrupt our beautiful right angles!',
        vote: 1988,
    },
    {
        postId: 1,
        user: 'Holystone',
        text: 'Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow’s nest nipperkin grog yardarm hempen halter furl. Swab barque interloper .',
        vote: 1990,
    },
];

export default function Home() {

    const [postOpen, setPostOpen] = React.useState(false);
    const [replyOpen, setReplyOpen] = React.useState(false);
    const [rReplyOpen, setRReplyOpen] = React.useState(false);

    const postHandleClickOpen = () => {
        setPostOpen(true);

    };

    const postHandleClose = () => {
        setPostOpen(false);
    };

    const replyHandleClickOpen = () => {
        setReplyOpen(true);

    };

    const replyHandleClose = () => {
        setReplyOpen(false);
    };
    const rReplyHandleClickOpen = () => {
        setRReplyOpen(true);

    };

    const rReplyHandleClose = () => {
        setRReplyOpen(false);
    };
    return (<>
        <div className="container">
            <div className="header">
                <div class="flex-container">
                    <Grid container
                        direction="row"
                        justifyContent="space-evenly"
                        alignItems="center">
                        <Grid >
                            <h1 className="title">Maths For‘em</h1>
                        </Grid>
                        <Grid >
                            <button className="button" onClick={postHandleClickOpen}>New Post</button>
                            <Dialog open={postOpen} id = "d" onClose={postHandleClose}>
                            <DialogContent>
                                <Post post={postList} />
                            </DialogContent>
                        </Dialog>
                        </Grid>
                       
                    </Grid>
                </div>

            </div>
            <div className="body">
                <div class="area">
                    {postList.map(item => (
                        <Grid container
                            direction="row"
                            justifyContent="center"
                            alignItems="center">

                            <Grid >
                                <div className="vote">
                                    <Stack spacing={-.5}>
                                        <IconButton aria-label="delete" >
                                            <KeyboardArrowUpIcon className="icon" fontSize="inherit" />
                                        </IconButton>
                                        <p className="voteText">{item.vote}</p>
                                        <IconButton aria-label="delete" >
                                            <KeyboardArrowDownIcon className="icon" fontSize="inherit" />
                                        </IconButton>
                                    </Stack>
                                </div>
                            </Grid>

                            <Grid >
                                <div className="post">
                                    <h4><b>{item.user}</b></h4>
                                    <p>{item.text}</p>
                                    <button className="replyButtonHome" onClick={replyHandleClickOpen}>Reply</button>
                                    <Dialog open={replyOpen} onClose={replyHandleClose}>
                                                    <DialogContent>
                                                        <Reply reply={replyList} postId = {item.id} />
                                                    </DialogContent>
                                                </Dialog>
                                </div>
                            </Grid>
                            {replyList.filter(reply => reply.postId === item.id).map(filteredReply => (
                                <div className="reply">
                                    <Grid container
                                        direction="row"
                                        justifyContent="center"
                                        alignItems="right">

                                        <Grid >
                                            <div className="vote">
                                                <Stack spacing={-.5}>
                                                    <IconButton aria-label="delete" >
                                                        <KeyboardArrowUpIcon className="icon" fontSize="inherit" />
                                                    </IconButton>
                                                    <p className="voteText">{filteredReply.vote}</p>
                                                    <IconButton aria-label="delete" >
                                                        <KeyboardArrowDownIcon className="icon" fontSize="inherit" />
                                                    </IconButton>
                                                </Stack>
                                            </div>
                                        </Grid>

                                        <Grid >
                                            <div className="replyArea">
                                                <h4><b>{filteredReply.user}</b></h4>
                                                <p>{filteredReply.text}</p>
                                                <button className="replyButtonHome" onClick={rReplyHandleClickOpen}>Reply</button>
                                                <Dialog open={rReplyOpen} onClose={rReplyHandleClose}>
                                                    <DialogContent>
                                                        <Reply reply={replyList} postId = {item.id} />
                                                    </DialogContent>
                                                </Dialog>
                                            </div>
                                        </Grid>



                                    </Grid>
                                </div>
                            ))}

                        </Grid>
                    ))}
                </div>
            </div>
        </div>
    </>
    )
}

