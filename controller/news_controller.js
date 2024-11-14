const news = [
    { 
        id: 1, 
        titulo: "Kaue e a Paixão Incontrolável por CR7: 'É Mais Que Futebol, É Uma Religião!'", 
        descricao: "Kaue, o maior fã de Cristiano Ronaldo que já existiu, foi flagrado mais uma vez em uma verdadeira adoração ao seu ídolo, assistindo a um jogo de CR7. Mas, ao invés de apenas assistir, Kaue estava de pé, com uma vela acesa e uma foto do jogador na mão, murmurando: 'Eu juro que um dia vou ser o seu técnico!' Seus amigos, sem entender nada, o questionaram: 'Kaue, você está mais obcecado pelo CR7 do que o Dr. Frankenstein por sua criação!' Kaue, com o olhar fixo na tela e uma expressão digna de um romance épico, respondeu: 'Não é obsessão, é uma missão de vida! Só falta ele me reconhecer e me convidar para jogar na seleção!' E, claro, ele não parou por aí: 'Eu amo o CR7 tanto que até comecei a torcer para a Juventus... na verdade, eu sou a Juventus!'",

    },
    { 
        id: 2, 
        titulo: "Gabriel e Seus Segredos Misteriosos: 'Nem Eu Sei Onde Eles Estão!'",
        descricao: "Gabriel, o mestre dos mistérios e do 'quem, eu?', foi flagrado em um momento peculiar enquanto tentava esconder algo de seus amigos. Sempre com aquele sorriso desconfiado, Gabriel começou a agir de maneira estranha quando alguém perguntou sobre seu passado misterioso. 'Eu não sou bom com segredos, mas... vamos apenas dizer que até o Sherlock Holmes ficaria perdido', ele disse, com a cara de quem estava segurando um mistério que nem ele mesmo sabia resolver. Quando questionado sobre o que estava escondendo, Gabriel respondeu: 'Ah, são apenas... coisas. Coisas que não podem ser compartilhadas. Tipo aquele episódio de Friends que ninguém lembra, mas todos sabem que existiu.' Seus amigos ficaram ainda mais confusos, mas Gabriel não desiste da piada: 'Acreditem, estou tão cheio de segredos que a CIA me pediria para abrir uma conta no banco de segredos... mas eu nunca deixaria ninguém me descobrir!'",
        
    },
    { 
        id: 3, 
        titulo: "Um Cliente ou um Cão? João Enfrenta o Desafio no Ganso Services Desk",
        descricao: "João, o guerreiro,  teve um dia que mais parecia um episódio de comédia. Tudo começou quando um cliente ligou, furioso: 'Meu sistema travou! Como vocês podem ser tão incompetentes?!' João, com sua paciência de ganso, tentou manter a calma: 'Calma, amigo, estou aqui para resolver o problema. Você está lidando com um Ganso especializado em paciência!' Mas o cliente, com um tom cada vez mais alto, parecia um cachorro bravo. 'Não quero saber de metáforas, eu quero meu sistema funcionando agora!' João, já começando a sentir a pressão, respondeu: 'Ok, eu vou resolver isso rapidinho, não se preocupe. E só para garantir, a próxima vez que você ligar, trago biscoitos, ok?' O cliente, totalmente perdido, ficou em silêncio por um momento, sem saber se João estava sendo sério ou se estava jogando uma partida de ‘Quem Fica Calmo por Mais Tempo’. João, mantendo sua tranquilidade, conseguiu resolver o problema. Quando a ligação terminou, ele se recostou na cadeira e pensou: 'Se for para escolher entre um cliente nervoso ou um cão, eu fico com o cão. Pelo menos eles não têm expectativas de software!'",
        
    },
    { 
        id: 4, 
        titulo: "João e a Desventura do Suplemento", 
        descricao: "João decidiu que ia ser o mais forte da academia e começou a tomar um suplemento novo que prometia 'resultados rápidos'. Porém, ele não leu as instruções e acabou colocando o dobro da dose recomendada. Em questão de minutos, ele começou a falar super rápido e a se mover de forma exagerada. Seus amigos, sem entender nada, começaram a rir e disseram: 'João, você virou o Hulk do Instagram, só falta quebrar a barra!' João, sempre tranquilo, respondeu: 'É só a dose extra de energia... ou será que é o whey de chocolate?'",
        
    },
    { 
        id: 5, 
        titulo: "Kaue e o Guarda-Chuva Rebelde", 
        descricao: "Kaue estava andando pela rua, indo para um encontro importante, quando o céu escureceu e começou a chover. Ele, sempre preparado, puxou seu guarda-chuva. Porém, ao abrir o guarda-chuva, ele foi surpreendido por um vento tão forte que o item virou do avesso. Kaue ficou preso na situação, tentando fazer o guarda-chuva funcionar enquanto parecia estar em uma luta épica com a natureza. Ele olhou para seus amigos e disse: 'Bom, pelo menos agora sou um ícone de estilo em meio ao caos!'",
        
    },
    { 
        id: 6, 
        titulo: "Gabriel e o Acidente de Cafeteria", 
        descricao: "Gabriel, o amante de café, estava se preparando para mais uma xícara de sua bebida favorita quando, acidentalmente, derrubou o café inteiro em cima de seu computador. Em vez de entrar em pânico, ele olhou para os amigos e disse: 'Eu só estava tentando dar uma 'despertada' no meu sistema!' Todos riram e ajudaram Gabriel a limpar a bagunça, mas ele garantiu: 'No final das contas, o café fez o que o café faz: me acordou de vez!'",
        
    },
    { 
        id: 7, 
        titulo: "João e o Drama do Novo Look", 
        descricao: "João, conhecido pelo seu estilo inconfundível, decidiu dar uma reviravolta no visual e apareceu com um novo corte de cabelo radical. Porém, ao chegar na academia, seus amigos começaram a compará-lo com personagens de filmes antigos, dizendo que ele estava parecendo um personagem de um filme de espionagem dos anos 80. João, sem perder a compostura, apenas olhou para o espelho e disse: 'Eu sou um agente secreto... da moda!'",
        
    },
    { 
        id: 8, 
        titulo: "Kaue e o Mistério do Carro Voador", 
        descricao: "Kaue, sempre estiloso, foi visto dirigindo um carro que parecia ser a última palavra em tecnologia... até que ele tentou estacionar e o carro simplesmente não cabia na vaga! Ele tentou de tudo, até pedir ajuda para o GPS do carro, mas, no final, ficou rindo sozinho e disse: 'Acho que o carro estava mais animado que eu para dar uma volta, mas a vaga não estava preparada para tanta beleza!' Seus amigos riram e decidiram que Kaue precisava de uma lição de estacionamento mais do que de estética.",
        
    },
    { 
        id: 9, 
        titulo: "Gabriel e o Mistério da Pizza Desaparecida", 
        descricao: "Gabriel, sempre com fome, pediu uma pizza para ele e seus amigos. Quando a pizza chegou, todos ficaram surpresos ao perceber que metade dela estava faltando! Gabriel, com um sorriso travesso, olhou para os amigos e disse: 'Eu juro que não sei onde foi parar, mas posso garantir que ela estava deliciosa até desaparecer!' Ele ganhou o apelido de 'O Furtivo da Pizza' e, desde então, todos ficam de olho em seu prato quando ele pede algo para comer.",
        
    },
    { 
        id: 10, 
        titulo: "João e a Aposta de 100 Abdominais", 
        descricao: "João, sempre disposto a aceitar desafios, apostou que seria capaz de fazer 100 abdominais em um minuto. Quando o cronômetro começou, ele fez 5 e depois parou, completamente exausto. Seus amigos começaram a rir e disseram: 'João, você não disse que ia fazer 100?' Ele respondeu: 'Acho que o número 100 era apenas uma metáfora... para o esforço que eu coloco em tudo o que faço!'",
        
    }
];




const inicial = function (req, res){
    
    res.render('inicial', {news})
}

const buscartodas = function (req, res){
    
    res.render('todasnoticias', {news})
}

const item = function(req, res) {

    let id = req.params.id
    id = parseInt(id)
    
    news.map((ni,index) => {
        if(id == ni.id){
            let ni = news[index]
            res.render('item',{ni})
        }
    })

    
}

module.exports = {
    buscartodas, inicial, item
}
