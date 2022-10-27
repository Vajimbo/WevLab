def palindrome(num):
    num_list = [int(d) for d in str(num)]
    return num_list == list(reversed(num_list))
    
print(palindrome(122221))
print(palindrome(122234))
print(palindrome(123321))
print(palindrome(456666))

def reverse(num):
    num_str = [d for d in str(num)]
    num_str.reverse()
    if num < 0:
        num_str.insert(0, num_str.pop())
        
    return int(''.join(num_str))
    
print(reverse(6589))
print(reverse(-148))
print(reverse(98521456))
