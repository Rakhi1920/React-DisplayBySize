import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import * as actions from '../actions'
import { connect } from 'react-redux'

const styles  = theme => ({
    button: {
        display: 'block',
        // marginTop: theme.spacing(2),
    },
    formControl: {
        // margin: theme.spacing(1),
        width: 120,
        backgroundColor: '#fff',
        border: '1px solid black',
        borderRadius: '4px',
    },
})

class Filter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            filter_status: '',
            open: false,
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleOpen = this.handleOpen.bind(this)
    }

    handleChange(event) {
        this.setState({
            filter_status: event.target.value
        })
        this.props.changeFilter(event.target.value)
    }

    handleClose() {
        this.setState({
            open: false
        })
    }

    handleOpen() {
        this.setState({
            open:true
        })
    }

    render() {
        const {classes} =this.props     
        return (
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="demo-controlled-open-select" className = "filterBySize">Filter By Size</InputLabel>
                <Select
                    open={this.state.open}
                    onClose={ this.handleClose }
                    onOpen={ this.handleOpen }
                    value={this.state.filter_status}
                    onChange={ this.handleChange }
                >
                    <MenuItem value="ALL">
                        {/* <em>None</em> */}
                        ALL
                    </MenuItem>
                    <MenuItem value="L">L</MenuItem>
                    <MenuItem value="XL">XL</MenuItem>
                    <MenuItem value="XS">XS</MenuItem>
                    <MenuItem value="M">M</MenuItem>
                    <MenuItem value="S">S</MenuItem>
                </Select>
            </FormControl>
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
        changeFilter: (filter_change) => {dispatch(actions.filterChange(filter_change))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Filter))

// export default Filter