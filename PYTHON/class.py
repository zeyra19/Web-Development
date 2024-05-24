# CLASSES AND İNSTANCE

class Personel:
    def __init__(self, isim, numara, görev):
        self.isim = isim # burada .title() veya .upper() gibi metodlaeı kullanabiliriz
        self.numara = numara
        self.görev = görev
        self.eposta = f"{isim}{numara}@gmail.com"

    def tam_görev(self):
        return self.görev # print kullanmadan yaz yoksa None döner

per1 = Personel("halise" , 10 , "ev hanımı")
print(per1.eposta)

print(f"{per1.isim} {per1.numara}") # bu şekilde de f stringlerle per1'in bir çok nesnesine ulaşabiliriz

print(per1.tam_görev()) # tam_görev metodunu çağırmak için









                                                 # BAŞKA BİR ÖRNEK


class Ogrenci:
    def __init__(self, isim, soyisim, yaş, not_ort):
        self.isim = isim  # NESNE DEĞİŞKENLERİ
        self.soyisim = soyisim   # NESNE DEĞİŞKENLERİ
        self.yaş = yaş   # NESNE DEĞİŞKENLERİ
        self.not_ort = not_ort   # NESNE DEĞİŞKENLERİ

    def info(self):
        print("{} {} {} yaşında ve {} notu olan bir öğrencidir".format(self.isim, self.soyisim, self.yaş, self.not_ort))

bir = Ogrenci("Halise", "Şişman", 20, 80)

bir.info()










                                          #  BAŞKA BİR ÖRNEK

class Personel:

    zam_orani = 3
    def __init__(self, isim, numara, görev, maas):
        self.isim = isim
        self.numara = numara
        self.görev = görev
        self.maas = maas

    def zam_uygula(self):
        self.maas = int(self.maas * Personel.zam_orani) # Personel classının altındaki zam orani çarpı nesne değişkeni

per1 = Personel("Halise", 10, "ev hanımı", 30000)
print(per1.maas) # önceki maaşı
per1.zam_uygula() # zam uyguluyoruz
print(per1.maas) # zam sonrası maaşı
