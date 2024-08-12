def validate_city_name(city_name):
    if not isinstance(city_name, str):
        # isinstance() fonksiyonunu bir nesnenin belirli bir sınıfın veya
        # sınıfın türevlerinden biri olup olmadığını kontrol etmek için kullandım
        raise ValueError("City name must be a string.")
    return city_name