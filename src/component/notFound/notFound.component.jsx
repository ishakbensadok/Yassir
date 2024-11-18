import CallToAction from '../callToAction/callToAction.component';

import './notFound.styles.css';

function NotFound({ message }) {
  return (
    <div className='not-found'>
      <h1>{message} </h1>
      <p>Oops! The page you are looking for does not exist.</p>

      <CallToAction link='/' target=''>
        Go to home page
      </CallToAction>
    </div>
  );
}

export default NotFound;
