import { Routes, Route } from "react-router-dom";
import {HomePage} from '../pages/Home'
import {ArticlePage} from '../pages/Article'

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/:article' element={<ArticlePage />} />
    </Routes>
  );
};
