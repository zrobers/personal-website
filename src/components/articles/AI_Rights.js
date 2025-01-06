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
        <h1 style={styles.title}>The Easy Problem of AI Rights</h1>
        <p style={styles.subtitle}>Zachary Robers</p>
        <img 
          src="/images/article-images/ai-rights.jpg" 
          alt="Placeholder for article image" 
          style={styles.heroImage} 
        />
      </header>

      {/* Article Body */}
      <article style={styles.article}>

        {/* Introduction */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Introduction</h2>
          <p>
          It appears that any normative framework for determining which entities can possess direct rights inevitably intersects with the question of consciousness. Leading rights theories, such as moral status-based rights, the fundamental conditions approach, interest theory, and will theory, provide valuable insights on what aspects of conscious experience lend way to holding rights. However, applying these frameworks in an evaluative sense hinges on the ability to first assess consciousness or at least the aspects of consciousness relevant to the individual rights theory. While there are multiple possible moral-status-conferring properties such as being able to desire and being capable of rational agency, each of the leading candidates other than simply “being alive” requires a degree of consciousness<sup style={styles.sup}>1</sup>. Here, the candidacy of this property is rejected on the seeming absurdity of “bacteria rights”, leaving consciousness as a requisite condition for moral status-based rights. The fundamental conditions approach relies on the idea that rights-warranting entities need to fulfill certain conditions<sup style={styles.sup}>1</sup>. Once more, the notion that an entity needs something is dependent on a notion of self experience. Similar connections can be drawn between interest theory, will theory, and other rights theories and some aspect of consciousness.
          </p>
          <br />
          <p>
          Granted consciousness is unlikely to develop in distinct phases, the scenario in which aspects of consciousness relevant to one rights theory are present in some entity while other aspects relevant to different rights theories are not present does not seem to warrant consideration. This is not to say that determining a universal rights theory is not a worthwhile philosophical endeavor. However, if all reasonable theories are irreducible beyond the question of consciousness, the content of these theories is irrelevant in the practice of determining whether an entity can have rights. Therefore, to ask whether an entity can have rights is simply to ask whether an entity is conscious. 
          </p>
          <br />
          <p>
          Critics of this conclusion are likely to point to those who reason against the ability to hold rights while entirely avoiding the question of consciousness. Certain arguments against the ability for artificial intelligences to hold rights (hereafter AI rights), such as the objection from duplicability, the objection from otherness, the objection from existential debt, flow in this manner. Schwitzgebel and Garza provide strong rebukes to the viability of these objections, largely attributing their basis to speciesism and unjustified analogy<sup style={styles.sup}>2</sup>. Here, the strength of Schwitzgebel and Garza’s rebukes of these objections to AI rights serves as sufficient basis that the questions of rights and consciousness remain inextricably bound.  
          </p>
          <br />
          <p>
          Absent an answer to David Chalmers’ “hard problem of consciousness,” it appears that there also lacks a framework to deem an entity, from other humans to animals to futuristic robots, capable of bearing rights<sup style={styles.sup}>3</sup>. While a robust framework would indeed necessitate an answer to the hard problem, the fact that humans consider entities other than themselves, for which they do not truly know the status of their consciousness, as bearing rights suggests a possible work around.   First, I argue along the lines of Adam Andreotta that the hard problem in relation to rights can be circumvented through a comparison-based approach, making the subtle distinction that this approach is self-comparative rather than human-comparative<sup style={styles.sup}>4</sup>. I then take the opposite stance of Andreotta with regard to AI rights, arguing that using comparative means to assess the worthiness of AI entities of rights is just as appropriate if not more appropriate than the case of animal rights. Pending technological developments, this claim implies that an AI can become a rights-holder in the same sense that animals bear rights. This claim is developed in the face of popular counterarguments to extending the comparative approach to AI such as the argument for the necessity of a shared evolutionary history, the argument that tendencies for deception violate the comparative framework, and remaining biological concerns. Lastly, I propose that with regard to the question of what rights artificial intelligence capable of becoming a rights holder via comparative means would have, a similar evaluative framework to the one used in recent years with animal rights should be deployed. 
          </p>
        </section>

        {/* The Self-Comparative Approach */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>The Self-Comparative Approach</h2>
          <p>
          The reasoning and rhetoric of the animal rights movement is rooted in the following inductive argument for animal consciousness:
          </p>
          <br />
          <p style={{ marginLeft: '2em' }}>
            <b>P1:</b> I am conscious.<br />
            <b>P2:</b> A subset of animals are similar to me.<br />
            <b>C:</b> A subset of animals are conscious.
          </p>
          <br />
          <p>
          Accepting consciousness as the unifying necessary condition for holding rights thus enables these animals to be considered possible rights holders. From the scientific arguments which compare aspects of animal and human brains to personifying marketing campaigns which emphasize individuality by referring to animals as “someone” rather than “something,” this inductive argument and claims of similarity underlie the entire push for animal rights. Philosophers are largely sympathetic to this logic and have provided specific similarities which seem reasonable to ground the inference of consciousness. Christof Koch points to evolutionary history, the nervous system, and behavioral commonalities as the foremost similarities which ground P2<sup style={styles.sup}>5</sup>. 
          </p>
          <br />
          <p>
          Assuming consciousness and thus the possibility to hold rights based on similarity becomes a seeming necessity when one considers that this inductive argument is also how one human assumes the consciousness of another human. Granted P2 is much stronger in this case, induction via similarity to oneself is still needed to conquer the non-reductive nature of consciousness in the human case. Yes, there is a possibility that I am living in an advanced simulation in which no other entity has any degree of personal experience. Thanks to the inductive argument for consciousness, however, the high degree of similarity between myself and those around me leads me to be virtually certain that other humans are conscious and rights-bearing. This caveat leads me to conclude that assigning consciousness through similarity is ultimately self-comparative even if the final step of comparison to oneself is oftentimes neglected.  
          </p>
          <br />
          <p>
          Despite the apparent necessity of inferring consciousness in other humans through similarity and near total acceptance of inferring consciousness via similarity in animals, this self-comparative approach has faced significant pushback in application to artificial intelligences. Standard arguments against determining AI rights by self-comparison use the lack of a shared evolutionary history, a tendency for deception, and additional biological and epistemological concerns as grounds to dismiss the traditional inductive framework. Since this framework has reigned as the paradigmatic approach to handling questions of consciousness and thus the possibility for holding rights, the burden is on those who wish to deny its extension to find reasonable grounds for its dismissal. Ergo, by countering each of these objections, this work argues that a self-comparative approach remains an acceptable means of assessing AI as a rights-bearer in the same sense that the approach has been applied to animals.  
          </p>
        </section>

        {/* Evolutionary History */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Evolutionary History</h2>
          <p>
          Daniel Dennet’s “Kinds of Minds: Toward an Understanding of Consciousness” in part bases his assertion of the consciousness of animals on the idea that human and animal minds exist on an evolutionary continuum, meaning that any differences are a matter of degree, not kind<sup style={styles.sup}>6</sup>. Andreotta argues that this shared evolutionary history is a critical piece to the legitimacy of applying the self-comparative approach to granting rights. He reasons that given that artificial intelligences clearly do not lie on Dennet’s “evolutionary continuum,” there are reasonable grounds to dismiss similarity comparisons<sup style={styles.sup}>7</sup>. Dennet and Andreotta are mistaken on two accounts. (1) They overstate the extent to which a human shares an evolutionary history with animals. (2) They fail to recognize that the process of AI development is similar to evolution and in multiple ways offers a more reasonable process to appeal to on grounds of similarity. 
          </p>
          <br />
          <p>
          On the first account, the idea of an “evolutionary continuum” in a literal or metaphorical sense lacks scientific grounding. Evolution, in terms of the natural selection of desirable traits for survival, is fundamentally linked to the discrete events of conception, birth, and death. While animals must survive continuously in time in order to reproduce, the instances at which genes enter and exit the gene pool are discrete. An animal does not evolve continuously through time. A species evolves at discrete instances in time based on instances of conception, birth, and death. Furthermore, statistics indicating the extent to which humans “share” their DNA with other species lead to false equivalences of similarity. A chimpanzee that shares 98% of its DNA with the average human is not 98% of the average human. The 2% discrepancy in DNA between humans and chimpanzees, leading to the realization of traits such as bipedalism, increased cranial capacity and dexterity should be treated with increased significance compared to the 98% of DNA also possessed by certain primates.  
          </p>
          <br />
          <p>
          The process of evolution is similar to the process of AI development. As technology companies release new models and iterations of Artificial General Intelligence (AGI), they select for features and methodologies that pose the greatest chance of leading to improved capabilities. While there are no natural forces present in the selection process, advantageous attributes continue to remain in cutting edge technologies while dated or limiting ones fall out of the technological gene pool. Instead of natural forces, the guiding force in such efforts is oftentimes the desire to intentionally and accurately imitate the human brain. Deep learning and neural networks are among the techniques realized in current AGIs which are based on a working understanding of the human brain<sup style={styles.sup}>8</sup>. Along these lines, AGI development can be considered an intentional process to mimic the human brain which (using the self-comparative approach) is agreed upon to be a conscious and rights-bearing entity. In contrast, appeals to a shared evolutionary history between humans and animals are limited by the fact that these histories have long parted ways through unintentional processes, perhaps before the onset of consciousness.  In this sense, appeals to the development process of AGIs may even be more reasonable grounds for similarity than appeals to evolutionary history.  
          </p>
        </section>

        {/* Folly Functionalism */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Folly Functionalism</h2>
          <p>
          Newton’s rule, which posits that similar effects can be attributed to similar causes, has been extended to attributing animal behaviors to underlying mental states<sup style={styles.sup}>9</sup>. This functional argument that behaviors underlie mental states has rightly been critiqued by Andreotta in extension to artificial intelligence due to tendencies for deception. Simply put, if AIs are designed to purposely exhibit behaviors indicative of mental states without the means to possess these mental states, this seems reasonable grounds to dismiss self-comparison as viable means to determine consciousness and the possibility of having rights. 
          </p>
          <br />
          <p>
          The self-comparison argument is, in practice, denied on grounds of deception. Artificial intelligences currently have the ability to exhibit behaviors indicative of consciousness while undeniably lacking any notion of first-person experience. For instance, a chatbot that claims to understand your frustration about your flight cancellation, is thought by no one in the rational scientific community to possess any degree of consciousness which would be necessary for the shared understanding it claims to experience.
          </p>
          <br />
          <p>
          The current denial of rights is a good sign that humans have an in built-in safeguard for limiting rights-worthiness and consciousness on grounds of deception. The real question is if there will ever be reasonable grounds to lift, weaken, or circumvent this precondition on deception, freeing the use of a functionalist aspect to the self-comparative approach to assess the consciousness of an artificial entity. One promising approach is to closely monitor the technical basis for consciousness. It remains highly unlikely that a conscious artificial intelligence would be created by happenstance. Even absent an answer to Chalmers’ hard problem, we can evaluate the computational realization of neural processes which appear correlated with consciousness as we assess the legitimacy that seemingly experience-based AI behaviors are truly rooted in consciousness. 
          </p>
          <br />
          <p>
          The critic of this approach is likely to argue that the correlation between the computational realization of neural processes and the deceptive capabilities will likely complicate the practical application of merging structuralism and functionalism. This is indeed a valid concern, but not an insurmountable one. Any Bayesian framework for assessing consciousness via similarity in the wake of a new computational realization will simply need to account for the increased deceptive capabilities in the computation of the likelihoods. Furthermore, adopting Susan Schneider’s suggestion to isolate artificial intelligence and implement more sophisticated means of selectively assessing behaviors will provide additional safeguards against deception<sup style={styles.sup}>10</sup>.
          </p>
        </section>

        {/* Biological Concerns */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Biological Concerns</h2>
          <p>
          The most steadfast critics are likely to insist the self-comparative argument cannot extend to artificial intelligences on biological grounds. These concerns can be partitioned into two categories: (i) biological functions and (ii) biological makeup. Here, the former is argued to be irrelevant and the latter insignificant to measures of similarity.  
          </p>
          <br />
          <p>
          Among the biological functions, Dennett and Andreotta point to the shared presence of a nervous system as the most crucial for establishing grounds of similarity<sup style={styles.sup}>11</sup>. However, leading humanoid robots already have some sort of technical equivalent to the nervous system in terms of functionality. A central processing unit (CPU) which can receive sensory input from devices dispersed throughout the entity, process this information, and send signals to output devices essentially operates as a rudimentary form of the nervous system. By the time there is an artificial intelligence entity worthy of consideration for consciousness and holding rights, the functional aspects of this technical nervous system will likely be close to indistinguishable from the nervous systems of humans.    
          </p>
          <br />
          <p>
          Even if the functions of the nervous system among other biological systems are replicated by an artificial entity, the actual materials which constitute the hardware for this system will be synthetic rather than biologic. The widely popularized view of substrate independence, however, asserts that there is no special property of biological substrates for enabling first person experience. For all relevant purposes, silicon seems equally adequate for implementing a computation. Even in the case that there is an element of continuity involved in neural processes, the principles of neuromorphic and quantum computing demonstrate that it is not essential for biologic materials to be utilized as a continuous medium.   
          </p>
        </section>

         {/* AI Rights as Animal Rights */}
         <section style={styles.section}>
          <h2 style={styles.sectionTitle}>AI Rights as Animal Rights</h2>
          <p>
          Echoing Thomas Kuhn and Elliott Sober’s contributions to scientific theory choice, simplicity is a desirable factor when choosing between paradigms. The argument of this work is uniquely simple in that it suggests the correct approach to evaluating AI rights is to utilize the framework already in existence for evaluating rights. Given that the leading rights theories are irreducible beyond the problem to consciousness, the self-comparative approach has served as the guiding framework to circumvent the hard problem of consciousness and justify the case for animal rights. The primary objections to extending the self-comparative approach to AI on the grounds of lack of a shared evolutionary history, deceptive tendencies, and absence of traditional biology are here shown to be not strong enough to warrant a paradigm shift.  
          </p>
          <br />
          <p>
          With regard to the issue of deception, it is conceded that some additional measures must be in place to ensure the behaviors of artificial agents reflect their mental state. Namely, it is posited that a combined functionalist and structuralist approach can be used to assess underlying mental states from behaviors according to Newton’s principle. From here, the self-comparative approach remains an acceptable means to assess the capability of an artificial entity to bear rights. Just as animals have been assigned different levels of rights based on their similarity, sufficiently advanced artificial entities can be awarded rights based on the presence of neural processes correlated with consciousness and similarities to one’s first person experience. Such is the nature of the easy problem of AI rights- there is no need to determine the exact basis of consciousness, just a need to identify similarities.  
          </p>
        </section>
        
        <section style={styles.sources}>
        <h3 style={styles.sectionTitle}>Sources</h3>
        <ol style={styles.sourceList}>
            <li>Liao, S. Matthew. "The moral status and rights of artificial intelligence." Ethics of artificial intelligence (2020): 480-503.</li>
            <li>Schwitzgebel, Eric, and Mara Garza. "A defense of the rights of artificial intelligences." Midwest Studies in Philosophy 39, no. 1 (2015): 98-119.</li>
            <li>Chalmers, David. "The hard problem of consciousness." The Blackwell companion to consciousness (2017): 32-42.</li>
            <li>Andreotta, Adam J. "The hard problem of AI rights." AI & society 36, no. 1 (2021): 19-32.</li>
            <li>Koch, Christof. The feeling of life itself: why consciousness is widespread but can't be computed. Mit Press, 2019.</li>
            <li>Dennett, Daniel C. Kinds of minds: Toward an understanding of consciousness. Basic Books, 2008.</li>
            <li>LeCun, Yann, Yoshua Bengio, and Geoffrey Hinton. "Deep learning." Nature 521, no. 7553 (2015): 436-444.</li>
            <li>Tye, Michael. Tense bees and shell-shocked crabs: Are animals conscious?. Oxford University Press, 2016.</li>
            <li>Schneider, Susan. "How to catch an AI zombie." Ethics of artificial intelligence (2020): 439.</li>
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



