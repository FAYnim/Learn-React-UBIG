import React from "react";

// function Greet() {
//     return <h1>Hello Faris</h1>;
// }

export const Greet = ({name, characteristic}) => {
    return (
        <div>
            <h1>Hello {name}, you are {characteristic}</h1>
        </div>
    )
}

// export default Greet;