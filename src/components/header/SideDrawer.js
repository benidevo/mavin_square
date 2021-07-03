import React from 'react'

import { Drawer, List, ListItem } from '@material-ui/core';

const SideDrawer = props => {
    const links = [
        { location: 'featured', value: 'To top' },
        { location: 'venueinfo', value: 'Venue Info' },
        { location: 'highlights', value: 'Highlights' },
        { location: 'pricing', value: 'Pricing' },
        { location: 'location', value: 'Location' }, 
    ]

    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={() => props.onClose(false)}
        >
            <List compoment="nav">
                {links.map(link => {
                    return (
                        <ListItem button key={link.location}>
                            {link.value}
                        </ListItem>
                    )
                })}
                

            </List>
        </Drawer>
    )
}

export default SideDrawer
