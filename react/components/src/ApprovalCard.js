import React from 'react';


const ApprovalCard = props => {
	return(
		<div className="ui card">
			{/* Inside the content class is the the content that will show up */}
			<div className="content">{props.children}</div>
			<div className="exra content">
				<div className="ui two buttons">
					<div className="ui basic green button">Approve</div>
					<div className="ui basic red button">Reject</div>
				</div>
			</div>
		</div>
	);
};

export default ApprovalCard;

