import React from "react";

export function NavBar() {
    const formattedDate: string = new Date().toLocaleDateString('en-GB')

    return (
        <div>
            <h1>Fortnait shop</h1>
            <p>Current Date: {formattedDate}</p>
        </div>
    )
}