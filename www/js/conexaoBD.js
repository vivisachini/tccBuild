document.addEventListener('deviceready', onDeviceReady, false);
		
var bd;
var usuario = {};
var alimentos = {};

function onDeviceReady() {
	bd = window.openDatabase('bd_nutricao', 1, 'Base de Dados', 2 * 1024 * 1024);
	bd.transaction(popularBD, erroCB, sucessoCB);
}
		
function popularBD(tx) {
	tx.executeSql('CREATE TABLE IF NOT EXISTS TB_USUARIOS ' +
		'(id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, senha TEXT, email TEXT, dataNasc TEXT, altura REAL, pesoAtual REAL, pesoDesejado REAL)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS TB_ALIMENTOS ' +
		'(id INTEGER PRIMARY KEY AUTOINCREMENT, alimento TEXT, marca TEXT, tamPorcao REAL, numPorcoes REAL, calorias REAL, carbo REAL, prot REAL, gordTot REAL, gordSat REAL, gordPoli REAL, monoinsat REAL, gordTrans REAL, colest REAL, sodio REAL, potassio REAL, fibras REAL, acucar REAL, vitA REAL, vitC REAL, calcio REAL, ferro REAL)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS TB_RECEITAS' +
		'(id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, tempoPrep TEXT, rendimento TEXT, calorias REAL, ingredientes TEXT, modoPreparo TEXT)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS TB_REFEICOES' +
		'(id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, calorias REAL)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS TB_DIARIO' +
		'(id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, calorias REAL)');

	tx.executeSql('DELETE FROM TB_ALIMENTOS', []);
	tx.executeSql('DELETE FROM TB_RECEITAS', []);
	

	//Inserindo dados na tabela alimentos
		tx.executeSql('INSERT OR REPLACE INTO TB_ALIMENTOS(id, alimento, marca, tamPorcao, numPorcoes, calorias, carbo, prot, gordTot, gordSat, gordPoli, monoinsat, gordTrans, colest, sodio, potassio, fibras, acucar, vitA, vitC, calcio, ferro) VALUES' + 
			'(1,"Banana Prata", "Não informado", 1, 1, 98, 26, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 8, 22)');
		tx.executeSql('INSERT OR REPLACE INTO TB_ALIMENTOS(id, alimento, marca, tamPorcao, numPorcoes, calorias, carbo, prot, gordTot, gordSat, gordPoli, monoinsat, gordTrans, colest, sodio, potassio, fibras, acucar, vitA, vitC, calcio, ferro) VALUES' + 
			'(2,"Pão Integral", "Nutrella", 1, 1, 111, 17, 6, 3, 0, 0, 0, 0, 0, 1, 183, 0, 3, 0, 0, 0, 0)');
		tx.executeSql('INSERT OR REPLACE INTO TB_ALIMENTOS(id, alimento, marca, tamPorcao, numPorcoes, calorias, carbo, prot, gordTot, gordSat, gordPoli, monoinsat, gordTrans, colest, sodio, potassio, fibras, acucar, vitA, vitC, calcio, ferro) VALUES' + 
			'(3,"Leite Desnatado", "Não informado", 1, 1, 63, 9, 6, 0, 0, 0, 0, 0, 0, 173, 0, 0, 0, 0, 0, 0, 0)');
		tx.executeSql('INSERT OR REPLACE INTO TB_ALIMENTOS(id, alimento, marca, tamPorcao, numPorcoes, calorias, carbo, prot, gordTot, gordSat, gordPoli, monoinsat, gordTrans, colest, sodio, potassio, fibras, acucar, vitA, vitC, calcio, ferro) VALUES' + 
			'(4,"Ovo Mexido", "Não informado", 1, 1, 92, 1, 6, 7, 2, 1, 3, 0, 213, 20, 91, 0, 1, 6, 0, 2, 4)');
		tx.executeSql('INSERT OR REPLACE INTO TB_ALIMENTOS(id, alimento, marca, tamPorcao, numPorcoes, calorias, carbo, prot, gordTot, gordSat, gordPoli, monoinsat, gordTrans, colest, sodio, potassio, fibras, acucar, vitA, vitC, calcio, ferro) VALUES' + 
			'(5,"Arroz Branco", "Carreteiro", 1, 1, 46.05, 3.48, 3.24, 2.13, 0.96, 0, 0, 0, 0, 0, 0, 0.45, 0, 0, 0, 0, 0)');
		tx.executeSql('INSERT OR REPLACE INTO TB_ALIMENTOS(id, alimento, marca, tamPorcao, numPorcoes, calorias, carbo, prot, gordTot, gordSat, gordPoli, monoinsat, gordTrans, colest, sodio, potassio, fibras, acucar, vitA, vitC, calcio, ferro) VALUES' + 
			'(6,"Batata Doce", "Não informado", 1, 1, 86, 20, 1.6, 0.1, 0, 0, 0, 0, 0, 55, 337, 3, 4.2, 14, 2.4, 30, 0.6)');
		tx.executeSql('INSERT OR REPLACE INTO TB_ALIMENTOS(id, alimento, marca, tamPorcao, numPorcoes, calorias, carbo, prot, gordTot, gordSat, gordPoli, monoinsat, gordTrans, colest, sodio, potassio, fibras, acucar, vitA, vitC, calcio, ferro) VALUES' + 
			'(7,"Peito de Frango", "Sadia", 1, 1, 104, 0, 23, 1.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)');
		tx.executeSql('INSERT OR REPLACE INTO TB_ALIMENTOS(id, alimento, marca, tamPorcao, numPorcoes, calorias, carbo, prot, gordTot, gordSat, gordPoli, monoinsat, gordTrans, colest, sodio, potassio, fibras, acucar, vitA, vitC, calcio, ferro) VALUES' + 
			'(8,"Feijão Grupo 1", "Máximo", 1, 1, 109, 15, 8.9, 1.3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)');
		tx.executeSql('INSERT OR REPLACE INTO TB_ALIMENTOS(id, alimento, marca, tamPorcao, numPorcoes, calorias, carbo, prot, gordTot, gordSat, gordPoli, monoinsat, gordTrans, colest, sodio, potassio, fibras, acucar, vitA, vitC, calcio, ferro) VALUES' + 
			'(9,"Berinjela", "Não Informado", 1, 1, 25, 6, 1, 0.2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)');
		tx.executeSql('INSERT OR REPLACE INTO TB_ALIMENTOS(id, alimento, marca, tamPorcao, numPorcoes, calorias, carbo, prot, gordTot, gordSat, gordPoli, monoinsat, gordTrans, colest, sodio, potassio, fibras, acucar, vitA, vitC, calcio, ferro) VALUES' + 
			'(10,"Abobrinha", "Não Informado", 1, 1, 19, 4, 1.5, 0.2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)');
		tx.executeSql('INSERT OR REPLACE INTO TB_ALIMENTOS(id, alimento, marca, tamPorcao, numPorcoes, calorias, carbo, prot, gordTot, gordSat, gordPoli, monoinsat, gordTrans, colest, sodio, potassio, fibras, acucar, vitA, vitC, calcio, ferro) VALUES' + 
			'(11,"Queijo Cottage", "Boa Nata", 1, 1, 28, 0, 4.8, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)');
		tx.executeSql('INSERT OR REPLACE INTO TB_ALIMENTOS(id, alimento, marca, tamPorcao, numPorcoes, calorias, carbo, prot, gordTot, gordSat, gordPoli, monoinsat, gordTrans, colest, sodio, potassio, fibras, acucar, vitA, vitC, calcio, ferro) VALUES' + 
			'(12,"Grão de Bico", "Não Informado", 1, 1, 36.1, 6, 2, 0.6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)');
		tx.executeSql('INSERT OR REPLACE INTO TB_ALIMENTOS(id, alimento, marca, tamPorcao, numPorcoes, calorias, carbo, prot, gordTot, gordSat, gordPoli, monoinsat, gordTrans, colest, sodio, potassio, fibras, acucar, vitA, vitC, calcio, ferro) VALUES' + 
			'(13,"Aipim Cozido", "Não Informado", 1, 1, 159, 38, 1.4, 0.3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)');
		tx.executeSql('INSERT OR REPLACE INTO TB_ALIMENTOS(id, alimento, marca, tamPorcao, numPorcoes, calorias, carbo, prot, gordTot, gordSat, gordPoli, monoinsat, gordTrans, colest, sodio, potassio, fibras, acucar, vitA, vitC, calcio, ferro) VALUES' + 
			'(14,"Inhame", "Não Informado", 1, 1, 97, 27, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)');
		tx.executeSql('INSERT OR REPLACE INTO TB_ALIMENTOS(id, alimento, marca, tamPorcao, numPorcoes, calorias, carbo, prot, gordTot, gordSat, gordPoli, monoinsat, gordTrans, colest, sodio, potassio, fibras, acucar, vitA, vitC, calcio, ferro) VALUES' + 
			'(15,"Patinho Moído", "Não Informado", 1, 1, 125, 0, 19, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)');
			
		//Inserindo dados na tabela receitas
		tx.executeSql('INSERT OR REPLACE INTO TB_RECEITAS(id, titulo, tempoPrep, rendimento, calorias, ingredientes, modoPreparo) VALUES' + 
			'(1,"Torta Integral de Atum", "45 min", "12 porções", 22.5, "MASSA:<br>2 ovos<br>2 xícara de trigo integral<br>1 xícara de leite<br>' +
			'1/2 xícara de óleo de girassol<br>1 xícara de aveia fina<br>1 colher (sopa) de fermento<br>sal a gosto<br><br>RECHEIO:<br>' +
			'1 cebola picada<br>1 tomate picado<br>2 ovos cozidos picados<br>2 lata de atum natural moído<br>1 colher de cheiro-verde<br>' +
			'sal e pimenta a gosto<br><br>","MASSA:<br>Coloque todos os ingredientes no liquidificador menos o fermento e bata tudo até ficar bem homogêneo' +
			'<br>Depois acrescente o fermento e bata rapidamente só para misturar a massa com o fermento<br><br>RECHEIO:<br>Misture todos os ' +
			'ingredientes numa tigela e mexa ate todos se encorporarem<br>Em uma forma média unte com azeite coloque metade da massa espalhe o recheio '+
			'todo por ela, acrescente o restante da massa, polvilhe se quiser orégano por cima para dar um gostinho especial<br>Leve ao forno médio por ' +
			'mais ou menos 40 a 45 minutos<br>Bom apetite!")');
			
		tx.executeSql('INSERT OR REPLACE INTO TB_RECEITAS(id, titulo, tempoPrep, rendimento, calorias, ingredientes, modoPreparo) VALUES' + 
			'(2,"Coxinha fit (pré-treino)", "45 min", "5 porções", 27.8, "MASSA:<br>1 xícara de batata doce cozida e amassada' +
			' com sal (a gosto)<br>Linhaça<br><br>RECHEIO:<br>1 xícara de frango cozido temperado e desfiado<br><br>","Bata a ' +
			'linhaça no liquidificador e separe<br>Faça um bolinho com a batata amassada<br>Recheie com o frango desfiado<br>' +
			'Deixe no formato de coxinha e depois passe a farinha da linhaça<br>Coloque no forno a 180ºC por 30 minutos ou até ' +
			'dourar")');

		tx.executeSql('INSERT OR REPLACE INTO TB_RECEITAS(id, titulo, tempoPrep, rendimento, calorias, ingredientes, modoPreparo) VALUES' + 
			'(3,"Escondidinho de batata doce com frango", "40 min", "5 porções", 83, "1 kg de batata doce cozida e espremida<br>' +
			'1 kg de peito de frango cozido e desfiado<br>Temperos a gosto (sal, alho, cebola, orégano, pimenta cayena, páprica ' +
			'doce e cheiro verde picadinho)<br>2 colheres de sopa de farinha de coco (ou outra farinha da sua escolha)<br>4 colheres ' +
			'de sopa requeijão<br>1 gema de ovo<br>100 g de queijo parmesão<br>2 colheres de sopa de gergelim para confeitar<br><br>", ' +
			'"Misture com as batatas cozidas a farinha e o requeijão (pode ser com o fogo desligado)<br>Depois coloque em um refratário ' +
			'grande de vidro uma camada de frango e outra de batata<br>Espalhe a gema por cima com as costas de uma colher de sopa e ' +
			'salpique gergelim<br>Derrame o queijo parmesão por toda a massa<br>Leve ao forno por 20 minutos e sirva ainda quente")');

		tx.executeSql('INSERT OR REPLACE INTO TB_RECEITAS(id, titulo, tempoPrep, rendimento, calorias, ingredientes, modoPreparo) VALUES' + 
			'(4,"Tabule", "480 min", "4 porções", 31, "45 g de trigo para kibe<br>200 g de tomate picado sem sementes<br>1 cebola picada<br>' +
			'2 pepinos picados<br>1 maço de salsinha picada<br>3 colheres (sopa) de suco de limão<br>2 colheres (sopa) de azeite<br>sal e ' +
			'pimenta-do-reino a gosto<br>1/4 colher (chá) de noz-moscada<br>hortelã picada<br>salsa picada<br><br>","Em um recipiente, deixe ' +
			'o trigo de molho por 2 horas<br>Lave bem o trigo em água corrente, escorra e esprema nas mão para retirar o excesso de umidade<br>' +
			'Passe a cebola picada em água fria e escorra bem<br>Junte os outros ingredientes (menos o tomate) e deixe tampado na geladeira por ' +
			'pelo menos 8 horas<br>Acrescente os tomates na hora de servir")');

		tx.executeSql('INSERT OR REPLACE INTO TB_RECEITAS(id, titulo, tempoPrep, rendimento, calorias, ingredientes, modoPreparo) VALUES' + 
			'(5,"Bolo integral de banana", "60 min", "12 porções", 10, "4 ovos inteiros<br>6 bananas caturra cortadas em rodelas<br>' +
			'1/2 xícara de chá de óleo de canola<br>1/2 xícara de leite desnatado<br>1 xícara de chá de farinha de trigo integral<br>' +
			'1 xícara de chá de aveia<br>2 xícaras de chá, não muito cheias, de açúcar mascavo<br>canela para salpicar<br>1 colher de ' +
			'sopa de fermento em pó<br><br>","Bata todos os ingredientes no liquidificador com apenas 1 banana, coloque em forma untada ' +
			'com óleo e farinha<br>Ponha as rodelas de banana sobre essa massa e salpique com canela<br>Assar em forno pré-aquecido, a 180° ' +
			'por aproximadamente 50 minutos")');

		tx.executeSql('INSERT OR REPLACE INTO TB_RECEITAS(id, titulo, tempoPrep, rendimento, calorias, ingredientes, modoPreparo) VALUES' + 
			'(6,"Panqueca saudável de aveia e banana", "15 min", "4 porções", 104, "2 bananas<br>2 ovos<br>½ xícara de aveia em ' +
			'flocos<br>1 colher (sopa) de extrato de baunilha<br>1 colher (sopa) de canela<br><br>","Amasse as bananas em uma ' +
			'travessa funda<br>Adicione os ovos inteiros e misture bem<br>Adicione a baunilha, a aveia e a canela<br>Unte uma ' +
			'frigideira com um pouco de óleo e leve ao fogo ate aquecer<br>Coloque uma colherada grande (ou uma concha) da massa ' +
			'na frigideira<br>Cozinhe de 2 a 3 minutos<br>Quando a massa começar a soltar umas bolhinhas, vire e deixe mais 1 a 2 ' +
			'minutos<br>Repita o processo de cozimento para as demais porções<br>Sirva a sua cobertura favorita")');

		tx.executeSql('INSERT OR REPLACE INTO TB_RECEITAS(id, titulo, tempoPrep, rendimento, calorias, ingredientes, modoPreparo) VALUES' + 
			'(7,"Salmão Grelhado", "20 min", "2 porções", 85.5, "2 postas de salmão<br>Sal<br>Sumo de 2 limões<br><br>MOLHO:<br>' +
			'1 colher (chá) de massa de alho<br>1 pitada de sal<br>Coentro picado a gosto<br>50 ml de azeite<br>1 raminho de ' +
			'coentro<br><br>","Tempere as postas de um dia para o outro em sal e limão<br>Na hora de grelhar, prepare o molho, ' +
			'misturando todos os ingredientes<br>Pincele as postas com o raminho de coentro<br>Grelhe, pincelando com o molho ' +
			'sempre que vira<br>Na última virada, cubra as postas com os ingredientes do molho<br>Deixe alourar um pouco mais ' +
			'para aderir bem e está pronto")');
		
		tx.executeSql('INSERT OR REPLACE INTO TB_RECEITAS(id, titulo, tempoPrep, rendimento, calorias, ingredientes, modoPreparo) VALUES' + 
			'(8,"Bolinho de brócolis assado", "15 min", "2 porções", 214.5, "1 cabeça de brócolis<br>2 dentes de alho<br>1/4 ' +
			'copo de farinha de rosca<br>1 ovo<br>1/4 copo de queijo de sua preferência (usei prato)<br>sal e pimenta a gosto<br>' +
			'<br>","Cozinhe o brócolis em uma panela com água e uma pitada de sal por 2 minutos<br>Após cozinhar, pique o brócolis ' +
			'para que fique parecendo farinha<br>Numa bacia, misture todos os ingredientes<br>Faça pequenas bolinhas com a massa e ' +
			'coloque-as em uma forma antiaderente<br>Leve para assar em forno médio (180° C) por cerca de 10 a 15 minutos<br>Sirva-se")');

		tx.executeSql('INSERT OR REPLACE INTO TB_RECEITAS(id, titulo, tempoPrep, rendimento, calorias, ingredientes, modoPreparo) VALUES' + 
			'(9,"Berinjela à parmegiana", "5 min", "6 porções", 72, "3 berinjelas<br>500 g de carne moída<br>200 g de mussarela ' +
			'ralada<br>sal e orégano a gosto<br><br>","Corte as beringelas ao meio e recheie-as com a carne refogada e o queijo ' +
			'ralado<br>Coloque sal a gosto e orégano<br>Coloque as beringelas em uma assadeira e leve ao forno médio (180° C) até ' +
			'que o queijo esteja derretido")');

		tx.executeSql('INSERT OR REPLACE INTO TB_RECEITAS(id, titulo, tempoPrep, rendimento, calorias, ingredientes, modoPreparo) VALUES' + 
			'(10,"Pão de queijo fit", "4 min", "1 porção", 98, "1 ovo<br>2 colheres (sopa) de aveia<br>sal a gosto<br>queijo a ' +
			'gosto<br>1 colher (chá) de fermento<br><br>","Misture todos os ingredientes em uma caneca para micro-ondas<br>' +
			'Leve ao micro-ondas por 2 minutos")');
	
}
		
