var who = ["заяц", "Путин", "Чебурашка", "раввин", "админ АКБ", "зять", "бомж", "Супермен",
"футболист", "зек"];
var comes = ["в бассейн", "в банк", "к врачу", "в детдом", "на похороны", "к грузину",
"на свадьбу", "в деканат", "в церковь", "в ад"];
var says = ["Сколько с меня?", "Ой-ой, течёт!", "Плюньте мне на грудь", "Мама, это я",
"Я ж охранник как-никак", "БЮУУУ", "Стааасечка", "Мама делала не так", "Я уголь привёз", "Я веган"];
var other = ["Лысый ёжик на это", "Сердобол отвечает", "Табличка гласит", "С неба голос",
"Болельщики ему", "Гобзавр, смеясь", "Ведущий по телеку", "Священники хором", "Управдом ему", "Мама, рыдая"];
var answers = ["У вас уши из трубки торчат", "Это дело паправимоэ", "Боря, ты что, кончил?!",
"Ещё 9 палок колбасы!", "Давай, оближу!", "Петрович, ты заебал!", "Колян!",
"Так ничего удивительного", "Ну не во время минета же!", "Тогда соси"];
var finale = ["И улетели оба!", "Ему пришлось", "Безобразие", "Люблю монахинь",
"А альтернатива — утки", "Теперь так каждый день", "Просто праздник какой-то",
"И тишина", "Даже ложка стоит", "По косячку?"];
 
function randInt(min, max) {
	return Math.round(min + Math.random() * (max - min));
}

function randArrayValue(arr) {
	//Contract.Assert(arr != null);
	//Contract.Assert(arr.Any());
	return arr[randInt(0, arr.length - 1)];
}

function result() { 
	var who_x = randArrayValue(who);
	var comes_x = randArrayValue(comes);
	var says_x = randArrayValue(says);
	var other_x = randArrayValue(other);
	var answers_x = randArrayValue(answers);
	var final_x = randArrayValue(finale);
	return "Приходит " + who_x + " " + comes_x + ": \"" + says_x + "\". " +
	other_x + ": \"" + answers_x + "\". " +
	final_x + ((final_x[final_x.length - 1] == "?" || final_x[final_x.length - 1] == "!") ? "" : ".");
}

function generate() {
	document.getElementById("anec_text").textContent = result();
}
