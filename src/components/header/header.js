import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Filter from '../filter'

class Header extends Component {
    render() {
        return (
            <AppBar 
                position = "fixed"
                style = {{
                    padding: '10px, 0px'
                }}
            >
                <Toolbar>
                    <div className = "header_logo">
                        <div className = "font_righteous header_logo_venue">Women's tops </div>
                    </div>
                    <Filter/>
                </Toolbar> 
                
            </AppBar>
        )
    }
}

export default Header