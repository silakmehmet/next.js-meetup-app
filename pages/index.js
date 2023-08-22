import { getMeetups } from '@/components/helper/get-meetups';
import MeetupList from '../components/meetups/MeetupList';

function HomePage(props) {


  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  const loadedMeetups = await getMeetups();
  const meetups = [];
  for (const key in loadedMeetups) {
    meetups.push({
      id: key,
      title: loadedMeetups[key].title,
      date: loadedMeetups[key].date,
      description: loadedMeetups[key].description,
      address: loadedMeetups[key].address,
      image: loadedMeetups[key].image,
    });
  }
  return {
    props: {
      meetups,
    },
    revalidate: 1,
  };
}

export default HomePage;
