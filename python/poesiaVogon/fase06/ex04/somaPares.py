import math as m;

def somaPares(least, most):
	totalSum = 0;
	for i in range(m.ceil(least), m.floor(most) + 1):
		if i % 2 == 0:
			totalSum += i;
	return totalSum;