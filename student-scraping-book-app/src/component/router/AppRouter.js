import React from 'react';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import Header from '../header/header';
import AddBook from '../section/AddBook';
import BooksList from '../section/Booklist';


const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
        <Routes>
            <Route component={BooksList} path="/" exact={true} />
            <Route component={AddBook} path="/add" />
         </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;