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
        <h1 style={styles.title}>Against Precautionary Basic Income: An Argument for the Survival of Survival</h1>
        <p style={styles.subtitle}>July 2024</p>
        <img
          src="/images/article-images/survival.jpg"
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
            Aaron James is correct to reject the inductive argument against mass economic disruption from the rise of artificial intelligence (AI)-aided automation. Proponents of this argument, such as Robert Gordon, note that we have seen large waves of automation in the past without an associated rise in unemployment<sup style={styles.sup}>1</sup>. From here, they argue that the impact of artificial intelligence lacks the magnitude of momentous shifts such as the second industrial revolution, concluding that predictions of mass unemployment are unfounded. The case against this argument is simple. Artificial intelligence agents lack the low ceiling which prohibited previous waves of automation from encroaching on humanity’s competitive advantage. Regardless of whether you believe there is a philosophical boundary preventing artificial intelligences from adequately performing certain tasks, the fact that such a debate exists is a cause for extreme concern. Accordingly, the World Economic Forum has assessed that Large Language Models (LLMs) alone could impact 40% of working hours<sup style={styles.sup}>2</sup>. A McKinsey and Company study suggests that automation could replace 30% of current work activities by 2030<sup style={styles.sup}>3</sup>.
          </p>
          <br />
          <p>
            Aaron James is also justified in asserting that the risk associated with AI automation needs to be distributed across the larger population. A separate McKinsey report stipulates that AI will likely complement the work of higher-income creativity and STEM-based professionals while replacing the more mundane tasks of lower-income workers<sup style={styles.sup}>4</sup>. Given these lower-income workers also have less resources to fund retraining and sustain their lifestyles between jobs, they are poised to face the brunt of AI’s impact without a clear path towards regaining self-sufficiency. Humanitarian and prioritarian principles along with one’s intrinsic definition of fairness suggest society has a responsibility to alleviate this disproportionate risk.
          </p>
          <br />
          <p>
            However, James’ proposal of Precautionary Basic Income (PBI) as a means to distribute the risk posed by automation across the population and gracefully usher humanity into an era of machine dependency is misguided<sup style={styles.sup}>5</sup>. James’ utilitarian stance that PBI comes at a low cost relative to the chance of mass economic disruption from AI and automation only stands on financial grounds. This paper argues that the rewriting of the social contract, a byproduct of PBI that James himself notes, will ultimately come at the cost of eliminating the human mission of survival. It is then argued that while meaning-related goods can be achieved outside the workplace under the current social contract, actions which yield these goods are dependent on the notion of survival for their meaning and prevalence. Intent on preserving survival, a new proposal for distributing the risk of AI-based automation that maintains the current social contract is then provided and justified.
          </p>
        </section>

        {/* Survival Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Survival</h2>
          <p>
            In his seminal work, “On the Origin of Species,” Darwin postulates that evolution operates through a process called natural selection<sup style={styles.sup}>6</sup>. In this process, organisms with desirable traits survive and reproduce, thus increasing the presence of favorable traits for survival in the gene pool. Among classical examples of natural selection is the evolution of a giraffe’s neck. Giraffes with long necks were able to reach higher leaves, giving them an advantage in feeding which naturally drove the predominance of long-necked giraffes.
          </p>
          <br />
          <p>
            Humans not only evolved to develop physical traits pertinent to survival, such as opposing thumbs and bipedalism, but psychological, cultural, and moral systems which further enhance survival. Just as natural selection explains long-necked giraffes, it rationalizes the basis of homo sapien behavior as dispositioned towards survival. Since humans evolved as social creatures, traits which lead to harmony in a group setting, such as cooperation, altruism, theory of mind, attachment theory, and a propensity to respect social norms, became the defining principles by which humans rationalize their actions and interact with others. Furthermore, obstacles to survival often arise as triggers for these desirable behaviors. Studies show that when humans are threatened or faced with scarcity, these traits become increasingly prominent in guiding daily actions. For instance, after the 2011 earthquake and tsunami in Japan, affected peoples exhibited higher levels of cooperation and altruism<sup style={styles.sup}>7</sup>. On similar lines, sociologists note that the Great Depression in the United States marked a time of increased solidarity and mutual aid<sup style={styles.sup}>8</sup>. It's when humans perceive a possible inhibitor of survival and prosperity that the traits which predispose humans to live in harmony shine through.
          </p>
          <br />
          <p>
            In places of abundance, work and the associated economic reward serve as a proxy for traditional means of survival. Only in rare cataclysmic events, such as the 2011 earthquake and tsunami in Japan, do prosperous post-industrial nations lack the resources to ensure the survival of their citizens. Instead, a socio-economic system in which money, an item with value tied to the ability to survive and thrive, is awarded on the basis of work keeps the notion of survival alive on a large scale. Accordingly, the modern socio-economic system has been correlated with the same desirable traits, such as cooperation and altruism, which humans developed in response to more tangible threats to survival such as predation and famine. Studies have shown that in their shared quest for survival in a workplace environment, employees develop camaraderie, enhanced cooperation, and altruistic tendencies<sup style={styles.sup}>9,10,11</sup>. Even competition, which critics cite as a damaging byproduct of survival, can be tied to creativity and innovation in a workplace setting<sup style={styles.sup}>12</sup>. 
          </p>
        </section>

        {/* Rewriting the Social Contract */}
        <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Rewriting the Social Contract: The Guarantee and Death of Survival</h2>
            <p>
              As Aaron James notes, implementing Precautionary Basic Income would effectively rewrite the social contract. Currently, this contract sets the expectation of working as a means of societal contribution and obtaining an economic reward. In a world with PBI, work is no longer required as survival is guaranteed. Government checks would serve as sufficient means to fund necessities, eliminating the current socio-economic system which implants work as a modern proxy for survival. Under this new social contract, work could still exist as a means to enhance prosperity, with work funding non-essential goods like travel and luxury clothing, but the link between working and survival on a basic level would be lost. In essence, PBI is a self-defeating policy with respect to survival. It guarantees survival by ensuring basic necessities, but in the process destroys survival as a process reliant upon using one’s agency to fulfill one’s basic needs, as manifested in a modern sense by the workplace.
            </p>
            <br />
            <p>
              James provides several worthwhile alternatives to work, mentioning volunteering and creative or sporting pursuits as key components of the new social contract<sup style={styles.sup}>13</sup>. James and others plead that meaning-related goods can still be obtained without work, picturing a utopia in which humans take pleasure in using their newfound free time to deepen relationships, engage in service, and actively partake in games. However, these claims rely on two key assumptions. First, James takes it as given that humans will willingly engage in these activities under the new social contract. Second, he assumes that humans will receive the same kind of meaning and pleasure from these activities as under the previous social contract. In the following paragraphs, this work argues that the decreased prevalence of survival under this new social contract causes both of these assumptions to not hold.
            </p>
            <br />
            <p>
              The human tendency to respond when faced with threats to survival by exhibiting the psychological, moral, and cultural traits characteristic to human evolution is exhibited by the altruism in response to the Japanese tsunami and earthquake of 2011, the camaraderie during the Great Depression, and the social cohesion and respect for norms within the workplace. Without the notion of survival, which would be diminished in its modern form by PBI, these characteristics are bound to decrease in prevalence. Given these traits are essential for harmony within social settings, this alone is cause for concern. This concern is magnified by the realization that these same characteristics are those which motivate humans to partake in the work alternatives assumed to supplement the loss in meaning-related goods obtained from work. Without altruism and a desire to help others, what’s there to motivate us to partake in volunteer work? Without a desire for friendship and social cohesion, what’s there to motivate spending more time with others? And without the notion of achievement, deeply rooted in the human inclination to compete for survival, will “love of the game” be enough to motivate a game-filled utopia? These examples, among others, call into question whether humans will choose to engage in these alternative activities to work, deemed essential for retaining meaning in an increasingly work-averse society.
            </p>
            <br />
            <p>
              Furthermore, there is reasonable doubt to whether these activities will continue to conjure the same meaning as under the current social contract. Feelings of purpose and accomplishment, two of the prized meaning-related goods found in work, are often linked to the notion of survival. Weber’s analysis of the Protestant work ethic ties survival as obtained through economic success or other means to salvation, the defining purpose and aim of many faiths<sup style={styles.sup}>14</sup>. With a shift away from survival, it’s questionable whether these forms of meaning which often complement survival will continue to remain in the same sense in other endeavors. 
            </p>
        </section>

        {/* Reevaluation James' Utilitarian Argument for PBI */}
        <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Reevaluation James' Utilitarian Argument for PBI</h2>
            <p>
              Both Aaron James and John Danaher deny the plausibility of work as a necessary means to achieve meaning-related goods,. The preceding text argues that survival is a necessary connection linking work to meaning-relating goods<sup style={styles.sup}>15,16</sup>. A new social contract prompted by precautionary basic income is shown to undermine the modern notion of survival, breaking this link, and thus inhibiting access to meaning-related goods and other positive characteristics associated with survival. Under these pretenses, the utilitarian framework by which James argues that PBI comes at a low cost compared to the risk of disproportionately allocated consequences from AI automation needs to be reevaluated. 
            </p>
            <br />
            <p>
              Social scientists have found eudaimonic well-being, centered on meaning and self-realization, to be essential for long-term mental health and life satisfaction<sup style={styles.sup}>17</sup>. Accordingly, prohibiting access to meaning-related goods presents a cost to human prosperity far greater than the financial barriers which James ascribes as the primary downside to implementing PBI. Despite the scope and disproportionate impact of AI-based automation, which is argued in the introduction to be quite strong, the upsides of PBI cannot justify its degradation of the human condition. Ergo, an alternative proposal to protect against AI-based automation must distribute the risk of AI without rewriting the social contract. 
            </p>
        </section>

         {/* In Conclusion: An Alternative Proposal */}
         <section style={styles.section}>
            <h2 style={styles.sectionTitle}>In Conclusion: An Alternative Proposal</h2>
            <p>
              The best precautionary measures utilize their speculative nature to effectively hedge risk. This principle is most evident in the rise of the hedge funds, and more generally, the investment strategy of hedging. Hedging is a precautionary measure that uses the condition it is trying to protect against (e.g. the decline of a stock) in providing protection for that event. The financial derivative known as the put option is commonly used for hedging. A put option enables the owner of the derivative to sell a stock at the previously agreed upon price even in the case that the stock has since declined below that point. Thus, the option only has value under the circumstance that the condition it is protecting against (the stock falling below a certain price) manifests itself. 
            </p>
            <br />
            <p>
              James' PBI fails to utilize the condition of the rise of AI-based automation in protecting against it. If the flourishing of the human race is dependent on AI not evolving to cause mass unemployment, a good strategy to protect against this event would utilize this circumstance in providing its protection. To this end, we note that the evolution of AI to the point of mass unemployment would likely be coupled with highly concentrated economic gains in a select group of technology companies. Therefore, a better precautionary measure would entail a public investment in the technology companies poised to facilitate this hypothetical extreme growth in AI. Under the condition that AI grows to cause mass unemployment, this investment will have experienced massive growth and consequently will be capable of providing temporary compensation for displaced workers. While the logistics of obtaining the capital for such a public investment, allocating the capital appropriately, and deciding when and how to distribute gains will require some creative thinking on the part of government and humanitarian leaders, this strategy has three key advantages compared to PBI. First, it uses the power of hedging to lessen the requisite financial commitment. Second, it can be more easily framed as a temporary measure designed to bridge the gap while displaced workers retrain for jobs where humanity retains a competitive advantage. Lastly, the lack of an income guarantee means that this approach does not necessitate rewriting the social contract. The notion of survival, as manifested in a modern sense by the workplace, can continue to survive as a positive influence on human behavior and a necessary link for the manifestation of meaning-related goods. 
            </p>
        </section>
        
        {/* Sources Section */}
        <section style={styles.sources}>
          <h3 style={styles.sectionTitle}>Sources</h3>
          <ol style={styles.sourceList}>
            <li>Robert J. Gordon, The Rise and Fall of American Growth: The U.S. Standard of Living Since the Civil War (Princeton, NJ: Princeton University Press, 2016). </li>
            <li>Yoon, Andre, and Kyoung Yeon Kim. “Why Large Language Models (Llms) Are the Future of Manufacturing.” World Economic Forum, April 23, 2024. https://www.weforum.org/agenda/2024/04/why-large-language-models-are-so-important-for-the-future-of-the-manufacturing-industry/#:~:text=Up%20to%2040%25%20of%20working,impact%20on%20the%20manufacturing%20sector.</li>
            <li>Manyika, James, Susan Lund, Michael Chui, Jacques Bughin, Lola Woetzel, Parul Batra, Ryan Ko, and Saurabh Sanghvi. “Jobs Lost, Jobs Gained: What the Future of Work Will Mean for Jobs, Skills, and Wages.” McKinsey & Company, November 28, 2017. https://www.mckinsey.com/featured-insights/future-of-work/jobs-lost-jobs-gained-what-the-future-of-work-will-mean-for-jobs-skills-and-wages.</li>
            <li>Ellingrud, Kweilin, Saurabh Sanghvi, Gurneet Singh Dandona, Anu Madgavkar, Michael Chui, Olivia White, and Paige Hasebe. “Generative AI and the Future of Work in America.” McKinsey & Company, July 26, 2023. https://www.mckinsey.com/mgi/our-research/generative-ai-and-the-future-of-work-in-america.</li>
            <li>James, Aaron. "Planning for mass unemployment: precautionary basic income." In Ethics of Artificial Intelligence, pp. 183-211. Oxford University Press, 2020.</li>
            <li>Danaher, John. "Automation and the Future of Work." (2021).</li>
            <li>Bui, Hong TM, Gordon Liu, Wai Wai Ko, and Amy Curtis. "Harmonious workplace climate and employee altruistic behavior: from social exchange perspective." International Journal of Manpower 42, no. 1 (2021): 95-112.</li>
            <li>Darwin, Charles. On the origin of species: A facsimile of the first edition. Harvard University Press, 1964.</li>
            <li>Barghouti, Zina, Jacob Guinot, and Ricardo Chiva. "Compassion and altruism in organizations: a path for firm survival." International Journal of Manpower 44, no. 9 (2023): 1-19.</li>
            <li>Solnit, Rebecca. A paradise built in hell: The extraordinary communities that arise in disaster. Penguin, 2010.</li>
            <li>Putnam, Robert D. Bowling Alone: The Collapse and Revival of American Community. New York: Simon & Schuster, 2000.</li>
            <li>Ashforth, Blake E., and Glen E. Kreiner. "“How can you do it?”: Dirty work and the challenge of constructing a positive identity." Academy of management Review 24, no. 3 (1999): 413-434.</li>
            <li>Sattler, Sebastian, Veljko Dubljević, and Eric Racine. "Cooperative behavior in the workplace: Empirical evidence from the agent-deed-consequences model of moral judgment." Frontiers in Psychology 13 (2023): 1064442.</li>
            <li>Weber, Max, and Stephen Kalberg. The Protestant ethic and the spirit of capitalism. Routledge, 2013.</li>
            <li>Joshanloo, Mohsen, Veljko Jovanović, and Tim Taylor. "A multidimensional understanding of prosperity and well-being at country level: Data-driven explorations." PloS one 14, no. 10 (2019): e0223221.</li>
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
