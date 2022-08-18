import React from 'react';
import './App.css';
import WordCard from './WordCard';

var words = [ "python", "guitar", "aim", "venus", "gold", 
              "ebay", "golang", "coding", "matrix", "bugs", 
              "avatar", "gif", "mental","map", "island", 
              "hockey", "chess", "viber", "github", "png", 
              "silver", "mobile", "gpu", "java", "google", 
              "venice", "excel", "mysql", "nepal", "flute", 
              "crypto", "tesla", "mars", "proxy", "email", 
              "html", "air", "idea", "server", "svg", 
              "jpeg", "search", "key", "egypt", "joker", 
              "dubai", "photo", "nile", "rain", "wasin"]

var hints = [  "programming language", "a musical instrument", "a purpose or intention", "planet of our solar system", "a yellow precious metal",
              "online shopping site", "programming language", "related to programming", "science fiction movie", "related to programming", 
              "epic science fiction film", "a file format for image", "related to the mind", "diagram represent of an area", "land surrounded by water",
              "a famous outdoor game", "related to a indoor game", "a social media app", "code hosting platform", "a image file format",
              "precious greyish-white metal", "an electronic device", "computer component", "programming language", "famous search engine",
              "famous city of waters", "microsoft product for windows", "a relational database system", "developing country name", "a musical instrument",
              "related to cryptocurrency", "unit of magnetic flux density", "planet of our solar system", "related to server application", "related to exchanging message",
              "markup language for the web", "related to a gas", "a thought or suggestion", "related to computer or system", "a vector image format",
              "a image file format", "act to find something", "small piece of metal", "a country name", "psychological thriller film",
              "developed country name", "representation of person or scene", "largest river in the world", "related to a water", "student ID of the card game maker"]

var random = Math.floor(Math.random()*words.length);

var word = words[random];
var hint = hints[random];

function App() {
  return (
    <div className='main'>
      <h1>Guess the Word</h1>
      <div className='content'>
        <div className='word'>
          <WordCard value={word}/>
        </div>
        <div className='details'>
          <p className='hint'>Hint: <span>{hint}</span></p>
          <p className='guess'>Remaining Guess: <span>10</span></p>
          <p className='wrong'>Wrong letters: a, b, c</p>
        </div>
        <botton className='reset-btn'>Reset game</botton>
      </div>
    </div>
  );
}

export default App;
