import "./scss/GalleryComponent.scss";
import PropTypes from 'prop-types';
import { useState } from "react";
//
function priceHandler(price, currency) {
    const currencies = {
        "pt-br": ["brl", 5.04, "pt-br"],
        "en-us": ["usd", 1, "en-us"],
    };
    const selectedLocation = currencies[currency];
    const currencyName = selectedLocation[0];
    if (currencyName === 'usd') {
        return `US$ ${price.toLocaleString('en-us', {
            minimumFractionDigits: 2
        })}`
    }
    const totalPrice = price * selectedLocation[1];
    const selectedLocationValue = selectedLocation[2];
    return totalPrice.toLocaleString(selectedLocationValue, {
        style: "currency",
        currency: currencyName,
        minimumFractionDigits: 2 
    });
}
//
function GalleryComponent({title, price, description, regularImg, hoverImg}) {
    const [isHovered, setIsHovered] = useState(false)
    const [currency, setCurrency] = useState(priceHandler(price, 'pt-br'))
    function handleCurrencyChange(event) {
        event.stopPropagation()
        setCurrency(priceHandler(price, event.target.value))
    }
    const currencySelect = document.querySelector('#currency');
    currencySelect.addEventListener("change", handleCurrencyChange);
    return (
        <section 
            className="container"
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
        >
            <div className="pre-order">PRE-ORDER</div>
            <section className="image-container">
                <img
                    className="image"
                    alt="console"
                    src={regularImg}
                />
                <img
                    src={hoverImg}
                    className="hover-image"
                    alt="console"
                    style={{
                        transition: 'opacity linear .15s',
                        opacity: isHovered ? 1 : 0,
                    }}
                />
            </section>
            <section className="inner-container">
                <figcaption className="title"> {title} </figcaption>
                <p className="price"> {currency} </p>
                <button
                    className="shop-now"
                    style={{
                        transition: 'opacity linear .15s',
                        opacity: isHovered ? 1 : 0,
                    }}
                > SHOP NOW </button>
            </section>
            <p className="description"> {description} </p>
        </section>
    );
}

GalleryComponent.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    regularImg: PropTypes.string.isRequired,
    hoverImg: PropTypes.string.isRequired,
};

export default GalleryComponent;
