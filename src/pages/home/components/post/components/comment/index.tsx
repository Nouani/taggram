import React from "react";
import { CommentProps } from "../../../../../../data/interfaces";
import HeartIcon from "./components/hearticon";
import UserImage from "../../../UserImage";

import DefaultImage from "../../../../../../assets/default_image.png";

import { CommentContainer, CommentContent } from "./styles";

const Comment: React.FC<CommentProps> = ({ comment, updateComments }) => {
    const getDateFormatted = (rawDate: string) => {
        const date = new Date(rawDate);
        const timeNow = Date.now();
        const diff = Math.abs(timeNow - Number(date));
        const hours = Math.ceil(diff / (1000 * 60 * 60));

        let time = hours;
        let complement = "h";
        if (hours > 24) {
            time = Math.ceil(time / 24);
            complement = " dias";

            if (time > 7) {
                time = Math.ceil(time / 7);
                complement = " semanas";
            }
        }

        return `${time}${complement}`;
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
