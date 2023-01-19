import { Routes, Route } from "react-router-dom";
import {HomePage} from '../pages/Home'
import { ArticlePage } from '../pages/Article'
import { NotFound } from "./NotFound/NotFound";

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/articles/:id' element={<ArticlePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
