function sendMoney() {
  var enterNameone = document.getElementById("enterNameone").value;
  var enterNametwo = document.getElementById("enterNametwo").value;
  var enterAmount = parseInt(document.getElementById("enterAmount").value);
  var findUserBankAccount = enterNameone + "BankBalance";
  var findReceiverBankAccount = enterNametwo + "BankBalance";
  var moneyInAccount = parseInt(
    document.getElementById(findUserBankAccount).innerHTML
  );
  var moneyToAccount = parseInt(
    document.getElementById(findReceiverBankAccount).innerHTML
  );
  if (enterAmount > moneyInAccount) {
    alert("Insufficient Balance.");
  } else {
    var finalAmount = moneyToAccount + enterAmount;
    var newAccountBalance =
      parseInt(document.getElementById(findUserBankAccount).innerHTML) -
      enterAmount;
    document.getElementById(findUserBankAccount).innerHTML = newAccountBalance;
    document.getElementById(findReceiverBankAccount).innerHTML = finalAmount;
    alert(`Successful Transaction !!  
      $${enterAmount} is sent to ${enterNametwo}@email.com.`);

    // transaction history
    var createPTag = document.createElement("li");
    var textNode =
      document.createTextNode(`$${enterAmount} is sent to recepient with Email-id ${enterNametwo}@email.com
       on ${Date()}.`);
    createPTag.appendChild(textNode);
    var element = document.getElementById("transaction-history-body");
    element.insertBefore(createPTag, element.firstChild);
  }
}
