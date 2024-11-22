import { Component } from "react";
import Car from "./Cars";
import Wrapper from "./Wrapper";
import MyHeader from "./MyHeader";
import "./css/MyCars.css";



class MyCars extends Component {

    state = {
        cars: ["Ford", "Mercedes", "Audi", "BMW", "Peugeot"]
    }

    noCopy = () => {
        alert("Merci de ne pas copier le texte !");
    }

    addStyle = (e) => {
        console.log(e.target);
        if(e.target.classList.contains('styled')) {
            e.target.classList.remove('styled');  
        } else {
            e.target.classList.add('styled');
        }
    }

    render () {

        return (
            <div>
                <Wrapper>
                    <MyHeader myStyle={this.props.color}>{this.props.title}</MyHeader>
                </Wrapper>
                <p onMouseOver={this.addStyle} onCopy={this.onCopy}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit atque, veritatis at quisquam ex optio corporis aspernatur, mollitia maxime quae facere asperiores architecto unde repellendus distinctio suscipit? Dolor, possimus consequatur!</p>
                <Car color='black'>{this.state.cars[1]}</Car>
                <Car color='green'>{this.state.cars[2]}</Car>
                <Car>{this.state.cars[3]}</Car>
            </div>
        )
    }


}

export default MyCars;