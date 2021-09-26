var initialPrice = document.querySelector("#initial-price");
var quantityOfStocks = document.querySelector("#quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

function calculateSellingPriceAndCostPrice(quantity) {
    quantity = Number(quantity);
    var initialPriceNumber = Number(initialPrice.value);
    var currentPriceNumber = Number(currentPrice.value);
    var costPrice = initialPriceNumber*quantity;
    var sellingPrice = currentPriceNumber*quantity; 

    if( costPrice < sellingPrice) {
        var profit = sellingPrice - costPrice;
        var profitPercentage = calculateProfitPercentage(profit, costPrice);
        return ["profit", profit, profitPercentage];
    } else {
        var loss = costPrice - sellingPrice;
        var lossPercentage = calculateLossPercentage(loss, costPrice);
        return ["loss", loss, lossPercentage];
    }
}

function calculateProfitPercentage(profit, costPrice) {
    return (profit/costPrice)*100;
}

function calculateLossPercentage(loss, costPrice) {
    return (loss/costPrice)*100;
}

function clickHandler() {
    if(initialPrice == '' || quantityOfStocks.value == '' || currentPrice == '') {
        outputBox.innerHTML = "Please fill all the details."
    } else {
        var resultList = calculateSellingPriceAndCostPrice(Number(quantityOfStocks.value));

        if(resultList[0] === "profit") {
           outputBox.style.color = "green"; 
            outputBox.innerText = "Yay!! Your Profit is " + Number(resultList[1]) + " and Profit Percentage is " + Number(resultList[2]) + "%";
        } else {
            outputBox.style.color = "red";
            outputBox.innerText = "Whoops!! Your Loss is " + resultList[1] + " and Loss Percentage is " + resultList[2] + "%";
        }
    }
}

submitBtn.addEventListener("click",clickHandler);