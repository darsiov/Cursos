#Palindromo es una palabra que se puede leer en cualquier sentido, ya sea de izquierda a derecha, o de derecha a izquierda, un ejemplo es la palabra 'luz azul', este programa detecta si la palabra que ingresa el usuario es un palindromo o no.

def palindromo(palabra):                #Siempre definir la funcion, antes de ser invocada
    palabra = palabra.replace(' ', '') #La maquina lee también los espacios, por eso reemplazamos los espacios por strings vacios, o sea,por ningún valor
    palabra = palabra.lower()
    palabra_invertida = palabra[::-1]#Tomando el texto como Array, podemos hacer slices, incluso invertidos
    if palabra == palabra_invertida:
        return True
    else:
        return False


def run():
    palabra = input('Escribe una palabra: ')
    es_palindromo = palindromo(palabra)
    if es_palindromo == True:
        print('Es palindromo')
    else:
        print('No es palíndromo')


if __name__ == '__main__':#Invocamos la funcion principal, se tiene como estandar en la industria la funcion run, pero puede ser la funcion main como en c++
    run()
