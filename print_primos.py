def es_primo(numero):
    contador = 0

    for i in range(1, numero + 1):
        if i == 1 or i == numero:
            continue
        if numero % i == 0:
            contador += 1
    if contador == 0:
        return True
    elif numero == 1:
        return False
    else:
        return False


def run():
    limit = 10000000000
    counter = 0
    while counter < limit:
        es_primo(counter)
        counter += 1
        if es_primo(counter):
            print(counter, ' es primo')
        else:
            continue



if __name__ == '__main__':
    run()
