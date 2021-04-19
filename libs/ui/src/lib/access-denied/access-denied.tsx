import { signIn } from 'next-auth/client';
import React from 'react';

export default function AccessDenied() {
  return (
    <>
      <h1>Inicie sesion</h1>
      <p>
        <a
          href="/api/auth/signin"
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}
        >
          Debes estar loggeado para ver la pagina.
        </a>
      </p>
    </>
  );
}
