import random


def run():
    random.seed()
    numrandom = random.randint(1,100)
    numchoose = int(input('Elige un numero del 1 al 100: '))
    while numchoose != numrandom:
        if numchoose < numrandom:
            print('Busca un numero mas grande')
        else:
            print('Busca un numero mas pequeño')
        numchoose =int(input('Elige otro numero: '))
    print('¡Ganaste!')


if __name__ == '__main__':
    run()