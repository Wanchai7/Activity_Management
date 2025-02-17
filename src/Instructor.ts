 import { Activity } from "./Activity"
import { Registration } from "./Registration"
import { User } from './User';
import { Certificate } from "./Certificate"
import { Participant } from "./Participant"
 class Instructor extends User{
    constructor(username:string , password:string , name:string , role:string ,email:string){
        super(username, password ,name ,role  ,email)
    }
    
    public createActivity(activityId:number ,name:string , organizer:string , maxParticipant:number , activityPeriod:string , registrationPeriod:boolean , status:string , approvalRequired:boolean , cortificateIssued:boolean , instructor:Instructor , schedule:File):void{
        let activity =Activity.createActivity(activityId , name , organizer , maxParticipant , activityPeriod , registrationPeriod, status , approvalRequired, cortificateIssued , instructor , schedule)
    }

    public approvePaticipant(activity:Activity , participant:Participant , registrations:Registration[]):void{
        activity.approveParticipant(participant,registrations)
    }

    public issueCertificate(Activity:Activity , participant:Participant , registration:Registration[] , tamplate:string):void{
        return activity.generatrCertificate(registration,this,this.username,'')
    }
    public searchActivity():Activity[]{
        let activity =Activity.searchActivity()
        return activity
    }
}

export {Instructor}