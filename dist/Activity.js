"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activity = void 0;
const Certificate_1 = require("./Certificate");
const Notification_1 = require("./Notification");
class Activity {
    constructor(activityId, name, organizer, maxParticipant, activityPeriod, registrationPeriod, status, approvalRequired, cortificateIssued, instructor, schedule) {
        this.activityId = activityId;
        this.name = name;
        this.organizer = organizer;
        this.maxParticipant = maxParticipant;
        this.activityPeriod = activityPeriod;
        this.registrationPeriod = registrationPeriod;
        this.status = status;
        this.approvalRequired = approvalRequired;
        this.cortificateIssued = cortificateIssued;
        this.instructor = instructor;
        this.schedule = schedule;
    }
    createActivity() {
        this.activityId = activityId;
        this.name = name;
        this.organizer = organizer;
        this.maxParticipant = maxParticipant;
        this.activityPeriod = activityPeriod;
        this.registrationPeriod = registrationPeriod;
        this.status = status;
        this.approvalRequired = approvalRequired;
        this.cortificateIssued = cortificateIssued;
        this.instructor = instructor;
        this.schedule = schedule;
    }
    updateActivity() {
        this.activityId = activityId,
            this.name = name,
            this.organizer = organizer,
            this.maxParticipant = maxParticipant,
            this.activityPeriod = activityPeriod,
            this.registrationPeriod = registrationPeriod,
            this.status = status,
            this.approvalRequired = approvalRequired,
            this.cortificateIssued = cortificateIssued,
            this.instructor = instructor,
            this.schedule = schedule;
    }
    deleteActivity(activityId, name, organizer, maxParticipant, activityPeriod, registrationPeriod, status, approvalRequired, cortificateIssued, instructor, schedule) {
        this.activityId = activityId,
            this.name = name,
            this.organizer = organizer,
            this.maxParticipant = maxParticipant,
            this.activityPeriod = activityPeriod,
            this.registrationPeriod = registrationPeriod,
            this.status = status,
            this.approvalRequired = approvalRequired,
            this.cortificateIssued = cortificateIssued,
            this.instructor = instructor,
            this.schedule = schedule;
    }
    publishActivity() {
        this.status = 'published';
    }
    approveParticipant(participant, registrations) {
        for (let i = 1; i < registrations.length; i++) {
            let par = registrations[i].getParticipant();
            if (participant.getEmail() === par.getEmail()) {
                registrations[i].updateStatus('approved');
                let send = new Notification_1.Notification(1, 'คุณได้รับการอนุมัติแล้วเข้าร่วมกิจกรรมแล้ว', participant, 'approved');
                console.log(send.toString());
            }
        }
    }
    generatrCertificate(registrations, instructor, signature, tamplate) {
        registrations.forEach(registration => {
            let participant = registration.getParticipant();
            Certificate_1.Certificate.generateCertificate;
        });
    }
}
exports.Activity = Activity;
