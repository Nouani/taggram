import React, { useState } from "react";

import { HeartIconSelected, HeartIconUnselected } from "./styles";

interface Props {
    hasLiked: boolean;
}

const HeartIcon: React.FC<Props> = ({ hasLiked }) => {
    const [isSelected, setIsSelected] = useState(hasLiked);
    const [startAnimation, setStartAnimation] = useState(false);

    function handleAnimationEnd() {
        setStartAnimation(false);
        setIsSelected(!isSelected);
    }

    return (
        <>
            {isSelected ? (
                <HeartIconSelected
                    color="#ED4956"
                    size={15}
                    onClick={() => setStartAnimation(true)}
                    onAnimationEnd={() => handleAnimationEnd()}
                    className={startAnimation ? "bounce" : ""}
                />
            ) : (
                <HeartIconUnselected
                    color="#262626"
                    size={15}
                    onClick={() => setStartAnimation(true)}
                    onAnimationEnd={() => handleAnimationEnd()}
                    className={startAnimation ? "bounce" : ""}
                />
            )}
        </>
    );
};

export default HeartIcon;
