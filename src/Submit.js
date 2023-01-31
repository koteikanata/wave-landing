import React from 'react';
import Card from './Card';

function Submit() {
    return (
        <section className="section-submit">
            <div className="container">
                <h2 className="header2">ОСТАВИТЬ ЗАЯВКУ</h2>
                <div className="submit-container">
                    <div className="submit-block submit-left">
                        <input
                            className="input input-name"
                            placeholder="Имя"
                            onKeyDown={(e) => this.createItem(e)}
                        ></input>
                        <input
                            className="input input-number"
                            placeholder="Телефон"
                            onKeyDown={(e) => this.createItem(e)}
                        ></input>
                        <input
                            className="input input-message"
                            placeholder="Оставьте сообщение, и мы
                            свяжемся с Вами в ближайшее
                            время"
                            onKeyDown={(e) => this.createItem(e)}
                        ></input>
                        <button className="send-button">ОТПРАВИТЬ</button>
                    </div>
                    <Card />
                </div>
                <div className="social-buttons">
                    <button>
                        INSTAGRAM
                    </button>
                    <button className="facebook-button">
                        FACEBOOK
                    </button>
                    <button>
                        YOUTUBE
                    </button>
                </div>
            </div>
            <div className="footer-background"></div>
        </section>
    );
}

export default Submit;