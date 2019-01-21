def quantasLetras(array):
	lenSum = 0;
	for element in array:
		lenSum += len(element);
	return lenSum;

print(quantasLetras(["Oi", "Carlinha", "Gostosa"]))