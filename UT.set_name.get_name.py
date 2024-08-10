import unittest

        # bir Person sınıfı tanımlanmış ve bu sınıfın iki ana metodu bulunmaktadır:
        # set_name ve get_name. Sınıfın amacı, kullanıcı
        # isimlerini bir listeye eklemek ve belirli bir kullanıcı kimliğiyle
        # ilişkilendirilmiş ismi döndürmektir.
class Person:
    def __init__(self):
        self.name = []

    def set_name(self, user_name):
        self.name.append(user_name)
        return len(self.name) - 1
        # liste de bir eleman var eksi 1 yaparak ilk değeri sıfır yapıyorum

    def get_name(self, user_id):
        if user_id >= len(self.name):
            return 'There is no such user'
        # name listesindeki eleman sayısından büyükse indeksler uyuşmuyorsa hata patlat
        #  değilse name listesindeki kullanıcının adını döndür
        else:
            return self.name[user_id]

if __name__ == '__main__':
    person = Person()
    print('User Zeyra has been added with id ', person.set_name('Zeyra'))
    #  set name ile kullanıcı adını ve indeksini ekrana yazdırır

    print('User associated with id 0 is ', person.get_name(0))
    #  0.cı elemanı ekrana yazdırırız Zeyra gelirse doğru yapmışızdır
