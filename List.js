import React from 'react';
import Card from './Card';
import './List.css';


function List(props) {
    return (
        <section className="List">
            <header className="List-header">

                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
                {props.cards.map((card) =>
                    <Card
                        key={card.id}
                        title={card.title}
                        content={card.content}
                        date={card.date}
                        onAddItem={props.onAddItem} 
                        onRemoveItem={props.onRemoveItem}
                    />)}
                <button type="button"  onClick={props.onAddItem} className="List-add-button">
                    + Add Random Card
            </button>
            </div>
        </section>

    )
}

export default List;