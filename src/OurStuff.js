import React from 'react';

function OurStuff() {
    return (
        <section className="section-our-stuff">
            <div className="container">
                <h2 className="header2">НАША КОМАНДА</h2>
                <div className="stuff-container">
                    <div>
                        <div className="stuff mike-img"></div>
                        <div className="stuff-caption">
                            <p>Mike</p>
                            <p className="caption-instructor">Главный инстуктор</p>
                        </div>
                    </div>
                    <div>
                        <div className="stuff mary-img"></div>
                        <div className="stuff-caption">
                            <p>Mary</p>
                            <p className="caption-instructor">Инстуктор</p>
                        </div>
                    </div><div>
                        <div className="stuff olga-img"></div>
                        <div className="stuff-caption">
                            <p>Ольга</p>
                            <p className="caption-instructor">Инстуктор</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurStuff;