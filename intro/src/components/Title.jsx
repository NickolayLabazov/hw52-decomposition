//формирует синий заголовок или ряд заголовков

import React from 'react';
import nanoid from 'nanoid';

export default function Title(props) {
    const title = typeof (props.title) === 'string' ? [props.title] : props.title;
    return (
        <>
            <div className='title-titleBox'>
                {title.map(prop => <a className='title-a' key = {nanoid()} href = '.'>{prop}</a>)}
                {props.time ? <p className='title-p'>{props.time}</p> : null}
            </div>

        </>
    );
}