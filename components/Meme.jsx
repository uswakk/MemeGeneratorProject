import React from "react";
import { useEffect } from "react";
import "../styling/App.css";

export default function Meme() {
    const [allMemes, setAllMemes] = React.useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(json => setAllMemes(json.data.memes)) // Corrected the access to memes array
            .catch(error => console.log(error));
    }, []);

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    function getMemeImage(event) {
        event.preventDefault(); // Prevent page reload
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }));
    }

    return (
        <main>
            <form className="form">
                <label className="input-label">
                    <p className="label-text">Top Text: </p>
                    <input
                        type="text"
                        placeholder="Shut Up"
                        className="form-input"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                </label>

                <label className="input-label">
                    <p className="label-text">Bottom Text: </p>
                    <input
                        type="text"
                        placeholder="And Take My Money"
                        className="form-input"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </label>

                <button className="form-button" onClick={getMemeImage}>
                    Generate A New Image
                </button>
            </form>
            <div className="meme">
                <img src={meme.randomImage} className="meme-image" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}
