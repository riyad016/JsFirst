// Problem - ১.বাজেট ক্যালকুলেটর |
function budgetCal(computer, watch, coffee) {

    var computerPrice = computer * 1000;
    var watchPrice = watch * 260;
    var coffeePrice = coffee * 50;

    var total = computerPrice + watchPrice + coffeePrice;

    if (typeof computer == "number" && typeof watch == "number" && typeof coffee == "number") {
        console.log(total);
    } else {
        console.log("Please enter a valid number");
    }
};
budgetCal(1, 2, 3); //এখানে আর্গুমেন্ট পাস হবে
budgetCal('try', 2, 3); //এখানে আর্গুমেন্ট পাস হবে



// Problem - ২. প্রোডাক্ট সার্চ
function productFind(productName) {
    var products = [{
            id: 1,
            title: "laptop",
            price: 567,
            description: "Laptop Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper"
        },
        {
            id: 2,
            title: "Mobile",
            price: 367,
            description: "Mobile Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper"
        },
        {
            id: 3,
            title: "Watch",
            price: 180,
            description: "Watch Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper"
        },
        {
            id: 4,
            title: "Coffee",
            price: 40,
            description: "Coffee Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper"
        },
    ];
    if (productName.toLowerCase() == "laptop") {
        console.log(products[0]);
    } else if (productName.toLowerCase() == "mobile") {
        console.log(products[1]);
    } else if (productName.toLowerCase() == "watch") {
        console.log(products[2]);
    } else if (productName.toLowerCase() == "coffee") {
        console.log(products[3]);
    } else {
        console.log("Product Not Found");
    }
}
productFind("laptop"); //এখানে আর্গুমেন্ট পাস হবে
productFind("devZeroOne"); //এখানে আর্গুমেন্ট পাস হবে




// Problem - ৩.হিডেন কোটিপতি ক্যালকুলেটর 
var dailyEarn = 10; //দৈনিক ইনকাম 

function year(session) {
    if (session % 4 == 0) {
        console.log(366 * dailyEarn);
    } else {
        console.log(365 * dailyEarn);
    }
};
year(2023); //এখানে আর্গুমেন্ট পাস হবে
year(2024); //এখানে আর্গুমেন্ট পাস হবে