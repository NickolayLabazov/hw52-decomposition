//Верхний виджет. Выводит новостную ленту и рекламу справа от неё

import React from 'react';
import Widget from './Widget.jsx';


export default function WidgetTop(props) {

    return (
        <div className="WidgetTop-WidgetTopBox">
            <Widget
                title={props.newsTitle}
                data={props.news}
                time='31 июля среда, 02.32'
                course={props.course}
            />

            <Widget
                title={props.rightTitle}
                data={props.rightData}
            >
                <img src={props.rightImg} alt="" />
            </Widget>
        </div>
    );
}

