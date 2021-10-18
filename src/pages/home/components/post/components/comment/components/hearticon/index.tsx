import React, { useState } from "react";
import toast from "react-hot-toast";
import { useUser } from "../../../../../../../../contexts/userContext";
import api from "../../../../../../../../services/api";

import { HeartIconSelected, HeartIconUnselected } from "./styles";

interface Props {
    commentUUID: string;
    hasLiked: boolean;
    updateComments: Function;
}

const HeartIcon: React.FC<Props> = ({
    commentUUID,
    hasLiked,
    updateComments,
}) => {
    const user = useUser();
    const [isSelected, setIsSelected] = useState(hasLiked);
    const [startAnimation, setStartAnimation] = useState(false);

    const handleAnimationStart = async () => {
        try {
            let postType = "like";
            if (isSelected) postType = "unlike";

            const commentUpdated = await api.post(
                `/comments/${commentUUID}/${postType}`,
                {
                    username: user.username,
                }
            );
            updateComments(commentUpdated.data);
            setIsSelected(!isSelected);
        } catch (err) {
            toast.error(
                `Não foi possível ${
                    isSelected ? "descurtir" : "curtir"
                } o comentário, tente novamente`
            );
        } finally {
            setStartAnimation(false);
        }
    };

    return (
        <>
            {hasLiked ? (
                <HeartIconSelected
                    color="#ED4956"
                    size={18}
                    onClick={() => setStartAnimation(true)}
                    onAnimationStart={() => handleAnimationStart()}
                    className={startAnimation ? "bounce" : ""}
                />
            ) : (
                <HeartIconUnselected
                    color="#262626"
                    size={18}
                    onClick={() => setStartAnimation(true)}
                    onAnimationStart={() => handleAnimationStart()}
                    className={startAnimation ? "bounce" : ""}
                />
            )}
        </>
    );
};

export default HeartIcon;
