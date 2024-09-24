import { Component} from '@angular/core';


interface Chat {
  id:number;
   sender_img: string;            
  sender: string;           
  bio: string;            
  lastSeen: string | Date; 
  state:string;
  receiver:string;
  receiver_img: string
  
}

interface UserMessages {
  Chat_id : number,
  Time: string, 
  Message:string,
  Code:string,
  Timestamp: Date,
  
}

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrl: './communication.component.css'
})
export class CommunicationComponent {
 
searchQuery: string = '';
// Create an array of objects using the Person interface
people: Chat[] = [
  {
    id:1,
     sender_img: '11.jpg',
    sender: 'Olivia Cooper',
    bio: 'I m for unread message components...',
    lastSeen: '8:48AM', 
    state:'Online',
    receiver:'Sharad Mishra',
    receiver_img: '11.jpg',
  },
  {
    id:2,
     sender_img: 'avatar-4.jpg',
    sender: 'Sharad Mishra',
    bio: 'Currently chat with user components...',
    lastSeen: '8:48AM',
    state:'Online',
    receiver:'Sharad Mishra',
    receiver_img: '11.jpg',
  },
  {
    id:3,
     sender_img: '04.jpg',
    sender: 'Jamarcus Streich',
    bio: 'Project manager and Scrum Master.',
    lastSeen: '3/3/2021' ,
    state:'Offline',
    receiver:'Sharad Mishra',
    receiver_img: '11.jpg',
  },
  {
    id:4,
     sender_img: 'avatar-6.jpg',
    sender: 'Rosalee Roberts',
    bio: 'Project manager and Scrum Master.',
    lastSeen: '1/24/2021', 
    state:'Offline',
    receiver:'Sharad Mishra',
    receiver_img: '11.jpg',
  },
  {
    id:5,
     sender_img: 'avatar-5.jpg',
    sender: 'Mohamed Abdelhakeam',
    bio: 'Project manager and Scrum Master.',
    lastSeen: '1/5/2021',
    state:'Online',
    receiver:'Sharad Mishra',
    receiver_img: '11.jpg',
  },
  {
    id:6,
     sender_img: 'avatar-9.jpg',
    sender: 'User sender',
    bio: 'Project manager and Scrum Master.',
    lastSeen: '3/3/2021',
    state:'Online',
    receiver:'Sharad Mishra',
    receiver_img: '11.jpg',
  },
  {
    id:7,
     sender_img: '06.jpg',
    sender: 'Ahmed Momen',
    bio: 'Project manager and Scrum Master.',
    lastSeen: '1/24/2021', 
    state:'Offline',
    receiver:'Sharad Mishra',
    receiver_img: '11.jpg',
  },
  {
    id:8,
     sender_img: '04.jpg',
    sender: 'Hassan Sharaf',
    bio: 'Project manager and Scrum Master.',
    lastSeen: '2/3/2021', 
    state:'Online',
    receiver:'Sharad Mishra',
    receiver_img: '11.jpg',
  },
  {
    id:9,
     sender_img: '11.jpg',
    sender: 'Dina John',
    bio: 'Project manager and Scrum Master.',
    lastSeen: '2/10/2021',
    state:'Online',
    receiver:'Sharad Mishra',
    receiver_img: '11.jpg',
  },
  {
    id:10,
     sender_img: 'avatar-5.jpg',
    sender: 'Adham Hamdy',
    bio: 'Project manager and Scrum Master.',
    lastSeen: '3/11/2021',
    state:'Offline',
    receiver:'Sharad Mishra',
    receiver_img: '11.jpg',
  },
  {
    id:11,
     sender_img: '06.jpg',
    sender: 'Tanya Davies',
    bio: 'Project manager and Scrum Master.',
    lastSeen: '2/3/2021', 
    state:'Online',
    receiver:'Sharad Mishra',
    receiver_img: '11.jpg',
  },

];

MyMessages: UserMessages[] = [
  {
    Chat_id : 2,
    Time: '09:39 AM', 
    Message:'I just start Bootstrap, SCSS and Gulp development &  setup github repository.',
    Code:'U-1',
    Timestamp: new Date('2024-09-20T09:39:00')
  },
  {
    Chat_id : 2, 
    Time: '09:48 AM', 
    Message:'You are most welcome',
    Code:'U-2',
    Timestamp: new Date('2024-09-20T09:48:00')
  },
  {
    Chat_id : 2, 
    Time: '09:52 AM', 
    Message:'Ok I will complete.',
    Code:'U-3',
    Timestamp: new Date('2024-09-20T09:52:00')
  },

];

SenderMessages: UserMessages[] = [
  {
    Chat_id : 2,
    Time: '09:35 AM', 
    Message:'I just start Bootstrap, SCSS and Gulp development & setup github repository. simple example content',
    Code:'S-1',
    Timestamp: new Date('2024-09-20T09:35:00')
  },
  {
    Chat_id : 2, 
    Time: '09:42 AM', 
    Message:'Thank you',
    Code:'S-2',
    Timestamp: new Date('2024-09-20T09:42:00')
  },
  {
    Chat_id : 2, 
    Time: '09:50 AM', 
    Message:'I just start Bootstrap, SCSS and Gulp  development & setup github repository. simple example content',
    Code:'S-3',
    Timestamp: new Date('2024-09-20T09:50:00')
  },
];

