import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";


export default class Services extends Component {
    state={
        services: [
            {
            icon: <FaCocktail/>,
            title: "Free Cocktails",
            info: "lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
            },
            {
            icon: <FaHiking/>,
            title: "Endless Hiking",
            info: "lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
            },
            {
            icon: <FaShuttleVan/>,
            title: "Free Shuttle",
            info: "lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
            },
            {
            icon: <FaBeer/>,
            title: "Micro Brewery Onsite",
            info: "lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
            }
        ]
    }
    render() {
        return (
            <section className="services">
              <Title title="services" /> 
              <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return<article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
              </div>
            </section>
        )
    }
}
