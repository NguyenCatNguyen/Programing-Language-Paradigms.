n = 5
k = 1

def nim():
    print("Game Start")
    while True:
        print(f"{k}: ",n*" *")

while n != 0:
    print(f"{k}:",n*" *")
    n -= 1
    k += 1
