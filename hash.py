import hashlib


def hash_password(password):
    hashed_password = hashlib.sha256(password.encode()).hexdigest()
    return hashed_password


password = input("Lütfen 3 haneli bir sayı girin: ")

if len(password) == 3 and password.isdigit():
    hashed = hash_password(password)
    print(f"Hashed Password: {hashed}")
else:
    print("Lütfen 3 haneli bir sayı girin.")