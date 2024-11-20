import Section from './../section/section.compnent';

import './teams.styles.css';

import { COMPANY__MEMBERS } from './../../utils/companyData.utils';

function Teams() {
  return (
    <Section className='teams-section'>
      <div className='teams'>
        <h2 className='teams__heading'>Meet the team</h2>

        <div className='members'>
          {COMPANY__MEMBERS.map((m) => (
            <div className='member'>
              <img src={m.image} key={m.id} alt={m.name} />

              <div className='member__info'>
                <h3>{m.name} </h3>
                <p> {m.position} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Teams;
