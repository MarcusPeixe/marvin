def primo(num):
	num = abs(num);
	if num < 2:
		return "Não";
	for i in range(2, num):
		if num % i == 0:
			return "Não";
	return "Sim";