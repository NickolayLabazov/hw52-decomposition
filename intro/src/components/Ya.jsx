//Главный компонент

import React, { useState } from 'react';
import WidgetTop from './WidgetTop.jsx';
import WidgetSearch from './WidgetSearch.jsx';
import WidgetBottom from './WidgetBottom.jsx';

import newsImage from '../img/newsImage.png';
import cha from '../img/cha.png';
import banner from '../img/banner.png';
import rain from '../img/rain.png';
import play from '../img/play.png';


export default function Ya() {

    const [form, setForm] = useState({
        search:  '',
    });

    const change = (e) => {
        e.persist();        
        setForm(prevForm => ({ ...prevForm, search: e.target.value }));
    }

    const submit = (e) => {
        e.preventDefault();
        console.log(form.search)
        setForm(prevForm => ({ ...prevForm, search: '' }));
    }

    const title = ['Сейчас в СМИ', 'в Германии', 'Рекомендуем'];
    const titleSearch = ['Видео', 'Картинки', 'Новоти', 'Карты', 'Маркет', 'Переводчик', 'Эфир', 'ещё'];
    const news = [{ news: 'Новость1', img: newsImage, }, { news: 'Новость2', img: newsImage, }, { news: 'Новость3', img: newsImage, }];
    const program = [{ filmTV: 'Фильм1', time: '20.00', channel: '1' }, { filmTV: 'Фильм2', time: '21.00', channel: '2' }, { filmTV: 'Фильм3', time: '22.00', channel: '3' }];
    const films = [{ film: 'Фильм1', genre: 'Успех', img: play, }, { film: 'Фильм1', genre: 'Успех', img: play, }, { film: 'Фильм1', genre: 'Успех', img: play, }];
    const example = 'фаза луны сегодня';

    const widgetTopData = {
        news: news,
        newsTitle: title,
        rightTitle: 'Работа над ошибками',
        rightData: 'Смотрите на яндекс и запоминайте',
        rightImg: cha,
        course: {
            usd: '63',
            usdchange: '+0,09',
            eur: '70',
            eurchange: '+0,14',
            oil: '64',
            oilchange: '+1,63',
        }
    }

    const widgetSearchData = {
        titleSearch: titleSearch,
        example: example,
        img: banner,
        form: form,
        submit: submit,
        change: change,
    }

    const weather = {
        title: 'Погода',
        data: [{
            img: rain,
            temperature: '+17',
            tempOnTime: 'Утром +17',
        }],
    }

    const maps = {
        title: 'Карта Германии',
        data: 'Расписания',
    }

    const broadcast = {
        title: 'Эфир',
        data: films,
    }

    const tv = {
        title: 'Телепрограмма',
        data: program,
    }

    const visited = {
        title: 'Посещаемое',
        data: [{ visit: 'Недвижимость', descript: 'О сталинках', }, { visit: 'Маркет', descript: 'люстры и светильники', }, { visit: 'Авто.ру', descript: 'Привод 4х4', }],
    }



    const widgetBottomData = {
        weather: weather,
        maps: maps,
        broadcast: broadcast,
        tv: tv,
        visited: visited,
    }

    return (
        <>
            <WidgetTop {...widgetTopData} />
            <WidgetSearch {...widgetSearchData} />
            <WidgetBottom {...widgetBottomData} />
        </>
    );
}