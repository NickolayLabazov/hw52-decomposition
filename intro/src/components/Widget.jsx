/* Выводит информацию в следующем виде: изображение (если есть), 
синий заголовок (или ряд заголовков) при помощи компонента title, 
список при помощи ListItem, курс валют если есть. */

import React from 'react';
import nanoid from 'nanoid';
import Title from './Title.jsx';
import ListItem from './ListItem.jsx';

export default function Widget(props) {

    const data = typeof (props.data) === 'string' ? [props.data] : props.data;

    return (
        <div className='widget'>
            {props.children ? props.children : null}
            <Title
                title={props.title}
                time={props.time}
            />
            <ul>
                {data.map(data => <ListItem data={data} key = {nanoid()}/>)}
            </ul>
            {
                props.course ?
                    <table>
                        <tbody>
                            <tr>
                                <td><b>USD MOEX</b> {props.course.usd} <span>{props.course.usdchange}</span></td>
                                <td><b>EUR MOEX</b> {props.course.eur} <span>{props.course.eurchange}</span></td>
                                <td><b>НЕФТЬ</b> {props.course.oil} <span>{props.course.oilchange}</span></td>
                            </tr>
                        </tbody>
                    </table> : null
            }
        </div>
    );
}