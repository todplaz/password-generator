const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "²&é~\"#'{}()[]-|`_ç^à@è$£¤*µù%!§:;?,./";
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");



const generatePassword = () => {
  let data = [];
  let password ="";

  if(lowercase.checked) data.push(...dataLowercase)
  if(uppercase.checked) data.push(...dataUppercase)
  if(numbers.checked) data.push(...dataNumbers)
  if(symbols.checked) data.push(...dataSymbols)

  if(data.length === 0) {
    alert("Veuillez selectionner un ou plusieurs critères");
    return;
  }

  for(i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)]
  };
  
  passwordOutput.value = password;

  passwordOutput.select();
  document.execCommand("copy");

  generateButton.textContent = "Copié avec succès";

  setTimeout(() => {
    generateButton.textContent = "Générer un mot de passe";
  },2000)
}

generateButton.addEventListener("click", generatePassword); 