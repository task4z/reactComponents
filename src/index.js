import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
    return (
    <div className="ui container comments">
        
        <ApprovalCard>
            <div>
                <h4>Warning!</h4>
                Are you sure you want to do this?
            </div>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
                author="Sam" 
                avatar={faker.image.image()} 
                timeAgo="Today as 4:45PM" 
                commentText="Nice blog post!"
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
                author="Alex" 
                avatar={faker.image.image()} 
                timeAgo="Today as 2:00AM" 
                commentText="Bad blog post!"
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
                author="Jane" 
                avatar={faker.image.image()} 
                timeAgo="Yesterday as 5:00PM" 
                commentText="Old blog post!"
            />
        </ApprovalCard>
    </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'))