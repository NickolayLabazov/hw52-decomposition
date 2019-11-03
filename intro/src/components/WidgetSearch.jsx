//Выводит форму поиска и баннер под ней

import React from 'react';
import Title from './Title.jsx';

export default function WidgetSearch(props) {

    return (
        <div className = "WidgetSearch-WidgetSearchBox">
            <Title  title={props.titleSearch} />
            <form className = 'widgetSearch-form' action="." onSubmit = {props.submit}>
                <label htmlFor="">Яндекс</label>
                <input name = 'search' className = 'widgetSearch-input' type="text" onChange = {props.change} value = {props.form.search}/>
                <button>Найти</button>                
                </form>
                <p>Найдется всё. Например, <span>{props.example}</span></p>
                <img src={props.img} alt=""/>            
        </div>
    );
}

