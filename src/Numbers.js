import React from 'react';

function Numbers() {
    return (
        <section className="section-numbers">
            <div className="container">
                <div className="video-numbers-container">
                    <div className="video"></div>
                    <div className="numbers-container">
                        <div>
                            <p className="bold-number">
                                450
                            </p>
                            <p className="numbers-caption">
                                туристов
                            </p>
                        </div>
                        <div>
                            <p className="bold-number">
                                2500
                            </p>
                            <p className="numbers-caption">
                                часов катания
                            </p>
                        </div>
                        <div>
                            <p className="bold-number">
                                10
                            </p>
                            <p className="numbers-caption">
                                проф. тренеров
                            </p>
                        </div>
                        <div>
                            <p className="bold-number">
                                365
                            </p>
                            <p className="numbers-caption">
                                дней в году
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Numbers;