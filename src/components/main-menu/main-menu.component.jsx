import React from 'react';
import {connect} from 'react-redux'

import { createStructuredSelector } from 'reselect';
import { selectMainMenuSections } from '../../redux/main-menu/main-menu.selectors';

import MenuItem from '../menu-item/menu-item.component';
import './main-menu.styles.scss';

const MainMenu = ({ sections }) => (
     <div className='main-menu'> 
        { sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
     </div>
);

const mapStateToProps = createStructuredSelector({ 
  sections: selectMainMenuSections
 });

export default connect(mapStateToProps)(MainMenu);