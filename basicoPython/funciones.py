# def imprimirMensaje():

#     print("Mensaje expecial: ")
#     print("Estoy aprendiendo a usar funciones!")

# imprimirMensaje()
# imprimirMensaje()
# imprimirMensaje()

# def conversacion(mensaje):
#     print("""
#     Hola
#     Como estás
#     """ + mensaje + """
#     Adios""")

# opcion = int(input("Elige una opción (1,2,3)"))
# if opcion == 1:
#     conversacion("Elegiste la opcion 1")
# elif opcion == 2:
#     conversacion("Elegiste la opcion 2")
# elif opcion == 3:
#     conversacion("Elegiste la opcion 3")
# else:
#     print("Escribe la opción correcta")

def suma(a,b):
    print("Se suman dos números")
    resultado = a + b
    return resultado

sumatoria = suma(1,4)
print(sumatoria)