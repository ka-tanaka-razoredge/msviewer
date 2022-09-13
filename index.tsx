import React, { useEffect, useRef, useState } from 'react';

export default () => {
    const refForMs = useRef(null);
    const [ooMutableSail, setOoMutableSail] = useState({
        current: {
            x: 100,
            y: 0
        },
        red: 0,
        center: 100,
        green: 200,
        rd: 250,
    });
    let current = {x: 100, y: 0};
    let rd = 250;
    let context = null;
    
    
    useEffect(() => {
//        context = document.getElementById('the-canvas').getContext('2d');
        context = refForMs.current.getContext('2d');
        drawBaselines({current: {x: 100, y: 0}, red: 0, center: 100, green: 200, rd: 200 });
        drawMs({current: {x: 100, y: 0}, red: 0, center: 100, green: 200, rd: 200 });
//        drawMs({current: {x: 190, y: 0}, red: 0, center: 100, green: 200, rd: 100 });
//        drawMs({current: {x: 10, y: 0}, red: 0, center: 100, green: 200, rd: 100 });
//        drawMs({current: {x: 10, y: 0}, red: 0, center: 100, green: 200, rd: 200 });
    }, []);
    
    const drawBaselines = (lop) => {
        context.setLineDash([2, 2]);
        context.setLineDash([2, 2]);

        context.strokeStyle = 'rgba(255, 0, 0, 1.0)';
        context.beginPath();
        context.moveTo(lop.red, lop.current.y);
        context.lineTo(lop.red, lop.rd);
        context.stroke();
        context.closePath();

        context.strokeStyle = 'rgba(0, 255, 0, 1.0)';
        context.beginPath();
        context.moveTo(lop.green, lop.current.y);
        context.lineTo(lop.green, lop.rd);
        context.stroke();
        context.closePath();
        
        context.strokeStyle = 'rgba(0, 0, 0, 1.0)';
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(lop.green, 0);
        context.stroke();
        context.closePath();

        context.strokeStyle = 'rgba(0, 0, 0, 1.0)';
        context.beginPath();
        context.moveTo(lop.center, lop.current.y);
        context.lineTo(lop.center, lop.rd);
        context.stroke();
        context.closePath();
    };
    
    const drawMs = (lop) => {
        context.setLineDash([1, 0]);
        context.strokeStyle = 'rgba(255, 0, 0, 1.0)';
        context.fillStyle = 'rgba(255, 0, 0, 1.0)';
        context.beginPath();
        context.moveTo(lop.current.x, lop.current.y);
        context.lineTo(lop.red, lop.rd);
        context.lineTo(lop.current.x, lop.rd);
        context.stroke();
        context.closePath();

        context.strokeStyle = 'rgba(0, 255, 0, 1.0)';
        context.fillStyle = 'rgba(0, 255, 0, 1.0)';
        context.beginPath();
        context.moveTo(lop.current.x, lop.current.y);
        context.lineTo(lop.green, lop.rd);
        context.lineTo(lop.current.x, lop.rd);
        context.stroke();
        context.closePath();
        
        context.strokeStyle = 'rgba(255, 255, 0, 1.0)';
        context.fillStyle = 'rgba(0, 255, 0, 1.0)';
        context.beginPath();
        context.moveTo(lop.current.x, lop.current.y);
        context.lineTo(lop.current.x, lop.rd);
        context.closePath();
        context.stroke();
    };
    
    const handleApply = (e) => {
//        context.clearRect(0, 0, refForMs.current.width, refForMs.current.height);
        ooMutableSail.current.x = current.x;
        ooMutableSail.current.y = current.y;
        ooMutableSail.rd = rd;
        setOoMutableSail(ooMutableSail);
        drawMs(ooMutableSail);
    };
    
    const clear = (e) => {
        context.clearRect(0, 0, refForMs.current.width, refForMs.current.height);        
        drawBaselines({current: {x: 100, y: 0}, red: 0, center: 100, green: 200, rd: 200 });
    };

    return (
        <div>
            <div style={{ border: '1px solid black',width: '300px', height: '300px' }}>
                <canvas id='the-canvas' width='300' height='300' style={{ margin: '5px 5px' }} ref={ refForMs }>
                </canvas>
            </div>
            <div>
                <div style={{ display: 'flex' }}>
                    current:&emsp;<input type='textarea' style={{ width: '50px' }} onChange={ (e) => { current.y = e.target.value; } } /><input type='textarea' style={{ width: '50px' }} onChange={ (e) => { current.x = e.target.value; } } />
                </div>
                <div style={{ display: 'flex' }}>
                    remaining duration:&emsp;<input type='textarea' style={{ width: '50px' }} onChange={ (e) => { rd = e.target.value; } } />
                </div>
                <div style={{ display: 'flex' }}>
                    <div style={{ border: '1px solid black' }} onClick={ (e) => { handleApply(e); } }>apply</div>
                    <div style={{ border: '1px solid black' }} onClick={ (e) => { clear(e); } }>clear</div>
                </div>
            </div>
            <div id=''>
                &emsp;<font color='green'>■</font>の面積: 望む役への手数<br />
                &emsp;<font color='red'>■</font>の面積: !望む役への手数<br />
            </div>
        </div>
    );
}