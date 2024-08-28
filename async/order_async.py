import asyncio


class Siparis:
    def __init__(self, id):
        self.id = id
        self.yemek = f"Yemek {id}"


async def siparis_al(siparis_id):
    print(f"Garson sipariş {siparis_id} alınıyor....")
    await asyncio.sleep(3)
    print(f"Garson sipariş {siparis_id} alındı.")
    return Siparis(siparis_id)

async def siparis_hazirla(siparis):
    print(f"Aşçı: Sipariş {siparis.id} hazırlanıyor")
    await asyncio.sleep(3)
    print(f"Aşçı: Sipariş {siparis.id} hazır.")
    return siparis.yemek

async def yemek_servis_et(yemek):
    print(f"Garson: {yemek} tezgahtan alınıyor..")
    await asyncio.sleep(3)
    print(f"Garson: {yemek} servis edildi.")

async def garson_sureci():
    siparisler = [19, 7, 1]
    hazirlik_gorevleri = []

    for siparis_id in siparisler:
        siparis = await(siparis_al(siparis_id))

        #sipariş hazırlanmasını başlatıyorum
        hazirlik_gorevi = asyncio.create_task(siparis_hazirla(siparis))
        hazirlik_gorevleri.append(hazirlik_gorevi)

        # Yemek hazır olduğunda servis etme görevini başlatıyorum
        hazir_yemek = await hazirlik_gorevi
        await yemek_servis_et(hazir_yemek)

        # Sonraki siparişe geçmeden önce bekletyoum
        await asyncio.sleep(1)

asyncio.run(garson_sureci())