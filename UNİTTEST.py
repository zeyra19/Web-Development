import unittest
from unittest.mock import patch
# from api_client import get_user_data örnek sadece


class ExampleUnitest(unittest.TestCase):

    @patch('api_client.requests.get')
    def test_get_user_data(self, mock_get):
        # Mocklama ile dönecek değeri ayarlama
        mock_get.return_value.json.return_value = {'id': 1, 'name': 'zeyra'}

        # Fonksiyonu Test Etme: user_data = get_user_data(1)
        # ile fonksiyonu çağırır ve dönen değeri user_data değişkenine atarız.
        user_data = get_user_data(1)

        # Assertion ile kontrol ediyouz dönen veri doğru mu diye
        # assertEqual metodu, Python'un unittest modülünde yer alan ve iki değerin
        # eşit olup olmadığını kontrol eden bir assertion (doğrulama) metodudur.
        self.assertEqual(user_data['name'], 'zeyra')


if __name__ == '__main__':
    unittest.main()