class Person:
    # bu alanda ki address kısmı tüm nesneler için geçerlidir
    #  bu değeri istersek değiştirebileceğiz ancak değiştirmezsek bu bilgi her nesne için geçerli olacak
    address = 'no information'

    def __init__(self, name, year):
        self.name = name
        self.year = year