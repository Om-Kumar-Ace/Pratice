#In the first line of input, accept a sequence of space-separated words. In the second line of input, accept a single word. If this word is not present in the sequence, print NO. If this word is present in the sequence, then print YES and in the next line of the output, print the number of times the word appears in the sequence.
sequence = input().split()

word = input()

if word in sequence:
    print("YES")
    print(sequence.count(word))
else:
    print("NO")