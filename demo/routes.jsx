import React from 'react'
import { Router, Route, NoMatch, IndexRoute } from 'react-router'
import { App, Info, Users, User, UserDetails } from './app.jsx';

export default (
  <Router>
    <Route path="/" name="Examples" component={App} >
      <Route name="Users" path="users" component={Users}>
        <Route name="UserLocator" path=":userId" component={User}>
          <Route name="UserDetails" path="details" component={UserDetails} />
        </Route>
      </Route>
      <Route name='RouteName1' path='parent' component={Info}>
        <Route name='RouteName2' path='child1' component={Info}>
          <Route name='RouteName3' path=':item1' component={Info}>
            <Route name='RouteName4' path='child2' component={Info}>
              <Route name='RouteName5' path=':item2' component={Info}>
                <Route name='RouteName6' path='child3' component={Info}>
                </Route>
              </Route>
            </Route>
          </Route>
        </Route>
      </Route>
    </Route>
    <Route name="404: No Match for route" path="*" component={NoMatch}/>
  </Router>
);
