const questions = [
    {
      question: "Qual é o principal objetivo da administração financeira?",
      options: [
        "Maximizar os lucros",
        "Maximizar as vendas",
        "Minimizar os custos",
      ],
      correctAnswer: 0,
    },
    {
      question: "O que representa o conceito de 'valor presente' em finanças?",
      options: [
        "O valor atual de uma série de fluxos de caixa futuros",
        "O valor total dos ativos de uma empresa",
        "O valor de mercado de uma ação",
      ],
      correctAnswer: 0,
    },
    {
      question: "O que é o 'princípio da incerteza' nos mercados financeiros?",
      options: [
        "A certeza absoluta dos resultados dos investimentos",
        "A ausência de riscos nos investimentos",
        "A falta de conhecimento completo sobre os resultados dos investimentos",
      ],
      correctAnswer: 2,
    },
    {
      question: "Qual é o objetivo do cálculo do índice de liquidez?",
      options: [
        "Medir a eficiência operacional da empresa",
        "Avaliar a capacidade da empresa de cumprir suas obrigações de curto prazo",
        "Determinar o retorno sobre o investimento da empresa",
      ],
      correctAnswer: 1,
    },
    {
      question: "O que é o conceito de 'alavancagem financeira'?",
      options: [
        "Aumentar os custos operacionais da empresa",
        "Utilizar recursos externos para financiar as operações da empresa",
        "Diminuir a rentabilidade da empresa",
      ],
      correctAnswer: 1,
    },
    {
      question: "O que é o 'risco sistêmico' em finanças?",
      options: [
        "O risco associado a um investimento específico",
        "O risco que afeta todo o sistema financeiro",
        "O risco de mudanças nas taxas de câmbio",
      ],
      correctAnswer: 1,
    },
    {
      question:
        "Qual é o objetivo da análise fundamentalista no mercado de ações?",
      options: [
        "Prever flutuações de curto prazo nos preços das ações",
        "Avaliar o valor intrínseco das empresas",
        "Analisar tendências de mercado baseadas em gráficos de preços",
      ],
      correctAnswer: 1,
    },
    {
      question: "O que é o 'custo de oportunidade' em finanças?",
      options: [
        "O custo associado à realização de uma oportunidade de investimento",
        "O custo de aquisição de um ativo financeiro",
        "O custo de não aproveitar a melhor alternativa disponível",
      ],
      correctAnswer: 2,
    },
    {
      question: "Qual é a função principal do mercado de capitais?",
      options: [
        "Fornecer empréstimos de curto prazo para empresas",
        "Facilitar a negociação de títulos de dívida",
        "Facilitar a emissão e negociação de títulos e ações",
      ],
      correctAnswer: 2,
    },
    {
      question: "O que é o 'efeito Fisher' na economia?",
      options: [
        "A teoria que relaciona o investimento com o nível de emprego",
        "A teoria que relaciona a inflação com as taxas de juros",
        "A teoria que relaciona a demanda agregada com a produção nacional",
      ],
      correctAnswer: 1,
    },
  ]
  
  //module.exports = questions
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  const Corrects = new Set()
  const TotalQuestion = questions.length
  const ShowCorrect = document.querySelector('#acertos span')
  ShowCorrect.textContent = Corrects.size + ' de ' + TotalQuestion  
  
  for(const item of questions) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent  = item.question
  
    for (let options of item.options) { 
      const dt = quizItem.querySelector ('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = options
      dt.querySelector('input').setAttribute('name', 'question-'+ questions.indexOf(item))
      dt.querySelector('input').value = item.options.indexOf(options)
    
      dt.querySelector('input').onchange = (event) => {
     const Correct = event.target.value == item.correctAnswer
     Corrects.delete(item)
      if(Correct) {
        Corrects.add(item)
      }
     ShowCorrect.textContent = Corrects.size + ' de ' + TotalQuestion 
      } 
  
      quizItem.querySelector ('dl').appendChild(dt)
      
    }
    quizItem.querySelector ('dl dt').remove()
  
    quiz.appendChild(quizItem)
  
  
  
  }
  
  