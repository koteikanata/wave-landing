import React from 'react';
import './App.css';
import Logo from './Logo';

function Menu() {
    return (
        <section className="section-menu">
            <Logo />
            <div className="main-menu">
                <button className="menu-button">О нас</button>
                <button className="menu-button">Услуги</button>
                <button className="menu-button">Стоимость</button>
                <button className="menu-button">Блог</button>
                <button className="menu-button">Команда</button>
                <button className="menu-button">Контакты</button>
            </div>
        </section>);
}

export default Menu;