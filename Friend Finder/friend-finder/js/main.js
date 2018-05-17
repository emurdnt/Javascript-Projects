
var xhr = new XMLHttpRequest(); // 1
var content = document.querySelector('.content');
var whichToRender = false;


function renderTodos(friend) {

	var friendListArea,
		friendListHeading,
		friendListRow,
		friendList,
		friendLink;

	friendListRow = document.createElement('ul');	

	friend.forEach(function (friends) {

		friendList = document.createElement('li');
		friendLink = document.createElement('a');
		friendLink.innerText = friends.firstName + ' ' + friends.lastName;	
		friendList.appendChild(friendLink);
		friendList.setAttribute('class','pure-menu-item');
		friendLink.setAttribute('class', 'pure-menu-link');
		friendLink.setAttribute('href', 'friends/'+ friends.id + '.json');
		friendLink.setAttribute('data-id', friends.id);
		friendListRow.appendChild(friendList);

		
	});
	
	friendListArea = document.createElement('div');
	friendListHeading = document.createElement('span');

	friendListRow.setAttribute('class', 'pure-menu-list');
	friendListHeading.setAttribute('class','pure-menu-heading');
	friendListArea.setAttribute('class', 'pure-menu custom-restricted-width');
	friendListHeading.setAttribute('class','pure-menu-heading');

	friendListHeading.innerText = 'FRIENDS';

	friendListArea.appendChild(friendListHeading);
	friendListArea.appendChild(friendListRow);
	content.appendChild(friendListArea);

	content.firstChild.lastChild.addEventListener('click', function(evt){
	xhr.open('GET', evt.target.href, true);
	xhr.send(); // 4
	evt.preventDefault();
	whichToRender = true;
	});
}

function renderFriendDetails (details) {

	var friendListArea,
		friendListHeading,
		friendListRow,
		friendList,
		friendLink;

	friendListRow = document.createElement('ul');	

	friend.forEach(function (friends) {

		friendList = document.createElement('li');
		friendLink = document.createElement('a');
		friendLink.innerText = friends.firstName + ' ' + friends.lastName;	
		friendList.appendChild(friendLink);
		friendList.setAttribute('class','pure-menu-item');
		friendLink.setAttribute('class', 'pure-menu-link');
		friendLink.setAttribute('href', 'friends/'+ friends.id + '.json');
		friendLink.setAttribute('data-id', friends.id);
		friendListRow.appendChild(friendList);

		
	});
	
	friendListArea = document.createElement('div');
	friendListHeading = document.createElement('span');

	friendListRow.setAttribute('class', 'pure-menu-list');
	friendListHeading.setAttribute('class','pure-menu-heading');
	friendListArea.setAttribute('class', 'pure-menu custom-restricted-width');
	friendListHeading.setAttribute('class','pure-menu-heading');

	friendListHeading.innerText = 'FRIENDS';

	friendListArea.appendChild(friendListHeading);
	friendListArea.appendChild(friendListRow);
	content.appendChild(friendListArea);

	content.firstChild.lastChild.addEventListener('click', function(evt){
	xhr.open('GET', evt.target.href, true);
	xhr.send(); // 4
	evt.preventDefault();
	whichToRender = true;
	});
}

xhr.addEventListener('load', function (evt) {
	if (xhr.status == 200) {
		// parse the todo item
		friend = JSON.parse(xhr.responseText);
		// use another function to render the view
		if(whichToRender == true) {

			renderFriendDetails(details);
		}
		else{
			renderTodos(friend);
		}
		
	} else {
		console.error('Failed to load data: ' + xhr.status);
	}
}); // 2

document.querySelector('.friends').addEventListener('click', function (evt) {
	xhr.open('GET', 'friends/friends.json', true); // 3
	xhr.send(); // 4
	evt.preventDefault();

});

