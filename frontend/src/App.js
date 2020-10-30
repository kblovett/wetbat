import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { Header } from 'components';
import {} from 'views';

const App = () => {
  library.add(fab, fas);
  return (
    <Router>
      <Header />
    </Router>
  );
};

export default App;
