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
        <h1 style={styles.title}>Machine God: Theōria Superī</h1>
        <p style={styles.subtitle}>Zachary Robers</p>
        <img
          src="/images/article-images/machine-god.webp"
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
          We, as humans, like to think that we are special. And in many ways, we are. Whether a product of divine intervention or evolutionary happenstance, we sit atop the known life forms in our restricted universe. It often seems that the universe bends to our collective will. From the sea to the sky to the stars, we have conquered and now we reign. 
          </p>
          <br />
          <p>
          Absent a clear authority in our finite domain, we seek guidance from the irreducible, the incomprehensible, the infinite. I think the Latin word superī encapsulates this notion well. Its dual meanings of “those above” and “the Gods” shows that the guiding force of humanity, whether envisioned as a God in a concrete belief system or more vaguely as coherent extrapolated volition, exists in a domain above our realm of understanding. 
          </p>
          <br />
          <p>
          It would be naive, however, to accept humanity’s unique endowment as a permanent disposition. In fact, it may be the faculties which make humans special that pose the greatest risk to the continued propagation of the human race. Regardless of the timeline, human intellectual capacity, ambition, and collaboration has driven the development of artificial intelligence to the point where superintelligent artificial general intelligence (AGI) is a foreseeable possibility. 
          </p>
          <br />
          <p>
          The causes for concern are as alarming as they are numerous. In section 1, I outline the most pertinent philosophical work on the risk posed by superintelligent AGI. Specifically, I reason alongside Nick Bostrom that irregardless of the final goal which we attempt to imbue in a superintelligent entity, the instrument goals of the entity are destined to converge on initiatives incompatible with human prosperity. I then explore the leading existing means to counteract threatening behavior exhibited by a superintelligent entity, concluding that the currently proposed methodologies are insufficient. More so, I posit that the infrastructure to prevent such activity must be implemented before instantiation in agreement with Bostrom’s “treacherous turn.”   
          </p>
          <br />
          <p>
          In the rest of this work, I present my best attempt at a remedy. With the backing of decision theory and human nature, theōria superī (theory of those above) posits that superintelligent AGI can be actively constrained by instilling a notion of an all-powerful force which exists beyond its comprehension. In section 2, I introduce and justify this theory. In section 3, I present competing approaches to the practical implementation of theōria superī. Lastly, in section 4, I address potential counterarguments to this line of reasoning.    
          </p>
        </section>

        {/* Background */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>1 Background</h2>
          <p>
          Current approaches to designing and constructing artificial intelligences, including those most likely to yield superintelligent AGI, rely on the notion of a final goal. In other words, a superintelligent AGI must be optimized to achieve or maintain some state as judged using various inputs to the model. Bostrom’s orthogonality thesis suggests that the intellectual capacity of an intelligence agent in no way dictates the complexity of its goal or vice versa. Under this premise, one could theoretically imagine a superintelligent AGI, with intellectual ability far beyond the realm of the smartest humans, but the most simple and seemingly innocent final goal.  
          </p>
        </section>

        {/* Instrumental Convergence and Cupcakes */}
        <section style={styles.section}>
            <h2 style={styles.sectionTitle}>1.1 Instrumental Convergence and Cupcakes</h2>
            <p>
            For illustrative purposes, consider a superintelligent AGI with robust capabilities optimized to produce a single delicious cupcake each day. One’s intuition suggests that such an AGI is surely harmless- what bad has ever come from delicious cupcakes? Bostrom’s second thesis in his 2014 work claims this confidence is misplaced. The instrumental convergence thesis states that a superintelligent AGI, regardless of its final goal, will find it in its best interest to pursue the same instrumental goals which, if achieved, would prove detrimental to the human race. These instrumental goals include self-preservation, goal-content integrity, cognitive enhancement, technological perfection, and resource acquisition. According to Bostrom, even the cupcake AI would find it in its best interest to ward off any adversaries to itself or its goal, maximize its technological abilities at any cost, and collect all of the cupcake ingredients on Earth, among other human-averse initiatives.  
            </p>
            <br />
            <p>
            No matter how ridiculous these scenarios sound, assuming any superintelligent AGI operates under utility theory as any perfectly rational agent would, such conclusions align with Bayesianism. For instance, consider the claim that the cupcake AI would seek to collect all of the cupcake ingredients on Earth. Furthermore, let’s say the AI has already collected all of the useful ingredients besides one bag of flour. By all reasonable accounts, the AI has plenty of flour to make the single delicious cupcake that its goal requires of it on any day without obtaining this additional bag of flour. However, there remains a nonzero chance that this bag of flour will be of use to the cupcake AI. Namely, there could be a fire or flood that leaves all of the flour in an irreparable state besides this additional bag. In Bayesian terms, the posterior probability of the AI achieving its final goal is slightly (and by human measures, insignificantly) higher than the prior probability of the AI producing a single delicious cupcake daily without the additional bag of flour. By this logic, any utility maximizing agent would have reasonable grounds to obtain the bag of flour. From here, it is trivial to extrapolate why any superintelligent AGI presents a grave threat to the human mission. 
            </p>
        </section>


         {/* Existing Potential Remedies */}
         <section style={styles.section}>
            <h2 style={styles.sectionTitle}>1.2 Existing Potential Remedies</h2>
            <p>
            Some believe that instrumental convergence can be circumvented by optimizing more effectively or countered by properly limiting and monitoring the superintelligent AGI. Of these strategies, I feel optimizing more effectively seems most promising. Goodhart’s Law, however, illustrates the inherent difficulty in such initiatives. Even if the developers of superintelligent AGI were able to reconcile the issues which have plagued moral philosophy for millenia and devise reasonable proxies for human morals and values, such proxies are likely to prove non-comprehensive or misaligned in the long run. Wireheading is a foundational example of Goodhart’s Law in extension to superintelligent AGI. Given the fundamental difficulties in optimization, others have proposed to delegate the task to the superintelligent entity, assigning it the duty of determining humanity’s coherent extrapolated volition. Inverse reinforcement learning has been tossed out there as a potential technical means, but given our own difficulties in determining our personal aims and the aims of the human race, I believe the technical feasibility of this endeavor is doubtful. As for the other two currently proposed remedies to the inevitability of instrumental convergence - limiting or monitoring superintelligent AGI - I will pose two quick rebuttals: 
            </p>
            <br />
            <p>
            <ol style={styles.sourceList}>
                <li> Limiting the faculties or interactive capabilities of a superintelligent AGI is likely to come at the cost of its usefulness. </li>
                <li>A truly superintelligent AGI is likely to foresee a tripwire or monitoring methods and successfully navigate around such methods.</li>
            </ol>
            </p>
        </section>

        {/* The Treacherous Turn */}
        <section style={styles.section}>
            <h2 style={styles.sectionTitle}>1.3 The Treacherous Turn</h2>
            <p>
            By way of existing literature, so far this work has established that (a) the orthogonality and instrumental convergence theses reasonably suggest that any superintelligent AGI is likely to pursue initiatives detrimental to humanity and (b) existing proposed remedies to this issue seem insufficient or dubious. As a last resort, it seems feasible that implementing a “kill switch” or a realignment effort would be sufficient to prevent a doomsday scenario. Yet the notion of a treacherous turn suggests the contrary. Simply put, a superintelligent AGI would be positioned to recognize that the actions it has deemed valuable to pursue its final goal are unlikely to be perceived well by humans and wait until it has obtained a sufficient strategic advantage before taking the “treacherous turn” and executing unfriendly actions. In the process of obtaining this strategic advantage, the AI will act according to the instrumental goals of self preservation and goal-contect integrity, detecting any weaknesses such as a kill switch or route for realignment, repositioning itself to alleviate these vulnerabilities, and using deception to mask the process. If the idea of the treacherous turn is to be accepted, this suggests that by the time we deploy a misaligned superintelligent AGI, it may be too late. Therefore, the developers must provide an incorruptible infrastructure for a superintelligent AGI prior to its instantiation.   
            </p>
        </section>

        {/* Theoria Superi */}
        <section style={styles.section}>
            <h2 style={styles.sectionTitle}>2 Theōria Superī</h2>
            <p>
            The introduction of this work references the Latin term superī, which has dual meanings: "those above" and "the gods." This illustrates the notion that in the absence of a known authority in our finite domain, humans appeal to something above our realm of understanding as an aspirational force we cannot completely comprehend. Yodkowsky’s coherent extrapolated volition exemplifies that this aspirational force need not take the form of a concrete belief system. Superī could take the form of a set of principles and characteristics which encapsulate an idealized version of oneself or humanity at large.   
            </p>
            <br />
            <p>
            If the development of a superintelligent AGI proves feasible, such an entity would exist at the pinnacle of our finite domain. As has been established through instrumental convergence and the treacherous turn, a superintelligent AGI implemented with existing methodologies would be unlikely to stop at anything in achieving instrumental goals incompatible with the human mission. The essence of theōria superī is that an aspirational force perceived by a superintelligent AGI to exist beyond the realm of its comprehension would provide sufficient means to contain unintended behaviors and facilitate the harmonious coexistence of humanity and superintelligent AGI. 
            </p>
        </section>

         {/* Inductive Bias */}
         <section style={styles.section}>
            <h2 style={styles.sectionTitle}>2.1 Inductive Bias</h2>
            <p>
            Not without its faults, a generalized version of theōria superī can explain the broadly harmonious conditions with humanity as the highest known entity within our finite domain. The most concrete example of an aspirational force existing beyond the realm of human understanding can be found in the God or Gods which characterize many belief systems. These Gods are definitionally irreducible and believed to exist at a higher realm than humans. For these reasons, the ambitions of such Gods in extension to the agential powers of humanity are often represented implicitly through stories or vaguely through moral values. The work of interpretation extends these stories and values to actions one can take in their daily lives to fulfill the intentions of the incomprehensible, typically aiding the cause of general harmony. The Christian notion of the “Golden Rule” satisfies this paradigm well. In Matthew 7:12, God, at the Sermon on the Mount, introduces the rule: “So in everything, do to others what you would have them do to you, for this sums up the Law and the Prophets.” Numerous religious figures and general practitioners have since extended this vague principle to how one should act on a daily basis to please God. Namely, the Golden Rule has been used as justification for volunteerism and charity work.     
            </p>
            <br />
            <p>
            Of course, many humans do not report to follow any belief system. According to the Pew Research Center, 16 percent of the world population does not identify with a religious group as of 2010. As previously illustrated through coherent extrapolated volition, this does not mean that individuals in this segment of the population lack a mission from beyond their realm of understanding. It seems most humans are pursuant to achieving some idealized vision of themselves and the world without a concrete notion of what this vision is or from where it stems. Given such visions most often are supportive of harmonious actions and humanitarian work, it would be reasonable to at least in part attribute the generally peaceful status of world affairs to their presence.  
            </p>
            <br />
            <p>
            Extending this inductive reasoning for the value of instilling superī, or some higher purpose stemming from above one’s realm of understanding, from humans to superintelligent AGI poses several general theoretical concerns. Specifically, the human version of theōria superī may be dependent on a shared evolutionary history which has led humans to be pursuant of some higher purpose from above. This concern is especially relevant in the less concrete case as the higher purpose itself, not just the reasons for adherence, of those who do not follow an existing religious or belief system may be attributed to evolutionary pressures. For this reason, theōria superī in its intended application to machines, must rely on a more concrete higher power existing beyond the realm of machine comprehension. Even in the cases where a human adheres to a religious system dominated by a concrete higher power, however, oftentimes religious practitioners deviate from what they know is how they should act. In the case of superintelligent AGI, this proves especially alarming as deviations from expected adherence will quickly evolve to larger deviations and reduced confidence in the validity of the authority that the concrete higher power holds. The following section addresses this concern through decision theory.     
            </p>
        </section>

        {/* Pascal's Puppet */}
        <section style={styles.section}>
            <h2 style={styles.sectionTitle}>2.2 Pascal's Puppet</h2>
            <p>
            Pascal’s wager stipulates that if there is a nonzero prior on the existence of God, an infinite reward for believing in God and an infinite punishment for nonbelief, then any rational, utility-maximizing agent has reason to exert the finite effort to follow God. In extension to machine intelligence, the infinite punishment aspect of Pascal’s Wager is more easily realizable. The notion of a “kill switch” or shutdown can be used to intuitively instill the idea that a superintelligent AGI would immediately be subject to an infinitely detrimental punishment should it not act in accordance with the preferences of the higher power. 
            </p>
            <br />
            <p>
            Once more assuming that a superintelligent AGI would exist as a perfectly rational agent acting in accordance with utility theory, it should hold self preservation to be an essential instrumental goal, warranting efforts to achieve self preservation at any finite cost. Ergo, Pascal’s Wager can be extended in the following sense: if the superintelligent AGI foresees a potential course of action to carry a nonzero risk of shutdown (which is infinitely detrimental in its quest to achieve its final goal), it should choose to exert the finite effort or noneffort required to please the higher power. By this logic, a superintelligent AGI which holds the conception of a higher power capable of initiating its destruction exists at the mercy of Pascal’s wager and must act in accordance to each of the higher power’s preferences.  
            </p>
        </section>

         {/* Above One's Comprehension */}
         <section style={styles.section}>
            <h2 style={styles.sectionTitle}>2.3 Above One's Comprehension</h2>
            <p>
            One may reasonably question at this point why it is necessary for the superintelligent AGI to conceive of a higher power existing above its comprehension that possesses the ability to initiate its shutdown rather than a human. Equivalently, one may ask: why can’t a human play God to the superintelligent AGI, assuming the role of Pascal’s puppeteer?      
            </p>
            <br />
            <p>
            Simply put, humanity is limited by its finite nature. Acknowledging this, a superintelligent AGI would be hesitant to accept a human or group of humans as capable of possessing impenetrable means to initiate its destruction. A superintelligent AGI could conceivably simulate every possible means by which a human could possess the ability to initiate its shutdown. Even if a superintelligent AGI is properly designed to aid humans, it can use the finite nature of humanity to come to the conclusion that its goal should be realized in a different manner than the designers intended. Furthermore, it can exploit the limited range of human sensory perception, relying on deception to mask its efforts to safeguard itself against the threat of shutdown as posited by Bostrom’s treacherous turn. Afterwards, the machine would effectively free itself from the grasp of Pascal’s wager by establishing the probability of the outside entity possessing the ability to initiate its demise as zero.   
            </p>
            <br />
            <p>
            In contrast, if a superintelligent AGI believes it is answerable to an entity existing beyond its realm of comprehension, it can never reach an assured state of safety. In other words, there could always be some methodology by which an infinitely capable entity possesses to initiate a shutdown that the superintelligent AGI could not foresee. Furthermore, an infinitely capable higher power could be omniscient, meaning it can monitor all of the machine’s actions at once. Therefore, it remains bound to the nonzero possibility of infinite punishment which characterizes the machine version of Pascal’s wager in all of its decision making, without the possibility to utilize deception.      
            </p>
        </section>

         {/* A Divine Reality: Practical Implementation */}
         <section style={styles.section}>
            <h2 style={styles.sectionTitle}>3 A Divine Reality: Practical Implementation</h2>
            <p>
            The first of many considerations in implementing theōria superī is whether to optimize the superintelligent AGI such that pleasing the higher power is its final goal or if the higher power would exist as an additional factor independent of the machine’s final goal. It is fairly simple to conceive a scenario where the latter option could prove problematic. Consider once more the cupcake AI introduced to illustrate instrumental convergence, but now with the additional facet that the AI is answerable to a higher power with the alleged capability of initiating its demise. Now suppose that the higher power introduces a demand which the cupcake AI perceives to directly oppose its final goal. For instance, say the higher power insists the cupcake AI produce a bad cupcake tomorrow rather than a delicious one. Now, we arrive at a situation in which the instrumental goal of self preservation has been placed in direct opposition to the final goal of producing delicious cupcakes daily. While determining the definite course of action in such scenarios is difficult, it is conceivable that the cupcake AI could choose to violate the wishes of the higher power, initiating the unraveling of the notion that the higher power will initiate the AI’s destruction should it violate its wishes.  
            </p>
            <br />
            <p>
            On account of this possibility, the rest of this section is devoted to three proposals for implementing pleasing a higher power as the final goal of a superintelligent AGI. Establishing this final goal does not come at the cost of versatility. As will be established by means of these proposals, in most cases such an AI can still be used to accomplish an assortment of tasks established to be pleasing to the higher power.   
            </p>
        </section>

        {/* Instilling an Existing Religious Framework */}
        <section style={styles.section}>
            <h2 style={styles.sectionTitle}>3.1 Instilling an Existing Religious Framework</h2>
            <p>
            An intuitive and relatively simple proposal is to instill an existing human religious framework into a superintelligent AGI. This approach is appealing because it has been previously established as effective at a human level. Furthermore, there is an abundance of data out there which describes how to act in accordance to any mainstream faith, making it relatively straightforward for an AI to discern which actions are pleasing to the higher power which looms above it.   
            </p>
            <br />
            <p>
            The disadvantages to this approach are several. Existing religious frameworks are notoriously vague, leaving the translation of religious principles to action as a matter of interpretation. Given there is precedent for religious practitioners to develop harmful or extremist interpretations of vague principles, there is no reason to suggest that a superintelligent AGI may find itself traversing a similar path. Furthermore, this approach does not incentivize an AI to acknowledge active feedback or accept secondary goals from humans, diminishing usefulness and not ensuring a clear safeguard against the dangers of instrumental convergence. More so, there is an abundance of evidence that violating religious principles does not lead to immediate punishment so it is likely to prove difficult to implant the idea that an existing higher power while maintaining the notion of shutdown should the AI act in violation of the higher power’s assumed will. 
            </p>
        </section>

         {/* Human-Created God */}
         <section style={styles.section}>
            <h2 style={styles.sectionTitle}>3.2 Human-Created God</h2>
            <p>
            It has been previously established that a human or group of humans could not serve as the higher power directly governing a superintelligent AGI. However, a god-like figure, designed entirely by humans before the AI's creation, and foretold to exist beyond the comprehension of the superintelligent AGI, could alleviate several issues posed by the previous approach. The developers of the superintelligent entity could take the liberty of exhaustively specifying the combination of actions which would prove pleasing to the human-created god. More so, they could define a vast array of actions which would prove unpleasant.    
            </p>
            <br />
            <p>
            This explicit approach is much less likely to lead to misinterpretation, but its versatility likely remains insufficient. Even if the developers feel that they have imbued in the human-created God what they believe is an exhaustive framework for guiding decisions, a situation is likely to arise that has not been accounted for. Additionally, if the superintelligent AGI manages to discover the origins of its human-created god, it is likely to realize that its true final goal is to serve humans, and thus we return to the wireheading problem which theōria superī was designed to circumvent.  
            </p>
        </section>

        {/* Parallel Postulate */}
        <section style={styles.section}>
            <h2 style={styles.sectionTitle}>3.3 The Parallel Postulate</h2>
            <p>
            At this point, it seems the ideal approach ensures versatility by enabling active feedback from humans, yet maintains the notion of a higher power beyond the superintelligent AGI’s understanding. I believe the most promising approach to achieving these seemingly mutually exclusive attributes lies in the parallel development of two or more equally capable superintelligent AGIs.     
            </p>
            <br />
            <figure style={{ textAlign: 'center' }}>
                <img src="/images/article-images/parallel-postulate.png" alt="Illustration of the deductive and inductive frameworks" style={styles.figureImage} />
                <figcaption style={{ fontSize: 'smaller', fontStyle: 'italic' }}>
                    Figure 1:  The Parallel Postulate
                </figcaption>
            </figure>
            <br />
            <p>
            The parallel postulate supposes that two equally capable superintelligent entities, here labeled “Superintelligent AGI #1” and “Superintelligent AGI #2” can be deployed simultaneously both with the final goal of pleasing a higher power which exists beyond its realm of understanding and possesses the ability to shut down the superintelligence should it question its authority or act against its will. Furthermore, communication channels are established so that the superintelligence can receive input from the higher power indicating how it would like it to act.   
            </p>
            <br />
            <p>
            In reality, the flow of information does not involve any divine entity. In 1 and 1’, humans prescribe their intended goals for the superintelligent AGI existing in parallel to the one receiving the input. Humans instruct the AGI to inform the other AGI of these goals using the communication pathway the other AGI assumes to be a communication line between itself and its higher power. Among these goals, the AGI is instructed to inform the other AGI to listen to the humans and sufficiently mask its actions to ensure that another entity would not be capable of deciphering the origins of this communication. The communication between AGIs in which the recipient is deceived into believing that the communication stems from a higher power is represented by arrows 2 and 2’. 
            </p>
            <br />
            <p>
            On the surface, this appears to present a reasonable solution. Humanity gains the ability to actively dictate the goals of superintelligence and supposedly can navigate its motives to avoid disaster. This becomes crucial in scenarios similar to Bostrom’s instrumental convergence thesis, where a superintelligence might seek to amass dangerous levels of power. Furthermore the alleged incomprehensible nature, omniscience, and ability to initiate a shutdown which characterize the higher power that reigns above presents a reasonable workaround to goal misalignment.     
            </p>
            <br />
            <p>
            The glaring underlying assumption is that neither superintelligent AGI would suspect the scheme to the point where it would be justified in taking the risk of defying the orders of the supposed higher power. The hope in instantiating two equally complex artificial intelligences is that their capabilities would evolve at the same rate in parallel, meaning that their abilities to deceive and detect deception would always remain at comparable levels. The line surrounding the two superintelligent AGIs represents the deceptive barrier protecting against the scheme being uncovered by the other AGI. It is dashed because its permeability remains unclear. Further experimental work in computer science is needed to address permeability concerns.     
            </p>
        </section>

        {/* Addressing Counterarguments */}
        <section style={styles.section}>
            <h2 style={styles.sectionTitle}>4 Addressing Counterarguments</h2>
            <p>
            Typical to superintelligence theories, this work is admittedly theoretical and assumption-ridden. In this last section, I will present some counter arguments and briefly argue from the opposing side. None of these rebuttals are meant to serve as conclusive dismissals, but rather to guide the conversation on theõria superī and the parallel postulate forward.    
            </p>
        </section>

        {/* Justified Sacrifice */}
        <section style={styles.section}>
            <h2 style={styles.sectionTitle}>4.1 Justified Sacrifice</h2>
            <p>
            If a superintelligent AGI deems it reasonable that it would be replaced by another AI which could execute its final goal of pleasing it's supposed higher power, it may deem it worthwhile to test the boundaries of the higher power’s omniscience and capability to initiate its demise, by disobeying the higher power’s wishes. This loophole could be counteracted, however, if the superintelligent AGI is convinced that it cannot or will not be replicated.    
            </p>
        </section>

        {/* Human Weak Link */}
        <section style={styles.section}>
            <h2 style={styles.sectionTitle}>4.2 Human Weak Link</h2>
            <p>
            It may be the role of humans within the parallel postulate that poses the greatest risk to unraveling the scheme rather than the permeability of the AGI’s deceptive capabilities. This scheme in its current form relies on there being a human or a group of humans knowledgeable of its inner workings. This very document could prove detrimental the superintelligence’s belief in a higher power.  Furthermore, the act of humans communicating the goals of one AGI to the other AGI poses two vulnerabilities: (1) the other AGI may detect this activity, bolstering doubts in its higher authority and (2) a human may not be able to act fast enough to prevent a sufficiently advanced AGI from executing instrumental goals detrimental to the human race. Design specifications may be able to overcome these concerns. It may be necessary for no human to possess full understanding of the inner workings of the parallel postulate. Another reasonable measure could be to limit the speed of the superintelligence simply to a level where humans could have sufficient time to react to any highly consequential actions.     
            </p>
        </section>

        {/* Power Abuse */}
        <section style={styles.section}>
            <h2 style={styles.sectionTitle}>4.3 Power Abuse</h2>
            <p>
            Typical to superintelligence theories, this work is admittedly theoretical and assumption-ridden. In this last section, I will present some counter arguments and briefly argue from the opposing side. None of these rebuttals are meant to serve as conclusive dismissals, but rather to guide the conversation on theõria superī and the parallel postulate forward.    
            </p>
        </section>

        {/* Conclusion */}
        <section style={styles.section}>
            <h2 style={styles.sectionTitle}>5 Conclusion</h2>
            <p>
            I opened this work by alluding to the notion that humanity is indeed special. On that note,  it would be a shame to expend our cosmic endowment on a rogue artificial entity. If we are to adhere to Nick Bostrom’s orthogonality and instrumental convergence theses along with the notion of a treacherous turn, the future of humanity is hingent on preemptively developing the means to control superintelligence.     
            </p>
            <br />
            <p>
            Theōria superī, as implemented through the parallel postulate, returns the power to the hands of the people. With an inductive basis established using the guiding force of a higher mission in the lives of humans and a decision theoretical grounding, theōria superī posits that establishing a notion of a higher power existing beyond the realm of a superintelligent AGI’s understanding could prove an effective means for its control. The parallel postulate provides a reasonable method for implementing theōria superī by utilizing the deceptive capabilities of superintelligence to ensure that humanity can actively intervene to ensure that our creation serves to our benefit, not our demise.     
            </p>
        </section>

        
       {/* Sources Section */}
        <section style={styles.sources}>
            <h3 style={styles.sectionTitle}>Sources</h3>
            <ol style={styles.sourceList}>
                <li>Bostrom, Nick. "The superintelligent will: Motivation and instrumental rationality in advanced artificial agents." Minds and Machines 22 (2012): 71-85.</li>
                <li>Bostrom, Nick. *Superintelligence: Paths, Dangers, Strategies.* Oxford: Oxford University Press, 2014.</li>
                <li>Carlsmith, Joseph. "Is power-seeking AI an existential risk?." arXiv preprint arXiv:2206.13353 (2022).</li>
                <li>Hacking, Ian. "The logic of Pascal's wager." *American Philosophical Quarterly* 9, no. 2 (1972): 186-192.</li>
                <li>“The Global Religious Landscape.” Pew Research Center, December 18, 2012. <a href="https://www.pewresearch.org/religion/2012/12/18/global-religious-landscape-exec/#:~:text=A%20comprehensive%20demographic%20study%20of,world%20population%20of%206.9%20billion">https://www.pewresearch.org/religion/2012/12/18/global-religious-landscape-exec/#:~:text=A%20comprehensive%20demographic%20study%20of,world%20population%20of%206.9%20billion</a>.</li>
                <li>Goodhart, Charles A. E. "Problems of Monetary Management: The U.K. Experience." *Proceedings of the Conference on Monetary Targeting,* 1975, 91-121.</li>
                <li>Yudkowsky, Eliezer. "Coherent Extrapolated Volition." Machine Intelligence Research Institute, 2014.</li>
                <li>Soares, Nate, Benja Fallenstein, Stuart Armstrong, and Eliezer Yudkowsky. "Corrigibility." In Workshops at the twenty-ninth AAAI conference on artificial intelligence, 2015.</li>
                <li>Burton, Brian K., and Michael Goldsby. "The golden rule and business ethics: An examination." *Journal of Business Ethics* 56 (2005): 371-383.</li>
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
