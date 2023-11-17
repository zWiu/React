import React from 'react';
import { Outlet, NavLink, useLoaderData, Form, redirect, useNavigation } from 'react-router-dom';
import { createContact, getContacts } from '../contacts';

export async function loader() {
  //Sempre que ele carregar a página, vai gerar essa função
  const contacts = await getContacts();
  return { contacts };
}

export async function action() {
  //Sempre que ele executar o form, vai rodar essa função
  const contact = await createContact();
  //Ele redireciona você para a edição do contato
  return redirect('/contacts/' + contact.id + '/edit');
}

export default function Root() {
  //Pegando os dados de contato com uma função do router-dom
  const { contacts } = useLoaderData();
  //O navigation.state, terá 3 estados, "idle", "submitting" e o "loading".
  const navigation = useNavigation();

  return (
    <>
      <div id='sidebar'>
        <h1>React Router Contacts</h1>
        <div>
          {/* Pesquisar para que serve o valor role */}
          <form id='search-form' role='search'>
            {/* Pesquisar para que serve o arial-label*/}
            <input
              type="search"
              name="q"
              id="q"
              aria-label='Search contacts'
              placeholder='Search'
            />
            <div
              id='search-spinner'
              aria-hidden
              hidden={true}
            />
            <div
              className='sr-only'
              aria-live='polite'
            ></div>
          </form>
          {/* Esse form é para cirar um novo contato, ele usa o Form do router-dom, pois, o form comum envia informações através do recarregamento de páginas */}
          <Form method='post'>
            <button type='submit'>New</button>
          </Form>
        </div>
        <nav>
          {/* Pegando os dados dos contatos */}
          {contacts ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <NavLink
                    to={`contacts/${contact.id}`}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                          ? "pending"
                          : ""
                    }
                  >
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div 
      id='detail'
      className={
        //Irá borrar a imagem enquanto carrega a página
        navigation.state === 'loading' ? 'loading' : ""
      }
      >
        {/* Função para renderizar children, caso tenha */}
        <Outlet />
      </div>
    </>
  )
}
