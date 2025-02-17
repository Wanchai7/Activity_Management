"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instructor = void 0;
const Activity_1 = require("./Activity");
class Instructor {
    constructor(username, password, name, role, email) {
        super(username, password, name, role, email);
    }
    createActivity(activityId, name, organizer, maxParticipant, activityPeriod, registrationPeriod, status, approvalRequired, cortificateIssued, instructor, schedule) {
        let activity = Activity_1.Activity.createActivity(activityId, name, organizer, maxParticipant, activityPeriod, registrationPeriod, status, approvalRequired, cortificateIssued, instructor, schedule);
    }
    approvePaticipant(activity, participant, registrations) {
        activity.approveParticipant(participant, registrations);
    }
    issueCertificate() {
    }
}
exports.Instructor = Instructor;
