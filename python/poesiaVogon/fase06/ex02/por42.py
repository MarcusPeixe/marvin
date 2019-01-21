from math import ceil;

def por42(least, most):
	firstMult = ceil(least / 42) * 42;
	if firstMult + 42 <= most:
		return firstMult + 42;
	else:
		print("Não encontrado");
		return False;