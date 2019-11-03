//Выводит набор виджетов под формой поиска: Погода, карта и т.д.

import React from 'react';
import Widget from './Widget.jsx';

export default function WidgetBottom(props) {
    return (
        <div className="WidgetBottom-WidgetBottomBox">
            <div className="WidgetBottom-WidgetBottomDiv">
                <Widget
                    {...props.weather}
                />
                <Widget
                    {...props.maps}
                />
                <Widget
                    {...props.broadcast}
                />
            </div>
            <div className="WidgetBottom-WidgetBottomDiv">
                <Widget
                    {...props.tv}
                />
                <Widget
                    {...props.visited}
                />
            </div>
        </div>
    );
}

