import React from 'react';

function Gallery() {
    return (
        <section className="section-gallery">
            <div className="container">
                <h2 className="header2">ГАЛЕРЕЯ</h2>
                <div className="gallery-container">
                    <div className="gallery-menu">
                        <button className="button-gallery">ВСЕ</button>
                        <button className="button-gallery checked">ТУРИСТЫ</button>
                        <button className="button-gallery">ПРИРОДА</button>
                        <button className="button-gallery ">ПРОФИ</button>
                    </div>
                    <div className="images-container">
                        <div className="gallery-image image-89"></div>
                        <div className="gallery-image image-91"></div>
                        <div className="gallery-image image-93"></div>
                    </div>
                    <div className="images-container">
                        <div className="gallery-image image-94"></div>
                        <div className="gallery-image image-92"></div>
                        <div className="gallery-image image-90"></div>
                    </div>
                    <button className="button-else">ПОКАЗАТЬ ЕЩЕ</button>
                </div>
            </div>
        </section>
    );
}

export default Gallery;