mystr = "This is a string"

def myFunction():
    mystr = "def"
    print(mystr)

myFunction()
print(mystr)

"4 ve 5. satırlarda hala fonksiyonun içindeyiz o yüzden mystr değeri def" \
"ama 7 ve 8. satırlarda fonksiyonun dışına çıktık o yüzden kendi değerini yansıtacak" \
"ancak hep def değerini alsın istiyorsak Global metodunu kullanacaz" \
"def myFunction() yazısının hemen altına global mystr yazmamız gerek "