import React from 'react';

const rotations = [1, 0, 10, 20, 21, 22, 12, 2];

function NavigateButton(props) {
    let [using, setUsing] = React.useState(false);

    return (
        <button
            className="navigate-button"
            onClick={() => {
                setUsing(!using);
                if (using)
                    props.fn(1, 1);
                else
                    props.fn(props.pos[0], props.pos[1]);
            }}
            style={{
                left: 50+((props.pos[0]-1)*(using ? 18.5 : 10))+'%',
                top: 50+((props.pos[1]-1)*(using ? 20 : 10))+'%',
            }}
        >
            {
                using
                ?
                <span style={{
                    transform: `rotate(${rotations.indexOf(Number(props.pos.join('')))*45}deg)`,
                }}>
                    ➔
                </span>
                :
                props.children
            }
        </button>
    )
}

export default function Centre() {

    let [rect, setRect] = React.useState(null);
    let rectGetter = () => document.getElementsByClassName('section')[0].getBoundingClientRect();
    let getRect = () => setRect(rectGetter());
    React.useEffect(getRect, []);
    window.addEventListener('resize', () => setTimeout(() => {
        let r = rectGetter();
        if (rect == null || r.width != rect.width || r.height != rect.height)
            getRect();
    }, 50));
    let scroll = (x, y) => {
        window.scroll({
            left: rect.width * x,
            top: rect.height * y,
            behavior: 'smooth',
            
        });
    };
    
    return (
        <div>
            <h1>Ocean</h1>
            <NavigateButton fn={scroll} pos={[1, 0]}>About</NavigateButton>
            <NavigateButton fn={scroll} pos={[2, 0]}>?</NavigateButton>
            <NavigateButton fn={scroll} pos={[2, 1]}>My Stuff</NavigateButton>
            <NavigateButton fn={scroll} pos={[2, 2]}>?</NavigateButton>
            <NavigateButton fn={scroll} pos={[1, 2]}>Contact</NavigateButton>
            <NavigateButton fn={scroll} pos={[0, 2]}>?</NavigateButton>
            <NavigateButton fn={scroll} pos={[0, 1]}>?</NavigateButton>
            <NavigateButton fn={scroll} pos={[0, 0]}>?</NavigateButton>
        </div>
    );
};