'use client'
import { MeetingScheduler } from "meeting-scheduler-npm-package";

 
 
export default function Page() {
  return (
     <div>
      <MeetingScheduler
        // userId="123"
        // availabilityId="456"
        // authToken="YOUR_TOKEN"
        // onSuccess={() => alert("Booked!")}
        // onError={(err) => alert(err)}
      />
    </div>
  );
}
