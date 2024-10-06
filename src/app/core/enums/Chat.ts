export interface Chat {
    id:number;
     sender_img: string;            
    sender: string;           
    bio: string;            
    lastSeen: string | Date; 
    state:string;
    receiver:string;
    receiver_img: string
    
  }