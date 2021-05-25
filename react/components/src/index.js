import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () =>{
	return(
		<div className="ui container comments">
			<ApprovalCard> 
				<CommentDetail 
					author="sam" 
					timeAgo="Today at 4:45pm" 
					content="I like it" 
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
			
			<ApprovalCard>
				<CommentDetail
					author="Alex"
					timeAgo="Today at 20:00pm"
					content="Amazing"
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
			
			<ApprovalCard>
				<CommentDetail
					author="Jane"
					timeAgo="Today at 1:00pm"
					content="Great"
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
			
		</div>
	);
};

ReactDOM.render(<App />,document.querySelector('#root'));

