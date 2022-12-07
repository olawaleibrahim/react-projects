import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
    if (true) {
        throw new Error("NOOOOOOO");
    }
    return (
        <div>
            {robots.map((user, id) => {
                return (
                    <Card 
                        key={id} 
                        id={user.id} 
                        name={user.name} 
                        email={user.email} 
                        />
                    );
                })
            }
        </div>
    )
}

export default CardList;