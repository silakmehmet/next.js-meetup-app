import {
  getMeetups,
  getSelectedMeetup,
} from '../../components/helper/get-meetups';
import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      date={props.meetupData.date}
      description={props.meetupData.description}
    />
  );
}

export async function getStaticPaths() {
  const loadedMeetups = await getMeetups();
  const meetups = [];
  for (const key in loadedMeetups) {
    meetups.push({
      id: key,
    });

    return {
      fallback: true,
      paths: meetups.map((meetup) => ({
        params: { meetupId: meetup.id.toString() },
      })),
    };
  }
}
export async function getStaticProps(context) {
  const meetupData = await getSelectedMeetup(context.params.meetupId);

  return {
    props: {
      meetupData,
    },
  };
}

export default MeetupDetails;
