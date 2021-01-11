import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionEducation = ({ education }) => {
  if (!education.length) return null;

  return (
    <Section title="Education">
      {education.map((degree) => (
        <SummaryItem
          key={degree.name}
          name={degree.name}
          description={degree.description}
        />
      ))}
    </Section>
  );
};

export default SectionEducation;
