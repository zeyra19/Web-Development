Happy Path Testing
Happy path testing, sistemin en iyi senaryoya göre çalıştığını doğrulamak
için yapılan testlerdir. Bu senaryoda, tüm kullanıcı girişleri ve sistem
koşulları doğru ve beklenen şekilde gerçekleşir. Test, sistemin ideal durumda
nasıl çalıştığını ve kullanıcıların tasarlandığı gibi sorunsuz bir deneyim yaşadığını
doğrulamak için kullanılır.

Örnek: Bir kullanıcı, doğru kullanıcı adı ve şifre ile giriş yapar ve başarılı bir şekilde ana sayfaya yönlendirilir.


-------------------Sad Path Testing----------------------------------------------------------------------------------
Sad path testing ise sistemin beklenmeyen veya yanlış kullanıcı girişleri ve
koşulları altında, nasıl davrandığını test etmek için yapılan testlerdir.
Bu testler, hata durumlarını ve sistemin beklenmedik hatalardan nasıl kurtulacağını
değerlendirmek amacıyla kullanılır. Sad path testing, sistemin sağlamlığını ve
hata durumlarında nasıl tepki verdiğini anlamak için önemlidir.

Örnek: Bir kullanıcı yanlış kullanıcı adı veya şifre girerse,
sistemin uygun bir hata mesajı gösterip göstermediğini test etmek.


Örnek CSV Dosyası
Aşağıda basit bir CSV dosyasının içeriğini görebilirsiniz:

Ad,Soyad,Yaş
Ali,Yılmaz,30
Ayşe,Demir,25
Mehmet,Kara,40


-----------------Parametrizasyon:--------------------------
yazılım testlerinde bir test fonksiyonunu veya senaryosunu çeşitli veri kümeleri ile çalıştırmak anlamına gelir.
Bu, aynı testin farklı girişlerle tekrar tekrar çalıştırılmasını sağlar ve genellikle test kapsamını genişletir.

import pytest

@pytest.mark.parametrize("x, y, expected", [
    (1, 1, 2),
    (2, 2, 4),
    (3, 3, 6),
])
def test_addition(x, y, expected):
    assert x + y == expected