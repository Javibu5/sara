#language: es
Característica: Crear usuarios

  Antecedentes:
    Dado que estoy logueado como administrador

  Escenario: Crear usuarios
    Dado que estoy en la página de creación de usuarios
    Cuando relleno el formulario con los siguientes datos:
      | username            | input  | johndoe       |
      | roles               | select | Administrador |
      | plainPassword       | input  | password      |
      | plainPasswordRepeat | input  | password      |
      | name                | input  | John          |
      | surname             | input  | Doe           |
      | nid                 | input  | 0000001       |
      | phoneNumber         | input  | 600000000     |

    Y pulso guardar
    Entonces estoy en la página de edición del usuario "johndoe"
    Y el formulario contiene los siguientes datos:
      | username    | input | johndoe   |
      | name        | input | John      |
      | surname     | input | Doe       |
      | nid         | input | 0000001   |
      | phoneNumber | input | 600000000 |
