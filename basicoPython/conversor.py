def conversor(tipo_pesos, valor_dolar):
    pesos = input("¿Cuántos pesos"+ tipo_pesos +" tienes?: ")#input es una funcion para mostrar un mensaje y dejar un valor de entrada en la consola
    pesos = float(pesos)#float para convertir cualquier variable en decimal
    dolares = pesos / valor_dolar
    dolares = round(dolares, 2)#round es para mostrar solo el numero de decimales que indiques en la segunda variable ingresada, solo funciona con variables flotantes
    dolares = str(dolares)#str es para convertir variables en texto
    print("Tienes $" + dolares + " dolares")

menu = """
Bienvenido al conversor de monedas 💰

1 - Pesos colombianos
2 - Pesos argentinos
3 - Pesos mexicanos

Elige una opción: """

opcion = int(input(menu))
if opcion == 1:
    conversor("colombianos", 3887.07)
elif opcion == 2:
    conversor("argentinos", 65)
elif opcion == 3:
    conversor("mexicanos", 24)
else:
    print("Elige una opcion correcta")

