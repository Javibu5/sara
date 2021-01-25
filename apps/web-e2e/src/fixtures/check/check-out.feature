#language: es
Característica: Fichar salida

Antecedentes:
    Dado que estoy logueado como empleado
    Y que estoy en la página de registro de jornada

    Escenario: Fichar salida
        Dado que ya había fichado anteriormente
        Cuando pulse sobre el botón salida
        Entonces aparece el mensaje "salida registrada"
        Dado que estoy en la página de registro de jornadas
        Entonces aparecerá 1 jornada completa

    Escenario: Fichar salida sin entrada
        Cuando pulse sobre el botón salida
        Entonces aparece el mensaje "salida registrada"
        Dado que estoy en la página de registro de jornadas
        Entonces aparecerá 1 jornada completa
