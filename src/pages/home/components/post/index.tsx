import React, { useEffect, useState } from "react";
import PostLoading from "./components/postLoading";
import { IComment, IPost } from "../../../../data/interfaces";
import UserImage from "../UserImage";
import Comment from "./components/comment";
import { PostContainer, PostComments, PostHeader, PostFooter } from "./styles";
import DefaultImage from "../../../../assets/default_image.png";
import { useUser } from "../../../../contexts/userContext";
import api from "../../../../services/api";
import MorePosts from "../morePosts";

const Post: React.FC = () => {
    const user = useUser();
    const [post, setPost] = useState({} as IPost);
    const [comments, setComments] = useState([] as Array<IComment>);
    const [isLoading, setIsLoading] = useState(true);

    const getPost = async () => {
        setIsLoading(true);

        const data = (await api.get(`/post?username=${user.username}`))
            .data as IPost;

        setPost(data);
        setComments(data.comments);

        setIsLoading(false);
    };

    const updateComments = (commentUpdated: IComment) => {
        const commentsUpdated = comments.map(comment => {
            if (comment.uuid === commentUpdated.uuid) {
                return commentUpdated;
            }
            return comment;
        });

        setComments(commentsUpdated);
    };
    /* const updateComments = (texto: string) => {
        console.log("chegou");
        console.log(texto);
    }; */

    const getCommentsCountFormatted = (rawCommentsCount: number) => {
        return `${rawCommentsCount} comentário${
            rawCommentsCount === 1 ? "" : "s"
        }`;
    };

    useEffect(() => {
        getPost();
    }, []);

    const postLoaded = () => (
        <>
            <PostContainer>
                <img src={post.photo} alt="PostImage" />
                <div>
                    <PostHeader>
                        <UserImage
                            src={post.user.avatar || DefaultImage}
                            alt="ProfileImage"
                        />
                        <div>
                            <h1>{post.user.username}</h1>
                            <p>
                                {post.location.city}, {post.location.country}
                            </p>
                        </div>
                    </PostHeader>
                    <PostComments>
                        {comments.map(comment => (
                            <Comment
                                key={comment.uuid}
                                comment={comment}
                                updateComments={updateComments}
                            />
                        ))}
                    </PostComments>
                    <PostFooter>
                        <h1>
                            {getCommentsCountFormatted(post.comments.length)}
                        </h1>
                        <p>{post.created_at}</p>
                    </PostFooter>
                </div>
            </PostContainer>
            <MorePosts uuidPost={post.uuid} />
        </>
    );

    return <>{!isLoading ? postLoaded() : <PostLoading />}</>;
};

export default Post;
