import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

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

function PostList(props) {
	const { posts, onClickItem } = props;

	posts.map((post, index) => {
		return (
			<Wrapper>
				<PostListItem
					key={post.id}
					value={post.title}
					onClick={() => {
						onClickItem(post);
					}}
				/>
			</Wrapper>
		);
	});
}

export default PostList;
