import time

def timer(repeat):
    for i in range(5, 0, -1):
        #pre count to 5
        print("starting hang count in %s" % i)
        time.sleep(1)

    for _ in range(repeat):    
	# Count to 20
        for i in range(1, 21):
            print(i)
            time.sleep(1)
        
        print("Stop hanging")

        # Count to 10
        for i in range(1, 11):
            print(i)
            time.sleep(1)

        print("Start rep::", _+2)
    
    print("Hang complete!")

repeat_times = int(input("Enter the number of times to repeat: "))
timer(repeat_times)

