"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
const Participant_1 = require("./Participant");
const Instructor_1 = require("./Instructor");
const Certificate_1 = require("./Certificate");
const Notification_1 = require("./Notification");
const Activity_1 = require("./Activity");
let view014 = new User_1.User("Wanchai", "deekub", "tae", "student", "664259014@webmail.npru.ac.th");
console.log(view014.toString());
let pa1 = new Participant_1.Participant("Wanchai", "447", 'View', "student", "664259014@webmail.npru.ac.th");
let pa2 = new Participant_1.Participant("Pitarawat", "88", 'Eye', "student", "664259024@webmail.npru.ac.th");
console.log(pa1.toString());
console.log(pa2.toString());
// == instructor == //
// const ins = new Instructor('')
// === Activity === //
// const ac1 = new Activity(1, 'drawing' , 'Wanchai' , 150 , ' วัน 17 เดือน กุมภาพันธ์ 10:00 - 22:00 ' ,'วันที่ 14 ถึง 17' , 'published' , true , true , ins ,'sch'  )
const ac2 = new Activity_1.Activity(2, 'gamming', 'Kero', 150, ' วัน 17 เดือน กุมภาพันธ์ 10:00 - 22:00 ', 'วันที่ 14 ถึง 17', 'published', true, true, ins, 'sch');
// let reg = new Registration(1, pa1, ac1, 'รออุมัติ')
// console.log(reg.toString())
let Api = new Certificate_1.Certificate(1, "กิจกรรม", new Instructor_1.Instructor(), "ลายเซ็น", "");
console.log(Api.toString());
let eiei = new Notification_1.Notification(1, "ผมทำได้แล้วครับ", pa1, "รออนุมัติ");
console.log(eiei.toString());
