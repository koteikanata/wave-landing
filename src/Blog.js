import React from 'react';

function Blog() {
    const arrayLength = 10;
    const buttonsData = Array.from({ length: arrayLength }, (_, index) => ({ id: index, checked: false }));

    return (
        <section className="section-blog">
            <h2 className="header2">БЛОГ</h2>
            <div className="need-container">
                <div className="need-block">
                    <div className="need-header">
                        ЧТО НЕОБХОДИМО ВЗЯТЬ С<br /> СОБОЙ НА СЕРФ ТУР
                    </div>
                    <div className="top20-text">ТОП 20 необходимых вещей для комфортного отдыха и обучения</div>
                </div>
                <div className="ellipses-block">
                    {buttonsData.map(button => (
                        <Button key={button.id} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function Button() {
    return <button className="ellips">{ }</button>;
}

export default Blog;