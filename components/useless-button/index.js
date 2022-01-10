import Link from "next/link";
import React from "react";

export default class UselessButton extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <a className="bg-highlight rounded-full font-bold px-8 py-4" href={this.props.to}>
                {this.props.children}
            </a>
        );
    }
}