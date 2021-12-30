import React from "react";
import Loader from "./loader";

export default class PriceBadge extends React.Component {

    LITTY_ADDRESS = '0x00a1f22156A6dbf56C9e9cb16Ec63B0F9Ba94ad7';
    USD_API = 'https://api.traderjoexyz.com/priceusd/0x00a1f22156A6dbf56C9e9cb16Ec63B0F9Ba94ad7';
    LITTY_AVAX_TRADE = 'https://traderjoexyz.com/#/trade?inputCurrency=&outputCurrency=0x00a1f22156A6dbf56C9e9cb16Ec63B0F9Ba94ad7';

    constructor(props) {
        super(props);
        this.state = {
            price: 0,
            loading: true,
        }
        setInterval(this.updatePrice.bind(this), 1000); 
    }

    async updatePrice() {
        let token_price;
        try {
            token_price = (parseFloat(await (await fetch(this.USD_API)).text()) / 1000000000000000000).toFixed(7);
        } catch (err) {
            console.error(err);
            return;
        }
        this.setState({price: token_price, loading: false})
    }

    render() {
        return (
            <div>
                { this.state.loading ? 
                    <Loader/>
                    : 
                    <a href={this.LITTY_AVAX_TRADE} title="Click to buy $LITTY" rel="noreferrer" className="font-bold rounded-full text-gray-200 bg-highlight text-secondary py-3 px-4" target="_blank">
                        {`$${this.state.price}`}
                    </a>
                }
            </div>
        );
    }
}