import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    description: (
      <>
        VRCOSC was designed from the ground up to be user-friendly and
        easily understandable. Reach out if you can't figure something out
        and we'll be happy to help!
      </>
    )
  },
  {
    title: 'Comprehensive SDK',
    description: (
      <>
        The SDK is made with developers in mind to allow them to focus on
        creating their module for distribution and less on the boilerplate
        of desktop apps and interfacing with VRChat.
      </>
    )
  },
  {
    title: 'Large Community',
    description: (
      <>
        V2 allows developers to distribute their module packages using GitHub
        and have them appear directly inside the app, leveraging our large community.
      </>
    )
  }
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
