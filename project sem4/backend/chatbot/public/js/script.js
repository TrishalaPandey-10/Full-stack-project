 
 var sendBtn = document.getElementById('sendBtn');
 var textbox= document.getElementById('textbox');
 var chatContainer = document.getElementById('chatContainer');
 
var user= {message:""};

var arrayOfPossibleMessages=[
    {message:"hi", response:"hello"},
    {message:"how are you", response:" I am good"},
    {message:"can you help me", response:"Sure! Tell me how can I help you? "},
    {message:"can you tell me more about this website?", response:"You can go to about section and get required answer.I hope it was helpful!"},
    {message:"thank you", response:"Welcome!"}
    
];

function sendMessage(userMessage){


    var messageElement = document.createElement('div');
    messageElement.style.textAlign = "right";
    messageElement.style.margin = "10px"
    messageElement.innerHTML = "<span> You: </span>"+ "<span>" +userMessage+ "</span>";
    chatContainer.appendChild(messageElement);


}

function chatbotResponse(userMessage){

    var chatbotmessage="";

    if(userMessage =="hi"){
        chatbotmessage="hello";
    }else if(userMessage=="what is your name"){
        chatbotmessage = "I am chatbot";
    }
    else if(userMessage.length > 5){
      var result =  arrayOfPossibleMessages.filter(val => val.message.includes(userMessage.toLowerCase()));
      
      if(result.length >0){
        var response = result[0].response;
        chatbotmessage = response;
      }else{
        chatbotmessage = " please send another message";
      }
    }
    else{
        chatbotmessage="please send a different message";
    }

    var messageElement = document.createElement('div');

    messageElement.innerHTML = "<span>Chatbot: </span>"+"<span>" +chatbotmessage+ "</span>";

    setTimeout(()=>{
        messageElement.animate([{easing:"ease-in", opacity:0.4},{opacity:1}],{duration:1000})
        chatContainer.appendChild(messageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    },1000)
   

}



sendBtn.addEventListener('click',function(e){
    var userMessage = textbox.value;

    if(userMessage == ""){
        alert('Please type a message');
    }else{

       let userMessageText = userMessage.trim();
       user.message = userMessageText;
       textbox.value= "";
       sendMessage(userMessageText);
       chatbotResponse(userMessageText);
    }

})