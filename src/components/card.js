import React from 'react';
import ReactDOM from 'react-dom';
import "./card.css";
import { connect } from 'react-redux';
import * as cardActions from '../actions/cardActions';

class Paragraph extends React.Component {
    render() {
        return (
            <div>{this.props.description}</div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div><b>{this.props.title}</b></div>
        );
    }
}

class Card extends React.Component {

    delete(id){
        this.props.delete(id);
    }
    render() {

        return (
            <div>
                {this.props.cards.map((post, i) => {
                    return (
                        <div key={i} className="col-lg-3 col-md-6 col-sm-6 col-xs-12 card-block">

                            <div class="card card-blog hovereffect">
                                <img class="img-responsive" src={post.img} alt="" />
                                <div class="card-body text-center carousel-caption">
                                    <i className={post.ico ? "fa-2x fa fa-grav" : "fa-2x fa fa-handshake-o"}></i>

                                    <h4 class="card-title">
                                        <Header title={post.title} />
                                    </h4>
                                    <div class="card-description">
                                        <Paragraph description={post.description} />
                                    </div>
                                </div>

                                <div class="overlay">
                                    <a class="link" href="#">Open</a>
                                    <a class="link" onClick={this.delete.bind(this, post)}>Delete</a>
                                    <a class="link" href="#">Print</a>
                                </div>
                            </div>
                        </div>
                    );
                }
                )}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCard: index => dispatch(cardActions.deleteCard(index))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);