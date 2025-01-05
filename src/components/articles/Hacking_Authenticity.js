import React from 'react';
import { useNavigate } from 'react-router-dom';

const ArticleTemplate = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/thought-leadership');
  };

  return (
    <div style={styles.container}>
      {/* Back Button at Top */}
      <button onClick={goBack} style={styles.backButtonTop}>
        &larr; Back to Thought Leadership
      </button>

      {/* Article Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>Why Machines Can't Act From Ethics</h1>
        <p style={styles.subtitle}>Zachary Robers</p>
        <img 
          src="/images/article-images/machine-ethics.jpg" 
          alt="Placeholder for article image" 
          style={styles.heroImage} 
        />
      </header>

      {/* Article Body */}
      <article style={styles.article}>
        {/* Introduction Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Introduction</h2>
          <p>
            Captain Chesley “Sully” Sullenberger is rightly lauded as an American hero. After dual engine failure from a bird attack at low altitude, Sully was forced to decide the best course of action to protect his passengers of US Airways Flight 1549 and the people of New York City<sup style={styles.sup}>1</sup>. Undoubtedly, Sully faced many questions with limited time, grappling with ethical dilemmas such as his responsibility to protect the lives of his passengers over normal civilians and the value of infrastructure relative to human life. Ultimately, Sully made the decision to land the plane on the Hudson River. The remarkable survival of all 155 occupants led the event to later be coined the “Miracle on the Hudson.”<sup style={styles.sup}>2</sup>
          </p>
          <p>
            Despite the miraculous outcome, critics would later question whether Captain Sullenberger’s decision was indeed the right course of action. Flight simulations confirmed the possibility of successfully landing the plane at either LaGuardia or Teterboro airports if immediate action was taken to turn around the plane upon engine failure<sup style={styles.sup}>3</sup>. However, these simulations failed to account for the innate imperfection of human decision-making. That is, humans take time to make decisions—especially those with great ethical implications. The idea that Sully would immediately turn around the plane and return to the airport without properly assessing the weight of possible injury to civilians and damage to buildings near the airport should the plane not reach the runway runs counter to human nature. By this reasoning, any doubts of Sully’s decision are unfounded, supporting his reputation as a public hero.
          </p>
          <p>
            While Sullenberger’s legacy is secure, the possibility of turning around the plane and landing safely at the airport without damage to occupants nor destruction of the aircraft lends way to some interesting hypotheticals. Namely, with the rise of artificial intelligence entities, it is a worthwhile exercise to consider the same situation but with an AI model at the helm. Given rapid advances in the field, it seems reasonable that an AI model would have the capability to weigh the possible outcomes at the point of engine failure. And not only would such a model yield the capability of making a decision: given the right training, this AI pilot should have been able to recognize the opportunity to land safely at LaGuardia or Teterboro, decide on such a course, and precisely navigate the plane to the airport just as the pilots later managed in the flight simulator. Armed with rapid processing speeds, more information, more knowledge, and better intuition from near limitless training, this hypothetical AI pilot seems better equipped to handle the situation and produce a near optimal outcome. It seems that while Sully’s actions produced the best outcome we could expect from a human in this scenario, an AI model has the capability to outperform the seasoned pilot, propelling a greater miracle.
          </p>
          <p>
            Regardless of the advances in artificial intelligence, this AI pilot would still have to reconcile uncertainty in its decision-making. At the most fundamental level, chaotic systems such as weather prohibit the possibility of a successful emergency landing at LaGuardia from ever reaching 100 percent<sup style={styles.sup}>4</sup>. Ergo, an AI pilot must grapple with deciding between certain probabilities and levels of harm to humans and society depending on its course of action upon engine failure. This decision is inherently ethical as it must include the possibility of harm<sup style={styles.sup}>5</sup>. Thus, here we find a scenario distinct from the numerous autonomous trolley problems in that an AI poses a unique capability to make a better decision than a human, but the AI entity must make a decision with ethical implications.
          </p>
        </section>

        {/* Acting From Ethics Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>The Importance of Acting From Ethics</h2>
          <p>
            Kant’s “Groundwork for the Metaphysics of Morals” first addresses the difference between acting ethically and acting from ethics<sup style={styles.sup}>6</sup>. In doing so, he equates ethics to duty, but this debate is irrelevant to the argument at hand so we ignore this distinction and talk simply in terms of ethics. In essence, acting ethically amounts to making decisions that align with ethical principles while acting from ethics necessitates a deliberate effort to do the right thing. To act from ethics means that the desire to be ethical is an explicit motivation for one’s actions—being ethical is not the result of one’s actions but the reason for them.
          </p>
          <p>
            It takes little imagination to picture a machine capable of acting ethically. From a utilitarian standpoint, a machine as simple as an automatic door acts ethically as it maximizes happiness by providing a useful service. Some philosophers argue acting from ethics only requires a single additional layer of abstraction. James H Moor’s “Ethical Robots” suggests that an AI model’s understanding of ethics could be as trivial as a hard-coded script to determine the most ethical course of action<sup style={styles.sup}>7</sup>. He claims an explicit ethical agent can act from ethics so long as it selects from multiple courses of action depending on its parameters in an ethical way. This loose definition of acting from ethics disregards the previously asserted notion that to act from ethics, ethics must be a reason for a machine’s action. To act from something implies that that thing has a direct role in one's own explanation of one’s action. On the other hand, Kant insists that acting from ethics necessitates consciousness, but the abstract nature of what it means to be conscious makes it difficult to explicitly determine whether a machine can act from ethics and what would be required in order for a machine to do so. On this line, we deploy a stronger definition of acting from ethics in this work than Moor and a more concrete definition than Kant. In this paper, a machine is said to act from ethics if the machine can motivate its actions at the most granular level in part through ethical principles. We will touch more on the significance of this definition later.
          </p>
          <p>
            The importance of teaching machines to act from ethics lies in the versatility of this form of reasoning. A machine capable of motivating its actions from ethics can apply ethical principles to any scenario just as a person can respond to a continuum of ideas with consistency of their moral principles. Even modern artificial intelligence techniques extrapolate. Machine learning (ML) enables an AI to learn from training data and then act in line with its training when faced with a variety of novel scenarios<sup style={styles.sup}>8</sup>. In many cases, ML uses a discrete set to prepare an AI to respond to a continuum of possible scenarios. The validity of this method hinges on the assumption that there will always be useful information from the training data to act in an appropriate manner. But with a continuum of possible scenarios, a discrete training set can never contain relevant information for every possible situation an AI may face<sup style={styles.sup}>9</sup>. Thus enters extrapolation—instances in which training data is extended beyond its relevance. The capability to act from ethics bypasses this concern by enabling an intelligence entity to simply apply ethical principles to any scenario. With an understanding of what it means to be ethical, a human can justify what they perceive to be an ethical course of action independent of their lived experiences. Teaching AI to act in a similar fashion would make the technology adaptable and more useful to society. Logically, the ensuing consideration is whether it is possible for machines to act from ethics. This consideration is next answered from two perspectives, one that relies on the necessity of responsibility in acting from ethics and another from the basis of distinctively mathematical explanations.
          </p>
        </section>

        {/* Responsibility Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>The Role of Responsibility in Acting From Ethics</h2>
          <p>
            From an outsider’s perspective, a young child is most often free from responsibility for their actions. They are perceived to lack the moral agency to make ethical decisions. Instead, each time a child acts ethically or unethically, their parents are held responsible for their choices. A toddler’s insistence on not sharing or insisting on getting what they want is commonly attributed to “bad parenting.”
          </p>
          <p>
            The notion of bad parenting has direct implications on the human perception of the causal structure of a child’s actions. We see the child’s parenting as so close to the causal sequence that led the child to act that we deem their impact greater than that of the child’s independent ethical faculties. Thus, we divert the responsibility for the child’s action to the parent rather than the child themselves. This is also the case with artificial intelligence entities. Numerous failures in AI, such as Uber’s self-driving car killing a pedestrian, have been ascribed to the creator of the technology rather than the technology itself<sup style={styles.sup}>10</sup>.
          </p>
          <p>
            For humans, responsibility is eventually transferred to the younger generation. Rare are the instances in which one ascribes the actions of a 30-year-old to bad parenting. Instead, the actions of an adult are attributed to the adult themself. This is not to say that an adult's parent’s role is eliminated from the causal structure of their actions. Lewis’ counterfactual account of causation makes it clear that the parent raising the child will always be a link in the causal chain leading to an action<sup style={styles.sup}>11</sup>. At some point, this link is simply deemed too insignificant to warrant responsibility.
          </p>
          <p>
            Only when this responsibility transfer occurs do we see a human as capable of acting from ethics. Thus, for a machine to act from ethics, we must see a division in the causal structure from the creator to the acts of the creation. Once more deploying a counterfactual framework, if a machine is responsible for its actions, then in the closest alternate world where the machine takes the ethically wrong course of action, it would be viewed as unethical. However, the validity of such an alternate world depends on the notion that the machine actively resists the impulse to take the ethically wrong course of action. Nyholm asserts that this is not a conceptual possibility as it runs counter to the machine’s guiding ethical principles necessary for it to be ethical in the first place<sup style={styles.sup}>12</sup>. Machines today are not capable of adhering to ethical principles by resisting the urge to violate them. Thus, we are unable to foresee a responsibility shift from the creators of artificial intelligence to AI itself without violating ethics. Granted this responsibility shift was previously argued to be essential to acting from ethics, we find considerable doubt in the ability of a machine to act from ethics through an analysis of its responsibility.
          </p>
        </section>

        {/* Mathematical Explanations Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Distinctively Mathematical Explanations for Machine Action</h2>
          <p>
            Marc Lange’s “What Makes an Explanation Distinctively Mathematical?” defines a distinctively mathematical explanation as one that flows directly from mathematical truths<sup style={styles.sup}>13</sup>. These truths possess a necessity and stability which makes them more powerful than empirical truths. Any explanation one can base entirely from these truths extends the necessity and stability of the truths themselves, lending way to a stronger and more rigorous line of reasoning.
          </p>
          <p>
            If something can be explained distinctively mathematically, no room is left for human agency and emotion which cannot be modeled mathematically due to their inherent chaos. This incompatibility makes it impossible to provide a motivation that contains ethical considerations as ethics is dependent on agency and emotion. Applying the definition in the previous discussion on acting from ethics, this means that no entity whose actions can be explained distinctively mathematically can act from ethics. Naturally, this conclusion leads one to consider whether all machine actions can be explained distinctively mathematically.
          </p>
          <p>
            Despite remarkable capabilities, even the most advanced artificial intelligences can be reduced to a sequence of 1s and 0s—the most basic mathematical representation of numbers<sup style={styles.sup}>14</sup>. After all, they must be run on computers, which, despite advances in quantum computing, work simply in terms of reading and writing bits. Even seemingly stochastic processes often rely on pseudo-random generation which is a mathematically definable process<sup style={styles.sup}>15</sup>. The parameters entered into a machine are notably not necessarily mathematical, but by the time they are codified to be entered into the AI model, they too exist at the mathematical level—simply another sequence of 1s and 0s to execute a set of processes. Thus, if an AI model is simply a sequence of operations on 1s and 0s, its actions can be explained distinctively mathematically. Ergo, machine actions are a matter of mathematical necessity, leaving no room for the chaos of ethics.
          </p>
        </section>

        {/* Conclusion Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Conclusion</h2>
          <p>
            The Sullenberger scenario presents the advantages of teaching AI to be ethical. Technical advances in machine learning can and have yielded machines with the capability of acting ethically. But machines acting from ethics, a key distinction that makes machine ethics generalizable to a continuum of scenarios, is proven unlikely given the current state of technological progress both from the standpoint of responsibility and the distinctively mathematical basis for machine action. Given the progress of theoretical computing techniques like quantum computing, we cannot limit the conceptual possibility of a machine reaching this level of thinking. However, this work suggests that fundamental technological advancement is necessary to act from ethics, specifically in a way that shifts responsibility towards AI and differentiates the explanations for its actions from a distinctively mathematical line of reasoning.
          </p>
        </section>

        {/* Back Button at Bottom */}
        <button onClick={goBack} style={styles.backButtonBottom}>
          &larr; Back to Thought Leadership
        </button>
      </article>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
  },
  backButtonTop: {
    display: 'block',
    margin: '10px 0',
    padding: '10px 15px',
    fontSize: '1rem',
    color: '#0073b1',
    background: 'none',
    border: '1px solid #0073b1',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'left',
  },
  backButtonBottom: {
    display: 'block',
    margin: '20px auto',
    padding: '10px 15px',
    fontSize: '1rem',
    color: '#0073b1',
    background: 'none',
    border: '1px solid #0073b1',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'center',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#2e4075'
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '20px',
  },
  heroImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
  },
  article: {
    marginTop: '20px',
  },
  section: {
    marginBottom: '30px',
  },
  sectionTitle: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#2e4075',
  },
  sup: {
    fontSize: '0.8rem',
    verticalAlign: 'super',
  },
};

export default ArticleTemplate;
