import React from 'react';

function Services() {
    return (
        <section className="section-services">
            <div className="container">
                <h2 className="header2">ПАКЕТЫ УСЛУГ</h2>
                <div className="container-services">
                    <div className="block-services">
                        <h3>Стандарт</h3>
                        <p>Проживание на вилле 6 ночей</p>
                        <p>Номер категории стандарт</p>
                        <p>Экипировка для обучения</p>
                        <p>Обучение серфингу 5 тренировок по 2 часа</p>
                        <p>Страховка</p>
                        <p>Вечеринка с угощениями и дискотекой</p>
                        <div className="price-services">450<p>$</p></div>
                    </div>
                    <div className="block-services">
                        <h3>Все включено</h3>
                        <p>Проживание на вилле 6 ночей</p>
                        <p>Номер категории люкс</p>
                        <p>Экипировка для обучения</p>
                        <p>Обучение серфингу 8 тренировок по 2 часа</p>
                        <p>Страховка</p>
                        <p>Вечеринка с угощениями и дискотекой</p>
                        <p>Авиа перелет Тенерифе -Лансароте - Тенерифе</p>
                        <p>Завтраки на вилле</p>
                        <div className="price-services">950<p>$</p></div>
                    </div>
                    <div className="block-services">
                        <h3>Профи</h3>
                        <p>Проживание на вилле 8 ночей</p>
                        <p>Номер категории люкс</p>
                        <p>Экипировка для обучения</p>
                        <p>Обучение серфингу 16 тренировок по 2 часа</p>
                        <p>Страховка</p>
                        <p>Вечеринка с угощениями и дискотекой</p>
                        <p>Авиа перелет Тенерифе -Лансароте - Тенерифе</p>
                        <p>Завтраки и ужины на вилле</p>
                        <div className="price-services">1450<p>$</p></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;