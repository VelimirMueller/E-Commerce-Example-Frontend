import React from 'react';
import { Route } from 'react-router-dom';

import SmallHeightMaxWidth from '../../components/small-height-max-width/small-height-max-width.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <SmallHeightMaxWidth />
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;