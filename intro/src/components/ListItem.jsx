//формирует элемент списка в зависимости от типа переданных данных

import React from 'react';

export default function ListItem(props) {

    const data = typeof (props.data) === 'string' ? { data: props.data } : props.data;

    return (
        <li className='ListItem-item'>
            {data.img ? <img className='listItem-img' src={data.img} alt='' /> : null}
            {data.news ? <span className='listItem-news'>{data.news}</span> : null}
            {data.time ? <span>{data.time}</span> : null}
            {data.filmTV ? <span>{data.filmTV}</span> : null}
            {data.channel ? <span>{data.channel}</span> : null}
            {data.film ? <span>{data.film}</span> : null}
            {data.genre ? <span>{data.genre}</span> : null}
            {data.data ? <span>{data.data}</span> : null}
            {data.temperature ? <span>{data.temperature}</span> : null}
            {data.tempOnTime ? <span>{data.tempOnTime}</span> : null}
            {data.visit ? <span><b>{data.visit}</b>-{data.descript}</span> : null}
        </li>
    );
}

