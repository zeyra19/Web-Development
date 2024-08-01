import os
from os import path
import shutil
from shutil import make_archive
from zipfile import ZipFile


def main():
    # Kopyasını oluştumak için:
    if path.exists("textfile.txt"):
        # textfile.tsx nerede onu buluruz
        src = path.realpath("textfile.txt");
        dst = src + ".backup"
        shutil.copy(src, dst)

        # textfile dosyasının adını değiştirmek için:
        # os.rename("textfile.txt", "newfile.txt")

        # now put things into a ZIP archive
        root_dir, tail = path.split(src)
        shutil.make_archive("archive", "zip", root_dir)

        # more fine-grained control over ZIP files yedekleyeip arşivliyoruz
        with ZipFile("testzip.zip", "w") as newzip:
            newzip.write("newfile.txt")
            newzip.write("textfile.txt.backup")


if __name__ == "__main__":
    main()