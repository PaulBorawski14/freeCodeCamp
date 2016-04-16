var quotes = new Array();
quotes[0] = "'If you're not first, you're last' -Ricky Bobby";
quotes[1] = "'Nothing Satisfies' -Bent Cardan";
quotes[2] = "'Pretty good' -Larry David";
quotes[3] = "'See you tomorrow' -Wils Cardan";
quotes[4] = "'I am Nawa!' -Paul Borawski";
quotes[5] = "'Sometimes life hits you in the head with a brick. Don't lose faith.' -Steve Jobs";
quotes[6] = "'The only limit to our realization of tomorrow will be our doubts of today.' -Franklin D. Roosevelt";
quotes[7] = "'What would life be if we had no courage to attempt anything?' -Vincent Van Gogh";
quotes[8] = "'By failing to prepare, you are preparing to fail.' -Benjamin Franklin";
quotes[9] = "'Spring is nature's way of saying, 'Let's party!' -Robin Williams";
quotes[10] = "'Genius is patience.' -Isaac Newton";



function printQuote() {
  var rando = Math.floor(Math.random() * 11);
  var quote = document.getElementById("emptyone");
  quote.innerHTML = quotes[rando];
}

function printQuote2() {
  var quote2 = document.getElementById("emptytwo");
  quote2.innerHTML = quotes[rando];
}
