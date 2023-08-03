# Componente
- Desacoplar um pedaço da nossa interface
- Componente uma parte da interface que pode ser repetido com informações diferentes
- Uma função que retorna HTML

- [x] Quando algo que se repete, provavelmente ele deva se tornar um componente
- [x] Quando o componente 'e muito grande e voce retira uma funcionalidade sem quebrar o componente.

# Programacao imperativa
- O que deve ser feito(passo a passo)

# Programacao declarativa
- Qual o resultado que eu espero
- Quais as condicoes para ter o resultado final

# Entendendo a key
- 3 momentos em que um componente e renderizado novamente no React
1. Quando o estado altera;
2. Quando a propriedade altera;
3. Quando um componente pai renderiza novamente;
- Com a key ele nao vai precisar renderizar tudo novamente, ele vai comparar com os possiveis novos key que possam a vir na interface.