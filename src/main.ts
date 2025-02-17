import { User } from "./User";
import { Participant } from "./Participant";
import { Registration } from "./Registration";
import { Instructor } from "./Instructor";
import { Certificate } from "./Certificate";
import { Notification } from "./Notification";
import { Activity } from "./Activity";
let view014=new User("Wanchai","deekub","tae","student","664259014@webmail.npru.ac.th")
console.log(view014.toString())

let pa1 = new Participant("Wanchai", "447", 'View', "student", "664259014@webmail.npru.ac.th")
let pa2 = new Participant("Pitarawat", "88", 'Eye', "student", "664259024@webmail.npru.ac.th")
console.log(pa1.toString())
console.log(pa2.toString())

// == instructor == //
// const ins = new Instructor('')
// === Activity === //
// const ac1 = new Activity(1, 'drawing' , 'Wanchai' , 150 , ' วัน 17 เดือน กุมภาพันธ์ 10:00 - 22:00 ' ,'วันที่ 14 ถึง 17' , 'published' , true , true , ins ,'sch'  )
const ac2 = new Activity(2, 'gamming' , 'Kero' , 150 , ' วัน 17 เดือน กุมภาพันธ์ 10:00 - 22:00 ' ,'วันที่ 14 ถึง 17' , 'published' , true , true , ins , 'sch' )

// let reg = new Registration(1, pa1, ac1, 'รออุมัติ')
// console.log(reg.toString())

let Api = new Certificate(1,"กิจกรรม",new Instructor(),"ลายเซ็น","")

console.log(Api.toString())

let eiei = new Notification(1,"ผมทำได้แล้วครับ", pa1 , "รออนุมัติ")

console.log(eiei.toString())