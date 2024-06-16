import React from 'react';
import MarkdownHeader from './MarkdownHeader';
import LineBreak from './LineBreak';
import Section from './Section';
import Text from './Text';
import Link from './Link';

function WhatsNext() {
  return (
    <div>
      <Section>
        <MarkdownHeader headingLevel="1" text="What's Next" className="text-3xl md:text-5xl" />
        <LineBreak />
        <Text>
        I always strive to learn and create new things, here are my future projects! 
        </Text>
      </Section>

      <Section>
        <h2 className="text-2xl font-bold mb-3">
          SniffSwipes: Tinder for pups looking to make friends
        </h2>
        <h3 className="text-1x mb-3">
          Finished frontend and currently working on creating a backend server for database connection via MongoDB, password hashing, user accounts, real time messaging
        </h3>
      </Section>
      <Section>
        <h2 className="text-2xl font-bold mb-3">
          Pro Bono CIBC Project
        </h2>
        <h3 className="text-1x mb-3">
          Recently invited to collaborate with a team of 7 to create a project for MBA students at Western University, Ivey school of business, for CIBC. 
          My team is currently in the planning stage. I look forward to not only acquire new skills, but to further them.
          I am also eager to learn from my team of experienced and talented software developers. 
        </h3>
      </Section>
      <Section>
        <h2 className="text-2xl font-bold mb-3">
          BeSuccessful
        </h2>
        <h3 className="text-1x mb-3">
          A social media app inspired by BeReal where users snap photos of what they are doing and get a score based on how productive their activity is. Users can compete with 
          friends on a leaderboard. I aim to publish this on the app store. 
        </h3>
      </Section>
    </div>
  )
}

export default WhatsNext;
