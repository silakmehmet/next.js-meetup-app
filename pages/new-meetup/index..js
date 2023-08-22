import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { setMeetups } from '@/components/helper/get-meetups';
import { useRouter } from 'next/router';

function NewMeetupPage(props) {
  const router = useRouter();

  const addMeetupHandler = async (enteredMeetupData) => {
    await fetch(
      'https://next-jsmeetups-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(enteredMeetupData),
      }
    );
    router.push('/');
  };

  return (
    <NewMeetupForm
      isLoggedIn={props.isLoggedIn}
      onAddMeetup={addMeetupHandler}
    />
  );
}

export default NewMeetupPage;
