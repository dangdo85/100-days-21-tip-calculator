const btn = document.querySelector(".btn"),
  tip = document.querySelector(".tip"),
  total = document.querySelector(".total"),
  error = document.querySelector(".error"),
  splitTotal = document.querySelector(".splitTotal");

const hideError = () => {
  setTimeout(() => {
    error.style.display = "none";
  }, 5000);
};

const calculateTip = () => {
  const bill = Number(document.querySelector(".bill").value);
  // console.log('bill', typeof(bill))

  const rate = Number(document.querySelector(".rate").value);
  // console.log('rate', typeof(rate))

  const numOfPeople = Number(document.querySelector(".numOfPeople").value);
  // console.log('numOfPeople', typeof(numOfPeople))

  if (bill === "" || rate == "") {
    // console.log("please add a number");
    error.style.display = "block";
    hideError();
  } else if (isNaN(bill)) {
    error.innerHTML = "Please enter a number";
    error.style.display = "block";
    hideError();
  } else {
    if (isNaN(numOfPeople)) {
      error.innerHTML = "Please enter a number";
      error.style.display = "block";
      hideError();
    } else if (numOfPeople == '') {
      let tipAmt = bill * rate;
      // console.log(typeof(tipAmt))
      // console.log('bill', typeof(bill))

      // toFixed() returns a string - use Number to change to number type
      tip.innerHTML = `Tip: $${tipAmt.toFixed(2)}`;

      let totalBill = bill + tipAmt;
      // console.log(typeof(totalBill))
      total.innerHTML = `Total Bill: $${totalBill.toFixed(2)}`;

      splitTotal.innerHTML = `Amount per Person: $${totalBill.toFixed(2)}`
    } else {
      let tipAmt = bill * rate;
      tip.innerHTML = `Tip: $${tipAmt.toFixed(2)}`;

      let totalBill = bill + tipAmt;
      total.innerHTML = `Total Bill: $${totalBill.toFixed(2)}`;

      let splitBill = (totalBill / (numOfPeople));
      // console.log(splitBill)
      // console.log(splitBill.toFixed(2))

        if(splitBill > splitBill.toFixed(2)) {
          // add 0.01 when toFixed() rounds down
          splitTotal.innerHTML = `Amount per Person: $${(splitBill + 0.01).toFixed(2)}`
        } else {
          splitTotal.innerHTML = `Amount per Person: $${splitBill.toFixed(2)}`
        }
    }
  }
};

btn.addEventListener("click", calculateTip);