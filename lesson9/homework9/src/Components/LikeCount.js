import {useState} from 'react';

let LikeButton = () => {
    let [likeCount, setLikeCount] = useState(0);

    return (
        <div>
            <button className={"Like"} onClick={() => setLikeCount(++likeCount)}>
                <img
                    src="https://www.freepnglogos.com/uploads/like-png/like-png-hand-thumb-sign-vector-graphic-pixabay-39.png"
                    alt="Like" width="75px"/>
            </button>
            <p>Likes: {likeCount}</p>
        </div>
    );
};

export default LikeButton;