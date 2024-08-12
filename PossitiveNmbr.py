import unittest

def check_positive(number):
    if number < 0:
        raise ValueError("Pozitif Sayı Girilmeli")
    return True

class TestExample(unittest.TestCase):
    def test_check_positive(self):
        with self.assertRaises(ValueError) as context:
            # as context: hatayı detaylı açıklasın diye koyarım
            check_positive(-1)
            # check_positive fonksiyonunu -1 değeri ile çağırırım
        self.assertEqual(str(context.exception), "Pozitif Sayı Girilmeli")

if __name__ == '__main__':
    unittest.main()