/** @format */
// DOM : Document object model

var cards = [
	{
		name: "Lalit Dangi",
		img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
		status: "Strangers",
	},
	{
		name: "Manas Kamal",
		img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
		status: "Strangers",
	},
	{
		name: "Sohail Alam",
		img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
		status: "Strangers",
	},
	{
		name: "Ayush Kumar",
		img: "https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
		status: "Strangers",
	},
	{
		name: "aliska",
		img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
		status: "Strangers",
	},
	{
		name: "shaurya",
		img: "https://images.unsplash.com/photo-1620117654333-c125fef82817?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
		status: "Strangers",
	},
];

function print() {
	var clutter = "";

	cards.forEach((val, index) => {
		clutter += `
		<div id="card">
			<div id="img">
				<img src="${val.img}">
			</div>
			<h3>${val.name}</h3>
			<h5 id="${val.status}">${val.status}</h5>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing  elit. Itaque voluptatibus blanditiis animi quas.</p>
			<button class="${val.status === "Strangers" ? "blue" : "red"}" id="${index}">${val.status === "Strangers" ? "Add Friend" : "Remove Friend"}</button>
		</div>`;
	});
	document.querySelector("#main").innerHTML = clutter;
}
print();

var flag = 0;
document.querySelector("#main").addEventListener("click", function (details) {
	if (flag == 0) {
		cards[details.target.id].status = "Friends";
		print();
		flag = 1;
	} else {
		cards[details.target.id].status = "Strangers";
		print();
		flag = 0;
	}
});
