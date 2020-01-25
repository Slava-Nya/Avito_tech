import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import renderImages from './Images.jsx';
import './Page.css';
import logo from '../../Content/logo.png'

function printError(errorMsg){
    return (
    <div>
        {errorMsg}
    </div>
    )
}

function getTitle(title, price){
    return (
        <div className="row title-wrap">
            <div className="col-1 logo">
                <img src={logo}/> 
            </div>
            <div className="title col-8">
                {title}
            </div>
            <div className="price col-3">
                {price}
            </div>
        </div>
    )
}

function getDescription(sellerName, description, address){
    return(
        <div className="details row">
            <div className="address col-12">
                {address}
            </div>
            <div className="description col-12">
                {description}
            </div>
            <div className="sellerName col-12">
                {sellerName}
            </div>
        </div>

    )
}

function renderData(data){
    const { address, title, price, description, sellerName, images } = data;

    return (
        <div>
            <div className="head-wrap">
                {getTitle(title, price)}
            </div>
            <div className="container body">
                <div className="row">
                    <div className="col-8">
                    {renderImages(images)}
                    </div>
                    <div className="col-4">
                        {getDescription(sellerName, description, address)}
                    </div>
                </div>
            </div>
        </div>
    )
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMsg: null,
            isLoaded: false,
            data: [],
        };
    }

    componentDidMount() {
        fetch("http://134.209.138.34/item/" + this.props.id)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    data: result,
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    errorMsg: error,
                });
            }
        )
    }

    render () {
        const { errorMsg, data, isLoaded } = this.state;
        if (!isLoaded)
            return(
                <div>
                    Loading...
                </div>
            )
        else if (errorMsg)
            return printError(errorMsg);
        else
            return renderData(data[0]);
    }
}
export default Page;