#The range of a list of numbers is the difference between the maximum and minimum values in the list.

#Write a function named get_range that accepts a list of real numbers as argument. It should return the range of the list.

#Note

#(1) Avoid using built-in function such as max and min.

#(2) You do not have to accept input from the user or print output to the console. You just have to write the function definition.

def get_range(numbers):
    if not numbers:
        return None
    
    min_val = numbers[0]
    max_val = numbers[0]
    
    for num in numbers:
        if num < min_val:
            min_val = num
        elif num > max_val:
            max_val = num
    
    range_of_numbers = max_val - min_val
    
    return range_of_numbers