 import { Activity } from "./Activity"
import { Registration } from "./Registration"
import { User } from "./User"
 class Instructor {
    constructor(username:string , password:string , name:string , role:string ,email:string){
        super(username, password ,name ,role  ,email)
    }
    
    public createActivity(activityId:number ,name:string , organizer:string , maxParticipant:number , activityPeriod:string , registrationPeriod:boolean , status:string , approvalRequired:boolean , cortificateIssued:boolean , instructor:Instructor , schedule:File):void{
        let activity =Activity.createActivity(activityId , name , organizer , maxParticipant , activityPeriod , registrationPeriod, status , approvalRequired, cortificateIssued , instructor , schedule)
    }

    public approvePaticipant(activity:Activity , participant:Participant , registrations:Registration[]):void{
        activity.approveParticipant(participant,registrations)
    }

    public issueCertificate():void{

    }
    public searchActivity():Activity[]
}

export {Instructor}