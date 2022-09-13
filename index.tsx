import React, { useEffect, useRef } from 'react';

export default () => {
    const refForMs = useRef(null);
    let context = null;
    
    useEffect(() => {
        context = document.getElementById('the-canvas').getContext('2d');
//        context = refForMs.current.getContext('2d');
        drawFirst({current: {x: 10, y: 0}, red: 0, center: 100, green: 200, rd: 100 });
    }, []);
    
    const drawFirst = (lop={}) => {
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
        context.closePath();
        context.stroke();

        context.setLineDash([2, 2]);
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

    return (
        <div>
{/*        
            <div id=''>
                &emsp;<font color='green'>■</font>の面積: 望む役への手数<br />
                &emsp;<font color='red'>■</font>の面積: !望む役への手数<br />
            </div>
*/}            
            <div style={{ border: '1px solid black',width: '250px', height: '250px' }}>
                <canvas id='the-canvas' style={{ margin: '10px 10px' }} ref={{ refForMs }}>
                </canvas>
            </div>
        </div>
    );
}