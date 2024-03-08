class Funcionario{
    constructor(nome, idade, salarioBase){
      this.nome = nome
      this.idade = idade
      this.salarioBase = salarioBase
    }
    calcularSalario(){
      return this.salarioBase
    }
  }
  
  class Professor extends Funcionario{
    constructor(nome, idade, salarioBase, disciplina, hrAulaSemana){
    super(nome, idade, salarioBase);
    this.disciplina = disciplina
    this.hrAulaSemana = hrAulaSemana
    }
    calcularSalario(valorHrAula){
      return this.hrAulaSemana * 4 * valorHrAula + this.salarioBase
    }
  }
  
  const professor1 = new Professor('Chris', 40, 1000, 'programação', 8)
  console.log(professor1.calcularSalario(2000))
