import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'COFFEE',
                    imageUrl: 'https://images.unsplash.com/photo-1593536673055-14892cdffac7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1349&q=80',
                    id: 1,
                    linkUrl: 'shop/coffee'
                },
                {
                    title: 'SWEETS',
                    imageUrl: 'https://images.unsplash.com/photo-1585198330882-f32e816d0320?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                    id: 2,
                    linkUrl: 'shop/sweets'
                },
                {
                    title: 'FROMAGGI',
                    imageUrl: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                    id: 3,
                    linkUrl: 'shop/fromaggi'
                },
                {
                    title: 'WINE & SPIRITS',
                    imageUrl: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/spirits'
                },
                {
                    title: 'ACCESSORIES',
                    imageUrl: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/accessories'
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    // destructuring but passing every prop from state - spreading
                    this.state.sections.map(({ id, ...sectionProps }) => (
                        <MenuItem
                            key={id}
                            {...sectionProps}
                        />
                    ))
                }
            </div>
        )
    }
}

export default Directory;