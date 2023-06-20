import { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import "./Characters.css";

export const CHARACTERS = gql`
    query Characters($name: String) {
        characters(filter: { name: $name }) {
            results {
                name
                image
            }
        }
    }
`;

export function Characters() {
    const [searchTerm, setSearchTerm] = useState("");
    const { loading, error, data } = useQuery(CHARACTERS, {
        variables: { name: searchTerm },
    });

    return (
        <div>
            <input
                className="search-input"
                type="text"
                name="search"
                placeholder="search a character..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {loading && (
                <div className="loader-container">
                    <div className="loader"></div>
                </div>
            )}
            {error && (
                <h2
                    style={{
                        color: "#f2f2f2",
                        margin: "10px auto",
                        textAlign: "center",
                    }}
                >
                    Not found any character.
                </h2>
            )}
            <div className="wrraper">
                {data &&
                    data.characters.results.map((character) => (
                        <div className="character" key={character.name}>
                            <img
                                className="character-img"
                                src={character.image}
                                alt={character.name}
                            />
                            <div className="name">
                                <h2 className="character-name">
                                    {character.name}
                                </h2>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
