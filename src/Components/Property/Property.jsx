import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from "react-router-dom";
import './Property.css'
import logo from '../../Content/logo.png'

function Shapka(){
    return(
        <div className="row shapka-wrap">
            <div className="col-1 logo">
                    <img src={logo}/> 
                </div>
            <div className="col-11">
                Объявления
            </div>
        </div>
    )
}

function createBlock (prop) {
    const { id, address, title, previewImage, price } = prop;
    const path = "/" + id;
    return(
        <div className="col-3 card-group">
            <Link to={path} target="_blank">
                <div className="card card-size">
                    <img src={previewImage} className="card-img-top images" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{price}</p>
                        <p className="card-text"><small className="text-muted">{address}</small></p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

class Property extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMsg: null,
            isLoaded: false,
            props: [],
        };
    }

    componentDidMount() {
        fetch("http://134.209.138.34/items")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    props: result,
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

    render() {
        const { error, isLoaded, props } = this.state;
        if (error) {
            return <div> Error: {error.message}</div>;
        }
        else if (!isLoaded) {
            return <div> Loading... </div>;
        }
        else {
            return (
                <div>
                    {Shapka()}
                    <div className="property-wrapper container">
                        <div className="row">
                            {props.map(prop => (
                            createBlock(prop)
                        ))}
                        </div>
                    </div>  
                </div>         
            );
        }
        
    }

}

export default Property