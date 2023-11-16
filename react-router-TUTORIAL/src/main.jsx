import React from 'react';
import ReactDOM from 'react-dom/client';

import Root, {
  loader as rootLoader,
  action as rootAction,
  } from './routes/root';

import ErrorPage from './error-page';

import Contact, {
  loader as contactLoader,
} from './routes/contact';

import EditContact,{
  action as editAction,
} from './routes/edit'

import {  createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
  // Criando uma página para rotear o html Hello Word!
  const router = createBrowserRouter([
    {
      //Caminho da página
      path: "/",
      //Elemento na página
      element: <Root/>,
      //Página quando dá algum erro
      errorElement: <ErrorPage/>,
      //Pegar informações no carregamento da página
      loader: rootLoader,
      //Gerar informações apartir do envio de um formulário
      action: rootAction,
      //Definindo um caminho filho
      children: [
        {
          path: "/contacts/:contactId",
          element: <Contact/>,
          loader: contactLoader,
        },
        {
          path: "/contacts/:contactId/edit",
          element: <EditContact/>,
          loader: contactLoader,
          action: editAction,
        }
      ]
    },
    // Metódo alternativo de definir um caminho filho
    // {
    //   path: "/contacts/:contactId",
    //   element: <Contact/>
    // }
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Objeto do react-router-dom que puxa os elementos pelo caminho da página */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
