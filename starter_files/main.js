
let picture = customers.results[1].picture.medium
let firstName = customers.results[1].name.first
let lastName = customers.results[1].name.last



for (data = 0; data < customers.length; data++) {

  let customer = customers.results[data]

  let img = document.createElement(img)
  img.src = customer.picture.medium

  let label = document.createElement (label)
  label.innerHTML = customer.name.firstName

  document.body.appendChild(img)
  document.body.appendChild(label)

}

console.log(img);