 addMessage(chat_id: number, time: string, message: string,code:string ,timestamp: Date): void {
  // Create a new message 
  this.allMessages.push({
    Chat_id: chat_id,
    Time: time,
    Message: message,
    Code:code,
    Timestamp: timestamp
  });

}

// Method to format lastSeen field
formatLastSeen(lastSeen: string | Date): string {
  if (lastSeen instanceof Date) {
    return lastSeen.toLocaleString();
  } else if (/\d{1,2}:\d{2}(AM|PM)/.test(lastSeen)) {
    return lastSeen;
  } else if (/\d{1,2}\/\d{1,2}\/\d{4}/.test(lastSeen)) {
    const date = new Date(lastSeen);
    return date.toLocaleDateString();
  } else { 
    return lastSeen;
  }
}

 allMessages = 
[...this.MyMessages, ...this.SenderMessages]
  
allMessagesSorted=this.allMessages=this.sortMessagesByTime(this.allMessages); 

 parseTimeTo24HourFormat(time: string): Date {
  return new Date('1970-01-01T' + new Date('1970-01-01 ' + time).toLocaleTimeString('en-US', { hour12: false }));
}

//function to sort an array by time

sortMessagesByTime(messages: UserMessages[]): UserMessages[] {
  return messages.sort((a, b) => a.Timestamp.getTime() - b.Timestamp.getTime());
}

getFilteredPeople(): Chat[] {

  if (this.searchQuery==="") {
    return this.people;
  }

  var filteredPeople = this.people.filter(person =>
    person.sender.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
    person.bio.toLowerCase().includes(this.searchQuery.toLowerCase())
  );
  return filteredPeople;
}

// Method to update the searchQuery when input changes
onSearchInputChange(input: string) {
  this.searchQuery = input;
}

 filteredPeople=this.getFilteredPeople();

  // Method to send a new message
  sendMessage(messageInput: HTMLInputElement): void {
    const messageText = messageInput.value;
    if (messageText !== '') {
      const now = new Date();
      const newMessage: UserMessages = {
        Chat_id: 2,
        Time: this.getCurrentTime(),   // Only time for display
        Message: messageText,
        Code: 'U-' + (this.MyMessages.length + 1),
        Timestamp: now                // Full date-time for sorting
      };
  
      // Push the new message to allMessages array
      this.allMessages.push(newMessage);
      this.allMessagesSorted = this.sortMessagesByTime(this.allMessages);
  
      // Clear the input value after sending the message
      messageInput.value = '';
    }
  }
  
  // function to get the current time in 'hh:mm AM/PM' format
  getCurrentTime(): string {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  isNewDay(currentMessage: UserMessages, previousMessage: UserMessages | null): boolean {
    if (!previousMessage) return true; // The first message of the list is a new day
    const currentDate = new Date(currentMessage.Timestamp);
    const previousDate = new Date(previousMessage.Timestamp);
  
    return (
      currentDate.getFullYear() !== previousDate.getFullYear() ||
      currentDate.getMonth() !== previousDate.getMonth() ||
      currentDate.getDate() !== previousDate.getDate()
    );
  }
  
  getFormattedDate(date: Date): string {
    return date.toLocaleDateString();  // Format the date in a readable way
  }
 // function to open the chat body and footer
 openChat() {
  const chatBody = document.querySelector('.chat-body');
  const chatFooter = document.querySelector('.chat-footer');
  if (chatBody && chatFooter) {
    chatBody.classList.add('chat-body-visible');
    chatFooter.classList.add('chat-footer-visible');
  }
}

// Function to close the chat body and footer (optional for mobile)
closeChat() {
  const chatBody = document.querySelector('.chat-body');
  const chatFooter = document.querySelector('.chat-footer');
  if (chatBody && chatFooter) {
    chatBody.classList.remove('chat-body-visible');
    chatFooter.classList.remove('chat-footer-visible');
  }
}  

copyMessage(messageText: string): void {
  navigator.clipboard.writeText(messageText)
    .then(() => {
      console.log("Message copied to clipboard:", messageText);
    })
    .catch(err => {
      console.error("Could not copy message: ", err);
      
    });
}
deleteMessage(index: number): void {
  const confirmation = confirm("Are you sure you want to delete this message?");
  if (confirmation) {
    this.allMessagesSorted.splice(index, 1);
    console.log("Message deleted:", index);
  }
}


}

