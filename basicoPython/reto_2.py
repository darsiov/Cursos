import random

def es_primo(numero):
    a = numero - 1
    contador = 0
    exactitud = 1
    while True: 
        random.seed()
        potencia = random.randint(1,a)**a
        contador += 1
        if contador == exactitud:
            break
        else:
            continue
    if potencia % numero == 1:
        return True 
    else:
        return False


def run():
    limit = 10000
    counter = 2
    while counter < limit:
        es_primo(counter)
        counter += 1
        if es_primo(counter):
            print(counter, ' es primo')
        else:
            continue
        
        
if __name__ == "__main__":
    run()