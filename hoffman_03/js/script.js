const treats = [
	{ 
		"name" : "Almond Joy",
		"category" : "chocolate",
	},	
	{ 
		"name" : "Kit Kat",
		"category" : "chocolate",
	},	
	{ 
		"name" : "Starburst",
		"category" : "candy",
	},	
	{ 
		"name" : "Gummi Worms",
		"category" : "candy",
	},	
	{ 
		"name" : "Raisins",
		"category" : "terrible",
	},	
	{ 
		"name" : "Rock",
		"category" : "charlieBrown",
	},	
]

//defining variables for output and input
const container = document.querySelector("#container")
const button = document.querySelector(".trick")



//button execution
button.addEventListener("click", () => {
	//defining variables for in-container use
	let randomTreat = treats[	Math.floor(Math.random() * treats.length) ];

	//defining the article used
	let article = "";
	if (randomTreat.name.endsWith("s")) {
		article = "";
	}
	else if (randomTreat.name.startsWith("A")) {
		article = "an ";
	}
	else {
		article = "a ";
	}
	
	//which message to show based on the category of item
	let message = "";
	if (randomTreat.category.includes("chocolate")) {
		message = "Yum, chocolate.";
	}
	else if (randomTreat.category.includes("charlieBrown")) {
		message = "Better luck next time";
	}
	else if (randomTreat.category.includes("terrible")) {
		message = "Yuck!";
	}
	else {
		message = "Nice!";
	}
	
	container.innerHTML = (`<h3>You got ${article}${randomTreat.name}</h3>
	<p>${message}</p>`)
	//if randomTreat.category == chocolate, print "yum, chocolate."
	//if randomTreat.category == candy, print "nice!"
	//if randomTreat.category == terrible, print "yuck! Maybe give those to Grandma"
	//else, print "yikes, better luck next time"

	//I couldn't figure out how to make sentence structure dynamic here with ifelse>
	//if (randomTreat.name.search("s") == '-1') {console.log("a ");} else {function print("");}}
})


