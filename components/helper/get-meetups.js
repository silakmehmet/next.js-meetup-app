export async function getMeetups() {
  const response = await fetch(
    `https://next-jsmeetups-default-rtdb.firebaseio.com/meetups.json`
  );
  if (!response.ok) {
    throw new Error();
  }
  const responseData = await response.json();
  return responseData;
}

export async function getSelectedMeetup(meetupId) {
  const response = await fetch(
    `https://next-jsmeetups-default-rtdb.firebaseio.com/meetups/${meetupId}.json`
  );
  if (!response.ok) {
    throw new Error();
  }

  const meetupData = await response.json();
  return meetupData;
}
