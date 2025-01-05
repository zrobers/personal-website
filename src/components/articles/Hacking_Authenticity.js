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
        &larr; Back
      </button>

      {/* Article Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>Hacking Inductive Authenticity</h1>
        <p style={styles.subtitle}>Zachary Robers</p>
        <img
          src="/images/article-images/hacking-authenticity.webp"
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
          Hi. It’s nice to meet you. My name is Zach. I am an American university student studying abroad at Oxford. I also have a challenge for you: determine the authenticity of our relationship. 
          </p>
          <br />
          <p>
          You’re probably skeptical at this point. After all, I’ve only given you information about myself in the present. Despite my pleasantries, you probably don’t even consider our encounter thus far to be the onset of a relationship, let alone an authentic one. Maybe you doubt I’m even human - a modern-day chatbot is surely capable of the preceding ramblings. Was my use of first-person pronouns enough to project my self-awareness? 
          </p>
          <br />
          <p>
          I think you’re right to be skeptical, so let me tell you some more about myself. I was born and raised in a suburban town in North Carolina. There, I grew up alongside two loving parents, my sister, and a dog. I’ve always been into sports, particularly baseball, and math. The latter led me to pursue university study which brought us to where we are today.
          </p>
          <br />
          <p>
          Now, you probably have a good feeling of my origins. Using inference to fill in the gaps, you can picture my upbringing in your head. But you tell me you’re still not so sure - while this basic background makes our acquaintance seem more plausible, you need more:  “How do I know you’re not made up?”   
          </p>
          <br />
          <p>
          Fair enough. Let’s meet in person. Seeing my glistening smile, the shine of my greenish blue eyes, the chaotic disarray of my hair as I extend my hand to greet you, I look authentic. More, the warmth of my hind, the roughness of my calluses, the smoothness of my fingernails, feel right.   
          </p>
          <br />
          <p>
          Now, you’re sure I’m human. This would be grounds to dismiss authenticity, but you tell me an authentic relationship requires more than two acquainted humans.  
          </p>
          <br />
          <p>
          Fine. Let’s get to know each other. We laugh as my chopstick insufficiency causes me to drop the sushi roll on my lap. We reminisce over old family memories as we share in the joy of an ice cream sundae for dessert. As we watch a baseball game later, we share in the distraught as the other team walks off, leaving our team hanging their heads.   
          </p>
          <br />
          <p>
          These shared emotions bring us closer. But you’re a tough critic. You insist that an authentic relationship goes deeper than emotional bonding. It requires a degree of agency in my actions: you must feel that I continue to engage in our relationship because I care for you, not simply for the sake of it.  
          </p>
          <br />
          <p>
          More time passes. We see our ups and downs. You tell me you’re upset that I keep prioritizing my studies over spending time with each other. I jab back: “My future is more important than watching sports together.” We don’t speak for two weeks. Then your phone rings. It’s me. I tell you that I’m ready to change - I’ll cut off working at 5 if it means we can continue hanging out. Reluctantly, you agree to meet the next day. Everything seems well and good… for now. -----  
          </p>
          <br />
          <p>
          This introductory thought exercise illustrates the process of discerning the authenticity of a relationship. The following work suggests that judging authenticity of a virtue form relationship is an inductive process rooted in a series of hidden comparisons between oneself, the other person in the relationship, and one’s preconceived notions on relationships, influenced by evolutionary pressures. Furthermore, the inductivity of the process leaves open the possibility of “hacking” authenticity, leading to the consideration of a robot capable of forming seemingly authentic virtue form relationships over the whole range of the human sensory experience without the need for consciousness. From here, a world where such a robot exists is considered. In such a world, only the knowledge that the other entity is artificial remains to undermine the authenticity of virtue form human-robot relationships. If this knowledge is removed, the relationship with the robot is left to be found authentic by inductive means, and thus the relationship is authentic in the same sense we consider a human relationship authentic. Motivated by this scenario, this paper concludes by considering the ethics of removing the knowledge that an artificial entity capable of “hacking” authenticity considerations within a virtue form relationship is, in fact, artificial.   
          </p>
        </section>

        {/* Considerations for Authentic Virtue Form Relationships */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Considerations for Authentic Virtue Form Relationships</h2>
          <p>
          Defined to be the epitome of friendship by Aristotle, virtue form relationships are marked by mutual good will and well-wishing pursued out of mutual admiration and shared values on both sides<sup style={styles.sup}>1</sup>. The good intent, admiration, and shared values which are necessary for virtue form relationships all exist on a conscious level, making their existence inaccessible to the other entity within the relationship. This presents additional motivation for considering whether these relationships are authentic. 
          </p>
          <br />
          <p>
          Working under the definition of authenticity as the lack of wide-scale deception and  Judith Donath’s account of deception as an act or quality intended to cause the recipient to believe something that is not true, it is immediately clear that there’s a high degree of difficulty in proving something is authentic<sup style={styles.sup}>2</sup>. In proving authenticity, one must show that something designed to fool your senses (deception) does not exist. It is much simpler to show that something is not authentic: one must simply provide an example of an act or quality intended to cause the recipient to believe something is not true. Analogously, mathematical proofs often rely on complex, lengthy arguments whereas disproofs tend to simply provide a case incompatible with the sought after conclusion. 
          </p>
          <br />
          <p>
          Unlike mathematics, there is no deductive framework one can deploy to definitively demonstrate the authenticity of virtue form relationships. There’s no checklist of sufficient conditions. No tools to reason from one’s observations to the necessity that something is authentic. Such is why determining authenticity follows a procedure similar to that provided in the introductory thought exercise. However, this process is not exclusively explicit and nor does it fall into such nice stages. More often, the process of determining the authenticity of a relationship involves a mix of conscious and non-conscious thought that does not follow an exact order. Regardless, the five explicit stages of the introductory thought exercise serve as five general considerations when judging the authenticity of a virtue form relationship under the full range of sensory experience. The considerations as chronologically introduced in the introductory thought exercise are as follows: 
          </p>
          <br />
          <ul>
                <li><b>Communication:</b> Can the entity communicate in a way consistent with human language?</li>
                <li><b>History:</b> Does the entity have a plausible past?</li>
                <li><b>Physical Presence:</b> Does the entity look like a human?</li>
                <li><b>Emotion:</b> Does the entity share their emotions throughout the relationship?</li>
                <li><b>Agency:</b> Does the entity engage in the relationship at large in individual acts within the relationship because they care for the other person?</li>
          </ul>
          <br />
          <p>
          Note that (a) and (c) are primarily concerned with whether the other entity is human and the remaining are more matters of authenticity within the relationship. Here, these matters are grouped together to consider a more holistic view of the authenticity of virtue form relationships. Even under the assumption that the other entity is human, (b), (d), and (e) are considered to judge whether one’s relationship is rooted in deceit. Moreover, these considerations exclude non-fundamental examples of lying as a violation of authenticity. While examples of lying such as hiding one’s whereabouts or falsely claiming to have performed some action are not advisable for a healthy relationship, they do not imply that the relationship at large is rooted in deceit.   
          </p>
        </section>

        {/* The Inductive Nature of Authenticity */}
        <section style={styles.section}>
            <h2 style={styles.sectionTitle}>The Inductive Nature of Authenticity</h2>
            <p>
            Throughout the introductory exercise, the person tasked to discern the authenticity of the relationship uses an inductive line of reasoning to determine whether their relationship is authentic in regard to each of the five characteristics. At each stage in the exercise, they are presented with a set of information or behaviors and using this knowledge, they compare what they have observed to what they envision the information and behaviors would be if the relationship were to be authentic. For certain considerations, the generalized process is more straightforward than others. In judging the authenticity of one’s physical presence, years of experience interacting with humans and being human gives a clear intuition as to whether or not the entity one interacts with is human. Such is why “you” were quick to adopt my humanity once you shook my hand in the opening exercise. The authenticity of one’s communication and background follow similarly simple inductive processes. 
            </p>
            <br />
            <p>
            Sharing emotion presents a more complex narrative. Theory of Mind (ToM) posits that we ascribe mental states to others based on observation alone, while Simulation Theory (ST) suggests that emotions are shared by internally simulating what we perceive others to be feeling<sup style={styles.sup}>3,4</sup>. That said, both theories imply that sharing emotion relies on inductive reasoning. In ToM, induction involves inferring another's emotion from their outward expressions, which is then directly understood. ST includes an additional step where the observer simulates the perceived emotion internally, but still relies on inference to interpret the initial perception. Therefore, to ensure that another's emotion is genuine and not deceitful, one must first observe their external emotional cues and apply inductive reasoning to interpret these signs as a specific emotion. 
            </p>
            <br />
            <p>
            The final and most highly contested consideration is agency<sup style={styles.sup}>5</sup>. In romantic settings, this manifests itself as the desire to be loved. More generally, “you” posit in the introductory exercise that you must feel that “I” care for you. Perhaps influenced by popular culture, many argue that love is an innate feeling. Phrases like “love at first sight” indicate that to love and thus act out of this love doesn’t follow some paradigmatic development process, but instead is mysteriously and suddenly inflicted upon someone. Similar lines have been drawn to articulate the process of detecting another’s love. This suggests that the inductive inference procedure which defines other authenticity considerations does not apply. 
            </p>
            <br />
            <p>
            A much more plausible proposal is that there is still some level of inductivity in discerning that one authentically cares for you. While this process is less concrete than for previous considerations since one must judge on their perception of another’s motivations which are inherently inaccessible to them, the most accepted theories say that there must be some action or information which prompts one to feel that another is acting out of their care for them. Humans infer motivations through behaviors by relating one’s perception of another’s behaviors to their motivations when they exhibited the same behaviors<sup style={styles.sup}>6</sup>. In the following section, I attempt to solidify the nature of such behaviors as I embark on attempting to fool this inductive framework into attributing authenticity to a relationship with an artificial entity. 
            </p>
            <br />
    
        </section>

        {/* Let's Get to Hacking */}
        <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Let's Get to Hacking</h2>
            <p>
            Previously it has been shown that each of the five major authenticity considerations for virtue form relationships depend on an inductive inference process. 
            </p>
            <br />
            <figure style={{ textAlign: 'center' }}>
                <img src="/images/article-images/authenticity1.png" alt="Illustration of the deductive and inductive frameworks" style={styles.figureImage} />
                <figcaption style={{ fontSize: 'smaller', fontStyle: 'italic' }}>
                    Figure 1:  Inductive and deductive frameworks for determining the authenticity of a relationship are applied on the basis of origin. The rounded square shape marks the inductive step within the framework for determining the authenticity of a relationship where the other entity is of unknown origin.
                </figcaption>
            </figure>
            <br />
            <p>
            Absent the knowledge that the other entity is artificial, the deductive framework for proving the relationship is inauthentic, as outlined in the right side of Figure 1, does not apply. Instead one must default to an inductive framework for evaluating the authenticity of a virtue form relationship. As the left side of Figure 1 illustrates, there is a possibility of causing one to falsely infer the authenticity of a certain consideration given their perception of whether the other entity's behaviors aligns with what they expect in an authentic relationship. Here, this process is referred to as “hacking” authenticity and the methods and viability of an artificial entity hacking authenticity is discussed for each of the five authenticity considerations.  
            </p>
            <br />
            <p>
            To a large extent, these considerations can already be “hacked” by modern technologies. Sophisticated Large Language Models (LLMs) have been shown to consistently persuade humans that the AI-generated communications were produced by a human<sup style={styles.sup}>7</sup>. On similar lines, a plausible history is equally vulnerable to generative AI. Surely, one will require more information throughout a virtue form relationship than that the other entity was born in suburban North Carolina and played baseball, to reference the introductory thought exercise. But the idea that artificial intelligence can be used to provide a consistent history that is not vulnerable to outside contradictions seems plausible. Seemingly authentic physical presence remains beyond the grasp of current hardware capabilities, but humanoids are headed into the direction of indistinguishability. According to creator Hanson Robotics, humanoid Sofia can simulate every major muscle in the human face<sup style={styles.sup}>8</sup>. Admittedly, there’s still a lot of ground to cover, including the simulation of biological processes, but there does not seem to be a technical barrier preventing advancement. Likewise, existing artificial intelligences also suffice as examples of sharing emotion. While it has yet to be seen whether AI can encompass the whole spectrum of human emotion, the early success in sharing common emotions such as fear and distress by relational artifacts suggests that technologists are quickly on their way to successfully portraying this critical piece of human interaction<sup style={styles.sup}>9</sup>.     
            </p>
            <br />
            <p>
            Hacking agency within a relationship is a more sophisticated endeavor less supported by existing technology. Agency within relationships can be divided into two intertwined viewpoints: agency in the relationship at large and agency with regard to individual actions within the relationship. Rejecting the “love at first sight” narrative, the introductory exercise serves to illustrate that the two types of agency can be achieved through the notions of loss and sacrifice, both of which can be simulated without consciousness and detected inductively. Here loss is tied to the agency within the relationship at large. The idea is that if one infers that the other entity has the ability to no longer engage in the relationship, then they will feel more strongly that they are choosing to be in the relationship out of their care for the other person. The notion of loss is incorporated in the introductory exercise through the two week pause in the relationship. Sacrifice follows a similar rationale. If one feels that the other entity in the relationship must make a sacrifice, like reducing their focus on their studies, in order to engage in the relationship, then they are more likely to feel that they engage in individual actions within the relationship on account of their care for the other person.     
            </p>
            <br />
            <p>
            Furthermore, evolutionary pressures will further aid in the “hacking” process by providing a secondary motive for accepting the relationship. These pressures have been noted as a factor in leading children to nurture Tamagotchi robots, toys designed to simulate a dependent relationship, as humans have evolved to provide nourishment to one another as a means to ensure survival<sup style={styles.sup}>10</sup>. Similarly, evolutionary pressures to find friends and a romantic partner are bound to increase one’s susceptibility to accept a virtue-based relationship as authentic. 
            </p>
        </section>

         {/* Ignorance is Bliss? */}
         <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Ignorance is Bliss?</h2>
            <p>
            Turning to a world where there exists a humanoid robot which has hacked the inductive framework for determining authenticity, all that remains to dissuade one from believing that their relationship with an artificial entity is authentic in the same sense as an authentic virtue form relationship between humans is the knowledge that the other entity is artificial. Absent this critical premise, the deductive framework for proving inauthenticity on the right side of Figure 1 seizes to apply, and the humanoid is left to deceive the inductive framework on the left side of Figure 1. This poses an ethical dilemma: should these robots be introduced to society such that humans don’t have access to this critical premise, leaving humans free to form locally authentic relationships with robots? Simply put, is ignorance bliss?
            </p>
            <br />
            <p>
            From a human rights angle, many will undoubtedly argue that one has a right to know the origin of the entity with whom they share a virtue form relationship. Others will fight back by extending an egalitarian argument to these seemingly authentic entities. Proponents of instituting ignorance will also cite the social pressures which currently serve to devalidate inductively inauthentic virtue form machine relationships as destructive. Don’t people who aren’t capable of finding a human friend or partner deserve the right to have an authentic virtue form relationship? Inevitably, there will be concern over reproduction: if the artificial entity is capable of producing a new being, will it be human or artificial? How would we even know? Will it even matter at this point?  
            </p>
        </section>

        {/* Conclusion */}
        <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Conclusion</h2>
            <p>
            Regardless of the solution to this ethical dilemma, the preceding work serves to suggest that society may need to come to a judgment sooner than later. The introductory thought exercise initially demonstrates the inductive nature of determining the authenticity of core considerations for virtue form relationships. Later, this framework is formalized by defining five key considerations for weighing the authenticity of virtue form relationships and individually reasoning how the process of evaluating these considerations is rooted in inductive inference. The idea of “hacking” the authenticity of relationships is proposed and stipulated to be a feasible endeavor given recent technological advances and the inductive nature of the process of evaluating authenticity. Lastly, the ethical dilemma of introducing a humanoid robot which is successful in hacking the inductive framework for authenticity is introduced and briefly discussed, paving the way for a future discourse to more exhaustively evaluate the scenario. 
            </p>
        </section>
        
       {/* Sources Section */}
        <section style={styles.sources}>
        <h3 style={styles.sectionTitle}>Sources</h3>
        <ol style={styles.sourceList}>
            <li>Donath, Judith. "Ethical issues in our relationship with artificial entities." The Oxford Handbook of Ethics of AI (2020): 53-73.</li>
            <li>Hauskeller, Michael. "Automatic sweethearts for transhumanists." (2017).</li>
            <li>Turkle, Sherry. "Authenticity in the age of digital companions." Interaction Studies 8, no. 3 (2007): 501-517.</li>
            <li>Danaher, John. "The philosophical case for robot friendship." Journal of Posthuman Studies 3, no. 1 (2019): 5-24.</li>
            <li>Chung, Stephy. “Meet Sophia: The Robot Who Laughs, Smiles and Frowns Just Like Us.” CNN, November 2, 2018. https://amp.cnn.com/cnn/style/article/sophia-robot-artificial-intelligence-smart-creativity.</li>
            <li>Liao, Q. Vera, and Jennifer Wortman Vaughan. “AI Transparency in the Age of LLMs: A Human-Centered Research Roadmap.” Harvard Data Science Review, February 29, 2024.</li>
            <li>Malle, Bertram F. "Attribution Theories: How People Sense of Behavior." In Theories in Social Psychology, edited by Derek Chadee, 72-95. Malden, MA: Wiley-Blackwell, 2011.</li>
            <li>Baron-Cohen, S. (2001). "Theory of mind in normal development and autism." Prisme.</li>
            <li>Niedenthal, P. M., et al. (2010). "The Simulation of Smiles (SIMS) model: Embodied simulation and the meaning of facial expression." Behavioral and Brain Sciences.</li>
        </ol>
        </section>

        {/* Back Button at Bottom */}
        <button onClick={goBack} style={styles.backButtonBottom}>
          Thought Leadership Home
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
    margin: '10px 0',
    padding: '10px 15px',
    fontSize: '1rem',
    color: '#2e4075',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'left',
    textDecoration: 'underline',
  },
  backButtonBottom: {
    display: 'block',
    margin: '20px auto',
    padding: '10px 15px',
    fontSize: '1rem',
    color: '#2e4075',
    background: 'none',
    border: '1px solid #2e4075',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'center',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#2e4075',
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
  sourceList: {
    paddingLeft: '20px',
    fontSize: '1rem',
  },
};

export default ArticleTemplate;
