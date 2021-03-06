/* eslint-disable camelcase */
export interface IUser {
    username: string;
    avatar: string | null;
}

export interface PostProps {
    post: IPost;
}

export interface IPost {
    uuid: string;
    user: IUser;
    photo: string;
    created_at: string;
    location: {
        city: string;
        country: string;
    };
    comments: Array<IComment>;
}

export interface IRelatedPost {
    uuid: string;
    photo: string;
    comment_count: number;
}

export interface CommentProps {
    comment: IComment;
    updateComments: Function;
}

export interface IComment {
    uuid: string;
    user: IUser;
    message: string;
    created_at: string;
    has_liked: boolean;
    like_count: number;
}
