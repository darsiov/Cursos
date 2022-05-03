dolar = input("¿Cuántos dolares estadounidences tienes?: ")
dolar = float(dolar)
valor_peso = 0.00026
pesos = dolar / valor_peso
pesos = round(pesos, 2)
pesos = str(pesos)
print("Tienes $" + pesos + " pesos")