import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Page.css';
function renderImages(imgs){

    function addList(index)
    {
        return (
            <li data-target="#carousel" data-slide-to={index} className={!index ? "active" : ""}></li>
        )
    }

    function addItem(img, index)
    {
        return (
            <div className={!index ? "carousel-item active" : "carousel-item"}>
                <span className="img-cover" style={{backgroundImage: `url(${img})`}}></span>
                <img src={img} className="d-block img-fluid" alt="..."/>
            </div>
        )
    }

    return (
        <div id="carousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                {imgs.map(( img, index ) => (
                    addList(index)
                ))}
            </ol>
            <div className="carousel-inner">
                {imgs.map(( img, index ) => (
                    addItem(img, index)
                ))}
            </div>
            <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default renderImages;