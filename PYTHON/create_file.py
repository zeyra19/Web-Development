def main():
    myfile = open("textfile.txt", "w+")

    for i in range(7):
        myfile.write("Bu bir örnek mesajdır\n")

    myfile.close()


if __name__ == "__main__":
    main()


# Bu kod çalıştırıldığında, çalışma dizininde textfile.txt dosyası oluşacak
# ve içinde yedi satır "Bu bir örnek mesajdır" metni olacaktır.