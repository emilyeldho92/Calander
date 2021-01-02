import moment from 'moment';


export const isTodaysDate = dateStamp => {
  const today = moment ();
  dateStamp = moment (dateStamp);
  return (
    moment.duration (dateStamp.diff (today)).days () === 0 &&
    today.day () === dateStamp.day ()
  );
};
