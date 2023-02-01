import React from 'react';
import './App.css';
import Waves from './Waves';

function YouReceive() {
    return (
        <section className="section-you-receive">
          <div className="container">
            <h2 className="header2">В ШКОЛЕ ВЫ ПОЛУЧИТЕ</h2>
            <div class="section-you-receive__offers-list">
              <div class="offers-list">
                <div class="offers-list__item">
                  <div class="offer">
                    <div class="offer__header">
                      <div class="offer__thumbnail">%IMG%</div>
                      <div class="offer__title">ПРОЖИВАНИЕ</div>
                    </div>
                    <div class="offer__body">
                      Наша школа серфинга находится в 100 м от океанского
                      побережья. К услугам гостей открытый бассейн и
                      бесплатный Wi-Fi. Из верхней террасы открывается
                      вид на океан. Расстояние до центра города 15 мин.
                    </div>
                  </div>
                </div>
                <div class="offers-list__item">
                  <div class="offer">
                    <div class="offer__header">
                      <div class="offer__thumbnail">%IMG%</div>
                      <div class="offer__title">ПЕРЕЛЕТ И СТРАХОВКУ</div>
                    </div>
                    <div class="offer__body">
                      Все участники программы застрахованы страховой
                      компанией Allianz.
                      <p>Перелет из Тенерифе до острова Лансароте и обратно
                        входит в стоимость программы</p>
                    </div>
                  </div>
                </div>
                <div class="offers-list__item">
                  <div class="offer">
                    <div class="offer__header">
                      <div class="offer__thumbnail">%IMG%</div>
                      <div class="offer__title">ОБУЧЕНИЕ И ЭКИПИРОВКУ</div>
                    </div>
                    <div class="offer__body">
                      Все оборудование и экипировка известных
                      производителей и предоставляется на весь курс
                      программы. Тренировочный процесс начинается с
                      определения вашего уровня катания
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="section-you-receive__info">
              <div class="section-you-receive__data">
                <Waves />
              </div>
              <div class="section-you-receive__info-text">
                <p>
                  Огромным преимуществом нашей школы является собственная методика обучения. Мы
                  разработали собственный стиль обучения серфингу, который позволяет новичкам
                  максимально быстро встать на доску.
                </p>
                <p>
                  Именно наша методика и наши преподаватели позволили нам пройти аттестацию Федерации
                  серфинга Канарских островов - FEDERACIÓN CANARIA DE SURF. Это означает, что наша школа
                  соответствует всем мировым стандартам. Переаттестация производится ежегодно и это
                  позволяет нам всегда стремиться к улучшению обучения.
                </p>
              </div>
            </div>
        </section>
    );
}

export default YouReceive;
