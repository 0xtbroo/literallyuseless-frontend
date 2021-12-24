import React from "react";

export default class PriceBadge extends React.Component {

    LITTY_ADDRESS = '0x00a1f22156A6dbf56C9e9cb16Ec63B0F9Ba94ad7';
    USD_API = 'https://api.traderjoexyz.com/priceusd/0x00a1f22156A6dbf56C9e9cb16Ec63B0F9Ba94ad7';
    LITTY_AVAX_TRADE = 'https://traderjoexyz.com/#/trade?inputCurrency=&outputCurrency=0x00a1f22156A6dbf56C9e9cb16Ec63B0F9Ba94ad7';

    constructor(props) {
        super(props);
        this.state = {
            price: 0,
        }
        setInterval(this.updatePrice.bind(this), 1000); 
    }

    async updatePrice() {
        //const LITTY = await Fetcher.fetchTokenData(ChainId.AVALANCHE, this.LITTY__ADDRESS);
        const priceUSD = (parseFloat(await (await fetch(this.USD_API)).text()) / 1000000000000000000).toFixed(7);
        this.setState({price: priceUSD})
        //const LITTY_MIM = await Fetcher.fetchPairData(LITTY, MIM);

       // const route = new Route([])
    }

    render() {
        return (
            <a href={this.LITTY_AVAX_TRADE} className="rounded-lg  text-gray-200 bg-sewageGreen p-2">
                {`$${this.state.price}`}
            </a>
        );
    }
}