import React, {Component} from 'react'
import Header from '../header/header'
import ProductData from '../../resources/products.json'
import Product from '../Product'
import { connect } from 'react-redux'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filterProducts: []
        }
    }

    // setSize(filter) {
    //     switch(filter) {
    //         case 10:
    //             this.setState({
    //                 filter: 'L'
    //             })
    //         case 20:
    //             this.setState({
    //                 filter: 'M'
    //             })
    //     }
    // }
    componentDidUpdate(preProps, preState){
        if (preProps.filter_change != this.props.filter_change){
            let filterProducts = ProductData.filter(p => p.size.includes(this.props.filter_change));
            this.setState({
                filterProducts
            });
        }
    }
    render() {
        console.log(this.props.filter_change)
        return (
            <div>
                <Header className = "header" />
                <main className = "pa3 pa5-ns flex flex-wrap">
                    {
                        this.props.filter_change === 'ALL' &&
                        ProductData.map(p => <Product key = {p.index} {...p}/>)
                    }
                    {
                        this.state.filterProducts.map(p => <Product key = {p.index} {...p}/>)
                    }                    
                </main>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filter_change: state.filter_change.selected_filter
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        // changeFilter: (filter_change) => {dispatch(actions.filterChange(filter_change))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