function erroCB(err) {
	alert('Erro no BD: ' + err.message + '\nCodigo: ' + err.code);
}
		
function sucessoCB() {
	initBD();
}
		
function initBD() {
	bd.transaction(function(tx) {
		tx.executeSql('SELECT * FROM TB_USUARIOS ORDER BY ID');
	});
	bd.transaction(function(tx) {
		tx.executeSql('SELECT * FROM TB_ALIMENTOS ORDER BY ID');
	});
	bd.transaction(function(tx) {
		tx.executeSql('SELECT * FROM TB_RECEITAS ORDER BY ID');
	});
	
}

$('body').on('submit','#form-usuario',function(e){
	e.preventDefault();
	$('#form-usuario').parsley().on('field:validated', function() {
	  var ok = $('.parsley-error').length === 0;
	  $('.bs-callout-info').toggleClass('hidden', !ok);
	  $('.bs-callout-warning').toggleClass('hidden', ok);
	})
	.on('form:submit', function() {
	  criarNovoUsuario();
	});
});

function criarNovoUsuario() {

	usuario = {
		id: 0,
		nome: $('#nome').val(),
		senha: $('#senha').val(),
		email: $('#email').val(),
		dataNasc: $('#dataNasc').val(),
		altura: $('#altura').val(),
		pesoAtual: $('#pesoAtual').val(),
		pesoDesejado: $('#pesoDesejado').val()
	};
	addUsuarioBD(usuario);
}	
					
