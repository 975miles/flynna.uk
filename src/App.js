import React from 'react';
import './App.css';
import sections from './sections';

export default function App() {
    React.useEffect(() => {
        const recentre = () => {
            console.log('r');
            let section = document.getElementsByClassName('section')[0].getBoundingClientRect();
            window.scroll(section.width, section.height);
        }

        window.onresize = recentre;
        recentre();
    }, []);

    return (
        <div className="container">
            {sections.map(row => (
                <div className="row" key={Math.random()}>
                    {row.map(section => (
                        <div className="section" key={Math.random()}>
                            {section}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};