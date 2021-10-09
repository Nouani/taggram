import React from "react";
import { CommentProps } from "../../../../../../data/interfaces";
import HeartIcon from "./components/hearticon";
import UserImage from "../../../UserImage";

import { CommentContainer, CommentContent } from "./styles";

const Comment: React.FC<CommentProps> = ({ comment }) => {
    // eslint-disable-next-line no-unused-vars
    function getDateFormatted(rawDate: string) {
        // TODO: implement this

        return "6h";
    }

    function getLikeCountFormatted(rawLikeCount: number) {
        return rawLikeCount > 0
            ? `${rawLikeCount} curtida${rawLikeCount > 1 ? "s" : ""}`
            : "";
    }

    return (
        <CommentContainer>
            <UserImage
                src={
                    comment.user.avatar ||
                    "https://www.brookes.ac.uk/assets/0/1425/1426/2147484565/b4ba6acc-f7ff-4a13-9f21-0e83f8c3c9e3.png"
                }
                alt="ProfileImage"
            />
            <CommentContent>
                <p>
                    <strong>{comment.user.username}</strong>
                    {comment.message}
                </p>
                <div>
                    <p>{getDateFormatted(comment.created_at)}</p>
                    <strong>{getLikeCountFormatted(comment.like_count)}</strong>
                </div>
            </CommentContent>
            <HeartIcon hasLiked={comment.has_liked} />
        </CommentContainer>
    );
};

export default Comment;
