import unittest
from city_validation import validate_city_name

class TestValidateCityName(unittest.TestCase):
    def test_validate_city_name_with_string(self):
        self.assertEqual(validate_city_name("Ankara"), "Ankara")

    def test_validate_city_name_with_non_string(self):
        with self.assertRaises(ValueError):
            validate_city_name(123)  # ınteger ise value error

        with self.assertRaises(ValueError):
            validate_city_name(["Istanbul"])  # liste ise value error

        with self.assertRaises(ValueError):
            validate_city_name(None)  # None ise value error

if __name__ == "__main__":
    unittest.main()