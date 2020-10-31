import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// bootstrap imports
import { Container } from 'react-bootstrap';
// font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { Header, Footer } from 'components';
import { HomeView, LoginView, DashboardView } from 'views';

const App = () => {
  library.add(fab, fas);
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/login' component={LoginView} exact />
          <Route path='/dashboard' component={DashboardView} exact />
          <Route path='/' component={HomeView} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
