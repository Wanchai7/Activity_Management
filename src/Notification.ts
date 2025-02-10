class Notification{
    public notification:number;
    public message:string; 
    public status:string;
    public recipient:Recipient;

    constructor(notification:number , message:string , status:string , recipient:Recipient){
        this.notification = notification;
        this.message = message;
        this.status = status;
    }
    public method():type{
        
    }
}