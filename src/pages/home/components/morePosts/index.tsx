import React, { useEffect, useState } from "react";
import { IRelatedPost } from "../../../../data/interfaces";
import api from "../../../../services/api";

import { MorePostsContainer, ImageLoading } from "./styles";

interface Props {
    uuidPost: string;
}

const MorePosts: React.FC<Props> = ({ uuidPost }) => {
    const [morePosts, setMorePosts] = useState([] as Array<IRelatedPost>);
    const [isLoading, setIsLoading] = useState(true);

    const getMorePosts = async () => {
        setIsLoading(true);

        const data = (await api.get(`/posts/${uuidPost}/related`))
            .data as Array<IRelatedPost>;

        const postsFilteredByCommentCount = data.filter(
            relatedPost => relatedPost.comment_count >= 3
        );

        setMorePosts(postsFilteredByCommentCount);

        setIsLoading(false);
    };

    useEffect(() => {
        getMorePosts();
    }, []);

    const imagesLoading = () =>
        [...Array(6)].map((e, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <ImageLoading key={i} />
        ));

    const imagesLoaded = () =>
        morePosts.map(relatedPost => (
            <img
                key={relatedPost.uuid}
                src={relatedPost.photo}
                alt="RelatedPost"
            />
        ));

    return (
        <MorePostsContainer>
            <h1>Mais publicações</h1>
            <div>{!isLoading ? imagesLoaded() : imagesLoading()}</div>
        </MorePostsContainer>
    );
};

export default MorePosts;
