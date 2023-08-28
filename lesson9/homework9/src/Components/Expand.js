import {useState} from 'react';

const ExpandableText = () => {
    const [expanded, setExpanded] = useState(false);

    const text =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

    const handleClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            {expanded ? (
                <p>{text}</p>
            ) : (
                <p>
                    {text.substr(0, 10)}
                    <button className={"expand"} onClick={handleClick}>Розгорнути</button>
                </p>
            )}
        </div>
    );
};

export default ExpandableText;