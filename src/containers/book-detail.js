import React, { Component } from 'react';
import { connect } from 'react-redux';


class BooKDeatail extends Component {
    render(){
       
        return(
            <div>
                <h3>Details For:</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Title: {this.props.book.title}</div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        book: state.activeBook
    };
}