import React from "react";
import styled from "styled-components";
import CommentListItem from "./CommentListItem";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	& > * {
		:not(:last-child) {
			margin-bottom: 16px;
		}
	}
`;

function CommentList(props) {
	const { comments } = props;

	<Wrapper>
		{comments.map((comment, index) => {
			return <CommentListItem key={comment.id} comment={comment} />;
		})}
	</Wrapper>;
}

export default CommentList;
