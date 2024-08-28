import time


def siparis_al():
    print("Müşteriye gidiliyor ve sipariş alınıyor....")
    siparis = "Makarna"
    time.sleep(5) # işlem 5 saniye sürüyor
    print(f"Sipariş alındı: {siparis}")
    return siparis


def siparis_hazırla(siparis):
    print("Mutfağa gidiliyor...")
    print(f"Aşçı şu yemeği yap: {siparis}")
    time.sleep(7)
    print("Yemek hazırlandı")
    return f"Hazır {siparis}"


def yemek_servis_et(yemek):
    print("Yemek tezgahtan alınıyor.....")
    time.sleep(4)
    print(f"{yemek} müşteriye servis edildi")


def restoran_siparis_süreci():
    siparis = siparis_al()
    hazir_yemek = siparis_hazırla(siparis)
    yemek_servis_et(hazir_yemek)


restoran_siparis_süreci()