import React from 'react';
import classes from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div>
            My posps
            <div>
                new post
            </div>
            <div className={classes.item}>
            <div>
                post 1
            </div>
            <div>
                post 2
            </div>
        </div>
        </div>)
}

export default MyPosts;