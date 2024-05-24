from datetime import datetime, timedelta
from printer import printer

if __name__ == "__main__":
    """
    print("merhaba")
    
    print(list(range(3)))
    
    for i in range(2):
        age = int(input("Yasin kaç la? \n"))
        if age >= 18:
            print("Aferin la reşitsin")
        else:
            print("siktir la bebe")
    
    list_ = list(range(100))
    dict_ = {1: 1, 2: 2, 3: 3}
    set_ = {1, 2, 3, 4, "a", "b"}
    print("set:", set(list_))

    if 4 in set_:
        print("set icindeyim")

    if 4 in list_:
        print("liste icindeyim")
    
    count = 0
    while count < 100:
        print("anan")
        count += 1
    
    x = int(input("Sayi  girin"))
    if x % 15 == 0:
        print("3 e ve 5 e")
    elif x % 5 == 0:
        print("5 e")
    elif x % 3 == 0:
        print("3 e")
    else:
        print("Toprak kabul etmiiy")
    
    a_count = 0
    for char in "ananbabandeden":
        # char -> a
        if char == "a":
            a_count += 1
    print("A sayisi: ", a_count)
    """
    x = input("tarih gir")
    print(datetime.now() - timedelta(minutes=5))

