'use strict';
const client = new StompJs.Client({
	brokerURL: "ws://localhost:8080/ws"
});
const chatRoomId = 1;

class ChatMessage {
	id;
	chatRoomId;
	senderPhoneNumber;
	content;
	timestamp;

	constructor(id, chatRoomId, senderPhoneNumber, comment, timestamp) {
		this.id = id;
		this.chatRoomId = chatRoomId;
		this.senderPhoneNumber = senderPhoneNumber;
		this.content = comment;
		this.timestamp = timestamp;
	}
};

let chatMessage;
let techMessage;
let userName;
let buttonConnect;
let buttonDisConnect;
let conversation;
let formInput;
let conversationDisplay;
let usersList;
let messagesList;
let online;
let sendMessage;
let send;
let formSendMessage;
let inputSendMessage;
let messageList;
let membersList;
let membersListSelected;
let messageLabel;
let selectedMember = 0;

document.addEventListener("DOMContentLoaded", function() {
	userName = document.getElementById("username");
	usersList = document.getElementById("userslist");
	buttonConnect = document.getElementById("connect");
	buttonDisConnect = document.getElementById("disconnect");
	conversationDisplay = document.getElementById("conversation");
	online = document.getElementById("online");
	messagesList = document.getElementById("messagesList");
	formInput = document.getElementById("form");
	sendMessage = document.getElementById("sendmessage");
	send = document.getElementById("send");
	formSendMessage = document.getElementById("formsendmessage");
	inputSendMessage = document.getElementById("inputsendmessage");
	messageList = document.getElementById("messagelist");
	membersList = document.getElementById("memberslist");
	messageLabel = document.getElementById("messagelabel");
	buttonConnect.disabled = false;
	userName.textContent = loginUserName;

	buttonConnect.addEventListener("click", (e) => {
		connect();
		e.preventDefault();
	});

	buttonDisConnect.addEventListener("click", (e) => {
		disconnect();
		e.preventDefault();
	});

	send.addEventListener("click", (e) => {
		sendMessages();
		e.preventDefault();
	});

	formInput.addEventListener("submit", (e) => {
		setConnected(false);
		e.preventDefault()
	});

	formSendMessage.addEventListener("submit", (e) => {
		e.preventDefault()
	});
});

window.addEventListener("beforeunload" , () => {
	disconnect();
});

function connect() {
	client.activate();
	buttonConnect.disabled = true;
	userName.disabled = true;
	console.log('Connected');
}

function disconnect() {
	client.deactivate();
	buttonConnect.disabled = false;
	userName.disabled = false;
	setConnected(false);
	online.innerHTML = "";
	console.log('Disconnected');
}

function sendMessages() {
	chatMessage = new ChatMessage(null, chatRoomId, null, inputSendMessage.value, null)
	console.log('Sent chat message: ' + JSON.stringify(chatMessage));
	client.publish({
		destination: "/app/message",  //
		body: JSON.stringify(chatMessage)
	});
}

client.onConnect = (frame) => {
	setConnected(true);

	client.subscribe('/topic/tech', (techMessage) => {
		console.log('Received tech message' + techMessage.body);
	});

	client.subscribe('/topic/messages/' + chatRoomId, (chatMessage) => {
		console.log('Received chat message' + chatMessage.body);
	})

};

client.onWebSocketError = (error) => {
	console.error('Error with websocket', error);
};

client.onStompError = (frame) => {
	console.error('Broker reported error: ' + frame.headers['message']);
	console.error('Additional details: ' + frame.body);
};

function setConnected(connected) {
	buttonDisConnect.disabled = !connected;
	if (connected) {
		conversationDisplay.style.display = "block";
		sendMessage.style.display = "block";
		sendMessage.style.visibility = "visible";
	}
	else {
		conversationDisplay.style.display = "none";
		sendMessage.style.display = "none";
		sendMessage.style.visibility = "hidden";
	}
	messagesList.innerHTML = "";
	usersList.innerHTML = "";
}
