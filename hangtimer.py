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
        # Track rep number
        print("Start rep:", _+1)
        time.sleep(1)

        # Count to 20
        for i in range(1, hang_time + 1):
            print(i)
            time.sleep(1)

        print("Stop hanging")
        time.sleep(1)
	
	# Count to 10
        for i in range(1, hang_time + 1):
            print(i)
            time.sleep(1)
 
    print("Hang complete!")

# User input for repititions
repeat_times = int(input("Enter the number of times to repeat: "))
hang_time = int(input("Enter hang time for each rep (seconds): "))
rest_time = int(input("Enter rest time for each rep (seconds): "))

hangTimer(repeat_times)

