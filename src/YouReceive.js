import React from 'react';
import './App.css';
import Waves from './Waves';

function YouReceive() {
    return (
        <section className="section-you-receive">
            <div className="container">
                <div className="shared-recieve-container">
                    <h2 className="header2">В  ШКОЛЕ ВЫ ПОЛУЧИТЕ</h2>
                    <div className="you-receive-container">
                        <div className="recieve-block">
                            <h3 className="header3 header-you-receive">
                                <div className="projivanie"></div>
                                <p>ПРОЖИВАНИЕ</p>
                            </h3>
                            <div className="you-receive-text">
                                Наша школа серфинга находится в 100 м от океанского
                                побережья. К услугам гостей открытый бассейн и
                                бесплатный Wi-Fi. Из верхней террасы открывается
                                вид на океан. Расстояние до центра города 15 мин.
                            </div>
                        </div>
                        <div className="recieve-block">
                            <h3 className="header3 header-you-receive">
                                <div className="flight"></div>
                                ПЕРЕЛЕТ И СТРАХОВКУ
                            </h3>
                            <div className="you-receive-text">
                                Все участники программы застрахованы страховой
                                компанией Allianz.
                                <p>Перелет из Тенерифе до острова Лансароте  и обратно
                                    входит в стоимость программы</p>
                            </div>
                        </div>
                        <div className="recieve-block">
                            <h3 className="header3 header-you-receive">
                                <div className="training"></div>
                                ОБУЧЕНИЕ И ЭКИПИРОВКУ
                            </h3>
                            <div className="you-receive-text">
                                Все оборудование и экипировка известных
                                производителей и предоставляется на весь курс
                                программы. Тренировочный процесс начинается с
                                определения вашего уровня катания
                            </div>
                        </div>
                    </div>
                </div>
                <div className="waves-container">
                    <Waves />
                    <div className="waves-block">
                        <div className="waves">
                            Огромным преимуществом нашей школы является собственная методика обучения. Мы
                            разработали собственный стиль обучения серфингу, который позволяет новичкам
                            максимально быстро встать на доску.
                        </div>
                        <div className="waves">
                            Именно наша методика и наши преподаватели позволили нам пройти аттестацию Федерации
                            серфинга Канарских островов - FEDERACIÓN CANARIA DE SURF. Это означает, что наша школа
                            соответствует всем мировым стандартам. Переаттестация производится ежегодно и это
                            позволяет нам всегда стремиться к улучшению обучения.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default YouReceive;