function addUsuarioBD(usuario) {
	bd.transaction(function(tx) {
		tx.executeSql('INSERT INTO TB_USUARIOS(nome, senha, email, dataNasc, altura, pesoAtual, pesoDesejado) VALUES (?, ?, ?, ?, ?, ?, ?)', 
			[usuario.nome, usuario.senha, usuario.email, usuario.dataNasc, usuario.altura, usuario.pesoAtual, usuario.pesoDesejado], function(tx, results1) {
				alert("Usuário cadastrado com sucesso!");
				window.location.href = 'login.html';
		});
	});
}

$('body').on('submit','#form-alimento',function(e){
	e.preventDefault();
	$('#form-alimento').parsley().on('field:validated', function() {
	  var ok = $('.parsley-error').length === 0;
	  $('.bs-callout-info').toggleClass('hidden', !ok);
	  $('.bs-callout-warning').toggleClass('hidden', ok);
	})
	.on('form:submit', function() {
	  criarNovoAlimento();
	});
});


function criarNovoAlimento() {
		alimentos = { 
			id: 0,
			alimento:	$('#alimento').val(),
			marca:		$('#marca').val(),
			tamPorcao:  $('#tamPorcao').val(),
			numPorcoes: $('#numPorcoes').val(),
			calorias: 	$('#calorias').val(),
			carbo: 		$('#carbo').val(),
			prot: 		$('#prot').val(),
			gordTot: 	$('#gordTot').val(),
			gordSat: 	$('#gordSat').val(),
			gordPoli: 	$('#gordPoli').val(),
			monoinsat: 	$('#monoinsat').val(),
			gordTrans: 	$('#gordTrans').val(),
			colest: 	$('#colest').val(),
			sodio: 		$('#sodio').val(),
			potassio: 	$('#potassio').val(),
			fibras: 	$('#fibras').val(),
			acucar: 	$('#acucar').val(),
			vitA: 		$('#vitA').val(),
			vitC: 		$('#vitC').val(),
			calcio: 	$('#calcio').val(),
			ferro: 		$('#ferro').val()
		};
		addAlimentoBD(alimentos);
}


