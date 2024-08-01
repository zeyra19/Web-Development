word = input("Birden fazla kelime girebilirsiniz=").split()

"""sort() metodu, bir listeyi sıralamak için kullanılır.
 metodunu doğrudan bir string üzerinde kullanma. Stringleri önce listeye dönüştürmem gerekiyor"""

word.sort()
"numbers.sort(reverse=True) reverse parametresi True olarak ayarlandığında, liste azalan sıraya göre sıralanır:"
print(word)

---------------------------------------------------------------------------------------------------------------------------

a = [1, 2, 3, 4]
d = sum(a)
"sum tüm elemanların toplamını hesaplar d'ye atar"
print(d)

---------------------------------------------------------------------------------------------------------------------------

metin = "Test amaçlı şehir isimler: Isparta,Ankara,Antep"
rastegeleListe = metin.split(',')
"split virgülle yan yana gelmiş şeylerin arasına boşluk bırakır"
for buzdolabı in rastegeleListe:  "for kullanmamın sebebi "
    print(buzdolabı)
