import React from 'react';
import { Outlet, Link, useLoaderData, Form } from 'react-router-dom';
import { createContact, getContacts } from '../contacts';

export async function loader() {
  //Sempre que ele carregar a página, vai gerar essa função
  const contacts = await getContacts();
  return { contacts };
}

export async function action() {
  //Sempre que ele executar o form, vai rodar essa função
  const contacts = await createContact();
  return { contacts };
}

export default function Root() {
  //Pegando os dados de contato com uma função do router-dom
  const { contacts } = useLoaderData();

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
          {contacts? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <Link to={`contacts/${contact.id}`}>
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </Link>
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
      <div id='detail'>
        {/* Função para renderizar children, caso tenha */}
        <Outlet />
      </div>
    </>
  )
}