function addAlimentoBD(alimentos) {
	bd.transaction(function(tx) {
		tx.executeSql('INSERT INTO TB_ALIMENTOS(alimento, marca, tamPorcao, numPorcoes, calorias, carbo, prot, gordTot, gordSat, gordPoli, monoinsat, gordTrans, colest, sodio, potassio, fibras, acucar, vitA, vitC, calcio, ferro) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', 
			[alimentos.alimento, alimentos.marca, alimentos.tamPorcao, alimentos.numPorcoes, alimentos.calorias, alimentos.carbo, alimentos.prot, alimentos.gordTot, alimentos.gordSat, alimentos.gordPoli, alimentos.monoinsat, alimentos.gordTrans, alimentos.colest, alimentos.sodio, alimentos.potassio, alimentos.fibras, alimentos.acucar, alimentos.vitA, alimentos.vitC, alimentos.calcio, alimentos.ferro], function(tx, results2) {
				alert("Alimento cadastrado com sucesso!");
				window.location.href = 'painelControle.html';
		});
	});
}

$('#registrarReceita').on('click', function () {
	receita = {
		id: 0,
		titulo: $('#titulo').val(),
		preparo: $('#preparo').val(),
		rendimento: $('#rendimento').val(),
		calorias: $('#calorias').val(),
		ingredientes: $('#ingredientes').val(),
		modopreparo: $('#modopreparo').val()
	};
	addReceitaBD(receita);
});

function addReceitaBD(receita) {
	bd.transaction(function(tx) {
		tx.executeSql('INSERT INTO TB_RECEITAS(titulo, tempoPrep, rendimento, calorias, ingredientes, modoPreparo) VALUES (?, ?, ?, ?, ?, ?)', 
			[receita.titulo, receita.preparo, receita.rendimento, receita.calorias, receita.ingredientes, receita.modopreparo], function(tx, results3) {
				alert("Receita cadastrada com sucesso!");
				window.location.href = 'receitas.html';
		});
	});
}

