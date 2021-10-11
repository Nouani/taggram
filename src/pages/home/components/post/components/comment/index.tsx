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
        const minutes = Math.floor(diff / 1000);

        if (Number.isNaN(minutes)) return rawDate;

        let time = minutes;
        let complement = "min";
        if (time > 60) {
            time = Math.floor(time / 60);
            complement = "h";

            if (time > 24) {
                time = Math.floor(time / 24);
                complement = ` dia${time > 1 ? "s" : ""}`;

                if (time > 7) {
                    time = Math.floor(time / 7);
                    complement = ` semana${time > 1 ? "s" : ""}`;
                }
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
