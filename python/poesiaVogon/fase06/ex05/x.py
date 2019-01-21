def x(string):
	count = 0;
	for char in string:
		if char in ('X', 'x'):
			count += 1;
	return count;