import React from 'react';
import './Profile.module.css';
import classes from './Profile.module.css';

const Profile = () => {
    return (<div className={classes.content}>
        <div>
            <img src='https://klike.net/uploads/posts/2019-01/1547365376_1.jpg' />
        </div>
        <div>
            ava + description
        </div>
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
        </div>
    </div>)
}

export default Profile;