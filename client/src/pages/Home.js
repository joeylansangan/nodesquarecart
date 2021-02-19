import React, { Component } from 'react';

import { connect } from 'react-redux';

import { addToCart } from '../components/actions/cartActions'

class Home extends Component{

    handleClick = (id)=>{
        this.props.addToCart(id);
        }
        
    render(){

    let itemList = this.props.items.map(item=>{ 

    return(
        <div className="card" key={item.id}>
            <div className="card-image">
                <img src={item.img} alt={item.title}/>
                <span className="card-title">{item.title}</span>
                <a className="waves-effect waves-light btn btn-floating halfway-fab" onClick={()=>{this.handleClick(item.id)}}
                >Add</a>
            </div>
            <div className="card-content">
                <p>{item.desc}</p>
                <p><b>Price: {item.price}$</b></p>
            </div>
        </div>
        )
    })

    return(
        <div className="homeWrapper">
            <h3 className="center">Items for sale</h3>
            <div className="box">
                {itemList}
            </div>
        </div>
    )
    }
}

const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
  
const mapDispatchToProps= (dispatch)=>{
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)