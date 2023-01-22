import { useState } from 'react';
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App';

function Overlay() {
    const [ready, setReady] = useState(false) 
    return (
        <>
            <App />
            <div className={`${ready ? "clicked" : "fullscreen bg not-ready"} `}>
                <div className="logo-wrapper">
                    <img alt="Minecraft" className="logo" src="https://minecraft--duck132912.repl.co/minecraft.svg" />
                    <span className="sub-logo">React & Three.js Edition</span>
                </div>
                <div className="menu">
                    <button onClick={() => setReady(true)}>Play</button>
                    <button>Load Game</button>
                    <button>How to play?</button>
                    <button onClick={() => alert('Thanks for playing!')}>Quit game...</button>
                </div>
            </div>
        </>
    )
}

createRoot(document.getElementById('root')).render(<Overlay />)