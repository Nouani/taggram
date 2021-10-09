/* eslint-disable camelcase */
export interface PostProps {
    post: {
        uuid: string;
        user: User;
        photo: string;
        created_at: string;
        location: {
            city: string;
            country: string;
        };
        comments: Array<Comment>;
    };
}

export interface CommentProps {
    comment: Comment;
}

interface Comment {
    uuid: string;
    user: User;
    message: string;
    created_at: string;
    has_liked: boolean;
    like_count: number;
}

export interface User {
    username: string;
    avatar: string | null;
}
