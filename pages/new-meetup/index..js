const {
  default: NewMeetupForm,
} = require('@/components/meetups/NewMeetupForm');

function NewMeetupPage() {
  function addMeetupHandler() {}

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
