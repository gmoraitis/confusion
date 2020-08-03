import React, { Component } from 'react';
import { Card, CardImg, CardText, CardTitle, CardBody } from "reactstrap"

class DishDetail extends Component {




    render() {
        const { dish } = this.props;
        return (
            <div className="row">

                {this.renderDish(dish)}

            </div>
        );
    }


    renderDish = (dish) => {
        if (dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg width="100%" src={dish.image} alt={dish.name} />
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle>
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1" >
                            <h4>Comments</h4>
                            {this.renderComments(dish.comments)}
                        </div>
                    </div>
                </div>

            )
        }
        else {
            return (<div></div>)
        }
    }

    renderComments = (comments) => {

        if (comments != null) {
            const info = comments.map(com => {

                return (
                    <div>
                        <li>{com.comment}</li><br />
                        <li>-- {com.author}, {this.formatDate(com.date)}</li><br />
                    </div>

                )

            }
            );
            return (
                <ul className="list-unstyled">
                    {info}
                </ul>
            )
        }
        else {
            return (<div></div>)
        }
    }

    formatDate(date) {
        const option = { year: 'numeric', month: 'short', day: 'numeric' };
        const date1 = new Date(date)
        const newdate = date1.toLocaleDateString("en-US", option)
        return newdate;

    }
}



export default DishDetail;