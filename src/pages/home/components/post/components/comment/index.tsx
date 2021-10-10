import React from "react";
import { CommentProps } from "../../../../../../data/interfaces";
import HeartIcon from "./components/hearticon";
import UserImage from "../../../UserImage";

import DefaultImage from "../../../../../../assets/default_image.png";

import { CommentContainer, CommentContent } from "./styles";

const Comment: React.FC<CommentProps> = ({ comment, updateComments }) => {
    // eslint-disable-next-line no-unused-vars
    const getDateFormatted = (rawDate: string) => {
        // TODO: implement this

        return "6h";
    };

    const getLikeCountFormatted = (rawLikeCount: number) => {
        return rawLikeCount > 0
            ? `${rawLikeCount} curtida${rawLikeCount > 1 ? "s" : ""}`
            : "";
    };

    return (
        <CommentContainer>
            <UserImage
                src={comment.user.avatar || DefaultImage}
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
            <HeartIcon
                commentUUID={comment.uuid}
                hasLiked={comment.has_liked}
                updateComments={updateComments}
            />
        </CommentContainer>
    );
};

export default Comment;
