import React, { useEffect, useState } from "react";
import PostLoading from "./components/postLoading";
import { IPost } from "../../../../data/interfaces";
import UserImage from "../UserImage";
import Comment from "./components/comment";
import { PostContainer, PostComments, PostHeader, PostFooter } from "./styles";
import DefaultImage from "../../../../assets/default_image.png";
import { useUser } from "../../../../contexts/userContext";
import api from "../../../../services/api";

const Post: React.FC = () => {
    const user = useUser();
    const [post, setPost] = useState({} as IPost);
    const [isLoading, setIsLoading] = useState(true);

    async function getPost() {
        setIsLoading(true);

        const response = await api.get(`/post?username=${user.username}`);

        setPost(response.data);
        setIsLoading(false);
    }

    useEffect(() => {
        getPost();
    }, []);

    function getCommentsCountFormatted(rawCommentsCount: number) {
        return `${rawCommentsCount} comentário${
            rawCommentsCount === 1 ? "" : "s"
        }`;
    }

    return (
        <>
            {!isLoading ? (
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
                                    {post.location.city},{" "}
                                    {post.location.country}
                                </p>
                            </div>
                        </PostHeader>
                        <PostComments>
                            {post.comments.map(comment => (
                                <Comment key={comment.uuid} comment={comment} />
                            ))}
                        </PostComments>
                        <PostFooter>
                            <h1>
                                {getCommentsCountFormatted(
                                    post.comments.length
                                )}
                            </h1>
                            <p>{post.created_at}</p>
                        </PostFooter>
                    </div>
                </PostContainer>
            ) : (
                <PostLoading />
            )}
        </>
    );
};

export default Post;
