import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './main-menu.styles.scss';

class MainMenu extends React.Component {
  constructor() {
    super();
  
    this.state = {
      sections: [{
        title: 'title 1',
        imageUrl: 'https://images.unsplash.com/photo-1608501857571-31a43311e342?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        id: 1
      },
      {
        title: 'title 2',
        imageUrl: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80',
        id: 2
      },
      {
        title: 'title 3',
        imageUrl: 'https://images.unsplash.com/photo-1603665330306-dd1a67e0cc4e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80',
        id: 3,
      },
      {
        title: 'title 4',
        imageUrl: 'https://images.unsplash.com/photo-1607457597191-8ed4e870ceca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80',
        size: 'large',
        id: 4
      },
      {
        title: 'title 5',
        imageUrl: 'https://images.unsplash.com/photo-1607893326676-5c46ba36251f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80',
        size: 'large',
        id: 5
      }]
    };
  }

  render() {
    return(
      <div className='main-menu'>
        { this.state.sections.map(({ title, imageUrl, id, size}) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
     </div>
    );
  }
}

export default MainMenu;