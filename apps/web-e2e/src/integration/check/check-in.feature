#language: es
Característica: Fichar entrada

Antecedentes:
    Dado que estoy logueado como empleado
    Y que estoy en la página de registro de jornada

    Escenario: Fichar entrada
        Cuando pulse sobre el botón entrada
        Entonces aparece el mensaje "entrada registrada"
        Dado que estoy en la página de registro de jornadas
        Entonces aparecerá 1 jornada sin salida

    Escenario: Fichar entrada más de una vez al día
        Dado que ya había fichado anteriormente
        Cuando pulse sobre el botón entrada
        Entonces aparece el mensaje "entrada registrada"
        Dado que estoy en la página de registro de jornadas
        Entonces aparecerán 2 jornadas sin salida
