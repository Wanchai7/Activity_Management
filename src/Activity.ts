import { Certificate } from "./Certificate"
import { Instructor } from "./Instructor"
import { Notification } from "./Notification"
import { Participant } from "./Participant"
import { Registration } from "./Registration"

class Activity {
    private activityId:number
    private name:string
    private organizer:string
    private maxParticipant:number
    private activityPeriod:string
    private registrationPeriod:boolean
    private status:string
    private approvalRequired:boolean
    private cortificateIssued:boolean
    private instructor:Instructor
    private schedule:File

    constructor(activityId:number ,name:string , organizer:string , maxParticipant:number , activityPeriod:string , registrationPeriod:boolean , status:string , approvalRequired:boolean , cortificateIssued:boolean , instructor:Instructor , schedule:File) {
    this.activityId = activityId
    this.name = name
    this.organizer = organizer
    this. maxParticipant = maxParticipant
    this. activityPeriod = activityPeriod
    this.registrationPeriod = registrationPeriod
    this.status = status
    this.approvalRequired = approvalRequired
    this.cortificateIssued = cortificateIssued
    this.instructor = instructor
    this.schedule = schedule
    }

    public createActivity():void{
        this.activityId = activityId
        this.name = name
        this.organizer = organizer
        this. maxParticipant = maxParticipant
        this. activityPeriod = activityPeriod
        this.registrationPeriod = registrationPeriod
        this.status =status
        this.approvalRequired = approvalRequired
        this.cortificateIssued = cortificateIssued
        this.instructor = instructor
        this.schedule = schedule
    }

     public updateActivity():void{
        this.activityId = activityId,
        this.name = name,
        this.organizer = organizer,
        this. maxParticipant = maxParticipant,
        this. activityPeriod = activityPeriod,
        this.registrationPeriod = registrationPeriod,
        this.status = status,
        this.approvalRequired = approvalRequired,
        this.cortificateIssued = cortificateIssued,
        this.instructor = instructor,
        this.schedule = schedule
    }

     public deleteActivity(activityId:number ,name:string , organizer:string , maxParticipant:number , activityPeriod:string , registrationPeriod:boolean , status:string , approvalRequired:boolean , cortificateIssued:boolean , instructor:Instructor , schedule:File):void{
        this.activityId = activityId,
        this.name = name,
        this.organizer = organizer,
        this. maxParticipant = maxParticipant,
        this. activityPeriod = activityPeriod,
        this.registrationPeriod = registrationPeriod,
        this.status = status,
        this.approvalRequired = approvalRequired,
        this.cortificateIssued = cortificateIssued,
        this.instructor = instructor,
        this.schedule = schedule
    }

    public publishActivity(): void{
        this.status = 'published'
    }

    public approveParticipant(participant:Participant , registrations:Registration []):void{
        for(let i = 1; i<registrations.length; i++){
            let par  = registrations[i].getParticipant()
            if(participant.getEmail() === par.getEmail()){
                registrations[i].updateStatus
                ('approved')
                let send = new Notification(1 , 'คุณได้รับการอนุมัติแล้วเข้าร่วมกิจกรรมแล้ว' , participant ,'approved')
                console.log(send.toString())
            }
        }
    }

    public generatrCertificate(registrations:Registration[] , instructor:Instructor , signature:string , tamplate:string):Certificate{
        registrations.forEach(registration => {
        let participant = registration.getParticipant()
        Certificate.generateCertificate
        });
    }
}  



export {Activity}