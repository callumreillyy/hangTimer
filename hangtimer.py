import time

# Function which counts in 20 second then 10 second intervals. Repeats
# according to user input. Prints to command line after each interval and once
# all repititions have been completed. 
def hangTimer(repeat):
    #count down from 5
    for i in range(5, 0, -1):
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

# User input for repititions
repeat_times = int(input("Enter the number of times to repeat: "))
hangTimer(repeat_times)

