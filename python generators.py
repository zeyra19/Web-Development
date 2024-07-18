def sayı_generator(sınır):
    """Bu fonksiyon sınır parametresi alır """
    sayı = 0
    while sayı < sınır:
        yield sayı
        sayı += 1


generator_fonksiyon = sayı_generator(4)
"""yalnızca 4 kere çağırlır """

print(next(generator_fonksiyon))
"""next fonksiyonu, generator'dan bir sonraki değeri alır."""


"""STOPITERATİON HATASI ALMAMAK İÇİN TRY EXCEPT DENERİZ"""
def sayı_generator(sınır):
    sayı = 0
    while sayı < sınır:
        yield sayı
        sayı += 1

generator_fonksiyon = sayı_generator(4)
sonuc_listesi = []


while True:
    try:
        sonuc_listesi.append(next(generator_fonksiyon))
    except StopIteration:
        print("Generator bitti.")
        break

"""iter metodunu kullanarak her hangi bir stringi iterationa dönüştürebiliriz
                              iter(string)                                """


benim_listem = list(sayı_generator(20))